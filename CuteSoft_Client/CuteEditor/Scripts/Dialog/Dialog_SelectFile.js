var OxOa7ce=["hiddenDirectory","hiddenFile","hiddenAlert","hiddenAction","hiddenActionData","This function is disabled in the demo mode.","disabled","[[Disabled]]","[[SpecifyNewFolderName]]","","value","createdir","[[CopyMoveto]]","/","move","copy","[[AreyouSureDelete]]","parentNode","isdir","true","text",".","[[SpecifyNewFileName]]","rename","True","False",":","path","FoldersAndFiles","TR","length","onmouseover","this.style.backgroundColor=\x27#eeeeee\x27;","onmouseout","this.style.backgroundColor=\x27\x27;","nodeName","INPUT","changedir","url","TargetUrl","htmlcode","onload","getElementsByTagName","table","sortable"," ","className","id","rows","cells","innerHTML","\x3Ca href=\x22#\x22 onclick=\x22ts_resortTable(this);return false;\x22\x3E","\x3Cspan class=\x22sortarrow\x22\x3E\x26nbsp;\x3C/span\x3E\x3C/a\x3E","string","undefined","innerText","childNodes","nodeValue","nodeType","span","cellIndex","TABLE","sortdir","down","\x26uarr;","up","\x26darr;","sortbottom","tBodies","sortarrow","\x26nbsp;","20","19","browse_Frame","Image1","FolderDescription","CreateDir","Copy","Move","Delete","DoRefresh","divpreview","Button1","Button2","btn_zoom_in","btn_zoom_out","btn_Actualsize","editor","window","document","documentElement","documentMode","clientHeight","scrollHeight","width","style","255px","appName","Microsoft Internet Explorer","userAgent","MSIE ([0-9]{1,}[.0-9]{0,})",".jpeg",".jpg",".gif",".png","\x3CIMG src=\x27","\x27\x3E",".bmp","\x26nbsp;\x3Cembed src=\x22","\x22 quality=\x22high\x22 width=\x22200\x22 height=\x22200\x22 type=\x22application/x-shockwave-flash\x22 pluginspage=\x22http://www.macromedia.com/go/getflashplayer\x22\x3E\x3C/embed\x3E\x0A",".swf",".avi",".mpg",".mp3","\x26nbsp;\x3Cembed name=\x22MediaPlayer1\x22 src=\x22","\x22 autostart=-1 showcontrols=-1  type=\x22application/x-mplayer2\x22 width=\x22240\x22 height=\x22200\x22 pluginspage=\x22http://www.microsoft.com/Windows/MediaPlayer\x22 \x3E\x3C/embed\x3E\x0A",".mpeg","inp","zoom","display","none","wrapupPrompt","iepromptfield","body","div","IEPromptBox","promptBlackout","border","1px solid #b0bec7","backgroundColor","#f0f0f0","position","absolute","330px","zIndex","100","\x3Cdiv style=\x22width: 100%; padding-top:3px;background-color: #DCE7EB; font-family: verdana; font-size: 10pt; font-weight: bold; height: 22px; text-align:center; background:url(Load.ashx?type=image\x26file=formbg2.gif) repeat-x left top;\x22\x3E[[InputRequired]]\x3C/div\x3E","\x3Cdiv style=\x22padding: 10px\x22\x3E","\x3CBR\x3E\x3CBR\x3E","\x3Cform action=\x22\x22 onsubmit=\x22return wrapupPrompt()\x22\x3E","\x3Cinput id=\x22iepromptfield\x22 name=\x22iepromptdata\x22 type=text size=46 value=\x22","\x22\x3E","\x3Cbr\x3E\x3Cbr\x3E\x3Ccenter\x3E","\x3Cinput type=\x22submit\x22 value=\x22\x26nbsp;\x26nbsp;\x26nbsp;[[OK]]\x26nbsp;\x26nbsp;\x26nbsp;\x22\x3E","\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp;","\x3Cinput type=\x22button\x22 onclick=\x22wrapupPrompt(true)\x22 value=\x22\x26nbsp;[[Cancel]]\x26nbsp;\x22\x3E","\x3C/form\x3E\x3C/div\x3E","top","100px","left","offsetWidth","px","block","CuteEditor_ColorPicker_ButtonOver(this)"];var hiddenDirectory=Window_GetElement(window,OxOa7ce[0],true);var hiddenFile=Window_GetElement(window,OxOa7ce[1],true);var hiddenAlert=Window_GetElement(window,OxOa7ce[2],true);var hiddenAction=Window_GetElement(window,OxOa7ce[3],true);var hiddenActionData=Window_GetElement(window,OxOa7ce[4],true);function CreateDir_click(){if(isDemoMode){alert(OxOa7ce[5]);return false;} ;if(Event_GetSrcElement()[OxOa7ce[6]]){alert(OxOa7ce[7]);return false;} ;if(Browser_IsIE7()){IEprompt(Ox21e,OxOa7ce[8],OxOa7ce[9]);function Ox21e(Ox37f){if(Ox37f){hiddenActionData[OxOa7ce[10]]=Ox37f;hiddenAction[OxOa7ce[10]]=OxOa7ce[11];window.PostBackAction();return true;} else {return false;} ;} ;return Event_CancelEvent();} else {var Ox37f=prompt(OxOa7ce[8],OxOa7ce[9]);if(Ox37f){hiddenActionData[OxOa7ce[10]]=Ox37f;return true;} else {return false;} ;return false;} ;} ;function Move_click(){if(isDemoMode){alert(OxOa7ce[5]);return false;} ;if(Event_GetSrcElement()[OxOa7ce[6]]){alert(OxOa7ce[7]);return false;} ;if(Browser_IsIE7()){IEprompt(Ox21e,OxOa7ce[12],OxOa7ce[13]);function Ox21e(Ox37f){if(Ox37f){hiddenActionData[OxOa7ce[10]]=Ox37f;hiddenAction[OxOa7ce[10]]=OxOa7ce[14];window.PostBackAction();return true;} else {return false;} ;} ;return Event_CancelEvent();} else {var Ox37f=prompt(OxOa7ce[12],OxOa7ce[13]);if(Ox37f){hiddenActionData[OxOa7ce[10]]=Ox37f;return true;} else {return false;} ;return false;} ;} ;function Copy_click(){if(isDemoMode){alert(OxOa7ce[5]);return false;} ;if(Event_GetSrcElement()[OxOa7ce[6]]){alert(OxOa7ce[7]);return false;} ;if(Browser_IsIE7()){IEprompt(Ox21e,OxOa7ce[12],OxOa7ce[13]);function Ox21e(Ox37f){if(Ox37f){hiddenActionData[OxOa7ce[10]]=Ox37f;hiddenAction[OxOa7ce[10]]=OxOa7ce[15];window.PostBackAction();return true;} else {return false;} ;} ;return Event_CancelEvent();} else {var Ox37f=prompt(OxOa7ce[12],OxOa7ce[13]);if(Ox37f){hiddenActionData[OxOa7ce[10]]=Ox37f;return true;} else {return false;} ;return false;} ;} ;function Delete_click(){if(isDemoMode){alert(OxOa7ce[5]);return false;} ;if(Event_GetSrcElement()[OxOa7ce[6]]){alert(OxOa7ce[7]);return false;} ;return confirm(OxOa7ce[16]);} ;function EditImg_click(img){if(isDemoMode){alert(OxOa7ce[5]);return false;} ;if(img[OxOa7ce[6]]){alert(OxOa7ce[7]);return false;} ;var Ox384=img[OxOa7ce[17]][OxOa7ce[17]];var Ox386;if(Browser_IsOpera()){Ox386=Ox384.getAttribute(OxOa7ce[18])==OxOa7ce[19];} else {Ox386=Ox384[OxOa7ce[18]];} ;var Ox385=Ox384[OxOa7ce[20]];var name;if(Ox386){name=prompt(OxOa7ce[8],Ox385);} else {var i=Ox385.lastIndexOf(OxOa7ce[21]);var Oxc9=Ox385.substr(i);var Ox12=Ox385.substr(0,Ox385.lastIndexOf(OxOa7ce[21]));name=prompt(OxOa7ce[22],Ox12);if(name){name=name+Oxc9;} ;} ;if(name&&name!=Ox384[OxOa7ce[20]]){hiddenAction[OxOa7ce[10]]=OxOa7ce[23];hiddenActionData[OxOa7ce[10]]=(Ox386?OxOa7ce[24]:OxOa7ce[25])+OxOa7ce[26]+Ox384[OxOa7ce[27]]+OxOa7ce[26]+name;window.PostBackAction();} ;return Event_CancelEvent();} ;setMouseOver();function setMouseOver(){var FoldersAndFiles=Window_GetElement(window,OxOa7ce[28],true);var Ox389=FoldersAndFiles.getElementsByTagName(OxOa7ce[29]);for(var i=1;i<Ox389[OxOa7ce[30]];i++){var Ox384=Ox389[i];Ox384[OxOa7ce[31]]= new Function(OxOa7ce[9],OxOa7ce[32]);Ox384[OxOa7ce[33]]= new Function(OxOa7ce[9],OxOa7ce[34]);} ;} ;function row_click(Ox384){var Ox386;if(Browser_IsOpera()){Ox386=Ox384.getAttribute(OxOa7ce[18])==OxOa7ce[19];} else {Ox386=Ox384[OxOa7ce[18]];} ;if(Ox386){if(Event_GetSrcElement()[OxOa7ce[35]]==OxOa7ce[36]){return ;} ;hiddenAction[OxOa7ce[10]]=OxOa7ce[37];hiddenActionData[OxOa7ce[10]]=Ox384.getAttribute(OxOa7ce[27]);window.PostBackAction();} else {var Ox108=Ox384.getAttribute(OxOa7ce[27]);hiddenFile[OxOa7ce[10]]=Ox108;var Ox286=Ox384.getAttribute(OxOa7ce[38]);Window_GetElement(window,OxOa7ce[39],true)[OxOa7ce[10]]=Ox286;var htmlcode=Ox384.getAttribute(OxOa7ce[40]);if(htmlcode!=OxOa7ce[9]&&htmlcode!=null){do_preview(htmlcode);} else {try{Actualsize();} catch(x){do_preview();} ;} ;} ;} ;function do_preview(){} ;function reset_hiddens(){if(hiddenAlert[OxOa7ce[10]]){alert(hiddenAlert.value);} ;hiddenAlert[OxOa7ce[10]]=OxOa7ce[9];hiddenAction[OxOa7ce[10]]=OxOa7ce[9];hiddenActionData[OxOa7ce[10]]=OxOa7ce[9];} ;Event_Attach(window,OxOa7ce[41],reset_hiddens);Event_Attach(window,OxOa7ce[41],sortables_init);var SORT_COLUMN_INDEX;function sortables_init(){if(!document[OxOa7ce[42]]){return ;} ;var Ox38e=document.getElementsByTagName(OxOa7ce[43]);for(var Ox38f=0;Ox38f<Ox38e[OxOa7ce[30]];Ox38f++){var Ox390=Ox38e[Ox38f];if(((OxOa7ce[45]+Ox390[OxOa7ce[46]]+OxOa7ce[45]).indexOf(OxOa7ce[44])!=-1)&&(Ox390[OxOa7ce[47]])){ts_makeSortable(Ox390);} ;} ;} ;function ts_makeSortable(Ox392){if(Ox392[OxOa7ce[48]]&&Ox392[OxOa7ce[48]][OxOa7ce[30]]>0){var Ox393=Ox392[OxOa7ce[48]][0];} ;if(!Ox393){return ;} ;for(var i=2;i<4;i++){var Ox394=Ox393[OxOa7ce[49]][i];var Ox281=ts_getInnerText(Ox394);Ox394[OxOa7ce[50]]=OxOa7ce[51]+Ox281+OxOa7ce[52];} ;} ;function ts_getInnerText(Ox29){if( typeof Ox29==OxOa7ce[53]){return Ox29;} ;if( typeof Ox29==OxOa7ce[54]){return Ox29;} ;if(Ox29[OxOa7ce[55]]){return Ox29[OxOa7ce[55]];} ;var Ox24=OxOa7ce[9];var Ox340=Ox29[OxOa7ce[56]];var Ox11=Ox340[OxOa7ce[30]];for(var i=0;i<Ox11;i++){switch(Ox340[i][OxOa7ce[58]]){case 1:Ox24+=ts_getInnerText(Ox340[i]);break ;;case 3:Ox24+=Ox340[i][OxOa7ce[57]];break ;;} ;} ;return Ox24;} ;function ts_resortTable(Ox397){var Ox2a4;for(var Ox398=0;Ox398<Ox397[OxOa7ce[56]][OxOa7ce[30]];Ox398++){if(Ox397[OxOa7ce[56]][Ox398][OxOa7ce[35]]&&Ox397[OxOa7ce[56]][Ox398][OxOa7ce[35]].toLowerCase()==OxOa7ce[59]){Ox2a4=Ox397[OxOa7ce[56]][Ox398];} ;} ;var Ox399=ts_getInnerText(Ox2a4);var Ox1e3=Ox397[OxOa7ce[17]];var Ox39a=Ox1e3[OxOa7ce[60]];var Ox392=getParent(Ox1e3,OxOa7ce[61]);if(Ox392[OxOa7ce[48]][OxOa7ce[30]]<=1){return ;} ;var Ox39b=ts_getInnerText(Ox392[OxOa7ce[48]][1][OxOa7ce[49]][Ox39a]);var Ox39c=ts_sort_caseinsensitive;if(Ox39b.match(/^\d\d[\/-]\d\d[\/-]\d\d\d\d$/)){Ox39c=ts_sort_date;} ;if(Ox39b.match(/^\d\d[\/-]\d\d[\/-]\d\d$/)){Ox39c=ts_sort_date;} ;if(Ox39b.match(/^[?]/)){Ox39c=ts_sort_currency;} ;if(Ox39b.match(/^[\d\.]+$/)){Ox39c=ts_sort_numeric;} ;SORT_COLUMN_INDEX=Ox39a;var Ox393= new Array();var Ox39d= new Array();for(var i=0;i<Ox392[OxOa7ce[48]][0][OxOa7ce[30]];i++){Ox393[i]=Ox392[OxOa7ce[48]][0][i];} ;for(var Ox25=1;Ox25<Ox392[OxOa7ce[48]][OxOa7ce[30]];Ox25++){Ox39d[Ox25-1]=Ox392[OxOa7ce[48]][Ox25];} ;Ox39d.sort(Ox39c);if(Ox2a4.getAttribute(OxOa7ce[62])==OxOa7ce[63]){var Ox39e=OxOa7ce[64];Ox39d.reverse();Ox2a4.setAttribute(OxOa7ce[62],OxOa7ce[65]);} else {Ox39e=OxOa7ce[66];Ox2a4.setAttribute(OxOa7ce[62],OxOa7ce[63]);} ;for(i=0;i<Ox39d[OxOa7ce[30]];i++){if(!Ox39d[i][OxOa7ce[46]]||(Ox39d[i][OxOa7ce[46]]&&(Ox39d[i][OxOa7ce[46]].indexOf(OxOa7ce[67])==-1))){Ox392[OxOa7ce[68]][0].appendChild(Ox39d[i]);} ;} ;for(i=0;i<Ox39d[OxOa7ce[30]];i++){if(Ox39d[i][OxOa7ce[46]]&&(Ox39d[i][OxOa7ce[46]].indexOf(OxOa7ce[67])!=-1)){Ox392[OxOa7ce[68]][0].appendChild(Ox39d[i]);} ;} ;var Ox39f=document.getElementsByTagName(OxOa7ce[59]);for(var Ox398=0;Ox398<Ox39f[OxOa7ce[30]];Ox398++){if(Ox39f[Ox398][OxOa7ce[46]]==OxOa7ce[69]){if(getParent(Ox39f[Ox398],OxOa7ce[43])==getParent(Ox397,OxOa7ce[43])){Ox39f[Ox398][OxOa7ce[50]]=OxOa7ce[70];} ;} ;} ;Ox2a4[OxOa7ce[50]]=Ox39e;} ;function getParent(Ox29,Ox3a1){if(Ox29==null){return null;} else {if(Ox29[OxOa7ce[58]]==1&&Ox29[OxOa7ce[35]].toLowerCase()==Ox3a1.toLowerCase()){return Ox29;} else {return getParent(Ox29.parentNode,Ox3a1);} ;} ;} ;function ts_sort_date(Oxed,b){var Ox3a3=ts_getInnerText(Oxed[OxOa7ce[49]][SORT_COLUMN_INDEX]);var Ox3a4=ts_getInnerText(b[OxOa7ce[49]][SORT_COLUMN_INDEX]);if(Ox3a3[OxOa7ce[30]]==10){var Ox3a5=Ox3a3.substr(6,4)+Ox3a3.substr(3,2)+Ox3a3.substr(0,2);} else {var Ox3a6=Ox3a3.substr(6,2);if(parseInt(Ox3a6)<50){Ox3a6=OxOa7ce[71]+Ox3a6;} else {Ox3a6=OxOa7ce[72]+Ox3a6;} ;var Ox3a5=Ox3a6+Ox3a3.substr(3,2)+Ox3a3.substr(0,2);} ;if(Ox3a4[OxOa7ce[30]]==10){var Ox3a7=Ox3a4.substr(6,4)+Ox3a4.substr(3,2)+Ox3a4.substr(0,2);} else {Ox3a6=Ox3a4.substr(6,2);if(parseInt(Ox3a6)<50){Ox3a6=OxOa7ce[71]+Ox3a6;} else {Ox3a6=OxOa7ce[72]+Ox3a6;} ;var Ox3a7=Ox3a6+Ox3a4.substr(3,2)+Ox3a4.substr(0,2);} ;if(Ox3a5==Ox3a7){return 0;} ;if(Ox3a5<Ox3a7){return -1;} ;return 1;} ;function ts_sort_currency(Oxed,b){var Ox3a3=ts_getInnerText(Oxed[OxOa7ce[49]][SORT_COLUMN_INDEX]).replace(/[^0-9.]/g,OxOa7ce[9]);var Ox3a4=ts_getInnerText(b[OxOa7ce[49]][SORT_COLUMN_INDEX]).replace(/[^0-9.]/g,OxOa7ce[9]);return parseFloat(Ox3a3)-parseFloat(Ox3a4);} ;function ts_sort_numeric(Oxed,b){var Ox3a3=parseFloat(ts_getInnerText(Oxed[OxOa7ce[49]][SORT_COLUMN_INDEX]));if(isNaN(Ox3a3)){Ox3a3=0;} ;var Ox3a4=parseFloat(ts_getInnerText(b[OxOa7ce[49]][SORT_COLUMN_INDEX]));if(isNaN(Ox3a4)){Ox3a4=0;} ;return Ox3a3-Ox3a4;} ;function ts_sort_caseinsensitive(Oxed,b){var Ox3a3=ts_getInnerText(Oxed[OxOa7ce[49]][SORT_COLUMN_INDEX]).toLowerCase();var Ox3a4=ts_getInnerText(b[OxOa7ce[49]][SORT_COLUMN_INDEX]).toLowerCase();if(Ox3a3==Ox3a4){return 0;} ;if(Ox3a3<Ox3a4){return -1;} ;return 1;} ;function ts_sort_default(Oxed,b){var Ox3a3=ts_getInnerText(Oxed[OxOa7ce[49]][SORT_COLUMN_INDEX]);var Ox3a4=ts_getInnerText(b[OxOa7ce[49]][SORT_COLUMN_INDEX]);if(Ox3a3==Ox3a4){return 0;} ;if(Ox3a3<Ox3a4){return -1;} ;return 1;} ;function RequireFileBrowseScript(){} ;function Actualsize(){} ;RequireFileBrowseScript();var browse_Frame=Window_GetElement(window,OxOa7ce[73],true);var hiddenDirectory=Window_GetElement(window,OxOa7ce[0],true);var hiddenFile=Window_GetElement(window,OxOa7ce[1],true);var hiddenAlert=Window_GetElement(window,OxOa7ce[2],true);var hiddenAction=Window_GetElement(window,OxOa7ce[3],true);var hiddenActionData=Window_GetElement(window,OxOa7ce[4],true);var Image1=Window_GetElement(window,OxOa7ce[74],true);var FolderDescription=Window_GetElement(window,OxOa7ce[75],true);var CreateDir=Window_GetElement(window,OxOa7ce[76],true);var Copy=Window_GetElement(window,OxOa7ce[77],true);var Move=Window_GetElement(window,OxOa7ce[78],true);var FoldersAndFiles=Window_GetElement(window,OxOa7ce[28],true);var Delete=Window_GetElement(window,OxOa7ce[79],true);var DoRefresh=Window_GetElement(window,OxOa7ce[80],true);var divpreview=Window_GetElement(window,OxOa7ce[81],true);var TargetUrl=Window_GetElement(window,OxOa7ce[39],true);var Button1=Window_GetElement(window,OxOa7ce[82],true);var Button2=Window_GetElement(window,OxOa7ce[83],true);var btn_zoom_in=Window_GetElement(window,OxOa7ce[84],true);var btn_zoom_out=Window_GetElement(window,OxOa7ce[85],true);var btn_Actualsize=Window_GetElement(window,OxOa7ce[86],true);var arg=Window_GetDialogArguments(window);var editor=arg[OxOa7ce[87]];var editwin=arg[OxOa7ce[88]];var editdoc=arg[OxOa7ce[89]];var ver=getInternetExplorerVersion();if(ver>-1&&ver<=9.0){var needAdjust=true;if(ver>=8.0&&document[OxOa7ce[90]]){if(document[OxOa7ce[91]]>7){needAdjust=false;} ;} ;if(needAdjust&&(browse_Frame[OxOa7ce[92]]<browse_Frame[OxOa7ce[93]])){FoldersAndFiles[OxOa7ce[95]][OxOa7ce[94]]=OxOa7ce[96];} ;} ;function getInternetExplorerVersion(){var Ox3c7=-1;if(navigator[OxOa7ce[97]]==OxOa7ce[98]){var Ox3c8=navigator[OxOa7ce[99]];var Ox294= new RegExp(OxOa7ce[100]);if(Ox294.exec(Ox3c8)!=null){Ox3c7=parseFloat(RegExp.$1);} ;} ;return Ox3c7;} ;do_preview();function do_preview(Ox280){if(Ox280!=OxOa7ce[9]&&Ox280!=null){htmlcode=Ox280;divpreview[OxOa7ce[50]]=Ox280;return ;} ;divpreview[OxOa7ce[50]]=OxOa7ce[9];var Ox286=TargetUrl[OxOa7ce[10]];if(Ox286==OxOa7ce[9]){return ;} ;var Oxc9=Ox286.substring(Ox286.lastIndexOf(OxOa7ce[21])).toLowerCase();switch(Oxc9){case OxOa7ce[101]:;case OxOa7ce[102]:;case OxOa7ce[103]:;case OxOa7ce[104]:;case OxOa7ce[107]:divpreview[OxOa7ce[50]]=OxOa7ce[105]+Ox286+OxOa7ce[106];break ;;case OxOa7ce[110]:var Ox3c9=OxOa7ce[108]+Ox286+OxOa7ce[109];divpreview[OxOa7ce[50]]=Ox3c9+OxOa7ce[70];break ;;case OxOa7ce[111]:;case OxOa7ce[112]:;case OxOa7ce[113]:;case OxOa7ce[116]:var Ox3ca=OxOa7ce[114]+Ox286+OxOa7ce[115];divpreview[OxOa7ce[50]]=Ox3ca+OxOa7ce[70];break ;;} ;} ;function do_insert(){var Ox46f=arg[OxOa7ce[117]];if(Ox46f){try{Ox46f[OxOa7ce[10]]=TargetUrl[OxOa7ce[10]];} catch(x){} ;} ;Window_SetDialogReturnValue(window,TargetUrl.value);Window_CloseDialog(window);} ;function do_Close(){Window_SetDialogReturnValue(window,null);Window_CloseDialog(window);} ;function Zoom_In(){if(divpreview[OxOa7ce[95]][OxOa7ce[118]]!=0){divpreview[OxOa7ce[95]][OxOa7ce[118]]*=1.2;} else {divpreview[OxOa7ce[95]][OxOa7ce[118]]=1.2;} ;} ;function Zoom_Out(){if(divpreview[OxOa7ce[95]][OxOa7ce[118]]!=0){divpreview[OxOa7ce[95]][OxOa7ce[118]]*=0.8;} else {divpreview[OxOa7ce[95]][OxOa7ce[118]]=0.8;} ;} ;function Actualsize(){divpreview[OxOa7ce[95]][OxOa7ce[118]]=1;do_preview();} ;if(!Browser_IsWinIE()){btn_zoom_in[OxOa7ce[95]][OxOa7ce[119]]=btn_zoom_out[OxOa7ce[95]][OxOa7ce[119]]=btn_Actualsize[OxOa7ce[95]][OxOa7ce[119]]=OxOa7ce[120];} else {} ;if(Browser_IsIE7()){var _dialogPromptID=null;function IEprompt(Ox21e,Ox21f,Ox220){that=this;this[OxOa7ce[121]]=function (Ox221){val=document.getElementById(OxOa7ce[122])[OxOa7ce[10]];_dialogPromptID[OxOa7ce[95]][OxOa7ce[119]]=OxOa7ce[120];document.getElementById(OxOa7ce[122])[OxOa7ce[10]]=OxOa7ce[9];if(Ox221){val=OxOa7ce[9];} ;Ox21e(val);return false;} ;if(Ox220==undefined){Ox220=OxOa7ce[9];} ;if(_dialogPromptID==null){var Ox222=document.getElementsByTagName(OxOa7ce[123])[0];tnode=document.createElement(OxOa7ce[124]);tnode[OxOa7ce[47]]=OxOa7ce[125];Ox222.appendChild(tnode);_dialogPromptID=document.getElementById(OxOa7ce[125]);tnode=document.createElement(OxOa7ce[124]);tnode[OxOa7ce[47]]=OxOa7ce[126];Ox222.appendChild(tnode);_dialogPromptID[OxOa7ce[95]][OxOa7ce[127]]=OxOa7ce[128];_dialogPromptID[OxOa7ce[95]][OxOa7ce[129]]=OxOa7ce[130];_dialogPromptID[OxOa7ce[95]][OxOa7ce[131]]=OxOa7ce[132];_dialogPromptID[OxOa7ce[95]][OxOa7ce[94]]=OxOa7ce[133];_dialogPromptID[OxOa7ce[95]][OxOa7ce[134]]=OxOa7ce[135];} ;var Ox223=OxOa7ce[136];Ox223+=OxOa7ce[137]+Ox21f+OxOa7ce[138];Ox223+=OxOa7ce[139];Ox223+=OxOa7ce[140]+Ox220+OxOa7ce[141];Ox223+=OxOa7ce[142];Ox223+=OxOa7ce[143];Ox223+=OxOa7ce[144];Ox223+=OxOa7ce[145];Ox223+=OxOa7ce[146];_dialogPromptID[OxOa7ce[50]]=Ox223;_dialogPromptID[OxOa7ce[95]][OxOa7ce[147]]=OxOa7ce[148];_dialogPromptID[OxOa7ce[95]][OxOa7ce[149]]=parseInt((document[OxOa7ce[123]][OxOa7ce[150]]-315)/2)+OxOa7ce[151];_dialogPromptID[OxOa7ce[95]][OxOa7ce[119]]=OxOa7ce[152];var Ox224=document.getElementById(OxOa7ce[122]);try{var Ox225=Ox224.createTextRange();Ox225.collapse(false);Ox225.select();} catch(x){Ox224.focus();} ;} ;} ;if(CreateDir){CreateDir[OxOa7ce[31]]= new Function(OxOa7ce[153]);} ;if(Copy){Copy[OxOa7ce[31]]= new Function(OxOa7ce[153]);} ;if(Move){Move[OxOa7ce[31]]= new Function(OxOa7ce[153]);} ;if(Delete){Delete[OxOa7ce[31]]= new Function(OxOa7ce[153]);} ;if(DoRefresh){DoRefresh[OxOa7ce[31]]= new Function(OxOa7ce[153]);} ;if(btn_zoom_in){btn_zoom_in[OxOa7ce[31]]= new Function(OxOa7ce[153]);} ;if(btn_zoom_out){btn_zoom_out[OxOa7ce[31]]= new Function(OxOa7ce[153]);} ;if(btn_Actualsize){btn_Actualsize[OxOa7ce[31]]= new Function(OxOa7ce[153]);} ;