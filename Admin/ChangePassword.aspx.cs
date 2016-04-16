using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Admin_ChangePassword : System.Web.UI.Page
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
            var user = Session["username"].ToString();
            var newpass = MembershipService.ResetPassword(user);
            if (MembershipService.ChangePassword(user, newpass, txtNewPassword.Text))
                Response.Redirect("ChangePasswordSuccess.aspx?r=1");
            else
                Response.Redirect("ChangePasswordSuccess.aspx?r=0");

            Session["Result"] = "";
        }
        catch (Exception ex)
        {
            //Response.Redirect("Error.aspx");
        }
        
    }
    protected void BtnCancelClick(object sender, EventArgs e)
    {
        Response.Redirect("EventsList.aspx");
    }
}