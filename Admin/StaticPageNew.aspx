﻿<%@ Page Language="C#" MasterPageFile="~/Admin/Admin.master" AutoEventWireup="true"
    CodeFile="StaticPageNew.aspx.cs" Inherits="Admin_StaticPageNew" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <div>
        <table width="100%">
            <tr>
                <td colspan="3">
                    <asp:TextBox ID="staticpageId" runat="server" Visible="false"></asp:TextBox>
                </td>
            </tr>
            <tr>
                <td>
                    <asp:Label ID="Label1" Text="Name" runat="server"></asp:Label>
                </td>
                <td>
                    <%--<asp:TextBox ID="textbox1" runat="server" Width="500px"></asp:TextBox>--%>
                    <%@ register tagprefix="CE" namespace="CuteEditor" assembly="CuteEditor" %>
                    <div>
                        <CE:Editor ID="textbox1" runat="server" />
                    </div>
                </td>
                <td>
                    <asp:RequiredFieldValidator ID="rfvTitle" runat="server" ErrorMessage="Required!"
                        ControlToValidate="textbox1"></asp:RequiredFieldValidator>
                </td>
            </tr>
            <tr>
                <td>
                    <asp:Label ID="Label2" Text="Content" runat="server"></asp:Label>
                </td>
                <td>
                    <asp:TextBox ID="textbox2" runat="server" TextMode="MultiLine" Width="500px" Height="150px"></asp:TextBox>
                </td>
                <td>
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ErrorMessage="Required!"
                        ControlToValidate="textbox2"></asp:RequiredFieldValidator>
                </td>
            </tr>
            <tr>
                <td>
                    <asp:Label ID="Label3" Text="Arabic Content" runat="server"></asp:Label>
                </td>
                <td>
                    <%--<asp:TextBox ID="textbox3" runat="server" TextMode="MultiLine" Width="500px" Height="150px"></asp:TextBox>--%>
                    <%@ register tagprefix="CE2" namespace="CuteEditor" assembly="CuteEditor" %>
                    <div>
                        <CE2:Editor ID="textbox3" runat="server" />
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                </td>
                <td align="right">
                    <asp:Button ID="btnSave" runat="server" Text="Save" OnClick="BtnSaveClick"></asp:Button>
                    <asp:Button ID="btnCancel" runat="server" CausesValidation="false" Text="cancel"
                        OnClick="BtnCancelClick"></asp:Button>
                </td>
                <td>
                </td>
            </tr>
        </table>
    </div>
</asp:Content>
