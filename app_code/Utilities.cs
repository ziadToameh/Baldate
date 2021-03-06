﻿using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Net.Mime;
using System.Text;
using System.Web;

/// <summary>
/// Summary description for Utilities
/// </summary>
public class Utilities
{
    public Utilities()
    {
        //
        // TODO: Add constructor logic here
        //
    }

    public static bool SendCarPoolTemplateMail(string from, string to, string subject, string body, string attach, bool sendToBCC)
    {
        // TODO: test the image of this mail, it must be embedded
        // ref: http://www.codedigest.com/Articles/ASPNET/14_Email_with_Embedded_image_in_ASPNet_20.aspx
        //      http://aspalliance.com/1354_Sending_HTML_Mail_with_Embedded_Image_in_NET.8

        try
        {
            var emailMessage = new StringBuilder();

            // add message detail
            emailMessage.Append("<br /> <br />");
            emailMessage.Append("From: " + from);

            emailMessage.Append(body);

            emailMessage.Append("<br /> <br />");
            emailMessage.Append("Enjoy! ");
            emailMessage.Append("<br /> <br />");
            emailMessage.Append("Have a nice carpooling day,");
            emailMessage.Append("<br />");
            emailMessage.Append("Lebanon Carpooling Team");
            emailMessage.Append("<br /> <br /> <br />");
            emailMessage.Append("<img alt=\"\" hspace=0 src=\"cid:imageId\" align=baseline border=0 >");
            emailMessage.Append("<br /> <br /> <br />");
            emailMessage.Append("This email was automatically generated by the Lebanoncarpooling.com.");
            emailMessage.Append("<br />");
            emailMessage.Append("If you have any questions, please email us at <u> qanda@Lebanoncarpooling.com </u>");

            var email = new MailMessage { From = new MailAddress(from) };

            email.To.Add(new MailAddress(to));
            email.Subject = subject;
            email.Body = emailMessage.ToString();
            email.IsBodyHtml = true;

            AlternateView htmlView = AlternateView.CreateAlternateViewFromString(emailMessage.ToString(), null, "text/html");
            // LinkedResource imagelink = new LinkedResource(ConfigurationManager.AppSettings["CARPOOLING_LOGO_URL"], "image/jpeg");

            LinkedResource imagelink = new LinkedResource(HttpContext.Current.Server.MapPath("~//" + "Content/SiteImages/carpool_logo_email.jpg"), "image/jpeg");

            imagelink.ContentId = "imageId";
            imagelink.TransferEncoding = TransferEncoding.Base64;
            htmlView.LinkedResources.Add(imagelink);
            email.AlternateViews.Add(htmlView);

            //var attachImage = new Attachment(AppDomain.CurrentDomain.BaseDirectory + "/Content/SiteImages/carpool_logo_email.jpg") { ContentId = "Logo.jpg" };//ConfigurationManager.AppSettings["DEFAULT_EMAIL_LOGO"]);
            //, MediaTypeNames.Application.Octet
            //email.Attachments.Add(attachImage);

            var mailClient = new SmtpClient(ConfigurationManager.AppSettings["Mail_Server"]);
            mailClient.Send(email);
        }
        catch (Exception ex)
        {
            //Log eventual errors and rethrow them
            LogError(ex);
            return false;
        }
        return true;
    }




    public static void SendMail_Net(string from, string to, string subject, string body, string attach, bool SendToBCC, string bcc)
    {
        try
        {
            //Configure mail client (may need additional code for authenticated SMTP servers)
            var mailClient = new SmtpClient(ConfigurationManager.AppSettings["Mail_Server"], int.Parse(ConfigurationManager.AppSettings["Mail_Port"]));
            //var mailClient = new SmtpClient(ConfigurationManager.AppSettings["Mail_Server"]);

            //Create the mail message
            var mailMessage = new MailMessage(from, to, subject, body);

            //For SMTP servers that require authentication
            mailClient.Credentials = new NetworkCredential(ConfigurationManager.AppSettings["SmtpHost_UserName"], ConfigurationManager.AppSettings["SmtpHost_Password"]);
            //mailClient.EnableSsl = true;

            if (attach != string.Empty)
            {
                var attachImage = new System.Net.Mail.Attachment(attach);
                mailMessage.Attachments.Add(attachImage);
            }

            if (SendToBCC)
            {
                mailMessage.Bcc.Add(bcc);
            }

            //Send mail
            mailMessage.IsBodyHtml = true;

            mailClient.Send(mailMessage);


            //MailSender mail = new MailSender();
            //mail.MailClient = mailClient;
            //mail.MailMessage = mailMessage;

            //Thread t = new Thread(mail.SendEmail);
            //t.Start(); 

        }
        catch (Exception ex)
        {
            //Log eventual errors and rethrow them
           // Utilities.LogError(ex);
            
        }
    }

