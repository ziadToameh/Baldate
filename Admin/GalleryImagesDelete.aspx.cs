using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Admin_GalleryImagesDelete : System.Web.UI.Page
{
    public string docToDelete;
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            docToDelete = Request.QueryString["name"];
            DeleteDocument();
        }

    }

    public void DeleteDocument()
    {
        try
        {
            string tempPath = "";
            tempPath = System.Configuration.ConfigurationManager.AppSettings["FolderPathSiteGallery"] + @"\" + docToDelete;

            File.Delete(HttpContext.Current.Server.MapPath(tempPath));
        }
        catch (Exception e)
        {
        }

        Response.Redirect("GalleryImages.aspx");
    }
}