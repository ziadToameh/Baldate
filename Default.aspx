<%@ Page Title="" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true"
  CodeFile="Default.aspx.cs" Inherits="_Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
  <iframe src="iContentSlider.aspx" frameborder="0" width="800px" height="330px"></iframe>
  <div class="Contentheading">
    <h1 class="tabsbaladi">أخبار سياسية محلية ودولية</h1>
  </div>
  <table cellpadding="0" cellspacing="0" width="99%" style="background-color: #fff;">
    <asp:Repeater ID="LocalEvents" runat="server">
      <ItemTemplate>
        <tr>
          <td width="675px" class="home-event-title">
            <a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>' target="_blank">
              <%#DataBinder.Eval(Container.DataItem, "Name_Ar")%>
            </a>
          </td>
          <td valign="top" align="left" class="home-event-date">
            <%#DataBinder.Eval(Container.DataItem, "DateAdded", "{0:d MMM, yyyy}")%>
          </td>
        </tr>
      </ItemTemplate>
    </asp:Repeater>
    <tr>
      <td colspan="2" style="text-align: left;">
        <a href="Events.aspx?id=2" style="color: black; text-align: left; padding-right: 50px; font-weight: bold; font-size: 16px;" target="_blank">المزيد من الاخبار</a>
      </td>
    </tr>
  </table>
  <div class="Contentheading">

    <h1 class="tabsbaladi">أخبار محلية</h1>
  </div>
  <div class="section_02_box_content">
    <table cellpadding="0" cellspacing="0" border="0">
      <tr>
        <asp:Repeater ID="Social" runat="server">
          <ItemTemplate>
            <td align="center" valign="top" class="EventTitle" style="border-left: 1px dashed silver;">
              <h1 style="height: 50px; padding-right: 5px;"><a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>' id="ViewDetail"
                class="section_02_box_content_title">
                <%#DataBinder.Eval(Container.DataItem, "Name_Ar").ToString().Substring(0, Math.Min(80, DataBinder.Eval(Container.DataItem, "Name_Ar").ToString().Length))%>...
              </a>
              </h1>
              <img src='Admin/Uploads/Events/Profile/<%# DataBinder.Eval(Container.DataItem, "Id") %>/<%#  DataBinder.Eval(Container.DataItem, "ProfileImage") %>' width="250px" height="120px" style="border: 1px solid black; margin: 5px" />

            </td>
          </ItemTemplate>
        </asp:Repeater>
      </tr>
    </table>

  </div>
  <table cellpadding="0" cellspacing="0" width="99%" style="background-color: #fff;">
    <asp:Repeater ID="repSocial" runat="server">
      <ItemTemplate>
        <tr>
          <td width="675px" class="home-event-title">
            <a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>' target="_blank">
              <%#DataBinder.Eval(Container.DataItem, "Name_Ar")%>
            </a>
          </td>
          <td valign="top" align="left" class="home-event-date">
            <%#DataBinder.Eval(Container.DataItem, "DateAdded", "{0:d MMM, yyyy}")%>
          </td>
        </tr>
      </ItemTemplate>
    </asp:Repeater>
    <tr>
      <td colspan="2" style="text-align: left;">
        <a href="Events.aspx?id=1" style="color: black; text-align: left; padding-right: 50px; font-weight: bold; font-size: 16px;" target="_blank">المزيد من الاخبار</a>
      </td>
    </tr>
  </table>
  <div class="Contentheading">
    <h1 class="tabsbaladi">الصفحة الاجتماعية</h1>
    <br />
    <table>
      <tr>
        <td rowspan="2" width="390px" style="border-left: 1px solid silver;" align="center">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <asp:Repeater ID="repSocial20" runat="server">
                <ItemTemplate>
                  <td valign="top" align="center">
                    <img src='Admin/Uploads/Events/Profile/<%# DataBinder.Eval(Container.DataItem, "Id") %>/<%#  DataBinder.Eval(Container.DataItem, "ProfileImage") %>' width="350px" height="300px" style="border: 1px solid black; margin: 5px" />
                    <a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>' style="font-size: 16px; color: #c93b3f;">
                      <%#DataBinder.Eval(Container.DataItem, "Name_Ar")%>
                    </a></td>
                </ItemTemplate>
              </asp:Repeater>
            </tr>

          </table>
        </td>
        <td style="border-left: 1px solid silver;" align="center" width="220px">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <asp:Repeater ID="repSocial21" runat="server">
                <ItemTemplate>
                  <td valign="top" align="center">

                    <img src='Admin/Uploads/Events/Profile/<%# DataBinder.Eval(Container.DataItem, "Id") %>/<%#  DataBinder.Eval(Container.DataItem, "ProfileImage") %>' width="190px" height="130px" style="border: 1px solid black; margin: 5px" />
                    <br />
                    <a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>' style="font-size: 16px; color: #c93b3f;">
                      <%#DataBinder.Eval(Container.DataItem, "Name_Ar")%>
                    </a></td>
                </ItemTemplate>
              </asp:Repeater>
            </tr>
          </table>
        </td>
        <td align="center" width="220px">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <asp:Repeater ID="repSocial31" runat="server">
                <ItemTemplate>
                  <td valign="top" align="center">
                    <img src='Admin/Uploads/Events/Profile/<%# DataBinder.Eval(Container.DataItem, "Id") %>/<%#  DataBinder.Eval(Container.DataItem, "ProfileImage") %>' width="190px" height="130px" style="border: 1px solid black; margin: 5px" />
                    <br />
                    <a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>' style="font-size: 16px; color: #c93b3f;">
                      <%#DataBinder.Eval(Container.DataItem, "Name_Ar")%>
                    </a></td>
                </ItemTemplate>
              </asp:Repeater>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="border-left: 1px solid silver;" align="center">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <asp:Repeater ID="repSocial41" runat="server">
                <ItemTemplate>
                  <td valign="top" align="center"><
                    <img src='Admin/Uploads/Events/Profile/<%# DataBinder.Eval(Container.DataItem, "Id") %>/<%#  DataBinder.Eval(Container.DataItem, "ProfileImage") %>' width="190px" height="130px" style="border: 1px solid black; margin: 5px" />
                    <br />
                    <a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>' style="font-size: 16px; color: #c93b3f;">
                      <%#DataBinder.Eval(Container.DataItem, "Name_Ar")%>
                    </a></td>
                </ItemTemplate>
              </asp:Repeater>
            </tr>
          </table>
        </td>
        <td align="center">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <asp:Repeater ID="repSocial51" runat="server">
                <ItemTemplate>
                  <td valign="top" align="center">
                    <img src='Admin/Uploads/Events/Profile/<%# DataBinder.Eval(Container.DataItem, "Id") %>/<%#  DataBinder.Eval(Container.DataItem, "ProfileImage") %>' width="190px" height="130px" style="border: 1px solid black; margin: 5px" />
                    <br />
                    <a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>' style="font-size: 16px; color: #c93b3f;">
                      <%#DataBinder.Eval(Container.DataItem, "Name_Ar")%>
                    </a></td>
                </ItemTemplate>
              </asp:Repeater>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td colspan="2" style="text-align: left;">
          <a href="Events.aspx?id=5" style="color: black; text-align: left; padding-right: 50px; font-weight: bold; font-size: 16px;" target="_blank">المزيد من الاخبار</a>
        </td>
      </tr>
    </table>

  </div>
  <div class="Contentheading">
    <div style="width: 50%; display: inline;">
      <asp:Repeater ID="repHAd111" runat="server">
        <ItemTemplate>
          <span id='divImages124_<%# Eval("Id") %>'></span>
          <script type="text/javascript">
                                                    <!--
  SetHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 124, 375, 120, '<%# Eval("ProfileImage") %>', 'margin-top: 10px;margin-right: 5px;margin-left: 5px;');
            -->
          </script>
        </ItemTemplate>
      </asp:Repeater>
    </div>
    <div style="width: 50%; display: inline;">
      <asp:Repeater ID="repHAd112" runat="server">
        <ItemTemplate>
          <span id='divImages125_<%# Eval("Id") %>'></span>
          <script type="text/javascript">
                                                    <!--
  SetHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 125, 375, 120, '<%# Eval("ProfileImage") %>', 'margin-top: 10px;margin-right: 5px;margin-left: 5px;');
            -->
          </script>
        </ItemTemplate>
      </asp:Repeater>
    </div>
    <div style="width: 100%; display: inline;">
      <asp:Repeater ID="repHAd113" runat="server">
        <ItemTemplate>
          <span id='divImages128_<%# Eval("Id") %>'></span>
          <script type="text/javascript">
                                                    <!--
  SetHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 128, 767, 150, '<%# Eval("ProfileImage") %>', 'margin-bottom: 20px;margin-right: 5px;margin-left: 5px;');
            -->
          </script>
        </ItemTemplate>
      </asp:Repeater>
    </div>

  </div>
  <div class="Contentheading">
    <h1 class="tabsbaladi">أخبار العباسية</h1>
    <br />
    <table>
      <tr>
        <td rowspan="2" width="390px" style="border-left: 1px solid silver;" align="center">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <asp:Repeater ID="repSocial1" runat="server">
                <ItemTemplate>
                  <td valign="top" align="center">
                    <img src='Admin/Uploads/Events/Profile/<%# DataBinder.Eval(Container.DataItem, "Id") %>/<%#  DataBinder.Eval(Container.DataItem, "ProfileImage") %>' width="350px" height="300px" style="border: 1px solid black; margin: 5px" />
                    <br />
                    <a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>' style="font-size: 16px; color: #c93b3f;">
                      <%#DataBinder.Eval(Container.DataItem, "Name_Ar")%>
                    </a></td>
                </ItemTemplate>
              </asp:Repeater>
            </tr>

          </table>
        </td>
        <td style="border-left: 1px solid silver;" align="center" width="220px">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <asp:Repeater ID="repSocial2" runat="server">
                <ItemTemplate>
                  <td valign="top" align="center">
                    <img src='Admin/Uploads/Events/Profile/<%# DataBinder.Eval(Container.DataItem, "Id") %>/<%#  DataBinder.Eval(Container.DataItem, "ProfileImage") %>' width="190px" height="130px" style="border: 1px solid black; margin: 5px" />
                    <br />
                    <a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>' style="font-size: 16px; color: #c93b3f;">
                      <%#DataBinder.Eval(Container.DataItem, "Name_Ar")%>
                    </a></td>
                </ItemTemplate>
              </asp:Repeater>
            </tr>
          </table>
        </td>
        <td align="center" width="220px">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <asp:Repeater ID="repSocial3" runat="server">
                <ItemTemplate>
                  <td valign="top" align="center">
                    <img src='Admin/Uploads/Events/Profile/<%# DataBinder.Eval(Container.DataItem, "Id") %>/<%#  DataBinder.Eval(Container.DataItem, "ProfileImage") %>' width="190px" height="130px" style="border: 1px solid black; margin: 5px" />
                    <br />
                    <a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>' style="font-size: 16px; color: #c93b3f;">
                      <%#DataBinder.Eval(Container.DataItem, "Name_Ar")%>
                    </a></td>
                </ItemTemplate>
              </asp:Repeater>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="border-left: 1px solid silver;" align="center">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <asp:Repeater ID="repSocial4" runat="server">
                <ItemTemplate>
                  <td valign="top" align="center">
                    <img src='Admin/Uploads/Events/Profile/<%# DataBinder.Eval(Container.DataItem, "Id") %>/<%#  DataBinder.Eval(Container.DataItem, "ProfileImage") %>' width="190px" height="130px" style="border: 1px solid black; margin: 5px" />
                    <br />
                    <a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>' style="font-size: 16px; color: #c93b3f;">
                      <%#DataBinder.Eval(Container.DataItem, "Name_Ar")%>
                    </a></td>
                </ItemTemplate>
              </asp:Repeater>
            </tr>
          </table>
        </td>
        <td align="center">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <asp:Repeater ID="repSocial5" runat="server">
                <ItemTemplate>
                  <td valign="top" align="center">
                    <img src='Admin/Uploads/Events/Profile/<%# DataBinder.Eval(Container.DataItem, "Id") %>/<%#  DataBinder.Eval(Container.DataItem, "ProfileImage") %>' width="190px" height="130px" style="border: 1px solid black; margin: 5px" />
                    <br />
                    <a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>' style="font-size: 16px; color: #c93b3f;">
                      <%#DataBinder.Eval(Container.DataItem, "Name_Ar")%>
                    </a></td>
                </ItemTemplate>
              </asp:Repeater>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    <table cellpadding="0" cellspacing="0" width="99%" style="background-color: #fff;">
      <asp:Repeater ID="repSocial6" runat="server">
        <ItemTemplate>
          <tr>
            <td width="675px" class="home-event-title">
              <a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>' target="_blank">
                <%#DataBinder.Eval(Container.DataItem, "Name_Ar")%>
              </a>
            </td>
            <td valign="top" align="left" class="home-event-date">
              <%#DataBinder.Eval(Container.DataItem, "DateAdded", "{0:d MMM, yyyy}")%>
            </td>
          </tr>
        </ItemTemplate>
      </asp:Repeater>
      <tr>
        <td colspan="2" style="text-align: left;">
          <a href="Events.aspx?id=4" style="color: black; text-align: left; padding-right: 50px; font-weight: bold; font-size: 16px;" target="_blank">المزيد من الاخبار</a>
        </td>
      </tr>
    </table>
  </div>
  <div class="Contentheading">

    <h1 class="tabsbaladi">أخبار متنوعة</h1>
  </div>
  <div class="section_02_box_content">
    <table cellpadding="0" cellspacing="0" border="0">
      <tr>
        <asp:Repeater ID="Health" runat="server">
          <ItemTemplate>
            <td align="center" valign="top" class="EventTitle" style="border-left: 1px dashed silver;">
              <h1 style="height: 50px; padding-right: 5px;"><a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>' id="ViewDetail"
                class="section_02_box_content_title">
                <%#DataBinder.Eval(Container.DataItem, "Name_Ar").ToString().Substring(0, Math.Min(80, DataBinder.Eval(Container.DataItem, "Name_Ar").ToString().Length))%>...
              </a>
              </h1>
              <img src='Admin/Uploads/Events/Profile/<%# DataBinder.Eval(Container.DataItem, "Id") %>/<%#  DataBinder.Eval(Container.DataItem, "ProfileImage") %>' width="250px" height="120px" style="border: 1px solid black; margin: 5px" />
            </td>
          </ItemTemplate>
        </asp:Repeater>
      </tr>
    </table>

  </div>
  <table cellpadding="0" cellspacing="0" width="99%" style="background-color: #fff;">
    <asp:Repeater ID="repLocal" runat="server">
      <ItemTemplate>
        <tr>
          <td width="675px" class="home-event-title">
            <a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>' target="_blank">
              <%#DataBinder.Eval(Container.DataItem, "Name_Ar")%>
            </a>
          </td>
          <td valign="top" align="left" class="home-event-date">
            <%#DataBinder.Eval(Container.DataItem, "DateAdded", "{0:d MMM, yyyy}")%>
          </td>
        </tr>
      </ItemTemplate>
    </asp:Repeater>
    <tr>
      <td colspan="2" style="text-align: left;">
        <a href="Events.aspx?id=1" style="color: black; text-align: left; padding-right: 50px; font-weight: bold; font-size: 16px;" target="_blank">المزيد من الاخبار</a>
      </td>
    </tr>
  </table>
  <%--<table cellpadding="0" cellspacing="0" width="99%" style="background-color: #fff;">
    <asp:Repeater ID="Health" runat="server">
      <ItemTemplate>
        <tr>
          <td width="675px" class="home-event-title">
            <a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>' target="_blank">
              <%#DataBinder.Eval(Container.DataItem, "Name_Ar")%>
            </a>
          </td>
          <td valign="top" align="left" class="home-event-date">
            <%#DataBinder.Eval(Container.DataItem, "DateAdded", "{0:d MMM, yyyy}")%>
          </td>
        </tr>
      </ItemTemplate>
    </asp:Repeater>
    <tr>
      <td colspan="2" style="text-align: left;">
        <a href="Events.aspx?id=3" style="color: black; text-align: left; padding-right: 50px; font-weight: bold; font-size: 16px;" target="_blank">المزيد من الاخبار</a>
      </td>
    </tr>
  </table>--%>
  <div class="Contentheading">
    <div style="width: 50%; display: inline;">
      <asp:Repeater ID="repHAd114" runat="server">
        <ItemTemplate>
          <span id='divImages129_<%# Eval("Id") %>'></span>
          <script type="text/javascript">
                                                    <!--
  SetHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 129, 375, 120, '<%# Eval("ProfileImage") %>', 'margin-top: 10px;margin-right: 5px;margin-left: 5px;');
            -->
          </script>
        </ItemTemplate>
      </asp:Repeater>
    </div>
    <div style="width: 50%; display: inline;">
      <asp:Repeater ID="repHAd115" runat="server">
        <ItemTemplate>
          <span id='divImages130_<%# Eval("Id") %>'></span>
          <script type="text/javascript">
                  <!--
  SetHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 130, 375, 120, '<%# Eval("ProfileImage") %>', 'margin-top: 10px;margin-right: 5px;margin-left: 5px;');
            -->
          </script>
        </ItemTemplate>
      </asp:Repeater>
    </div>
    <div style="width: 30%; display: inline;">
      <asp:Repeater ID="repHAd116" runat="server">
        <ItemTemplate>
          <span id='divImages131_<%# Eval("Id") %>'></span>
          <script type="text/javascript">
                                                    <!--
  SetHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 131, 767, 150, '<%# Eval("ProfileImage") %>', 'margin-bottom: 20px;margin-right: 5px;margin-left: 5px;');
            -->
          </script>
        </ItemTemplate>
      </asp:Repeater>
    </div>
  </div>
  <div class="Contentheading">
    <div style="width: 50%; display: inline;">
      <asp:Repeater ID="repHAd117" runat="server">
        <ItemTemplate>
          <span id='divImages132_<%# Eval("Id") %>'></span>
          <script type="text/javascript">
                                                    <!--
  SetHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 132, 375, 120, '<%# Eval("ProfileImage") %>', 'margin-top: 10px;margin-right: 5px;margin-left: 5px;');
            -->
          </script>
        </ItemTemplate>
      </asp:Repeater>
    </div>
    <div style="width: 50%; display: inline;">
      <asp:Repeater ID="repHAd118" runat="server">
        <ItemTemplate>
          <span id='divImages133_<%# Eval("Id") %>'></span>
          <script type="text/javascript">
                                                    <!--
  SetHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 133, 375, 120, '<%# Eval("ProfileImage") %>', 'margin-top: 10px;margin-right: 5px;margin-left: 5px;');
            -->
          </script>
        </ItemTemplate>
      </asp:Repeater>
    </div>
    <div style="width: 30%; display: inline;">
      <asp:Repeater ID="repHAd119" runat="server">
        <ItemTemplate>
          <span id='divImages134_<%# Eval("Id") %>'></span>
          <script type="text/javascript">
                                                    <!--
  SetHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 134, 767, 150, '<%# Eval("ProfileImage") %>', 'margin-bottom: 20px;margin-right: 5px;margin-left: 5px;');
            -->
          </script>
        </ItemTemplate>
      </asp:Repeater>
    </div>
  </div>
  <div class="Contentheading">
    <table cellpadding="0" cellspacing="0">
      <tr>
        <td style="border-bottom: 1px solid gray; border-right: 1px solid gray; border-left: 1px solid gray;" align="center">
          <div class="titleh2"><a href="Events.aspx?id=8">أقلامكم</a></div>
        </td>
        <td style="border-bottom: 1px solid gray; border-left: 1px solid gray;" align="center">
          <div class="titleh2"><a href="Events.aspx?id=10">تحقيقات</a> </div>
        </td>
        <td style="border-bottom: 1px solid gray; border-left: 1px solid gray;" align="center">
          <div class="titleh2"><a href="Events.aspx?id=11">مقالات</a></div>
        </td>
        <td style="border-bottom: 1px solid gray; border-left: 1px solid gray;" align="center">
          <div class="titleh2"><a href="Events.aspx?id=16">ثقافة</a></div>
        </td>
      </tr>
      <tr>
        <td style="border-top: 1px solid gray; border-right: 1px solid gray; border-left: 1px solid gray; height: 230px; padding: 2px 5px" align="center" valign="top">
          <asp:Repeater ID="repPens" runat="server">
            <ItemTemplate>

              <img src='Admin/Uploads/Events/Profile/<%# DataBinder.Eval(Container.DataItem, "Id") %>/<%#  DataBinder.Eval(Container.DataItem, "ProfileImage") %>' width="180px" height="160px" style="border: 1px solid black; margin: 5px" />
              <br />
              <a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>' style="font-size: 16px; color: #c93b3f;">
                <%#DataBinder.Eval(Container.DataItem, "Name_Ar")%>
              </a>
            </ItemTemplate>
          </asp:Repeater>
        </td>
        <td style="border-top: 1px solid gray; border-left: 1px solid gray; height: 230px; padding: 2px 5px" align="center" valign="top">
          <asp:Repeater ID="repResearch" runat="server">
            <ItemTemplate>

              <img src='Admin/Uploads/Events/Profile/<%# DataBinder.Eval(Container.DataItem, "Id") %>/<%#  DataBinder.Eval(Container.DataItem, "ProfileImage") %>' width="180px" height="160px" style="border: 1px solid black; margin: 5px" />
              <br />
              <a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>' style="font-size: 16px; color: #c93b3f;">
                <%#DataBinder.Eval(Container.DataItem, "Name_Ar")%>
              </a>
            </ItemTemplate>
          </asp:Repeater>
        </td>
        <td style="border-top: 1px solid gray; border-left: 1px solid gray; height: 230px; padding: 2px 5px" align="center" valign="top">
          <asp:Repeater ID="repArticles" runat="server">
            <ItemTemplate>

              <img src='Admin/Uploads/Events/Profile/<%# DataBinder.Eval(Container.DataItem, "Id") %>/<%#  DataBinder.Eval(Container.DataItem, "ProfileImage") %>' width="180px" height="160px" style="border: 1px solid black;" />
              <br />
              <a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>' style="font-size: 16px; color: #c93b3f;">
                <%#DataBinder.Eval(Container.DataItem, "Name_Ar")%>
              </a>
            </ItemTemplate>
          </asp:Repeater>
        </td>
        <td style="border-top: 1px solid gray; border-left: 1px solid gray; height: 230px; padding: 2px 5px;" align="center" valign="top">
          <asp:Repeater ID="repEdu" runat="server">
            <ItemTemplate>

              <img src='Admin/Uploads/Events/Profile/<%# DataBinder.Eval(Container.DataItem, "Id") %>/<%#  DataBinder.Eval(Container.DataItem, "ProfileImage") %>' width="180px" height="160px" style="border: 1px solid black;" />
              <br />
              <a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>' style="font-size: 16px; color: #c93b3f;">
                <%#DataBinder.Eval(Container.DataItem, "Name_Ar")%>
              </a>
            </ItemTemplate>
          </asp:Repeater>
        </td>
      </tr>
    </table>
  </div>
  <div class="eye1_content_left_section_02">
    <div class="section_02_box" id="box2">
      <h1 class="tabsbaladi">المقابلات</h1>
      <br />
      <div class="section_02_box_content">
        <asp:Repeater ID="National" runat="server">
          <ItemTemplate>
            <table cellpadding="2px" cellspacing="2px" border="0">
              <tr>
                <td align="right" valign="middle" colspan="3" class="EventTitle">
                  <a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>' id="ViewDetail"
                    class="section_02_box_content_title">
                    <%#DataBinder.Eval(Container.DataItem, "Name_Ar").ToString().Substring(0, Math.Min(40, DataBinder.Eval(Container.DataItem, "Name_Ar").ToString().Length))%>...
                  </a>
                </td>
              </tr>
              <tr>
                <td align="right" valign="top" width="200px" colspan="2" style="min-height: 70px; text-align: justify;">
                  <label class="EventDescription" id='Description_<%# Eval("Id") %>'>
                    <%#DataBinder.Eval(Container.DataItem, "Brief")%>...
                  </label>
                </td>
                <td align="right" valign="top">

                  <img src='Admin/Uploads/Events/Profile/<%# DataBinder.Eval(Container.DataItem, "Id") %>/<%#  DataBinder.Eval(Container.DataItem, "ProfileImage") %>' width="140px" height="120px" style="border: 1px solid black; margin: 5px" />
                </td>
            </table>
          </ItemTemplate>
        </asp:Repeater>
        <ul>
          <asp:Repeater ID="repNational" runat="server">
            <ItemTemplate>
              <li align="right" valign="middle" style="min-height: 30px; height: 30px" class="EventTitle">
                <a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>' id="ViewDetail"
                  class="event-home-link">
                  <%#DataBinder.Eval(Container.DataItem, "Name_Ar").ToString().Substring(0, Math.Min(40, DataBinder.Eval(Container.DataItem, "Name_Ar").ToString().Length))%>...
                </a></li>
            </ItemTemplate>
          </asp:Repeater>
          <li style="text-align: left;">

            <a href="Events.aspx?id=12" style="color: black; text-align: left; padding-right: 50px; font-weight: bold; font-size: 16px;" target="_blank">المزيد من الاخبار</a>

          </li>
        </ul>
      </div>
    </div>
    <div class="section_02_box" id="box1">
      <h1 class="tabsbaladi">في الاغتراب</h1>
      <br />
      <div class="section_02_box_content">
        <asp:Repeater ID="Lebanon" runat="server">
          <ItemTemplate>
            <table cellpadding="2px" cellspacing="2px" border="0">
              <tr>
                <td align="right" valign="middle" colspan="3" class="EventTitle">
                  <a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>' id="ViewDetail"
                    class="section_02_box_content_title">
                    <%#DataBinder.Eval(Container.DataItem, "Name_Ar").ToString().Substring(0, Math.Min(40, DataBinder.Eval(Container.DataItem, "Name_Ar").ToString().Length))%>...
                  </a>
                </td>
              </tr>
              <tr>
                <td align="right" valign="top" width="200px" colspan="2" style="min-height: 70px; text-align: justify;">
                  <label class="EventDescription" id='Description_<%# Eval("Id") %>'>
                    <%#DataBinder.Eval(Container.DataItem, "Brief")%>...
                  </label>
                </td>
                <td align="right" valign="top">

                  <img src='Admin/Uploads/Events/Profile/<%# DataBinder.Eval(Container.DataItem, "Id") %>/<%#  DataBinder.Eval(Container.DataItem, "ProfileImage") %>' width="140px" height="120px" style="border: 1px solid black; margin: 5px" />
                </td>
            </table>
          </ItemTemplate>
        </asp:Repeater>
        <ul>
          <asp:Repeater ID="replebanon" runat="server">
            <ItemTemplate>
              <li align="right" valign="middle" style="min-height: 30px; height: 30px" class="EventTitle">
                <a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>' id="ViewDetail"
                  class="event-home-link">
                  <%#DataBinder.Eval(Container.DataItem, "Name_Ar").ToString().Substring(0, Math.Min(40, DataBinder.Eval(Container.DataItem, "Name_Ar").ToString().Length))%>...
                </a></li>
            </ItemTemplate>
          </asp:Repeater>
          <li style="text-align: left;">

            <a href="Events.aspx?id=13" style="color: black; text-align: left; padding-right: 50px; font-weight: bold; font-size: 16px;" target="_blank">المزيد من الاخبار</a>

          </li>
        </ul>
      </div>
    </div>
    <div id="clear">
    </div>
  </div>
  <div class="Contentheading">
    <div style="width: 50%; display: inline;">
      <asp:Repeater ID="repHAd120" runat="server">
        <ItemTemplate>
          <span id='divImages135_<%# Eval("Id") %>'></span>
          <script type="text/javascript">
                                                    <!--
  SetHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 135, 375, 120, '<%# Eval("ProfileImage") %>', 'margin-top: 10px;margin-right: 5px;margin-left: 5px;');
            -->
          </script>
        </ItemTemplate>
      </asp:Repeater>
    </div>
    <div style="width: 50%; display: inline;">
      <asp:Repeater ID="repHAd121" runat="server">
        <ItemTemplate>
          <span id='divImages136_<%# Eval("Id") %>'></span>
          <script type="text/javascript">
                                                    <!--
  SetHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 136, 375, 120, '<%# Eval("ProfileImage") %>', 'margin-top: 10px;margin-right: 5px;margin-left: 5px;');
            -->
          </script>
        </ItemTemplate>
      </asp:Repeater>
    </div>
    <div style="width: 30%; display: inline;">
      <asp:Repeater ID="repHAd122" runat="server">
        <ItemTemplate>
          <span id='divImages137_<%# Eval("Id") %>'></span>
          <script type="text/javascript">
                                                    <!--
  SetHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 137, 767, 150, '<%# Eval("ProfileImage") %>', 'margin-bottom: 20px;margin-right: 5px;margin-left: 5px;');
            -->
          </script>
        </ItemTemplate>
      </asp:Repeater>
    </div>
  </div>
  <div class="Contentheading">
    <table cellpadding="0" cellspacing="0">
      <tr>
        <td style="border-bottom: 1px solid gray; border-right: 1px solid gray; border-left: 1px solid gray;" align="center">
          <div class="titleh2"><a href="Events.aspx?id=14">من الذاكرة</a></div>
        </td>
        <td style="border-bottom: 1px solid gray; border-left: 1px solid gray;" align="center">
          <div class="titleh2"><a href="Events.aspx?id=15">أطفال</a> </div>
        </td>
        <td style="border-bottom: 1px solid gray; border-left: 1px solid gray;" align="center">
          <div class="titleh2"><a href="Events.aspx?id=23">شخصيات</a></div>
      </tr>
      <tr>
        <td style="border-top: 1px solid gray; border-right: 1px solid gray; border-left: 1px solid gray; height: 230px; padding: 2px 5px" align="center" valign="top">
          <asp:Repeater ID="Baladi15" runat="server">
            <ItemTemplate>

              <img src='Admin/Uploads/Events/Profile/<%# DataBinder.Eval(Container.DataItem, "Id") %>/<%#  DataBinder.Eval(Container.DataItem, "ProfileImage") %>' width="240px" height="160px" style="border: 1px solid black; margin: 5px" />
              <br />
              <a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>' style="font-size: 16px; color: #c93b3f;">
                <%#DataBinder.Eval(Container.DataItem, "Name_Ar")%>
              </a>
            </ItemTemplate>
          </asp:Repeater>
        </td>
        <td style="border-top: 1px solid gray; border-left: 1px solid gray; height: 230px; padding: 2px 5px" align="center" valign="top">
          <asp:Repeater ID="Baladi16" runat="server">
            <ItemTemplate>

              <img src='Admin/Uploads/Events/Profile/<%# DataBinder.Eval(Container.DataItem, "Id") %>/<%#  DataBinder.Eval(Container.DataItem, "ProfileImage") %>' width="240px" height="160px" style="border: 1px solid black; margin: 5px" />
              <br />
              <a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>' style="font-size: 16px; color: #c93b3f;">
                <%#DataBinder.Eval(Container.DataItem, "Name_Ar")%>
              </a>
            </ItemTemplate>
          </asp:Repeater>
        </td>
        <td style="border-top: 1px solid gray; border-left: 1px solid gray; height: 230px; padding: 2px 5px" align="center" valign="top">
          <asp:Repeater ID="Baladi17" runat="server">
            <ItemTemplate>

              <img src='Admin/Uploads/Events/Profile/<%# DataBinder.Eval(Container.DataItem, "Id") %>/<%#  DataBinder.Eval(Container.DataItem, "ProfileImage") %>' width="240px" height="160px" style="border: 1px solid black; margin: 5px" />
              <br />
              <a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>' style="font-size: 16px; color: #c93b3f;">
                <%#DataBinder.Eval(Container.DataItem, "Name_Ar")%>
              </a>
            </ItemTemplate>
          </asp:Repeater>
        </td>

      </tr>
    </table>
  </div>
  <div class="Contentheading">
    <div style="width: 50%; display: inline;">
      <asp:Repeater ID="repHAd123" runat="server">
        <ItemTemplate>
          <span id='divImages138_<%# Eval("Id") %>'></span>
          <script type="text/javascript">
                                                    <!--
  SetHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 138, 375, 120, '<%# Eval("ProfileImage") %>', 'margin-top: 10px;margin-right: 5px;margin-left: 5px;');
            -->
          </script>
        </ItemTemplate>
      </asp:Repeater>
    </div>
    <div style="width: 50%; display: inline;">
      <asp:Repeater ID="repHAd124" runat="server">
        <ItemTemplate>
          <span id='divImages139_<%# Eval("Id") %>'></span>
          <script type="text/javascript">
                                                    <!--
  SetHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 139, 375, 120, '<%# Eval("ProfileImage") %>', 'margin-top: 10px;margin-right: 5px;margin-left: 5px;');
            -->
          </script>
        </ItemTemplate>
      </asp:Repeater>
    </div>
    <div style="width: 30%; display: inline;">
      <asp:Repeater ID="repHAd125" runat="server">
        <ItemTemplate>
          <span id='divImages140_<%# Eval("Id") %>'></span>
          <script type="text/javascript">
                                                    <!--
  SetHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 140, 767, 150, '<%# Eval("ProfileImage") %>', 'margin-bottom: 20px;margin-right: 5px;margin-left: 5px;');
            -->
          </script>
        </ItemTemplate>
      </asp:Repeater>
    </div>
  </div>
  <div class="Contentheading">
    <table cellpadding="0" cellspacing="0">
      <tr>
        <td style="border-bottom: 1px solid gray; border-right: 1px solid gray; border-left: 1px solid gray;" align="center">
          <div class="titleh2"><a href="Events.aspx?id=20">تكنولوجيا</a></div>
        </td>
        <td style="border-bottom: 1px solid gray; border-left: 1px solid gray;" align="center">
          <div class="titleh2"><a href="Events.aspx?id=17">إسلاميات</a></div>
        </td>
        <td style="border-bottom: 1px solid gray; border-left: 1px solid gray;" align="center">
          <div class="titleh2"><a href="Events.aspx?id=18">مطبخنا</a></div>
        </td>
        <td style="border-bottom: 1px solid gray; border-left: 1px solid gray;" align="center">
          <div class="titleh2"><a href="Events.aspx?id=19">صحة وتغذية</a> </div>
        </td>
      </tr>
      <tr>
        <td style="border-top: 1px solid gray; border-right: 1px solid gray; border-left: 1px solid gray; height: 230px; padding: 2px 5px" align="center" valign="top">
          <asp:Repeater ID="Baladi11" runat="server">
            <ItemTemplate>
              <img src='Admin/Uploads/Events/Profile/<%# DataBinder.Eval(Container.DataItem, "Id") %>/<%#  DataBinder.Eval(Container.DataItem, "ProfileImage") %>' width="180px" height="160px" style="border: 1px solid black; margin: 5px" />
              <br />
              <a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>' style="font-size: 16px; color: #c93b3f;">
                <%#DataBinder.Eval(Container.DataItem, "Name_Ar")%>
              </a>
            </ItemTemplate>
          </asp:Repeater>
        </td>
        <td style="border-top: 1px solid gray; border-left: 1px solid gray; height: 230px; padding: 2px 5px" align="center" valign="top">
          <asp:Repeater ID="Baladi12" runat="server">
            <ItemTemplate>
              <img src='Admin/Uploads/Events/Profile/<%# DataBinder.Eval(Container.DataItem, "Id") %>/<%#  DataBinder.Eval(Container.DataItem, "ProfileImage") %>' width="180px" height="160px" style="border: 1px solid black; margin: 5px" />
              <br />
              <a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>' style="font-size: 16px; color: #c93b3f;">
                <%#DataBinder.Eval(Container.DataItem, "Name_Ar")%>
              </a>
            </ItemTemplate>
          </asp:Repeater>
        </td>
        <td style="border-top: 1px solid gray; border-left: 1px solid gray; height: 230px; padding: 2px 5px" align="center" valign="top">
          <asp:Repeater ID="Baladi13" runat="server">
            <ItemTemplate>
              <img src='Admin/Uploads/Events/Profile/<%# DataBinder.Eval(Container.DataItem, "Id") %>/<%#  DataBinder.Eval(Container.DataItem, "ProfileImage") %>' width="180px" height="160px" style="border: 1px solid black; margin: 5px" />
              <br />
              <a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>' style="font-size: 16px; color: #c93b3f;">
                <%#DataBinder.Eval(Container.DataItem, "Name_Ar")%>
              </a>
            </ItemTemplate>
          </asp:Repeater>
        </td>
        <td style="border-top: 1px solid gray; border-left: 1px solid gray; height: 230px; padding: 2px 5px;" align="center" valign="top">
          <asp:Repeater ID="Baladi14" runat="server">
            <ItemTemplate>
              <img src='Admin/Uploads/Events/Profile/<%# DataBinder.Eval(Container.DataItem, "Id") %>/<%#  DataBinder.Eval(Container.DataItem, "ProfileImage") %>' width="170px" height="160px" style="border: 1px solid black; margin: 5px" />
              <br />
              <a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>' style="font-size: 16px; color: #c93b3f;">
                <%#DataBinder.Eval(Container.DataItem, "Name_Ar")%>
              </a>
            </ItemTemplate>
          </asp:Repeater>
        </td>
      </tr>
    </table>
  </div>
  <div class="Contentheading">
    <div style="width: 50%; display: inline;">
      <asp:Repeater ID="repHAd126" runat="server">
        <ItemTemplate>
          <span id='divImages141_<%# Eval("Id") %>'></span>
          <script type="text/javascript">
                                                    <!--
  SetHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 141, 375, 120, '<%# Eval("ProfileImage") %>', 'margin-top: 10px;margin-right: 5px;margin-left: 5px;');
            -->
          </script>
        </ItemTemplate>
      </asp:Repeater>
    </div>
    <div style="width: 50%; display: inline;">
      <asp:Repeater ID="repHAd127" runat="server">
        <ItemTemplate>
          <span id='divImages142_<%# Eval("Id") %>'></span>
          <script type="text/javascript">
                                                    <!--
  SetHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 142, 375, 120, '<%# Eval("ProfileImage") %>', 'margin-top: 10px;margin-right: 5px;margin-left: 5px;');
            -->
          </script>
        </ItemTemplate>
      </asp:Repeater>
    </div>
    <div style="width: 30%; display: inline;">
      <asp:Repeater ID="repHAd128" runat="server">
        <ItemTemplate>
          <span id='divImages143_<%# Eval("Id") %>'></span>
          <script type="text/javascript">
                                                    <!--
  SetHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 143, 767, 150, '<%# Eval("ProfileImage") %>', 'margin-bottom: 20px;margin-right: 5px;margin-left: 5px;');
            -->
          </script>
        </ItemTemplate>
      </asp:Repeater>
    </div>
  </div>
  <div class="Contentheading">

    <h1 class="tabsbaladi">أخبار رياضية</h1>
  </div>
  <div class="section_02_box_content">
    <table cellpadding="0" cellspacing="0" border="0">
      <tr>
        <asp:Repeater ID="repSport" runat="server">
          <ItemTemplate>
            <td align="center" valign="top" class="EventTitle" style="border-left: 1px dashed silver;">
              <h1 style="height: 50px; padding-right: 5px;"><a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>' id="ViewDetail"
                class="section_02_box_content_title">
                <%#DataBinder.Eval(Container.DataItem, "Name_Ar").ToString().Substring(0, Math.Min(80, DataBinder.Eval(Container.DataItem, "Name_Ar").ToString().Length))%>...
              </a>
              </h1>
              <img src='Admin/Uploads/Events/Profile/<%# DataBinder.Eval(Container.DataItem, "Id") %>/<%#  DataBinder.Eval(Container.DataItem, "ProfileImage") %>' width="255px" height="120px" style="border: 1px solid black; margin: 5px" />
            </td>
          </ItemTemplate>
        </asp:Repeater>
      </tr>
    </table>
  </div>
  <table cellpadding="0" cellspacing="0" width="99%" style="background-color: #fff;">
    <asp:Repeater ID="repSports" runat="server">
      <ItemTemplate>
        <tr>
          <td width="675px" class="home-event-title">
            <a href='EventDetail.aspx?id=<%# DataBinder.Eval(Container.DataItem, "Id") %>' target="_blank">
              <%#DataBinder.Eval(Container.DataItem, "Name_Ar")%>
            </a>
          </td>
          <td valign="top" align="left" class="home-event-date">
            <%#DataBinder.Eval(Container.DataItem, "DateAdded", "{0:d MMM, yyyy}")%>
          </td>
        </tr>
      </ItemTemplate>
    </asp:Repeater>
    <tr>
      <td colspan="2" style="text-align: left;">
        <a href="Events.aspx?id=21" style="color: black; text-align: left; padding-right: 50px; font-weight: bold; font-size: 16px;" target="_blank">المزيد من الاخبار</a>
      </td>
    </tr>
  </table>
  <div class="Contentheading">
    <div style="width: 50%; display: inline;">
      <asp:Repeater ID="repHAd129" runat="server">
        <ItemTemplate>
          <span id='divImages144_<%# Eval("Id") %>'></span>
          <script type="text/javascript">
                                                    <!--
  SetHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 144, 375, 120, '<%# Eval("ProfileImage") %>', 'margin-top: 10px;margin-right: 5px;margin-left: 5px;');
            -->
          </script>
        </ItemTemplate>
      </asp:Repeater>
    </div>
    <div style="width: 50%; display: inline;">
      <asp:Repeater ID="repHAd130" runat="server">
        <ItemTemplate>
          <span id='divImages145_<%# Eval("Id") %>'></span>
          <script type="text/javascript">
                                                    <!--
  SetHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 145, 375, 120, '<%# Eval("ProfileImage") %>', 'margin-top: 10px;margin-right: 5px;margin-left: 5px;');
            -->
          </script>
        </ItemTemplate>
      </asp:Repeater>
    </div>
    <div style="width: 30%; display: inline;">
      <asp:Repeater ID="repHAd131" runat="server">
        <ItemTemplate>
          <span id='divImages146_<%# Eval("Id") %>'></span>
          <script type="text/javascript">
                                                    <!--
  SetHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 146, 767, 150, '<%# Eval("ProfileImage") %>', 'margin-bottom: 20px;margin-right: 5px;margin-left: 5px;');
            -->
          </script>
        </ItemTemplate>
      </asp:Repeater>
    </div>

    <br />
  </div>
  <div class="Contentheading">
    <div style="width: 50%; display: inline;">
      <asp:Repeater ID="repHAd132" runat="server">
        <ItemTemplate>
          <span id='divImages147_<%# Eval("Id") %>'></span>
          <script type="text/javascript">
                                                    <!--
  SetHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 147, 375, 120, '<%# Eval("ProfileImage") %>', 'margin-top: 10px;margin-right: 5px;margin-left: 5px;');
            -->
          </script>
        </ItemTemplate>
      </asp:Repeater>
    </div>
    <div style="width: 50%; display: inline;">
      <asp:Repeater ID="repHAd133" runat="server">
        <ItemTemplate>
          <span id='divImages148_<%# Eval("Id") %>'></span>
          <script type="text/javascript">
                                                    <!--
  SetHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 148, 375, 120, '<%# Eval("ProfileImage") %>', 'margin-top: 10px;margin-right: 5px;margin-left: 5px;');
            -->
          </script>
        </ItemTemplate>
      </asp:Repeater>
    </div>
    <div style="width: 30%; display: inline;">
      <asp:Repeater ID="repHAd134" runat="server">
        <ItemTemplate>
          <span id='divImages149_<%# Eval("Id") %>'></span>
          <script type="text/javascript">
                                                    <!--
  SetHomeAd('<%# Eval("Id") %>', '<%# Eval("Images") %>', 149, 767, 150, '<%# Eval("ProfileImage") %>', 'margin-bottom: 20px;margin-right: 5px;margin-left: 5px;');
            -->
          </script>
        </ItemTemplate>
      </asp:Repeater>

    </div>
  </div>
</asp:Content>
