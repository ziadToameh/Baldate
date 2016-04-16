using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using app_code.Repositories;
using Resources;

public partial class UserControls_ucArticles : System.Web.UI.UserControl
{
    ArticlesRepository rep = new ArticlesRepository();
    public string DisplayName;

    protected void Page_Load(object sender, EventArgs e)
    {
        DisplayName = Global.DisplayName;

        if (!Page.IsPostBack)
        {
            ResultsList.DataSource = rep.GetAll().Take(5);
            ResultsList.DataBind();
        }
    }

}