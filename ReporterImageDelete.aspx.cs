using app_code.Repositories;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class ReporterImageDelete : System.Web.UI.Page
{
    EventImageRepository rep = new EventImageRepository();
    private int id;
    private int image;
    private int catId;
    private int isprofile;
    private string imageName;

    protected void Page_Load(object sender, EventArgs e)
    {
        try { id = int.Parse(Request.QueryString["eventId"]); }
        catch { Session["Result"] = "Error Deleting the Image !"; }

        try { image = int.Parse(Request.QueryString["imageId"]); }
        catch { image = -1; }

        try { catId = int.Parse(Request.QueryString["catId"]); }
        catch { Session["Result"] = "Error Deleting the Image !"; }

        try { isprofile = int.Parse(Request.QueryString["isprofile"]); }
        catch { isprofile = 0; }

        try { imageName = Request.QueryString["name"]; }
        catch { imageName = ""; }

        if (isprofile != 0)
        {
            try
            {
                string tempPath = "";
                tempPath ="Admin" + @"\" + System.Configuration.ConfigurationManager.AppSettings["FolderEventProfilePath"] + @"\" +
                           id + @"\" + imageName;

                File.Delete(HttpContext.Current.Server.MapPath(tempPath));

                var eRep = new EventsRepository();

                var existingEvent = eRep.GetById(id);

                existingEvent.ProfileImage = "";
                eRep.Edit(existingEvent);
            }
            catch
            {
                Session["Result"] = "Error Deleting the Image !";
            }
        }
        else
        {
            try
            {
                rep.Delete(image);
                Session["Result"] = "The Image was Deleted Successfully";
            }
            catch
            {
                Session["Result"] = "Error Deleting the Image !";
            }
        }
        Response.Redirect("ReporterImage.aspx?eventId=" + id + "&catId=" + catId);

    }
}