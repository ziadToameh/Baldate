using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using app_code.Repositories;
using Resources;

public partial class UserControls_ucTabs : System.Web.UI.UserControl
{
    EventsRepository rep = new EventsRepository();
    ArticlesRepository rep1 = new ArticlesRepository();
    public string MoreLink;
    public string DisplayName;
    public string DisplayDesc;
    public string DisplayBrief;

    public string Lang;

    protected void Page_Load(object sender, EventArgs e)
    {
        Lang = (string)Session["CULTURE_Language"] ?? "ar-LB";
        MoreLink = Global.moreLink;
        DisplayName = Global.DisplayName;
        DisplayDesc = Global.DisplayDesc;
        DisplayBrief = Global.DisplayBrief;

        if (!IsPostBack)
            GetData();
    }

    public void GetData()
    {
        var local = rep.GetAllWithImagesByCatId((int)EventCategories.Local).OrderByDescending(n => n.Id).Take(3);
        LocalEvents.DataSource = local;
        LocalEvents.DataBind();
        var activities = rep.GetAllWithImagesByCatId((int)EventCategories.Social).OrderByDescending(n => n.Id).Take(3);
        Social.DataSource = activities;
        Social.DataBind();
        var health = rep.GetAllWithImagesByCatId((int)EventCategories.Health).OrderByDescending(n => n.Id).Take(3);
        Health.DataSource = health;
        Health.DataBind();
        //var sport = rep.GetHomeByCat((int)EventCategories.Sports).OrderByDescending(n => n.Id).Take(5);
        //Sports.DataSource = sport;
        //Sports.DataBind();
        //ResultsList.DataSource = rep1.GetAll().OrderByDescending(n => n.Id).Take(5);
        //ResultsList.DataBind();
        //var outercit = rep.GetHomeByCat((int)EventCategories.Out).Take(5).OrderByDescending(n => n.Id);
        //OuterCit.DataSource = outercit;
        //OuterCit.DataBind();
    }
    public enum EventCategories
    {
        Local = 1,
        Social = 2,
        Health = 3,
        //Sports = 4,
        //Out = 5
    }
}