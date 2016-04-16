<%@ Control Language="C#" AutoEventWireup="true" CodeFile="ucContact.ascx.cs" Inherits="UserControls_ucContact" %>
<%@ Import Namespace="Resources" %>
<script type="text/javascript">

    function Subscribe() {
        var email = $('#<%= usermail.ClientID %>').val();
        if (email == '') {
            alert('<%= Global.subscribeMessage %>');
            return false;
        }
        return validate(email);
    }

    function validate(email) {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        //var address = document.forms[form_id].elements[email].value;
        if (reg.test(email) == false) {
            alert('<%= Global.subscribeInvalid %>');
            return false;
        }
    }

</script>
<script language="JavaScript">

    function clearText() {
        $("#<%= usermail.ClientID %>").val('');
        $("#<%= usermail.ClientID %>").css('font-style', 'normal');
        $("#<%= usermail.ClientID %>").css('color', 'black');
    }

    function resetText() {
        if ($("#<%= usermail.ClientID %>").val() == "") {
            $("#<%= usermail.ClientID %>").val('');
            $("#<%= usermail.ClientID %>").val('<%= Global.emailText %>');
            $("#<%= usermail.ClientID %>").css('font-style', 'italic');
            $("#<%= usermail.ClientID %>").css('color', 'gray');
        }
    }          
</script>
<div id="msg">
    <br />
    <div id="msg1">
        <div id="heading">
            <h1>
                إبقوا على تواصل</h1>
        </div>
        <br>
        <asp:TextBox ID="usermail" runat="server" Text="بريدك الاكتروني" Width="160px" Font-Italic="True"
            Style="padding: 3px 3px 3px 3px" ForeColor="Gray" onblur="resetText()" onfocus="clearText()"
            Font-Size="12px" ></asp:TextBox>
        <br />
        <asp:Label ID="result" runat="server" meta:resourcekey="resultResource1"></asp:Label>
        <div class="subscribe">
            <div>
                <center>
                    <asp:LinkButton ID="Newsletter" runat="server" OnClick="Newsletter_Click" OnClientClick="return Subscribe();"
                        Text="اشترك بخدمة الرسائل"></asp:LinkButton>
                </center>
            </div>
        </div>
        <br />
        
    </div>
<table>
            <tr>
                <td>
                    <a href="https://www.facebook.com/pages/%D9%85%D9%88%D9%82%D8%B9-%D8%A8%D9%84%D8%AF%D8%A9-%D8%A7%D9%84%D8%B9%D8%A8%D8%A7%D8%B3%D9%8A%D8%A9-%D8%A7%D9%84%D8%AC%D9%86%D9%88%D8%A8%D9%8A%D8%A9/403326763105747?ref=br_tf" width="30px" target="_blank">
                        <img src="style/images/msg-fb.png" width="30px" height="30px" />
                </td>
                <td>
                    <a href="Default.aspx" width="30px">
                        <img src="style/images/msg-h.png" width="30px" height="30px" />
                </td>
                <td>
                    <a href="ContactUs.aspx" width="30px">
                        <img src="style/images/msg-m.png" width="30px" height="30px" />
                </td>
            </tr>
        </table>
        </div>