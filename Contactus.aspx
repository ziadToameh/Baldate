<%@ Page Title="" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true"
    CodeFile="Contactus.aspx.cs" Inherits="Contactus" Culture="auto" meta:resourcekey="PageResource1"
    UICulture="auto" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <div class="introDiv">
        <h3>
            <asp:Label runat="server" ID="lblcontactus" Text="Contact Us" meta:resourcekey="lblcontactusResource1"></asp:Label></h3>
        <br />
    </div>
    <table cellpadding="2" cellspacing="2">
       <%-- <tr>
            <td>
                <asp:Label runat="server" ID="Cell" Text="مكتب رئيس البلدية " Font-Bold="True"></asp:Label>
            </td>
            <td>
                <%= ContactCell%>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td colspan="3">
                &nbsp;
            </td>
        </tr>
        <tr>
            <td>
                <asp:Label runat="server" ID="phone" Text="قلم البلدية " Font-Bold="True"></asp:Label>
            </td>
            <td>
                <%= ContactPhone%>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td colspan="3">
                &nbsp;
            </td>
        </tr>
        <tr>
            <td>
                <asp:Label runat="server" ID="Label1" Text="فاكس " Font-Bold="True"></asp:Label>
            </td>
            <td>
                <%= Fax%>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td colspan="3">
                &nbsp;
            </td>
        </tr>--%>
        <tr>
            <td>
                <asp:Label runat="server" ID="Label2" Text="البريد الاكتروني " Font-Bold="True"></asp:Label>
            </td>
            <td>
                <%= EmailB%>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td colspan="3">
                &nbsp;
            </td>
        </tr>
      <%--  <tr>
            <td>
                <asp:Label runat="server" ID="Address" Text="Address" Font-Bold="True" meta:resourcekey="AddressResource1"></asp:Label>
            </td>
            <td>
                <%= Address1%><br />
                <%= Address2%><br />
                <%= Address3%><br />
            </td>
            <td>
            </td>
        </tr>--%>
        <tr>
            <td colspan="3">
                <br />
            </td>
        </tr>
        <tr>
            <td colspan="3" valign="middle">
                <div class="pageTitleOuter">
                    <label class="pageTitleInner">
                        <img src="Styles/Images/contact.png" border="0" width="20px" height="20px" alt="news letter"
                            title="news letter" />
                        <asp:Label runat="server" ID="Email" Text="E-mail Administrator" meta:resourcekey="EmailResource1"></asp:Label>
                    </label>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <asp:Label runat="server" ID="lblName" Text="Name" meta:resourcekey="lblNameResource1"></asp:Label>
            </td>
            <td>
                <asp:TextBox runat="server" ID="txtName" meta:resourcekey="txtNameResource1"></asp:TextBox>*
            </td>
            <td>
                <asp:RequiredFieldValidator ID="rfvName" runat="server" ControlToValidate="txtName"
                    ErrorMessage="Required!" meta:resourcekey="rfvNameResource1"></asp:RequiredFieldValidator>
            </td>
        </tr>
        <tr>
            <td colspan="3">
                &nbsp;
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
                    ErrorMessage="Required!" meta:resourcekey="RequiredFieldValidator1Resource1"></asp:RequiredFieldValidator>
            </td>
        </tr>
        <tr>
            <td colspan="3">
                &nbsp;
            </td>
        </tr>
        <tr>
            <td>
                <asp:Label runat="server" ID="subject" Text="Subject" meta:resourcekey="subjectResource1"></asp:Label>
            </td>
            <td>
                <asp:TextBox runat="server" ID="txtSubject" meta:resourcekey="txtSubjectResource1"></asp:TextBox>*
            </td>
            <td>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ControlToValidate="txtSubject"
                    ErrorMessage="Required!" meta:resourcekey="RequiredFieldValidator2Resource1"></asp:RequiredFieldValidator>
            </td>
        </tr>
        <tr>
            <td colspan="3">
                &nbsp;
            </td>
        </tr>
        <tr>
            <td valign="top">
                <asp:Label runat="server" ID="lblMessage" Text="Message" meta:resourcekey="lblMessageResource1"></asp:Label>
            </td>
            <td>
                <asp:TextBox ID="txtMessage" runat="server" Width="300px" Height="100px" TextMode="MultiLine"
                    meta:resourcekey="txtMessageResource1"></asp:TextBox>
                *
            </td>
            <td>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ControlToValidate="txtMessage"
                    ErrorMessage="Required!" meta:resourcekey="RequiredFieldValidator3Resource1"></asp:RequiredFieldValidator>
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
                    CssClass="btnContact" meta:resourcekey="btnSubmitResource1" />
            </td>
            <td style="padding: 0px 1px 0px 1px;">
                <asp:Button ID="btnCancel" runat="server" Text="Cancel" CausesValidation="False"
                    CssClass="btnContact" OnClick="btnCancel_Click" meta:resourcekey="btnCancelResource1" />
            </td>
        </tr>
    </table>
</asp:Content>
