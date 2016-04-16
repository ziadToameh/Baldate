using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class UserControls_PollCookieFrame : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        divMsg.Visible = false;

        if (!IsPostBack)
        {
            if (!String.IsNullOrEmpty(Request.QueryString["pid"]))//if the page is loading to show a specific poll
            {
                hidPollID.Value = Request.QueryString["pid"];
            }
            else //show a random Active Poll 
            {
                //saving the poll id in a hidden variable to use later
                Poll objPoll = new Poll();
                int pollID = objPoll.getRandomActivePollID();

                if (pollID > 0)
                    hidPollID.Value = pollID.ToString();
                else
                {
                    divMsg.InnerHtml = "<b>Note: </b>لا يوجد استفتاءات الان.";
                    divPoll.Visible = false;
                    divMsg.Visible = true;
                    return;
                }
            }
            showPoll();//show the poll
        }
    }


    private void showPoll()
    {
        Poll objPoll = new Poll();
        DataSet dsPoll = objPoll.SelectPoll(int.Parse(hidPollID.Value));

        if (dsPoll.Tables[0].Rows.Count > 0)
        {
            litQuestion.Text = dsPoll.Tables[0].Rows[0]["Question"].ToString();

            //if the BlockMode is not NONE findout whether the user is already Polled or not - if polled show the result only
            string blockMode = dsPoll.Tables[0].Rows[0]["BlockMode"].ToString();

            bool isPolled = isPolled = CheckAlreadyPolled(blockMode);


            if (isPolled) //show the result
            {
                divAnswers.InnerHtml = getResultHTML(dsPoll);
                divAnswers.InnerHtml += "<div class='poll-total' id='divVoted'>لقد قمت بالتصويت.</div>";
            }
            else //show the poll
            {
                rptChoices.DataSource = dsPoll.Tables[1];
                rptChoices.DataBind();
                rptChoices.Visible = rptChoices.Items.Count > 0;
            }
        }
        else
        {
            divMsg.InnerHtml = "<b>Note: </b>الاستفتاء غير موجود";
            divMsg.Visible = true;
        }
    }

    private bool CheckAlreadyPolled(string blockMode)
    {
        bool isPolled = false;
        //if the block mode of this Poll is by IP,, check in the DB whether a poll is already existing from this IP
        if (blockMode == Poll.BlockMode.IP_ADDRESS.ToString())
        {
            string ip = HttpContext.Current.Request.ServerVariables["REMOTE_ADDR"];
            Poll objPoll = new Poll();
            int id = objPoll.SelectPollIP(int.Parse(hidPollID.Value), ip);
            if (id > 0) isPolled = true;
        }
        else if (blockMode == Poll.BlockMode.COOKIE.ToString()) //If block by Cookie read the cookie to see if there is an entry for this blog
        {
            if (Request.Cookies["Poll"] != null && Request.Cookies["Poll"]["ID"] != null)
            {
                //the cookie will have comma seperated IDs of all the polls that already voted
                string commaSeperatedPollIDs = Request.Cookies["Poll"]["ID"];
                //split it with comma
                string[] pollIDs = commaSeperatedPollIDs.Split(",".ToCharArray());
                //and loop through each pollID to find whethere the current poll is already voted
                foreach (string pID in pollIDs)
                {
                    //if yes break
                    if (pID == hidPollID.Value)
                    {
                        isPolled = true;
                        break;
                    }
                }
            }
        }

        return isPolled;
    }

    [WebMethod]
    public static string UpdatePollCount(int pID, int cID)
    {
        //int pollID = pID;
        //int choiceID = cID;
        //update the vote count of the selected choice
        Poll objPoll = new Poll();
        objPoll.UpdateChoiceVote(cID);

        //save the users IP address - to block repeated vote if the BlockMode is by IP address
        string ip = HttpContext.Current.Request.ServerVariables["REMOTE_ADDR"];
        objPoll.InsertPollIP(pID, ip);

        //Save the poll ID in cookie - to block repeated vote if the BlockMode is by Cookie
        HttpCookie pollCookie;// = new HttpCookie("Poll");
        string valueToStore = ""; //we store the poll IDs as comma seperated values

        //the cookie already exists and some PollIDs are already there
        if (HttpContext.Current.Request.Cookies["Poll"] != null && HttpContext.Current.Request.Cookies["Poll"]["ID"] != null)
        {
            pollCookie = HttpContext.Current.Request.Cookies["Poll"];
            valueToStore = HttpContext.Current.Request.Cookies["Poll"]["ID"] + "," + pID.ToString(); //append the current PollID to the already existing Poll IDs after a comma
        }
        else //cookie not exists - create a new one and store the ID
        {
            pollCookie = new HttpCookie("Poll");
            valueToStore = pID.ToString();
        }
        pollCookie.Values["ID"] = valueToStore;
        pollCookie.Expires = DateTime.MaxValue; //this cookie will never expire
        HttpContext.Current.Response.Cookies.Add(pollCookie);

        //get the poll result
        DataSet dsPoll = objPoll.SelectPoll(pID);
        return getResultHTML(dsPoll);
    }

    private static string getResultHTML(DataSet dsPoll)
    {
        int totalVotes = int.Parse(dsPoll.Tables[1].Compute("Sum(VoteCount)", String.Empty).ToString());
        System.Text.StringBuilder sbResult = new System.Text.StringBuilder();

        foreach (DataRow dr in dsPoll.Tables[1].Rows)
        {
            decimal percentage = 0;
            if (totalVotes > 0)
                percentage = decimal.Round((decimal.Parse(dr["VoteCount"].ToString()) / decimal.Parse(totalVotes.ToString())) * 100, MidpointRounding.AwayFromZero);

            string alt = dr["VoteCount"].ToString() + " votes out of " + totalVotes.ToString();

            sbResult.Append("<label class='poll-result'>").Append(dr["Choice"]).Append(" (").Append(dr["VoteCount"]).Append(" اصوات - ").Append(percentage).Append("%)</label>");
            sbResult.Append("<div class='poll-chart'><img src='../style/images/red-bar.png' width='0%' val='").Append(percentage).Append("%' height='15px' alt='").Append(alt).Append("' title='").Append(alt).Append("' /> ").Append("</div>");
        }
        sbResult.Append("<div class='poll-total'>عدد الاصوات: ").Append(totalVotes).Append("</div>");
        //sbResult.Append("</p>");
        return sbResult.ToString();
    }

}
