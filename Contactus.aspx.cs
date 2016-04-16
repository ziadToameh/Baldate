using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Contactus : BasePage
{
    public string ContactPhone = System.Configuration.ConfigurationManager.AppSettings["contact_phone"];
    public string ContactCell = System.Configuration.ConfigurationManager.AppSettings["contact_cell"];
    public string Fax = System.Configuration.ConfigurationManager.AppSettings["fax"];
    public string EmailB = System.Configuration.ConfigurationManager.AppSettings["email"];
    public string Address1 = System.Configuration.ConfigurationManager.AppSettings["address1"];
    public string Address2 = System.Configuration.ConfigurationManager.AppSettings["address2"];
    public string Address3 = System.Configuration.ConfigurationManager.AppSettings["address3"];
    public string DomainName = System.Configuration.ConfigurationManager.AppSettings["Domain_Name"];

    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void btnSubmit_Click(object sender, EventArgs e)
    {
        var name = HttpUtility.HtmlEncode(txtName.Text);

        var trimmedName = string.Empty;

        var cName = name.Split(' ');

        trimmedName = cName.Where(c => !string.IsNullOrEmpty(c) && !string.IsNullOrWhiteSpace(c)).Aggregate(trimmedName, (current, c) => current + c);

        var email = HttpUtility.HtmlEncode(trimmedName + DomainName);

        //var name = HttpUtility.HtmlEncode(txtName.Text);
        //var email = HttpUtility.HtmlEncode(txtEmail.Text);
        var subject = HttpUtility.HtmlEncode(txtSubject.Text);
        var message = HttpUtility.HtmlEncode(txtMessage.Text);

        var emailMessage = new StringBuilder();

        // add message detail
        emailMessage.Append("<br /> <br />Sender Info:<br />");
        emailMessage.Append("Name: " + HttpUtility.HtmlEncode(name));
        emailMessage.Append("<br />");
        emailMessage.Append("Email: " + HttpUtility.HtmlEncode(txtEmail.Text));
        emailMessage.Append("<br /><br /><br />Message:<br />");

        emailMessage.Append(message);

        Utilities.SendMail_Net(email, ConfigurationManager.AppSettings["Administrator_Contact"], subject, emailMessage.ToString(), "", false, "");

        //Utilities.SendMail_Net(email, ConfigurationManager.AppSettings["Administrator_Contact"], subject, message,"",false, "");
        Response.Redirect("MessageSent.aspx");

    }

    protected void btnCancel_Click(object sender, EventArgs e)
    {
        Response.Redirect("Default.aspx");
    }
}