using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Admin_ChangePasswordSuccess : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            var result = Request.QueryString["r"].ToString();
            if (result.Equals("1"))
            {
                message.Text = "The password is changed successfully";
            }
            else
            {
                message.Text = "Unable to change password !!";
            }
        }
    }
}