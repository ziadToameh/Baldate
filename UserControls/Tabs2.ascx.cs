using app_code.Repositories;
using Resources;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class UserControls_Tabs2 : System.Web.UI.UserControl
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
        Baladi1.DataSource = local;
        Baladi1.DataBind();
        var activities = rep.GetAllWithImagesByCatId((int)EventCategories.Social).OrderByDescending(n => n.Id).Take(3);
        Baladi2.DataSource = activities;
        Baladi2.DataBind();
        var health = rep.GetAllWithImagesByCatId((int)EventCategories.Health).OrderByDescending(n => n.Id).Take(3);
        Baladi3.DataSource = health;
        Baladi3.DataBind();
        //var sport = rep.GetByCategoryId((int)EventCategories.Official).OrderByDescending(n => n.Id).Take(5);
        //Baladi4.DataSource = sport;
        //Baladi4.DataBind();
        //var outercit = rep.GetByCategoryId((int)EventCategories.Sports).Take(5).OrderByDescending(n => n.Id);
        //Baladi5.DataSource = outercit;
        //Baladi5.DataBind();
        //var baladi6 = rep.GetByCategoryId((int)EventCategories.Others).Take(5).OrderByDescending(n => n.Id);
        //Baladi6.DataSource = baladi6;
        //Baladi6.DataBind();
        //var baladi7 = rep.GetByCategoryId((int)EventCategories.Out).Take(5).OrderByDescending(n => n.Id);
        //Baladi7.DataSource = baladi7;
        //Baladi7.DataBind();
    }
    public enum EventCategories
    {
        Local = 8,
        Social = 10,
        Health = 11
        //Official = 14,
        //Sports = 4,
        //Others = 16,
        //Out = 17,


    }
}