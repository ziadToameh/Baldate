using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Admin_SliderDelete : System.Web.UI.Page
{
    SliderRepository rep = new SliderRepository();
    private int _id;
    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            _id = int.Parse(Request.QueryString["id"]);
            rep.Delete(_id);
            Session["ResultSlider"] = "The Image was Deleted Successfully";
        }
        catch
        {
            Session["ResultSlider"] = "Error Deleting the Image !";
        }
        Response.Redirect("SliderList.aspx");
    }
}