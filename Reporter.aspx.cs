using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Admin_Reporter : System.Web.UI.Page
{
    public string user1 = System.Configuration.ConfigurationManager.AppSettings["user1"];
    public string password1 = System.Configuration.ConfigurationManager.AppSettings["password1"];
    protected void Page_Load(object sender, EventArgs e)
    {
       
    }
    protected void btnLogin_Click(object sender, EventArgs e)
    {
        if (txtUsername.Text == user1 && txtPassword.Text == password1)
        {
            Session["usernameReporter"] = txtUsername.Text;

            Response.Redirect("ReporterList.aspx");
        }
        else {
            InvalidCredentials.Visible= true;
        }
    }
}