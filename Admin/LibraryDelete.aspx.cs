using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Admin_LibraryDelete : System.Web.UI.Page
{
    public string docToDelete;
    public string id;
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            docToDelete = Request.QueryString["name"];
            id = Request.QueryString["id"];
            DeleteDocument();
        }

    }

    public void DeleteDocument()
    {
        try
        {
            string tempPath = "";
            tempPath = System.Configuration.ConfigurationManager.AppSettings["FolderPathDocuments"] + @"\" + id + @"\" + docToDelete;

            File.Delete(HttpContext.Current.Server.MapPath(tempPath));
            Session["LibraryResult"] = "The file was Deleted Successfully";
        }
        catch (Exception e)
        {
            Session["LibraryResult"] = "Error Deleting!";
        }

        Response.Redirect("Library.aspx?id=" + id);
    }
}
