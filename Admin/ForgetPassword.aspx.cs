using System;
using System.Collections;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;

public partial class Admin_ForgetPassword : System.Web.UI.Page
{
    public MemberShipService MembershipService { get; set; }
    protected void Page_Load(object sender, EventArgs e)
    {
        if (MembershipService == null) { MembershipService = new MemberShipService(); }

        if(!IsPostBack)
        {
            try
            {
                var conn = int.Parse(Session["ConnError"].ToString());
                if(conn == 1)
                    lblConnError.Visible = true;
            }
            catch(Exception ex)
            {
                
            }
        }
    }

    protected void btnCancel_Click(object sender, EventArgs e)
    {
        Response.Redirect("Login.aspx");
    }

    protected void btnContinue_Click(object sender, EventArgs e)
    {
        try
        {
            var username = txtUsername.Text;
            var user = MembershipService.GetUser(username, false);
            if (String.Compare(user.Email.ToLower(), txtMail.Text.ToLower()) == 0)
            {
                // email verified for the user

                var newpass = MembershipService.ResetPassword(username);

                var sitename = ConfigurationManager.AppSettings["Site_Name"];
                // send email of new password
                var emailMessage = new StringBuilder();

                // add message detail
                emailMessage.Append("<br /> <br />");
                emailMessage.Append("The password at " + sitename + " for user : <b>" + username +
                                    "</b> has been reset by the system.");
                emailMessage.Append("<br /> <br />");
                emailMessage.Append("The new password is: <b>" + newpass + "</b>");

                Utilities.SendMail(ConfigurationManager.AppSettings["rel_email"],
                                   ConfigurationManager.AppSettings["rel_owner"], sitename + ": Password Reset",
                                   emailMessage.ToString());

                Session["ConnError"] = 0;
                Response.Redirect("Login.aspx");
            }

            Session["ConnError"] = 0;
            lblerror.Visible = true;
        }
        catch (Exception ex)
        {
            //Response.Redirect("Error.aspx");
            Session["ConnError"] = 1;
            Response.Redirect("ForgetPassword.aspx");
        }
    }
}