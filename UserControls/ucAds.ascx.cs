using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class UserControls_ucAds : System.Web.UI.UserControl
{
    AdRepository rep = new AdRepository();
    private DateTime filterdate;
    private DateTime defaultDate = new DateTime(1900, 1, 1);

    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
            GetData();
    }

    public void GetData()
    {
        IEnumerable<Ad> result;

        result = rep.GetAll().Take(3).OrderByDescending(e => e.Id);

        AdsList.DataSource = result;
        AdsList.DataBind();

    }

}