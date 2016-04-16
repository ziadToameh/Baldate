using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using app_code.Repositories;

public partial class Admin_HomeAd : System.Web.UI.Page
{
    EventCategoryRepositroy catRep = new EventCategoryRepositroy();
    EventsRepository rep = new EventsRepository();

    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
            GetData();

        try{ lblMessage.Text = Session["HomeAdResult"].ToString();}
        catch { lblMessage.Text = ""; }

    }

    public void GetData()
    {
        int cat;
        try
        {
            if (!String.IsNullOrEmpty(ddlEventCategory.SelectedValue) && ddlEventCategory.SelectedValue != "")
            {
                cat = int.Parse(ddlEventCategory.SelectedValue);
            }
            else
            {
                cat = int.Parse(Request.QueryString["id"]);
                ddlEventCategory.SelectedValue = cat.ToString();
            }

        }
        catch (Exception)
        {
            cat = 31;
            ddlEventCategory.SelectedValue = cat.ToString();
        }
        var events = rep.GetByCategoryId(cat);
        rptList.DataSource = events;
        rptList.DataBind();

        ddlEventCategory.DataValueField = "Id";
        ddlEventCategory.DataTextField = "Name";
        ddlEventCategory.DataSource = catRep.GetAllWithHomeAds();
        ddlEventCategory.DataBind();
        ddlEventCategory.Items.Insert(0, new ListItem("----- Choose Category -----", "-1"));
    }

    protected void btnfilter_Click(object sender, EventArgs e)
    {
        int cat;
        try
        {
            cat = int.Parse(ddlEventCategory.SelectedValue);

        }
        catch (Exception)
        {
            cat = 31;
            ddlEventCategory.SelectedValue = cat.ToString();
        }

        rptList.DataSource = rep.GetByCategoryId(cat);
        rptList.DataBind();

    }
}