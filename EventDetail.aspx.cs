using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using app_code.Repositories;

public partial class EventDetail : BasePage
{
    EventsRepository rep = new EventsRepository();
    EventCategoryRepositroy catRep = new EventCategoryRepositroy();
    EventCommentRepositroy cRep = new EventCommentRepositroy();
    public int eventId;
    public string images;
    public string imageId;
    public string Lang;
    public string Imgs;
    public string ImgName3 = "";
    public string title, url, brief, ProfileImage;

    protected void Page_Load(object sender, EventArgs e)
    {
        eventId = int.Parse(Request.QueryString["id"]);
        Lang = (string)Session["CULTURE_Language"] ?? "ar-LB";

        if (!IsPostBack)
            GetData();
    }

    public void GetData()
    {
        try
        {
            string path = HttpContext.Current.Server.MapPath("Admin/" + System.Configuration.ConfigurationManager.AppSettings["FolderEventProfilePath"] + "/" + eventId);
            var files = Directory.GetFiles(path);

            foreach (string doc in files)
            {
                ImgName3 = doc.Split('\\')[doc.Split('\\').Length - 1];
                Profileimg.ImageUrl = "Admin/Uploads/Events/Profile/" + eventId + "/" + ImgName3;

            }
        }
        catch { }
        txtId.Value = eventId.ToString();
        try { lblResult.Text = Session["ResultTestimonial" + eventId].ToString(); }
        catch { lblResult.Text = ""; }
        vw_EventsImage eventDetail = rep.GetByIdWithImages(eventId);

        url = Path.GetFileName(Request.Url.AbsoluteUri);
        title = eventDetail.Name_Ar;
        brief = eventDetail.Brief;
        ProfileImage = eventDetail.ProfileImage;

        // category
        var cat = catRep.GetById(eventDetail.CategoryId ?? -1);
        if (eventDetail != null)
        {
            if (Lang == "ar-LB")
            {
                lblCategory.Text = cat.Name;
                lblTitle.Text = eventDetail.Name_Ar;
                lblDescription.Text = eventDetail.Detail_Ar.Replace("\r\n", "<br>").Replace("  ", "&nbsp;&nbsp;");
                this.Header.Title = eventDetail.Name_Ar;
                title = eventDetail.Name_Ar;
                brief = eventDetail.Brief;
            }
            else
            {
                lblCategory.Text = cat.Name;
                lblTitle.Text = eventDetail.Name;
                lblDescription.Text = eventDetail.Detail.Replace("\r\n", "<br>").Replace("  ", "&nbsp;&nbsp;");
                this.Header.Title = eventDetail.Name;
                title = eventDetail.Name;
                brief = eventDetail.Brief;
            }
            lblDate.Text = eventDetail.DateAdded.Value.ToLongDateString(); // eventDetail.DateAdded.Value.Day.ToString() + '/' + eventDetail.DateAdded.Value.Month.ToString() + '/' + eventDetail.DateAdded.Value.Year.ToString();
            images = eventDetail.Images;
            imageId = eventDetail.ImageIds;

            CatType.Value = eventDetail.CategoryId.ToString() ?? "-1";

            repComments.DataSource = cRep.GetByApprovedEventId(eventId);
            repComments.DataBind();
        }
         Imgs = "";
        try {
          var path = HttpContext.Current.Server.MapPath("Admin\\" + System.Configuration.ConfigurationManager.AppSettings["FolderEventPath"] + "\\" + eventId);
        
         var files = Directory.GetFiles(path);

        int counter = 0;
        foreach (string doc in files)
        {
            var imgName = doc.Split('\\')[doc.Split('\\').Length - 1];
            Imgs += "&p[images][" + counter + "]=http://www.eye-group.com/Baldate/Admin/uploads/events/" + eventId + "/" + imgName;
            counter++;
        }
        }
        catch
        {
        }

    }

    protected void BtnSaveClick(object sender, EventArgs e)
    {
        if (!Page.IsValid || string.IsNullOrEmpty(txtname.Text) || string.IsNullOrEmpty(txtdetail.Text))
        {
            Session["ResultTestimonial"] = "please fill required data";
            return;
        }

        var eId = txtId.Value;
        eventId = int.Parse(eId);

        var newItem = new EventComment() { Username = txtname.Text, EventId = eventId, Comment = txtdetail.Text, Email = txtUsermail.Text, IsActivated = false, DateAdded = DateTime.Now };

        cRep.Add(newItem);

        var result = "لقد تم إرسال تعليقك.";
        result += "<br />";
        result += "سيتم عرضه بعد موافقة الإدارة عليه.";

        Session["ResultTestimonial" + eventId] = result;

        Response.Redirect("EventDetail.aspx?id=" + eId);
    }

    protected void back_Click(object sender, EventArgs e)
    {
        Response.Redirect("Events.aspx?id=" + CatType.Value);
    }
}