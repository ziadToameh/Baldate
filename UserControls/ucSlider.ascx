<%@ Control Language="C#" AutoEventWireup="true" CodeFile="ucSlider.ascx.cs" Inherits="UserControls_Slider" %>
<div id="slider1">
    <div id="slider">
        <div id="mover">
            <asp:Repeater ID="SliderList" runat="server">
                <ItemTemplate>
                    <% if (counter == 0)
                       {
                    %>
                    <div id="slide-1" class="slide">
                        <%
                            }
                       else
                       {
                        %>
                        <div class="slide">
                            <%
                                }%>
                            <img src="Admin/Uploads/SliderDynamic/<%# Eval("Id") %>/<%# Eval("Name") %>" alt="<%# Eval("Name") %>"
                                width="340px" height="180px" />
                            <%--<h1>
                                <%# Eval("Description") %></h1>--%>
                            <% counter++;%>
                        </div>
                </ItemTemplate>
            </asp:Repeater>
        </div>
    </div>
</div>
