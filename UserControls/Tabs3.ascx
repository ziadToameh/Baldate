<%@ Control Language="C#" AutoEventWireup="true" CodeFile="Tabs3.ascx.cs" Inherits="UserControls_Tabs3" %>
<br />
<div id="tabbed_box3_1" class="tabbed_box3">
    <div class="tabbed_area3">
        <ul class="tabs3">
            <li><a href="javascript:void(0);" title="content3_1" class="tab3 active3"> ثقافة</a></li>
            <li><a href="javascript:void(0);" title="content3_3" class="tab3"> من الذاكرة</a></li>
            <li><a href="javascript:void(0);" title="content3_2" class="tab3"> أطفال</a></li>
            <li><a href="javascript:void(0);" title="content3_4" class="tab3"> شخصيات</a></li>
           <%-- <li><a href="javascript:void(0);" title="content1_6" class="tab1"> سجد</a></li>
            <li><a href="javascript:void(0);" title="content1_5" class="tab1"> اللويزة</a></li>
            <li><a href="javascript:void(0);" title="content1_7" class="tab1"> الجرمق</a></li>--%>
        </ul>
        <div id="content3_3" class="content3">
           <table cellpadding="0" cellspacing="0">
                <tr><asp:Repeater ID="Baladi1" runat="server">
                    <ItemTemplate>
                        <td valign="top"><span id='divImages400_<%# Eval("Id") %>'></span>
                        <script type="text/javascript">
                                                    <!--
                            SetHomeAdT('<%# Eval("Id") %>', '<%# Eval("Images") %>', 400, 240, 180, '<%# Eval("ProfileImage") %>', 'margin-top: 10px;margin-right: 5px;margin-left: 5px;');
                            -->
                        </script><br /><a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>' style="min-height:30px;">
                            <%#DataBinder.Eval(Container.DataItem, DisplayName)%>
                        </a></td>
                    </ItemTemplate>
                </asp:Repeater>
                    
                </tr>
                <tr>
                    <td colspan="3"><a href="Events.aspx?id=14" style="color: red; text-align: left;float:left;
                    font-weight: bold; font-size: 16px;">المزيد من الاخبار</a></td>
                </tr>

            </table>
        </div>
        <div id="content3_2" class="content3">
            <table cellpadding="0" cellspacing="0">
                <tr><asp:Repeater ID="Baladi2" runat="server">
                    <ItemTemplate>
                        <td valign="top"><span id='divImages401_<%# Eval("Id") %>'></span>
                        <script type="text/javascript">
                                                    <!--
                            SetHomeAdT('<%# Eval("Id") %>', '<%# Eval("Images") %>', 401, 240, 180, '<%# Eval("ProfileImage") %>', 'margin-top: 10px;margin-right: 5px;margin-left: 5px;');
                            -->
                        </script><br /><a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>'>
                            <%#DataBinder.Eval(Container.DataItem, DisplayName)%>
                        </a></td>
                    </ItemTemplate>
                </asp:Repeater>
                    
                </tr>
                <tr>
                    <td colspan="3"><a href="Events.aspx?id=15" style="color: red; text-align: left;float:left;
                    font-weight: bold; font-size: 16px;">المزيد من الاخبار</a></td>
                </tr>

            </table>
        </div>
        <div id="content3_1" class="content3">
             <table cellpadding="0" cellspacing="0">
                <tr><asp:Repeater ID="Baladi3" runat="server">
                    <ItemTemplate>
                        <td valign="top"><span id='divImages402_<%# Eval("Id") %>'></span>
                        <script type="text/javascript">
                                                    <!--
                            SetHomeAdT('<%# Eval("Id") %>', '<%# Eval("Images") %>', 402, 240, 180, '<%# Eval("ProfileImage") %>', 'margin-top: 10px;margin-right: 5px;margin-left: 5px;');
                            -->
                        </script><br /><a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>'>
                            <%#DataBinder.Eval(Container.DataItem, DisplayName)%>
                        </a></td>
                    </ItemTemplate>
                </asp:Repeater>
                    
                </tr>
                <tr>
                    <td colspan="3"><a href="Events.aspx?id=16" style="color: red; text-align: left;float:left;
                    font-weight: bold; font-size: 16px;">المزيد من الاخبار</a></td>
                </tr>

            </table>
        </div>
        <div id="content3_4" class="content3">
             <table cellpadding="0" cellspacing="0">
                <tr><asp:Repeater ID="Baladi4" runat="server">
                    <ItemTemplate>
                        <td valign="top"><span id='divImages403_<%# Eval("Id") %>'></span>
                        <script type="text/javascript">
                                                    <!--
                            SetHomeAdT('<%# Eval("Id") %>', '<%# Eval("Images") %>', 403, 240, 180, '<%# Eval("ProfileImage") %>', 'margin-top: 10px;margin-right: 5px;margin-left: 5px;');
                            -->
                        </script><br /><a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>'>
                            <%#DataBinder.Eval(Container.DataItem, DisplayName)%>
                        </a></td>
                    </ItemTemplate>
                </asp:Repeater>
                    
                </tr>
                <tr>
                    <td colspan="3"><a href="Events.aspx?id=23" style="color: red; text-align: left;float:left;
                    font-weight: bold; font-size: 16px;">المزيد من الاخبار</a></td>
                </tr>

            </table>
        </div>
       <%-- <div id="content1_4" class="content1">
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
        <div id="content1_6" class="content1">
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