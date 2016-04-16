using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for SponsorsRepository
/// </summary>
public class SponsorsRepository
{
    MuniDataContext _db;
	public SponsorsRepository()
    {
        _db = new MuniDataContext();
    }
    public Sponsor GetById(int pId)
    {
        return (from n in _db.Sponsors where n.Id == pId select n).FirstOrDefault();
    }

    public IEnumerable<Sponsor> GetAll()
    {
        return (from n in _db.Sponsors select n).ToList();
    }


    public bool Add(Sponsor n)
    {
        try
        {
            _db.Sponsors.InsertOnSubmit(n);
            _db.SubmitChanges();
        }
        catch
        {
            return false;
        }
        return true;
    }


    public bool Edit(Sponsor newSponsors)
    {
        var existingArticle = GetById(newSponsors.Id);
        existingArticle.Link = newSponsors.Link;
        existingArticle.Image = newSponsors.Image;
        existingArticle.Description = newSponsors.Description;

        _db.SubmitChanges();

        return true;
    }
    public bool Delete(int id)
    {
        try
        {
            DeleteSponsorImage(id);
            _db.proc_SponsorsDelete(id);

        }
        catch
        {
            return false;
        }
        return true;
    }
    public void DeleteSponsorImage(int eventId)
    {
        try
        {
            string tempPath = "";
            tempPath = System.Configuration.ConfigurationManager.AppSettings["FolderPathSponsor"] + @"\" +
                       eventId.ToString();

            Directory.Delete(HttpContext.Current.Server.MapPath(tempPath), true);
        }
        catch (Exception e)
        {
        }

    }
}