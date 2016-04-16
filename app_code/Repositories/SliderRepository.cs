using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for SliderRepository
/// </summary>
public class SliderRepository
{
    MuniDataContext _db;
    public SliderRepository()
    {
        _db = new MuniDataContext();
    }
    public SliderImage GetById(int pId)
    {
        return (from n in _db.SliderImages where n.Id == pId select n).FirstOrDefault();
    }

    public IEnumerable<SliderImage> GetAll()
    {
        return (from n in _db.SliderImages select n).OrderByDescending(n => n.Id).ToList();
    }


    public bool Add(SliderImage n)
    {
        try
        {
            _db.SliderImages.InsertOnSubmit(n);
            _db.SubmitChanges();
        }
        catch
        {
            return false;
        }
        return true;
    }


    public bool Edit(SliderImage newItem)
    {
        var existingItem = GetById(newItem.Id);
        existingItem.Name = newItem.Name;
        existingItem.Description = newItem.Description;

        _db.SubmitChanges();

        return true;
    }
    public bool Delete(int id)
    {
        try
        {
            var img = GetById(id);
            DeleteImage(id, img.Name);
            _db.SliderImages.DeleteOnSubmit(img);
            _db.SubmitChanges();
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
            tempPath = System.Configuration.ConfigurationManager.AppSettings["FolderPathSliderDynamic"] + @"\" + eventId + @"\" + imageName;

            File.Delete(HttpContext.Current.Server.MapPath(tempPath));
        }
        catch (Exception e)
        {
        }

    }
}