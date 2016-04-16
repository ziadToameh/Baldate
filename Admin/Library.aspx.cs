using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Admin_Library : System.Web.UI.Page
{
    public ArrayList Docs = new ArrayList();
    public int catId;

    protected void Page_Load(object sender, EventArgs e)
    {
        catId = int.Parse(Request.QueryString["id"]);
        if (!IsPostBack)
            Bind();
        try
        {
            Result.Text = Session["LibraryResult"].ToString();
        }
        catch (Exception)
        {
            Result.Text = string.Empty;
        }
    }

    public void Bind()
    {
        string path = HttpContext.Current.Server.MapPath(System.Configuration.ConfigurationManager.AppSettings["FolderPathDocuments"] + "\\" + catId);
        var files = Directory.GetFiles(path);

        foreach (string doc in files)
            Docs.Add(doc.Split('\\')[doc.Split('\\').Length - 1]);

        repDocuments.DataSource = Docs;
        repDocuments.DataBind();

    }
}