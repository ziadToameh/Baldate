using System;
using System.Collections.Generic;
using System.Data.Linq;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for LinkRepository
/// </summary>
public class LinkRepository
{
     MuniDataContext _db;

    public LinkRepository()
    {
        _db = new MuniDataContext();
    }
    public Link GetById(int pId)
    {
        return (from n in _db.Links where n.Id == pId select n).FirstOrDefault();
    }

    public IEnumerable<Link> GetAll()
    {
        return (from n in _db.Links select n).ToList();
    }

    public bool Add(Link n)
    {
        try
        {
            _db.Links.InsertOnSubmit(n);
            _db.SubmitChanges();
        }
        catch
        {
            return false;
        }
        return true;
    }


    public bool Edit(Link newAd)
    {
        var existingArticle = GetById(newAd.Id);
        existingArticle.Link1 = newAd.Link1;
        existingArticle.Name = newAd.Name;
        existingArticle.Image = newAd.Image;

        _db.SubmitChanges();

        return true;
    }
    public bool Delete(int id)
    {
        try
        {
            var existing = GetById(id);
            _db.Links.DeleteOnSubmit(existing);
            _db.SubmitChanges();
        }
        catch
        {
            return false;
        }
        return true;
    }
}