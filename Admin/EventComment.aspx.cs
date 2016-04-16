using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using app_code.Repositories;

public partial class Admin_EventComment : System.Web.UI.Page
{
    EventsRepository rep = new EventsRepository();
    EventCategoryRepositroy catRep = new EventCategoryRepositroy();
    EventCommentRepositroy cRep = new EventCommentRepositroy();

    public int id;
    public int _CatId;

    protected void Page_Load(object sender, EventArgs e)
    {

        if (!IsPostBack)
        {
            id = int.Parse(Request.QueryString["id"]);
            Bind();
            Session["Result"] = "";
        }
    }

    public string ApprovedState(bool isApproved)
    {
        return isApproved ? "<label Style=\"color:Green;\">Yes</label>" : "<label Style=\"color:Red;\">No</label>";
    }

    public string ApproveLink(bool isApproved, string pid)
    {
        return !isApproved ? "<a href=\"EventCommentApprove.aspx?id=" + pid + "&eId=" + id + "\" onclick=\"return confirm('Are you sure you want to approve?')\">Approve</a>" : "";
    }

    public string DisApproveLink(bool isApproved, string pid)
    {
        return isApproved ? "<a href=\"EventCommentDisApprove.aspx?id=" + pid + "&eId=" + id + "\" onclick=\"return confirm('Are you sure you want to disapprove?')\">Disapprove</a>" : "";
    }

    private void Bind()
    {
        rptList.DataSource = cRep.GetByEventId(id);
        rptList.DataBind();

        var existingEvent = rep.GetById(id);

        lblEventName.Text = existingEvent.Name_Ar;
        _CatId = existingEvent.CategoryId ?? 0;
        Session["Cat"] = _CatId.ToString();
    }
    
    protected void btnCancelClick(object sender, EventArgs e)
    {
        Response.Redirect("EventsList.aspx?id=" + Session["Cat"]);
    }
}

