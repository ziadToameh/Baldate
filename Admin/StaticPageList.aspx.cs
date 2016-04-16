using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using app_code.Repositories;

public partial class Admin_StaticPageList : System.Web.UI.Page
{
    StaticPageRepository rep = new StaticPageRepository();
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
            GetData();
    }
    public void GetData()
    {
        var staticPage = rep.GetAll();
        rptList.DataSource = staticPage;
        rptList.DataBind();

    }
}