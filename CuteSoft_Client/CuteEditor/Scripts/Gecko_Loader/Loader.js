var OxO93b9=["ua","userAgent","isOpera","opera","isSafari","safari","isGecko","gecko","isWinIE","msie","compatMode","document","CSS1Compat","undefined","Microsoft.XMLHTTP","readyState","onreadystatechange","","length","all","childNodes","nodeType","\x0D\x0A","caller","onchange","oninitialized","command","commandui","commandvalue","returnValue","oncommand","string","_fireEventFunction","event","parentNode","_IsCuteEditor","True","value","arguments","target","nodeName","SELECT","OPTION","readOnly","_IsRichDropDown","null","selectedIndex","TR","cells","display","style","nextSibling","innerHTML","\x3Cimg src=\x22","/Load.ashx?type=image\x26file=t-minus.gif\x22\x3E","onclick","CuteEditor_CollapseTreeDropDownItem(this,\x22","\x22)","none","/Load.ashx?type=image\x26file=t-plus.gif\x22\x3E","CuteEditor_ExpandTreeDropDownItem(this,\x22","contains","UNSELECTABLE","on","tabIndex","-1","//TODO: event not found? throw error ?","contentWindow","contentDocument","parentWindow","id","frames","frameElement","//TODO:frame contentWindow not found?","preventDefault","parent","top","opener","head","script","language","javascript","type","text/javascript","src","srcElement","//TODO: srcElement not found? throw error ?","fromElement","relatedTarget","toElement","keyCode","clientX","clientY","offsetX","offsetY","button","ctrlKey","altKey","shiftKey","cancelBubble","stopPropagation","CuteEditor_GetEditor(this).ExecImageCommand(this.getAttribute(\x27Command\x27),this.getAttribute(\x27CommandUI\x27),this.getAttribute(\x27CommandArgument\x27),this)","CuteEditor_GetEditor(this).PostBack(this.getAttribute(\x27Command\x27))","this.onmouseout();CuteEditor_GetEditor(this).DropMenu(this.getAttribute(\x27Group\x27),this)","ResourceDir","Theme","/Load.ashx?type=theme\x26theme=","\x26file=all.png","/Images/blank2020.gif","IMG","alt","title","Command","Group","ThemeIndex","width","20px","height","backgroundImage","url(",")","backgroundPosition","0 -","px","onload","className","separator","CuteEditorButton","onmouseover","CuteEditor_ButtonCommandOver(this)","onmouseout","CuteEditor_ButtonCommandOut(this)","onmousedown","CuteEditor_ButtonCommandDown(this)","onmouseup","CuteEditor_ButtonCommandUp(this)","oncontextmenu","ondragstart","PostBack","ondblclick","_ToolBarID","_CodeViewToolBarID","_FrameID"," CuteEditorFrame"," CuteEditorToolbar","cursor","no-drop","ActiveTab","Edit","Code","View","buttonInitialized","isover","CuteEditorButtonOver","CuteEditorButtonDown","CuteEditorDown","border","solid 1px #0A246A","backgroundColor","#b6bdd2","padding","1px","solid 1px #f5f5f4","inset 1px","IsCommandDisabled","CuteEditorButtonDisabled","IsCommandActive","CuteEditorButtonActive","cmd_fromfullpage","(","href","location",",DanaInfo=",",","+","scriptProperties","initfuncbecalled","GetScriptProperty","/Load.ashx?type=scripts\x26file=Gecko_Implementation\x26culture=","Culture","CuteEditorImplementation","function","POST","\x26getModified=1\x26_temp=","status","responseText","GET","\x26modified=","body","block","contentEditable","InitializeCode","CuteEditorInitialize"];var _Browser_TypeInfo=null;function Browser__InitType(){if(_Browser_TypeInfo!=null){return ;} ;var Ox4={};Ox4[OxO93b9[0]]=navigator[OxO93b9[1]].toLowerCase();Ox4[OxO93b9[2]]=(Ox4[OxO93b9[0]].indexOf(OxO93b9[3])>-1);Ox4[OxO93b9[4]]=(Ox4[OxO93b9[0]].indexOf(OxO93b9[5])>-1);Ox4[OxO93b9[6]]=(!Ox4[OxO93b9[2]]&&Ox4[OxO93b9[0]].indexOf(OxO93b9[7])>-1);Ox4[OxO93b9[8]]=(!Ox4[OxO93b9[2]]&&Ox4[OxO93b9[0]].indexOf(OxO93b9[9])>-1);_Browser_TypeInfo=Ox4;} ;Browser__InitType();function Browser_IsWinIE(){return _Browser_TypeInfo[OxO93b9[8]];} ;function Browser_IsGecko(){return _Browser_TypeInfo[OxO93b9[6]];} ;function Browser_IsOpera(){return _Browser_TypeInfo[OxO93b9[2]];} ;function Browser_IsSafari(){return _Browser_TypeInfo[OxO93b9[4]];} ;function Browser_UseIESelection(){return _Browser_TypeInfo[OxO93b9[8]];} ;function Browser_IsCSS1Compat(){return window[OxO93b9[11]][OxO93b9[10]]==OxO93b9[12];} ;function CreateXMLHttpRequest(){try{if( typeof (XMLHttpRequest)!=OxO93b9[13]){return  new XMLHttpRequest();} ;if( typeof (ActiveXObject)!=OxO93b9[13]){return  new ActiveXObject(OxO93b9[14]);} ;} catch(x){return null;} ;} ;function LoadXMLAsync(Oxa29,Ox286,Ox231,Oxa2a){var Oxe6=CreateXMLHttpRequest();function Oxa2b(){if(Oxe6[OxO93b9[15]]!=4){return ;} ;Oxe6[OxO93b9[16]]= new Function();var Ox28e=Oxe6;Oxe6=null;if(Ox231){Ox231(Ox28e);} ;} ;Oxe6[OxO93b9[16]]=Oxa2b;Oxe6.open(Oxa29,Ox286,true);Oxe6.send(Oxa2a||OxO93b9[17]);} ;function Element_GetAllElements(p){var arr=[];if(Browser_IsWinIE()){for(var i=0;i<p[OxO93b9[19]][OxO93b9[18]];i++){arr.push(p[OxO93b9[19]].item(i));} ;return arr;} ;Ox23e(p);function Ox23e(Ox29){var Ox23f=Ox29[OxO93b9[20]];var Ox11=Ox23f[OxO93b9[18]];for(var i=0;i<Ox11;i++){var Ox27=Ox23f.item(i);if(Ox27[OxO93b9[21]]!=1){continue ;} ;arr.push(Ox27);Ox23e(Ox27);} ;} ;return arr;} ;var __ISDEBUG=false;function Debug_Todo(msg){if(!__ISDEBUG){return ;} ;throw ( new Error(msg+OxO93b9[22]+Debug_Todo[OxO93b9[23]]));} ;function Window_GetElement(Ox1a7,Ox99,Ox23c){var Ox29=Ox1a7[OxO93b9[11]].getElementById(Ox99);if(Ox29){return Ox29;} ;var Ox31=Ox1a7[OxO93b9[11]].getElementsByName(Ox99);if(Ox31[OxO93b9[18]]>0){return Ox31.item(0);} ;return null;} ;function CuteEditor_AddMainMenuItems(Ox665){} ;function CuteEditor_AddDropMenuItems(Ox665,Ox66c){} ;function CuteEditor_AddTagMenuItems(Ox665,Ox66e){} ;function CuteEditor_AddVerbMenuItems(Ox665,Ox66e){} ;function CuteEditor_OnInitialized(editor){} ;function CuteEditor_OnCommand(editor,Ox4d,Ox4e,Ox4f){} ;function CuteEditor_OnChange(editor){} ;function CuteEditor_FilterCode(editor,Ox268){return Ox268;} ;function CuteEditor_FilterHTML(editor,Ox280){return Ox280;} ;function CuteEditor_FireChange(editor){window.CuteEditor_OnChange(editor);CuteEditor_FireEvent(editor,OxO93b9[24],null);} ;function CuteEditor_FireInitialized(editor){window.CuteEditor_OnInitialized(editor);CuteEditor_FireEvent(editor,OxO93b9[25],null);} ;function CuteEditor_FireCommand(editor,Ox4d,Ox4e,Ox4f){var Ox13d=window.CuteEditor_OnCommand(editor,Ox4d,Ox4e,Ox4f);if(Ox13d==true){return true;} ;var Ox677={};Ox677[OxO93b9[26]]=Ox4d;Ox677[OxO93b9[27]]=Ox4e;Ox677[OxO93b9[28]]=Ox4f;Ox677[OxO93b9[29]]=true;CuteEditor_FireEvent(editor,OxO93b9[30],Ox677);if(Ox677[OxO93b9[29]]==false){return true;} ;} ;function CuteEditor_FireEvent(editor,Ox679,Ox67a){if(Ox67a==null){Ox67a={};} ;var Ox67b=editor.getAttribute(Ox679);if(Ox67b){if( typeof (Ox67b)==OxO93b9[31]){editor[OxO93b9[32]]= new Function(OxO93b9[33],Ox67b);} else {editor[OxO93b9[32]]=Ox67b;} ;editor._fireEventFunction(Ox67a);} ;} ;function CuteEditor_GetEditor(element){for(var Ox43=element;Ox43!=null;Ox43=Ox43[OxO93b9[34]]){if(Ox43.getAttribute(OxO93b9[35])==OxO93b9[36]){return Ox43;} ;} ;return null;} ;function CuteEditor_DropDownCommand(element,Oxa2d){var Ox141=element[OxO93b9[37]];if(CuteEditor_DropDownCommand[OxO93b9[23]]){var Ox43=CuteEditor_DropDownCommand[OxO93b9[23]][OxO93b9[38]][0];if(Ox43&&Ox43[OxO93b9[39]]){if(Ox43[OxO93b9[39]][OxO93b9[40]]==OxO93b9[41]){return ;} ;if(Ox43[OxO93b9[39]][OxO93b9[40]]==OxO93b9[42]){Ox141=Ox43[OxO93b9[39]][OxO93b9[37]];} ;} ;} ;var editor=CuteEditor_GetEditor(element);if(editor[OxO93b9[43]]){return ;} ;if(element.getAttribute(OxO93b9[44])==OxO93b9[36]){var Ox141=element.GetValue();if(Ox141==OxO93b9[45]){Ox141=OxO93b9[17];} ;var Ox200=element.GetText();if(Ox200==OxO93b9[45]){Ox200=OxO93b9[17];} ;element.SetSelectedIndex(0);editor.ExecCommand(Oxa2d,false,Ox141,Ox200);} else {if(Ox141){if(Ox141==OxO93b9[45]){Ox141=OxO93b9[17];} ;element[OxO93b9[46]]=0;editor.ExecCommand(Oxa2d,false,Ox141,Ox200);} else {element[OxO93b9[46]]=0;} ;} ;editor.FocusDocument();} ;function CuteEditor_ExpandTreeDropDownItem(src,Ox73b){var Oxb9=null;while(src!=null){if(src[OxO93b9[40]]==OxO93b9[47]){Oxb9=src;break ;} ;src=src[OxO93b9[34]];} ;var Ox1e3=Oxb9[OxO93b9[48]].item(0);Oxb9[OxO93b9[51]][OxO93b9[50]][OxO93b9[49]]=OxO93b9[17];Ox1e3[OxO93b9[52]]=OxO93b9[53]+Ox73b+OxO93b9[54];Oxb9[OxO93b9[55]]= new Function(OxO93b9[56]+Ox73b+OxO93b9[57]);} ;function CuteEditor_CollapseTreeDropDownItem(src,Ox73b){var Oxb9=null;while(src!=null){if(src[OxO93b9[40]]==OxO93b9[47]){Oxb9=src;break ;} ;src=src[OxO93b9[34]];} ;var Ox1e3=Oxb9[OxO93b9[48]].item(0);Oxb9[OxO93b9[51]][OxO93b9[50]][OxO93b9[49]]=OxO93b9[58];Ox1e3[OxO93b9[52]]=OxO93b9[53]+Ox73b+OxO93b9[59];Oxb9[OxO93b9[55]]= new Function(OxO93b9[60]+Ox73b+OxO93b9[57]);} ;function Element_Contains(element,Ox182){if(!Browser_IsOpera()){if(element[OxO93b9[61]]){return element.contains(Ox182);} ;} ;for(;Ox182!=null;Ox182=Ox182[OxO93b9[34]]){if(element==Ox182){return true;} ;} ;return false;} ;function Element_SetUnselectable(element){element.setAttribute(OxO93b9[62],OxO93b9[63]);element.setAttribute(OxO93b9[64],OxO93b9[65]);var arr=Element_GetAllElements(element);var len=arr[OxO93b9[18]];if(!len){return ;} ;for(var i=0;i<len;i++){arr[i].setAttribute(OxO93b9[62],OxO93b9[63]);arr[i].setAttribute(OxO93b9[64],OxO93b9[65]);} ;} ;function Event_GetEvent(Ox242){Ox242=Event_FindEvent(Ox242);if(Ox242==null){Debug_Todo(OxO93b9[66]);} ;return Ox242;} ;function Frame_GetContentWindow(Ox346){if(Ox346[OxO93b9[67]]){return Ox346[OxO93b9[67]];} ;if(Ox346[OxO93b9[68]]){if(Ox346[OxO93b9[68]][OxO93b9[69]]){return Ox346[OxO93b9[68]][OxO93b9[69]];} ;} ;var Ox1a7;if(Ox346[OxO93b9[70]]){Ox1a7=window[OxO93b9[71]][Ox346[OxO93b9[70]]];if(Ox1a7){return Ox1a7;} ;} ;var len=window[OxO93b9[71]][OxO93b9[18]];for(var i=0;i<len;i++){Ox1a7=window[OxO93b9[71]][i];if(Ox1a7[OxO93b9[72]]==Ox346){return Ox1a7;} ;if(Ox1a7[OxO93b9[11]]==Ox346[OxO93b9[68]]){return Ox1a7;} ;} ;Debug_Todo(OxO93b9[73]);} ;function Array_IndexOf(arr,Ox244){for(var i=0;i<arr[OxO93b9[18]];i++){if(arr[i]==Ox244){return i;} ;} ;return -1;} ;function Array_Contains(arr,Ox244){return Array_IndexOf(arr,Ox244)!=-1;} ;function Event_FindEvent(Ox242){if(Ox242&&Ox242[OxO93b9[74]]){return Ox242;} ;if(Browser_IsGecko()){return Event_FindEvent_FindEventFromCallers();} else {if(window[OxO93b9[33]]){return window[OxO93b9[33]];} ;return Event_FindEvent_FindEventFromWindows();} ;return null;} ;function Event_FindEvent_FindEventFromCallers(){var Ox18e=Event_GetEvent[OxO93b9[23]];for(var i=0;i<100;i++){if(!Ox18e){break ;} ;var Ox242=Ox18e[OxO93b9[38]][0];if(Ox242&&Ox242[OxO93b9[74]]){return Ox242;} ;Ox18e=Ox18e[OxO93b9[23]];} ;} ;function Event_FindEvent_FindEventFromWindows(){var arr=[];return Ox24b(window);function Ox24b(Ox1a7){if(Ox1a7==null){return null;} ;if(Ox1a7[OxO93b9[33]]){return Ox1a7[OxO93b9[33]];} ;if(Array_Contains(arr,Ox1a7)){return null;} ;arr.push(Ox1a7);var Ox24c=[];if(Ox1a7[OxO93b9[75]]!=Ox1a7){Ox24c.push(Ox1a7.parent);} ;if(Ox1a7[OxO93b9[76]]!=Ox1a7[OxO93b9[75]]){Ox24c.push(Ox1a7.top);} ;if(Ox1a7[OxO93b9[77]]){Ox24c.push(Ox1a7.opener);} ;for(var i=0;i<Ox1a7[OxO93b9[71]][OxO93b9[18]];i++){Ox24c.push(Ox1a7[OxO93b9[71]][i]);} ;for(var i=0;i<Ox24c[OxO93b9[18]];i++){try{var Ox242=Ox24b(Ox24c[i]);if(Ox242){return Ox242;} ;} catch(x){} ;} ;return null;} ;} ;function include(Oxc8,Ox286){var Ox287=document.getElementsByTagName(OxO93b9[78]).item(0);var Ox288=document.getElementById(Oxc8);if(Ox288){Ox287.removeChild(Ox288);} ;var Ox289=document.createElement(OxO93b9[79]);Ox289.setAttribute(OxO93b9[80],OxO93b9[81]);Ox289.setAttribute(OxO93b9[82],OxO93b9[83]);Ox289.setAttribute(OxO93b9[84],Ox286);Ox289.setAttribute(OxO93b9[70],Oxc8);Ox287.appendChild(Ox289);} ;function Event_GetSrcElement(Ox242){Ox242=Event_GetEvent(Ox242);if(Ox242[OxO93b9[85]]){return Ox242[OxO93b9[85]];} ;if(Ox242[OxO93b9[39]]){return Ox242[OxO93b9[39]];} ;Debug_Todo(OxO93b9[86]);return null;} ;function Event_GetFromElement(Ox242){Ox242=Event_GetEvent(Ox242);if(Ox242[OxO93b9[87]]){return Ox242[OxO93b9[87]];} ;if(Ox242[OxO93b9[88]]){return Ox242[OxO93b9[88]];} ;return null;} ;function Event_GetToElement(Ox242){Ox242=Event_GetEvent(Ox242);if(Ox242[OxO93b9[89]]){return Ox242[OxO93b9[89]];} ;if(Ox242[OxO93b9[88]]){return Ox242[OxO93b9[88]];} ;return null;} ;function Event_GetKeyCode(Ox242){Ox242=Event_GetEvent(Ox242);return Ox242[OxO93b9[90]];} ;function Event_GetClientX(Ox242){Ox242=Event_GetEvent(Ox242);return Ox242[OxO93b9[91]];} ;function Event_GetClientY(Ox242){Ox242=Event_GetEvent(Ox242);return Ox242[OxO93b9[92]];} ;function Event_GetOffsetX(Ox242){Ox242=Event_GetEvent(Ox242);return Ox242[OxO93b9[93]];} ;function Event_GetOffsetY(Ox242){Ox242=Event_GetEvent(Ox242);return Ox242[OxO93b9[94]];} ;function Event_IsLeftButton(Ox242){Ox242=Event_GetEvent(Ox242);if(Browser_IsWinIE()){return Ox242[OxO93b9[95]]==1;} ;if(Browser_IsGecko()){return Ox242[OxO93b9[95]]==0;} ;return Ox242[OxO93b9[95]]==0;} ;function Event_IsCtrlKey(Ox242){Ox242=Event_GetEvent(Ox242);return Ox242[OxO93b9[96]];} ;function Event_IsAltKey(Ox242){Ox242=Event_GetEvent(Ox242);return Ox242[OxO93b9[97]];} ;function Event_IsShiftKey(Ox242){Ox242=Event_GetEvent(Ox242);return Ox242[OxO93b9[98]];} ;function Event_PreventDefault(Ox242){Ox242=Event_GetEvent(Ox242);Ox242[OxO93b9[29]]=false;if(Ox242[OxO93b9[74]]){Ox242.preventDefault();} ;} ;function Event_CancelBubble(Ox242){Ox242=Event_GetEvent(Ox242);Ox242[OxO93b9[99]]=true;if(Ox242[OxO93b9[100]]){Ox242.stopPropagation();} ;return false;} ;function Event_CancelEvent(Ox242){Ox242=Event_GetEvent(Ox242);Event_PreventDefault(Ox242);return Event_CancelBubble(Ox242);} ;function CuteEditor_BasicInitialize(editor){var Ox157=Browser_IsOpera();var Ox704= new Function(OxO93b9[101]);var Oxa31= new Function(OxO93b9[102]);var Oxa32= new Function(OxO93b9[103]);var Oxa33=editor.GetScriptProperty(OxO93b9[104]);var Oxa34=editor.GetScriptProperty(OxO93b9[105]);var Oxa35=Oxa33+OxO93b9[106]+Oxa34+OxO93b9[107];var Oxa36=Oxa33+OxO93b9[108];var images=editor.getElementsByTagName(OxO93b9[109]);var len=images[OxO93b9[18]];for(var i=0;i<len;i++){var img=images[i];if(img.getAttribute(OxO93b9[110])&&!img.getAttribute(OxO93b9[111])){img.setAttribute(OxO93b9[111],img.getAttribute(OxO93b9[110]));} ;var Ox134=img.getAttribute(OxO93b9[112]);var Ox66c=img.getAttribute(OxO93b9[113]);if(!(Ox134||Ox66c)){continue ;} ;var Oxa37=img.getAttribute(OxO93b9[114]);if(parseInt(Oxa37)>=0){img[OxO93b9[50]][OxO93b9[115]]=OxO93b9[116];img[OxO93b9[50]][OxO93b9[117]]=OxO93b9[116];img[OxO93b9[84]]=Oxa36;img[OxO93b9[50]][OxO93b9[118]]=OxO93b9[119]+Oxa35+OxO93b9[120];img[OxO93b9[50]][OxO93b9[121]]=OxO93b9[122]+(Oxa37*20)+OxO93b9[123];img[OxO93b9[50]][OxO93b9[49]]=OxO93b9[17];} ;if(!Ox134&&!Ox66c){if(Ox157){img[OxO93b9[124]]=CuteEditor_OperaHandleImageLoaded;} ;continue ;} ;if(img[OxO93b9[125]]!=OxO93b9[126]){img[OxO93b9[125]]=OxO93b9[127];img[OxO93b9[128]]= new Function(OxO93b9[129]);img[OxO93b9[130]]= new Function(OxO93b9[131]);img[OxO93b9[132]]= new Function(OxO93b9[133]);img[OxO93b9[134]]= new Function(OxO93b9[135]);} ;if(!img[OxO93b9[136]]){img[OxO93b9[136]]=Event_CancelEvent;} ;if(!img[OxO93b9[137]]){img[OxO93b9[137]]=Event_CancelEvent;} ;if(Ox134){var Ox18e=img.getAttribute(OxO93b9[138])==OxO93b9[36]?Oxa31:Ox704;if(img[OxO93b9[55]]==null){img[OxO93b9[55]]=Ox18e;} ;if(img[OxO93b9[139]]==null){img[OxO93b9[139]]=Ox18e;} ;} else {if(Ox66c){if(img[OxO93b9[55]]==null){img[OxO93b9[55]]=Oxa32;} ;} ;} ;} ;var Ox771=Window_GetElement(window,editor.GetScriptProperty(OxO93b9[140]),true);var Ox772=Window_GetElement(window,editor.GetScriptProperty(OxO93b9[141]),true);var Ox76d=Window_GetElement(window,editor.GetScriptProperty(OxO93b9[142]),true);Ox76d[OxO93b9[125]]+=OxO93b9[143];Ox771[OxO93b9[125]]+=OxO93b9[144];Ox772[OxO93b9[125]]+=OxO93b9[144];Element_SetUnselectable(Ox771);Element_SetUnselectable(Ox772);try{editor[OxO93b9[50]][OxO93b9[145]]=OxO93b9[146];} catch(x){} ;var Ox7f4=editor.GetScriptProperty(OxO93b9[147]);switch(Ox7f4){case OxO93b9[148]:Ox771[OxO93b9[50]][OxO93b9[49]]=OxO93b9[17];break ;;case OxO93b9[149]:Ox772[OxO93b9[50]][OxO93b9[49]]=OxO93b9[17];break ;;case OxO93b9[150]:break ;;} ;} ;function CuteEditor_OperaHandleImageLoaded(){var img=this;if(img[OxO93b9[50]][OxO93b9[49]]){img[OxO93b9[50]][OxO93b9[49]]=OxO93b9[58];setTimeout(function Oxa39(){img[OxO93b9[50]][OxO93b9[49]]=OxO93b9[17];} ,1);} ;} ;function CuteEditor_ButtonOver(element){if(!element[OxO93b9[151]]){element[OxO93b9[136]]=Event_CancelEvent;element[OxO93b9[130]]=CuteEditor_ButtonOut;element[OxO93b9[132]]=CuteEditor_ButtonDown;element[OxO93b9[134]]=CuteEditor_ButtonUp;Element_SetUnselectable(element);element[OxO93b9[151]]=true;} ;element[OxO93b9[152]]=true;element[OxO93b9[125]]=OxO93b9[153];} ;function CuteEditor_ButtonOut(){var element=this;element[OxO93b9[125]]=OxO93b9[127];element[OxO93b9[152]]=false;} ;function CuteEditor_ButtonDown(){if(!Event_IsLeftButton()){return ;} ;var element=this;element[OxO93b9[125]]=OxO93b9[154];} ;function CuteEditor_ButtonUp(){if(!Event_IsLeftButton()){return ;} ;var element=this;if(element[OxO93b9[152]]){element[OxO93b9[125]]=OxO93b9[153];} else {element[OxO93b9[125]]=OxO93b9[155];} ;} ;function CuteEditor_ColorPicker_ButtonOver(element){if(!element[OxO93b9[151]]){element[OxO93b9[136]]=Event_CancelEvent;element[OxO93b9[130]]=CuteEditor_ColorPicker_ButtonOut;element[OxO93b9[132]]=CuteEditor_ColorPicker_ButtonDown;Element_SetUnselectable(element);element[OxO93b9[151]]=true;} ;element[OxO93b9[152]]=true;element[OxO93b9[50]][OxO93b9[156]]=OxO93b9[157];element[OxO93b9[50]][OxO93b9[158]]=OxO93b9[159];element[OxO93b9[50]][OxO93b9[160]]=OxO93b9[161];} ;function CuteEditor_ColorPicker_ButtonOut(){var element=this;element[OxO93b9[152]]=false;element[OxO93b9[50]][OxO93b9[156]]=OxO93b9[162];element[OxO93b9[50]][OxO93b9[158]]=OxO93b9[17];element[OxO93b9[50]][OxO93b9[160]]=OxO93b9[161];} ;function CuteEditor_ColorPicker_ButtonDown(){var element=this;element[OxO93b9[50]][OxO93b9[156]]=OxO93b9[163];element[OxO93b9[50]][OxO93b9[158]]=OxO93b9[17];element[OxO93b9[50]][OxO93b9[160]]=OxO93b9[161];} ;function CuteEditor_ButtonCommandOver(element){element[OxO93b9[152]]=true;if(element[OxO93b9[164]]){element[OxO93b9[125]]=OxO93b9[165];} else {element[OxO93b9[125]]=OxO93b9[153];} ;} ;function CuteEditor_ButtonCommandOut(element){element[OxO93b9[152]]=false;if(element[OxO93b9[166]]){element[OxO93b9[125]]=OxO93b9[167];} else {if(element[OxO93b9[164]]){element[OxO93b9[125]]=OxO93b9[165];} else {if(element[OxO93b9[70]]!=OxO93b9[168]){element[OxO93b9[125]]=OxO93b9[127];} ;} ;} ;} ;function CuteEditor_ButtonCommandDown(element){if(!Event_IsLeftButton()){return ;} ;element[OxO93b9[125]]=OxO93b9[154];} ;function CuteEditor_ButtonCommandUp(element){if(!Event_IsLeftButton()){return ;} ;if(element[OxO93b9[164]]){element[OxO93b9[125]]=OxO93b9[165];return ;} ;if(element[OxO93b9[152]]){element[OxO93b9[125]]=OxO93b9[153];} else {if(element[OxO93b9[166]]){element[OxO93b9[125]]=OxO93b9[167];} else {element[OxO93b9[125]]=OxO93b9[127];} ;} ;} ;var CuteEditorGlobalFunctions=[CuteEditor_GetEditor,CuteEditor_ButtonOver,CuteEditor_ButtonOut,CuteEditor_ButtonDown,CuteEditor_ButtonUp,CuteEditor_ColorPicker_ButtonOver,CuteEditor_ColorPicker_ButtonOut,CuteEditor_ColorPicker_ButtonDown,CuteEditor_ButtonCommandOver,CuteEditor_ButtonCommandOut,CuteEditor_ButtonCommandDown,CuteEditor_ButtonCommandUp,CuteEditor_DropDownCommand,CuteEditor_ExpandTreeDropDownItem,CuteEditor_CollapseTreeDropDownItem,CuteEditor_OnInitialized,CuteEditor_OnCommand,CuteEditor_OnChange,CuteEditor_AddVerbMenuItems,CuteEditor_AddTagMenuItems,CuteEditor_AddMainMenuItems,CuteEditor_AddDropMenuItems,CuteEditor_FilterCode,CuteEditor_FilterHTML];function SetupCuteEditorGlobalFunctions(){for(var i=0;i<CuteEditorGlobalFunctions[OxO93b9[18]];i++){var Ox18e=CuteEditorGlobalFunctions[i];var name=Ox18e+OxO93b9[17];name=name.substr(8,name.indexOf(OxO93b9[169])-8).replace(/\s/g,OxO93b9[17]);if(!window[name]){window[name]=Ox18e;} ;} ;} ;SetupCuteEditorGlobalFunctions();var __danainfo=null;var danaurl=window[OxO93b9[171]][OxO93b9[170]];var danapos=danaurl.indexOf(OxO93b9[172]);if(danapos!=-1){var pluspos1=danaurl.indexOf(OxO93b9[173],danapos+10);var pluspos2=danaurl.indexOf(OxO93b9[174],danapos+10);if(pluspos1!=-1&&pluspos1<pluspos2){pluspos2=pluspos1;} ;__danainfo=danaurl.substring(danapos,pluspos2)+OxO93b9[174];} ;function CuteEditor_GetScriptProperty(name){var Ox141=this[OxO93b9[175]][name];if(Ox141&&__danainfo){if(name==OxO93b9[104]){return Ox141+__danainfo;} ;var Ox37f=this[OxO93b9[175]][OxO93b9[104]];if(Ox141.substr(0,Ox37f.length)==Ox37f){return Ox37f+__danainfo+Ox141.substring(Ox37f.length);} ;} ;return Ox141;} ;function CuteEditor_SetScriptProperty(name,Ox141){if(Ox141==null){this[OxO93b9[175]][name]=null;} else {this[OxO93b9[175]][name]=String(Ox141);} ;} ;function CuteEditorInitialize(Oxa44,Oxa45){var editor=Window_GetElement(window,Oxa44,true);if(editor[OxO93b9[176]]){return ;} ;editor[OxO93b9[176]]=1;editor[OxO93b9[175]]=Oxa45;editor[OxO93b9[177]]=CuteEditor_GetScriptProperty;var Ox76d=Window_GetElement(window,editor.GetScriptProperty(OxO93b9[142]),true);var editwin,editdoc;try{editwin=Frame_GetContentWindow(Ox76d);editdoc=editwin[OxO93b9[11]];} catch(x){} ;var Oxa46=false;var Oxa47;var Oxa48=false;var Oxa49=editor.GetScriptProperty(OxO93b9[104])+OxO93b9[178]+editor.GetScriptProperty(OxO93b9[179]);function Oxa4a(){if( typeof (window[OxO93b9[180]])==OxO93b9[181]){return ;} ;LoadXMLAsync(OxO93b9[182],Oxa49+OxO93b9[183]+ new Date().getTime(),Oxa4b);} ;function Oxa4b(Ox28e){var Ox87e= new Date().getTime();if(Ox28e[OxO93b9[184]]!=200){} else {Ox87e=Ox28e[OxO93b9[185]];} ;LoadXMLAsync(OxO93b9[186],Oxa49+OxO93b9[187]+Ox87e,Oxa4c);} ;function Oxa4c(Ox28e){if(Ox28e[OxO93b9[184]]!=200){return ;} ;CuteEditorInstallScriptCode(Ox28e.responseText,OxO93b9[180]);if(Oxa46){Oxa4d();} ;} ;function Oxa4d(){if(Oxa48){return ;} ;Oxa48=true;try{editor[OxO93b9[50]][OxO93b9[145]]=OxO93b9[17];} catch(x){} ;try{editdoc[OxO93b9[188]][OxO93b9[50]][OxO93b9[145]]=OxO93b9[17];} catch(x){} ;Ox76d[OxO93b9[50]][OxO93b9[49]]=OxO93b9[189];if(Browser_IsOpera()){editdoc[OxO93b9[188]][OxO93b9[190]]=true;} else {} ;window.CuteEditorImplementation(editor);var Oxa4e=editor.GetScriptProperty(OxO93b9[191]);if(Oxa4e){editor.Eval(Oxa4e);} ;} ;function Oxa4f(){if(!Element_Contains(window[OxO93b9[11]].body,editor)){return ;} ;try{Ox76d=Window_GetElement(window,editor.GetScriptProperty(OxO93b9[142]),true);editwin=Frame_GetContentWindow(Ox76d);editdoc=editwin[OxO93b9[11]];var y=editdoc[OxO93b9[188]];} catch(x){setTimeout(Oxa4f,100);return ;} ;if(!editdoc[OxO93b9[188]]){setTimeout(Oxa4f,100);return ;} ;if(!Oxa46){Oxa46=true;setTimeout(Oxa4f,50);return ;} ;if( typeof (window[OxO93b9[180]])==OxO93b9[181]){Oxa4d();} else {try{editdoc[OxO93b9[188]][OxO93b9[50]][OxO93b9[145]]=OxO93b9[146];} catch(x){} ;} ;} ;var Oxa50=0;var Ox43=CuteEditor_Find_DisplayNone(editor);if(Ox43){function Oxa51(){if(Ox43[OxO93b9[50]][OxO93b9[49]]!=OxO93b9[58]){window.clearInterval(Oxa50);Oxa50=OxO93b9[17];editor[OxO93b9[176]]=false;CuteEditorInitialize(Oxa44,Oxa45);} ;} ;Oxa50=setInterval(Oxa51,1000);} else {CuteEditor_BasicInitialize(editor);Oxa4a();Oxa4f();} ;function CuteEditor_Find_DisplayNone(element){var Oxa53;for(var Ox43=element;Ox43!=null;Ox43=Ox43[OxO93b9[34]]){if(Ox43[OxO93b9[50]]&&Ox43[OxO93b9[50]][OxO93b9[49]]==OxO93b9[58]){Oxa53=Ox43;break ;} ;} ;return Oxa53;} ;} ;function CuteEditorInstallScriptCode(Ox9a9,Ox9aa){eval(Ox9a9);window[Ox9aa]=eval(Ox9aa);} ;window[OxO93b9[192]]=CuteEditorInitialize;