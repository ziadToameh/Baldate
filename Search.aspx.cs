using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Search : System.Web.UI.Page
{
    public string Query;

    protected void Page_Load(object sender, EventArgs e)
    {
        try { Query = Request.QueryString["q"]; }
        catch { Query = ""; }

    }
}