<%@ Page Title="" Language="C#" MasterPageFile="~/Admin/Admin.master" AutoEventWireup="true"
    CodeFile="NewsLettersList.aspx.cs" Inherits="Admin_NewsLettersList" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <script type="text/javascript" charset="utf-8">
        $(document).ready(function () {

            $('#TableList').dataTable({
                "aaSorting": [[0, "asc"]]
            });

        });
					
    </script>
    <script type="text/javascript">
        $(function () {
            $('#newsletterNav>a').css('color', 'blue');
        });

    </script>
    <div id="divList">
        <div style="width: 100%; height: 80px;">
            <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                    <td width="80%">
                        <h2 style="text-decoration: underline;">
                            NewsLetters List</h2>
                    </td>
                    <td valign="middle" align="right">
                        <a href="NewsLetter.aspx">
                            <img src="CSS/images/add.png" width="30px" height="30px" style="border: 0" />
                        </a>
                    </td>
                    <td>
                        <a href="NewsLetter.aspx">Add</a>
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
                        <asp:Label Width="100px" ID="Label1" Text="Title" runat="server"></asp:Label>
                    </th>
                    <th>
                        <asp:Label Width="100px" ID="Label2" Text="Date" runat="server"></asp:Label>
                    </th>
                    <th>
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
                                <%# Eval("Id") %>
                            </td>
                            <td>
                                <%# Eval("Title") %>
                            </td>
                            <td>
                                <%# Eval("DateSent") %>
                            </td>
                            <td>
                                <a href="NewsLetterEdit.aspx?id=<%# Eval("Id")%>">Edit</a>
                            </td>
                            <td>
                                <a href="NewsLetterPreview.aspx?id=<%# Eval("Id")%>">Preview</a>
                            </td>
                            <td>
                                <a href="NewsLetterSend.aspx?id=<%# Eval("Id")%>">Send</a>
                            </td>
                            <td>
                                <a href="NewsLetterDelete.aspx?id=<%# Eval("Id")%>" onclick="return confirm('Are you sure you want to delete?')">delete</a>
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
