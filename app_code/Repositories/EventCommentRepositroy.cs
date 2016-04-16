using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for EventCommentRepositroy
/// </summary>
public class EventCommentRepositroy
{
    MuniDataContext _db;

    public EventCommentRepositroy()
    {
        _db = new MuniDataContext();
    }

    public EventComment GetById(int pId)
    {
        return (from n in _db.EventComments where n.Id == pId select n).FirstOrDefault();
    }

    public IEnumerable<EventComment> GetAll()
    {
        return (from n in _db.EventComments select n).ToList();
    }

    public IEnumerable<EventComment> GetUnApproved()
    {
        return (from n in _db.EventComments where n.IsActivated == false select n).ToList();
    }

    public IEnumerable<EventComment> GetByEventId(int pId)
    {
        return (from n in _db.EventComments where n.EventId == pId select n).ToList();
    }

    public IEnumerable<EventComment> GetByApprovedEventId(int pId)
    {
        return (from n in _db.EventComments where n.EventId == pId && n.IsActivated == true select n).ToList();
    }

    public int Add(EventComment n)
    {
        try
        {
            n.DateAdded = DateTime.Now;
            n.IsActivated = false;
            _db.EventComments.InsertOnSubmit(n);
            _db.SubmitChanges();
            return n.Id;
        }
        catch
        {
            return -1;
        }
    }


    public bool Edit(EventComment newEvent)
    {
        var existingEvent = GetById(newEvent.Id);
        existingEvent.Username = newEvent.Username;
        existingEvent.Email = newEvent.Email;
        existingEvent.Comment = newEvent.Comment;

        _db.SubmitChanges();

        return true;
    }

    public bool SetApproveStatus(int id, bool pApprove)
    {
        var existingEvent = GetById(id);
        existingEvent.IsActivated = pApprove;

        _db.SubmitChanges();

        return true;
    }

    public bool Delete(int id)
    {
        try
        {
            var eventToDelete = GetById(id);
            _db.EventComments.DeleteOnSubmit(eventToDelete);
            _db.SubmitChanges();
        }
        catch
        {
            return false;
        }
        return true;
    }
}