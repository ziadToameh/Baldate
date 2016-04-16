using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Admin_EventCommentDelete : System.Web.UI.Page
{
    EventCommentRepositroy rep = new EventCommentRepositroy();
    private int _id, _eId;
    protected void Page_Load(object sender, EventArgs e)
    {
        try { _eId = int.Parse(Request.QueryString["eId"]); }
        catch { _eId = 0; }
        try
        {
            _id = int.Parse(Request.QueryString["id"]);
            rep.Delete(_id);
            Session["Result"] = "The Comment is Deleted Successfully";
        }
        catch
        {
            Session["Result"] = "Error Deleting the Comment !";
        }
        Response.Redirect("EventComment.aspx?id=" + _eId);
    }
}