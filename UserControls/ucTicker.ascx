<%@ Control Language="C#" AutoEventWireup="true" CodeFile="ucTicker.ascx.cs" Inherits="UserControls_ucTicker" %>
<div id="mark">
    <ul id="ticker01">
        <asp:Repeater ID="EventsList" runat="server">
            <ItemTemplate>
                <li>
                    <%#DataBinder.Eval(Container.DataItem, "Name_Ar")%><img src="<%= ImgName %>" Height="20px" Width="20px" />
                </li>
            </ItemTemplate>
        </asp:Repeater>
    </ul>
</div>
