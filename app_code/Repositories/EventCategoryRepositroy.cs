using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for EventCategoryRepositroy
/// </summary>
public class EventCategoryRepositroy
{
    MuniDataContext _db;
    public EventCategoryRepositroy()
    {
        _db = new MuniDataContext();

    }
    public EventCategory GetById(int id)
    {
        return (from n in _db.EventCategories where n.Id == id select n).FirstOrDefault();
    }

    public IEnumerable<EventCategory> GetAll()
    {
        return (from n in _db.EventCategories select n).ToList();
    }
    public IEnumerable<EventCategory> GetAllWithoutHomeAds()
    {
        return (from n in _db.EventCategories where n.Id < 31 select n).ToList();
    }

    public IEnumerable<EventCategory> GetAllWithHomeAds()
    {
        return (from n in _db.EventCategories where n.Id >= 31 select n).ToList();
    }
   
}