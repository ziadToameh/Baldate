<%@ Page Title="" Language="C#" MasterPageFile="~/Admin/Admin.master" AutoEventWireup="true" CodeFile="PollAdd.aspx.cs" Inherits="Admin_PollAdd" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">

    <script src="../Scripts/poll.js" type="text/javascript"></script>
    <script language="javascript" type="text/javascript">
        function showRowIndexs() {
            var i = 0;
            $("#tableChoices tr td.tdLabel").each(function () {
                i++;
                $(this).html("Choice " + i);
            });
        }

        function addFormField() {
            var ctrlID = $("#<%= hidRowIndex.ClientID %>").val();
            $("#tableChoices").append("<tr class='row' id='pRow" + ctrlID + "'><td width='200' class='tdLabel'>Choice:</td><td><input class='text' type='text' name='txtChoice" + ctrlID + "' id='txtChoice" + ctrlID + "'> <a href='#' onClick='removeFormField(\"#pRow" + ctrlID + "\"); return false;'>Remove</a></td></tr>");
            $("#<%= hidRowIndex.ClientID %>").val(++ctrlID);

            showRowIndexs();
        }

        function removeFormField(id) {
            var cID = $("input:hidden", id).val();
            var data = "{'cID':'" + cID + "'}"; //create the JSON data to send to server
            if (cID > 0) //call the Page method using JQuery ajax 
            {
                $.ajax(
            {
                type: "POST",
                url: "PollAdd.aspx/DeletePollChoice",
                data: data,
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            });
            }

            $(id).remove();

            showRowIndexs();
        }
    </script>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<div runat="server" id="divMsg" class="mInfo" visible="false">
    </div>
    <div class="form" id="form">
        <table width="100%">
            <tr>
                <td width="200">
                    <asp:Label runat="server" ID="lblQuestion" AssociatedControlID="txtQuestion" Text="Question:" />
                </td>
                <td>
                    <asp:TextBox ID="txtQuestion" runat="server" CssClass="text" />&nbsp;
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ErrorMessage="<img align='absmiddle' src='../images/warn.gif' /> Required"
                        ControlToValidate="txtQuestion" SetFocusOnError="true" />
                </td>
            </tr>
            <tr>
                <td>
                    <asp:Label runat="server" ID="lblBlock" AssociatedControlID="rdoCookie" Text="Block repeated voting by:" Visible="false" />
                </td>
                <td>
                    <asp:RadioButton Checked="true" GroupName="block" ID="rdoCookie" runat="server" Text="Cookie(safest)" Visible="false" />&nbsp;&nbsp;
                    <asp:RadioButton GroupName="block" ID="rdoIP" runat="server" Text="IP Address" ToolTip="This may cause problems for multiple voters on same network" Visible="false" />&nbsp;&nbsp;
                    <asp:RadioButton GroupName="block" ID="rdoNone" runat="server" Text="Don't block" Visible="false" />
                </td>
            </tr>
            <tr>
                <td>
                    <asp:Label runat="server" ID="lblActive" AssociatedControlID="chkActive" Text="Active Status:" />
                </td>
                <td>
                    <asp:CheckBox runat="server" ID="chkActive" Checked="true" />
                </td>
            </tr>
        </table>
        <div runat="server" id="divChoices">
            <table id='tableChoices' width='100%'>
                <tr id='pRow0'>
                    <td width='200' class='tdLabel'>
                        Choice 1
                    </td>
                    <td>
                        <input type='text' class='text' id='txtChoice0' name='txtChoice0' /> 
                        <a onclick="removeFormField('#pRow0'); return false;" href="#">Remove</a>
                    </td>
                </tr>
                <tr id='pRow1'>
                    <td width='200' class='tdLabel'>
                        Choice 2
                    </td>
                    <td>
                        <input type='text' class='text' id='txtChoice1' name='txtChoice1' /> 
                        <a onclick="removeFormField('#pRow1'); return false;" href="#">Remove</a>
                    </td>
                </tr>
            </table>
        </div>
        <asp:HiddenField runat="server" ID="hidRowIndex" Value="2" /> <!-- by default there will be two inputs available to insert choices -->
        <asp:HiddenField ID="hidPollID" runat="server" />
        
        <input type="button" onclick="addFormField();return false;" value="Add a new Choice" class="submit" />
        <asp:Button ID="btnSave" runat="server" Text="Save" OnClick="btnSave_Click" CssClass="submit" />
        <asp:Button ID="btnCancel" runat="server" Text="Cancel" OnClick="btnCancel_Click" CssClass="submit" CausesValidation="false" />
    </div>
</asp:Content>

