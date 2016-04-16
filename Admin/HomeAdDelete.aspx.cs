using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using app_code.Repositories;

public partial class Admin_HomeAdDelete : System.Web.UI.Page
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
            Session["HomeAdResult"] = "The Ad was Deleted Successfully";
        }
        catch
        {
            Session["HomeAdResult"] = "Error Deleting the Ad !";
        }
        Response.Redirect("HomeAd.aspx?id=" + Cat);

    }
}