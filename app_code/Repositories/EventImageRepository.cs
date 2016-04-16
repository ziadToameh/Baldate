using System;
using System.Data;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
using System.Collections.Generic;
using System.IO;

namespace app_code.Repositories
{
    /// <summary>
    /// Summary description for EventImageRepository
    /// </summary>
    public class EventImageRepository
    {
        MuniDataContext _db;
        public EventImageRepository()
        {
        
            _db = new MuniDataContext();
        }

        public IEnumerable<EventImage> GetByEventId(int pId)
        {
            return (from n in _db.EventImages where n.EventId == pId select n).ToList();
        }

        public IEnumerable<EventImage> GetByEventIdGroupId(int pId, int gId)
        {
            return (from n in _db.EventImages where n.EventId == pId select n).ToList();
            // return (from n in _db.EventImages where n.EventId == pId && n.ImageGroup == gId select n).ToList();
        }

        public EventImage GetById(int id)
        {
            return (from n in _db.EventImages where n.Id == id select n).FirstOrDefault();
        }

        public bool Add(EventImage img)
        {
            try
            {
                _db.EventImages.InsertOnSubmit(img);
                _db.SubmitChanges();
            }
            catch
            {
                return false;
            }
            return true;
        }

        public bool Delete(int id)
        {
            try
            {
                // delete from folder
                var image = GetById(id);
                DeleteImage(image.EventId ?? 0, image.Name);
                _db.proc_EventImageDelete(id);
            }
            catch
            {
                return false;
            }
            return true;
        }
        public void DeleteImage(int eventId, string imageName)
        {
            try
            {
                string tempPath = "";
                tempPath = System.Configuration.ConfigurationManager.AppSettings["FolderEventPath"] + @"\" + eventId.ToString() + @"\" + imageName;

                File.Delete(HttpContext.Current.Server.MapPath(tempPath));
            }
            catch (Exception e)
            {
            }

        }

    }
}