<%@ Page Language="C#" MasterPageFile="~/Admin/Admin.master" AutoEventWireup="true"
    CodeFile="ArticleNew.aspx.cs" Inherits="Admin_ArticleNew" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <script src="<%= ResolveUrl("~/Scripts/Validator.js") %>" type="text/javascript"></script>
    <script type="text/javascript">
        jQuery(document).ready(function ($) {
            //Set maxlength of all the textarea (call plugin)
            $().maxlength();
        })
    </script>
    <script type="text/javascript">
        $(function () {
            $('#articleNav>a').css('color', 'blue');
        });

    </script>
    <div>
        <table>
            <tr>
                <th colspan="3">
                    <asp:TextBox ID="articleId" runat="server" Visible="false"></asp:TextBox>
                </th>
            </tr>
           <%-- <tr>
                <th colspan="3">
                    <br />
                    English
                </th>
            </tr>
            <tr>
                <td>
                    <asp:Label ID="Label1" Text="Name" runat="server"></asp:Label>
                </td>
                <td>
                    <asp:TextBox ID="textbox1" runat="server" Width="500px" MaxLength="255"></asp:TextBox>
                </td>
                <td>
                    <asp:RequiredFieldValidator ID="rfvTitle" runat="server" ErrorMessage="Required!"
                        ControlToValidate="textbox1"></asp:RequiredFieldValidator>
                </td>
            </tr>
            <tr>
                <td valign="middle">
                    <asp:Label ID="Label2" Text="Details" runat="server"></asp:Label>
                </td>
                <td>
                    <asp:TextBox ID="textbox2" runat="server" Width="500px" Height="300px" TextMode="MultiLine"></asp:TextBox>
                </td>
                <td>
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ErrorMessage="Required!"
                        ControlToValidate="textbox2"></asp:RequiredFieldValidator>
                </td>
            </tr>--%>
            <tr>
                <th colspan="3">
                    <br />
                    Arabic
                </th>
            </tr>
            <tr>
                <td>
                    <asp:Label ID="Label3" Text="Name Arabic" runat="server"></asp:Label>
                </td>
                <td>
                    <asp:TextBox ID="textbox3" runat="server" Width="500px" MaxLength="255"></asp:TextBox>
                </td>
                <td>
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ErrorMessage="Required!"
                        ControlToValidate="textbox3"></asp:RequiredFieldValidator>
                </td>
            </tr>
            <tr>
                <td valign="middle">
                    <asp:Label ID="Label4" Text="Detail Arabic" runat="server"></asp:Label>
                </td>
                <td>
                    <%--<asp:TextBox ID="textbox4" runat="server" Width="500px" Height="300px" TextMode="MultiLine"></asp:TextBox>--%>
                     <%@ register tagprefix="CE" namespace="CuteEditor" assembly="CuteEditor" %>
                    <div>
                        <CE:Editor ID="textbox4" runat="server" />
                    </div>
                </td>
                <td>
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ErrorMessage="Required!"
                        ControlToValidate="textbox4"></asp:RequiredFieldValidator>
                </td>
            </tr>
            <tr>
                <td>
                </td>
                <td align="right">
                    <asp:Button ID="btnSave" runat="server" Text="Save" OnClick="BtnSaveClick"></asp:Button>
                    <asp:Button ID="btnCancel" runat="server" CausesValidation="false" Text="cancel"
                        OnClick="BtnCancelClick"></asp:Button>
                </td>
                <td>
                </td>
            </tr>
        </table>
    </div>
</asp:Content>
