<%@ Control Language="C#" AutoEventWireup="true" CodeFile="ucOfficialForms.ascx.cs"
    Inherits="UserControls_ucOfficialForms" %>
<table cellpadding="2" cellspacing="0" width="100%" class="tblMenuRed">
    
    <asp:Repeater ID="repForms5" runat="server">
        <ItemTemplate>
            <tr>
                <td colspan="2" style=" text-align: right;">
                    <a href="#" onclick="exportDOC('5/<%# Container.DataItem %>');">
                        <%# Container.DataItem %></a>
                </td>
            </tr>
        </ItemTemplate>
    </asp:Repeater>
    <tr>
        <td colspan="2" align="left" class="last">
            <asp:Label ID="noResult5" runat="server" Font-Italic="True" Text="لا يوجد ملفات .."
                meta:resourcekey="noOfficialResource1"></asp:Label>
            <asp:LinkButton ID="moreForms" runat="server" ForeColor="Navy" Text="المزيد" PostBackUrl="Library.aspx"
                meta:resourcekey="moreFormsResource1"></asp:LinkButton>
        </td>
    </tr>
</table>
