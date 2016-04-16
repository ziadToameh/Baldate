using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using app_code.Repositories;

public partial class Admin_NewsLetter : System.Web.UI.Page
{
    NewsLetterRepository rep = new NewsLetterRepository();

    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            Session["NewsLetterResult"] = "";
        }
    }

    protected void BtnSaveClick(object sender, EventArgs e)
    {

        var newItem = new NewsLetter();

        newItem.Title = txtTitle.Text;
        newItem.DateSent = DateTime.Now.Date;
        newItem.Content = txtContent.Text;

        Session["NewsLetterResult"] = "The NewsLetter was Added Successfully";

        rep.Add(newItem);
        /*
        var repUsers = new NewsLetterUsersRepository();
        var subscribers = repUsers.GetAll();
        var emailsList = string.Empty;

        foreach(var user in subscribers)
        {
            emailsList = user.Email + ",";
        }

        emailsList = emailsList.Substring(0, emailsList.Length - 1);

        Utilities.SendMail_Net(ConfigurationManager.AppSettings["NewsLetter_From"], emailsList, txtTitle.Text, txtContent.Text, "", false);

        //Utilities.SendNewsLetter(ConfigurationManager.AppSettings["NewsLetter_From"], txtTitle.Text, txtContent.Text, emailsList);
        */
        Response.Redirect("NewsLettersList.aspx");


    }
    protected void btnCancelClick(object sender, EventArgs e)
    {
        Response.Redirect("NewsLettersList.aspx");
    }
}