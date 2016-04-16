<%@ Page Title="" Language="C#" MasterPageFile="~/Admin/Admin.master" AutoEventWireup="true" CodeFile="LinkEdit.aspx.cs" Inherits="Admin_LinkEdit" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <link href="<%= ResolveUrl("~/CSS/uploadify.css") %>" rel="stylesheet" type="text/css" />
    <script src="<%= ResolveUrl("~/Scripts/jquery-1.4.2.js") %>" type="text/javascript"></script>
    <script src="<%= ResolveUrl("~/Scripts/jquery.uploadify.js") %>" type="text/javascript"></script>
    <script type="text/javascript">

        function SetSource(id, name) {
            var source = 'Uploads/Links/' + id + '/' + name;
            $('#' + id).attr('src', source);
        }

    </script>
    <script type="text/javascript">
        $(function () {
            $('#linksNav>a').css('color', 'blue');
        });

    </script>
    <table>
      
        <tr>
            <th>
                <asp:TextBox ID="adId" runat="server" Visible="false"></asp:TextBox>
            </th>
        </tr>
            <tr>
                <th>
                    <asp:Label ID="Label2" Text="Name" runat="server"></asp:Label>
                    <asp:TextBox ID="txtName" runat="server"></asp:TextBox>
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ErrorMessage="Required!"
                        ControlToValidate="txtName"></asp:RequiredFieldValidator>
                </th>                
            </tr>
        <tr>
            <th>
                <asp:Label ID="Label1" Text="Link" runat="server"></asp:Label>
                <asp:TextBox ID="textbox1" runat="server"></asp:TextBox>
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ErrorMessage="Required!"
                        ControlToValidate="textbox1"></asp:RequiredFieldValidator>
            </th>
        </tr>
        <tr>
            <td align="right">
                <asp:Button ID="btnSave" runat="server" Text="Save" OnClick="BtnSaveClick"></asp:Button>
                <asp:Button ID="btnCancel" runat="server" CausesValidation="false" Text="cancel"
                    OnClick="btnCancelClick"></asp:Button>
            </td>
        </tr>
    </table>
</asp:Content>