    public static void LogError(Exception ex)
    {
        //' get the current date and time
        string dateTime = DateTime.Now.ToLongDateString() + ", at " + DateTime.Now.ToShortTimeString();

        //' stores the error message
        string errorMessage = "Exception generated on " + dateTime;

        //' obtain the page that generated the error
        HttpContext context = HttpContext.Current;
        errorMessage = errorMessage + "<br /> Page location: " + context.Request.RawUrl + "</br>";

        //' build the error message
        errorMessage = errorMessage + "<br />  Message: " + ex.Message + "</br>";
        errorMessage = errorMessage + "<br />  Source: " + ex.Source + "</br>";
        errorMessage = errorMessage + "<br />  Stack Trace: " + "<br />" + "ex.StackTrace " + "</br>";

        //' send error email in case the option is activated in Web.Config
        if (bool.Parse(ConfigurationManager.AppSettings["EnableErrorLogEmail"]))
        {
            string from = "error@izoways.com";
            string to_ = ConfigurationManager.AppSettings["ErrorLogEmail"];
            string subject = ConfigurationManager.AppSettings["Site"] + " Error report";
            string body = errorMessage;
            SendMail_Net(from, to_, subject, body, "", false, "");
        }
    }

    public static bool SendMail(string from, string to, string subject, string message)
    {
        try
        {
            NetworkCredential loginInfo = new NetworkCredential(ConfigurationManager.AppSettings["Gmail_SmtpHost_UserName"], ConfigurationManager.AppSettings["Gmail_SmtpHost_Password"]);
            MailMessage msg = new MailMessage();
            msg.From = new MailAddress(from);
            msg.To.Add(new MailAddress(to));
            msg.Subject = subject;
            msg.Body = message;
            msg.IsBodyHtml = true;
            SmtpClient client = new SmtpClient(ConfigurationManager.AppSettings["Gmail_Server"]);
            client.EnableSsl = true;
            client.UseDefaultCredentials = false;
            client.Credentials = loginInfo;
            client.Send(msg);

            return true;
        }
        catch (Exception)
        {
            return false;
        }

    }

    public static bool SendNewsLetter(string from, string subject, string message, string bcc)
    {
        try
        {
            var loginInfo = new NetworkCredential(ConfigurationManager.AppSettings["Gmail_SmtpHost_UserName"], ConfigurationManager.AppSettings["Gmail_SmtpHost_Password"]);
            var msg = new MailMessage();
            msg.From = new MailAddress(from);
            msg.Bcc.Add(new MailAddress(bcc));
            msg.Subject = subject;
            msg.Body = message;
            msg.IsBodyHtml = true;
            var client = new SmtpClient(ConfigurationManager.AppSettings["Gmail_Server"])
                             {
                                 EnableSsl = true,
                                 UseDefaultCredentials = false,
                                 Credentials = loginInfo
                             };
            client.Send(msg);

            return true;
        }
        catch (Exception)
        {
            return false;
        }

    }


    public static void SendNewsLetterWithUnsubscribe(string from, string to, string subject, string message)
    {
        var unsubscribeLink = ConfigurationManager.AppSettings["UnSubscribeLink"];
        var unsubscribeMessage = "<br /><br /><br/><table width='100%'><tr><td width='200px'>&nbsp;</td><td>";
        unsubscribeMessage += "If you wisht to Manage your Subscription <a href=\"" + unsubscribeLink + "\">Click Here</a></td></tr></table>";
        var newMessage = message + unsubscribeMessage;

        var email1 = to.Substring(0, to.IndexOf(',', 0));

        SendMail_Net(from, email1, subject, newMessage, "", true, to);
    }

    public static void SendUnsubscribeConfirmation(string from, string to, string subject)
    {
        var unsubscribeLink = ConfigurationManager.AppSettings["UnSubscribeLink"];
        var unsubscribeMessage = "<br />Hi,<br /><br/><table width='100%'><tr><td>";
        unsubscribeMessage += "You Chose to Unsubscribe Form HanawaySite NewsLetters.<br />";
        unsubscribeMessage += "Please Click For Confrimation: <a href=\"" + unsubscribeLink + "\">UnSubscribe..</a><br /><br/>Thanks for using HanawaySite.</td></tr></table>";
       
        SendMail_Net(from, to, subject, unsubscribeMessage, "", false, "");
    }
}