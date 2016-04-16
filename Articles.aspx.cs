using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using app_code.Repositories;
using Resources;

public partial class Articles : BasePage
{
    ArticlesRepository rep = new ArticlesRepository();
    private DateTime filterdate;
    private DateTime defaultDate = new DateTime(1900, 1, 1);

    public string DisplayPageLable = "Page: ";
    public string DisplayPageOfLable = " of ";

    public string MoreLink;
    public string DisplayName;
    public string DisplayDesc;
    public string DisplayBrief;

    protected void Page_Load(object sender, EventArgs e)
    {
        DisplayName = Global.DisplayName;
        DisplayDesc = Global.DisplayDesc;
        DisplayBrief = Global.DisplayBrief;
        MoreLink = Global.moreLink;

        try
        {
            filterdate = DateTime.Parse(Request.QueryString["date"]);
            Session["EventDate"] = filterdate.ToShortDateString();
        }
        catch
        {
            filterdate = defaultDate;
            Session["EventDate"] = "";
        }

        if (!IsPostBack)
            GetData();
    }

    public void GetData()
    {
        /*
        IEnumerable<vw_ArticlesImage> events;

        if (DateTime.Compare(filterdate, defaultDate) != 0)
            events = rep.GetByDate(filterdate);
        else
            events = rep.GetAllWithImages();

        ResultsList.DataSource = events;
        ResultsList.DataBind();

        if (events.Count() == 0) noData.Visible = true; else noData.Visible = false;
        */
        ItemsGet();
    }

    public int CurrentPage
    {
        get
        {
            // look for current page in ViewState
            object o = this.ViewState["_CurrentPage"];
            if (o == null)
                return 0;    // default to showing the first page
            else
                return (int)o;
        }

        set
        {
            this.ViewState["_CurrentPage"] = value;
        }
    }

    private void ItemsGet()
    {

        try
        {
            IEnumerable<vw_ArticlesImage> events;

            if (DateTime.Compare(filterdate, defaultDate) != 0)
                events = rep.GetByDate(filterdate);
            else
                events = rep.GetAllWithImages();

            if (events.Count() == 0) noData.Visible = true; else noData.Visible = false;

            // Populate the repeater control with the Items DataSet
            PagedDataSource objPds = new PagedDataSource();
            objPds.DataSource = events.ToList(); // rep.GetAll().ToList();
            objPds.AllowPaging = true;
            objPds.PageSize = 5;

            objPds.CurrentPageIndex = CurrentPage;

            lblCurrentPage.Text = DisplayPageLable + (CurrentPage + 1).ToString() + DisplayPageOfLable
                + objPds.PageCount.ToString();

            // Disable Prev or Next buttons if necessary
            cmdPrev.Enabled = !objPds.IsFirstPage;
            cmdNext.Enabled = !objPds.IsLastPage;

            ResultsList.DataSource = objPds;
            ResultsList.DataBind();
        }
        catch (Exception ex)
        {
            //ErrorLog.LogError(ex, ex.Source, ex.TargetSite.Name);
        }
    }

    public void cmdPrev_Click(object sender, System.EventArgs e)
    {
        // Set viewstate variable to the previous page
        CurrentPage -= 1;

        // Reload control
        ItemsGet();
    }

    public void cmdNext_Click(object sender, System.EventArgs e)
    {
        // Set viewstate variable to the next page
        CurrentPage += 1;

        // Reload control
        ItemsGet();
    }

}