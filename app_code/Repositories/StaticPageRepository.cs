using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for StaticPageRepository
/// </summary>
public class StaticPageRepository
{
    MuniDataContext _db;
	public StaticPageRepository()

		{
            _db = new MuniDataContext();

        }

        public StaticPage GetById(int pId)
        {
            return (from n in _db.StaticPages where n.Id == pId select n).FirstOrDefault();
        }
        public IEnumerable<StaticPage> GetAll()
        {
            return (from n in _db.StaticPages select n).ToList();
        }


        public bool Add(StaticPage n)
        {
            try
            {

                _db.StaticPages.InsertOnSubmit(n);
                _db.SubmitChanges();
            }
            catch
            {
                return false;
            }
            return true;
        }


        public bool Edit(StaticPage newStaticPage)
        {
            var existingStaticPage = GetById(newStaticPage.Id);
            existingStaticPage.Name = newStaticPage.Name;
            existingStaticPage.Content = newStaticPage.Content;
            existingStaticPage.Content_Ar = newStaticPage.Content_Ar;

            _db.SubmitChanges();

            return true;
        }
        public bool Delete(int id)
        {
            try
            {
                _db.proc_StaticPageDelete(id);
            }
            catch
            {
                return false;
            }
            return true;
        }
    }
