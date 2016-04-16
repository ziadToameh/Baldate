using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class UserControls_Slider : System.Web.UI.UserControl
{
    SliderRepository rep = new SliderRepository();
    public int counter = 0;
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
            Bind();
    }

    public void Bind()
    {
        IEnumerable<SliderImage> result;

        result = rep.GetAll().Take(4);

        SliderList.DataSource = result;
        SliderList.DataBind();

        //SliderDetail.DataSource = result;
        //SliderDetail.DataBind();
    }
}