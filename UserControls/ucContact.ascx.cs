using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Resources;

public partial class UserControls_ucContact : System.Web.UI.UserControl
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void Newsletter_Click(object sender, EventArgs e)
    {
        MunicipalityWebService myService = new MunicipalityWebService();
        if (myService.Subscribe(usermail.Text))
        {
            usermail.Text = "";
            result.Text = Global.subscribeSuccess;
        }
        else
            result.Text = Global.subscribeError;
    }
}