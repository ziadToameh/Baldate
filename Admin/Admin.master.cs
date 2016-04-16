using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Admin_Admin : System.Web.UI.MasterPage
{
    public FormsAuthenticationService FormsService { get; set; }

    public string ImgName3 = "";
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
            GetData();
        if (FormsService == null) { FormsService = new FormsAuthenticationService(); }

        try
        {
            username.Text = Session["username"].ToString();
            Session.Timeout = 100;
        }
        catch
        {
            Response.Redirect("Login.aspx");
        }
    }
    public void GetData()
    {


        string path =
            HttpContext.Current.Server.MapPath(
                         System.Configuration.ConfigurationManager.AppSettings[
                                                   "FolderPathSiteGalleryHome"]);
        var files = Directory.GetFiles(path);

        foreach (string doc in files)
        {
            ImgName3 = doc.Split('\\')[doc.Split('\\').Length - 1];
            Logo.ImageUrl = "Uploads/Home/1/" + ImgName3;
        }
    }

    protected void SignoutClick(object sender, EventArgs e)
    {
        FormsService.SignOut();
        Response.Redirect("Login.aspx");
    }

}
