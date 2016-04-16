using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Admin_SliderImages : System.Web.UI.Page
{
    public ArrayList Docs = new ArrayList();
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
            Bind();
    }

    public void Bind()
    {
        string path = HttpContext.Current.Server.MapPath(System.Configuration.ConfigurationManager.AppSettings["FolderPathSlider"]);
        var files = Directory.GetFiles(path);

        var count = 0;
        foreach (string doc in files)
        {
            Docs.Add(doc.Split('\\')[doc.Split('\\').Length - 1]);
            count++;
        }

        if(count == 5)
        {
            lblMessage.Visible = true;
            FileUpload1.Visible = false;
        }
        repDocuments.DataSource = Docs;
        repDocuments.DataBind();

    }
}