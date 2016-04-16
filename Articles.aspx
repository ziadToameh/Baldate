<%@ Page Title="" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true"
    CodeFile="Articles.aspx.cs" Inherits="Articles" Culture="auto" meta:resourcekey="PageResource2"
    UICulture="auto" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <script type="text/javascript">

        function SetArticleSource(id, name) {
            name = name.substring(0, name.lastIndexOf(','));
            var images = name.split(', ');
            var source = '';
            var options = '';

            for (var i = 0; i < Math.min(images.length, 1); i++) {
                source = 'Admin/Uploads/Articles/' + id + '/' + images[i];
                if (images[i] != undefined && images != '') {
                    options += '<img id="' + id + '_' + i + '" alt="" src="' + source + '" width="100px" height="100px" />&nbsp;';
                }
            }

            $('#divArticleImages_' + id).html(options);
        }
    </script>
    <table width="100%" height="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 0 0px;">
        <tr>
            <td style="background-color: White;" height="50px">
                <div class="introDiv">
                    <h3>
                        <asp:Label ID="titlearticles" runat="server" Text="Articles" meta:resourcekey="titlearticlesResource1"></asp:Label></h3>
                    <br />
                </div>
            </td>
        </tr>
        <tr>
            <td height="100%" valign="top">
                <table cellpadding="0" cellspacing="0" width="100%">
                    <asp:Repeater ID="ResultsList" runat="server">
                        <ItemTemplate>
                            <tr>
                                <td class="EventsRow" style="padding: 10px 10px 10px 10px; border-bottom: 1px dashed silver;">
                                    <table width="100%" cellpadding="2px" cellspacing="2px">
                                        <tr>
                                            <td width="70%">
                                                <label class="EventTitle">
                                                    <strong style="color: #4D4D4D">
                                                        <%#DataBinder.Eval(Container.DataItem, DisplayName)%></strong></label>
                                                <span style="display: block;">&nbsp;</span>
                                               
                                            </td>
                                            <td align="center" id="divArticleImages_<%# Eval("Id") %>">
                                                <%--Images--%>
                                                <script type="text/javascript">
                                                    <!--
                                                    SetArticleSource('<%# Eval("Id") %>', '<%# Eval("Images") %>');
                                                    -->
                                                </script>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </ItemTemplate>
                    </asp:Repeater>
                </table>
            </td>
        </tr>
        <tr>
            <td align="center" style="padding: 50px 0px 0px 0px;">
                &nbsp;&nbsp;<asp:Label ID="lblCurrentPage" runat="server" meta:resourcekey="lblCurrentPageResource1"></asp:Label>
            </td>
        </tr>
        <tr>
            <td align="center" style="padding: 0px 0px 0px 0px;">
                &nbsp;&nbsp;<asp:Button ID="cmdPrev" runat="server" Text=" << " OnClick="cmdPrev_Click"
                    meta:resourcekey="cmdPrevResource1"></asp:Button>
                &nbsp;<asp:Button ID="cmdNext" runat="server" Text=" >> " OnClick="cmdNext_Click"
                    meta:resourcekey="cmdNextResource1"></asp:Button>
            </td>
        </tr>
        <tr>
            <td>
                &nbsp; &nbsp;<i>
                    <asp:Label ID="noData" runat="server" Text="There are no events for this date" Visible="False"
                        ForeColor="Navy" meta:resourcekey="noDataResource1"></asp:Label>
                </i>
            </td>
        </tr>
    </table>
</asp:Content>
