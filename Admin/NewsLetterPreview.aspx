<%@ Page Title="" Language="C#" MasterPageFile="~/Admin/Admin.master" AutoEventWireup="true" CodeFile="NewsLetterPreview.aspx.cs" Inherits="Admin_NewsLetterPreview" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<table cellpadding="5px" cellspacing="5px" width="100%">
        <tr>
            <td>
                <table width="100%" cellpadding="3" cellspacing="3">
                    <tr>
                        <td>
                            <asp:Label ID="lblTitle" runat="server" class="EventTitle">                        
                            </asp:Label>
                        </td>
                        <td align="right">
                            <asp:Label ID="lblDate" runat="server" class="EventTitle" Font-Bold="true">                        
                            </asp:Label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div id="content" runat="server">
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            <asp:Button ID="btnBack" runat="server" Text="Back" onclick="btnBack_Click" />
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</asp:Content>

