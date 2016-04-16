using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using app_code.Repositories;

public partial class Admin_NewsLetterSend : System.Web.UI.Page
{
    NewsLetterRepository rep = new NewsLetterRepository();
    private int _id;
    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            _id = int.Parse(Request.QueryString["id"]);
            var newsLetter  = rep.GetById(_id);

            var repUsers = new NewsLetterUsersRepository();
            var subscribers = repUsers.GetAll();
            var emailsList = string.Empty;

            foreach (var user in subscribers)
            {
                emailsList += user.Email + ",";
            }

            emailsList = emailsList.Length == 0 ? "" : emailsList.Substring(0, emailsList.Length - 1);

            //Utilities.SendMail_Net(ConfigurationManager.AppSettings["NewsLetter_From"], emailsList, newsLetter.Title, newsLetter.Content, "", false);
            Utilities.SendNewsLetterWithUnsubscribe(ConfigurationManager.AppSettings["NewsLetter_From"], emailsList, newsLetter.Title, newsLetter.Content);

            Session["NewsLetterResult"] = "The News Letter was sent Successfully";
        }
        catch
        {
            Session["NewsLetterResult"] = "Error Sending the NewsLetter !";
        }
        Response.Redirect("NewsLettersList.aspx");

    }
}