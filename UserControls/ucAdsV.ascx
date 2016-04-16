<%@ Control Language="C#" AutoEventWireup="true" CodeFile="ucAdsV.ascx.cs" Inherits="UserControls_ucAdsV" %>
<script type="text/javascript">


    function SeHomeAd(id, name, catId, width, height, profileImage, style) {

        var options = '';

        if (profileImage != '' && profileImage != null && profileImage != " ") {
            source = 'Admin/Uploads/Events/Profile/' + id + '/' + profileImage;
            options += '<a href="HomeAdDetail.aspx?id=' + id + '" target="_blank">';
            options += '<img alt="" src="' + source + '" width="' + width + '" height="' + height + '" style="' + style + '" /></a>';
        }
        else {
            name = name.substring(0, name.lastIndexOf(','));
            var images = name.split(', ');
            var source = '';

            for (var i = 0; i < Math.min(images.length, 1); i++) {
                source = 'Admin/Uploads/Events/' + id + '/' + images[i];
                if (images[i] != undefined && images != '') {
                    options += '<a href="HomeAdDetail.aspx?id=' + id + '">'
                    options += '<img id="' + id + '_' + i + '" alt="" src="' + source + '" width="' + width + '" height="' + height + '" style="border:1px solid black;" />&nbsp;';
                    options += '</a>';
                }
            }
        }

        $('#divImages' + catId + '_' + id).html(options);
    }
	
