var OxO8020=["hiddenDirectory","hiddenFile","hiddenAlert","hiddenAction","hiddenActionData","hiddenHTML","This function is disabled in the demo mode.","disabled","[[Disabled]]","[[SpecifyNewFolderName]]","","value","createdir","[[CopyMoveto]]","/","move","copy","[[AreyouSureDelete]]","parentNode","path","[[TemplateModified]]","OuterEditorFull.aspx?","\x26f=","dialogWidth:772px;dialogHeight:385px;help:no;scroll:no;status:no;resizable:0;","UseStandardDialog","1","\x26Dialog=Standard","setting=","EditorSetting","\x26Theme=","Theme","\x26","DNNArg","[[TemplateCreated]]","refresh","[[SpecifyNewFileName]]","innerHTML","dialogWidth:760px;dialogHeight:385px;help:no;scroll:no;status:no;resizable:0;","isdir","true","text",".","rename","True","False",":","FoldersAndFiles","TR","length","onmouseover","this.style.backgroundColor=\x27#eeeeee\x27;","onmouseout","this.style.backgroundColor=\x27\x27;","nodeName","INPUT","changedir","url","TargetUrl","htmlcode","onload","getElementsByTagName","table","sortable"," ","className","id","rows","cells","\x3Ca href=\x22#\x22 onclick=\x22ts_resortTable(this);return false;\x22\x3E","\x3Cspan class=\x22sortarrow\x22\x3E\x26nbsp;\x3C/span\x3E\x3C/a\x3E","string","undefined","innerText","childNodes","nodeValue","nodeType","span","cellIndex","TABLE","sortdir","down","\x26uarr;","up","\x26darr;","sortbottom","tBodies","sortarrow","\x26nbsp;","20","19","browse_Frame","Image1","FolderDescription","CreateDir","Copy","Move","NewTemplate","Delete","DoRefresh","contentWindow","framepreview","btn_zoom_in","btn_zoom_out","btn_Actualsize","documentElement","documentMode","clientHeight","scrollHeight","width","style","225px","appName","Microsoft Internet Explorer","userAgent","MSIE ([0-9]{1,}[.0-9]{0,})","?","src","body","document","\x26#",";","zoom","wrapupPrompt","iepromptfield","display","none","div","IEPromptBox","promptBlackout","border","1px solid #b0bec7","backgroundColor","#f0f0f0","position","absolute","330px","zIndex","100","\x3Cdiv style=\x22width: 100%; padding-top:3px;background-color: #DCE7EB; font-family: verdana; font-size: 10pt; font-weight: bold; height: 22px; text-align:center; background:url(Load.ashx?type=image\x26file=formbg2.gif) repeat-x left top;\x22\x3E[[InputRequired]]\x3C/div\x3E","\x3Cdiv style=\x22padding: 10px\x22\x3E","\x3CBR\x3E\x3CBR\x3E","\x3Cform action=\x22\x22 onsubmit=\x22return wrapupPrompt()\x22\x3E","\x3Cinput id=\x22iepromptfield\x22 name=\x22iepromptdata\x22 type=text size=46 value=\x22","\x22\x3E","\x3Cbr\x3E\x3Cbr\x3E\x3Ccenter\x3E","\x3Cinput type=\x22submit\x22 value=\x22\x26nbsp;\x26nbsp;\x26nbsp;[[OK]]\x26nbsp;\x26nbsp;\x26nbsp;\x22\x3E","\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp;","\x3Cinput type=\x22button\x22 onclick=\x22wrapupPrompt(true)\x22 value=\x22\x26nbsp;[[Cancel]]\x26nbsp;\x22\x3E","\x3C/form\x3E\x3C/div\x3E","top","100px","left","offsetWidth","px","block","CuteEditor_ColorPicker_ButtonOver(this)"];var hiddenDirectory=Window_GetElement(window,OxO8020[0],true);var hiddenFile=Window_GetElement(window,OxO8020[1],true);var hiddenAlert=Window_GetElement(window,OxO8020[2],true);var hiddenAction=Window_GetElement(window,OxO8020[3],true);var hiddenActionData=Window_GetElement(window,OxO8020[4],true);var hiddenHTML=Window_GetElement(window,OxO8020[5],true);function CreateDir_click(){if(isDemoMode){alert(OxO8020[6]);return false;} ;if(Event_GetSrcElement()[OxO8020[7]]){alert(OxO8020[8]);return false;} ;if(Browser_IsIE7()){IEprompt(Ox21e,OxO8020[9],OxO8020[10]);function Ox21e(Ox37f){if(Ox37f){hiddenActionData[OxO8020[11]]=Ox37f;hiddenAction[OxO8020[11]]=OxO8020[12];window.PostBackAction();return true;} else {return false;} ;} ;return Event_CancelEvent();} else {var Ox37f=prompt(OxO8020[9],OxO8020[10]);if(Ox37f){hiddenActionData[OxO8020[11]]=Ox37f;return true;} else {return false;} ;return false;} ;} ;function Move_click(){if(isDemoMode){alert(OxO8020[6]);return false;} ;if(Event_GetSrcElement()[OxO8020[7]]){alert(OxO8020[8]);return false;} ;if(Browser_IsIE7()){IEprompt(Ox21e,OxO8020[13],OxO8020[14]);function Ox21e(Ox37f){if(Ox37f){hiddenActionData[OxO8020[11]]=Ox37f;hiddenAction[OxO8020[11]]=OxO8020[15];window.PostBackAction();return true;} else {return false;} ;} ;return Event_CancelEvent();} else {var Ox37f=prompt(OxO8020[13],OxO8020[14]);if(Ox37f){hiddenActionData[OxO8020[11]]=Ox37f;return true;} else {return false;} ;return false;} ;} ;function Copy_click(){if(isDemoMode){alert(OxO8020[6]);return false;} ;if(Event_GetSrcElement()[OxO8020[7]]){alert(OxO8020[8]);return false;} ;if(Browser_IsIE7()){IEprompt(Ox21e,OxO8020[13],OxO8020[14]);function Ox21e(Ox37f){if(Ox37f){hiddenActionData[OxO8020[11]]=Ox37f;hiddenAction[OxO8020[11]]=OxO8020[16];window.PostBackAction();return true;} else {return false;} ;} ;return Event_CancelEvent();} else {var Ox37f=prompt(OxO8020[13],OxO8020[14]);if(Ox37f){hiddenActionData[OxO8020[11]]=Ox37f;return true;} else {return false;} ;return false;} ;} ;function Delete_click(){if(isDemoMode){alert(OxO8020[6]);return false;} ;if(Event_GetSrcElement()[OxO8020[7]]){alert(OxO8020[8]);return false;} ;return confirm(OxO8020[17]);} ;function EditImg_click(img){if(isDemoMode){alert(OxO8020[6]);return false;} ;var Ox384=img[OxO8020[18]][OxO8020[18]];var p=Ox384.getAttribute(OxO8020[19]);if(p!=OxO8020[10]&&p!=null){function Ox35a(Ox209){if(Ox209){alert(OxO8020[20]);window.PostBackAction();} ;} ;editor.SetNextDialogWindow(window);editor.ShowDialog(Ox35a,OxO8020[21]+GetDialogQueryString()+OxO8020[22]+p+OxO8020[10],window,OxO8020[23]);return true;} else {return false;} ;} ;function GetDialogQueryString(){var Ox11f=OxO8020[10];if(editor.GetScriptProperty(OxO8020[24])==OxO8020[25]){Ox11f=OxO8020[26];} ;return OxO8020[27]+editor.GetScriptProperty(OxO8020[28])+OxO8020[29]+editor.GetScriptProperty(OxO8020[30])+Ox11f+OxO8020[31]+editor.GetScriptProperty(OxO8020[32]);} ;function NewTemplate_Click(){if(isDemoMode){alert(OxO8020[6]);return false;} ;function Ox35a(Ox209){if(Ox209){alert(OxO8020[33]);hiddenActionData[OxO8020[11]]=OxO8020[10];hiddenAction[OxO8020[11]]=OxO8020[34];window.PostBackAction();} ;} ;if(Browser_IsIE7()){IEprompt(Ox21e,OxO8020[35],OxO8020[10]);function Ox21e(Ox37f){if(Ox37f){Ox37f=FolderDescription[OxO8020[36]]+Ox37f;editor.SetNextDialogWindow(window);editor.ShowDialog(Ox35a,OxO8020[21]+GetDialogQueryString()+OxO8020[22]+Ox37f+OxO8020[10],window,OxO8020[37]);return true;} else {return false;} ;} ;return Event_CancelEvent();} else {var Ox37f=prompt(OxO8020[35],OxO8020[10]);if(Ox37f){Ox37f=FolderDescription[OxO8020[36]]+Ox37f;editor.SetNextDialogWindow(window);editor.ShowDialog(Ox35a,OxO8020[21]+GetDialogQueryString()+OxO8020[22]+Ox37f+OxO8020[10],window,OxO8020[37]);return true;} else {return false;} ;} ;} ;function GetDialogQueryString(){var Ox11f=OxO8020[10];if(editor.GetScriptProperty(OxO8020[24])==OxO8020[25]){Ox11f=OxO8020[26];} ;return OxO8020[27]+editor.GetScriptProperty(OxO8020[28])+OxO8020[29]+editor.GetScriptProperty(OxO8020[30])+Ox11f+OxO8020[31]+editor.GetScriptProperty(OxO8020[32]);} ;function RenImg_click(img){if(isDemoMode){alert(OxO8020[6]);return false;} ;if(img[OxO8020[7]]){alert(OxO8020[8]);return false;} ;var Ox384=img[OxO8020[18]][OxO8020[18]];var Ox386;if(Browser_IsOpera()){Ox386=Ox384.getAttribute(OxO8020[38])==OxO8020[39];} else {Ox386=Ox384[OxO8020[38]];} ;var Ox385=Ox384[OxO8020[40]];var name;if(Browser_IsIE7()){var Oxc9;if(Ox386){IEprompt(Ox21e,OxO8020[9],Ox385);} else {var i=Ox385.lastIndexOf(OxO8020[41]);Oxc9=Ox385.substr(i);var Ox12=Ox385.substr(0,Ox385.lastIndexOf(OxO8020[41]));IEprompt(Ox21e,OxO8020[35],Ox12);} ;function Ox21e(Ox37f){if(Ox37f&&Ox37f!=Ox384[OxO8020[40]]){if(!Ox386){Ox37f=Ox37f+Oxc9;} ;hiddenAction[OxO8020[11]]=OxO8020[42];hiddenActionData[OxO8020[11]]=(Ox386?OxO8020[43]:OxO8020[44])+OxO8020[45]+Ox384[OxO8020[19]]+OxO8020[45]+Ox37f;window.PostBackAction();} ;} ;} else {if(Ox386){name=prompt(OxO8020[9],Ox385);} else {var i=Ox385.lastIndexOf(OxO8020[41]);var Oxc9=Ox385.substr(i);var Ox12=Ox385.substr(0,Ox385.lastIndexOf(OxO8020[41]));name=prompt(OxO8020[35],Ox12);if(name){name=name+Oxc9;} ;} ;if(name&&name!=Ox384[OxO8020[40]]){hiddenAction[OxO8020[11]]=OxO8020[42];hiddenActionData[OxO8020[11]]=(Ox386?OxO8020[43]:OxO8020[44])+OxO8020[45]+Ox384[OxO8020[19]]+OxO8020[45]+name;window.PostBackAction();} ;} ;return Event_CancelEvent();} ;setMouseOver();function setMouseOver(){var FoldersAndFiles=Window_GetElement(window,OxO8020[46],true);var Ox389=FoldersAndFiles.getElementsByTagName(OxO8020[47]);for(var i=1;i<Ox389[OxO8020[48]];i++){var Ox384=Ox389[i];Ox384[OxO8020[49]]= new Function(OxO8020[10],OxO8020[50]);Ox384[OxO8020[51]]= new Function(OxO8020[10],OxO8020[52]);} ;} ;function test(){alert(222);} ;function row_click(Ox384){var Ox386;if(Browser_IsOpera()){Ox386=Ox384.getAttribute(OxO8020[38])==OxO8020[39];} else {Ox386=Ox384[OxO8020[38]];} ;if(Ox386){if(Event_GetSrcElement()[OxO8020[53]]==OxO8020[54]){return ;} ;hiddenAction[OxO8020[11]]=OxO8020[55];hiddenActionData[OxO8020[11]]=Ox384.getAttribute(OxO8020[19]);window.PostBackAction();} else {var Ox108=Ox384.getAttribute(OxO8020[19]);hiddenFile[OxO8020[11]]=Ox108;var Ox286=Ox384.getAttribute(OxO8020[56]);Window_GetElement(window,OxO8020[57],true)[OxO8020[11]]=Ox286;var htmlcode=Ox384.getAttribute(OxO8020[58]);if(htmlcode!=OxO8020[10]&&htmlcode!=null){do_preview(htmlcode);} else {try{Actualsize();} catch(x){do_preview();} ;} ;} ;} ;function do_preview(){} ;function reset_hiddens(){if(hiddenAlert[OxO8020[11]]){alert(hiddenAlert.value);} ;if(hiddenHTML[OxO8020[11]]){do_preview(hiddenHTML.value);} ;hiddenAlert[OxO8020[11]]=OxO8020[10];hiddenHTML[OxO8020[11]]=OxO8020[10];hiddenAction[OxO8020[11]]=OxO8020[10];hiddenActionData[OxO8020[11]]=OxO8020[10];} ;Event_Attach(window,OxO8020[59],reset_hiddens);function RequireFileBrowseScript(){} ;Event_Attach(window,OxO8020[59],sortables_init);var SORT_COLUMN_INDEX;function sortables_init(){if(!document[OxO8020[60]]){return ;} ;var Ox38e=document.getElementsByTagName(OxO8020[61]);for(var Ox38f=0;Ox38f<Ox38e[OxO8020[48]];Ox38f++){var Ox390=Ox38e[Ox38f];if(((OxO8020[63]+Ox390[OxO8020[64]]+OxO8020[63]).indexOf(OxO8020[62])!=-1)&&(Ox390[OxO8020[65]])){ts_makeSortable(Ox390);} ;} ;} ;function ts_makeSortable(Ox392){if(Ox392[OxO8020[66]]&&Ox392[OxO8020[66]][OxO8020[48]]>0){var Ox393=Ox392[OxO8020[66]][0];} ;if(!Ox393){return ;} ;for(var i=2;i<4;i++){var Ox394=Ox393[OxO8020[67]][i];var Ox281=ts_getInnerText(Ox394);Ox394[OxO8020[36]]=OxO8020[68]+Ox281+OxO8020[69];} ;} ;function ts_getInnerText(Ox29){if( typeof Ox29==OxO8020[70]){return Ox29;} ;if( typeof Ox29==OxO8020[71]){return Ox29;} ;if(Ox29[OxO8020[72]]){return Ox29[OxO8020[72]];} ;var Ox24=OxO8020[10];var Ox340=Ox29[OxO8020[73]];var Ox11=Ox340[OxO8020[48]];for(var i=0;i<Ox11;i++){switch(Ox340[i][OxO8020[75]]){case 1:Ox24+=ts_getInnerText(Ox340[i]);break ;;case 3:Ox24+=Ox340[i][OxO8020[74]];break ;;} ;} ;return Ox24;} ;function ts_resortTable(Ox397){var Ox2a4;for(var Ox398=0;Ox398<Ox397[OxO8020[73]][OxO8020[48]];Ox398++){if(Ox397[OxO8020[73]][Ox398][OxO8020[53]]&&Ox397[OxO8020[73]][Ox398][OxO8020[53]].toLowerCase()==OxO8020[76]){Ox2a4=Ox397[OxO8020[73]][Ox398];} ;} ;var Ox399=ts_getInnerText(Ox2a4);var Ox1e3=Ox397[OxO8020[18]];var Ox39a=Ox1e3[OxO8020[77]];var Ox392=getParent(Ox1e3,OxO8020[78]);if(Ox392[OxO8020[66]][OxO8020[48]]<=1){return ;} ;var Ox39b=ts_getInnerText(Ox392[OxO8020[66]][1][OxO8020[67]][Ox39a]);var Ox39c=ts_sort_caseinsensitive;if(Ox39b.match(/^\d\d[\/-]\d\d[\/-]\d\d\d\d$/)){Ox39c=ts_sort_date;} ;if(Ox39b.match(/^\d\d[\/-]\d\d[\/-]\d\d$/)){Ox39c=ts_sort_date;} ;if(Ox39b.match(/^[?]/)){Ox39c=ts_sort_currency;} ;if(Ox39b.match(/^[\d\.]+$/)){Ox39c=ts_sort_numeric;} ;SORT_COLUMN_INDEX=Ox39a;var Ox393= new Array();var Ox39d= new Array();for(var i=0;i<Ox392[OxO8020[66]][0][OxO8020[48]];i++){Ox393[i]=Ox392[OxO8020[66]][0][i];} ;for(var Ox25=1;Ox25<Ox392[OxO8020[66]][OxO8020[48]];Ox25++){Ox39d[Ox25-1]=Ox392[OxO8020[66]][Ox25];} ;Ox39d.sort(Ox39c);if(Ox2a4.getAttribute(OxO8020[79])==OxO8020[80]){var Ox39e=OxO8020[81];Ox39d.reverse();Ox2a4.setAttribute(OxO8020[79],OxO8020[82]);} else {Ox39e=OxO8020[83];Ox2a4.setAttribute(OxO8020[79],OxO8020[80]);} ;for(i=0;i<Ox39d[OxO8020[48]];i++){if(!Ox39d[i][OxO8020[64]]||(Ox39d[i][OxO8020[64]]&&(Ox39d[i][OxO8020[64]].indexOf(OxO8020[84])==-1))){Ox392[OxO8020[85]][0].appendChild(Ox39d[i]);} ;} ;for(i=0;i<Ox39d[OxO8020[48]];i++){if(Ox39d[i][OxO8020[64]]&&(Ox39d[i][OxO8020[64]].indexOf(OxO8020[84])!=-1)){Ox392[OxO8020[85]][0].appendChild(Ox39d[i]);} ;} ;var Ox39f=document.getElementsByTagName(OxO8020[76]);for(var Ox398=0;Ox398<Ox39f[OxO8020[48]];Ox398++){if(Ox39f[Ox398][OxO8020[64]]==OxO8020[86]){if(getParent(Ox39f[Ox398],OxO8020[61])==getParent(Ox397,OxO8020[61])){Ox39f[Ox398][OxO8020[36]]=OxO8020[87];} ;} ;} ;Ox2a4[OxO8020[36]]=Ox39e;} ;function getParent(Ox29,Ox3a1){if(Ox29==null){return null;} else {if(Ox29[OxO8020[75]]==1&&Ox29[OxO8020[53]].toLowerCase()==Ox3a1.toLowerCase()){return Ox29;} else {return getParent(Ox29.parentNode,Ox3a1);} ;} ;} ;function ts_sort_date(Oxed,b){var Ox3a3=ts_getInnerText(Oxed[OxO8020[67]][SORT_COLUMN_INDEX]);var Ox3a4=ts_getInnerText(b[OxO8020[67]][SORT_COLUMN_INDEX]);if(Ox3a3[OxO8020[48]]==10){var Ox3a5=Ox3a3.substr(6,4)+Ox3a3.substr(3,2)+Ox3a3.substr(0,2);} else {var Ox3a6=Ox3a3.substr(6,2);if(parseInt(Ox3a6)<50){Ox3a6=OxO8020[88]+Ox3a6;} else {Ox3a6=OxO8020[89]+Ox3a6;} ;var Ox3a5=Ox3a6+Ox3a3.substr(3,2)+Ox3a3.substr(0,2);} ;if(Ox3a4[OxO8020[48]]==10){var Ox3a7=Ox3a4.substr(6,4)+Ox3a4.substr(3,2)+Ox3a4.substr(0,2);} else {Ox3a6=Ox3a4.substr(6,2);if(parseInt(Ox3a6)<50){Ox3a6=OxO8020[88]+Ox3a6;} else {Ox3a6=OxO8020[89]+Ox3a6;} ;var Ox3a7=Ox3a6+Ox3a4.substr(3,2)+Ox3a4.substr(0,2);} ;if(Ox3a5==Ox3a7){return 0;} ;if(Ox3a5<Ox3a7){return -1;} ;return 1;} ;function ts_sort_currency(Oxed,b){var Ox3a3=ts_getInnerText(Oxed[OxO8020[67]][SORT_COLUMN_INDEX]).replace(/[^0-9.]/g,OxO8020[10]);var Ox3a4=ts_getInnerText(b[OxO8020[67]][SORT_COLUMN_INDEX]).replace(/[^0-9.]/g,OxO8020[10]);return parseFloat(Ox3a3)-parseFloat(Ox3a4);} ;function ts_sort_numeric(Oxed,b){var Ox3a3=parseFloat(ts_getInnerText(Oxed[OxO8020[67]][SORT_COLUMN_INDEX]));if(isNaN(Ox3a3)){Ox3a3=0;} ;var Ox3a4=parseFloat(ts_getInnerText(b[OxO8020[67]][SORT_COLUMN_INDEX]));if(isNaN(Ox3a4)){Ox3a4=0;} ;return Ox3a3-Ox3a4;} ;function ts_sort_caseinsensitive(Oxed,b){var Ox3a3=ts_getInnerText(Oxed[OxO8020[67]][SORT_COLUMN_INDEX]).toLowerCase();var Ox3a4=ts_getInnerText(b[OxO8020[67]][SORT_COLUMN_INDEX]).toLowerCase();if(Ox3a3==Ox3a4){return 0;} ;if(Ox3a3<Ox3a4){return -1;} ;return 1;} ;function ts_sort_default(Oxed,b){var Ox3a3=ts_getInnerText(Oxed[OxO8020[67]][SORT_COLUMN_INDEX]);var Ox3a4=ts_getInnerText(b[OxO8020[67]][SORT_COLUMN_INDEX]);if(Ox3a3==Ox3a4){return 0;} ;if(Ox3a3<Ox3a4){return -1;} ;return 1;} [sortables_init];RequireFileBrowseScript();var browse_Frame=Window_GetElement(window,OxO8020[90],true);var hiddenDirectory=Window_GetElement(window,OxO8020[0],true);var hiddenFile=Window_GetElement(window,OxO8020[1],true);var hiddenAlert=Window_GetElement(window,OxO8020[2],true);var hiddenAction=Window_GetElement(window,OxO8020[3],true);var hiddenActionData=Window_GetElement(window,OxO8020[4],true);var Image1=Window_GetElement(window,OxO8020[91],true);var FolderDescription=Window_GetElement(window,OxO8020[92],true);var CreateDir=Window_GetElement(window,OxO8020[93],true);var Copy=Window_GetElement(window,OxO8020[94],true);var Move=Window_GetElement(window,OxO8020[95],true);var NewTemplate=Window_GetElement(window,OxO8020[96],true);var FoldersAndFiles=Window_GetElement(window,OxO8020[46],true);var Delete=Window_GetElement(window,OxO8020[97],true);var DoRefresh=Window_GetElement(window,OxO8020[98],true);var framepreview=document.getElementById(OxO8020[100])[OxO8020[99]];var TargetUrl=Window_GetElement(window,OxO8020[57],true);var btn_zoom_in=Window_GetElement(window,OxO8020[101],true);var btn_zoom_out=Window_GetElement(window,OxO8020[102],true);var btn_Actualsize=Window_GetElement(window,OxO8020[103],true);var editor=Window_GetDialogArguments(window);var ver=getInternetExplorerVersion();if(ver>-1&&ver<=9.0){var needAdjust=true;if(ver>=8.0&&document[OxO8020[104]]){if(document[OxO8020[105]]>7){needAdjust=false;} ;} ;if(needAdjust&&(browse_Frame[OxO8020[106]]<browse_Frame[OxO8020[107]])){FoldersAndFiles[OxO8020[109]][OxO8020[108]]=OxO8020[110];} ;} ;function getInternetExplorerVersion(){var Ox3c7=-1;if(navigator[OxO8020[111]]==OxO8020[112]){var Ox3c8=navigator[OxO8020[113]];var Ox294= new RegExp(OxO8020[114]);if(Ox294.exec(Ox3c8)!=null){Ox3c7=parseFloat(RegExp.$1);} ;} ;return Ox3c7;} ;var htmlcode=OxO8020[10];function do_preview(Ox280){htmlcode=Ox280;if(Ox280==OxO8020[10]||Ox280==null){var Ox22e=TargetUrl[OxO8020[11]];if(Ox22e.indexOf(OxO8020[115])!=-1){document.getElementById(OxO8020[100])[OxO8020[116]]=Ox22e;} else {framepreview[OxO8020[118]][OxO8020[117]][OxO8020[36]]=OxO8020[10];} ;} else {framepreview[OxO8020[118]][OxO8020[117]][OxO8020[36]]=Ox280;} ;} ;function do_insert(){var Ox22e=TargetUrl[OxO8020[11]];if(Ox22e.indexOf(OxO8020[115])!=-1){htmlcode=framepreview[OxO8020[118]][OxO8020[117]][OxO8020[36]];} ;htmlcode=htmlcode.replace(/[\u00A0-\u00FF|\u00FF-\uFFFF]/g,function (Oxed,b,Ox23f){return OxO8020[119]+Oxed.charCodeAt(0)+OxO8020[120];} );editor.PasteHTML(htmlcode);Window_CloseDialog(window);} ;function do_Close(){Window_CloseDialog(window);} ;function Zoom_In(){if(framepreview[OxO8020[118]][OxO8020[117]][OxO8020[109]][OxO8020[121]]!=0){framepreview[OxO8020[118]][OxO8020[117]][OxO8020[109]][OxO8020[121]]*=1.1;} else {framepreview[OxO8020[118]][OxO8020[117]][OxO8020[109]][OxO8020[121]]=1.1;} ;} ;function Zoom_Out(){if(framepreview[OxO8020[118]][OxO8020[117]][OxO8020[109]][OxO8020[121]]!=0){framepreview[OxO8020[118]][OxO8020[117]][OxO8020[109]][OxO8020[121]]*=0.8;} else {framepreview[OxO8020[118]][OxO8020[117]][OxO8020[109]][OxO8020[121]]=0.8;} ;} ;function Actualsize(){framepreview[OxO8020[118]][OxO8020[117]][OxO8020[109]][OxO8020[121]]=1;do_preview(htmlcode);} ;if(Browser_IsIE7()){var _dialogPromptID=null;function IEprompt(Ox21e,Ox21f,Ox220){that=this;this[OxO8020[122]]=function (Ox221){val=document.getElementById(OxO8020[123])[OxO8020[11]];_dialogPromptID[OxO8020[109]][OxO8020[124]]=OxO8020[125];document.getElementById(OxO8020[123])[OxO8020[11]]=OxO8020[10];if(Ox221){val=OxO8020[10];} ;Ox21e(val);return false;} ;if(Ox220==undefined){Ox220=OxO8020[10];} ;if(_dialogPromptID==null){var Ox222=document.getElementsByTagName(OxO8020[117])[0];tnode=document.createElement(OxO8020[126]);tnode[OxO8020[65]]=OxO8020[127];Ox222.appendChild(tnode);_dialogPromptID=document.getElementById(OxO8020[127]);tnode=document.createElement(OxO8020[126]);tnode[OxO8020[65]]=OxO8020[128];Ox222.appendChild(tnode);_dialogPromptID[OxO8020[109]][OxO8020[129]]=OxO8020[130];_dialogPromptID[OxO8020[109]][OxO8020[131]]=OxO8020[132];_dialogPromptID[OxO8020[109]][OxO8020[133]]=OxO8020[134];_dialogPromptID[OxO8020[109]][OxO8020[108]]=OxO8020[135];_dialogPromptID[OxO8020[109]][OxO8020[136]]=OxO8020[137];} ;var Ox223=OxO8020[138];Ox223+=OxO8020[139]+Ox21f+OxO8020[140];Ox223+=OxO8020[141];Ox223+=OxO8020[142]+Ox220+OxO8020[143];Ox223+=OxO8020[144];Ox223+=OxO8020[145];Ox223+=OxO8020[146];Ox223+=OxO8020[147];Ox223+=OxO8020[148];_dialogPromptID[OxO8020[36]]=Ox223;_dialogPromptID[OxO8020[109]][OxO8020[149]]=OxO8020[150];_dialogPromptID[OxO8020[109]][OxO8020[151]]=parseInt((document[OxO8020[117]][OxO8020[152]]-315)/2)+OxO8020[153];_dialogPromptID[OxO8020[109]][OxO8020[124]]=OxO8020[154];var Ox224=document.getElementById(OxO8020[123]);try{var Ox225=Ox224.createTextRange();Ox225.collapse(false);Ox225.select();} catch(x){Ox224.focus();} ;} ;} ;if(!Browser_IsWinIE()){btn_zoom_in[OxO8020[109]][OxO8020[124]]=btn_zoom_out[OxO8020[109]][OxO8020[124]]=btn_Actualsize[OxO8020[109]][OxO8020[124]]=OxO8020[125];} ;if(CreateDir){CreateDir[OxO8020[49]]= new Function(OxO8020[155]);} ;if(Copy){Copy[OxO8020[49]]= new Function(OxO8020[155]);} ;if(Move){Move[OxO8020[49]]= new Function(OxO8020[155]);} ;if(Delete){Delete[OxO8020[49]]= new Function(OxO8020[155]);} ;if(DoRefresh){DoRefresh[OxO8020[49]]= new Function(OxO8020[155]);} ;if(btn_zoom_in){btn_zoom_in[OxO8020[49]]= new Function(OxO8020[155]);} ;if(btn_zoom_out){btn_zoom_out[OxO8020[49]]= new Function(OxO8020[155]);} ;if(btn_Actualsize){btn_Actualsize[OxO8020[49]]= new Function(OxO8020[155]);} ;if(NewTemplate){NewTemplate[OxO8020[49]]= new Function(OxO8020[155]);} ;