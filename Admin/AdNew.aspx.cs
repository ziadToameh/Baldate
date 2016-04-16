using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Admin_Images_AdNew : System.Web.UI.Page
{
    AdRepository rep = new AdRepository();
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void BtnSaveClick(object sender, EventArgs e)
    {
        var image = filefield.PostedFile.FileName;
        image = image.Split('\\')[image.Split('\\').Length - 1];
        if (!Page.IsValid) { return; }
        var newAd = new Ad();
        
        newAd.Link = textbox1.Text;
        newAd.Image = image;
        rep.Add(newAd);

        var id = newAd.Id;

        string savepath = "";
        string tempPath = "";
        tempPath = System.Configuration.ConfigurationManager.AppSettings["FolderPath"] + @"\" + id;
        savepath = HttpContext.Current.Server.MapPath(tempPath);

        if (!Directory.Exists(savepath))
            Directory.CreateDirectory(savepath);
        filefield.PostedFile.SaveAs(savepath  + @"\" + image);

        Session["Result"] = "The Ad was saved Successfully";

        Response.Redirect("AdList.aspx");

    }
    protected void BtnCancelClick(object sender, EventArgs e)
    {
        Response.Redirect("AdList.aspx");
    }
}