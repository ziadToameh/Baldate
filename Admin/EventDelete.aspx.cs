using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using app_code.Repositories;

public partial class Admin_EventDelete : System.Web.UI.Page
{
    EventsRepository rep = new EventsRepository();
    private int _id;
    public string Cat;

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            _id = int.Parse(Request.QueryString["id"]);
            Cat = Request.QueryString["catId"].ToString();
            rep.Delete(_id);
            Session["EventResult"] = "The Event was Deleted Successfully";
        }
        catch
        {
            Session["EventResult"] = "Error Deleting the Event !";
        }
        Response.Redirect("EventsList.aspx?id=" + Cat);
        
    }
}