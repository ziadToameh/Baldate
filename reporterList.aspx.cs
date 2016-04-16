using app_code.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class reporterList : System.Web.UI.Page
{
    EventCategoryRepositroy catRep = new EventCategoryRepositroy();
    EventsRepository rep = new EventsRepository();
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
            GetData();
    }

    public void GetData()
    {
        int cat;
        cat = 25;
        var events = rep.GetByCategoryId(cat);
        rptList.DataSource = events;
        rptList.DataBind();

        try { Result.Text = Session["TickerResult"].ToString(); }
        catch { Result.Text = ""; }
    }

}