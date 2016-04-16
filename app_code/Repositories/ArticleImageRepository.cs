using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for ArticleImageRepository
/// </summary>
public class ArticleImageRepository
{
    MuniDataContext _db;
    public ArticleImageRepository()
    {
        _db = new MuniDataContext();
    }
    public IEnumerable<ArticleImage> GetByArticleId(int pId)
        {
            return (from n in _db.ArticleImages where n.ArticleId == pId select n).ToList();
        }

        public ArticleImage GetById(int id)
        {
            return (from n in _db.ArticleImages where n.Id == id select n).FirstOrDefault();
        }

        public bool Add(ArticleImage img)
        {
            try
            {
                _db.ArticleImages.InsertOnSubmit(img);
                _db.SubmitChanges();
            }
            catch
            {
                return false;
            }
            return true;
        }

        public bool Delete(int id)
        {
            try
            {
                // delete from folder
                var image = GetById(id);
                DeleteImage(image.ArticleId ?? 0, image.Name);
                _db.proc_ArticleImageDelete(id);
            }
            catch
            {
                return false;
            }
            return true;
        }
        public void DeleteImage(int articleId, string imageName)
        {
            try
            {
                string tempPath = "";
                tempPath = System.Configuration.ConfigurationManager.AppSettings["FolderArticlePath"] + @"\" + articleId.ToString() + @"\" + imageName;

                File.Delete(HttpContext.Current.Server.MapPath(tempPath));
            }
            catch (Exception e)
            {
            }

        }

    }
