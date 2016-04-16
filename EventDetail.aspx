<%@ Page Title="" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true"
    CodeFile="EventDetail.aspx.cs" Inherits="EventDetail" Culture="auto" meta:resourcekey="PageResource1"
    UICulture="auto" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
     <meta property="og:title" content="<%= title %>" />
        <meta property="og:site_name" content="بلدتي" />
    <meta property="og:description" content="" />
    <meta property="og:image" content="http://www.baldatee.com/Admin/Uploads/Events/Profile/<%= eventId%>/<%= ImgName3%>" />
    <meta property="og:type" content="website" />


</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">

    <script type="text/javascript">

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
                    options += '<img id="' + id + '_' + i + '" alt="" src="' + source + '" class="imgEvent" style="border:1px solid silver; margin:20px 40px 0 0; " />';
                    options += '</a><br />';
                }
            }

            $('#divImages_' + id).html(options);
        }
        function SetHomeAdDet(id, name, catId, width, height, profileImage, style) {

            var options = '';

            if (profileImage != '' && profileImage != null && profileImage != " ") {
                source = 'Admin/Uploads/Events/Profile/' + id + '/' + profileImage;
                options += '<a href="EventDetail.aspx?id=' + id + '">';
                options += '<img alt="" src="' + source + '" class="imgEvent" style="' + style + '" /></a>';
            }
            else {
                name = name.substring(0, name.lastIndexOf(','));
                var images = name.split(', ');
                var source = '';

                for (var i = 0; i < Math.min(images.length, 1); i++) {
                    source = 'Admin/Uploads/Events/' + id + '/' + images[i];
                    if (images[i] != undefined && images != '') {
                        options += '<a href="EventDetail.aspx?id=' + id + '">'
                        options += '<img id="' + id + '_' + i + '" alt="" src="' + source + '" class="imgEvent" style="border:1px solid black;" />&nbsp;';
                        options += '</a>';
                    }
                }
            }

            $('#divImages' + catId + '_' + id).html(options);
        }
    </script>
     
      <div id="fb-root"></div>
            <script>(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
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
                        <td width="400px" class="headertitle" colspan="2" align="right">
                            <div class="title">
                                <asp:Label ID="lblCategory" runat="server" CssClass="EventHead" meta:resourcekey="lblTitleResource1"
                                    Font-Bold="true" Font-Size="22px"></asp:Label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <hr />
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            <asp:Label ID="lblTitle" runat="server" class="EventTitle" meta:resourcekey="lblTitleResource1"
                                Font-Bold="false" Font-Size="22px"></asp:Label>
                        </td>
                        <td align="left" valign="middle" style="float:left;">
                        
                            <div class="share">
                            <asp:Label ID="lblDate" runat="server" class="home-event-date" meta:resourcekey="lblDateResource1"></asp:Label> </div>
                            
                       
                           <%-- <a href="javascript:void(0)" onmouseover="return addthis_open(this, '', '[URL]', '[TITLE]')"
                                onmouseout="addthis_close()" onclick="return addthis_sendto()">
                                <img src="Style/Images/dwn-arrow-cion.gif" border="0" alt="" align="absmiddle" style="vertical-align: middle;" /></a>
                            <a href="javascript:void(0)" onmouseover="return addthis_open(this, '', '[URL]', '[TITLE]')"
                                onmouseout="addthis_close()" onclick="return addthis_sendto()" class="gry11-txt"
                                style="color: #515151;"><img src="Style/Images/share.png" alt="" width="28px" height="18px"/></a>
                            <img src="Style/Images/font-size-icon.gif" alt="" border="0" align="absmiddle" usemap="#MapBar" />
                            <!-- AddThis Button BEGIN -->    
                            <script type="text/javascript" src="http://s7.addthis.com/js/250/addthis_widget.js"></script>--%>
                            <div id="Div1"></div>
<script>(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=641217832597801&version=v2.0";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
                            <div class="fb-share-button" data-href="http://www.baldatee.com/EventDetail.aspx?id=<%=eventId %>" data-layout="button_count"></div>
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
                        <td colspan="2" align="center">
                            <asp:Image ID="Profileimg" runat="server" CssClass="imgEvent" />
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <asp:Label ID="lblDescription" runat="server" class="EventDescription" meta:resourcekey="lblDescriptionResource1" Font-Size="20px" ></asp:Label>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" id="divImages_<%= eventId %>" align="center">
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
                                meta:resourcekey="backResource1" OnClick="back_Click" CausesValidation="false"></asp:LinkButton>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td colspan="2" style=" color:red;font-size: 14px;" >	ان اي موضوع او تعليق ينشر عبر صفحتنا ليس بالضرورة يعبر عن سياستنا او راينا او موافقتنا عليه انما يعبر عن رأي ناشره وحرية الرأي</td>
        </tr>
                    <tr>
                        <td colspan="2">
                            <asp:Label ID="lblResult" runat="server" CssClass="result"></asp:Label>
                        </td>
                    </tr>
    <asp:HiddenField ID="txtId" runat="server" />
         <tr>
                        <td colspan="2">
                            <table cellpadding="5px" cellspacing="5px" width="100%">
                                <tr>
                                    <td class="ViewDetail">
                                        الإسم:
                                    </td>
                                    <td>
                                        <asp:TextBox BackColor="#ffffcc" ID="txtname" runat="server" MaxLength="200"></asp:TextBox>&nbsp;*&nbsp;&nbsp;
                                        <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ErrorMessage="مطلوب"
                                            ControlToValidate="txtname" CssClass="usermail-required"></asp:RequiredFieldValidator>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="ViewDetail">
                                        البريد الإلكتروني:
                                    </td>
                                    <td valign="top" class="ViewDetail">
                                        <asp:TextBox ID="txtUsermail" runat="server" MaxLength="200" BackColor="#ffffcc"></asp:TextBox>&nbsp;*&nbsp;&nbsp<i>لن
                                            يتم عرض محتوى هذا الحقل في الموقع</i>;
                                        
                                        <asp:RegularExpressionValidator ID="regexEmailValid" runat="server" ValidationExpression="\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*"
                                            ControlToValidate="txtUsermail" ErrorMessage="البريد الإلكتروني غير صحيح" CssClass="usermail-required"></asp:RegularExpressionValidator>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="ViewDetail">
                                        التعليق:
                                    </td>
                                    <td>
                                        <asp:TextBox ID="txtdetail" runat="server" Width="300px" Height="100px" BackColor="#ffffcc"
                                            TextMode="MultiLine"></asp:TextBox>&nbsp;*&nbsp;&nbsp;
                                        <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ErrorMessage="مطلوب"
                                            ControlToValidate="txtdetail" CssClass="usermail-required"></asp:RequiredFieldValidator>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        &nbsp;
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    </td>
                                    <td align="center">
                                        <asp:Button ID="btnSend" runat="server" OnClick="BtnSaveClick" Text="إرسال" />
                                        <%--<asp:LinkButton PostBackUrl="#" runat="server" ID="LinkButton1" OnClick="BtnSaveClick"
                                            OnClientClick="return CheckSubmitTestimonial()" CausesValidation="true" CssClass="usermail-send">إرسال</asp:LinkButton>--%>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <br />
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <table width="80%" cellspacing="3" cellpadding="3">
                                <asp:Repeater ID="repComments" runat="server">
                                    <ItemTemplate>
                                        <tr>
                                            <td style="color: blue; font-size: 24px;">
                                                <u>
                                                    <%#DataBinder.Eval(Container.DataItem, "Username")%></u>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="font-size: 20px;">
                                                <%#DataBinder.Eval(Container.DataItem, "Comment")%>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <hr />
                                            </td>
                                        </tr>
                                    </ItemTemplate>
                                </asp:Repeater>
                            </table>
                        </td>
                    </tr>
    </table>
</asp:Content>
