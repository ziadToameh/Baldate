using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using app_code.Repositories;

public partial class Admin_HomeAdEdit : System.Web.UI.Page
{
    EventsRepository rep = new EventsRepository();
    EventCategoryRepositroy catRep = new EventCategoryRepositroy();
    private int id;
    protected void Page_Load(object sender, EventArgs e)
    {

        if (!IsPostBack)
        {
            id = int.Parse(Request.QueryString["id"]);
            Bind();
            Session["HomeAdResult"] = "";
        }
    }
    private void Bind()
    {
        ddlEventCategory.DataValueField = "Id";
        ddlEventCategory.DataTextField = "Name";
        ddlEventCategory.DataSource = catRep.GetAllWithHomeAds();
        ddlEventCategory.DataBind();

        var existingEvent = rep.GetById(id);

        eventId.Text = id.ToString();
        //textbox1.Text = existingEvent.Name;
        // textbox2.Text = existingEvent.Detail;
        textbox3.Text = existingEvent.Name_Ar;
        textbox4.Text = existingEvent.Detail_Ar;
        //txtWriter.Text = existingEvent.Writer;
        //txtPhotographer.Text = existingEvent.Photographer;
        ddlEventCategory.SelectedValue = existingEvent.CategoryId.ToString();
        Session["Cat"] = existingEvent.CategoryId.ToString();
    }

    protected void BtnSaveClick(object sender, EventArgs e)
    {
        var existingEvent = rep.GetById(int.Parse(eventId.Text));
        int cat = int.Parse(ddlEventCategory.SelectedValue);

        existingEvent.Name_Ar = textbox3.Text;
        existingEvent.Detail_Ar = textbox4.Text;
        //existingEvent.Writer = txtWriter.Text;
        //existingEvent.Photographer = txtPhotographer.Text;
        existingEvent.CategoryId = cat;

        rep.Edit(existingEvent);

        Session["HomeAdResult"] = "The Ad was Saved Successfully";

        Response.Redirect("HomeAd.aspx?id=" + cat);
    }
    protected void btnCancelClick(object sender, EventArgs e)
    {
        Response.Redirect("HomeAd.aspx?id=" + Session["Cat"]);
    }
}

