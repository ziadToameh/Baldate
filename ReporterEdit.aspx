<%@ Page Title="" Language="C#" MasterPageFile="~/ReporterList.master" AutoEventWireup="true" CodeFile="ReporterEdit.aspx.cs" Inherits="ReporterEdit" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">

  <table>
    <tr>
      <th>
        <asp:TextBox ID="eventId" runat="server" Visible="false"></asp:TextBox>
      </th>
    </tr>
    
    <tr>
      <th colspan="3">
        <br />
        Arabic
      </th>
    </tr>
    <tr>
      <td>
        <b>
          <asp:Label ID="Label3" Text="Arabic Name" runat="server"></asp:Label></b>
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
          <asp:Label ID="Label4" Text="Arabic Detail" runat="server"></asp:Label></b>
      </td>
      <td>
        <%@ Register TagPrefix="CE" Namespace="CuteEditor" Assembly="CuteEditor" %>
        <div>
          <ce:editor id="textbox4" runat="server" />
        </div>
      </td>
      <td>
      </td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td align="right">
        <asp:Button ID="btnSave" runat="server" Text="Save" OnClick="BtnSaveClick"></asp:Button>
        <asp:Button ID="btnCancel" runat="server" CausesValidation="false" Text="cancel"
          OnClick="btnCancelClick"></asp:Button>
      </td>
    </tr>
  </table>
</asp:Content>

