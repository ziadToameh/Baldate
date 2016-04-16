using app_code.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class ReporterNew : System.Web.UI.Page
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
    }

    protected void BtnSaveClick(object sender, EventArgs e)
    {
        if (!Page.IsValid) { return; }
        var cat = 25;

        var newEvent = new Event();

        newEvent.Name_Ar = textbox3.Text;
        newEvent.Detail_Ar = textbox4.Text;
        newEvent.Brief = txtBreif.Text;
        newEvent.CategoryId = cat;
        id = rep.Add(newEvent);

        Session["TickerResult"] = "The Events was Added Successfully";

        Response.Redirect("ReporterList.aspx?id=" + cat);

    }
    protected void BtnCancelClick(object sender, EventArgs e)
    {
        Response.Redirect("ReporterList.aspx");
    }
}