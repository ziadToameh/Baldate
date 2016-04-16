using app_code.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class ReporterDelete : System.Web.UI.Page
{
    EventsRepository rep = new EventsRepository();
    private int _id;
    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            _id = int.Parse(Request.QueryString["id"]);
            rep.Delete(_id);
            Session["TickerResult"] = "The Event was Deleted Successfully";
        }
        catch
        {
            Session["TickerResult"] = "Error Deleting the Event !";
        }
        Response.Redirect("ReporterList.aspx");

    }
}