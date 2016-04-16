using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using app_code.Repositories;

public partial class UserControls_ucTicker : System.Web.UI.UserControl
{
    EventsRepository rep = new EventsRepository();
    public string ImgName3 = "", ImgName;

    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack){
            Bind();
            GetData();
        }
    }

    public void Bind()
    {
        EventsList.DataSource = rep.GetByCategoryId(9);
        EventsList.DataBind();
    }
    public void GetData()
    {


        string path =
            HttpContext.Current.Server.MapPath("Admin/" +
                                               System.Configuration.ConfigurationManager.AppSettings[
                                                   "FolderPathSiteGalleryHome"]);
        var files = Directory.GetFiles(path);

        foreach (string doc in files)
        {
            ImgName3 = doc.Split('\\')[doc.Split('\\').Length - 1];
            ImgName = "Admin/Uploads/Home/1/" + ImgName3;
        }
    }
}