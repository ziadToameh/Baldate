<%@ Control Language="C#" AutoEventWireup="true" CodeFile="Tabs2.ascx.cs" Inherits="UserControls_Tabs2" %>
<div id="tabbed_box2_1" class="tabbed_box2">
    <div class="tabbed_area2">
        <ul class="tabs2">
            <li><a href="javascript:void(0);" title="content2_1" class="tab2 active2">أقلامكم</a></li>
            <li><a href="javascript:void(0);" title="content2_2" class="tab2">تحقيقات</a></li>
            <li><a href="javascript:void(0);" title="content2_3" class="tab2">مقالات</a></li>
            <%--   <li><a href="javascript:void(0);" title="content2_4" class="tab1">تنشيط الاقتصادي</a></li>
            <li><a href="javascript:void(0);" title="content2_6" class="tab1">التواصل والعلاقات</a></li>--%>
            <%-- <li><a href="javascript:void(0);" title="content2_5" class="tab1">بلدية</a></li>
            <li><a href="javascript:void(0);" title="content2_7" class="tab1">بلدية</a></li>--%>
        </ul>
        <div id="content2_1" class="content2">
            <table cellpadding="0" cellspacing="0">
                <tr>
                    <asp:Repeater ID="Baladi1" runat="server">
                        <ItemTemplate>
                            <td valign="top"><span id='divImages300_<%# Eval("Id") %>'></span>
                                <script type="text/javascript">
                                                    <!--
                                    SetHomeAdT('<%# Eval("Id") %>', '<%# Eval("Images") %>', 300, 240, 180, '<%# Eval("ProfileImage") %>', 'margin-top: 10px;margin-right: 5px;margin-left: 5px;');
                                    -->
                                </script>
                                <br />
                                <a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>' target="_blank">
                                    <%#DataBinder.Eval(Container.DataItem, DisplayName)%>
                                </a></td>
                        </ItemTemplate>
                    </asp:Repeater>

                </tr>
                <tr>
                    <td colspan="3"><a href="Events.aspx?id=8" style="color: red; text-align: left; float: left; font-weight: bold; font-size: 16px;">المزيد من الاخبار</a></td>
                </tr>

            </table>
        </div>
        <div id="content2_2" class="content2">
            <table cellpadding="0" cellspacing="0">
                <tr>
                    <asp:Repeater ID="Baladi2" runat="server">
                        <ItemTemplate>
                            <td valign="top"><span id='divImages301_<%# Eval("Id") %>'></span>
                                <script type="text/javascript">
                                                    <!--
                                    SetHomeAdT('<%# Eval("Id") %>', '<%# Eval("Images") %>', 301, 240, 180, '<%# Eval("ProfileImage") %>', 'margin-top: 10px;margin-right: 5px;margin-left: 5px;');
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
                    <td colspan="3"><a href="Events.aspx?id=10" style="color: red; text-align: left; float: left; font-weight: bold; font-size: 16px;">المزيد من الاخبار</a></td>
                </tr>

            </table>
        </div>
        <div id="content2_3" class="content2">
            <table cellpadding="0" cellspacing="0">
                <tr>
                    <asp:Repeater ID="Baladi3" runat="server">
                        <ItemTemplate>
                            <td valign="top">
                                <br />
                                <span id='divImages302_<%# Eval("Id") %>'></span>
                                <script type="text/javascript">
                                                    <!--
                                    SetHomeAdT('<%# Eval("Id") %>', '<%# Eval("Images") %>', 302, 240, 180, '<%# Eval("ProfileImage") %>', 'margin-top: 10px;margin-right: 5px;margin-left: 5px;');
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
                    <td colspan="3"><a href="Events.aspx?id=11" style="color: red; text-align: left; float: left; font-weight: bold; font-size: 16px;">المزيد من الاخبار</a></td>
                </tr>

            </table>
        </div>
        <%--  <div id="content2_4" class="content1">
            <ul>
                <asp:Repeater ID="Baladi4" runat="server">
                    <ItemTemplate>
                        <li><a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>'>
                            <%#DataBinder.Eval(Container.DataItem, DisplayName)%>
                        </a></li>
                    </ItemTemplate>
                </asp:Repeater>
                <p>
                    <a href="Events.aspx?id=14" style="color: #10364d; text-align: left; padding-right: 300px;
                        font-weight: bold; font-size: 16px;">المزيد من الاخبار</a></p>
            </ul>
        </div>
        <div id="content2_6" class="content1">
            <ul>
                <asp:Repeater ID="Baladi5" runat="server">
                    <ItemTemplate>
                        <li><a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>'>
                            <%#DataBinder.Eval(Container.DataItem, DisplayName)%>
                        </a></li>
                    </ItemTemplate>
                </asp:Repeater>
                <p>
                    <a href="Events.aspx?id=4" style="color: #10364d; text-align: left; padding-right: 300px;
                        font-weight: bold; font-size: 16px;">المزيد من الاخبار</a></p>
            </ul>
        </div>
        <div id="content2_5" class="content1">
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
        <div id="content2_7" class="content1">
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
