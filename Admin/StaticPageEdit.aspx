<%@ Page Language="C#" MasterPageFile="~/Admin/Admin.master" AutoEventWireup="true"
    CodeFile="StaticPageEdit.aspx.cs" Inherits="Admin_StaticPageEdit" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <script type="text/javascript">
        $(function () {
            $('#staticNav>a').css('color', 'blue');
        });

    </script>
    <div>
        <asp:TextBox ID="staticpageId" runat="server" Visible="false"></asp:TextBox>
        <table cellpadding="3" cellspacing="3">
            <tr>
                <th>
                    <u>Tiltle:
                        <asp:Label ID="textbox1" runat="server" Text="Name"></asp:Label><br />
                    </u>
                </th>
                <th>
                </th>
            </tr>
            <tr>
                <td valign="middle"  style=" display: none;">
                    <b>
                        <asp:Label ID="Label2" Text="Content" runat="server"></asp:Label></b>
                </td>
                <td style=" display: none;">
                    <%--<asp:TextBox ID="textbox2" runat="server" TextMode="MultiLine" Width="500px" Height="150px"></asp:TextBox>--%>
                    <%@ register tagprefix="CE" namespace="CuteEditor" assembly="CuteEditor" %>
                    <div>
                        <CE:Editor ID="textbox2" runat="server" />
                    </div>
                   
                </td>
            </tr>
            <tr>
                <td>
                    <b>
                        <asp:Label ID="Label3" Text="Content" runat="server"></asp:Label></b>
                </td>
                <td>
                    <%--<asp:TextBox ID="textbox3" runat="server" TextMode="MultiLine" Width="500px" Height="150px"></asp:TextBox>--%>
                    <%@ register tagprefix="CE2" namespace="CuteEditor" assembly="CuteEditor" %>
                    <div>
                        <CE2:Editor ID="textbox3" runat="server" />
                    </div>
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ErrorMessage="Required!"
                        ControlToValidate="textbox3"></asp:RequiredFieldValidator>
                </td>
            </tr>
            <tr>
                <td>
                </td>
                <td align="right">
                    <asp:Button ID="btnSave" runat="server" Text="Save" OnClick="BtnSaveClick"></asp:Button>
                    <asp:Button ID="btnCancel" runat="server" CausesValidation="false" Text="cancel"
                        OnClick="btnCancelClick"></asp:Button>
                </td>
            </tr>
        </table>
    </div>
</asp:Content>
