<%@ Page Title="" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true"
    CodeFile="Static.aspx.cs" Inherits="Static" Culture="auto" meta:resourcekey="PageResource1"
    UICulture="auto" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <table cellpadding="5px" cellspacing="5px" width="100%">
        <tr>
            <td>
                <table width="100%" cellpadding="3" cellspacing="3">
                    <tr>
                        <td>
                            <div class="Contentheading">
                                <h1>
                                  
                                        <asp:Label ID="lblTitle" runat="server" meta:resourcekey="lblTitleResource1"></asp:Label>
                                </h1>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div id="content" runat="server">
                            </div>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</asp:Content>
