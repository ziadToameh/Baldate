<%@ Control Language="C#" AutoEventWireup="true" CodeFile="ucTabs.ascx.cs" Inherits="UserControls_ucTabs" %>
<div id="tabbed_box_1" class="tabbed_box">
    <div class="tabbed_area">
        <ul class="tabs">
            <li><a href="javascript:void(0);" title="content_1" class="tab active">أخبار محلية</a></li>
            <li><a href="javascript:void(0);" title="content_2" class="tab">أخبار دولية</a></li>
            <li><a href="javascript:void(0);" title="content_3" class="tab">أخبار متنوعة</a></li>
           <%-- <li><a href="javascript:void(0);" title="content_4" class="tab">تحقيقات</a></li>
            <li><a href="javascript:void(0);" title="content_6" class="tab">مقابلات</a></li>
            <li><a href="javascript:void(0);" title="content_5" class="tab">مقالات</a></li>--%>
        </ul>
        <div id="content_1" class="content">
           
            <table cellpadding="0" cellspacing="0">
                <tr><asp:Repeater ID="LocalEvents" runat="server">
                    <ItemTemplate>
                        <td valign="top"><span id='divImages100_<%# Eval("Id") %>'></span>
                        <script type="text/javascript">
                                                    <!--
                            SetHomeAdT('<%# Eval("Id") %>', '<%# Eval("Images") %>', 100, 240, 180, '<%# Eval("ProfileImage") %>', 'margin-top: 10px;margin-right: 5px;margin-left: 5px;');
                            -->
                        </script><a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>'>
                            <%#DataBinder.Eval(Container.DataItem, DisplayName)%>
                        </a></td>
                    </ItemTemplate>
                </asp:Repeater>
                    
                </tr>
                <tr>
                    <td colspan="3"><a href="Events.aspx?id=1" style="color: red; text-align: left;float:left;
                    font-weight: bold; font-size: 16px;">المزيد من الاخبار</a></td>
                </tr>

            </table>
            
        </div>
        <div id="content_2" class="content">
           
            <table cellpadding="0" cellspacing="0">
                <tr><asp:Repeater ID="Social" runat="server">
                    <ItemTemplate>
                        <td valign="top"><span id='divImages101_<%# Eval("Id") %>'></span>
                        <script type="text/javascript">
                                                    <!--
                            SetHomeAdT('<%# Eval("Id") %>', '<%# Eval("Images") %>', 101, 240, 180, '<%# Eval("ProfileImage") %>', 'margin-top: 10px;margin-right: 5px;margin-left: 5px;');
                            -->
                        </script><a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>'>
                            <%#DataBinder.Eval(Container.DataItem, DisplayName)%>
                        </a></td>
                    </ItemTemplate>
                </asp:Repeater>
                    
                </tr>
                <tr>
                    <td colspan="3"><a href="Events.aspx?id=2" style="color: red; text-align: left;float:left;
                    font-weight: bold; font-size: 16px;">المزيد من الاخبار</a></td>
                </tr>

            </table>
        </div>
        <div id="content_3" class="content">
           
            <table cellpadding="0" cellspacing="0">
                <tr><asp:Repeater ID="Health" runat="server">
                    <ItemTemplate>
                        <td valign="top"><span id='divImages102_<%# Eval("Id") %>'></span>
                        <script type="text/javascript">
                                                    <!--
                            SetHomeAdT('<%# Eval("Id") %>', '<%# Eval("Images") %>', 102, 240, 180, '<%# Eval("ProfileImage") %>', 'margin-top: 10px;margin-right: 5px;margin-left: 5px;');
                            -->
                        </script><a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>'>
                            <%#DataBinder.Eval(Container.DataItem, DisplayName)%>
                        </a></td>
                    </ItemTemplate>
                </asp:Repeater>
                    
                </tr>
                <tr>
                    <td colspan="3"><a href="Events.aspx?id=3" style="color: red; text-align: left;float:left;
                    font-weight: bold; font-size: 16px;">المزيد من الاخبار</a></td>
                </tr>

            </table>
        </div>
        <%--<div id="content_4" class="content">
            
            <table cellpadding="0" cellspacing="0">
                <tr><asp:Repeater ID="Sports" runat="server">
                    <ItemTemplate>
                        <td><a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>'>
                            <%#DataBinder.Eval(Container.DataItem, DisplayName)%>
                        </a><span id='divImages103_<%# Eval("Id") %>'></span>
                        <script type="text/javascript">
                                                    <!--
    SetSourceTab('<%# Eval("Id") %>', '<%# Eval("Images") %>', 103);
                            -->
                        </script></td>
                    </ItemTemplate>
                </asp:Repeater>
                    
                </tr>
                <tr>
                    <td colspan="5"><a href="Events.aspx?id=4" style="color: #10364d; text-align: left;float:left;
                    font-weight: bold; font-size: 16px;">المزيد من الاخبار</a></td>
                </tr>

            </table>
        </div>
        <div id="content_6" class="content">
            
            <table cellpadding="0" cellspacing="0">
                <tr><asp:Repeater ID="OuterCit" runat="server">
                    <ItemTemplate>
                        <td><a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>'>
                            <%#DataBinder.Eval(Container.DataItem, DisplayName)%>
                        </a><span id='divImages104_<%# Eval("Id") %>'></span>
                        <script type="text/javascript">
                                                    <!--
    SetSourceTab('<%# Eval("Id") %>', '<%# Eval("Images") %>', 104);
                            -->
                        </script></td>
                    </ItemTemplate>
                </asp:Repeater>
                    
                </tr>
                <tr>
                    <td colspan="5"><a href="Events.aspx?id=5" style="color: #10364d; text-align: left;float:left;
                    font-weight: bold; font-size: 16px;">المزيد من الاخبار</a></td>
                </tr>

            </table>
        </div>
        <div id="content_5" class="content">
            <ul>
                <asp:Repeater ID="ResultsList" runat="server">
                    <ItemTemplate>
                        <li><a href='ArticleDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>'>
                            <%#DataBinder.Eval(Container.DataItem, DisplayName)%></a> </a></li>
                    </ItemTemplate>
                </asp:Repeater>
                <p>
                    <a href="Articles.aspx" style="color: #10364d; text-align: left; padding-right: 300px;
                        font-weight: bold; font-size: 16px;">المزيد من المقالات</a></p>
            </ul>
        </div>--%>
    </div>
</div>
<div id="resultsDiv">
</div>
