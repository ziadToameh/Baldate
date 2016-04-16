using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using app_code.Repositories;

public partial class Admin_ArticleDelete : System.Web.UI.Page
{
    ArticlesRepository rep = new ArticlesRepository();
    private int _id;
    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            _id = int.Parse(Request.QueryString["id"]);
            rep.Delete(_id);
            Session["ArticleResult"] = "The Article was Deleted Successfully";
        }
        catch
        {
            Session["ArticleResult"] = "Error Deleting the Article !";
        }
        Response.Redirect("ArticleList.aspx");
    }

}
