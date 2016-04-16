using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using app_code.Repositories;

public partial class Admin_HomeAdNew : System.Web.UI.Page
{
    EventCategoryRepositroy catRep = new EventCategoryRepositroy();
    EventsRepository rep = new EventsRepository();
    public int id;

    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            Bind();
        }
    }

    private void Bind()
    {
        ddlEventCategory.DataValueField = "Id";
        ddlEventCategory.DataTextField = "Name";
        ddlEventCategory.DataSource = catRep.GetAllWithHomeAds();
        ddlEventCategory.DataBind();
    }

    protected void BtnSaveClick(object sender, EventArgs e)
    {
        if (!Page.IsValid) { return; }
        var cat = int.Parse(ddlEventCategory.SelectedValue);

        var newEvent = new Event();

        newEvent.Name_Ar = textbox3.Text;
        newEvent.Detail_Ar = textbox4.Text;
        newEvent.CategoryId = cat;

        id = rep.Add(newEvent);

        Session["HomeAdResult"] = "The Ads was saved Successfully";

        Response.Redirect("HomeAdImage.aspx?eventId=" + id + "&catId=" + cat);


    }
    protected void BtnCancelClick(object sender, EventArgs e)
    {
        Response.Redirect("HomeAd.aspx");
    }
}
