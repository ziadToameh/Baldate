using app_code.Repositories;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Resources;

public partial class Site : System.Web.UI.MasterPage
{
    EventsRepository rep1 = new EventsRepository();
    public int Counter = 0;
    public string ImgName3 = "";

    public string Lang;
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
            GetData();
    }

    public void GetData()
    {
        string path =
             HttpContext.Current.Server.MapPath("Admin/" + System.Configuration.ConfigurationManager.AppSettings["FolderPathSiteGalleryHome"]);
        var files = Directory.GetFiles(path);
        foreach (string doc in files)
        {
            ImgName3 = doc.Split('\\')[doc.Split('\\').Length - 1];
            Logo.ImageUrl = "Admin/Uploads/Home/1/" + ImgName3;
        }
        var ads = rep1.GetAllWithImagesByCatId(32).OrderByDescending(e => e.Id).Take(1);
        repHAd1.DataSource = ads;
        repHAd1.DataBind();
        ads = rep1.GetAllWithImagesByCatId(33).OrderByDescending(e => e.Id).Take(1);
        repHAd2.DataSource = ads;
        repHAd2.DataBind();
        ads = rep1.GetAllWithImagesByCatId(31).OrderByDescending(e => e.Id).Take(1);
        repHome.DataSource = ads;
        repHome.DataBind();
        ads = rep1.GetAllWithImagesByCatId(34).OrderByDescending(e => e.Id).Take(1);
        repHAd3.DataSource = ads;
        repHAd3.DataBind();
        ads = rep1.GetAllWithImagesByCatId(35).OrderByDescending(e => e.Id).Take(1);
        repHAd4.DataSource = ads;
        repHAd4.DataBind();

    }
}
