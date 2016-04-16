<%@ Page Title="" Language="C#" MasterPageFile="~/Admin/Admin.master" AutoEventWireup="true" CodeFile="ChangePassword.aspx.cs" Inherits="Admin_ChangePassword" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <script type="text/javascript">
        $(function () {
            $('#accountNav>a').css('color', 'blue');
        });

    </script>
<table cellspacing="4" cellpadding="3" width="100%" border="0" align="center">
        <tr>
            <td>
                &nbsp;
            </td>
            <td align="left">
                <asp:Label ID="InvalidCredentials" runat="server" Text="Invalid password" Visible="false"
                    ForeColor="Red"></asp:Label>
            </td>
        </tr>
        <tr>
            <td>
                <div align="right">
                    <label class="loginLables">
                        Old Password</label>
                </div>
            </td>
            <td align="left">
                <asp:TextBox ID="txtPassword" runat="server" TextMode="Password"></asp:TextBox>
                <asp:RequiredFieldValidator ID="rfvPassword" ControlToValidate="txtPassword" Text="Required!"
                    runat="Server" />
            </td>
        </tr>
        <tr>
            <td>
                <div align="right">
                    <label class="loginLables">
                        New Password</label>
                </div>
            </td>
            <td align="left">
                <asp:TextBox ID="txtNewPassword" runat="server" TextMode="Password"></asp:TextBox>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator1" ControlToValidate="txtNewPassword"
                    Text="Required!" runat="Server" />
            </td>
        </tr>
        <tr>
            <td>
                <div align="right">
                    <label class="loginLables">
                        Confirm Password</label>
                </div>
            </td>
            <td align="left">
                <asp:TextBox ID="txtConfirmPassword" runat="server" TextMode="Password"></asp:TextBox>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator2" ControlToValidate="txtPassword"
                    Text="Required!" runat="Server" />
                    <asp:CompareValidator runat="server" id="cmpPasswords" controltovalidate="txtNewPassword" 
                    controltocompare="txtConfirmPassword" operator="Equal" type="String" errormessage="The Password didn't match!" />
            </td>
        </tr>
        <tr>
            <td>
            </td>
            <td align="center">
                <asp:Button ID="btnSubmit" runat="server" Text="Save" 
                    onclick="btnSubmit_Click" />
                    <asp:Button ID="btnCancel" runat="server" CausesValidation="false" Text="cancel"
                        OnClick="BtnCancelClick"></asp:Button>
            </td>
        </tr>
    </table>
</asp:Content>

