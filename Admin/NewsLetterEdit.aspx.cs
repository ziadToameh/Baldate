using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Admin_NewsLetterEdit : System.Web.UI.Page
{
    NewsLetterRepository rep = new NewsLetterRepository();
    public int Id;

    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            Id = int.Parse(Request.QueryString["id"]);
            GetData();
        }
    }

    public void GetData()
    {
        var newsLetter = rep.GetById(Id);

        hiddenId.Text = newsLetter.Id.ToString();
        txtTitle.Text = newsLetter.Title;
        txtContent.Text = newsLetter.Content;
    }

    protected void BtnSaveClick(object sender, EventArgs e)
    {
        var existingItem = rep.GetById(int.Parse(hiddenId.Text));

        existingItem.Title = txtTitle.Text;
        existingItem.Content = txtContent.Text;

        rep.Edit(existingItem);

        Session["NewsLetterResult"] = "The NewsLetter was Saved Successfully";

        Response.Redirect("NewsLettersList.aspx");
    }
    protected void btnCancelClick(object sender, EventArgs e)
    {
        Response.Redirect("NewsLettersList.aspx");
    }
}