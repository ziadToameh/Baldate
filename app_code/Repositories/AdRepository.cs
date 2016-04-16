using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for AdRepository
/// </summary>
public class AdRepository
{
    MuniDataContext _db;
	public AdRepository()
	{
        _db = new MuniDataContext();
	}
    public Ad GetById(int pId)
        {
            return (from n in _db.Ads where n.Id == pId select n).FirstOrDefault();
        }

        public IEnumerable<Ad> GetAll()
        {
            return (from n in _db.Ads select n).ToList();
        }


        public bool Add(Ad n)
        {
            try
            {
                _db.Ads.InsertOnSubmit(n);
                _db.SubmitChanges();
            }
            catch
            {
                return false;
            }
            return true;
        }


        public bool Edit(Ad newAd)
        {
            var existingArticle = GetById(newAd.Id);
            existingArticle.Link = newAd.Link;
            existingArticle.Image = newAd.Image;

            _db.SubmitChanges();

            return true;
        }
        public bool Delete(int id)
        {
            try
            {
                _db.proc_AdDelete(id);
                
            }
            catch
            {
                return false;
            }
            return true;
        }
    }