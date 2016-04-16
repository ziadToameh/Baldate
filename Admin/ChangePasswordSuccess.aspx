<%@ Page Title="" Language="C#" MasterPageFile="~/Admin/Admin.master" AutoEventWireup="true" CodeFile="ChangePasswordSuccess.aspx.cs" Inherits="Admin_ChangePasswordSuccess" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <script type="text/javascript">
        $(function () {
            $('#accountNav>a').css('color', 'blue');
        });

    </script>
<br />
    <i>
        <asp:Label ID="message" runat="server" Text=""></asp:Label></i>
</asp:Content>

