using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using app_code.Repositories;

public partial class Admin_StaticPageEdit : System.Web.UI.Page
{
    StaticPageRepository rep = new StaticPageRepository();
    private int id;
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            id = int.Parse(Request.QueryString["id"]);
            Bind();
            Session["Result"] = "";
        }
    }
    private void Bind()
    {
        var existingStaticPage = rep.GetById(id);

        staticpageId.Text = id.ToString();
        textbox1.Text = existingStaticPage.Name;
        textbox2.Text = existingStaticPage.Content;
        textbox3.Text = existingStaticPage.Content_Ar;

    }
    protected void BtnSaveClick(object sender, EventArgs e)
    {

        var existingStaticPage = rep.GetById(int.Parse(staticpageId.Text));

        existingStaticPage.Name = textbox1.Text;
        existingStaticPage.Content = textbox2.Text;
        existingStaticPage.Content_Ar = textbox3.Text;

        rep.Edit(existingStaticPage);


        Response.Redirect("StaticPageList.aspx");


    }
    protected void btnCancelClick(object sender, EventArgs e)
    {
        Response.Redirect("StaticPageList.aspx");
    }
}