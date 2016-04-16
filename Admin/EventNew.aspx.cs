using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using app_code.Repositories;

public partial class Admin_EventNew : System.Web.UI.Page
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
        ddlEventCategory.DataSource = catRep.GetAllWithoutHomeAds();
        ddlEventCategory.DataBind();
    }

    protected void BtnSaveClick(object sender, EventArgs e)
    {
        if (!Page.IsValid) { return; }
        var newEvent = new Event();
        int cat = int.Parse(ddlEventCategory.SelectedValue);
        // newEvent.Name = textbox1.Text;
        // newEvent.Detail = textbox2.Text;
        newEvent.Name_Ar = textbox3.Text;
        newEvent.Detail_Ar = textbox4.Text;
        newEvent.Brief = txtBreif.Text;
        newEvent.CategoryId = cat;
        id = rep.Add(newEvent);

        Session["EventResult"] = "The Events was Added Successfully";

        if (int.Parse(ddlEventCategory.SelectedValue)==6)
        {
            Response.Redirect("EventsList.aspx?id=6");
        }
        Response.Redirect("EventImage.aspx?eventId=" + id + "&catId=" + cat);


    }
    protected void BtnCancelClick(object sender, EventArgs e)
    {
        Response.Redirect("EventsList.aspx");
    }
}
