<%@ Page Title="" Language="C#" MasterPageFile="~/Admin/Admin.master" AutoEventWireup="true"
    CodeFile="ArticleImage.aspx.cs" Inherits="Admin_Uploads_ArticleImage" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <link href="<%= ResolveUrl("~/CSS/uploadify.css") %>" rel="stylesheet" type="text/css" />
    <script src="<%= ResolveUrl("~/Scripts/jquery-1.4.2.js") %>" type="text/javascript"></script>
    <script src="<%= ResolveUrl("~/Scripts/jquery.uploadify.js") %>" type="text/javascript"></script>
    <script type="text/javascript">

        function SetSource(id, name) {
            var source = 'Uploads/Articles/' + '<%= id %>' + '/' + name;
            $('#' + id).attr('src', source);
        }
    </script>
    <script type="text/javascript">
        $(function () {
            $('#articleNav>a').css('color', 'blue');
        });

    </script>
    <style type="text/css">
        #divList
        {
            font-family: Century Gothic !important;
            font-size: 14px !important;
        }
        #divList a
        {
            font-family: Century Gothic !important;
            font-size: 14px !important;
            text-decoration: none;
            color: Blue;
        }
    </style>
    <div id="divList">
        <table width="90%">
            <tr>
                <td>
                    <h3 style="text-decoration: underline;">
                        <i>
                            <asp:Label ID="ArticleName" runat="server"></asp:Label></i></h3>
                    <asp:TextBox ID="TextBox1" runat="server" Visible="false"></asp:TextBox>
                </td>
                <td align="right">
                    <a href="ArticleList.aspx">
                        <img src="CSS/images/back.png" width="30px" height="30px" style="border: 0" />
                        Back to List</a>
                </td>
            </tr>
        </table>
        <table width="90%" cellpadding="0" cellspacing="0">
            <tr>
                <asp:Repeater ID="Images" runat="server">
                    <ItemTemplate>
                        <td>
                            <img id="<%# Eval("Id") %>" src="" alt='<%# Eval("Name") %>' width="100px" height="100px" />
                            <br />
                            <a href="ArticleImageDelete.aspx?eventId=<%# Eval("ArticleId")%>&imageId=<%# Eval("Id")%>"
                                onclick="return confirm('Are you sure you want to delete?')">Delete</a>
                            <script type="text/javascript">
                                    <!--
                                SetSource('<%# Eval("Id") %>', '<%# Eval("Name") %>');
                                    -->
                            </script>
                        </td>
                    </ItemTemplate>
                </asp:Repeater>
            </tr>
        </table>
    </div>
    <br />
    <i>
        <asp:Label ID="lblMessage" runat="server" Text="You can add up to 5 images" Visible="false">
        </asp:Label></i>
    <div style="padding: 40px">
        <asp:FileUpload ID="FileUpload1" runat="server" />
    </div>
    <div style="display: none">
        <asp:TextBox ID="ArticleId" runat="server"></asp:TextBox>
        <asp:TextBox ID="path" runat="server"></asp:TextBox>
    </div>
    <script type="text/javascript">
        $(window).load(
    function () {
        $("#<%=FileUpload1.ClientID %>").fileUpload({
            'uploader': '../scripts/uploader.swf',
            'cancelImg': 'CSS/images/cancel.png',
            'buttonText': 'Browse Files',
            'script': 'UploadArticle.ashx?articleId=' + $('#<%=ArticleId.ClientID %>').val() + '&type=1',
            'folder': 'uploads',
            'fileDesc': 'Image Files',
            'fileExt': '*.jpg;*.jpeg;*.gif;*.png',
            'multi': false,
            'auto': true,
            'sizeLimit': 500000
        });
    }
);
    </script>
</asp:Content>
