<%@ Control Language="C#" AutoEventWireup="true" CodeFile="Tabs5.ascx.cs" Inherits="UserControls_Tabs5" %>
<br />
<div id="tabbed_box5_1" class="tabbed_box5">
    <div class="tabbed_area5">
        <ul class="tabs5">
            <li><a href="javascript:void(0);" title="content5_1" class="tab5 active5">رياضة محلية</a></li>
            <li><a href="javascript:void(0);" title="content5_2" class="tab5">رياضة دولية</a></li>
            <%--<li><a href="javascript:void(0);" title="content5_3" class="tab5">صحة وتغذية</a></li>--%>
            <%-- <li><a href="javascript:void(0);" title="content4_4" class="tab4"> تكنولوجيا</a></li>--%>
            <%-- <li><a href="javascript:void(0);" title="content1_6" class="tab1"> سجد</a></li>
            <li><a href="javascript:void(0);" title="content1_5" class="tab1"> اللويزة</a></li>
            <li><a href="javascript:void(0);" title="content1_7" class="tab1"> الجرمق</a></li>--%>
        </ul>
        <div id="content5_1" class="content5">
            <table cellpadding="0" cellspacing="0">
                <tr>
                    <asp:Repeater ID="Baladi1" runat="server">
                        <ItemTemplate>
                            <td valign="top"><span id='divImages600_<%# Eval("Id") %>'></span>
                                <script type="text/javascript">
                                                    <!--
                                    SetHomeAdT('<%# Eval("Id") %>', '<%# Eval("Images") %>', 600, 240, 180, '<%# Eval("ProfileImage") %>', 'margin-top: 10px;margin-right: 5px;margin-left: 5px;');
                                    -->
                                </script>
                                <br />
                                <a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>' style="min-height: 30px;">
                                    <%#DataBinder.Eval(Container.DataItem, DisplayName)%>
                                </a></td>
                        </ItemTemplate>
                    </asp:Repeater>

                </tr>
                <tr>
                    <td colspan="3"><a href="Events.aspx?id=21" style="color: red; text-align: left; float: left; font-weight: bold; font-size: 16px;">المزيد من الاخبار</a></td>
                </tr>

            </table>
        </div>
        <div id="content5_2" class="content5">
            <table cellpadding="0" cellspacing="0">
                <tr>
                    <asp:Repeater ID="Baladi2" runat="server">
                        <ItemTemplate>
                            <td valign="top">
                               
                                <span id='divImages601_<%# Eval("Id") %>'></span>
                                <script type="text/javascript">
                                                    <!--
                                    SetHomeAdT('<%# Eval("Id") %>', '<%# Eval("Images") %>', 601, 240, 180, '<%# Eval("ProfileImage") %>', 'margin-top: 10px;margin-right: 5px;margin-left: 5px;');
                                    -->
                                </script> <br /><a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>'>
                                <%#DataBinder.Eval(Container.DataItem, DisplayName)%>
                            </a>
                            </td>
                        </ItemTemplate>
                    </asp:Repeater>

                </tr>
                <tr>
                    <td colspan="3"><a href="Events.aspx?id=22" style="color: red; text-align: left; float: left; font-weight: bold; font-size: 16px;">المزيد من الاخبار</a></td>
                </tr>

            </table>
        </div>
       <%-- <div id="content5_3" class="content5">
            <table cellpadding="0" cellspacing="0">
                <tr>
                    <asp:Repeater ID="Baladi3" runat="server">
                        <ItemTemplate>
                            <td valign="top">
                                
                                <span id='divImages602_<%# Eval("Id") %>'></span>
                                <script type="text/javascript">
                                                    <!--
                                    SetHomeAdT('<%# Eval("Id") %>', '<%# Eval("Images") %>', 602, 210, 180, '<%# Eval("ProfileImage") %>', 'margin-top: 10px;margin-right: 5px;margin-left: 5px;');
                                    -->
                                </script><br /><a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>'>
                                <%#DataBinder.Eval(Container.DataItem, DisplayName)%>
                            </a>
                            </td>
                        </ItemTemplate>
                    </asp:Repeater>

                </tr>
                <tr>
                    <td colspan="3"><a href="Events.aspx?id=23" style="color: #10364d; text-align: left; float: left; font-weight: bold; font-size: 16px;">المزيد من الاخبار</a></td>
                </tr>

            </table>
        </div>--%>
        <%-- <div id="content4_4" class="content4">
          <table cellpadding="0" cellspacing="0">
                <tr><asp:Repeater ID="Baladi4" runat="server">
                    <ItemTemplate>
                        <td><a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>'>
                            <%#DataBinder.Eval(Container.DataItem, DisplayName)%>
                        </a><br /><span id='divImages503_<%# Eval("Id") %>'></span>
                        <script type="text/javascript">
                                                    <!--
    SetSourceTab('<%# Eval("Id") %>', '<%# Eval("Images") %>', 503);
                            -->
                        </script></td>
                    </ItemTemplate>
                </asp:Repeater>
                    
                </tr>
                <tr>
                    <td colspan="5"><a href="Events.aspx?id=3" style="color: #10364d; text-align: left;float:left;
                    font-weight: bold; font-size: 16px;">المزيد من الاخبار</a></td>
                </tr>

            </table>
        </div>--%>
        <%-- <div id="content1_6" class="content1">
            <ul>
                <asp:Repeater ID="Baladi5" runat="server">
                    <ItemTemplate>
                        <li><a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>'>
                            <%#DataBinder.Eval(Container.DataItem, DisplayName)%>
                        </a></li>
                    </ItemTemplate>
                </asp:Repeater>
                <p>
                    <a href="Events.aspx?id=15" style="color: #10364d; text-align: left; padding-right: 300px;
                        font-weight: bold; font-size: 16px;">المزيد من الاخبار</a></p>
            </ul>
        </div>
        <div id="content1_5" class="content1">
            <ul>
                <asp:Repeater ID="Baladi6" runat="server">
                    <ItemTemplate>
                       <li><a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>'>
                            <%#DataBinder.Eval(Container.DataItem, DisplayName)%>
                        </a></li>
                    </ItemTemplate>
                </asp:Repeater>
                <p>
                    <a href="Events.aspx?id=16" style="color: #10364d; text-align: left; padding-right: 300px;
                        font-weight: bold; font-size: 16px;">المزيد من الاخبار</a></p>
            </ul>
        </div>
        <div id="content1_7" class="content1">
            <ul>
                <asp:Repeater ID="Baladi7" runat="server">
                    <ItemTemplate>
                       <li><a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>'>
                            <%#DataBinder.Eval(Container.DataItem, DisplayName)%>
                        </a></li>
                    </ItemTemplate>
                </asp:Repeater>
                <p>
                    <a href="Events.aspx?id=17" style="color: #10364d; text-align: left; padding-right: 300px;
                        font-weight: bold; font-size: 16px;">المزيد من الاخبار</a></p>
            </ul>
        </div>--%>
    </div>
</div>
