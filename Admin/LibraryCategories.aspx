<%@ Page Title="" Language="C#" MasterPageFile="~/Admin/Admin.master" AutoEventWireup="true"
    CodeFile="LibraryCategories.aspx.cs" Inherits="Admin_LibraryCategories" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <script type="text/javascript">
        $(function () {
            $('#libraryNav>a').css('color', 'blue');
        });

    </script>
    <table width="100%">
        <tr>
            <td>
                <a href="Library.aspx?id=1">Litrature</a>
            </td>
        </tr>
        <tr>
            <td>
                <a href="Library.aspx?id=2">Politics</a>
            </td>
        </tr>
        <tr>
            <td>
                <a href="Library.aspx?id=3">Religious</a>
            </td>
        </tr>
        <tr>
            <td>
                <a href="Library.aspx?id=4">Entertainment</a>
            </td>
        </tr>
        <tr>
            <td>
                <a href="Library.aspx?id=5">Official Forms</a>
            </td>
        </tr>
    </table>
</asp:Content>
