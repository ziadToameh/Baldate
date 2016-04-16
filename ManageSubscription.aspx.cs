using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class ManageSubscription : BasePage
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void btnSubmit_Click(object sender, EventArgs e)
    {
        var email = HttpUtility.HtmlEncode(txtEmail.Text);

        Utilities.SendUnsubscribeConfirmation(ConfigurationManager.AppSettings["Administrator_Contact"], email, "Unsubscribe From HanawaySite NewsLetter");
        Response.Redirect("Default.aspx");

    }
    protected void btnCancel_Click(object sender, EventArgs e)
    {
        Response.Redirect("Default.aspx");
    }
}