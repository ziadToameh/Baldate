using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using app_code.Repositories;

public partial class UserControls_ucAdsV : System.Web.UI.UserControl
{
    EventsRepository rep = new EventsRepository();
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
            GetData();
    }
    public void GetData()
    {
        var ads = rep.GetAllWithImagesByCatId(60).OrderByDescending(e => e.Id).Take(1);
        repHAd1.DataSource = ads;
        repHAd1.DataBind();
        ads = rep.GetAllWithImagesByCatId(61).OrderByDescending(e => e.Id).Take(1);
        repHAd2.DataSource = ads;
        repHAd2.DataBind();

        ads = rep.GetAllWithImagesByCatId(62).OrderByDescending(e => e.Id).Take(1);
        repHAd3.DataSource = ads;
        repHAd3.DataBind();

        ads = rep.GetAllWithImagesByCatId(63).OrderByDescending(e => e.Id).Take(1);
        repHAd4.DataSource = ads;
        repHAd4.DataBind();

        ads = rep.GetAllWithImagesByCatId(64).OrderByDescending(e => e.Id).Take(1);
        repHAd5.DataSource = ads;
        repHAd5.DataBind();

        ads = rep.GetAllWithImagesByCatId(65).OrderByDescending(e => e.Id).Take(1);
        repHAd6.DataSource = ads;
        repHAd6.DataBind();

        ads = rep.GetAllWithImagesByCatId(66).OrderByDescending(e => e.Id).Take(1);
        repHAd7.DataSource = ads;
        repHAd7.DataBind();

        ads = rep.GetAllWithImagesByCatId(67).OrderByDescending(e => e.Id).Take(1);
        repHAd8.DataSource = ads;
        repHAd8.DataBind();

        ads = rep.GetAllWithImagesByCatId(68).OrderByDescending(e => e.Id).Take(1);
        repHAd9.DataSource = ads;
        repHAd9.DataBind();

        ads = rep.GetAllWithImagesByCatId(69).OrderByDescending(e => e.Id).Take(1);
        repHAd10.DataSource = ads;
        repHAd10.DataBind();

        ads = rep.GetAllWithImagesByCatId(70).OrderByDescending(e => e.Id).Take(1);
        repHAd11.DataSource = ads;
        repHAd11.DataBind();

        ads = rep.GetAllWithImagesByCatId(71).OrderByDescending(e => e.Id).Take(1);
        repHAd12.DataSource = ads;
        repHAd12.DataBind();

        ads = rep.GetAllWithImagesByCatId(72).OrderByDescending(e => e.Id).Take(1);
        repHAd13.DataSource = ads;
        repHAd13.DataBind();

        ads = rep.GetAllWithImagesByCatId(73).OrderByDescending(e => e.Id).Take(1);
        repHAd14.DataSource = ads;
        repHAd14.DataBind();

        ads = rep.GetAllWithImagesByCatId(74).OrderByDescending(e => e.Id).Take(1);
        repHAd15.DataSource = ads;
        repHAd15.DataBind();

        ads = rep.GetAllWithImagesByCatId(75).OrderByDescending(e => e.Id).Take(1);
        repHAd16.DataSource = ads;
        repHAd16.DataBind();
        ads = rep.GetAllWithImagesByCatId(76).OrderByDescending(e => e.Id).Take(1);
        repHAd17.DataSource = ads;
        repHAd17.DataBind();
        ads = rep.GetAllWithImagesByCatId(77).OrderByDescending(e => e.Id).Take(1);
        repHAd18.DataSource = ads;
        repHAd18.DataBind();
    }
}