</script>
<table>
    <tr>
        <td>
            <asp:Repeater ID="repHAd1" runat="server">
                <ItemTemplate>
                    <span id="divImages50_<%# Eval("Id") %>"></span>
                    <script type="text/javascript">
                                                    <!--
                        SeHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 50, 180, 180, '<%# Eval("ProfileImage") %>', 'margin-bottom: 20px;');
                                                    -->
                    </script>
                </ItemTemplate>
            </asp:Repeater>
        </td>
    </tr>
    <tr>
        <td>
            <asp:Repeater ID="repHAd2" runat="server">
                <ItemTemplate>
                    <span id="divImages51_<%# Eval("Id") %>"></span>
                    <script type="text/javascript">
                                                    <!--
                        SeHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 51, 180, 180, '<%# Eval("ProfileImage") %>', 'margin-bottom: 20px;');
                                                    -->
                    </script>
                </ItemTemplate>
            </asp:Repeater>
        </td>
    </tr>
    <tr>
        <td>
            <asp:Repeater ID="repHAd3" runat="server">
                <ItemTemplate>
                    <span id="divImages52_<%# Eval("Id") %>"></span>
                    <script type="text/javascript">
                                                    <!--
                        SeHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 52, 180, 180, '<%# Eval("ProfileImage") %>', 'margin-bottom: 20px;');
                                                    -->
                    </script>
                </ItemTemplate>
            </asp:Repeater>
        </td>
    </tr>
    <tr>
        <td>
            <asp:Repeater ID="repHAd4" runat="server">
                <ItemTemplate>
                    <span id="divImages53_<%# Eval("Id") %>"></span>
                    <script type="text/javascript">
                                                    <!--
                        SeHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 53, 180, 180, '<%# Eval("ProfileImage") %>', 'margin-bottom: 20px;');
                                                    -->
                    </script>
                </ItemTemplate>
            </asp:Repeater>
        </td>
    </tr>
    <tr>
        <td>
            <asp:Repeater ID="repHAd5" runat="server">
                <ItemTemplate>
                    <span id="divImages54_<%# Eval("Id") %>"></span>
                    <script type="text/javascript">
                                                    <!--
                        SeHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 54, 180, 180, '<%# Eval("ProfileImage") %>', 'margin-bottom: 20px;');
                                                    -->
                    </script>
                </ItemTemplate>
            </asp:Repeater>
        </td>
    </tr>
    <tr>
        <td>
            <asp:Repeater ID="repHAd6" runat="server">
                <ItemTemplate>
                    <span id="divImages55_<%# Eval("Id") %>"></span>
                    <script type="text/javascript">
                                                    <!--
                        SeHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 55, 180, 180, '<%# Eval("ProfileImage") %>', 'margin-bottom: 20px;');
                                                    -->
                    </script>
                </ItemTemplate>
            </asp:Repeater>
        </td>
    </tr>
    <tr>
        <td>
            <asp:Repeater ID="repHAd7" runat="server">
                <ItemTemplate>
                    <span id="divImages56_<%# Eval("Id") %>"></span>
                    <script type="text/javascript">
                                                    <!--
                        SeHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 56, 180, 180, '<%# Eval("ProfileImage") %>', 'margin-bottom: 20px;');
                                                    -->
                    </script>
                </ItemTemplate>
            </asp:Repeater>
        </td>
    </tr>
    <tr>
        <td>
            <asp:Repeater ID="repHAd8" runat="server">
                <ItemTemplate>
                    <span id="divImages57_<%# Eval("Id") %>"></span>
                    <script type="text/javascript">
                                                    <!--
                        SeHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 57, 180, 180, '<%# Eval("ProfileImage") %>', 'margin-bottom: 20px;');
                                                    -->
                    </script>
                </ItemTemplate>
            </asp:Repeater>
        </td>
    </tr>
    <tr>
        <td>
            <asp:Repeater ID="repHAd9" runat="server">
                <ItemTemplate>
                    <span id="divImages58_<%# Eval("Id") %>"></span>
                    <script type="text/javascript">
                                                    <!--
                        SeHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 58, 180, 180, '<%# Eval("ProfileImage") %>', 'margin-bottom: 20px;');
                                                    -->
                    </script>
                </ItemTemplate>
            </asp:Repeater>
        </td>
    </tr>
    <tr>
        <td>
            <asp:Repeater ID="repHAd10" runat="server">
                <ItemTemplate>
                    <span id="divImages59_<%# Eval("Id") %>"></span>
                    <script type="text/javascript">
                                                    <!--
                        SeHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 59, 180, 180, '<%# Eval("ProfileImage") %>', 'margin-bottom: 20px;');
                                                    -->
                    </script>
                </ItemTemplate>
            </asp:Repeater>
        </td>
    </tr>
    <tr>
        <td>
            <asp:Repeater ID="repHAd11" runat="server">
                <ItemTemplate>
                    <span id="divImages60_<%# Eval("Id") %>"></span>
                    <script type="text/javascript">
                                                    <!--
                        SeHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 60, 180, 180, '<%# Eval("ProfileImage") %>', 'margin-bottom: 20px;');
                                                    -->
                    </script>
                </ItemTemplate>
            </asp:Repeater>
        </td>
    </tr>
    <tr>
        <td>
            <asp:Repeater ID="repHAd12" runat="server">
                <ItemTemplate>
                    <span id="divImages61_<%# Eval("Id") %>"></span>
                    <script type="text/javascript">
                                                    <!--
                        SeHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 61, 180, 180, '<%# Eval("ProfileImage") %>', 'margin-bottom: 20px;');
                                                    -->
                    </script>
                </ItemTemplate>
            </asp:Repeater>
        </td>
    </tr>
    <tr>
        <td>
            <asp:Repeater ID="repHAd13" runat="server">
                <ItemTemplate>
                    <span id="divImages62_<%# Eval("Id") %>"></span>
                    <script type="text/javascript">
                                                    <!--
                        SeHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 62, 180, 180, '<%# Eval("ProfileImage") %>', 'margin-bottom: 20px;');
                                                    -->
                    </script>
                </ItemTemplate>
            </asp:Repeater>
        </td>
    </tr>
    <tr>
        <td>
            <asp:Repeater ID="repHAd14" runat="server">
                <ItemTemplate>
                    <span id="divImages63_<%# Eval("Id") %>"></span>
                    <script type="text/javascript">
                                                    <!--
                        SeHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 63, 180, 180, '<%# Eval("ProfileImage") %>', 'margin-bottom: 20px;');
                                                    -->
                    </script>
                </ItemTemplate>
            </asp:Repeater>
        </td>
    </tr>
    <tr>
        <td>
            <asp:Repeater ID="repHAd15" runat="server">
                <ItemTemplate>
                    <span id="divImages64_<%# Eval("Id") %>"></span>
                    <script type="text/javascript">
                                                    <!--
                        SeHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 64, 180, 180, '<%# Eval("ProfileImage") %>', 'margin-bottom: 20px;');
                                                    -->
                    </script>
                </ItemTemplate>
            </asp:Repeater>
        </td>
    </tr>
    <tr>
        <td>
            <asp:Repeater ID="repHAd16" runat="server">
                <ItemTemplate>
                    <span id="divImages65_<%# Eval("Id") %>"></span>
                    <script type="text/javascript">
                                                    <!--
                        SeHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 65, 180, 180, '<%# Eval("ProfileImage") %>', 'margin-bottom: 20px;');
                                                    -->
                    </script>
                </ItemTemplate>
            </asp:Repeater>
        </td>
    </tr>
    <tr>
        <td>
            <asp:Repeater ID="repHAd17" runat="server">
                <ItemTemplate>
                    <span id="divImages66_<%# Eval("Id") %>"></span>
                    <script type="text/javascript">
                                                    <!--
                        SeHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 66, 180, 180, '<%# Eval("ProfileImage") %>', 'margin-bottom: 20px;');
                                                    -->
                    </script>
                </ItemTemplate>
            </asp:Repeater>
        </td>
    </tr>
    <tr>
        <td>
            <asp:Repeater ID="repHAd18" runat="server">
                <ItemTemplate>
                    <span id="divImages67_<%# Eval("Id") %>"></span>
                    <script type="text/javascript">
                                                    <!--
                        SeHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 67, 180, 180, '<%# Eval("ProfileImage") %>', 'margin-bottom: 20px;');
                                                    -->
                    </script>
                </ItemTemplate>
            </asp:Repeater>
        </td>
    </tr>
</table>
