using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Admin_EyeGroup_AdminUserAutoMaintenance : System.Web.UI.Page
{
    public FormsAuthenticationService FormsService { get; set; }
    public MemberShipService MembershipService { get; set; }
    protected void Page_Load(object sender, EventArgs e)
    {
        if (MembershipService == null) { MembershipService = new MemberShipService(); }
        if (FormsService == null) { FormsService = new FormsAuthenticationService(); }

        try
        {
            username.Text = Session["username"].ToString();
            Session.Timeout = 100;
        }
        catch (Exception)
        {
            Response.Redirect("../Login.aspx");
        }
    }

    protected void btnCancel_Click(object sender, EventArgs e)
    {
        Response.Redirect("../Login.aspx");
    }

    protected void btnContinue_Click(object sender, EventArgs e)
    {
        try
        {
             var a = MembershipService.DeleteUser(txtUsername.Text);
             MembershipService.CreateUser(txtUsername.Text, txtpassword.Text, txtMail.Text, "1", txtAnswer.Text, true);
             Response.Redirect("../Login.aspx");
        }
        catch (Exception ex)
        {
            Response.Redirect("../Login.aspx");
        }
    }

    protected void SignoutClick(object sender, EventArgs e)
    {
        FormsService.SignOut();
        Response.Redirect("Login.aspx");
    }

}