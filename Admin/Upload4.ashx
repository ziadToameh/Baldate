<%@ WebHandler Language="C#" Class="Upload" %>

using System;
using System.Web;
using System.IO;

public class Upload : IHttpHandler {
    
    public void ProcessRequest (HttpContext context) {
        context.Response.ContentType = "text/plain";
        context.Response.Expires = -1;
        try
        {
            var id = context.Request.QueryString["eventId"];
            id = id.Split('?')[0];

            HttpPostedFile postedFile = context.Request.Files["Filedata"];
            
            string savepath = "";
            string tempPath = "";
            tempPath = System.Configuration.ConfigurationManager.AppSettings["FolderEventPath"] + @"\" + id.ToString(); 
            savepath = context.Server.MapPath(tempPath);
            string filename = postedFile.FileName;
            if (!Directory.Exists(savepath))
                Directory.CreateDirectory(savepath);

            postedFile.SaveAs(savepath + @"\" + filename);
            context.Response.Write(tempPath + "/" + filename);
            context.Response.StatusCode = 200;
            
            // save to db
            EventImage img = new EventImage();
            img.EventId = int.Parse(id);
            img.Name = filename;
            //img.ImageGroup = 4;
            app_code.Repositories.EventImageRepository rep = new app_code.Repositories.EventImageRepository();
            rep.Add(img);
        }
        catch (Exception ex)
        {
            context.Response.Write("Error: " + ex.Message);
        }
    }
 
    public bool IsReusable {
        get {
            return false;
        }
    }

}