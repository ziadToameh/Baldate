<%@ Page Title="" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true"
    CodeFile="Gallery.aspx.cs" Inherits="Gallery" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <link href="style/jquery.lightbox-0.5.css" rel="stylesheet" type="text/css" />
    <script src="scripts/jquery.lightbox-0.5.js" type="text/javascript"></script>
    <script type="text/javascript">
        $(function () {
            $('#gallery a').lightBox();
        });
    </script>
    <div id="gallery">
    <h2>ألبوم الصور</h2>
        <ul>
            <asp:Repeater ID="repDocuments" runat="server">
                <ItemTemplate>
                    <li><a href="Admin/uploads/Gallery/<%# Container.DataItem %>" target="_blank">
                        <img src="Admin/uploads/Gallery/<%# Container.DataItem %>" alt='' style="padding: 10px;
                            border: 0;" width="280px" height="180px" /></a></li>
                </ItemTemplate>
            </asp:Repeater>
        </ul>
        <div class="cleaner">
        </div>
    </div>
    <br />
    <br />
</asp:Content>
