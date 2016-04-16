<%@ Page Title="" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true"
    CodeFile="ManageSubscription.aspx.cs" Inherits="ManageSubscription" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <div class="pageTitleOuter">
        <asp:Label runat="server" ID="lblcontactus" Text="Contact Us" meta:resourcekey="lblcontactusResource1"></asp:Label></div>
    <table cellpadding="2" cellspacing="2">
        <tr>
            <td colspan="3" valign="middle">
                <div class="introDiv">
                    <h3>
                        <img src="Styles/Images/contact.png" border="0" width="20px" height="20px" alt="news letter"
                            title="news letter" />
                        <asp:Label runat="server" ID="Email" Text="Manage Subscription"></asp:Label>
                    </h3>
                    <br />
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <asp:Label runat="server" ID="lblEmail" Text="Email" meta:resourcekey="lblEmailResource1"></asp:Label>
            </td>
            <td>
                <asp:TextBox runat="server" ID="txtEmail" meta:resourcekey="txtEmailResource1"></asp:TextBox>*
            </td>
            <td>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="txtEmail"
                    ErrorMessage="Required!"></asp:RequiredFieldValidator>
            </td>
        </tr>
        <tr>
            <td colspan="3">
                &nbsp;
            </td>
        </tr>
        <tr>
            <td>
            </td>
            <td style="padding: 0px 1px 0px 1px;">
                <asp:Button ID="btnSubmit" runat="server" Text="Submit" OnClick="btnSubmit_Click"
                    CssClass="btnContact" />
            </td>
            <td style="padding: 0px 1px 0px 1px;">
                <asp:Button ID="btnCancel" runat="server" Text="Cancel" CausesValidation="False"
                    CssClass="btnContact" OnClick="btnCancel_Click" />
            </td>
        </tr>
    </table>
</asp:Content>
