<%@ Page Title="" Language="C#" MasterPageFile="~/Admin/Admin.master" AutoEventWireup="true"
    CodeFile="EventImage.aspx.cs" Inherits="Admin_EventImage" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <link href="<%= ResolveUrl("~/CSS/uploadify.css") %>" rel="stylesheet" type="text/css" />
    <script src="<%= ResolveUrl("~/Scripts/jquery-1.4.2.js") %>" type="text/javascript"></script>
    <script src="<%= ResolveUrl("~/Scripts/jquery.uploadify.js") %>" type="text/javascript"></script>
    <script src="<%= ResolveUrl("~/Scripts/plupload/plupload.full.min.js") %>" type="text/javascript"></script>
    <script src="<%= ResolveUrl("~/Scripts/plupload/jquery.plupload.queue.min.js") %>"
        type="text/javascript"></script>
    <link href="<%= ResolveUrl("~/Style/plupload.queue.css") %>" rel="stylesheet" type="text/css" />
    <script type="text/javascript">

        function SetSource(id, name) {
            var source = 'Uploads/Events/' + '<%= id %>' + '/' + name;
            $('#' + id).attr('src', source);
        }
    </script>
    <script type="text/javascript">
        $(function () {
            $('#eventNav>a').css('color', 'blue');

           // if(<%= Cat %> != 6){
                $('#BTable').css('display', 'none');
                $('#DTable').css('display', 'none');
                $('#ATable').css('display', 'none');
           // }
        });

    </script>
    <style type="text/css">
        #divList
        {
            font-family: Century Gothic !important;
            font-size: 14px !important;
        }
        #divList a
        {
            font-family: Century Gothic !important;
            font-size: 14px !important;
            text-decoration: none;
            color: Blue;
        }
    </style>
    <div id="divList">
        <table width="90%">
            <tr>
                <td>
                    <h3 style="text-decoration: underline;">
                        <i>
                            <asp:Label ID="eventName" runat="server"></asp:Label></i></h3>
                    <asp:TextBox ID="TextBox1" runat="server" Visible="false"></asp:TextBox>
                </td>
                <td align="right">
                    <a href="EventsList.aspx?id=<%= Cat %>">
                        <img src="CSS/images/back.png" width="30px" height="30px" style="border: 0" />
                        Back to List</a>
                </td>
            </tr>
        </table>
        <table width="90%" cellpadding="0" cellspacing="0" id="tblEventImage">
            <tr>
                <td>
                    صورة الغلاف
                </td>
            </tr>
            <tr>
                <td align="center" id="tdProfile" runat="server">
                    <asp:Image ID="imgProfile" runat="server" Width="150px" Height="120px" />
                    <br />
                    <a href="EventImageDelete.aspx?eventId=<%= id %>&name=<%= ImgNameProfile %>&imgType=1&catId=<%= Cat %>&isprofile=1"
                        onclick="return confirm('Are you sure you want to delete?')">حذف</a>
                </td>
            </tr>
            <tr>
                <td>
                    <div style="padding: 10px 300px">
                    <asp:FileUpload ID="FileUpload5" runat="server" />
                    <i>
                        <asp:Label ID="lblMessageProfile" runat="server" Text="يمكنك إضافة صورة واحدة فقط"
                            Visible="false">
                        </asp:Label></i>
                    </div>
                    <hr />
                </td>
            </tr>
        </table>
        
            <table width="100%">
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
                            <asp:Repeater ID="Images" runat="server">
                                <ItemTemplate>
                                    <td>
                                        <img id='<%# Eval("Id") %>' src="" alt='<%# Eval("Name") %>' width="100px" height="100px" />
                                        <br />
                                        <a href="EventImageDelete.aspx?eventId=<%# Eval("EventId")%>&imageId=<%# Eval("Id")%>&catId=<%= Cat%>"
                                            onclick="return confirm('Are you sure you want to delete?')">Delete</a>
                                        <script type="text/javascript">
                                    <!--
    SetSource('<%# Eval("Id") %>', '<%# Eval("Name") %>');
                                            -->
                                        </script>
                                    </td>
                                    
                                    </tr><tr>
                                       
                                </ItemTemplate>
                            </asp:Repeater>
                        </tr>
                    </table>
                    <br />
                    <i>
                        <asp:Label ID="lblMessage" runat="server" Text="You exceeded the maximum number of allowed uploads"
                            Visible="false">
                        </asp:Label>
                    </i>
                    <div style="display: none">
                        <asp:TextBox ID="eventId" runat="server"></asp:TextBox>
                        <asp:TextBox ID="path" runat="server"></asp:TextBox>
                    </div>
                </td>
            </tr>
        </table>
    </div>
    <%--<script src="<%= ResolveUrl("~/Scripts/plupload/xdev.plupload.js") %>" type="text/javascript"></script>--%>
    <script type="text/javascript">
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
                    url: 'UploadHandlerEvents.ashx?eventId=' + $('#<%=eventId.ClientID %>').val(),
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
    </script>
    <script type="text/javascript">
        $(window).load(
    function () {
      
        $("#<%=FileUpload5.ClientID %>").fileUpload({
            'uploader': '../scripts/uploader.swf',
            'cancelImg': 'CSS/images/cancel.png',
            'buttonText': 'Browse Files',
            'script': 'UploadProfileEvent.ashx?eventId=' + $('#<%=eventId.ClientID %>').val(),
            'folder': 'uploads',
            'fileDesc': 'Image Files',
            'fileExt': '*.jpg;*.jpeg;*.gif;*.png',
            'multi': false,
            'auto': true,
            'sizeLimit': 100000000
        });
    }
);
    </script>
</asp:Content>
