using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace app_code.Repositories
{
    /// <summary>
    /// Summary description for ArticleRepository
    /// </summary>
    public class ArticlesRepository
    {
        MuniDataContext _db;
        public ArticlesRepository()
        {
            _db = new MuniDataContext();

        }

        public Article GetById(int pId)
        {
            return (from n in _db.Articles where n.Id == pId select n).FirstOrDefault();
        }

        public IEnumerable<Article> GetAll()
        {
            return (from n in _db.Articles select n).OrderByDescending(a => a.DateAdded).ToList();
        }


        public bool Add(Article n)
        {
            try
            {
                n.DateAdded = DateTime.Now;
                _db.Articles.InsertOnSubmit(n);
                _db.SubmitChanges();
            }
            catch
            {
                return false;
            }
            return true;
        }


        public bool Edit(Article newArticle)
        {
            var existingArticle = GetById(newArticle.Id);
            existingArticle.Name = newArticle.Name;
            existingArticle.Detail = newArticle.Detail;

            _db.SubmitChanges();

            return true;
        }
        public bool Delete(int id)
        {
            try
            {
                DeleteArticleImage(id);
                _db.proc_ArticleDelete(id);
                //_db.Events.DeleteOnSubmit(eventToDelete);
            }
            catch
            {
                return false;
            }
            return true;
        }

        public void DeleteArticleImage(int eventId)
        {
            try
            {
                string tempPath = "";
                tempPath = System.Configuration.ConfigurationManager.AppSettings["FolderArticlePath"] + @"\" +
                           eventId.ToString();

                Directory.Delete(HttpContext.Current.Server.MapPath(tempPath), true);
            }
            catch (Exception e)
            {
            }

        }

        public IEnumerable<vw_ArticlesImage> GetAllWithImages()
        {
            return (from n in _db.vw_ArticlesImages select n).OrderByDescending(a => a.DateAdded).Take(15).ToList();
        }

        public vw_ArticlesImage GetByIdWithImages(int id)
        {
            return (from n in _db.vw_ArticlesImages where n.Id == id select n).FirstOrDefault();
        }


        public IEnumerable<vw_ArticlesImage> GetByDate(DateTime d)
        {
            return (from n in _db.vw_ArticlesImages where n.DateAdded.Value.Year == d.Year && n.DateAdded.Value.Month == d.Month && n.DateAdded.Value.Day == d.Day select n).OrderByDescending(a => a.DateAdded).ToList();
        }

    }
}