using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using app_code.Repositories;

public partial class Admin_EventsList : System.Web.UI.Page
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
		try
		{
			Result.Text = Session["EventResult"].ToString();
		}
		catch(Exception e)
		{
			Result.Text = "";
		}

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
            cat = -1;
        }
        var date = DateTime.Now;
        ddlMonth.SelectedValue = date.Month.ToString();
        txtNumberOfSomething.Text = date.Year.ToString();
        var events = rep.GetByCategoryIdByMonthYearWithCount(cat, date.Month, date.Year);
        rptList.DataSource = events;
        rptList.DataBind();

        ddlEventCategory.DataValueField = "Id";
        ddlEventCategory.DataTextField = "Name";
        ddlEventCategory.DataSource = catRep.GetAllWithoutHomeAds();
        ddlEventCategory.DataBind();
        ddlEventCategory.Items.Insert(0, new ListItem("----- Choose Category -----", "-1"));
    }

    protected void btnfilter_Click(object sender, EventArgs e)
    {
        int cat, month, year;
        try { cat = int.Parse(ddlEventCategory.SelectedValue); }
        catch (Exception) { cat = -1; }
        try { month = int.Parse(ddlMonth.SelectedValue); }
        catch (Exception) { month = -1; }
        try { year = int.Parse(txtNumberOfSomething.Text); }
        catch (Exception) { year = -1; }

        if (month == -1)
        {
            rptList.DataSource = rep.GetByCategoryIdByYearWithCount(cat, year);
            rptList.DataBind();
        }
        else
        {
            rptList.DataSource = rep.GetByCategoryIdByMonthYearWithCount(cat, month, year);
            rptList.DataBind();
        }

    }
}