<%@ Page Title="" Language="C#" AutoEventWireup="true" CodeFile="Login.aspx.cs" Inherits="Admin_Login" culture="auto" meta:resourcekey="PageResource1" uiculture="auto" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title><asp:Literal runat="server" ID="lblPageTitle" Text="بلدية " meta:resourcekey="lblPageTitleResource1"></asp:Literal></title>
    <link rel="shortcut icon" type="image/x-icon" href="Images/favicon.ico" />
</head>
<body>
    <style type="text/css">
        .username
        {
            color: Red;
            font-weight: bold;
            font-size: 15px;
        }
        .page
        {
            font-family: Century Gothic;
            font-size: 14px;
        }
        .nav a, .nav a:visited
        {
            color: Blue;
            text-decoration: none;
        }
        #divList
        {
            font-family: Century Gothic !important;
            font-size: 13px !important;
        }
        #divList a
        {
            font-family: Century Gothic !important;
            font-size: 13px !important;
            text-decoration: none;
            color: Blue;
        }
    </style>
    <form id="form1" runat="server">
    <div class="page">
        <table align="center" width="60%" cellpadding="0" cellspacing="0">
            <tr>
                <td colspan="2">
                   <asp:Image ID="Logo" runat="server" Height="100px" />
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
                <td>
                    <table cellspacing="4" cellpadding="3" width="50%" border="0" align="center">
                        <tr>
                            <td>
                                &nbsp;
                            </td>
                            <td align="left">
                                <asp:Label ID="InvalidCredentials" runat="server" Text="Invalid username or password"
                                    Visible="False" ForeColor="Red" 
                                    meta:resourcekey="InvalidCredentialsResource1"></asp:Label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div align="right">
                                    <label class="loginLables">
                                        Username</label>
                                </div>
                            </td>
                            <td align="left">
                                <asp:TextBox ID="txtUsername" runat="server" 
                                    meta:resourcekey="txtUsernameResource1"></asp:TextBox>
                                <asp:RequiredFieldValidator ID="rfvName" ControlToValidate="txtUsername" Display="Dynamic"
                                    Text="Required!" runat="Server" meta:resourcekey="rfvNameResource1" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div align="right">
                                    <label class="loginLables">
                                        Password</label>
                                </div>
                            </td>
                            <td align="left">
                                <asp:TextBox ID="txtPassword" runat="server" TextMode="Password" 
                                    meta:resourcekey="txtPasswordResource1"></asp:TextBox>
                                <asp:RequiredFieldValidator ID="rfvPassword" ControlToValidate="txtPassword" Text="Required!"
                                    runat="Server" meta:resourcekey="rfvPasswordResource1" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                &nbsp;
                            </td>
                            <td align="left">
                                <table border="0" cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td>
                                            <asp:CheckBox ID="RememberMe" runat="server" Text="Remember Me" 
                                                CssClass="LoginLables" meta:resourcekey="RememberMeResource1" />
                                            &nbsp;
                                        </td>
                                        <td>
                                            <asp:Button ID="btnLogin" OnClick="btnLogin_Click" CssClass="Button" runat="server"
                                                Text="Login" meta:resourcekey="btnLoginResource1" />
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                &nbsp;
                            </td>
                            <td class="nav" align="left">
                                &nbsp; <a href="ForgetPassword.aspx">Forget Password ?</a>
                            </td>
                        </tr>
                    </table>
                </td>
                <td width="15%">
                    &nbsp;
                </td>
            </tr>
        </table>
    </div>
    </form>
</body>
</html>
