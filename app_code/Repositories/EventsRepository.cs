using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace app_code.Repositories
{
    /// <summary>
    /// Summary description for EventsRepository
    /// </summary>
    public class EventsRepository
    {
        MuniDataContext _db;
        public EventsRepository()
        {
            _db = new MuniDataContext();

        }

        public Event GetById(int pId)
        {
            return (from n in _db.Events where n.Id == pId select n).FirstOrDefault();
        }

        public IEnumerable<Event> GetAll()
        {
            return (from n in _db.Events select n).ToList();
        }

        public IEnumerable<Event> GetTakeByCategoryId(int pId, int take)
        {
            return _db.proc_GetEvents(pId, take);
            //return (from n in _db.Events where n.CategoryId == pId select n).ToList().Take(take);
        }
        public IEnumerable<Event> GetByCategoryId(int pId)
        {
            return (from n in _db.Events where n.CategoryId == pId select n).ToList();
        }
        public IEnumerable<EventListCounter> GetByCategoryIdWithCount(int pId)
        {
            return (from n in _db.Events
                    where n.CategoryId == pId
                    select
                        new EventListCounter
                        {
                            Id = n.Id,
                            Name_Ar = n.Name_Ar,
                            CategoryId = n.CategoryId ?? 0,
                            DateAdded = n.DateAdded,
                            ActiveComments = n.EventComments.Where(c => c.IsActivated == true).Count(),
                            InActiveComments = n.EventComments.Where(c => c.IsActivated == false).Count(),
                            TotalComments = n.EventComments.Count
                        }
                        ).ToList();
        }

        public IEnumerable<EventListCounter> GetByCategoryIdByYearWithCount(int pId, int y)
        {
            return (from n in _db.Events
                    where n.CategoryId == pId && n.DateAdded.Value.Year == y
                    select
                        new EventListCounter
                        {
                            Id = n.Id,
                            Name_Ar = n.Name_Ar,
                            CategoryId = n.CategoryId ?? 0,
                            DateAdded = n.DateAdded,
                            ActiveComments = n.EventComments.Where(c => c.IsActivated == true).Count(),
                            InActiveComments = n.EventComments.Where(c => c.IsActivated == false).Count(),
                            TotalComments = n.EventComments.Count
                        }
                        ).ToList();
        }

        public IEnumerable<EventListCounter> GetByCategoryIdByMonthYearWithCount(int pId, int m, int y)
        {
            return (from n in _db.Events
                    where (pId == -1 || n.CategoryId == pId) && n.DateAdded.Value.Month == m && n.DateAdded.Value.Year == y
                    select
                        new EventListCounter
                        {
                            Id = n.Id,
                            Name_Ar = n.Name_Ar,
                            CategoryId = n.CategoryId ?? 0,
                            DateAdded = n.DateAdded,
                            ActiveComments = n.EventComments.Where(c => c.IsActivated == true).Count(),
                            InActiveComments = n.EventComments.Where(c => c.IsActivated == false).Count(),
                            TotalComments = n.EventComments.Count
                        }
                        ).ToList();
        }

        public int Add(Event n)
        {
            int id = 0;
            try
            {
                n.DateAdded = DateTime.Now;
                _db.Events.InsertOnSubmit(n);
                _db.SubmitChanges();
                id = n.Id;
            }
            catch
            {
                return id;
            }
            return id;
        }


        public bool Edit(Event newEvent)
        {
            var existingEvent = GetById(newEvent.Id);
            existingEvent.Name = newEvent.Name;
            existingEvent.Detail = newEvent.Detail;
            existingEvent.Name_Ar = newEvent.Name_Ar;
            existingEvent.Detail_Ar = newEvent.Detail_Ar;
            existingEvent.DateAdded = newEvent.DateAdded;
            existingEvent.ProfileImage = newEvent.ProfileImage;
            existingEvent.Brief = newEvent.Brief;
            existingEvent.CategoryId = newEvent.CategoryId;

            _db.SubmitChanges();

            return true;
        }



        public bool Delete(int id)
        {
            try
            {
                DeleteEventImage(id);
                _db.proc_EventDelete(id);
                //_db.Events.DeleteOnSubmit(eventToDelete);
            }
            catch
            {
                return false;
            }
            return true;
        }

        public void DeleteEventImage(int eventId)
        {
            try
            {
                string tempPath = "";
                tempPath = System.Configuration.ConfigurationManager.AppSettings["FolderEventPath"] + @"\" +
                           eventId.ToString();

                Directory.Delete(HttpContext.Current.Server.MapPath(tempPath), true);
            }
            catch (Exception e)
            {
            }

        }


        public IEnumerable<vw_HomeEvent> GetHome()
        {
            return (from n in _db.vw_HomeEvents select n).OrderByDescending(n => n.DateAdded).ToList();
        }

        public IEnumerable<vw_HomeEvent> GetHomeByCat(int catId)
        {
            return (from n in _db.vw_HomeEvents where n.CategoryId == catId select n).OrderByDescending(n => n.DateAdded).ToList();
        }

        public IEnumerable<vw_EventsImage> GetAllWithImages()
        {
            return (from n in _db.vw_EventsImages select n).OrderBy(n => n.CategoryId).OrderByDescending(n => n.DateAdded).ToList();
        }

        public IEnumerable<vw_EventsImage> GetAllWithImages(int catId)
        {
            return (from n in _db.vw_EventsImages where n.CategoryId == catId select n).OrderByDescending(n => n.DateAdded).ToList();
        }

        public IEnumerable<vw_EventsImage> GetFewWithImagesByCatId(int catId, int take)
        {
            return _db.proc_GetEventsByCat(catId, take);
            // return (from n in _db.vw_EventsImages where n.CategoryId == catId select n).OrderByDescending(n => n.Id).ToList().Take(take);
        }

        public IEnumerable<vw_EventsImage> GetAllWithImagesByCatId(int catId)
        {
            return (from n in _db.vw_EventsImages where n.CategoryId == catId select n).OrderByDescending(n => n.DateAdded).ToList();
        }

        public vw_EventsImage GetByIdWithImages(int id)
        {
            return (from n in _db.vw_EventsImages where n.Id == id select n).FirstOrDefault();
        }


        public IEnumerable<vw_EventsImage> GetByDate(DateTime d, int catId)
        {
            //var day = d.Month;
            //var m = d.Day;

            if (catId == -1)
            {
                return (from n in _db.vw_EventsImages where n.DateAdded.Value.Year == d.Year && n.DateAdded.Value.Month == d.Month && n.DateAdded.Value.Day == d.Day select n).ToList();
            }
            else
            {
                return (from n in _db.vw_EventsImages where n.CategoryId == catId && n.DateAdded.Value.Year == d.Year && n.DateAdded.Value.Month == d.Month && n.DateAdded.Value.Day == d.Day select n).ToList();
            }
        }

    }
}