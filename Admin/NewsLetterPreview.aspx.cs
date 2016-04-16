using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using app_code.Repositories;

public partial class Admin_NewsLetterPreview : System.Web.UI.Page
{
    NewsLetterRepository rep = new NewsLetterRepository();
    public int id;

    protected void Page_Load(object sender, EventArgs e)
    {
        id = int.Parse(Request.QueryString["id"]);

        if (!IsPostBack)
            GetData();
    }

    public void GetData()
    {
        NewsLetter page = rep.GetById(id);
        if (page != null)
        {
            lblTitle.Text = page.Title;
            lblDate.Text = page.DateSent.ToString();
            content.InnerHtml = page.Content;
        }

    }
    protected void btnBack_Click(object sender, EventArgs e)
    {
        Response.Redirect("NewsLettersList.aspx");
    }
}