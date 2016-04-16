<%@ Control Language="C#" AutoEventWireup="true" CodeFile="ucAds.ascx.cs" Inherits="UserControls_ucAds" %>
<script type="text/javascript">

    var counter = 0;
    var adDiv = 1;

        function SetAdSource(id, name, link) {
            var source = '';
            var options = '';

                source = 'Admin/Uploads/Advertisements/' + id + '/' + name;
                if (name != undefined && name != '') {
                    if (link != '#') {
                        if (link.toString().substring(0, 7) == "http://") {
                            options += '<a href="' + link + '" target="_blank">';
                        }
                        else {
                            options += '<a href="http://' + link + '" target="_blank">';
                        }
                        options += '<img id="' + id + '" alt="" src="' + source + '" width="310px" height="120px" border="0"/></a>&nbsp;';
                    }
                    else {
                      //  options += '<a href="#">';
                      options += '<img id="' + id + '" alt="" src="' + source + '" width="310px" height="120px" border="0"/>&nbsp;';
                    }
                   // options += '<img id="' + id + '" alt="" src="' + source + '" width="190px" height="150px" border="0"/></a>&nbsp;';
                }
                counter++;

                if (counter < 25) {
                    $('#divImage_' + id).html(options);
                }
                else
                    if (counter < 30) {
                        $('#Ad' + adDiv).html(options);
                        adDiv++;
                    }
                    else {
                        $('#AdMain').html($('#AdMain').html() + "" + options);
                        adDiv++;
                    }
        }
</script>
<table width="100%">
    <tr>
        
                <asp:Repeater ID="AdsList" runat="server">
                    <ItemTemplate>
                       
                            
                                        <td align="center" id="divImage_<%# Eval("Id") %>" style="padding:0 0px 0 0px;">
                                            <%--Images--%>
                                            <script type="text/javascript">
                                                    <!--
                                                SetAdSource('<%# Eval("Id") %>', '<%# Eval("Image") %>', '<%# Eval("Link") %>');
                                                    -->
                                            </script>
                                        </td>
                                   
                    </ItemTemplate>
                </asp:Repeater>
           
    </tr>
</table>
