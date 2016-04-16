<%@ Page Title="" Language="C#" MasterPageFile="~/Admin/Admin.master" AutoEventWireup="true"
    CodeFile="LinkNew.aspx.cs" Inherits="Admin_LinkNew" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <link href="CSS/uploadify.css" rel="stylesheet" type="text/css" />
    <script src="../Scripts/jquery.uploadify.js" type="text/javascript"></script>
    <script type="text/javascript">
        $(function () {
            $('#linksNav>a').css('color', 'blue');
        });

    </script>
    <div>
        <table>
            <tr>
                <th>
                    <asp:TextBox ID="AdId" runat="server" Visible="false"></asp:TextBox>
                </th>
                <th>
                </th>
            </tr>
            <tr>
                <th>
                    <asp:Label ID="Label2" Text="Name" runat="server"></asp:Label>
                    <asp:TextBox ID="txtName" runat="server"></asp:TextBox>
                </th>
                <td>
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ErrorMessage="Required!"
                        ControlToValidate="txtName"></asp:RequiredFieldValidator>
                </td>
            </tr>
            <tr>
                <th>
                    <asp:Label ID="Label1" Text="URL" runat="server"></asp:Label>
                    <asp:TextBox ID="textbox1" runat="server"></asp:TextBox>
                </th>
                <td>
                    <asp:RequiredFieldValidator ID="rfvTitle" runat="server" ErrorMessage="Required!"
                        ControlToValidate="textbox1"></asp:RequiredFieldValidator>
                </td>
            </tr>
            <tr>
                <td align="right">
                    <asp:Button ID="btnSave" runat="server" Text="Save" OnClick="BtnSaveClick"></asp:Button>
                    <asp:Button ID="btnCancel" runat="server" CausesValidation="false" Text="cancel"
                        OnClick="BtnCancelClick"></asp:Button>
                </td>
            </tr>
        </table>
    </div>
</asp:Content>
