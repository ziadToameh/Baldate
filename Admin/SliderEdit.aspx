<%@ Page Title="" Language="C#" MasterPageFile="~/Admin/Admin.master" AutoEventWireup="true"
    CodeFile="SliderEdit.aspx.cs" Inherits="Admin_SliderEdit" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <script type="text/javascript">

        function SetSource(id, name) {
            var source = 'Uploads/SliderDynamic/' + id + '/' + name;
            $('#' + id).attr('src', source);
        }

    </script>
    <script type="text/javascript">
        $(function () {
            $('#sliderNav>a').css('color', 'blue');
        });

    </script>
    <table>
        <tr>
            <th>
                <img id="<%= id %>" src="" alt='<%= Image %>' width="100px" height="100px" />
                <script type="text/javascript">
                              <!--
                    SetSource('<%= id %>', '<%= Image %>');
                                    -->
                </script>
            </th>
        </tr>
        <tr>
            <th>
                <asp:TextBox ID="itemId" runat="server" Visible="false"></asp:TextBox>
            </th>
        </tr>
        <tr>
            <th>
                <asp:Label ID="Label2" Text="Description" runat="server"></asp:Label>
                <asp:TextBox ID="txtDescription" runat="server" Width="500px" Height="100px" MaxLength="500"></asp:TextBox>
            </th>
        </tr>
        <tr>
            <td>
                <%--<asp:RequiredFieldValidator ID="rfvTitle" runat="server" ErrorMessage="Required!"
                    ControlToValidate="txtDescription"></asp:RequiredFieldValidator>--%>
            </td>
        </tr>
        <tr>
            <td align="right">
                <asp:Button ID="btnSave" runat="server" Text="Save" OnClick="BtnSaveClick"></asp:Button>
                <asp:Button ID="btnCancel" runat="server" CausesValidation="false" Text="cancel"
                    OnClick="btnCancelClick"></asp:Button>
            </td>
        </tr>
    </table>
</asp:Content>
