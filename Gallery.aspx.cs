using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Gallery : BasePage
{
    public ArrayList Docs = new ArrayList();
    public int counter = 0;

    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
            Bind();
    }

    public void Bind()
    {
        string path = HttpContext.Current.Server.MapPath("Admin/" + System.Configuration.ConfigurationManager.AppSettings["FolderPathSiteGallery"]);
        var files = Directory.GetFiles(path);

        foreach (string doc in files)
            Docs.Add(doc.Split('\\')[doc.Split('\\').Length - 1]);

        repDocuments.DataSource = Docs;
        repDocuments.DataBind();

    }
}