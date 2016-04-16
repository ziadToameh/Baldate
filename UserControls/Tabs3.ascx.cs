using app_code.Repositories;
using Resources;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class UserControls_Tabs3 : System.Web.UI.UserControl
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
        var local = rep.GetAllWithImagesByCatId((int)EventCategories.B1).OrderByDescending(n => n.Id).Take(3);
        Baladi1.DataSource = local;
        Baladi1.DataBind();
        var activities = rep.GetAllWithImagesByCatId((int)EventCategories.B2).OrderByDescending(n => n.Id).Take(3);
        Baladi2.DataSource = activities;
        Baladi2.DataBind();
        var health = rep.GetAllWithImagesByCatId((int)EventCategories.B3).OrderByDescending(n => n.Id).Take(3);
        Baladi3.DataSource = health;
        Baladi3.DataBind();
        var sport = rep.GetAllWithImagesByCatId((int)EventCategories.B4).OrderByDescending(n => n.Id).Take(3);
        Baladi4.DataSource = sport;
        Baladi4.DataBind();
        //var sport = rep.GetByCategoryId((int)EventCategories.B4).OrderByDescending(n => n.Id).Take(5);
        //Baladi4.DataSource = sport;
        //Baladi4.DataBind();
        //var outercit = rep.GetByCategoryId((int)EventCategories.B5).Take(5).OrderByDescending(n => n.Id);
        //Baladi5.DataSource = outercit;
        //Baladi5.DataBind();
        //var baladi6 = rep.GetByCategoryId((int)EventCategories.B6).Take(5).OrderByDescending(n => n.Id);
        //Baladi6.DataSource = baladi6;
        //Baladi6.DataBind();
        //var baladi7 = rep.GetByCategoryId((int)EventCategories.B7).Take(5).OrderByDescending(n => n.Id);
        //Baladi7.DataSource = baladi7;
        //Baladi7.DataBind();
    }
    public enum EventCategories
    {
        B1 = 14,
        B2 = 15,
        B3 = 16,
        B4 = 23,
        //B5 = 33,
        //B6 = 34,
        //B7 = 35
    }
}