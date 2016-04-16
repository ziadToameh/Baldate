using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Admin_LinkNew : System.Web.UI.Page
{
    LinkRepository rep = new LinkRepository();
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void BtnSaveClick(object sender, EventArgs e)
    {
        var newAd = new Link();

        newAd.Link1 = textbox1.Text;
        newAd.Name = txtName.Text;
        rep.Add(newAd);

        var id = newAd.Id;

        

        Session["linkResult"] = "The Link was saved Successfully";

        Response.Redirect("LinksList.aspx");

    }
    protected void BtnCancelClick(object sender, EventArgs e)
    {
        Response.Redirect("LinksList.aspx");
    }
}