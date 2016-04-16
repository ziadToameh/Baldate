using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Library : BasePage
{
    public ArrayList Official = new ArrayList();

    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
            Bind();
    }

    public void Bind()
    {
        string path1 =
            HttpContext.Current.Server.MapPath("Admin\\" +
                                               System.Configuration.ConfigurationManager.AppSettings[
                                                   "FolderPathDocuments"] + "\\" + 5);
        var files1 = Directory.GetFiles(path1);

        foreach (string doc in files1)
            Official.Add(doc.Split('\\')[doc.Split('\\').Length - 1]);

        repForms5.DataSource = Official;
        repForms5.DataBind();

    }
}