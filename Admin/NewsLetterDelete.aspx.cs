using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using app_code.Repositories;

public partial class Admin_NewsLetterDelete : System.Web.UI.Page
{
    NewsLetterRepository rep = new NewsLetterRepository();
    private int _id;
    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            _id = int.Parse(Request.QueryString["id"]);
            rep.Delete(_id);
            Session["NewsLetterResult"] = "The NewsLetter was Deleted Successfully";
        }
        catch
        {
            Session["NewsLetterResult"] = "Error Deleting the NewsLetter !";
        }
        Response.Redirect("NewsLettersList.aspx");

    }
}