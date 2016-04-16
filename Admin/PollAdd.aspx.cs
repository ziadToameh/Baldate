using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Admin_PollAdd : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        divMsg.Visible = false;

        if (!IsPostBack)
        {
            if (Request.QueryString["pid"] != null) //UPDATE POLL MODE
            {
                hidPollID.Value = Request.QueryString["pid"]; //Saving the ID to use later
                ShowExistingPoll();
            }
        }
    }

    /// <summary>
    /// show the existing poll in edit mode 
    /// This is for demo only Never write ur database logic here. Always use classes and SPs to seperate them from codebehind
    /// </summary>
    private void ShowExistingPoll()
    {

        Poll objPoll = new Poll();
        DataSet dsPoll = objPoll.SelectPoll(int.Parse(hidPollID.Value));

        if (dsPoll.Tables[0].Rows.Count > 0)
        {
            txtQuestion.Text = dsPoll.Tables[0].Rows[0]["Question"].ToString();
            string blockMode = dsPoll.Tables[0].Rows[0]["BlockMode"].ToString();
            if (blockMode == Poll.BlockMode.COOKIE.ToString())
                rdoCookie.Checked = true;
            else if (blockMode == Poll.BlockMode.IP_ADDRESS.ToString())
                rdoIP.Checked = true;
            else
                rdoNone.Checked = true;
            chkActive.Checked = bool.Parse(dsPoll.Tables[0].Rows[0]["Active"].ToString());

            ShowChoices(dsPoll.Tables[1]);
            hidRowIndex.Value = dsPoll.Tables[1].Rows.Count.ToString();
            btnSave.Text = "Update Poll";
        }
        else //can't find the poll.. change to INSERT MODE
        {
            hidPollID.Value = "";
            btnSave.Text = "Save Poll";
        }
    }
    /// <summary>
    /// There should be atleast two choices in each poll.. So by default showing two choice textboxes in the repeater by binding with dummy data
    /// </summary>
    private void ShowChoices(DataTable dtChoice)
    {
        System.Text.StringBuilder sb = new System.Text.StringBuilder();
        sb.Append("<table id='tableChoices' width='100%'>\n");
        for (int i = 0; i < dtChoice.Rows.Count; i++)
        {
            sb.Append("<tr id='pRow").Append(i).Append("'>\n");
            sb.Append("<td width='200' class='tdLabel'>Choice ").Append(i).Append("</td>\n");
            sb.Append("<td><input type='hidden' id='hidPollChoiceID").Append(i).Append("' name='hidPollChoiceID").Append(i).Append("' Value='").Append(dtChoice.Rows[i]["PollChoiceID"]).Append("' />\n");
            sb.Append("<input type='text' class='text' id='txtChoice").Append(i).Append("' name='txtChoice").Append(i).Append("' value='").Append(dtChoice.Rows[i]["Choice"]).Append("'/>&nbsp;\n");
            sb.Append("<a href='#' onclick='removeFormField(\"#pRow").Append(i).Append("\");return false;'>Remove</a></td>\n");
            sb.Append("</tr>");
        }
        sb.Append("</table>");
        hidRowIndex.Value = dtChoice.Rows.Count.ToString();
        divChoices.InnerHtml = sb.ToString();
    }


    protected void rptChoices_ItemDataBound(object sender, RepeaterItemEventArgs e)
    {
        if (e.Item.ItemType == ListItemType.Item || e.Item.ItemType == ListItemType.AlternatingItem)
        {
            if (e.Item.ItemIndex <= 1) //remove the first two Remove links. Since there shld be atleast two choices available for each poll
                e.Item.FindControl("linkRemove").Visible = false;
            else if (e.Item.ItemIndex > 1) //validation needs only for the first two choices
            {
                ((RequiredFieldValidator)e.Item.FindControl("rqvChoice")).Visible = false;
            }
        }
    }

    protected void btnCancel_Click(object sender, EventArgs e)
    {
        Response.Redirect("PollList.aspx");
    }
    
    protected void btnSave_Click(object sender, EventArgs e)
    {
        if (Page.IsValid)
        {
            Poll objPoll = new Poll();
            int pollID = 0;

            string blockMode;
            if (rdoCookie.Checked)
                blockMode = Poll.BlockMode.COOKIE.ToString();
            else if (rdoIP.Checked)
                blockMode = Poll.BlockMode.IP_ADDRESS.ToString();
            else
                blockMode = Poll.BlockMode.NONE.ToString();


            if (hidPollID.Value == string.Empty) //INSERT
            {
                pollID = objPoll.InsertPoll(txtQuestion.Text.Trim(), blockMode, chkActive.Checked);

                //POLL INSERTED SUCCESSFULLY
                if (pollID > 0)
                {
                    hidPollID.Value = pollID.ToString();
                    divMsg.InnerHtml = "<b>Note:</b> New poll has been created successfully.";
                    divMsg.Visible = true;
                }
            }
            else //UPDATE
            {
                pollID = int.Parse(hidPollID.Value);
                objPoll.UpdatePoll(pollID, txtQuestion.Text.Trim(), blockMode, chkActive.Checked);

                divMsg.InnerHtml = "<b>Note:</b> Your poll has been updated successfully.";
                divMsg.Visible = true;
            }

            if (pollID > 0)
            {
                InsertUpdateChoices(pollID); //After inserting/Updateting the poll - call choice insert/update function 
                ShowExistingPoll(); //Bind the poll again the FORM
            }
            else
            {
                divMsg.InnerHtml = "<b>Error:</b> Sorry! An error occured and we couldnot save the poll. Please try again later.";
                divMsg.Attributes.Add("class", "mWarn");
                divMsg.Visible = true;
            }
        }
    }

    /// <summary>
    /// The input choices can come in 3 mode -
    /// 1 - INSERT - IF its added as NEW - it will not have a corresponding Choice ID hidden field
    /// 2 - UPDATE - IF a choice text input has corresponding hidden ID present itss in UPDATE mode
    /// 3 - DELETE - IF a choice text input has corresponding hidden ID present but the text value is empty
    /// </summary>
    /// <param name="pollID"></param>
    private void InsertUpdateChoices(int pollID)
    {
        Poll objPoll = new Poll();
        //INSERT/UPDATE THE CHOICES 
        //LOOPING THRU ALL THE FORM KEYVALUES TO FIND THE INPUT TEXTS
        //IF A CHOICE HAS CORRESPONDING ID THEN IT HAS TO BE UPDATES/ ELSE INSERT
        foreach (string key in Request.Form)
        {
            if (key.IndexOf("txtChoice") >= 0)
            {
                string hidPollChoiceID = "hidPollChoiceID" + key.Substring(key.Length - 1, 1);
                int choiceID = 0;
                if (Request.Form[hidPollChoiceID] != null && int.TryParse(Request.Form[hidPollChoiceID], out choiceID))
                {
                    if (Request.Form[key].Trim().Length > 0) //UPDATE if the choice text box is not empty and has a corresponding ID
                        objPoll.UpdateChoice(choiceID, Request.Form[key]);
                    else //DELETE the choice if its empty 
                        objPoll.DeleteChoice(choiceID);
                }
                else if (Request.Form[key].Trim().Length > 0)//New choice - insert only if the text is not empty
                {
                    objPoll.InsertChoice(pollID, Request.Form[key].Trim());
                }
            }
        }
    }


    /// <summary>
    /// Page method to call from JQuery AJAX to delete the Choice
    /// </summary>
    /// <param name="cID"></param>
    [WebMethod]
    public static int DeletePollChoice(int cID)
    {
        Poll objPoll = new Poll();
        return objPoll.DeleteChoice(cID);
    }
}
