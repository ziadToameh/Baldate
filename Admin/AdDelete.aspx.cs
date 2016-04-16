using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using app_code.Repositories;

public partial class Admin_AdDelete : System.Web.UI.Page
{
    AdRepository rep = new AdRepository();
    private int _id;
    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            _id = int.Parse(Request.QueryString["id"]);
            rep.Delete(_id);
            Session["AdResult"] = "The Ad was Deleted Successfully";
        }
        catch
        {
            Session["AdResult"] = "Error Deleting the Ad !";
        }
        Response.Redirect("AdList.aspx");
    }
}