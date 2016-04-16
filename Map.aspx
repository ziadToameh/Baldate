<%@ Page Title="" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true"
    CodeFile="Map.aspx.cs" Inherits="Map" Culture="auto" meta:resourcekey="PageResource1"
    UICulture="auto" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <div class="introDiv">
        <h3>
            <asp:Label ID="map" runat="server" Text="بلدتي على الخريطة"></asp:Label>
        </h3>
        <br />
    </div>
    <iframe width="640" height="480" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=+&amp;q=%D8%A7%D9%84%D8%B9%D8%A8%D8%A7%D8%B3%D9%8A%D8%A9+%D9%84%D8%A8%D9%86%D8%A7%D9%86&amp;ie=UTF8&amp;hq=&amp;hnear=Aabbassiye,+Sour,+South,+Lebanon&amp;t=h&amp;ll=33.298538,35.283108&amp;spn=0.034435,0.054932&amp;z=14&amp;iwloc=A&amp;output=embed"></iframe><br /><small><a href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=+&amp;q=%D8%A7%D9%84%D8%B9%D8%A8%D8%A7%D8%B3%D9%8A%D8%A9+%D9%84%D8%A8%D9%86%D8%A7%D9%86&amp;ie=UTF8&amp;hq=&amp;hnear=Aabbassiye,+Sour,+South,+Lebanon&amp;t=h&amp;ll=33.298538,35.283108&amp;spn=0.034435,0.054932&amp;z=14&amp;iwloc=A" style="color:#0000FF;text-align:left">View Larger Map</a></small>
        
</asp:Content>
