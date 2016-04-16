using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Admin_GalleryImages : System.Web.UI.Page
{
    public ArrayList Docs = new ArrayList();
    public int counter = 0;
    public string ImgName1 = "";
    public string ImgName3 = "";

    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
            Bind();
    }

    public void Bind()
    {
        string path = HttpContext.Current.Server.MapPath(System.Configuration.ConfigurationManager.AppSettings["FolderPathSiteGallery"]);
        var files = Directory.GetFiles(path);

        var count = 0;
        foreach (string doc in files)
        {
            Docs.Add(doc.Split('\\')[doc.Split('\\').Length - 1]);
            count++;
        }

        //if (count == 5)
        //{
        //    lblMessage.Visible = true;
        //    FileUpload1.Visible = false;
        //}

        //repDocuments.DataSource = Docs;
        //repDocuments.DataBind();

        
        //

        path = HttpContext.Current.Server.MapPath(System.Configuration.ConfigurationManager.AppSettings["FolderPathSiteGalleryHome"]);
        files = Directory.GetFiles(path);

        foreach (string doc in files)
        {
            ImgName3 = doc.Split('\\')[doc.Split('\\').Length - 1];
            imgHome3.ImageUrl = "Uploads/Home/1/" + ImgName3;
        }

        if (!string.IsNullOrEmpty(imgHome3.ImageUrl))
        {

            lblHome3.Visible = true;
            lblChoose.Visible = false;
            filefield.Visible = false;
            btnSave.Visible = false;
            btnCancel.Visible = false;
        }
        else
            tdHome3.Visible = false;
        lblChoose.Visible = true;
    }
    protected void BtnSaveClick(object sender, EventArgs e)
    {
        var image = filefield.PostedFile.FileName;
        image = image.Split('\\')[image.Split('\\').Length - 1];
        if (!Page.IsValid) { return; }
        var newAd = new Ad();

        var id = newAd.Id;

        string savepath = "";
        string tempPath = "";
        tempPath = System.Configuration.ConfigurationManager.AppSettings["FolderPathSiteGalleryHome"];
        savepath = HttpContext.Current.Server.MapPath(tempPath);

        if (!Directory.Exists(savepath))
            Directory.CreateDirectory(savepath);
        filefield.PostedFile.SaveAs(savepath + @"\" + image);

        Session["AdResult"] = "The Image was saved Successfully";

        Response.Redirect("GalleryImages.aspx");

    }
    protected void BtnCancelClick(object sender, EventArgs e)
    {
        Response.Redirect("GalleryImages.aspx");
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

    }

    #endregion

}