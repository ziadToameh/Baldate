<%@ Page Title="" Language="C#" MasterPageFile="~/Admin/Admin.master" AutoEventWireup="true"
    CodeFile="Library.aspx.cs" Inherits="Admin_Library" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <link href="<%= ResolveUrl("~/CSS/uploadify.css") %>" rel="stylesheet" type="text/css" />
    <script src="<%= ResolveUrl("~/Scripts/jquery-1.4.2.js") %>" type="text/javascript"></script>
    <script src="<%= ResolveUrl("~/Scripts/jquery.uploadify.js") %>" type="text/javascript"></script>
    <script type="text/javascript">

        function SetDocSource(name) {

            var source = 'Uploads/Documents/' + name;
            $('#doc_' + name).attr('href', source);
        }
    </script>
    <script type="text/javascript">
        $(function () {
            $('#libraryNav>a').css('color', 'blue');
        });

    </script>
    <table width="90%">
       <%-- <tr>
            <td align="right">
                <h2>
                    <a href="Library.aspx">Back to List</a></h2>
            </td>
        </tr>--%>
        <tr>
            <td>
                <asp:Label ID="Result" runat="server" CssClass="ResultMessage"></asp:Label>
            </td>
        </tr>
        <tr>
            <asp:Repeater ID="repDocuments" runat="server">
                <ItemTemplate>
                    <td width="600px">
                        <%# Container.DataItem %>
                        <br />
                        <a href="LibraryDelete.aspx?name=<%# Container.DataItem%>&id=<%= catId %>" onclick="return confirm('Are you sure you want to delete?')">
                            Delete</a>
                        <script type="text/javascript">
                                    <!--
                            //SetDocSource("<%# Container.DataItem %>");
                                    -->
                        </script>
                    </td>
                </ItemTemplate>
            </asp:Repeater>
        </tr>
    </table>
    <div style="padding: 40px">
        <asp:FileUpload ID="FileUpload1" runat="server" />
    </div>
    <script type="text/javascript">
        $(window).load(
    function () {
        $("#<%=FileUpload1.ClientID %>").fileUpload({
            'uploader': '../scripts/uploader.swf',
            'cancelImg': 'CSS/images/cancel.png',
            'buttonText': 'Upload',
            'script': 'UploadDocs.ashx?id=<%= catId %>',
            'folder': 'uploads',
            'fileDesc': 'All Files',
            'fileExt': '*.doc;*.docx;*.ppt;*.pptx;*.xls;*.xlsx;*.pdf;*.jpg;*.jpeg;*.gif;*.png;*.zip;*.rar;*.txt',
            'multi': false,
            'auto': true,
            'sizeLimit': 4000000
        });
    }
);
    </script>
</asp:Content>
