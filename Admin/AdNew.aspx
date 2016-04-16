<%@ Page Title="" Language="C#" MasterPageFile="~/Admin/Admin.master" AutoEventWireup="true"
    CodeFile="AdNew.aspx.cs" Inherits="Admin_Images_AdNew" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <link href="CSS/uploadify.css" rel="stylesheet" type="text/css" />
    <script src="../Scripts/jquery.uploadify.js" type="text/javascript"></script>
    <script type="text/javascript">
        $(function () {
            $('#adNav>a').css('color', 'blue');
        });

    </script>
    <div>
        <table>
            <tr>
                <th>
                    <asp:TextBox ID="AdId" runat="server" Visible="false"></asp:TextBox>
                </th>
            </tr>
            <tr>
                <th>
                    <asp:Label ID="Label1" Text="URL" runat="server"></asp:Label>
                    <asp:TextBox ID="textbox1" runat="server"></asp:TextBox>
                </th>
            </tr>
            <td>
                <asp:RequiredFieldValidator ID="rfvTitle" runat="server" ErrorMessage="Required!"
                    ControlToValidate="textbox1"></asp:RequiredFieldValidator>
            </td>
            <tr>
                <td method="post" action="photoupload.asp" name="submit" enctype="multipart/form-data">
                    Choose A File:
                    <input type="file" id="filefield" runat="server"><br>
                    <br>
                </td>
            </tr>
            <%--<tr>  
            <th> 
    <asp:Label ID="Label2" Text="Image" runat="server"></asp:Label> 
              
    <asp:Textbox ID="textbox2" runat="server"></asp:Textbox>
    </th>
    </tr>
    <td>
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ErrorMessage="Required!"
                        ControlToValidate="textbox2"></asp:RequiredFieldValidator>
                </td>
    
            --%>
            <tr>
                <td align="right">
                    <asp:Button ID="btnSave" runat="server" Text="Save" OnClick="BtnSaveClick"></asp:Button>
                    <asp:Button ID="btnCancel" runat="server" CausesValidation="false" Text="cancel"
                        OnClick="BtnCancelClick"></asp:Button>
                </td>
            </tr>
        </table>
    </div>
</asp:Content>
