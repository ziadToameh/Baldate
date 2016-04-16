using System;
using System.Collections;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
using app_code.Repositories;
public partial class Admin_Uploads_ArticleImage : System.Web.UI.Page
{
    ArticlesRepository eRep = new ArticlesRepository();
    ArticleImageRepository rep = new ArticleImageRepository();
    public int id;
    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
           ArticleId.Text = Request.QueryString["articleId"].ToString();

            //var tempPath = System.Configuration.ConfigurationManager.AppSettings["FolderPath"] + @"\" + eventId.Text;
            //path.Text = HttpContext.Current.Server.MapPath(tempPath);

            if (!IsPostBack)
                Bind();

            Session["ArticleResult"] = "";
        }
        catch (Exception ex)
        {
            //Response.Redirect("Error.aspx");
        }
    }

    public void Bind()
    {
        id = int.Parse(ArticleId.Text);

        var e = eRep.GetById(id);
        ArticleName.Text = e.Name;

        var result = rep.GetByArticleId(id);
        Images.DataSource = result;
        Images.DataBind();

        if (result.Count() == 1)
        {
            lblMessage.Visible = true;
            FileUpload1.Visible = false;
        }
    }
}