using app_code.Repositories;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class ReporterImage : System.Web.UI.Page
{
    EventsRepository eRep = new EventsRepository();
    EventImageRepository rep = new EventImageRepository();
    public static int id;
    public string Cat;
    public int counter1 = 0;
    public int counter2 = 0;
    public int counter3 = 0;
    public int counter4 = 0;
    public string ImgNameProfile = "";

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            eventId.Text = Request.QueryString["eventId"].ToString();
            Cat = Request.QueryString["catId"].ToString();
            //var tempPath = System.Configuration.ConfigurationManager.AppSettings["FolderPath"] + @"\" + eventId.Text;
            //path.Text = HttpContext.Current.Server.MapPath(tempPath);

            if (!IsPostBack)
                Bind();

            Session["Result"] = "";
        }
        catch (Exception ex)
        {
            //Response.Redirect("Error.aspx");
        }
    }

    public void Bind()
    {
        id = int.Parse(eventId.Text);

        var e = eRep.GetById(id);
        eventName.Text = e.Name_Ar;

        ImgNameProfile = e.ProfileImage;
        imgProfile.ImageUrl = "Admin" + "/" + ConfigurationManager.AppSettings["FolderEventProfilePath"] + "/" + e.Id + "/" + e.ProfileImage;

        if (!string.IsNullOrEmpty(e.ProfileImage))
        {
            lblMessageProfile.Visible = true;
            FileUpload5.Visible = false;
        }
        else
            tdProfile.Visible = false;

        //var result1 = rep.GetByEventIdGroupId(id, 1);
        //BImages.DataSource = result1;
        //BImages.DataBind();

        //var result2 = rep.GetByEventIdGroupId(id, 2);
        //DImages.DataSource = result2;
        //DImages.DataBind();

        //var result3 = rep.GetByEventIdGroupId(id, 3);
        //AImages.DataSource = result3;
        //AImages.DataBind();

        id = int.Parse(eventId.Text);

        e = eRep.GetById(id);
        eventName.Text = e.Name_Ar;

        Cat = e.CategoryId.ToString();

        var result = rep.GetByEventId(id);
        Images.DataSource = result;
        Images.DataBind();

        //if (result.Count() > maxEventimage)
        //{
        //    lblMessage.Visible = true;
        //    //FileUpload1.Visible = false;
        //    flagDisabled = true;
        //}
    }

    #region "Get IDs"

    [WebMethod]
    public static string GetIDs()
    {
        //This is strictly here just so you can see how you can grab ID's and make plupload aware of them
        //This is useful for data driven application. Example, need the ID of the user who is uploading a file
        //so you can pull that data out later when the user logs in.

        //default is pipe delimited for js file in function OnGetIDSucceeded
        //IDOfObject|IDOfObject2
        string IDs = "0|0";

        //These IDs could be pulled from anywhere (i.e, Session, DB, XML file)

        IDs = string.Format("{0}|{1}", "10", "11"); //"10" and "11" and filler so you can have data to mess around with

        return IDs;
    }

    #endregion

    #region "Insert Attachment"

    [WebMethod]
    public static void InsertFileRecord(string idOfObject1, string idOfObject2, string fileID, string fileName)
    {
        _InsertAttachment(idOfObject1, idOfObject2, fileID, fileName);
    }

    #endregion

    #region "Private _InsertAttachment"

    private static void _InsertAttachment(string idOfObject1, string idOfObject2, string fileID, string fileName)
    {
        //TODO: Insert into Database as needed, or whatever data store you are using.
        string doSomething = ""; //left here for debugging purposes...delete as needed

        fileID = fileID.Insert(0, string.Format("{0:MM}{0:dd}{0:yyyy}", DateTime.Now));

        var fileparts = fileName.Split('.');
        var ext = fileparts[fileparts.Count() - 1];

        fileID = fileID + '.' + ext;

        // save to db
        EventImage img = new EventImage();
        img.EventId = id;
        img.Name = fileID;
        EventImageRepository rep = new EventImageRepository();
        rep.Add(img);
    }

    #endregion
}