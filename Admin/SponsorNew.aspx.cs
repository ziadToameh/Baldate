using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Admin_SponsorNew : System.Web.UI.Page
{
   SponsorsRepository rep = new SponsorsRepository();
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void BtnSaveClick(object sender, EventArgs e)
    {
        var image = filefield.PostedFile.FileName;
        if (!Page.IsValid) { return; }
        var newSponsor = new Sponsor();

        newSponsor.Link = textbox1.Text;
        newSponsor.Description = textbox2.Text;
        newSponsor.Image = image;
        rep.Add(newSponsor);

        var id = newSponsor.Id;

        string savepath = "";
        string tempPath = "";
        tempPath = System.Configuration.ConfigurationManager.AppSettings["FolderPathSponsor"] + @"\" + id;
        savepath = HttpContext.Current.Server.MapPath(tempPath);

        if (!Directory.Exists(savepath))
            Directory.CreateDirectory(savepath);
        filefield.PostedFile.SaveAs(savepath + @"\" + image);

        Session["SponsorResult"] = "The Sponsor was Added Successfully";

        Response.Redirect("SponsorsList.aspx");

    }
    protected void BtnCancelClick(object sender, EventArgs e)
    {
        Response.Redirect("SponsorsList.aspx");
    }
}