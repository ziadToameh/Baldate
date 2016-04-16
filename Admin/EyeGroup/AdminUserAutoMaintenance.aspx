<%@ Page Title="" Language="C#" AutoEventWireup="true" CodeFile="AdminUserAutoMaintenance.aspx.cs"
    Inherits="Admin_EyeGroup_AdminUserAutoMaintenance" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>Maintain users</title>
    <link rel="shortcut icon" type="image/x-icon" href="Images/favicon.ico" />
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <div class="page">
            <table align="center" width="60%" cellpadding="0" cellspacing="0">
                <tr>
                    <td colspan="2">
                        <img src="../Images/logo.png" />
                    </td>
                    <td align="right">
                        Logged in as&nbsp;:&nbsp;
                        <asp:Label ID="username" runat="server" class="username" meta:resourcekey="usernameResource1"></asp:Label>
                        <br />
                        <asp:LinkButton runat="server" ID="signout" OnClick="SignoutClick" CausesValidation="False"
                            meta:resourcekey="signoutResource1">LogOut</asp:LinkButton>
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
                            password :
                        </p>
                    </td>
                    <td align="left">
                        <asp:TextBox ID="txtpassword" runat="server"></asp:TextBox>
                        &nbsp; &nbsp;
                        <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ControlToValidate="txtPassword"
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
                    <td width="5%">
                        &nbsp;
                    </td>
                    <td align="center">
                        <p>
                            Hint for Validation :
                        </p>
                    </td>
                    <td align="left">
                        <asp:TextBox ID="txtAnswer" runat="server"></asp:TextBox>
                        &nbsp; &nbsp;
                        <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ControlToValidate="txtAnswer"
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
