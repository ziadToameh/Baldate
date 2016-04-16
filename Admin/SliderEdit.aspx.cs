using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Admin_SliderEdit : System.Web.UI.Page
{
    SliderRepository rep = new SliderRepository();
    public int id;
    public string Image;
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            id = int.Parse(Request.QueryString["id"]);
            Bind();
            Session["Result"] = "";
        }
    }
    private void Bind()
    {
        var existingItem = rep.GetById(id);

        itemId.Text = id.ToString();
        txtDescription.Text = existingItem.Description;
        Image = existingItem.Name;


    }
    protected void BtnSaveClick(object sender, EventArgs e)
    {

        var existingItem = rep.GetById(int.Parse(itemId.Text));

        existingItem.Description = txtDescription.Text;

        rep.Edit(existingItem);

        Session["ResultSlider"] = "The Image was saved Successfully";

        Response.Redirect("SliderList.aspx");
    }

    protected void btnCancelClick(object sender, EventArgs e)
    {
        Response.Redirect("SliderList.aspx");
    }
}