<%@ Control Language="C#" AutoEventWireup="true" CodeFile="Tabs4.ascx.cs" Inherits="UserControls_Tabs4" %>
<br />
<div id="tabbed_box4_1" class="tabbed_box4">
    <div class="tabbed_area4">
        <ul class="tabs4">
            <li><a href="javascript:void(0);" title="content4_1" class="tab4 active4">تكنولوجيا</a></li>
            <li><a href="javascript:void(0);" title="content4_4" class="tab4 ">كاريكاتير</a></li>
            <li><a href="javascript:void(0);" title="content4_2" class="tab4">مطبخنا</a></li>
            <li><a href="javascript:void(0);" title="content4_3" class="tab4">صحة وتغذية</a></li>
             <%--<li><a href="javascript:void(0);" title="content1_6" class="tab1"> سجد</a></li>
            <li><a href="javascript:void(0);" title="content1_5" class="tab1"> اللويزة</a></li>
            <li><a href="javascript:void(0);" title="content1_7" class="tab1"> الجرمق</a></li>--%>
        </ul>
        <div id="content4_4" class="content4">
            <table cellpadding="0" cellspacing="0">
                <tr>
                    <asp:Repeater ID="Baladi1" runat="server">
                        <ItemTemplate>
                            <td valign="top"><span id='divImages500_<%# Eval("Id") %>'></span>
                                <script type="text/javascript">
                                                    <!--
                                    SetHomeAdT('<%# Eval("Id") %>', '<%# Eval("Images") %>', 500, 240, 180, '<%# Eval("ProfileImage") %>', 'margin-top: 10px;margin-right: 5px;margin-left: 5px;');
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
                    <td colspan="3"><a href="Events.aspx?id=17" style="color: red; text-align: left; float: left; font-weight: bold; font-size: 16px;">المزيد من الاخبار</a></td>
                </tr>

            </table>
        </div>
        <div id="content4_2" class="content4">
            <table cellpadding="0" cellspacing="0">
                <tr>
                    <asp:Repeater ID="Baladi2" runat="server">
                        <ItemTemplate>
                            <td valign="top"><span id='divImages501_<%# Eval("Id") %>'></span>
                                <script type="text/javascript">
                                                    <!--
                                    SetHomeAdT('<%# Eval("Id") %>', '<%# Eval("Images") %>', 501, 240, 180, '<%# Eval("ProfileImage") %>', 'margin-top: 10px;margin-right: 5px;margin-left: 5px;');
                                    -->
                                </script>
                                <br />
                                <a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>'>
                                    <%#DataBinder.Eval(Container.DataItem, DisplayName)%>
                                </a></td>
                        </ItemTemplate>
                    </asp:Repeater>

                </tr>
                <tr>
                    <td colspan="3"><a href="Events.aspx?id=18" style="color: red; text-align: left; float: left; font-weight: bold; font-size: 16px;">المزيد من الاخبار</a></td>
                </tr>

            </table>
        </div>
        <div id="content4_3" class="content4">
            <table cellpadding="0" cellspacing="0">
                <tr>
                    <asp:Repeater ID="Baladi3" runat="server">
                        <ItemTemplate>
                            <td valign="top">

                                <span id='divImages502_<%# Eval("Id") %>'></span>
                                <script type="text/javascript">
                                                    <!--
                                    SetHomeAdT('<%# Eval("Id") %>', '<%# Eval("Images") %>', 502, 240, 180, '<%# Eval("ProfileImage") %>', 'margin-top: 10px;margin-right: 5px;margin-left: 5px;');
                                    -->
                                </script>
                                <br />
                                <a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>'>
                                    <%#DataBinder.Eval(Container.DataItem, DisplayName)%>
                                </a></td>
                        </ItemTemplate>
                    </asp:Repeater>

                </tr>
                <tr>
                    <td colspan="3"><a href="Events.aspx?id=19" style="color: red; text-align: left; float: left; font-weight: bold; font-size: 16px;">المزيد من الاخبار</a></td>
                </tr>

            </table>
        </div>
        <div id="content4_1" class="content4">
            <table cellpadding="0" cellspacing="0">
                <tr>
                    <asp:Repeater ID="Baladi4" runat="server">
                        <ItemTemplate>
                            <td valign="top"><a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>'>
                                
                            </a>
                                
                                <span id='divImages503_<%# Eval("Id") %>'></span>
                                <script type="text/javascript">
                                                    <!--
                                    SetHomeAdT('<%# Eval("Id") %>', '<%# Eval("Images") %>', 503, 240, 180, '<%# Eval("ProfileImage") %>', 'margin-top: 10px;margin-right: 5px;margin-left: 5px;');
                                    -->
                                </script><br /><a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>'>
                                <%#DataBinder.Eval(Container.DataItem, DisplayName)%>
                            </a>
                            </td>
                        </ItemTemplate>
                    </asp:Repeater>

                </tr>
                <tr>
                    <td colspan="3"><a href="Events.aspx?id=20" style="color: red; text-align: left; float: left; font-weight: bold; font-size: 16px;">المزيد من الاخبار</a></td>
                </tr>

            </table>
        </div>
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
