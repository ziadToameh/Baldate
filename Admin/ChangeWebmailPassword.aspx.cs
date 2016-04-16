using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Admin_ChangeWebmailPassword : System.Web.UI.Page
{
    public MemberShipService MembershipService { get; set; }
    protected void Page_Load(object sender, EventArgs e)
    {
        if (MembershipService == null) { MembershipService = new MemberShipService(); }
    }
    protected void btnSubmit_Click(object sender, EventArgs e)
    {
        try
        {
            var oldPass = ConfigurationManager.AppSettings["SmtpHost_Password"];
            if(oldPass == txtPassword.Text)
            {
                ConfigurationManager.AppSettings.Set("SmtpHost_Password", txtNewPassword.Text);
                Response.Redirect("ChangePasswordSuccess.aspx?r=1");
            }

            Response.Redirect("ChangePasswordSuccess.aspx?r=0");

        }
        catch (Exception ex)
        {
            Response.Redirect("ChangePasswordSuccess.aspx?r=0");
        }

    }
    protected void BtnCancelClick(object sender, EventArgs e)
    {
        Response.Redirect("EventsList.aspx");
    }
}