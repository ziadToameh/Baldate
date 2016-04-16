using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for NewsLetterUsersRepository
/// </summary>
public class NewsLetterUsersRepository
{
    MuniDataContext _db;

	public NewsLetterUsersRepository()
    {
        _db = new MuniDataContext();
	}

    public IEnumerable<NewsLetterUser> GetAll()
    {
        return (from n in _db.NewsLetterUsers select n).ToList();
    }

    public bool Add(NewsLetterUser user)
    {
        if (IsSubscribed(user.Email)) return true;

        try
        {
            _db.NewsLetterUsers.InsertOnSubmit(user);
            _db.SubmitChanges();
        }
        catch
        {
            return false;
        }
        return true;
    }

    public bool IsSubscribed(string email)
    {
        email = email.ToLower();
        var res = (from user in _db.NewsLetterUsers where user.Email.ToLower() == email select user).FirstOrDefault();
        if (res == null) return false;
        return true;
    }
    
    public bool UnSubscribe(string email)
    {
        var res = (from user in _db.NewsLetterUsers where user.Email.ToLower() == email select user).FirstOrDefault();

        if (res == null) return true;

        try
        {
            _db.proc_UnSubscribeUser(res.Id);
        }
        catch
        {
            return false;
        }
        return true;
    }
}