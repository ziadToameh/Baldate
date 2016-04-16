using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Admin_SponsorsList : System.Web.UI.Page
{
    SponsorsRepository rep = new SponsorsRepository();
    protected void Page_Load(object sender, EventArgs e)
    {

        if (!IsPostBack)
            GetData();
        try
        {
            // Show the message
            Result.Text = Session["SponsorResult"].ToString();
            //Page.ClientScript.RegisterStartupScript(this.GetType(), "", "$('#Result').fadeOut(400)", true);

        }
        catch
        {
            Result.Text = "";
        }
    }
    public void GetData()
    {
        var ads = rep.GetAll();
        rptList.DataSource = ads;
        rptList.DataBind();
    }
}