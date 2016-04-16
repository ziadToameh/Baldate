<%@ Page Title="" Language="C#" MasterPageFile="~/Admin/Admin.master" AutoEventWireup="true"
    CodeFile="NewsLetter.aspx.cs" Inherits="Admin_NewsLetter" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <script type="text/javascript">
        $(function () {
            $('#newsletterNav>a').css('color', 'blue');
        });

    </script>
    <div>
        <asp:TextBox ID="staticpageId" runat="server" Visible="false"></asp:TextBox>
        <table cellpadding="3" cellspacing="3">
            <tr>
                <th>
                    Title
                </th>
                <th align="left">
                    <asp:TextBox ID="txtTitle" runat="server" Width="500px"></asp:TextBox>
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ErrorMessage="Required!"
                        ControlToValidate="txtTitle"></asp:RequiredFieldValidator>
                </th>
            </tr>
            <tr>
                <td valign="middle">
                    <b>
                        <asp:Label ID="Label2" Text="Content" runat="server"></asp:Label></b>
                </td>
                <td>
                    <%--<asp:TextBox ID="textbox2" runat="server" TextMode="MultiLine" Width="500px" Height="150px"></asp:TextBox>--%>
                    <%@ register tagprefix="CE" namespace="CuteEditor" assembly="CuteEditor" %>
                    <div>
                        <CE:Editor ID="txtContent" runat="server" />
                    </div>
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ErrorMessage="Required!"
                        ControlToValidate="txtContent"></asp:RequiredFieldValidator>
                </td>
            </tr>
            <tr>
                <td>
                </td>
                <td align="right">
                    <asp:Button ID="btnSave" runat="server" Text="Save" OnClick="BtnSaveClick"></asp:Button>
                    <asp:Button ID="btnCancel" runat="server" CausesValidation="false" Text="cancel"
                        OnClick="btnCancelClick"></asp:Button>
                </td>
            </tr>
        </table>
    </div>
</asp:Content>
