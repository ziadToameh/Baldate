using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using app_code.Repositories;

public partial class Admin_ArticleEdit : System.Web.UI.Page
{
    ArticlesRepository rep = new ArticlesRepository();
    private int id;
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            id = int.Parse(Request.QueryString["id"]);
            Bind();
            Session["ArticleResult"] = "";
        }
    }
    private void Bind()
    {
        var existingArticle = rep.GetById(id);

        articleId.Text = id.ToString();
        // textbox1.Text = existingArticle.Name;
        // textbox2.Text = existingArticle.Detail;
        textbox3.Text = existingArticle.Name_Ar;
        textbox4.Text = existingArticle.Detail_Ar;

    }
    protected void BtnSaveClick(object sender, EventArgs e)
    {

        var existingArticle = rep.GetById(int.Parse(articleId.Text));

        // existingArticle.Name = textbox1.Text;
        // existingArticle.Detail = textbox2.Text;
        existingArticle.Name_Ar = textbox3.Text;
        existingArticle.Detail_Ar = textbox4.Text;

        rep.Edit(existingArticle);

        Session["ArticleResult"] = "The Article was Saved Successfully";
        Response.Redirect("ArticleList.aspx");
    }

    protected void btnCancelClick(object sender, EventArgs e)
    {
        Response.Redirect("ArticleList.aspx");
    }

}
