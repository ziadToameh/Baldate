using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using app_code.Repositories;
using Resources;

public partial class Static : BasePage
{
    StaticPageRepository rep = new StaticPageRepository();
    public int id;
    public string Lang;

    protected void Page_Load(object sender, EventArgs e)
    {
        id = int.Parse(Request.QueryString["id"]);
        Lang = (string)Session["CULTURE_Language"] ?? "ar-LB";

        if (!IsPostBack)
            GetData();
    }

    public void GetData()
    {
        StaticPage page = rep.GetById(id);
        if (page != null)
        {
            lblTitle.Text = GetTitle(page.Id);

            content.InnerHtml = Lang == "ar-LB" ? page.Content_Ar : page.Content;
        }
    }

    public string GetTitle(int id)
    {
        string title = string.Empty;

        switch(id)
        {
            case 1: // History of Town
                title = "التسمية والموقع الجغرافي";
                break;
            case 2: // about municipality
                title = "السكان والعائلات";
                break;
            case 3: // achievements
                title = "مناطق وأحياء";
                break;
            case 4: // future vision
                title = "من نحن";
                break;
            case 5: // tour guide
                title = "مجزرة العباسية";
                break;
            
        }

        return title;
    }

}