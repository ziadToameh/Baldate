﻿<%@ Page Title="" Language="C#" MasterPageFile="~/ReporterList.master" AutoEventWireup="true" CodeFile="ReporterNew.aspx.cs" Inherits="ReporterNew" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">

  <table>
    <tr>
      <th colspan="3">
        <asp:TextBox ID="eventId" runat="server" Visible="false"></asp:TextBox>
      </th>
    </tr>
    <tr>
      <td>
        <b>
          <asp:Label ID="Label3" Text="Name" runat="server"></asp:Label></b>
      </td>
      <td>
        <asp:TextBox ID="textbox3" runat="server" Width="500px" MaxLength="255"></asp:TextBox>
      </td>
      <td>
        <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ErrorMessage="Required!"
          ControlToValidate="textbox3"></asp:RequiredFieldValidator>
      </td>
    </tr>
    <tr>
      <td>
        <b>
          <asp:Label ID="Label1" Text="Breif" runat="server"></asp:Label></b>
      </td>
      <td>
        <asp:TextBox ID="txtBreif" runat="server" Width="500px" MaxLength="255"></asp:TextBox>


      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <b>
          <asp:Label ID="Label4" Text="Detail" runat="server"></asp:Label></b>
      </td>
      <td>
        <%-- <asp:TextBox ID="textbox4" runat="server" Width="500px" Height="150px" TextMode="MultiLine"></asp:TextBox>--%>
        <%@ Register TagPrefix="CE" Namespace="CuteEditor" Assembly="CuteEditor" %>
        <div>
          <ce:editor id="textbox4" runat="server" />
        </div>
      </td>
      <td>
        <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ErrorMessage="Required!"
          ControlToValidate="textbox4"></asp:RequiredFieldValidator>
      </td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td align="left">
        <asp:Button ID="btnSave" runat="server" Text="Save" OnClick="BtnSaveClick"></asp:Button>
        <asp:Button ID="btnCancel" runat="server" CausesValidation="false" Text="cancel"
          OnClick="BtnCancelClick"></asp:Button>
      </td>
    </tr>
  </table>
</asp:Content>

