<%@ WebHandler Language="C#" Class="UploadHandlerReporter" %>

using System;
using System.Web;
using System.IO;
using app_code.Repositories;

public class UploadHandlerReporter : IHttpHandler {

  public void ProcessRequest(HttpContext context)
  {
    //TODO: Whatever you would like to do now that you have the ID's of the objects
    //Example, could be creating directories for that ID specifically, etc....        
    string _idOfObject1 = context.Request.Headers["IDofObject1"].ToString();
    string _idOfObject2 = context.Request.Headers["IDofObject2"].ToString();

    int chunk = context.Request["chunk"] != null ? int.Parse(context.Request["chunk"]) : 0;
    string fileName = context.Request["name"] != null ? context.Request["name"] : string.Empty;

    var id = context.Request.QueryString["eventId"];
    id = id.Split('?')[0];

    //TODO: change as needed for your application
    var tempPath ="Admin" + @"\" + System.Configuration.ConfigurationManager.AppSettings["FolderEventPath"] + @"\" + id.ToString();
    string uploadPath = context.Server.MapPath(tempPath);

    if (!Directory.Exists(uploadPath))
      Directory.CreateDirectory(uploadPath);

    HttpPostedFile fileUpload = context.Request.Files[0];

    fileName = fileName.Insert(0, string.Format("{0:MM}{0:dd}{0:yyyy}", DateTime.Now));

    using (var fs = new FileStream(Path.Combine(uploadPath, fileName), chunk == 0 ? FileMode.Create : FileMode.Append))
    {
      var buffer = new byte[fileUpload.InputStream.Length];
      fileUpload.InputStream.Read(buffer, 0, buffer.Length);

      fs.Write(buffer, 0, buffer.Length);
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