<%@ WebHandler Language="C#" Class="UploadDocs" %>

using System;
using System.IO;
using System.Web;

public class UploadDocs : IHttpHandler
{

    public void ProcessRequest(HttpContext context)
    {
        context.Response.ContentType = "text/plain";
        context.Response.Expires = -1;
        try
        {
            var id = context.Request.QueryString["id"];
            id = id.Split('?')[0];

            HttpPostedFile postedFile = context.Request.Files["Filedata"];

            string tempPath = "";

            tempPath = System.Configuration.ConfigurationManager.AppSettings["FolderPathDocuments"] + @"\" + id;
            
            string savepath = context.Server.MapPath(tempPath);
            string filename = postedFile.FileName;
            if (!Directory.Exists(savepath))
                Directory.CreateDirectory(savepath);

            postedFile.SaveAs(savepath + @"\" + filename);
            context.Response.Write(tempPath + "/" + filename);
            context.Response.StatusCode = 200;

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