<%@ Page Title="" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true"
    CodeFile="HomeAdDetail.aspx.cs" Inherits="HomeAdDetail" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
 <script type="text/javascript">

     function ImageSize(imageid) {

         var imagewidth = $("#" + imageid).width();
         var maxsize = 800;
         if (imagewidth > maxsize) {
             $("#" + imageid).removeAttr('width');
             $("#" + imageid).css('width', maxsize);
         }


     }
     
     function SetSource(id, name, imgIds) {
         name = name.substring(0, name.lastIndexOf(','));
         var images = name.split(', ');
         var imageId = imgIds.split(', ');

         var source = '';
         var options = '';

         for (var i = 0; i < images.length; i++) {
             source = 'Admin/Uploads/Events/' + id + '/' + images[i];
             if (images[i] != undefined && images[i] != '') {
                 options += '<a href="BrowseImage.aspx?id=' + imageId[i].split(',')[0] + '&type=1" target="_blank">';
                 options += '<img id="' + id + '_' + i + '" alt="" src="' + source + '" class="imgEvent" style="border:1px solid silver; margin:20px 0 0 0; " />';
                 options += '</a><br />';

             }
         }

         $('#divImages_' + id).html(options);
     }
     function SetHomeAdDet(id, name, catId, width, height, profileImage, style) {

         var options = '';

         if (profileImage != '' && profileImage != null && profileImage != " ") {
             source = 'Admin/Uploads/Events/Profile/' + id + '/' + profileImage;
             options += '<a href="HomeAdDetail.aspx?id=' + id + '">';
             options += '<img alt="" src="' + source + '" class="imgEvent" style="' + style + '" /></a>';
         }
         else {
             name = name.substring(0, name.lastIndexOf(','));
             var images = name.split(', ');
             var source = '';

             for (var i = 0; i < Math.min(images.length, 1); i++) {
                 source = 'Admin/Uploads/Events/' + id + '/' + images[i];
                 if (images[i] != undefined && images != '') {
                     options += '<a href="HomeAdDetail.aspx?id=' + id + '">'
                     options += '<img id="' + id + '_' + i + '" alt="" src="' + source + '" class="imgEvent" style="border:1px solid black;" />&nbsp;';
                     options += '</a>';
                 }
             }
         }

         $('#divImages' + catId + '_' + id).html(options);
     }
    </script>
    <asp:HiddenField ID="CatType" runat="server" />
    
    <table cellpadding="5px" cellspacing="5px" width="100%">
        <tr>
            <td>
                <table width="100%" cellpadding="3" cellspacing="3">
                    <tr>
                        <td colspan="2">
                            <br />
                        </td>
                    </tr>
                    <tr>
                        <td width="80%">
                            <asp:Label ID="lblTitle" runat="server" class="EventTitle" meta:resourcekey="lblTitleResource1"
                                Font-Bold="true" Font-Size="15px"></asp:Label>
                        </td>
                        <td width="300px" align="left">
                            <table width="300px" style="float: left;">
                                <tr>
                                    <td style="padding: 0 10px 0 10px;">
                                        <asp:Label ID="lblDate" runat="server" class="home-event-date" meta:resourcekey="lblDateResource1"></asp:Label>
                                    </td>
                                    <td>
                                        <a class="addthis_button_facebook_send"></a>
                                    </td>
                                    <td>
                                        <html xmlns:fb="http://ogp.me/ns/fb#">
                                        <a class="addthis_button_facebook_like" /></html>
                                            </td>
                                        <td>
                                            <!-- AddThis Button BEGIN -->
                                            <div class="addthis_toolbox addthis_default_style ">
                                                <a class="addthis_button_tweet"></a>
                                            </div>
                                            <script type="text/javascript">                                                var addthis_config = { "data_track_addressbar": true };</script>
                                            <script type="text/javascript" src="http://s7.addthis.com/js/250/addthis_widget.js#pubid=ra-4f01bd952fcde551"></script>
                                            <!-- AddThis Button END -->

                                        </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <hr />
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <br />
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <asp:Label ID="lblDescription" runat="server" class="EventDescription" meta:resourcekey="lblDescriptionResource1"></asp:Label>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <br />
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" id="divImages_<%= eventId %>" align="center">
                            <%--Images--%>
                            <script type="text/javascript">
                                <!--
                                SetSource('<%= eventId %>', '<%= images %>', '<%= imageId %>');
                                 -->
                            </script>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <br />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                        <td>
                            <asp:LinkButton runat="server" ID="back" CssClass="ViewDetail" Text="Back to list"
                                meta:resourcekey="backResource1" OnClick="back_Click"></asp:LinkButton>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</asp:Content>
