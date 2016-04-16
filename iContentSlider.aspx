<%@ Page Language="C#" AutoEventWireup="true" CodeFile="iContentSlider.aspx.cs" Inherits="iContentSlider" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<link rel="stylesheet" type="text/css" href="style/Slider/style.css" />
<script language="javascript" type="text/javascript" src="style/Slider/mootools.svn0.js"></script>
<script language="javascript" type="text/javascript" src="style/Slider/lofslidernews.mt11.js"></script>
</head>
<body>
<form id="form1" runat="server">
<div id="container">
<!------------------------------------- THE CONTENT ------------------------------------------------->
<div id="lofslidecontent45" class="lof-slidecontent">
<div class="preload"><div></div></div>
<!-- MAIN CONTENT --> 
 <div class="lof-main-wapper"><asp:Repeater ID="SliderList" runat="server">
<ItemTemplate>
 <div class="lof-main-item">
                         <img src="Admin/Uploads/Events/Profile/<%# Eval("Id") %>/<%# Eval("ProfileImage") %>" alt="<%# Eval("Name_Ar") %>"
                                width="300" height="300" />         
                 <div class="lof-main-item-desc">
                <h3><a target="_parent" title="" href="EventDetail.aspx?id=<%# Eval("Id") %>"><%# Eval("Name_Ar") %></a></h3>
                <p><%# Eval("Brief") %></p>
             </div>
        </div> 
                </ItemTemplate>
            </asp:Repeater> 	
  </div>
  <!-- END MAIN CONTENT --> 
    <!-- NAVIGATOR -->
  <div class="lof-navigator-outer">
  		<ul class="lof-navigator">
              <asp:Repeater ID="repThumbs" runat="server">
                <ItemTemplate>
                     <li>
            	<div>
                	<img src="Admin/Uploads/Events/Profile/<%# Eval("Id") %>/<%# Eval("ProfileImage") %>" alt="<%# Eval("Name_Ar") %>"
                                width="140" height="70" /> 
                	<h3> <%# Eval("Name_Ar") %> </h3>
                  	
                </div>    
            </li>
                   
                </ItemTemplate>
            </asp:Repeater> 		
        </ul>
  </div>
 </div> 
<script type="text/javascript">
    var _lofmain = $('lofslidecontent45');
    var _lofscmain = _lofmain.getElement('.lof-main-wapper');
    var _lofnavigator = _lofmain.getElement('.lof-navigator-outer .lof-navigator');
    var object = new LofFlashContent(_lofscmain,
									  _lofnavigator,
									  _lofmain.getElement('.lof-navigator-outer'),
									  {
									      fxObject: { transition: Fx.Transitions.Quad.easeInOut, duration: 800 },
									      interval: 3000,
									      direction: 'opacity'
									  });
    object.start(true, _lofmain.getElement('.preload'));
</script>
    </div>
    </form>
</body>
</html>
