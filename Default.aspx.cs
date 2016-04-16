using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using app_code.Repositories;
using Resources;

public partial class _Default : System.Web.UI.Page
{

    EventsRepository rep = new EventsRepository();
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
            GetData();
    }

    public void GetData()
    {
        //abbaseyye news
        repSocial1.DataSource = rep.GetFewWithImagesByCatId(4,1);
        repSocial1.DataBind();

        try
        {
            var tempRzay = rep.GetFewWithImagesByCatId(4, 2).Skip(1);
            //var id60 = tempRzay.ElementAt(0);
            //tempRzay = from e in tempRzay where e.Id != id60.Id select e;
            repSocial2.DataSource = tempRzay.OrderByDescending(e => e.Id);
            repSocial2.DataBind();

        }
        catch { }

        try
        {
            var tempRzay = rep.GetFewWithImagesByCatId(4, 3).Skip(2);
            //var id61 = tempRzay.ElementAt(0);
            //var id62 = tempRzay.ElementAt(1);
            //tempRzay = from e in tempRzay where e.Id != id61.Id && e.Id != id62.Id select e;
            repSocial3.DataSource = tempRzay.OrderByDescending(e => e.Id);
            repSocial3.DataBind();

        }
        catch { }


        try
        {
            var tempRzay = rep.GetFewWithImagesByCatId(4, 4).Skip(3);
            //var id63 = tempRzay.ElementAt(0);
            //var id64 = tempRzay.ElementAt(1);
            //var id65 = tempRzay.ElementAt(2);
            //tempRzay = from e in tempRzay where e.Id != id63.Id && e.Id != id64.Id && e.Id != id65.Id select e;
            repSocial4.DataSource = tempRzay.OrderByDescending(e => e.Id);
            repSocial4.DataBind();

        }
        catch { }
        try
        {
            var tempRzay = rep.GetFewWithImagesByCatId(4, 5).Skip(4);
            //var id66 = tempRzay.ElementAt(0);
            //var id67 = tempRzay.ElementAt(1);
            //var id68 = tempRzay.ElementAt(2);
            //var id69 = tempRzay.ElementAt(3);
            //tempRzay = from e in tempRzay where e.Id != id66.Id && e.Id != id67.Id && e.Id != id68.Id && e.Id != id69.Id select e;
            repSocial5.DataSource = tempRzay.OrderByDescending(e => e.Id);
            repSocial5.DataBind();

        }
        catch { }
        try
        {
            var tempRzay = rep.GetFewWithImagesByCatId(4, 15).Skip(5);
            //var id70 = tempRzay.ElementAt(0);
            //var id71 = tempRzay.ElementAt(1);
            //var id72 = tempRzay.ElementAt(2);
            //var id73 = tempRzay.ElementAt(3);
            //var id74 = tempRzay.ElementAt(4);
            //tempRzay = from e in tempRzay where e.Id != id70.Id && e.Id != id71.Id && e.Id != id72.Id && e.Id != id73.Id && e.Id != id74.Id select e;
            repSocial6.DataSource = tempRzay.OrderByDescending(e => e.Id);
            repSocial6.DataBind();

        }
        catch { }

        //social page
        repSocial20.DataSource = rep.GetFewWithImagesByCatId(5, 1);
        repSocial20.DataBind();

        try
        {
            var tempRzay = rep.GetFewWithImagesByCatId(5, 2).Skip(1);
            //var id80 = tempRzay.ElementAt(0);
            //tempRzay = from e in tempRzay where e.Id != id80.Id select e;
            repSocial21.DataSource = tempRzay.OrderByDescending(e => e.Id);
            repSocial21.DataBind();

        }
        catch { }

        try
        {
            var tempRzay = rep.GetFewWithImagesByCatId(5, 3).Skip(2);
            //var id81 = tempRzay.ElementAt(0);
            //var id82 = tempRzay.ElementAt(1);
            //tempRzay = from e in tempRzay where e.Id != id81.Id && e.Id != id82.Id select e;
            repSocial31.DataSource = tempRzay.OrderByDescending(e => e.Id);
            repSocial31.DataBind();

        }
        catch { }


        try
        {
            var tempRzay = rep.GetFewWithImagesByCatId(5, 4).Skip(3);
            //var id83 = tempRzay.ElementAt(0);
            //var id84 = tempRzay.ElementAt(1);
            //var id85 = tempRzay.ElementAt(2);
            //tempRzay = from e in tempRzay where e.Id != id83.Id && e.Id != id84.Id && e.Id != id85.Id select e;
            repSocial41.DataSource = tempRzay.OrderByDescending(e => e.Id);
            repSocial41.DataBind();

        }
        catch { }
        try
        {
            var tempRzay = rep.GetFewWithImagesByCatId(5, 5).Skip(4);
            //var id86 = tempRzay.ElementAt(0);
            //var id87 = tempRzay.ElementAt(1);
            //var id88 = tempRzay.ElementAt(2);
            //var id89 = tempRzay.ElementAt(3);
            //tempRzay = from e in tempRzay where e.Id != id86.Id && e.Id != id87.Id && e.Id != id88.Id && e.Id != id89.Id select e;
            repSocial51.DataSource = tempRzay.OrderByDescending(e => e.Id);
            repSocial51.DataBind();

        }
        catch { }
        //مقابلات
        var national = rep.GetFewWithImagesByCatId(12, 1);
        National.DataSource = national;
        National.DataBind();

        //var id31 = national.ElementAt(0);
        var tempNational = rep.GetTakeByCategoryId(12, 4).Skip(1);
        //tempNational = from e in tempNational where e.Id != id31.Id select e;
        repNational.DataSource = tempNational.OrderByDescending(e => e.Id);
        repNational.DataBind();
        //أقلامكم
        var pens = rep.GetFewWithImagesByCatId(8, 1);
        repPens.DataSource = pens;
        repPens.DataBind();

        //تحقيقات
        var research = rep.GetFewWithImagesByCatId(10, 1);
        repResearch.DataSource = research;
        repResearch.DataBind();

        //مقالات
        var articles = rep.GetFewWithImagesByCatId(11, 1);
        repArticles.DataSource = articles;
        repArticles.DataBind();

        //رياضة
        var sport = rep.GetFewWithImagesByCatId(21, 3);
        repSport.DataSource = sport;
        repSport.DataBind();
        //var id171 = sport.ElementAt(0);
        var tempsport = rep.GetTakeByCategoryId(21, 13).Skip(1);
        //tempsport = from e in tempsport where e.Id != id171.Id select e;
        repSports.DataSource = tempsport.OrderByDescending(e => e.Id);
        repSports.DataBind();


        //ثقافة
        var edu = rep.GetFewWithImagesByCatId(16, 1);
        repEdu.DataSource = edu;
        repEdu.DataBind();

        //في الاغتراب
        var lebanon = rep.GetFewWithImagesByCatId(13, 1);
        Lebanon.DataSource = lebanon;
        Lebanon.DataBind();

        //var id3 = lebanon.ElementAt(0);
        var tempLebanon = rep.GetTakeByCategoryId(13, 4).Skip(1);
        //tempLebanon = from e in tempLebanon where e.Id != id3.Id select e;
        replebanon.DataSource = tempLebanon.OrderByDescending(e => e.Id);
        replebanon.DataBind();
        //أخبار سياسية محلية ودولية
        var local = rep.GetFewWithImagesByCatId(2, 10);
        LocalEvents.DataSource = local;
        LocalEvents.DataBind();
        //أخبار محلية
        var activities = rep.GetFewWithImagesByCatId(1, 3);
        Social.DataSource = activities;
        Social.DataBind();
        var tempsocial = rep.GetTakeByCategoryId(1, 13).Skip(1);
        //tempsocial = from e in tempsocial where e.Id != id3.Id select e;
        repSocial.DataSource = tempsocial.OrderByDescending(e => e.Id);
        repSocial.DataBind();
        //أخبار متنوعة
        var health = rep.GetFewWithImagesByCatId(3, 3);
        Health.DataSource = health;
        Health.DataBind();
       
        var templocal = rep.GetTakeByCategoryId(3, 10).Skip(3);
        //tempsocial = from e in tempsocial where e.Id != id3.Id select e;
        repLocal.DataSource = templocal.OrderByDescending(e => e.Id);
        repLocal.DataBind();
        //كاريكاتير
        var baladi11 = rep.GetFewWithImagesByCatId(20, 1);
        Baladi11.DataSource = baladi11;
        Baladi11.DataBind();
        //مطبخنا
        var baladi12 = rep.GetFewWithImagesByCatId(17, 1);
        Baladi12.DataSource = baladi12;
        Baladi12.DataBind();
        //صحة وتغذية
        var baladi13 = rep.GetFewWithImagesByCatId(18, 1);
        Baladi13.DataSource = baladi13;
        Baladi13.DataBind();
        //تكنولوجيا
        var baladi14 = rep.GetFewWithImagesByCatId(19, 1);
        Baladi14.DataSource = baladi14;
        Baladi14.DataBind();
        //من الذاكرة
        var baladi15 = rep.GetFewWithImagesByCatId(14, 1);
        Baladi15.DataSource = baladi15;
        Baladi15.DataBind();
        //أطفالنا
        var baladi16 = rep.GetFewWithImagesByCatId(15, 1);
        Baladi16.DataSource = baladi16;
        Baladi16.DataBind();
        //شخصيات
        var baladi17 = rep.GetFewWithImagesByCatId(23, 1);
        Baladi17.DataSource = baladi17;
        Baladi17.DataBind();


        //Ads
        var ads = rep.GetFewWithImagesByCatId(36, 1);
        repHAd111.DataSource = ads;
        repHAd111.DataBind();

        ads = rep.GetFewWithImagesByCatId(37, 1);
        repHAd112.DataSource = ads;
        repHAd112.DataBind();


        ads = rep.GetFewWithImagesByCatId(38, 1);
        repHAd113.DataSource = ads;
        repHAd113.DataBind();

        ads = rep.GetFewWithImagesByCatId(39, 1);
        repHAd114.DataSource = ads;
        repHAd114.DataBind();
        ads = rep.GetFewWithImagesByCatId(40, 1);
        repHAd115.DataSource = ads;
        repHAd115.DataBind();

        ads = rep.GetFewWithImagesByCatId(41, 1);
        repHAd116.DataSource = ads;
        repHAd116.DataBind();
        ads = rep.GetFewWithImagesByCatId(42, 1);
        repHAd117.DataSource = ads;
        repHAd117.DataBind();
        ads = rep.GetFewWithImagesByCatId(43, 1);
        repHAd118.DataSource = ads;
        repHAd118.DataBind();
        ads = rep.GetFewWithImagesByCatId(44, 1);
        repHAd119.DataSource = ads;
        repHAd119.DataBind();
        ads = rep.GetFewWithImagesByCatId(45, 1);
        repHAd120.DataSource = ads;
        repHAd120.DataBind();
        ads = rep.GetFewWithImagesByCatId(46, 1);
        repHAd121.DataSource = ads;
        repHAd121.DataBind();
        ads = rep.GetFewWithImagesByCatId(47, 1);
        repHAd122.DataSource = ads;
        repHAd122.DataBind();
        ads = rep.GetFewWithImagesByCatId(48, 1);
        repHAd123.DataSource = ads;
        repHAd123.DataBind();
        ads = rep.GetFewWithImagesByCatId(49, 1);
        repHAd124.DataSource = ads;
        repHAd124.DataBind();
        ads = rep.GetFewWithImagesByCatId(50, 1);
        repHAd125.DataSource = ads;
        repHAd125.DataBind();
        ads = rep.GetFewWithImagesByCatId(51, 1);
        repHAd126.DataSource = ads;
        repHAd126.DataBind();
        ads = rep.GetFewWithImagesByCatId(52, 1);
        repHAd127.DataSource = ads;
        repHAd127.DataBind();
        ads = rep.GetFewWithImagesByCatId(53, 1);
        repHAd128.DataSource = ads;
        repHAd128.DataBind();
        ads = rep.GetFewWithImagesByCatId(54, 1);
        repHAd129.DataSource = ads;
        repHAd129.DataBind();
        ads = rep.GetFewWithImagesByCatId(55, 1);
        repHAd130.DataSource = ads;
        repHAd130.DataBind();
        ads = rep.GetFewWithImagesByCatId(56, 1);
        repHAd131.DataSource = ads;
        repHAd131.DataBind();
        ads = rep.GetFewWithImagesByCatId(57, 1);
        repHAd132.DataSource = ads;
        repHAd132.DataBind();
        ads = rep.GetFewWithImagesByCatId(58, 1);
        repHAd133.DataSource = ads;
        repHAd133.DataBind();
        ads = rep.GetFewWithImagesByCatId(59, 1);
        repHAd134.DataSource = ads;
        repHAd134.DataBind();
    }
    public enum EventCategories
    {
        Local = 1,
        Social = 2,
        Health = 3,
        Official = 4,
        Sports = 3,
        Others = 12,
        Achievments = 13,
        Vision = 24,
        B1 = 4,
        Soc2 = 5,
        B3 = 7,
        B4 = 20,
        B5 = 17,
        B6 = 18,
        B7 = 19,
        B8 = 14,
        B9 = 15,
        B10 = 23,
        Soc1 = 4,
    }
}