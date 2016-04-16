using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Admin_LinkDelete : System.Web.UI.Page
{
    LinkRepository rep = new LinkRepository();
    private int _id;
    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            _id = int.Parse(Request.QueryString["id"]);
            rep.Delete(_id);
            Session["linkResult"] = "The Link was Deleted Successfully";
        }
        catch
        {
            Session["linkResult"] = "Error Deleting the link !";
        }
        Response.Redirect("LinksList.aspx");
    }
}