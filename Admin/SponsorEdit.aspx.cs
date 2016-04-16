using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Admin_SponsorEdit : System.Web.UI.Page
{
    SponsorsRepository rep = new SponsorsRepository();
    public int id;
    public string Image;
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            id = int.Parse(Request.QueryString["id"]);
            Bind();
            Session["SponsorResult"] = "";
        }
    }
    private void Bind()
    {
        var existingItem = rep.GetById(id);

        SponsorId.Text = id.ToString();
        textbox1.Text = existingItem.Link;
        txtDescription.Text = existingItem.Description;
        Image = existingItem.Image;


    }
    protected void BtnSaveClick(object sender, EventArgs e)
    {

        var existingAd = rep.GetById(int.Parse(SponsorId.Text));

        existingAd.Link = textbox1.Text;

        rep.Edit(existingAd);

        Session["SponsorResult"] = "The Sponsor was Updated Successfully";

        Response.Redirect("SponsorsList.aspx");
    }

    protected void btnCancelClick(object sender, EventArgs e)
    {
        Response.Redirect("AdList.aspx");
    }
}