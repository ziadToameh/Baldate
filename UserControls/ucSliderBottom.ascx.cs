using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using app_code.Repositories;
using Resources;

public partial class UserControls_ucSliderBottom : System.Web.UI.UserControl
{
    EventsRepository rep = new EventsRepository();
    public int counter = 0;
    public string DisplayName;
    public string DisplayDesc;
    public string DisplayBrief;

    protected void Page_Load(object sender, EventArgs e)
    {
        DisplayName = Global.DisplayName;
        DisplayDesc = Global.DisplayDesc;
        DisplayBrief = Global.DisplayBrief;

        if (!IsPostBack)
        {
        }
    }
}