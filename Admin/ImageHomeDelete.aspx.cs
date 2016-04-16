using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Admin_ImageHomeDelete : System.Web.UI.Page
{
    public string docToDelete;
    public string HomeImageType;

    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            docToDelete = Request.QueryString["name"];
            HomeImageType = Request.QueryString["type"];
            DeleteDocument();
        }
    }

    public void DeleteDocument()
    {
        string tempPath = "";

        try
        {
            tempPath = System.Configuration.ConfigurationManager.AppSettings["FolderPathSiteGalleryHome"];
            tempPath = tempPath + @"\" + docToDelete;

            File.Delete(HttpContext.Current.Server.MapPath(tempPath));
        }
        catch (Exception e)
        {
        }

        Response.Redirect("GalleryImages.aspx");
    }
}