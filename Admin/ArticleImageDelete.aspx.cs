using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using app_code.Repositories;

public partial class Admin_ArticleImageDelete : System.Web.UI.Page
{
    ArticleImageRepository rep = new ArticleImageRepository();
    private int id;
    private int image;
    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            id = int.Parse(Request.QueryString["articleId"]);
            image = int.Parse(Request.QueryString["imageId"]);
            rep.Delete(image);
            Session["ArticleResult"] = "The Image was Deleted Successfully";
        }
        catch
        {
            Session["ArticleResult"] = "Error Deleting the Image !";
        }
        Response.Redirect("ArticleImage.aspx?articleId=" + id);

    }
}