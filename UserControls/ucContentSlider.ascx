<%@ Control Language="C#" AutoEventWireup="true" CodeFile="ucContentSlider.ascx.cs" Inherits="UserControls_ucContentSlider" %>
<link rel="stylesheet" type="text/css" href="style/Slider/layout.css" />
<link rel="stylesheet" type="text/css" href="style/Slider/style.css" />
<script language="javascript" type="text/javascript" src="style/Slider/mootools.svn.js"></script>
<script language="javascript" type="text/javascript" src="style/Slider/lofslidernews.mt11.js"></script>
    

<!------------------------------------- THE CONTENT ------------------------------------------------->
<div id="lofslidecontent45" class="lof-slidecontent" >
<div class="preload"><div></div></div>
 <!-- MAIN CONTENT --> 
  <div class="lof-main-wapper">
  		<div class="lof-main-item">
        		<img src="Slider/images/791902news3.jpg" title="Newsflash 2" height="300" width="900">           
                 <div class="lof-main-item-desc">
                <h3><a target="_parent" title="Newsflash 2" href="#">Newsflash 2</a></h3>

                <p>The one thing about a Web site, it always changes! Joomla! makes it easy to add Articles, content,...</p>
             </div>
        </div> 
       <div class="lof-main-item">
        	<img src="Slider/images/435576news10.jpg" title="Newsflash 1" height="300" width="900">            <div class="lof-main-item-desc">
                <h3><a target="_parent" title="Newsflash 1" href="#">Newsflash 1</a></h3>
                <p>Joomla! makes it easy to launch a Web site of any kind. Whether you want a brochure site or you are...</p>

             </div>
        </div> 
       <div class="lof-main-item">
        	<img src="images/641906img1.jpg" title="Newsflash 3" height="300" width="900">            <div class="lof-main-item-desc">
                <h3><a target="_parent" title="Newsflash 3" href="#">Newsflash 3</a></h3>
                <p>With a library of thousands of free Extensions, you can add what you need as your site grows. Don't...</p>
             </div>
        </div> 
        <div class="lof-main-item">

        	<img src="images/416719news7.jpg" title="Newsflash 5" height="300" width="900">            <div class="lof-main-item-desc">
                <h3><a target="_parent" title="Newsflash 5" href="#">Newsflash 5</a></h3>
                <p>Joomla! 1.5 - 'Experience the Freedom'!. It has never been easier to create your own dynamic Web...</p>
             </div>
        </div> 
        
        <div class="lof-main-item">

        	<img src="images/416719news7.jpg" title="Newsflash 5" height="300" width="900">            <div class="lof-main-item-desc">
                <h3><a target="_parent" title="Newsflash 5" href="#">Newsflash 5</a></h3>
                <p>Joomla! 1.5 - 'Experience the Freedom'!. It has never been easier to create your own dynamic Web...</p>
             </div>
        </div> 
        <div class="lof-main-item">

        	<img src="images/416719news7.jpg" title="Newsflash 5" height="300" width="900">            <div class="lof-main-item-desc">
                <h3><a target="_parent" title="Newsflash 5" href="#">Newsflash 5</a></h3>
                <p>Joomla! 1.5 - 'Experience the Freedom'!. It has never been easier to create your own dynamic Web...</p>
             </div>
        </div> 
        	
  </div>
  <!-- END MAIN CONTENT --> 
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
    <!-- NAVIGATOR -->

  <div class="lof-navigator-outer">
  		<ul class="lof-navigator">
            <li>
            	<div>
                	<img src="images/lofthumbs/791902news3.jpg" />
                	<h3> NewsFlash 1 </h3>
                  	<span>20.01.2010</span> - In id, mauris viverra asperiores, bibendum in id. Eu molestie. Ac sit eu...
                </div>    
            </li>
             <li>
             	<div>
                	<img src="images/lofthumbs/435576news10.jpg" />
                 	<h3> NewsFlash 2 </h3>
                  	<span>20.01.2010</span> -In id, mauris viverra asperiores, bibendum in id. Eu molestie. Ac sit eu. ..
                </div>    
            </li>

            <li>
            	<div>
                    <img src="images/lofthumbs/641906img1.jpg" />
                    <h3> NewsFlash 3 </h3>
                	<span>20.01.2010</span> - In id, mauris viverra asperiores, bibendum in id. Eu molestie. Ac sit eu. ..
                </div>     
            </li>
            
           <li>
           		<div>
                    <img src="images/lofthumbs/416719news7.jpg" />
                    <h3> NewsFlash 4</h3>
                    <span>20.01.2010</span> - In id, mauris viverra asperiores, bibendum in id. Eu molestie. Ac sit eu. ..
                </div>
            </li>    
            <li>
           		 <div>
                 	<img src="images/lofthumbs/641906img1.jpg" />
                 	<h3> NewsFlash 5</h3>
                 	<span>20.01.2010</span> -In id, mauris viverra asperiores, bibendum in id. Eu molestie. Ac sit eu. ..
                 </div>   
            </li>
           <li>
           		<div>
                    <img src="images/lofthumbs/416719news7.jpg" />
                    <h3> NewsFlash 6</h3>
               		<span>20.01.2010</span> - In id, mauris viverra asperiores, bibendum in id. Eu molestie. Ac sit eu. ..
                </div>
            </li>     		
        </ul>
  </div>
 </div> 

<!------------------------------------- END OF THE CONTENT ------------------------------------------------->