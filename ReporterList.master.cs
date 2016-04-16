using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class ReporterList : System.Web.UI.MasterPage
{
    public string ImgName3 = "";
    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            var a = Session["usernameReporter"].ToString();
        }
        catch
        {
            Response.Redirect("Reporter.aspx");
        } 
    }

}
