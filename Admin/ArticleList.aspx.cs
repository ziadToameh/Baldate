using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using app_code.Repositories;

public partial class Admin_ArticleList : System.Web.UI.Page
{
    ArticlesRepository rep = new ArticlesRepository();
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
            GetData(); 
        try
        {
            // Show the message
            Result.Text = Session["ArticleResult"].ToString();
            //Page.ClientScript.RegisterStartupScript(this.GetType(), "", "$('#Result').fadeOut(400)", true);

        }
        catch
        {
            Result.Text = "";
        }
    }
    public void GetData()
    {
        var articles = rep.GetAll();
        rptList.DataSource = articles;
        rptList.DataBind();
    }
}