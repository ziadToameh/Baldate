<%@ Page Title="" Language="C#" MasterPageFile="~/Admin/Admin.master" AutoEventWireup="true"
    CodeFile="GalleryImages.aspx.cs" Inherits="Admin_GalleryImages" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <script src="<%= ResolveUrl("~/Scripts/jsapi.js") %>" type="text/javascript"></script>
    <script src="<%= ResolveUrl("~/Scripts/jquery-1.4.2.js") %>" type="text/javascript"></script>
    <script src="<%= ResolveUrl("~/Scripts/plupload/plupload.full.min.js") %>" type="text/javascript"></script>
    <script src="<%= ResolveUrl("~/Scripts/plupload/jquery.plupload.queue.min.js") %>"
        type="text/javascript"></script>
    <link href="<%= ResolveUrl("~/Style/plupload.queue.css") %>" rel="stylesheet" type="text/css" />
    <link href="<%= ResolveUrl("~/CSS/uploadify.css") %>" rel="stylesheet" type="text/css" />
    <script src="<%= ResolveUrl("~/Scripts/jquery.uploadify.js") %>" type="text/javascript"></script>
    <script type="text/javascript">

        function SetDocSource(name) {

            var source = 'Uploads/Gallery/' + name;
            $('#doc_' + name).attr('href', source);
        }
    </script>
    <script type="text/javascript">
        $(function () {
            $('#galleryNav>a').css('color', 'blue');
        });

    </script>
    <h2>
        Home Images</h2>
   
    <div>
        <table>
            <tr>
                <th>
                    Logo
                </th>
            </tr>
            <tr>
                <td align="right" id="tdHome3" runat="server">
                    <asp:Image ID="imgHome3" runat="server" Width="180px" Height="150px" />
                    <br />
                    <a href="ImageHomeDelete.aspx?name=<%= ImgName3 %>&type=1" onclick="return confirm('Are you sure you want to delete?')">
                        حذف</a>
                    <br />
                    <i>
                        <asp:Label ID="lblHome3" runat="server" Text="يمكنك إضافة صورة واحدة فقط" Visible="false">
                        </asp:Label></i>
                </td>
            </tr>
            <tr>
                <td method="post" action="photoupload.asp" name="submit" enctype="multipart/form-data">
                   <i>
                        <asp:Label ID="lblChoose" runat="server" Text="Choose A File:" Visible="false">
                        </asp:Label></i> 
                    <input type="file" id="filefield" runat="server"><br>
                    <br>
                </td>
            </tr>
            <%--<tr>  
            <th> 
    <asp:Label ID="Label2" Text="Image" runat="server"></asp:Label> 
              
    <asp:Textbox ID="textbox2" runat="server"></asp:Textbox>
    </th>
    </tr>
    <td>
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ErrorMessage="Required!"
                        ControlToValidate="textbox2"></asp:RequiredFieldValidator>
                </td>
    
            --%>
            <tr>
                <td align="right">
                    <asp:Button ID="btnSave" runat="server" Text="Save" OnClick="BtnSaveClick"></asp:Button>
                    <asp:Button ID="btnCancel" runat="server" CausesValidation="false" Text="cancel"
                        OnClick="BtnCancelClick"></asp:Button>
                </td>
            </tr>
        </table>
    </div>
   <%-- <table width="100%">
    <tr>
    <td colspan="2"><h2>Gallery Images</h2></td>
    </tr>
        <tr>
            <td valign="top" id="tdUploader" runat="server">
                <!-- NEW Uploader -->
                <asp:ScriptManager ID="ScriptManager1" runat="server" EnablePageMethods="true">
                </asp:ScriptManager>
                <div id="uploader" style="width: 525px;">
                    <p>
                        You browser doesn't have Flash, Silverlight, Gears, BrowserPlus or HTML5 support.</p>
                </div>
                <br />
                <div style="width: 140px; margin-right: 290px; margin-left: 100px; background-color: #000;
                    padding: 7px 10px 7px 40px;">
                    <a href="#" onclick="SubmitItem(this)" style="color: #fff; font-weight: bold;">Upload
                        Item(s)</a>
                </div>
                <!-- END Uploader -->
            </td>
            <td valign="top" id="tdImages">
                <table width="100%" cellpadding="3" cellspacing="3">
                    <tr>
                        <asp:Repeater ID="repDocuments" runat="server">
                            <ItemTemplate>
                                <td>
                                    <img src="Uploads/Gallery/<%# Container.DataItem %>" alt='<%# Container.DataItem %>'
                                        width="100px" height="100px" title="<%# Container.DataItem %>" />
                                    <br />
                                    <a href="GalleryImagesDelete.aspx?name=<%# Container.DataItem%>" onclick="return confirm('Are you sure you want to delete?')">
                                        Delete</a>
                                    <script type="text/javascript">
                                    <!--
                                        //SetDocSource("<%# Container.DataItem %>");
                                    -->
                                    </script>
                                </td>
                                <%
                                    counter++;
                                    if (counter % 4 == 0)
                                    {
                                %>
                                </tr><tr>
                                    <% } %>
                            </ItemTemplate>
                        </asp:Repeater>
                    </tr>
                </table>
                <br />
                <i>
                    <asp:Label ID="lblMessage" runat="server" Text="You can add up to 5 images" Visible="false">
                    </asp:Label></i>
            </td>
        </tr>
    </table>--%>
   <%-- <script type="text/javascript">
        var IDofObject = "";
        var IDOfObject2 = "";

        $(function () {
            GetIDs();
        });

        function GetIDs() {

            //alert("Inside GetIDs");

            PageMethods.GetIDs(OnGetIDSucceeded, OnFailed);
        }

        function OnGetIDSucceeded(result, userContext, methodName) {

            //alert("Inside OnGetIDSucceeded");

            if (result != "") {

                //alert("id: " + result);

                var ids = result.split('|');

                //alert("id 0: " + ids[0]);
                //alert("id 1: " + ids[1]);

                IDofObject = ids[0];
                IDOfObject2 = ids[1];

                $("#uploader").pluploadQueue({
                    // General settings
                    runtimes: 'flash,silverlight',
                    url: 'UploadHandlerGallery.ashx',
                    max_file_size: '10mb',
                    chunk_size: '1mb',
                    unique_names: true,
                    headers: { "IDofObject1": IDofObject, "IDofObject2": IDOfObject2 },

                    // Specify what files to browse for  
                    filters: [
               { title: "Files (.doc, .docx, .xls, .xlsx, .pdf, .txt ,.rtf, .jpg, .gif, .png, .zip)", extensions: "doc,docx,xls,xlsx,pdf,txt,rtf,jpg,gif,png,zip" }

            ],


                    // this path needs to be consistent with where the page using this script is
                    // Flash settings
                    flash_swf_url: '../Scripts/plupload/plupload.flash.swf',
                    // Silverlight settings
                    silverlight_xap_url: '../Scripts/plupload/plupload.silverlight.xap'
                });

                //hide the start upload button because we want to use our Submit Item button
                var uploader = $('#uploader').pluploadQueue();

                uploader.bind('Init', function (up, res) {

                    $('a.plupload_start').css('display', 'none');

                });

                //make sure that the start upload button is always disabled
                //because we want our own submit button to take action on the file uploads,
                //not the start button in plupload
                uploader.bind('QueueChanged', function (up, files) {
                    //$('a.plupload_start').addClass('plupload_disabled');
                    $('a.plupload_start').toggleClass('plupload_disabled', true);

                    //alert($('a.plupload_start').hasClass('plupload_disabled'));
                });


            }
            else {
                //do something
            }
        }


        function OnFailed(error, userContext, methodName) {
            if (error !== null) {
                alert("An error occurred: " + error.get_message());
            }
        }

        function SubmitItem(e) {

            //get a copy of the current uploader
            var uploader = $('#uploader').pluploadQueue();
            var obj = uploader.settings;

            //alert("Local js variable ID1: " + IDofObject);
            //alert("Local js variable ID2: " + IDOfObject2);

            //alert("Header Object1: " + obj.headers.IDofObject1);
            //alert("Header Object2: " + obj.headers.IDofObject2);

            // Validate number of uploaded files
            if (uploader.total.uploaded == 0) {
                // Files in queue upload them first
                if (uploader.files.length > 0) {
                    // When all files are uploaded submit form
                    uploader.bind('UploadProgress', function () {
                        if (uploader.total.uploaded == uploader.files.length)
                            $('form1').submit();
                    });

                    //now go insert the files into the DB
                    uploader.bind('UploadComplete', function (up, f) {

                        var obj = up.settings;

                        //alert("Upload Complete.");

                        for (i = 0; i < f.length; i++) {

                            //alert("Name: " + f[i].name);
                            //alert("ID: " + f[i].id);

                            InsertFileRecord(obj.headers.IDofObject1, obj.headers.IDofObject2, f[i].id, f[i].name);
                        }

                        alert("File(s) Uploaded"); //You may not want this. I just left it here so you can see how it interacts with everything else.
                        //setInterval(function () {
                        //$("#tdImages").load(location.href + " #tdImages>*", "");}, 1000);

                        location.reload();
                    });

                    uploader.start();
                }
                else {

                    alert("No files to upload"); //take out or do whatever you would like here because there were zero files
                }
            }

        }

        function InsertFileRecord(idOfObject1, idOfObject2, fileID, fileName) {

            PageMethods.InsertFileRecord(idOfObject1, idOfObject2, fileID, fileName, OnSucceedFileRecord, OnFailed);
        }

        function OnSucceedFileRecord(result, userContext, methodName) {

            //TODO: whatever is needed for your solution
        }
    </script>--%>
    <%-- <script type="text/javascript">
        $(window).load(

    function () {
        $("#<%=FileUpload1.ClientID %>").fileUpload({
            'uploader': '../scripts/uploader.swf',
            'cancelImg': 'CSS/images/cancel.png',
            'buttonText': 'Browse Files',
            'script': 'UploadHome.ashx?id=1',
            'folder': 'uploads',
            'fileDesc': 'Image Files',
            'fileExt': '*.jpg;*.jpeg;*.gif;*.png',
            'multi': false,
            'auto': true,
            'sizeLimit': 100000000
        });
        
    </script>--%>
</asp:Content>
