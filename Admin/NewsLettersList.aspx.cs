using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using app_code.Repositories;

public partial class Admin_NewsLettersList : System.Web.UI.Page
{
    NewsLetterRepository rep = new NewsLetterRepository();
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
            GetData();
        try
        {
            Result.Text = Session["NewsLetterResult"].ToString();
        }
        catch (Exception)
        {
            Result.Text = string.Empty;
        }
    }
    public void GetData()
    {
        var staticPage = rep.GetAll();
        rptList.DataSource = staticPage;
        rptList.DataBind();
    }
}