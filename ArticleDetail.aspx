<%@ Page Title="iman" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true"
    CodeFile="ArticleDetail.aspx.cs" Inherits="ArticleDetail" culture="auto" meta:resourcekey="PageResource1" uiculture="auto" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <script type="text/javascript">

        function SetSource(id, name, imgIds) {
            name = name.substring(0, name.lastIndexOf(','));
            var images = name.split(', ');
            var imageId = imgIds.split(', ');

            var source = '';
            var options = '';

            for (var i = 0; i < 1; i++) {
                source = 'Admin/Uploads/Articles/' + id + '/' + images[i];
                if (images[i] != undefined && images[i] != '') {
                    options += '<a href="BrowseImage.aspx?id=' + imageId[i].split(',')[0] + '&type=2">';
                    options += '<img id="' + id + '_' + i + '" alt="" src="' + source + '" width="120px" height="120px" style="border:0" />';
                    options += '</a>&nbsp;&nbsp;';
                }
            }

            $('#divArticleImages_' + id).html(options);

            options = '';

            for (var i = 1; i < images.length; i++) {
                source = 'Admin/Uploads/Articles/' + id + '/' + images[i];
                if (images[i] != undefined && images[i] != '') {
                    options += '<a href="BrowseImage.aspx?id=' + imageId[i].split(',')[0] + '&type=2">';
                    options += '<img id="' + id + '_' + i + '" alt="" src="' + source + '" width="120px" height="120px" style="border:0" />';
                    options += '</a>&nbsp;&nbsp;';
                }
            }

            $('#divAllImages').html(options);
        }
    </script>
    <div style="float: right; margin: 20px 20px 20px 20px;" id="divArticleImages_<%= eventId %>">
       
    </div>
    <div>
        <asp:Label ID="lblTitle" runat="server" class="EventTitle" Font-Bold="True" 
            meta:resourcekey="lblTitleResource1"></asp:Label>
        <br /><br />
        <asp:Label ID="lblDate" runat="server" class="home-event-date" 
            meta:resourcekey="lblDateResource1"></asp:Label>
        <br /><br />
        <asp:Label ID="lblDescription" runat="server" class="EventDescriptionAll" 
            meta:resourcekey="lblDescriptionResource1"></asp:Label>
        <br /><br />
    </div>
    <table width="100%">
    <tr>
        <td colspan="2">
            <div id="divAllImages"></div>
        </td>
    </tr>
        <tr>
        <td width="400px">&nbsp;</td>
            <td align="right">
            <asp:LinkButton ID="back" runat="server" PostBackUrl="Articles.aspx" 
                    Text="Back to list" meta:resourcekey="backResource1"></asp:LinkButton>
            </td>
        </tr>
    </table> <%--Images--%>
        <script type="text/javascript">
                                <!--
            SetSource('<%= eventId %>', '<%= images %>', '<%= imageId %>');
                                 -->
        </script>
</asp:Content>
