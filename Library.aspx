<%@ Page Title="" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true"
    CodeFile="Library.aspx.cs" Inherits="Library" Culture="auto" meta:resourcekey="PageResource1"
    UICulture="auto" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <table width="100%" style="margin: 0 0 0 0px;">
        <tr>
            <td style="background-color: White;" height="50px">
                <div class="introDiv">
                    <h3>
                        <asp:Label runat="server" ID="lblTitle" Text="نماذج رسمية">
                        </asp:Label></h3>
                    <br />
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <table cellpadding="2px" cellspacing="5px" width="100%">
                    <asp:Repeater ID="repForms5" runat="server">
                        <ItemTemplate>
                            <tr>
                                <td colspan="2">
                                    <a href="#" onclick="exportDOC('5/<%# Container.DataItem %>');">
                                        <%# Container.DataItem %></a>
                                </td>
                            </tr>
                        </ItemTemplate>
                    </asp:Repeater>
                </table>
            </td>
        </tr>
    </table>
</asp:Content>
