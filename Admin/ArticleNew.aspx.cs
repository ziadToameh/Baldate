using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using app_code.Repositories;

public partial class Admin_ArticleNew : System.Web.UI.Page
{
    ArticlesRepository rep = new ArticlesRepository();
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void BtnSaveClick(object sender, EventArgs e)
    {
        if (!Page.IsValid) { return; }
        var newArticle = new Article();

       // newArticle.Name = textbox1.Text;
       // newArticle.Detail = textbox2.Text;
        newArticle.Name_Ar = textbox3.Text;
        newArticle.Detail_Ar = textbox4.Text;
        rep.Add(newArticle);

        Session["ArticleResult"] = "The Article was Added Successfully";
        Response.Redirect("ArticleList.aspx");

    }
    protected void BtnCancelClick(object sender, EventArgs e)
    {
        Response.Redirect("ArticleList.aspx");
    }
}