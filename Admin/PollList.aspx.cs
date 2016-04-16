using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Admin_PollList : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        divMsg.Visible = false;
        if (!IsPostBack)
        {
            listPolls();
        }
    }

    private void listPolls()
    {
        Poll objPoll = new Poll();
        DataTable dtPoll = objPoll.ListPoll();

        gvPolls.DataSource = dtPoll;
        gvPolls.DataBind();
    }

    protected void gvPolls_RowDeleting(object sender, GridViewDeleteEventArgs e)
    {
        int pollID = int.Parse(gvPolls.DataKeys[e.RowIndex]["PollID"].ToString());

        Poll objPoll = new Poll();
        objPoll.DeletePoll(pollID);

        divMsg.InnerHtml = "<b>Note:</b> Selected Poll deleted successfully.";
        divMsg.Visible = true;

        listPolls();
    }
}