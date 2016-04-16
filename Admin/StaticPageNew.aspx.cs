using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using app_code.Repositories;

public partial class Admin_StaticPageNew : System.Web.UI.Page
{
    StaticPageRepository rep = new StaticPageRepository();
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void BtnSaveClick(object sender, EventArgs e)
    {
        if (!Page.IsValid) { return; }
        var newStaticPage = new StaticPage();

        newStaticPage.Name = textbox1.Text;
        newStaticPage.Content = textbox2.Text;
        newStaticPage.Content_Ar = textbox3.Text;
        rep.Add(newStaticPage);

        Response.Redirect("StaticPageList.aspx");

    }
    protected void BtnCancelClick(object sender, EventArgs e)
    {
        Response.Redirect("StaticPageList.aspx");
    }
}