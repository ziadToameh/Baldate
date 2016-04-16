using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Admin_SliderNew : System.Web.UI.Page
{
    SliderRepository rep = new SliderRepository();
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void BtnSaveClick(object sender, EventArgs e)
    {
        var image = filefield.PostedFile.FileName;

        image = image.Split('\\')[image.Split('\\').Length - 1];
        if (!Page.IsValid) { return; }
        var newItem = new SliderImage();

        newItem.Name = image;
        newItem.Description = txtDescription.Text;
        rep.Add(newItem);

        var id = newItem.Id;

        string savepath = "";
        string tempPath = "";
        tempPath = System.Configuration.ConfigurationManager.AppSettings["FolderPathSliderDynamic"] + @"\" + id;
        savepath = HttpContext.Current.Server.MapPath(tempPath);

        if (!Directory.Exists(savepath))
            Directory.CreateDirectory(savepath);
        filefield.PostedFile.SaveAs(savepath + @"\" + image);

        Session["ResultSlider"] = "The Image was saved Successfully";

        Response.Redirect("SliderList.aspx");

    }
    protected void BtnCancelClick(object sender, EventArgs e)
    {
        Response.Redirect("SliderList.aspx");
    }
}