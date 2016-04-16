<%@ Page Title="" Language="C#" MasterPageFile="~/Admin/Admin.master" AutoEventWireup="true" CodeFile="SliderImages.aspx.cs" Inherits="Admin_SliderImages" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <link href="<%= ResolveUrl("~/CSS/uploadify.css") %>" rel="stylesheet" type="text/css" />
    <script src="<%= ResolveUrl("~/Scripts/jquery-1.4.2.js") %>" type="text/javascript"></script>
    <script src="<%= ResolveUrl("~/Scripts/jquery.uploadify.js") %>" type="text/javascript"></script>
    <script type="text/javascript">

        function SetDocSource(name) {

            var source = 'Uploads/Slider/' + name;
            $('#doc_' + name).attr('href', source);
        }
    </script>
    <script type="text/javascript">
        $(function () {
            $('#sliderNav>a').css('color', 'blue');
        });

    </script>
    <i> In order to have better appearance, Choose Images with <strong>WIDTH</strong> not lessa than <strong>450px</strong>..</i>
    <p>&nbsp;</p>
    <table width="90%">
        <tr>
            <asp:Repeater ID="repDocuments" runat="server">
                <ItemTemplate>
                    <td>
                            <img src="Uploads/Slider/<%# Container.DataItem %>" alt='<%# Container.DataItem %>' width="100px"
                                height="100px" />
                            <br />
                        <%# Container.DataItem %>
                        <br />
                        <a href="SliderImageDelete.aspx?name=<%# Container.DataItem%>" onclick="return confirm('Are you sure you want to delete?')">
                            Delete</a>
                        <script type="text/javascript">
                                    <!--
                            //SetDocSource("<%# Container.DataItem %>");
                                    -->
                        </script>
                    </td>
                </ItemTemplate>
            </asp:Repeater>
        </tr>
    </table>
    <br />
    <i>
        <asp:Label ID="lblMessage" runat="server" Text="You can add up to 5 images" Visible="false">
        </asp:Label></i>
    <div style="padding: 40px">
        <asp:FileUpload ID="FileUpload1" runat="server" />
    </div>
    <script type="text/javascript">
        $(window).load(
    function () {
        $("#<%=FileUpload1.ClientID %>").fileUpload({
            'uploader': '../scripts/uploader.swf',
            'cancelImg': 'CSS/images/cancel.png',
            'buttonText': 'Upload',
            'script': 'UploadSlider.ashx',
            'folder': 'uploads',
            'fileDesc': 'All Files',
            'fileExt': '*.doc;*.docx;*.ppt;*.pptx;*.xls;*.xlsx;*.pdf;*.jpg;*.jpeg;*.gif;*.png;*.zip;*.rar;*.txt',
            'multi': true,
            'auto': true,
            'sizeLimit': 1000000
        });
    }
);
    </script>
</asp:Content>

