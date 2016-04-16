using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using app_code.Repositories;

public partial class Admin_StaticPageDelete : System.Web.UI.Page
{
    StaticPageRepository rep = new StaticPageRepository();
    private int _id;
    protected void Page_Load(object sender, EventArgs e)
    {

        try
        {
            _id = int.Parse(Request.QueryString["id"]);
            rep.Delete(_id);
            Session["Result"] = "The Data was Deleted Successfully";
        }
        catch
        {
            Session["Result"] = "Error Deleting the Data !";
        }
        Response.Redirect("StaticPageList.aspx");
    }
}