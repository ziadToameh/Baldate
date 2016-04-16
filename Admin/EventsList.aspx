<%@ Page Language="C#" MasterPageFile="~/Admin/Admin.master" AutoEventWireup="true"
    CodeFile="EventsList.aspx.cs" Inherits="Admin_EventsList" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
  <style>
    .Inline
{
    display: inline-block;
}
 
.Spinner
{
    float: left;
    height: 10px;
    font-size: 0.25em ! important;
    padding: 0 8px 0 8px ! important;
    border: 1px solid silver ! important;
    background-color: #EEEEEE ! important;
    display: block;
    margin: 0 ! important;
}
 
.SpinnerUp
{
    border-bottom: 0px solid silver ! important;
    margin-top: 3px ! important;
}
 
.SpinnerDown
{
    clear: both;
}

  </style>
    <script type="text/javascript" charset="utf-8">
        $(document).ready(function () {

            $('#TableList').dataTable({
                "aaSorting": [[0, "desc"]]
            });

        });
					
    </script>
    <script type="text/javascript">
        $(function () {
          $('#eventNav>a').css('color', 'blue');
          //document.getElementById("txtNumberOfSomething").value = new Date().getFullYear();
          //var month =  new Date().getMonth();
          //$("#<%=ddlMonth.ClientID%>").val(month + 1);
        });

        function SpinUp(controlName, MinNumber, MaxNumber) {

          var C = document.getElementById(controlName);

          if (C == null) return false;

          var V = C.value.match(/\-?\d+/);

          if (V.length < 1) return false;

          if (V[0] * 1 >= MaxNumber) V[0] = MaxNumber - 1;

          if (V[0] * 1 < MinNumber) V[0] = MinNumber - 1;

          C.value = (V[0] * 1) + 1;

        }



        function SpinDown(controlName, MinNumber, MaxNumber) {

          var C = document.getElementById(controlName);

          if (C == null) return;

          var V = C.value.match(/\-?\d+/);

          if (V.length < 1) return;

          if (V[0] * 1 > MaxNumber) V[0] = MaxNumber + 1;

          if (V[0] * 1 <= MinNumber) V[0] = MinNumber + 1;

          C.value = (V[0] * 1) - 1;

        }
    </script>
    <div id="divList">
        <div style="width: 100%; height: 80px;">
            <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                    <td width="80%" colspan="4">
                        <h2 style="text-decoration: underline;">
                            Events List</h2>
                    </td>
                    <td valign="middle" align="right">
                        <a href="EventNew.aspx">
                            <img src="CSS/images/add.png" width="30px" height="30px" style="border: 0" />
                        </a>
                    </td>
                    <td>
                        <a href="EventNew.aspx">Add</a>
                    </td>
                </tr>
                <tr>
                    <td colspan="5">
                        filter categories:
                        <asp:DropDownList ID="ddlEventCategory" runat="server">
                        </asp:DropDownList>
                  Date:
                        <asp:DropDownList ID="ddlMonth" runat="server">
                          <asp:ListItem Value="-1">--- All ---</asp:ListItem>
                          <asp:ListItem Value="1">Jan</asp:ListItem>
                          <asp:ListItem Value="2">Feb</asp:ListItem>
                          <asp:ListItem Value="3">Mar</asp:ListItem>
                          <asp:ListItem Value="4">Apr</asp:ListItem>
                          <asp:ListItem Value="5">May</asp:ListItem>
                          <asp:ListItem Value="6">Jun</asp:ListItem>
                          <asp:ListItem Value="7">Jul</asp:ListItem>
                          <asp:ListItem Value="8">Aug</asp:ListItem>
                          <asp:ListItem Value="9">Sep</asp:ListItem>
                          <asp:ListItem Value="10">Oct</asp:ListItem>
                          <asp:ListItem Value="11">Nov</asp:ListItem>
                          <asp:ListItem Value="12">Dec</asp:ListItem>
                        </asp:DropDownList>
                    <asp:TextBox ID="txtNumberOfSomething" runat="server" Text="" ClientIDMode="Static"></asp:TextBox>

                    <div class="Inline" style="height: 20px">

                      <asp:Button ID="SpinUp" CssClass="Spinner SpinnerUp" runat="server"
                        Text="▲" UseSubmitBehavior="false"
                        OnClientClick="SpinUp('txtNumberOfSomething', 2014, 2200); return false;" />

                      <asp:Button ID="SpinDown" CssClass="Spinner SpinnerDown" runat="server"
                        Text="▼" UseSubmitBehavior="false"
                        OnClientClick="SpinDown('txtNumberOfSomething', 2014, 2200); return false;" />

                    </div>
                      <asp:Button ID="btnfilter" runat="server" Text="Filter" OnClick="btnfilter_Click" />
                  </td>
                    <td width="150px"><a href="EventAllComments.aspx">All Comments</a></td>
                </tr>
            </table>
        </div>
        <asp:Label ID="Result" runat="server" CssClass="ResultMessage"></asp:Label>
        <br />
        <br />
        <table id="TableList" width="100%" align="center" cellpadding="0" cellspacing="0"
            border="0" class="display">
            <thead>
                <tr>
                    <%--<th>
                        <asp:Label Width="100px" ID="Label1" Text="Name" runat="server"></asp:Label>
                    </th>--%>
                    <th>
                        <asp:Label Width="100px" ID="Label3" Text="Arabic Name" runat="server"></asp:Label>
                    </th>
                  <th></th>
                  <th></th>
                    <th>
                    </th>
                    <th>
                    </th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <asp:Repeater ID="rptList" runat="server">
                    <ItemTemplate>
                        <tr>
                           <%-- <td>
                                <%# Eval("Name") %>
                            </td>--%>
                            <td style=" display: none;">
                                <%# Eval("Id")%>
                            </td>
                            <td>
                                <%# Eval("Name_Ar")%>
                            </td>
                          <td>
                            <i>
                              <%#DataBinder.Eval(Container.DataItem, "DateAdded", "{0:MMM d, yyyy}")%></i>
                          </td>
                            <td>
                                <a href="EventEdit.aspx?id=<%# Eval("Id")%>">edit</a>
                            </td>
                            <td>
                                <a href="EventDelete.aspx?id=<%# Eval("Id")%>&catId=<%# Eval("CategoryId")%>" onclick="return confirm('Are you sure you want to delete?')">
                                    delete</a>
                            </td>
                            <td>
                                <a href="EventImage.aspx?eventid=<%# Eval("Id")%>&catId=<%# Eval("CategoryId")%>">Browse</a>
                            </td>
                            <td>
                                <a href="EventComment.aspx?id=<%# Eval("Id")%>">Comments <b style="color:black">(<%# Eval("TotalComments")%>)</b>
                                    &nbsp;
                                    <b style="color:red">(<%# Eval("InActiveComments")%>)</b>
                                </a>
                            </td>
                            <td>
                                <a href="../Eventdetail.aspx?id=<%# Eval("Id")%>&catId=<%# Eval("CategoryId")%>" target="_blank" >
                                    Preview</a>
                            </td>
                        </tr>
                    </ItemTemplate>
                </asp:Repeater>
            </tbody>
        </table>
    </div>
</asp:Content>