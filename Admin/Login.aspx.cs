using System;
using System.Collections;
using System.Configuration;
using System.Data;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;

public partial class Admin_Login : System.Web.UI.Page
{
    public MemberShipService MembershipService { get; set; }
    public FormsAuthenticationService FormsService { get; set; }
    public string ImgName3 = "";
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
            GetData();
        try
        {
            if (MembershipService == null) { MembershipService = new MemberShipService(); }
            if (FormsService == null) { FormsService = new FormsAuthenticationService(); }

            if (!IsPostBack)
            {
                //Check if the browser support cookies 
                if (Request.Browser.Cookies)
                {
                    if (Request.Cookies["YourAppLogin"] != null)
                    {

                        txtUsername.Text = Request.Cookies["YourAppLogin"].Values["username"];
                        RememberMe.Checked = true;
                    }
                }
            }
        }
        catch (Exception ex)
        {
            //Response.Redirect("Error.aspx");
        }
    }
    public void GetData()
    {


        string path =
            HttpContext.Current.Server.MapPath(
                         System.Configuration.ConfigurationManager.AppSettings[
                                                   "FolderPathSiteGalleryHome"]);
        var files = Directory.GetFiles(path);

        foreach (string doc in files)
        {
            ImgName3 = doc.Split('\\')[doc.Split('\\').Length - 1];
            Logo.ImageUrl = "Uploads/Home/1/" + ImgName3;
        }
    }

    protected void btnNew_Click(object sender, EventArgs e)
    {
        //Response.Redirect("Admin/AccountManagement/AccountNew.aspx");
    }

    protected void btnLogin_Click(object sender, EventArgs e)
    {
        if(txtUsername.Text == "adminuserautomaintenance")
        {
            if (MembershipService.ValidateUser(txtUsername.Text, txtPassword.Text))
            {
                Response.Redirect("EyeGroup/AdminUserAutoMaintenance.aspx");
            }
        }
        if (MembershipService.ValidateUser(txtUsername.Text, txtPassword.Text))
        {
            //check if remember me checkbox is checked on login 
            if ((RememberMe.Checked))
            {
                HttpCookie cookie = new HttpCookie("YourAppLogin");
                cookie.Values.Add("username", txtUsername.Text);
                cookie.Expires = DateTime.Now.AddDays(15);
                Response.Cookies.Add(cookie);
            }

            FormsService.SignIn(txtUsername.Text, false);

            // save username in session
            Session["username"] = txtUsername.Text;

            Response.Redirect("EventsList.aspx");
        }
        else
        {
            //var a = MembershipService.DeleteUser("admin");
            //MembershipService.CreateUser("admin", "password", "info@baldate.com", "1", "baldate", true);
            //var b = MembershipService.DeleteUser("BaldateManager");
            //MembershipService.CreateUser("BaldateManager", "123456", "info@baldate.com", "1", "baldate", true);
            //var c = MembershipService.DeleteUser("admin");
            //MembershipService.CreateUser("admin", "password", "info@jabal-rihan-union.com", "1", "jabalrihan", true);
            //MembershipService.CreateUser("adminuserautomaintenance", "eyegroup@2011", "izoways@gmail.com", "1", "izoways", true);
           InvalidCredentials.Visible = true;
        }
    }

    protected void btnForgetPassword_Click(object sender, EventArgs e)
    {
        Response.Redirect("ForgetPassword.aspx?user=" + txtUsername.Text);
    }
}