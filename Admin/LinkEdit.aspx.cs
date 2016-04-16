using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Admin_LinkEdit : System.Web.UI.Page
{
    LinkRepository rep = new LinkRepository();
    public int id;
    public string Image;
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            id = int.Parse(Request.QueryString["id"]);
            Bind();
            Session["linkResult"] = "";
        }
    }
    private void Bind()
    {
        var existingItem = rep.GetById(id);

        adId.Text = id.ToString();
        textbox1.Text = existingItem.Link1;
        txtName.Text = existingItem.Name;

    }
    protected void BtnSaveClick(object sender, EventArgs e)
    {

        var existingAd = rep.GetById(int.Parse(adId.Text));

        existingAd.Link1 = textbox1.Text;
        existingAd.Name = txtName.Text;

        rep.Edit(existingAd);

        Session["linkResult"] = "The Link was saved Successfully";

        Response.Redirect("LinksList.aspx");
    }

    protected void btnCancelClick(object sender, EventArgs e)
    {
        Response.Redirect("LinksList.aspx");
    }
}