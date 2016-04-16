using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using app_code.Repositories;

public partial class BrowseImage : System.Web.UI.Page
{
    private int id;
    public int type;

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            id = int.Parse(Request.QueryString["id"]);
            type = int.Parse(Request.QueryString["type"]);
        }
        catch
        {
            id = 0;
            type = 1;
        }
        Bind();
    }

    private void Bind()
    {
        if (type == 1) // EVENT
        {
            EventImageRepository rep = new EventImageRepository();

            var image = rep.GetById(id);

            if (image != null)
            {
                eventImage.ImageUrl = "Admin/Uploads/Events/" + image.EventId + "/" + image.Name;
                eventImage.AlternateText = image.Name;
                eventImage.ToolTip = image.Name;
            }
        }
        else
        {
            if (type == 2) // Articles
            {
                EventImageRepository rep = new EventImageRepository();

                var image = rep.GetById(id);

                if (image != null)
                {
                    eventImage.ImageUrl = "Admin/Uploads/Articles/" + image.EventId + "/" + image.Name;
                    eventImage.AlternateText = image.Name;
                    eventImage.ToolTip = image.Name;
                }
            }
        }
    }
}