<%@ Page Title="" Language="C#" MasterPageFile="~/Admin/Admin.master" AutoEventWireup="true" CodeFile="PollList.aspx.cs" Inherits="Admin_PollList" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
       
         <div id="divList">
        <div style="width: 100%; height: 80px;">
            <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                    <td width="80%">
                        <h2 style="text-decoration: underline;">
                            Poll Listing</h2>
                    </td>
                    <td valign="middle" align="right">
                        <a href="PollAdd.aspx">
                            <img src="CSS/images/add.png" width="30px" height="30px" style="border: 0" />
                        </a>
                    </td>
                    <td>
                        <a href="PollAdd.aspx">Add</a>
                    </td>
                </tr>
                </table>
               
        <div runat="server" id="divMsg" class="mInfo" visible="false">
        </div>
        <asp:GridView ID="gvPolls" runat="server" Width="100%" GridLines="None" DataKeyNames="PollID"
            OnRowDeleting="gvPolls_RowDeleting" CssClass="grid">
            <HeaderStyle CssClass="gridHead" />
            <Columns>
                <asp:HyperLinkField DataNavigateUrlFields="PollID" DataNavigateUrlFormatString="~/Admin/PollAdd.aspx?pid={0}"
                    Text="Edit" />
                <asp:TemplateField ShowHeader="False">
                    <ItemTemplate>
                        <asp:LinkButton ID="LinkButton1" runat="server" CausesValidation="false" CommandName="Delete"
                            Text="Delete" OnClientClick="return confirm('Are you sure you want to delete this poll?')" />
                    </ItemTemplate>
                </asp:TemplateField>
                <%--<asp:HyperLinkField DataNavigateUrlFields="PollID" DataNavigateUrlFormatString="~/poll/Poll_CS.aspx?pid={0}"
                    Text="Try"  />--%>
            </Columns>
        </asp:GridView> </div></div>
</asp:Content>
