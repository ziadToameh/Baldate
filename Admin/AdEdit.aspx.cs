using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Admin_Images_AdEdit : System.Web.UI.Page
{
    AdRepository rep = new AdRepository();
    public int id;
    public string Image;
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            id = int.Parse(Request.QueryString["id"]);
            Bind();
            Session["AdResult"] = "";
        }
    }
    private void Bind()
    {
        var existingItem = rep.GetById(id);

        adId.Text = id.ToString();
        textbox1.Text = existingItem.Link;
        Image = existingItem.Image;


    }
    protected void BtnSaveClick(object sender, EventArgs e)
    {

        var existingAd = rep.GetById(int.Parse(adId.Text));

        existingAd.Link = textbox1.Text;

        rep.Edit(existingAd);

        Session["AdResult"] = "The Ad was saved Successfully";

        Response.Redirect("AdList.aspx");
    }

    protected void btnCancelClick(object sender, EventArgs e)
    {
        Response.Redirect("AdList.aspx");
    }
}