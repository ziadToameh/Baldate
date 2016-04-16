using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Admin_SliderList : System.Web.UI.Page
{
    SliderRepository rep = new SliderRepository();
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
            GetData();
        try
        {
            // Show the message
            Result.Text = Session["ResultSlider"].ToString();
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