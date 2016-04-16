using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using app_code.Repositories;

public partial class ArticleDetail : BasePage
{
    ArticlesRepository rep = new ArticlesRepository();
    public int eventId;
    public string images;
    public string imageId;
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
        vw_ArticlesImage eventDetail = rep.GetByIdWithImages(eventId);
        if (eventDetail != null)
        {
            if (Lang == "ar-LB")
            {
                lblTitle.Text = eventDetail.Name_Ar;
                lblDescription.Text = eventDetail.Detail_Ar;
            }
            else
            {
                lblTitle.Text = eventDetail.Name;
                lblDescription.Text = eventDetail.Detail;
            }
            lblDate.Text = eventDetail.DateAdded.Value.Day.ToString() + '/' + eventDetail.DateAdded.Value.Month.ToString() + '/' + eventDetail.DateAdded.Value.Year.ToString();
            images = eventDetail.Images;
            imageId = eventDetail.ImageIds;
        }
    }
}