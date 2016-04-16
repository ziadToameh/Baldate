<%@ WebHandler Language="C#" Class="UploadHandlerSlider" %>

using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Web;

public class UploadHandlerSlider : IHttpHandler
{

    public void ProcessRequest(HttpContext context)
    {
        //TODO: Whatever you would like to do now that you have the ID's of the objects
        //Example, could be creating directories for that ID specifically, etc....        
        string _idOfObject1 = context.Request.Headers["IDofObject1"].ToString();
        string _idOfObject2 = context.Request.Headers["IDofObject2"].ToString();

        int chunk = context.Request["chunk"] != null ? int.Parse(context.Request["chunk"]) : 0;
        string fileName = context.Request["name"] != null ? context.Request["name"] : string.Empty;

        //TODO: change as needed for your application
        var tempPath = System.Configuration.ConfigurationManager.AppSettings["FolderPathSlider"];
        string uploadPath = context.Server.MapPath(tempPath);

        if (!Directory.Exists(uploadPath))
            Directory.CreateDirectory(uploadPath);

        HttpPostedFile fileUpload = context.Request.Files[0];

        fileName = fileName.Insert(0, string.Format("{0:MM}{0:dd}{0:yyyy}", DateTime.Now));

        using (
            var fs = new FileStream(Path.Combine(uploadPath, fileName), chunk == 0 ? FileMode.Create : FileMode.Append))
        {
            // TODO: Resize Images
            //ResizeFromStream(Path.Combine(uploadPath, fileName), 448, fileUpload.InputStream);

            var buffer = new byte[fileUpload.InputStream.Length];
            fileUpload.InputStream.Read(buffer, 0, buffer.Length);

            fs.Write(buffer, 0, buffer.Length);
        }
    }

    public void ResizeFromStream(string ImageSavePath, int MaxSideSize, Stream Buffer)
    {
        int intNewWidth;
        int intNewHeight;
        Image imgInput = Image.FromStream(Buffer);
        //Determine image format 
        ImageFormat fmtImageFormat = imgInput.RawFormat;
        //get image original width and height 
        int intOldWidth = imgInput.Width; int intOldHeight = imgInput.Height;
        //determine if landscape or portrait 
        int intMaxSide;
        if (intOldWidth >= intOldHeight) { intMaxSide = intOldWidth; }
        else { intMaxSide = intOldHeight; }
        if (intMaxSide > MaxSideSize)
        {
            //set new width and height 
            double dblCoef = MaxSideSize / (double)intMaxSide;
            intNewWidth = 448; // Convert.ToInt32(dblCoef * intOldWidth);
            intNewHeight = 278; // Convert.ToInt32(dblCoef * intOldHeight);
        }
        else { intNewWidth = intOldWidth; intNewHeight = intOldHeight; }
        //create new bitmap 
        Bitmap bmpResized = new Bitmap(imgInput, intNewWidth, intNewHeight);
        //save bitmap to disk 
        bmpResized.Save(ImageSavePath, fmtImageFormat);
        //release used resources 
        imgInput.Dispose();
        bmpResized.Dispose();
        Buffer.Close();
    }

    public bool IsReusable
    {
        get
        {
            return false;
        }
    }

}