<%@ Page Title="" Language="C#" MasterPageFile="~/Admin/Admin.master" AutoEventWireup="true" CodeFile="EventComment.aspx.cs" Inherits="Admin_EventComment" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <script type="text/javascript" charset="utf-8">
        $(document).ready(function () {

            $('#TableList').dataTable({
                "aaSorting": [[0, "desc"]]
            });

        });
					
    </script>
    <script type="text/javascript">
        $(function () {
            $('#eventNav>a').css('color', 'blue');
        });

    </script>
    <div id="divList">
        <div style="width: 100%; height: 50px;">
            <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                    <td width="80%">
                        <h2 style="text-decoration: underline;">
                            Event Comments</h2>
                    </td>
                    <td valign="middle" align="right">
                    </td>
                    <td>
                        <a href="EventsList.aspx?id=<%= _CatId %>">Back to List</a>
                    </td>
                </tr>
                <tr>
                    <td colspan="3">
                        Event Name:
                        <asp:Label ID="lblEventName" runat="server"></asp:Label>
                    </td>
                </tr>
            </table>
        </div>
        <br />
        <br />
        <table id="TableList" width="100%" align="center" cellpadding="0" cellspacing="0"
            border="0" class="display">
            <thead>
                <tr>
                    <th></th>
                    <th>
                        <asp:Label Width="100px" ID="Label1" Text="Username" runat="server"></asp:Label>
                    </th>
                    <th>
                        <asp:Label Width="100px" ID="Label3" Text="Email" runat="server"></asp:Label>
                    </th>
                    <th>
                        <asp:Label Width="100px" ID="Label2" Text="Date" runat="server"></asp:Label>
                    </th>
                    <th>
                        <asp:Label ID="Label4" Text="Comment" runat="server"></asp:Label>
                    </th>
                    <th>
                        Is Approved
                    </th>  
                    <th>
                    </th>   
                    <th>
                    </th>   
                    <th>
                    </th>                   
                </tr>
            </thead>
            <tbody>
                <asp:Repeater ID="rptList" runat="server">
                    <ItemTemplate>
                        <tr>
                            <td>
                                <%# Eval("Id")%>
                            </td>
                           
                            <td>
                                <%# Eval("Username")%>
                            </td>
                            <td>
                                <%# Eval("Email")%>
                            </td>
                             <td>
                                <%#DataBinder.Eval(Container.DataItem, "DateAdded", "{0:MMM d, yyyy}")%>
                            </td>
                            <td>
                                <%# Eval("Comment")%>
                            </td>
                            <td>
                                <%#
                                    ApprovedState(bool.Parse(Eval("IsActivated").ToString()))%>
                            </td>
                            <td>
                                <%# ApproveLink(bool.Parse(Eval("IsActivated").ToString()), Eval("Id").ToString())%>
                            </td>
                            <td>
                                <%# DisApproveLink(bool.Parse(Eval("IsActivated").ToString()), Eval("Id").ToString())%>
                            </td>
                            <td>
                                <a href="EventCommentDelete.aspx?id=<%# Eval("Id")%>&eId=<%= id %>" onclick="return confirm('Are you sure you want to delete?')">Delete</a>
                            </td>
                        </tr>
                    </ItemTemplate>
                </asp:Repeater>
            </tbody>
        </table>
    </div>
</asp:Content>
