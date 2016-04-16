using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Admin_SponsorDelete : System.Web.UI.Page
{
    SponsorsRepository rep = new SponsorsRepository();
    private int _id;
    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            _id = int.Parse(Request.QueryString["id"]);
            rep.Delete(_id);
            Session["SponsorResult"] = "The Sponsor was Deleted Successfully";
        }
        catch
        {
            Session["SponsorResult"] = "Error Deleting the Sponsor !";
        }
        Response.Redirect("SponsorsList.aspx");
    }
}