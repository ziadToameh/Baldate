<%@ WebHandler Language="C#" Class="UploadArticle" %>

using System;
using System.IO;
using System.Web;

public class UploadArticle : IHttpHandler
{

    public void ProcessRequest(HttpContext context)
    {
        context.Response.ContentType = "text/plain";
        context.Response.Expires = -1;
        try
        {
            var id = context.Request.QueryString["articleId"];
            id = id.Split('?')[0];

            HttpPostedFile postedFile = context.Request.Files["Filedata"];

            string savepath = "";
            string tempPath = "";
            tempPath = System.Configuration.ConfigurationManager.AppSettings["FolderArticlePath"] + @"\" + id.ToString();
            savepath = context.Server.MapPath(tempPath);
            string filename = postedFile.FileName;
            if (!Directory.Exists(savepath))
                Directory.CreateDirectory(savepath);

            postedFile.SaveAs(savepath + @"\" + filename);
            context.Response.Write(tempPath + "/" + filename);
            context.Response.StatusCode = 200;

            // save to db
            ArticleImage img = new ArticleImage();
            img.ArticleId = int.Parse(id);
            img.Name = filename;
            ArticleImageRepository rep = new ArticleImageRepository();
            rep.Add(img);
        }
        catch (Exception ex)
        {
            context.Response.Write("Error: " + ex.Message);
        }
    }

    public bool IsReusable
    {
        get
        {
            return false;
        }
    }
}
