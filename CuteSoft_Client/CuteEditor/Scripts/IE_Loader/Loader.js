var OxO482c=["undefined","Microsoft.XMLHTTP","readyState","onreadystatechange","","document","length","element \x27","\x27 not found","returnValue","preventDefault","cancelBubble","stopPropagation","onchange","oninitialized","command","commandui","commandvalue","oncommand","string","_fireEventFunction","event","parentNode","_IsCuteEditor","True","readOnly","_IsRichDropDown","null","value","selectedIndex","nodeName","TR","cells","display","style","nextSibling","innerHTML","\x3Cimg src=\x22","/Load.ashx?type=image\x26file=t-minus.gif\x22\x3E","onclick","CuteEditor_CollapseTreeDropDownItem(this,\x22","\x22)","none","/Load.ashx?type=image\x26file=t-plus.gif\x22\x3E","CuteEditor_ExpandTreeDropDownItem(this,\x22","//TODO: event not found? throw error ?","all","UNSELECTABLE","on","tabIndex","-1","contentWindow","contentDocument","parentWindow","id","frames","frameElement","//TODO:frame contentWindow not found?","head","script","language","javascript","type","text/javascript","src","caller","arguments","parent","top","opener","srcElement","target","//TODO: srcElement not found? throw error ?","fromElement","relatedTarget","toElement","keyCode","clientX","clientY","offsetX","offsetY","button","ctrlKey","altKey","shiftKey","CuteEditor_GetEditor(this).ExecImageCommand(this.getAttribute(\x27Command\x27),this.getAttribute(\x27CommandUI\x27),this.getAttribute(\x27CommandArgument\x27),this)","CuteEditor_GetEditor(this).PostBack(this.getAttribute(\x27Command\x27))","this.onmouseout();CuteEditor_GetEditor(this).DropMenu(this.getAttribute(\x27Group\x27),this)","ResourceDir","Theme","/Load.ashx?type=theme\x26theme=","\x26file=all.png","/Images/blank2020.gif","IMG","alt","title","Command","Group","ThemeIndex","width","20px","height","backgroundImage","url(",")","backgroundPosition","0 -","px","className","separator","CuteEditorButton","onmouseover","CuteEditor_ButtonCommandOver(this)","onmouseout","CuteEditor_ButtonCommandOut(this)","onmousedown","CuteEditor_ButtonCommandDown(this)","onmouseup","CuteEditor_ButtonCommandUp(this)","oncontextmenu","ondragstart","PostBack","ondblclick","_ToolBarID","_CodeViewToolBarID","_FrameID"," CuteEditorFrame"," CuteEditorToolbar","buttonInitialized","isover","CuteEditorButtonOver","CuteEditorButtonDown","CuteEditorDown","border","solid 1px #0A246A","backgroundColor","#b6bdd2","padding","1px","solid 1px #f5f5f4","inset 1px","IsCommandDisabled","CuteEditorButtonDisabled","IsCommandActive","CuteEditorButtonActive","(","href","location",",DanaInfo=",",","+","scriptProperties","GetScriptProperty","/Load.ashx?type=scripts\x26file=IE_Implementation\x26culture=","Culture","/Load.ashx?type=scripts\x26file=EditorExtension\x26culture=","CuteEditorImplementation","function","POST","\x26getModified=1\x26_temp=","loadScript","status","responseText","GET","\x26modified=","Failed to load impl code!","block","contentEditable","body","cursor","InitializeCode","no-drop","CuteEditorInitialize"];function CreateXMLHttpRequest(){try{if( typeof (XMLHttpRequest)!=OxO482c[0]){return  new XMLHttpRequest();} ;if( typeof (ActiveXObject)!=OxO482c[0]){return  new ActiveXObject(OxO482c[1]);} ;} catch(x){return null;} ;} ;function LoadXMLAsync(Oxa29,Ox286,Ox231,Oxa2a){var Oxe6=CreateXMLHttpRequest();function Oxa2b(){if(Oxe6[OxO482c[2]]!=4){return ;} ;Oxe6[OxO482c[3]]= new Function();var Ox28e=Oxe6;Oxe6=null;Ox231(Ox28e);} ;Oxe6[OxO482c[3]]=Oxa2b;Oxe6.open(Oxa29,Ox286,true);Oxe6.send(Oxa2a||OxO482c[4]);} ;function Window_GetElement(Ox1a7,Ox99,Ox23c){var Ox29=Ox1a7[OxO482c[5]].getElementById(Ox99);if(Ox29){return Ox29;} ;var Ox31=Ox1a7[OxO482c[5]].getElementsByName(Ox99);if(Ox31[OxO482c[6]]>0){return Ox31.item(0);} ;if(Ox23c){throw ( new Error(OxO482c[7]+Ox99+OxO482c[8]));} ;return null;} ;function Event_PreventDefault(Ox242){Ox242=Event_GetEvent(Ox242);Ox242[OxO482c[9]]=false;if(Ox242[OxO482c[10]]){Ox242.preventDefault();} ;} ;function Event_CancelBubble(Ox242){Ox242=Event_GetEvent(Ox242);Ox242[OxO482c[11]]=true;if(Ox242[OxO482c[12]]){Ox242.stopPropagation();} ;return false;} ;function Event_CancelEvent(Ox242){Ox242=Event_GetEvent(Ox242);Event_PreventDefault(Ox242);return Event_CancelBubble(Ox242);} ;function CuteEditor_AddMainMenuItems(Ox665){} ;function CuteEditor_AddDropMenuItems(Ox665,Ox66c){} ;function CuteEditor_AddTagMenuItems(Ox665,Ox66e){} ;function CuteEditor_AddVerbMenuItems(Ox665,Ox66e){} ;function CuteEditor_OnInitialized(editor){} ;function CuteEditor_OnCommand(editor,Ox4d,Ox4e,Ox4f){} ;function CuteEditor_OnChange(editor){} ;function CuteEditor_FilterCode(editor,Ox268){return Ox268;} ;function CuteEditor_FilterHTML(editor,Ox280){return Ox280;} ;function CuteEditor_FireChange(editor){window.CuteEditor_OnChange(editor);CuteEditor_FireEvent(editor,OxO482c[13],null);} ;function CuteEditor_FireInitialized(editor){window.CuteEditor_OnInitialized(editor);CuteEditor_FireEvent(editor,OxO482c[14],null);} ;function CuteEditor_FireCommand(editor,Ox4d,Ox4e,Ox4f){var Ox13d=window.CuteEditor_OnCommand(editor,Ox4d,Ox4e,Ox4f);if(Ox13d==true){return true;} ;var Ox677={};Ox677[OxO482c[15]]=Ox4d;Ox677[OxO482c[16]]=Ox4e;Ox677[OxO482c[17]]=Ox4f;Ox677[OxO482c[9]]=true;CuteEditor_FireEvent(editor,OxO482c[18],Ox677);if(Ox677[OxO482c[9]]==false){return true;} ;} ;function CuteEditor_FireEvent(editor,Ox679,Ox67a){if(Ox67a==null){Ox67a={};} ;var Ox67b=editor.getAttribute(Ox679);if(Ox67b){if( typeof (Ox67b)==OxO482c[19]){editor[OxO482c[20]]= new Function(OxO482c[21],Ox67b);} else {editor[OxO482c[20]]=Ox67b;} ;editor._fireEventFunction(Ox67a);} ;} ;function CuteEditor_GetEditor(element){for(var Ox43=element;Ox43!=null;Ox43=Ox43[OxO482c[22]]){if(Ox43.getAttribute(OxO482c[23])==OxO482c[24]){return Ox43;} ;} ;return null;} ;function CuteEditor_DropDownCommand(element,Oxa2d){var editor=CuteEditor_GetEditor(element);if(editor[OxO482c[25]]){return ;} ;if(element.getAttribute(OxO482c[26])==OxO482c[24]){var Ox141=element.GetValue();if(Ox141==OxO482c[27]){Ox141=OxO482c[4];} ;var Ox200=element.GetText();if(Ox200==OxO482c[27]){Ox200=OxO482c[4];} ;element.SetSelectedIndex(0);editor.ExecCommand(Oxa2d,false,Ox141,Ox200);} else {if(!editor[OxO482c[25]]&&element[OxO482c[28]]){var Ox141=element[OxO482c[28]];if(Ox141==OxO482c[27]){Ox141=OxO482c[4];} ;element[OxO482c[29]]=0;editor.ExecCommand(Oxa2d,false,Ox141,Ox200);} else {element[OxO482c[29]]=0;} ;} ;editor.FocusDocument();} ;function CuteEditor_ExpandTreeDropDownItem(src,Ox73b){var Oxb9=null;while(src!=null){if(src[OxO482c[30]]==OxO482c[31]){Oxb9=src;break ;} ;src=src[OxO482c[22]];} ;var Ox1e3=Oxb9[OxO482c[32]].item(0);Oxb9[OxO482c[35]][OxO482c[34]][OxO482c[33]]=OxO482c[4];Ox1e3[OxO482c[36]]=OxO482c[37]+Ox73b+OxO482c[38];Oxb9[OxO482c[39]]= new Function(OxO482c[40]+Ox73b+OxO482c[41]);} ;function CuteEditor_CollapseTreeDropDownItem(src,Ox73b){var Oxb9=null;while(src!=null){if(src[OxO482c[30]]==OxO482c[31]){Oxb9=src;break ;} ;src=src[OxO482c[22]];} ;var Ox1e3=Oxb9[OxO482c[32]].item(0);Oxb9[OxO482c[35]][OxO482c[34]][OxO482c[33]]=OxO482c[42];Ox1e3[OxO482c[36]]=OxO482c[37]+Ox73b+OxO482c[43];Oxb9[OxO482c[39]]= new Function(OxO482c[44]+Ox73b+OxO482c[41]);} ;function Event_GetEvent(Ox242){Ox242=Event_FindEvent(Ox242);if(Ox242==null){Debug_Todo(OxO482c[45]);} ;return Ox242;} ;function Element_GetAllElements(p){var arr=[];for(var i=0;i<p[OxO482c[46]][OxO482c[6]];i++){arr.push(p[OxO482c[46]].item(i));} ;return arr;} ;function Element_SetUnselectable(element){element.setAttribute(OxO482c[47],OxO482c[48]);element.setAttribute(OxO482c[49],OxO482c[50]);var arr=Element_GetAllElements(element);var len=arr[OxO482c[6]];if(!len){return ;} ;for(var i=0;i<len;i++){arr[i].setAttribute(OxO482c[47],OxO482c[48]);arr[i].setAttribute(OxO482c[49],OxO482c[50]);} ;} ;function Frame_GetContentWindow(Ox346){if(Ox346[OxO482c[51]]){return Ox346[OxO482c[51]];} ;if(Ox346[OxO482c[52]]){if(Ox346[OxO482c[52]][OxO482c[53]]){return Ox346[OxO482c[52]][OxO482c[53]];} ;} ;var Ox1a7;if(Ox346[OxO482c[54]]){Ox1a7=window[OxO482c[55]][Ox346[OxO482c[54]]];if(Ox1a7){return Ox1a7;} ;} ;var len=window[OxO482c[55]][OxO482c[6]];for(var i=0;i<len;i++){Ox1a7=window[OxO482c[55]][i];if(Ox1a7[OxO482c[56]]==Ox346){return Ox1a7;} ;if(Ox1a7[OxO482c[5]]==Ox346[OxO482c[52]]){return Ox1a7;} ;} ;Debug_Todo(OxO482c[57]);} ;function Array_IndexOf(arr,Ox244){for(var i=0;i<arr[OxO482c[6]];i++){if(arr[i]==Ox244){return i;} ;} ;return -1;} ;function Array_Contains(arr,Ox244){return Array_IndexOf(arr,Ox244)!=-1;} ;function clearArray(Ox247){for(var i=0;i<Ox247[OxO482c[6]];i++){Ox247[i]=null;} ;} ;function Event_FindEvent(Ox242){if(Ox242&&Ox242[OxO482c[10]]){return Ox242;} ;if(window[OxO482c[21]]){return window[OxO482c[21]];} ;return Event_FindEvent_FindEventFromWindows();} ;function include(Oxc8,Ox286){var Ox287=document.getElementsByTagName(OxO482c[58]).item(0);var Ox288=document.getElementById(Oxc8);if(Ox288){Ox287.removeChild(Ox288);} ;var Ox289=document.createElement(OxO482c[59]);Ox289.setAttribute(OxO482c[60],OxO482c[61]);Ox289.setAttribute(OxO482c[62],OxO482c[63]);Ox289.setAttribute(OxO482c[64],Ox286);Ox289.setAttribute(OxO482c[54],Oxc8);Ox287.appendChild(Ox289);} ;function Event_FindEvent_FindEventFromCallers(){var Ox18e=Event_GetEvent[OxO482c[65]];for(var i=0;i<100;i++){if(!Ox18e){break ;} ;var Ox242=Ox18e[OxO482c[66]][0];if(Ox242&&Ox242[OxO482c[10]]){return Ox242;} ;Ox18e=Ox18e[OxO482c[65]];} ;} ;function Event_FindEvent_FindEventFromWindows(){var arr=[];return Ox24b(window);function Ox24b(Ox1a7){if(Ox1a7==null){return null;} ;if(Ox1a7[OxO482c[21]]){return Ox1a7[OxO482c[21]];} ;if(Array_Contains(arr,Ox1a7)){return null;} ;arr.push(Ox1a7);var Ox24c=[];if(Ox1a7[OxO482c[67]]!=Ox1a7){Ox24c.push(Ox1a7.parent);} ;if(Ox1a7[OxO482c[68]]!=Ox1a7[OxO482c[67]]){Ox24c.push(Ox1a7.top);} ;if(Ox1a7[OxO482c[69]]){Ox24c.push(Ox1a7.opener);} ;for(var i=0;i<Ox1a7[OxO482c[55]][OxO482c[6]];i++){Ox24c.push(Ox1a7[OxO482c[55]][i]);} ;for(var i=0;i<Ox24c[OxO482c[6]];i++){try{var Ox242=Ox24b(Ox24c[i]);if(Ox242){return Ox242;} ;} catch(x){} ;} ;return null;} ;} ;function Event_GetSrcElement(Ox242){Ox242=Event_GetEvent(Ox242);if(Ox242[OxO482c[70]]){return Ox242[OxO482c[70]];} ;if(Ox242[OxO482c[71]]){return Ox242[OxO482c[71]];} ;Debug_Todo(OxO482c[72]);return null;} ;function Event_GetFromElement(Ox242){Ox242=Event_GetEvent(Ox242);if(Ox242[OxO482c[73]]){return Ox242[OxO482c[73]];} ;if(Ox242[OxO482c[74]]){return Ox242[OxO482c[74]];} ;return null;} ;function Event_GetToElement(Ox242){Ox242=Event_GetEvent(Ox242);if(Ox242[OxO482c[75]]){return Ox242[OxO482c[75]];} ;if(Ox242[OxO482c[74]]){return Ox242[OxO482c[74]];} ;return null;} ;function Event_GetKeyCode(Ox242){Ox242=Event_GetEvent(Ox242);return Ox242[OxO482c[76]];} ;function Event_GetClientX(Ox242){Ox242=Event_GetEvent(Ox242);return Ox242[OxO482c[77]];} ;function Event_GetClientY(Ox242){Ox242=Event_GetEvent(Ox242);return Ox242[OxO482c[78]];} ;function Event_GetOffsetX(Ox242){Ox242=Event_GetEvent(Ox242);return Ox242[OxO482c[79]];} ;function Event_GetOffsetY(Ox242){Ox242=Event_GetEvent(Ox242);return Ox242[OxO482c[80]];} ;function Event_IsLeftButton(Ox242){Ox242=Event_GetEvent(Ox242);return Ox242[OxO482c[81]]==1;} ;function Event_IsCtrlKey(Ox242){Ox242=Event_GetEvent(Ox242);return Ox242[OxO482c[82]];} ;function Event_IsAltKey(Ox242){Ox242=Event_GetEvent(Ox242);return Ox242[OxO482c[83]];} ;function Event_IsShiftKey(Ox242){Ox242=Event_GetEvent(Ox242);return Ox242[OxO482c[84]];} ;function CuteEditor_BasicInitialize(editor){var Ox704= new Function(OxO482c[85]);var Oxa31= new Function(OxO482c[86]);var Oxa32= new Function(OxO482c[87]);var Oxa33=editor.GetScriptProperty(OxO482c[88]);var Oxa34=editor.GetScriptProperty(OxO482c[89]);var Oxa35=Oxa33+OxO482c[90]+Oxa34+OxO482c[91];var Oxa36=Oxa33+OxO482c[92];var images=editor.getElementsByTagName(OxO482c[93]);var len=images[OxO482c[6]];for(var i=0;i<len;i++){var img=images[i];if(img.getAttribute(OxO482c[94])&&!img.getAttribute(OxO482c[95])){img.setAttribute(OxO482c[95],img.getAttribute(OxO482c[94]));} ;var Ox134=img.getAttribute(OxO482c[96]);var Ox66c=img.getAttribute(OxO482c[97]);if(!(Ox134||Ox66c)){continue ;} ;var Oxa37=img.getAttribute(OxO482c[98]);if(parseInt(Oxa37)>=0){img[OxO482c[34]][OxO482c[99]]=OxO482c[100];img[OxO482c[34]][OxO482c[101]]=OxO482c[100];img[OxO482c[64]]=Oxa36;img[OxO482c[34]][OxO482c[102]]=OxO482c[103]+Oxa35+OxO482c[104];img[OxO482c[34]][OxO482c[105]]=OxO482c[106]+(Oxa37*20)+OxO482c[107];img[OxO482c[34]][OxO482c[33]]=OxO482c[4];} ;if(img[OxO482c[108]]!=OxO482c[109]){img[OxO482c[108]]=OxO482c[110];img[OxO482c[111]]= new Function(OxO482c[112]);img[OxO482c[113]]= new Function(OxO482c[114]);img[OxO482c[115]]= new Function(OxO482c[116]);img[OxO482c[117]]= new Function(OxO482c[118]);} ;if(!img[OxO482c[119]]){img[OxO482c[119]]=Event_CancelEvent;} ;if(!img[OxO482c[120]]){img[OxO482c[120]]=Event_CancelEvent;} ;if(Ox134){var Ox18e=img.getAttribute(OxO482c[121])==OxO482c[24]?Oxa31:Ox704;if(img[OxO482c[39]]==null){img[OxO482c[39]]=Ox18e;} ;if(img[OxO482c[122]]==null){img[OxO482c[122]]=Ox18e;} ;} else {if(Ox66c){if(img[OxO482c[39]]==null){img[OxO482c[39]]=Oxa32;} ;} ;} ;} ;var Ox771=Window_GetElement(window,editor.GetScriptProperty(OxO482c[123]),true);var Ox772=Window_GetElement(window,editor.GetScriptProperty(OxO482c[124]),true);var Ox76d=Window_GetElement(window,editor.GetScriptProperty(OxO482c[125]),true);Ox76d[OxO482c[108]]+=OxO482c[126];Ox771[OxO482c[108]]+=OxO482c[127];Ox772[OxO482c[108]]+=OxO482c[127];Element_SetUnselectable(Ox771);Element_SetUnselectable(Ox772);} ;function CuteEditor_ButtonOver(element){if(!element[OxO482c[128]]){element[OxO482c[119]]=Event_CancelEvent;element[OxO482c[113]]=CuteEditor_ButtonOut;element[OxO482c[115]]=CuteEditor_ButtonDown;element[OxO482c[117]]=CuteEditor_ButtonUp;Element_SetUnselectable(element);element[OxO482c[128]]=true;} ;element[OxO482c[129]]=true;element[OxO482c[108]]=OxO482c[130];} ;function CuteEditor_ButtonOut(){var element=this;element[OxO482c[108]]=OxO482c[110];element[OxO482c[129]]=false;} ;function CuteEditor_ButtonDown(){if(!Event_IsLeftButton()){return ;} ;var element=this;element[OxO482c[108]]=OxO482c[131];} ;function CuteEditor_ButtonUp(){if(!Event_IsLeftButton()){return ;} ;var element=this;if(element[OxO482c[129]]){element[OxO482c[108]]=OxO482c[130];} else {element[OxO482c[108]]=OxO482c[132];} ;} ;function CuteEditor_ColorPicker_ButtonOver(element){if(!element[OxO482c[128]]){element[OxO482c[119]]=Event_CancelEvent;element[OxO482c[113]]=CuteEditor_ColorPicker_ButtonOut;element[OxO482c[115]]=CuteEditor_ColorPicker_ButtonDown;Element_SetUnselectable(element);element[OxO482c[128]]=true;} ;element[OxO482c[129]]=true;element[OxO482c[34]][OxO482c[133]]=OxO482c[134];element[OxO482c[34]][OxO482c[135]]=OxO482c[136];element[OxO482c[34]][OxO482c[137]]=OxO482c[138];} ;function CuteEditor_ColorPicker_ButtonOut(){var element=this;element[OxO482c[129]]=false;element[OxO482c[34]][OxO482c[133]]=OxO482c[139];element[OxO482c[34]][OxO482c[135]]=OxO482c[4];element[OxO482c[34]][OxO482c[137]]=OxO482c[138];} ;function CuteEditor_ColorPicker_ButtonDown(){var element=this;element[OxO482c[34]][OxO482c[133]]=OxO482c[140];element[OxO482c[34]][OxO482c[135]]=OxO482c[4];element[OxO482c[34]][OxO482c[137]]=OxO482c[138];} ;function CuteEditor_ButtonCommandOver(element){element[OxO482c[129]]=true;if(element[OxO482c[141]]){element[OxO482c[108]]=OxO482c[142];} else {element[OxO482c[108]]=OxO482c[130];} ;} ;function CuteEditor_ButtonCommandOut(element){element[OxO482c[129]]=false;if(element[OxO482c[143]]){element[OxO482c[108]]=OxO482c[144];} else {if(element[OxO482c[141]]){element[OxO482c[108]]=OxO482c[142];} else {element[OxO482c[108]]=OxO482c[110];} ;} ;} ;function CuteEditor_ButtonCommandDown(element){if(!Event_IsLeftButton()){return ;} ;element[OxO482c[108]]=OxO482c[131];} ;function CuteEditor_ButtonCommandUp(element){if(!Event_IsLeftButton()){return ;} ;if(element[OxO482c[141]]){element[OxO482c[108]]=OxO482c[142];return ;} ;if(element[OxO482c[129]]){element[OxO482c[108]]=OxO482c[130];} else {if(element[OxO482c[143]]){element[OxO482c[108]]=OxO482c[144];} else {element[OxO482c[108]]=OxO482c[110];} ;} ;} ;var CuteEditorGlobalFunctions=[CuteEditor_GetEditor,CuteEditor_ButtonOver,CuteEditor_ButtonOut,CuteEditor_ButtonDown,CuteEditor_ButtonUp,CuteEditor_ColorPicker_ButtonOver,CuteEditor_ColorPicker_ButtonOut,CuteEditor_ColorPicker_ButtonDown,CuteEditor_ButtonCommandOver,CuteEditor_ButtonCommandOut,CuteEditor_ButtonCommandDown,CuteEditor_ButtonCommandUp,CuteEditor_DropDownCommand,CuteEditor_ExpandTreeDropDownItem,CuteEditor_CollapseTreeDropDownItem,CuteEditor_OnInitialized,CuteEditor_OnCommand,CuteEditor_OnChange,CuteEditor_AddVerbMenuItems,CuteEditor_AddTagMenuItems,CuteEditor_AddMainMenuItems,CuteEditor_AddDropMenuItems,CuteEditor_FilterCode,CuteEditor_FilterHTML];function SetupCuteEditorGlobalFunctions(){for(var i=0;i<CuteEditorGlobalFunctions[OxO482c[6]];i++){var Ox18e=CuteEditorGlobalFunctions[i];var name=Ox18e+OxO482c[4];name=name.substr(8,name.indexOf(OxO482c[145])-8).replace(/\s/g,OxO482c[4]);if(!window[name]){window[name]=Ox18e;} ;} ;} ;SetupCuteEditorGlobalFunctions();var __danainfo=null;var danaurl=window[OxO482c[147]][OxO482c[146]];var danapos=danaurl.indexOf(OxO482c[148]);if(danapos!=-1){var pluspos1=danaurl.indexOf(OxO482c[149],danapos+10);var pluspos2=danaurl.indexOf(OxO482c[150],danapos+10);if(pluspos1!=-1&&pluspos1<pluspos2){pluspos2=pluspos1;} ;__danainfo=danaurl.substring(danapos,pluspos2)+OxO482c[150];} ;function CuteEditor_GetScriptProperty(name){var Ox141=this[OxO482c[151]][name];if(Ox141&&__danainfo){if(name==OxO482c[88]){return Ox141+__danainfo;} ;var Ox37f=this[OxO482c[151]][OxO482c[88]];if(Ox141.substr(0,Ox37f.length)==Ox37f){return Ox37f+__danainfo+Ox141.substring(Ox37f.length);} ;} ;return Ox141;} ;function CuteEditor_SetScriptProperty(name,Ox141){if(Ox141==null){this[OxO482c[151]][name]=null;} else {this[OxO482c[151]][name]=String(Ox141);} ;} ;function CuteEditorInitialize(Oxa44,Oxa45){var editor=Window_GetElement(window,Oxa44,true);editor[OxO482c[151]]=Oxa45;editor[OxO482c[152]]=CuteEditor_GetScriptProperty;var Ox76d=Window_GetElement(window,editor.GetScriptProperty(OxO482c[125]),true);var editwin=Frame_GetContentWindow(Ox76d);var editdoc=editwin[OxO482c[5]];var Oxa46=false;var Oxa47;var Oxa48=false;var Oxa49=editor.GetScriptProperty(OxO482c[88])+OxO482c[153]+editor.GetScriptProperty(OxO482c[154]);var Oxaca=editor.GetScriptProperty(OxO482c[88])+OxO482c[155]+editor.GetScriptProperty(OxO482c[154]);function Oxa4a(){if( typeof (window[OxO482c[156]])==OxO482c[157]){return ;} ;try{LoadXMLAsync(OxO482c[158],Oxa49+OxO482c[159]+ new Date().getTime(),Oxa4b);} catch(x){include(OxO482c[160],Oxa49);var Oxacb=setInterval(function (){if(window[OxO482c[156]]){clearInterval(Oxacb);if(Oxa46){Oxa4d();} ;} ;} ,100);} ;} ;function Oxa4b(Ox28e){var Ox87e= new Date().getTime();if(Ox28e[OxO482c[161]]!=200){} else {Ox87e=Ox28e[OxO482c[162]];} ;LoadXMLAsync(OxO482c[163],Oxa49+OxO482c[164]+Ox87e,Oxa4c);} ;function Oxa4c(Ox28e){if(Ox28e[OxO482c[161]]!=200){alert(OxO482c[165]);return ;} ;CuteEditorInstallScriptCode(Ox28e.responseText,OxO482c[156]);if(Oxa46){Oxa4d();} ;} ;function Oxa4d(){if(Oxa48){return ;} ;for(var Ox182=editor;Ox182&&Ox182[OxO482c[34]];Ox182=Ox182[OxO482c[22]]){if(Ox182[OxO482c[34]][OxO482c[33]]==OxO482c[42]){setTimeout(Oxa4d,100);return ;} ;} ;Oxa48=true;Ox76d[OxO482c[34]][OxO482c[33]]=OxO482c[166];editdoc[OxO482c[168]][OxO482c[167]]=true;window.CuteEditorImplementation(editor);try{editor[OxO482c[34]][OxO482c[169]]=OxO482c[4];} catch(x){} ;try{editdoc[OxO482c[168]][OxO482c[34]][OxO482c[169]]=OxO482c[4];} catch(x){} ;var Oxa4e=editor.GetScriptProperty(OxO482c[170]);if(Oxa4e){editor.Eval(Oxa4e);} ;} ;function Oxa4f(){if(!window[OxO482c[5]][OxO482c[168]].contains(editor)){return ;} ;try{Ox76d=Window_GetElement(window,editor.GetScriptProperty(OxO482c[125]),true);editwin=Frame_GetContentWindow(Ox76d);editdoc=editwin[OxO482c[5]];x=editdoc[OxO482c[168]];} catch(x){setTimeout(Oxa4f,100);return ;} ;if(!editdoc[OxO482c[168]]){setTimeout(Oxa4f,100);return ;} ;if(!Oxa46){Oxa46=true;setTimeout(Oxa4f,100);return ;} ;if( typeof (window[OxO482c[156]])==OxO482c[157]){Oxa4d();} else {try{editdoc[OxO482c[168]][OxO482c[34]][OxO482c[169]]=OxO482c[171];} catch(x){} ;} ;} ;CuteEditor_BasicInitialize(editor);Oxa4a();Oxa4f();} ;function CuteEditorInstallScriptCode(Ox9a9,Ox9aa){eval(Ox9a9);window[Ox9aa]=eval(Ox9aa);} ;window[OxO482c[172]]=CuteEditorInitialize;