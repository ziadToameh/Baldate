using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for NewsLetterRepository
/// </summary>
public class NewsLetterRepository
{
    MuniDataContext _db;

    public NewsLetterRepository()
    {
        _db = new MuniDataContext();

    }

    public NewsLetter GetById(int pId)
    {
        return (from n in _db.NewsLetters where n.Id == pId select n).FirstOrDefault();
    }
    public IEnumerable<NewsLetter> GetAll()
    {
        return (from n in _db.NewsLetters select n).ToList();
    }


    public bool Add(NewsLetter n)
    {
        try
        {
            _db.NewsLetters.InsertOnSubmit(n);
            _db.SubmitChanges();
        }
        catch
        {
            return false;
        }
        return true;
    }

    public bool Edit(NewsLetter newItem)
    {
        var existingEvent = GetById(newItem.Id);
        existingEvent.Title = newItem.Title;
        existingEvent.Content = newItem.Content;

        _db.SubmitChanges();

        return true;
    }

    public bool Delete(int id)
    {
        try
        {
            _db.proc_NewsLetterDelete(id);
            //_db.Events.DeleteOnSubmit(eventToDelete);
        }
        catch
        {
            return false;
        }
        return true;
    }

}