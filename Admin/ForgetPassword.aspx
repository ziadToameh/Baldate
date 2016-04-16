<%@ Page Title="" Language="C#" AutoEventWireup="true" CodeFile="ForgetPassword.aspx.cs"
    Inherits="Admin_ForgetPassword" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>Forget Password</title>
    <link rel="shortcut icon" type="image/x-icon" href="Images/favicon.ico" />
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <div class="page">
            <table align="center" width="60%" cellpadding="0" cellspacing="0">
                <tr>
                    <td colspan="2">
                        <img src="Images/logo.png" />
                    </td>
                    <td>
                    </td>
                </tr>
                <tr>
                    <td colspan="3">
                        <hr />
                    </td>
                </tr>
                <tr>
                    <td colspan="3">
                        <br />
                    </td>
                </tr>
                <tr>
                    <td width="5%">
                        &nbsp;
                    </td>
                    <td colspan="2">
                        <p>
                            <asp:Label ID="lblerror" runat="server" Text="Username and/or email is not Valid!<br />"
                                ForeColor="Red" Visible="false"></asp:Label>
                            <asp:Label ID="lblConnError" runat="server" Text="Connection Error ... Unable to send message! Please try again later.<br />"
                                ForeColor="Red" Visible="false"></asp:Label>
                            Please verify your username and email inorder to proceed and get a new password
                        </p>
                    </td>
                </tr>
                <tr>
                    <td width="5%">
                        &nbsp;
                    </td>
                    <td align="center" width="200px">
                        <p>
                            username :
                        </p>
                    </td>
                    <td align="left">
                        <asp:TextBox ID="txtUsername" runat="server"></asp:TextBox>
                        &nbsp; &nbsp;
                        <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="txtUsername"
                            ErrorMessage="Required!" ForeColor="Red"></asp:RequiredFieldValidator>
                    </td>
                </tr>
                <tr>
                    <td width="5%">
                        &nbsp;
                    </td>
                    <td align="center">
                        <p>
                            email :
                        </p>
                    </td>
                    <td align="left">
                        <asp:TextBox ID="txtMail" runat="server"></asp:TextBox>
                        &nbsp; &nbsp;
                        <asp:RequiredFieldValidator ID="rtvmail" runat="server" ControlToValidate="txtMail"
                            ErrorMessage="Required!" ForeColor="Red"></asp:RequiredFieldValidator>
                    </td>
                </tr>
                <tr>
                    <td>
                        &nbsp;
                    </td>
                    <td align="right">
                        <asp:Button ID="btnContinue" OnClick="btnContinue_Click" CssClass="Button" runat="server"
                            Text="Continue" meta:resourcekey="btnLoginResource1" />
                    </td>
                    <td align="left">
                        <asp:Button ID="blnCancel" OnClick="btnCancel_Click" CssClass="Button" runat="server"
                            CausesValidation="false" Text="Cancel" meta:resourcekey="btnLoginResource1" Style="margin: 0 0 0 20px;" />
                    </td>
                </tr>
            </table>
        </div>
    </div>
    </form>
</body>
</html>
