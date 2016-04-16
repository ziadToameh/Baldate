using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using app_code.Repositories;
using Resources;

public partial class Events : BasePage
{
    EventsRepository rep = new EventsRepository();
    EventCategoryRepositroy cRep = new EventCategoryRepositroy();
    private DateTime filterdate;
    private DateTime defaultDate = new DateTime(1900, 1, 1);

    public string DisplayPageLable = "Page: ";
    public string DisplayPageOfLable = " of ";

    public int Type;

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

        try
        {
            Type = int.Parse(Request.QueryString["id"]);
        }
        catch (Exception)
        {
            Type = -1;
        }

        if (!IsPostBack)
            GetData();

        var a = cRep.GetById(Type);
        if (a != null)
            lblTitle.Text = a.Name;

       switch(Type)
        {
            case 1:
                lblTitle.Text = "أخبار محلية";
                break;
            case 2:
                lblTitle.Text = "أخبار سياسية محلية ودولية"; 
                break;
            case 3:
                lblTitle.Text = "أخبار متنوعة";
                break;
            case 4:
                lblTitle.Text = "أخبار العباسية";
                break;
            case 5:
                lblTitle.Text = "الصفحة الاجتماعية";
                break;
            case 10:
                lblTitle.Text = "تحقيقات";
                break;
            case 6:
                lblTitle.Text = "أخبار رئيسية";
                break;
            case 7:
                lblTitle.Text = "وفيات";
                break;
            case 8:
                lblTitle.Text = "أقلامكم";
                break;
            case 11:
                lblTitle.Text = "مقالات";
                break;
            case 12:
                lblTitle.Text = "مقابلات";
                break;
            case 13:
                lblTitle.Text = "في الاغتراب";
                break;
            case 14:
                lblTitle.Text = "من الذاكرة";
                break;
            case 15:
                lblTitle.Text = "أطفالنا";
                break;
            case 16:
                lblTitle.Text = "ثقافة";
                break;
            case 17:
                lblTitle.Text = "إسلاميات";
                break;
            case 18:
                lblTitle.Text = "مطبخنا";
                break;
            case 19:
                lblTitle.Text = "صحة وتغذية";
                break;
            case 20:
                lblTitle.Text = "تكنولوجيا";
                break;
            case 21:
                lblTitle.Text = "أخبار رياضية";
                break;
            case 22:
                lblTitle.Text = "رياضة دولية";
                break;
            case 23:
                lblTitle.Text = "شخصيات";
                break;
            case 24:
                lblTitle.Text = "حدث في مثل هذا اليوم";
                break;
            default:
                lblTitle.Text = Global.newsEvents; 
                break; 
        }
    }

    public void GetData()
    {
        /*
        IEnumerable<vw_EventsImage> events;

        if (DateTime.Compare(filterdate, defaultDate) != 0)
            events = rep.GetByDate(filterdate);
        else
            events = rep.GetAllWithImages();

        EventsList.DataSource = events;
        EventsList.DataBind();
        
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
            IEnumerable<vw_EventsImage> events;

            if (DateTime.Compare(filterdate, defaultDate) != 0)
                events = rep.GetByDate(filterdate, Type);
            else
                events = Type == -1 ? rep.GetAllWithImages() : rep.GetAllWithImages(Type);

            //EventsList.DataSource = events;
            //EventsList.DataBind();

            if (events.Count() == 0) noData.Visible = true; else noData.Visible = false;

            // Populate the repeater control with the Items DataSet
            PagedDataSource objPds = new PagedDataSource();
            objPds.DataSource = events.ToList(); // rep.GetAll().ToList();
            objPds.AllowPaging = true;
            objPds.PageSize = 10;

            objPds.CurrentPageIndex = CurrentPage;

            lblCurrentPage.Text = DisplayPageLable + (CurrentPage + 1).ToString() + DisplayPageOfLable
                + objPds.PageCount.ToString();

            // Disable Prev or Next buttons if necessary
            cmdPrev.Enabled = !objPds.IsFirstPage;
            cmdNext.Enabled = !objPds.IsLastPage;

            EventsList.DataSource = objPds;
            EventsList.DataBind();
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