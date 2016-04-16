<%@ Page Language="C#" AutoEventWireup="true" CodeFile="PollCookieFrame.aspx.cs" Inherits="UserControls_PollCookieFrame" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link href="../style/poll.css" rel="stylesheet" type="text/css" />
<script src="../scripts/jquery-1.8.30.js" type="text/javascript"></script>
    <title></title>
</head>
<body dir="rtl">
    <form id="form1" runat="server">
    <div>
    
<!--
Programmed by Anz on www.ClientSideAsp.net 
-->
    <script language="javascript" type="text/javascript">
        $(document).ready(function () {
            var imgPoll = new Image();
            imgPoll.src = '../style/images/red-bar.png';

            if ($("#divVoted").length > 0) //Already voted
            {
                animateResults();
            }
            else {
                $("#rdoPoll0").attr("checked", "checked"); //default select the first Choice
                // Add the page method call as an onclick handler for the Vote button.
                // For more details about how to use JQuery to call Asp.Net AJAX page methods refer follwoing blog posts
                // http://encosia.com/2008/05/29/using-jquery-to-directly-call-aspnet-ajax-page-methods/
                // http://encosia.com/2008/06/05/3-mistakes-to-avoid-when-using-jquery-with-aspnet-ajax/
                $("#btnSubmit").click(function () {
                    $("#divPoll").css("cursor", "wait"); //show wait cursor inside Poll div while processing
                    $("#btnSubmit").attr("disabled", "true") //disable the Vote button while processing

                    var pID = $("input[id$=hidPollID]").val(); //get Poll ID
                    var cID = $("input[name='rdoPoll']:checked").val(); //get the checked Choice
                    var data = "{'pID':'" + pID + "', 'cID':'" + cID + "'}"; //create the JSON data to send to server

                    $.ajax(
                { //call the Page method using JQuery ajax
                    type: "POST",
                    url: "PollCookieFrame.aspx/UpdatePollCount",
                    data: data,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (msg)  //show the result
                    {

                        $("#divPoll").css("cursor", "default"); //remove the wait cursor
                        $("#btnSubmit").attr("disabled", "false") //enable the Vote button

                        $("div[id$=divAnswers]").fadeOut("fast").html(msg.d).fadeIn("fast", function () { animateResults(); });
                    }
                });
                });
            }

            function animateResults() {
                $("div[id$=divAnswers] img").each(function () {
                    var percentage = $(this).attr("val");
                    $(this).css({ width: "0%" }).animate({ width: percentage }, 'slow');
                });
            }
        });
    </script>
        <div runat="server" id="divMsg" class="mInfo" visible="false" />
        <div id="divPoll" class="poll-box" runat="server">
        <div class="poll-question">
            <asp:Literal ID="litQuestion" runat="server" />
        </div>
        <div id="divAnswers" runat="server">
            <asp:Repeater runat="server" ID="rptChoices">
                <ItemTemplate>
                    <p>
                        <label>
                            <input type="radio" value='<%# Eval("PollChoiceID") %>' name="rdoPoll" id='rdoPoll<%# Container.ItemIndex %>' />
                            <%# Eval("Choice") %>
                        </label>
                    </p>
                </ItemTemplate>
                <FooterTemplate>
                    <p>
                        <input type="button" value="صوّت" class="submit" id="btnSubmit" />
                    </p>
                </FooterTemplate>
            </asp:Repeater>
        </div>
    </div>
    <asp:HiddenField runat="server" ID="hidPollID" />
    </div>
    </form>
</body>
</html>
