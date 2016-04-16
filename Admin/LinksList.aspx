<%@ Page Title="" Language="C#" MasterPageFile="~/Admin/Admin.master" AutoEventWireup="true" CodeFile="LinksList.aspx.cs" Inherits="Admin_LinksList" %>

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
            $('#linksNav>a').css('color', 'blue');
        });

    </script>
    <div id="divList">
        <div style="width: 100%; height: 50px;">
            <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                    <td width="80%">
                        <h2 style="text-decoration: underline;">
                            Links List</h2>
                    </td>
                    <td valign="middle" align="right">
                        <a href="LinkNew.aspx">
                            <img src="CSS/images/add.png" width="30px" height="30px" style="border: 0" />
                        </a>
                    </td>
                    <td>
                        <a href="LinkNew.aspx">Add</a>
                    </td>
                </tr>
            </table>
        </div>
        <asp:Label ID="Result" runat="server" CssClass="ResultMessage"></asp:Label>
        <br />
        <br />
        <table id="TableList" width="100%" align="center" cellpadding="0" cellspacing="0"
            border="0" class="display">
            <thead>
                <tr>
                    <th>
                    </th>
                    <th>
                        <asp:Label Width="100px" ID="Label2" Text="Name" runat="server"></asp:Label>
                    </th>
                    <th>
                        <asp:Label Width="100px" ID="Label1" Text="URL" runat="server"></asp:Label>
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
                                <%# Eval("Id") %>
                            </td>
                            <td>
                                <%# Eval("Name") %>
                            </td>
                            <td>
                                <%# Eval("Link1") %>
                            </td>
                            <td>
                                <a href="LinkEdit.aspx?id=<%# Eval("Id")%>">edit</a>
                            </td>
                            <td>
                                <a href="LinkDelete.aspx?id=<%# Eval("Id")%>" onclick="return confirm('Are you sure you want to delete?')">
                                    delete</a>
                            </td>
                        </tr>
                    </ItemTemplate>
                    <FooterTemplate>
                    </FooterTemplate>
                </asp:Repeater>
            </tbody>
        </table>
    </div>
</asp:Content>
