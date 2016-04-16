using app_code.Repositories;
using Resources;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class iContentSlider : System.Web.UI.Page
{
    EventsRepository rep = new EventsRepository();
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
        var others = rep.GetAllWithImagesByCatId(6).OrderByDescending(n => n.Id).Take(5);
        SliderList.DataSource = others;
        SliderList.DataBind();
        var thumb = rep.GetAllWithImagesByCatId(6).OrderByDescending(n => n.Id).Take(5);
        repThumbs.DataSource = thumb;
        repThumbs.DataBind();
    }
   
}