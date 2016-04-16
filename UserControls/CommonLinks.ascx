<%@ Control Language="C#" AutoEventWireup="true" CodeFile="CommonLinks.ascx.cs" Inherits="UserControls_CommonLinks" %>
<script type="text/javascript">

    function SetLinkSource(id, name, link) {
        var source = '';
        var options = '';

        source = 'Admin/Uploads/Links/' + id + '/' + name;
        if (name != undefined && name != '') {
            if (link != '#') {
                if (link.toString().substring(0, 7) == "http://") {
                    options += '<a href="' + link + '" target="_blank">';
                }
                else {
                    options += '<a href="http://' + link + '" target="_blank">';
                }
                options += '<img id="' + id + '" alt="" src="' + source + '" width="190px" height="150px" border="0"/></a>&nbsp;';
            }
            else {
                options += '<img id="' + id + '" alt="" src="' + source + '" width="190px" height="150px" border="0"/>&nbsp;';
            }
        }
        $('#divImage_' + id).html(options);
    }

    function SetLinkName(id, name, link) {
        var source = '';
        var options = '';

        source = 'Admin/Uploads/Links/' + id + '/' + name;
        if (name != undefined && name != '') {
            if (link != '#') {
                if (link.toString().substring(0, 7) == "http://") {
                    options += '<a href="' + link + '" target="_blank">';
                }
                else {
                    options += '<a href="http://' + link + '" target="_blank">';
                }
                options += name + '</a>&nbsp;';
            }
            else {
                options += name + '&nbsp;';
            }
        }
        $('#divName_' + id).html(options);
    }
</script>
<table id="tblLibrary" cellpadding="0" cellspacing="0">
    <tr>
        <asp:Repeater ID="AdsList" runat="server">
            <ItemTemplate>
                <td>
                    <table width="100%" cellpadding="2px" cellspacing="5px">
                       
                        <tr>
                            <td align="right" id="divName_<%# Eval("Id") %>" style="padding: 7px 10px; border-bottom: 1px dashed silver;">
                                <script type="text/javascript">
                                                    <!--
                                    SetLinkName('<%# Eval("Id") %>', '<%# Eval("Name") %>', '<%# Eval("Link1") %>');
                                                    -->
                                </script>
                            </td>
                        </tr>
                    </table>
                </td>
                <%
                    Counter++;
                    if (Counter % 1 == 0)
                    {
                %>
                </tr><tr>
                    <%
}%>
            </ItemTemplate>
        </asp:Repeater>
    </tr>
</table>
