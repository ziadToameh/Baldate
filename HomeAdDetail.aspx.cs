using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using app_code.Repositories;

public partial class HomeAdDetail : BasePage
{
    EventsRepository rep = new EventsRepository();
    public int eventId;
    public string images;
    public string imageId;
    public string imageGroup;
    public string Lang;

    protected void Page_Load(object sender, EventArgs e)
    {
        eventId = int.Parse(Request.QueryString["id"]);
        Lang = (string)Session["CULTURE_Language"] ?? "ar-LB";

        if (!IsPostBack)
            GetData();
    }

    public void GetData()
    {
        vw_EventsImage eventDetail = rep.GetByIdWithImages(eventId);
        if (eventDetail != null)
        {
            if (Lang == "ar-LB")
            {
                lblTitle.Text = eventDetail.Name_Ar;
                lblDescription.Text = eventDetail.Detail_Ar.Replace("\r\n", "<br>").Replace("  ", "&nbsp;&nbsp;");
                //lblEventWriter.Text = eventDetail.Writer;
                //lblEventPhotographer.Text = eventDetail.Photographer;
            }
            else
            {
                lblTitle.Text = eventDetail.Name;
                lblDescription.Text = eventDetail.Detail;
            }
            lblDate.Text = eventDetail.DateAdded.Value.Day.ToString() + '/' + eventDetail.DateAdded.Value.Month.ToString() + '/' + eventDetail.DateAdded.Value.Year.ToString();
            images = eventDetail.Images;
            imageId = eventDetail.ImageIds;

            CatType.Value = eventDetail.CategoryId.ToString() ?? "-1";
        }

    }

    protected void back_Click(object sender, EventArgs e)
    {
        Response.Redirect("Default.aspx");
    }
}