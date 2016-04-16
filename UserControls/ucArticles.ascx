<%@ Control Language="C#" AutoEventWireup="true" CodeFile="ucArticles.ascx.cs" Inherits="UserControls_ucArticles" %>
<div class="introDiv">
    <table cellpadding="0" cellspacing="0" width="100%" class="tblBoxInner">
        <asp:Repeater ID="ResultsList" runat="server">
            <ItemTemplate>
                <tr>
                    <td>
                    
                <div id="layers">
                        <a href='ArticleDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>'>
                            <%#DataBinder.Eval(Container.DataItem, DisplayName)%></a></div>
                    </td>
                </tr>
            </ItemTemplate>
        </asp:Repeater>
    </table>
</div>
