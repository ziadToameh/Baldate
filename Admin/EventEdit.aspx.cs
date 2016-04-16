using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using app_code.Repositories;

public partial class Admin_EventEdit : System.Web.UI.Page
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
            Session["EventResult"] = "";
        }
    }
    private void Bind()
    {
        ddlEventCategory.DataValueField = "Id";
        ddlEventCategory.DataTextField = "Name";
        ddlEventCategory.DataSource = catRep.GetAllWithoutHomeAds();
        ddlEventCategory.DataBind();

        var existingEvent = rep.GetById(id);

        eventId.Text = id.ToString();
        //textbox1.Text = existingEvent.Name;
       // textbox2.Text = existingEvent.Detail;
        textbox3.Text = existingEvent.Name_Ar;
        txtBreif.Text = existingEvent.Brief;
        textbox4.Text = existingEvent.Detail_Ar;
        ddlEventCategory.SelectedValue = existingEvent.CategoryId.ToString();
        Session["Cat"] = existingEvent.CategoryId.ToString();
    }

    protected void BtnSaveClick(object sender, EventArgs e)
    {
        var existingEvent = rep.GetById(int.Parse(eventId.Text));
        int cat = int.Parse(ddlEventCategory.SelectedValue);

        //existingEvent.Name = textbox1.Text;
       // existingEvent.Detail = textbox2.Text;
        existingEvent.Name_Ar = textbox3.Text;
        existingEvent.Brief = txtBreif.Text;
        existingEvent.Detail_Ar = textbox4.Text;
        existingEvent.CategoryId = cat;

        rep.Edit(existingEvent);

        Session["EventResult"] = "The Event was Saved Successfully";

        Response.Redirect("EventsList.aspx?id=" + cat);
    }
    protected void btnCancelClick(object sender, EventArgs e)
    {
        Response.Redirect("EventsList.aspx?id=" + Session["Cat"]);
    }
}

