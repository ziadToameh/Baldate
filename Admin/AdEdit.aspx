<%@ Page Title="" Language="C#" MasterPageFile="~/Admin/Admin.master" AutoEventWireup="true"
    CodeFile="AdEdit.aspx.cs" Inherits="Admin_Images_AdEdit" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <link href="<%= ResolveUrl("~/CSS/uploadify.css") %>" rel="stylesheet" type="text/css" />
    <script src="<%= ResolveUrl("~/Scripts/jquery-1.4.2.js") %>" type="text/javascript"></script>
    <script src="<%= ResolveUrl("~/Scripts/jquery.uploadify.js") %>" type="text/javascript"></script>
    <script type="text/javascript">

        function SetSource(id, name) {
            var source = 'Uploads/Advertisements/' + id + '/' + name;
            $('#' + id).attr('src', source);
        }

    </script>
    <script type="text/javascript">
        $(function () {
            $('#adNav>a').css('color', 'blue');
        });

    </script>
    <table>
        <tr>
            <th>
                <img id="<%= id %>" src="" alt='<%= Image %>' width="100px" height="100px" />
                <script type="text/javascript">
                              <!--
                    SetSource('<%= id %>', '<%= Image %>');
                                    -->
                </script>
            </th>
        </tr>
        <tr>
            <th>
                <asp:TextBox ID="adId" runat="server" Visible="false"></asp:TextBox>
            </th>
        </tr>
        <tr>
            <th>
                <asp:Label ID="Label1" Text="Link" runat="server"></asp:Label>
                <asp:TextBox ID="textbox1" runat="server"></asp:TextBox>
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
