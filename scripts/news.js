/***********************************
*   http://javascripts.vbarsan.com/
*   This notice may not be removed 
***********************************/

//-- Begin Scroller's Parameters and message -->
//scroller width: change to your own;
var wwidth="300";

//scroller height: change to your own;
var wheight="20";

//background color: change to your own; 
var wbcolor="#ccffcc";

//scroller's speed: change to your own;
var sspeed="2";
var restart=sspeed;
var rspeed=sspeed;

//text: change to your own

wwholemessage='<nobr class=tab><b>News Scroller Horizontal v2.2 => '+
'<a class=tabb href="http://javascripts.vbarsan.com">'+
'Vertical Scroller JavaScript 7.0 + Horizontal Scroller JavaScript 7.0 + Typewriter Scroller JavaScript 5.0</a> <= News Scroller Horizontal v2.2</b></nobr>';

//-- end Parameters and message-->

//-- begin: Scroller's Algorithm -->
var sizeupw=0;var operbr=navigator.userAgent.toLowerCase().indexOf('opera');
if(operbr==-1&&navigator.product&&navigator.product=="Gecko"){var agt = navigator.userAgent.toLowerCase();
var rvStart = agt.indexOf('rv:');var rvEnd = agt.indexOf(')', rvStart);var check15 = agt.substring(rvStart+3, rvEnd);
if(parseFloat(check15)>=1.8) operbr=0;}if (navigator.appVersion.indexOf("Mac")!=-1)operbr=0;
function goup(){if(sspeed!=rspeed*8){sspeed=sspeed*2;restart=sspeed;}}
function godown(){if(sspeed>rspeed){sspeed=sspeed/2;restart=sspeed;}}
function startw(){if(document.getElementById)ns6marqueew(document.getElementById('wslider'));
else if(document.all) iemarqueew(wslider);
else if(document.layers)ns4marqueew(document.wslider1.document.wslider2);}
function iemarqueew(whichdiv){iedivw=eval(whichdiv);iedivw.style.pixelLeft=wwidth+"px";iedivw.innerHTML='<nobr>'+wwholemessage+'</nobr>';sizeupw=iedivw.offsetWidth;ieslidew();}
function ieslidew(){if(iedivw.style.pixelLeft>=sizeupw*(-1)){iedivw.style.pixelLeft-=sspeed+"px";setTimeout("ieslidew()",100);}
else{iedivw.style.pixelLeft=wwidth+"px";ieslidew();}}function ns4marqueew(whichlayer){ns4layerw=eval(whichlayer);ns4layerw.left=wwidth;ns4layerw.document.write('<nobr>'+wwholemessage+'</nobr>');ns4layerw.document.close();sizeupw=ns4layerw.document.width;ns4slidew();}
function ns4slidew(){if(ns4layerw.left>=sizeupw*(-1)){ns4layerw.left-=sspeed;setTimeout("ns4slidew()",100);}
else{ns4layerw.left=wwidth;ns4slidew();}}
function ns6marqueew(whichdiv){ns6divw=eval(whichdiv);
ns6divw.style.left=wwidth+"px";
ns6divw.innerHTML='<nobr>'+wwholemessage+'</nobr>';
sizeupw=ns6divw.offsetWidth;
if(operbr!=-1){document.getElementById('operaslider').innerHTML='<nobr>'+wwholemessage+'</nobr>';sizeupw=document.getElementById('operaslider').offsetWidth;}ns6slidew();}function ns6slidew(){if(parseInt(ns6divw.style.left)>=sizeupw*(-1)){ns6divw.style.left=parseInt(ns6divw.style.left)-sspeed+"px";setTimeout("ns6slidew()",100);}
else{ns6divw.style.left=wwidth+"px";ns6slidew();}}
//-- end Algorithm -->

