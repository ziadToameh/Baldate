<%@ WebHandler Language="C#" Class="UploadProfileReporter" %>

using System;
using System.Web;
using System.IO;
using app_code.Repositories;

public class UploadProfileReporter : IHttpHandler {
    
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
            tempPath = "Admin" + @"\" + System.Configuration.ConfigurationManager.AppSettings["FolderEventProfilePath"] + @"\" + id.ToString(); 
            savepath = context.Server.MapPath(tempPath);
            string filename = postedFile.FileName;
            if (!Directory.Exists(savepath))
                Directory.CreateDirectory(savepath);
                
            postedFile.SaveAs(savepath + @"\" + filename);
            context.Response.Write(tempPath + "/" + filename);
            context.Response.StatusCode = 200;
            
            // save to db
            var rep = new EventsRepository();
            var ev = rep.GetById(int.Parse(id));
            ev.ProfileImage = filename.Trim();
            rep.Edit(ev);
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