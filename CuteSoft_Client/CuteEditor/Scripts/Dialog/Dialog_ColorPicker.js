var OxObc37=["=","; path=/;"," expires=",";","cookie","length","","#ffffff","CECC","onmouseover","event","srcElement","target","className","colordiv","style","onmouseout","onclick","CheckboxColorNames","checked","cname","backgroundColor","cvalue","[[_CuteEditorResource_]]Load.ashx?type=dialog\x26file=ColorPicker.Aspx\x26culture=[[_culture_]]","\x26[[DNN_Arg]]","dialogWidth:520px;dialogHeight:420px;help:0;status:0;resizable:1","dialogArguments","object","onchange","color","editor","divpreview","value","#","RecentColors","SPAN","[[ValidColor]]"];function SetCookie(name,Ox4f,Ox55){var Ox56=name+OxObc37[0]+escape(Ox4f)+OxObc37[1];if(Ox55){var Ox57= new Date();Ox57.setSeconds(Ox57.getSeconds()+Ox55);Ox56+=OxObc37[2]+Ox57.toUTCString()+OxObc37[3];} ;document[OxObc37[4]]=Ox56;} ;function GetCookie(name){var Ox59=document[OxObc37[4]].split(OxObc37[3]);for(var i=0;i<Ox59[OxObc37[5]];i++){var Ox5a=Ox59[i].split(OxObc37[0]);if(name==Ox5a[0].replace(/\s/g,OxObc37[6])){return unescape(Ox5a[1]);} ;} ;} ;function GetCookieDictionary(){var Ox12a={};var Ox59=document[OxObc37[4]].split(OxObc37[3]);for(var i=0;i<Ox59[OxObc37[5]];i++){var Ox5a=Ox59[i].split(OxObc37[0]);Ox12a[Ox5a[0].replace(/\s/g,OxObc37[6])]=unescape(Ox5a[1]);} ;return Ox12a;} ;function GetCookieArray(){var arr=[];var Ox59=document[OxObc37[4]].split(OxObc37[3]);for(var i=0;i<Ox59[OxObc37[5]];i++){var Ox5a=Ox59[i].split(OxObc37[0]);var Ox56={name:Ox5a[0].replace(/\s/g,OxObc37[6]),value:unescape(Ox5a[1])};arr[arr[OxObc37[5]]]=Ox56;} ;return arr;} ;var __defaultcustomlist=[OxObc37[7],OxObc37[7],OxObc37[7],OxObc37[7],OxObc37[7],OxObc37[7],OxObc37[7],OxObc37[7]];function GetCustomColors(){var Ox12e=__defaultcustomlist.concat();for(var i=0;i<18;i++){var Oxdb=GetCustomColor(i);if(Oxdb){Ox12e[i]=Oxdb;} ;} ;return Ox12e;} ;function GetCustomColor(Ox130){return GetCookie(OxObc37[8]+Ox130);} ;function SetCustomColor(Ox130,Oxdb){SetCookie(OxObc37[8]+Ox130,Oxdb,60*60*24*365);} ;var _origincolor=OxObc37[6];document[OxObc37[9]]=function (Ox1cf){Ox1cf=window[OxObc37[10]]||Ox1cf;var Ox12=Ox1cf[OxObc37[11]]||Ox1cf[OxObc37[12]];if(Ox12[OxObc37[13]]==OxObc37[14]){firecolorchange(Ox12[OxObc37[15]].backgroundColor);} ;} ;document[OxObc37[16]]=function (Ox1cf){Ox1cf=window[OxObc37[10]]||Ox1cf;var Ox12=Ox1cf[OxObc37[11]]||Ox1cf[OxObc37[12]];if(Ox12[OxObc37[13]]==OxObc37[14]){firecolorchange(_origincolor);} ;} ;document[OxObc37[17]]=function (Ox1cf){Ox1cf=window[OxObc37[10]]||Ox1cf;var Ox12=Ox1cf[OxObc37[11]]||Ox1cf[OxObc37[12]];if(Ox12[OxObc37[13]]==OxObc37[14]){var Ox29c=document.getElementById(OxObc37[18])&&document.getElementById(OxObc37[18])[OxObc37[19]];if(Ox29c){do_select(Ox12.getAttribute(OxObc37[20])||Ox12[OxObc37[15]][OxObc37[21]]);} else {do_select(Ox12.getAttribute(OxObc37[22])||Ox12[OxObc37[15]][OxObc37[21]]);} ;} ;} ;var _editor;function firecolorchange(Ox29f){} ;function ShowColorDialog(Ox231){var Ox13a=OxObc37[23]+OxObc37[24];var Ox2a1=OxObc37[25];var Ox13d=showModalDialog(Ox13a,null,Ox2a1);if(Ox13d!=null&&Ox13d!==false){Ox231(Ox13d);} ;} ;if(top[OxObc37[26]]){if( typeof (top[OxObc37[26]])==OxObc37[27]){if(top[OxObc37[26]][OxObc37[28]]){firecolorchange=top[OxObc37[26]][OxObc37[28]];_origincolor=top[OxObc37[26]][OxObc37[29]];_editor=top[OxObc37[26]][OxObc37[30]];} ;} ;} ;var _selectedcolor=null;function do_select(Oxdb){_selectedcolor=Oxdb;firecolorchange(Oxdb);var Ox2a4=document.getElementById(OxObc37[31]);if(Ox2a4){Ox2a4[OxObc37[32]]=Oxdb;} ;} ;function do_saverecent(Oxdb){if(!Oxdb){return ;} ;if(Oxdb[OxObc37[5]]!=7){return ;} ;if(Oxdb.substring(0,1)!=OxObc37[33]){return ;} ;var hex=Oxdb.substring(1,7);var Ox2a6=GetCookie(OxObc37[34]);if(!Ox2a6){Ox2a6=OxObc37[6];} ;if((Ox2a6[OxObc37[5]]%6)!=0){Ox2a6=OxObc37[6];} ;for(var i=0;i<Ox2a6[OxObc37[5]];i+=6){if(Ox2a6.substr(i,6)==hex){Ox2a6=Ox2a6.substr(0,i)+Ox2a6.substr(i+6);i-=6;} ;} ;if(Ox2a6[OxObc37[5]]>31*6){Ox2a6=Ox2a6.substr(0,31*6);} ;Ox2a6=hex+Ox2a6;SetCookie(OxObc37[34],Ox2a6,60*60*24*365);} ;function do_insert(){var Oxdb;var divpreview=document.getElementById(OxObc37[31]);if(divpreview){Oxdb=divpreview[OxObc37[32]];} else {Oxdb=_selectedcolor;} ;if(!Oxdb){return ;} ;if(/^[0-9A-F]{6}$/ig.test(Oxdb)){Oxdb=OxObc37[33]+Oxdb;} ;try{document.createElement(OxObc37[35])[OxObc37[15]][OxObc37[29]]=Oxdb;do_saverecent(Oxdb);Window_SetDialogReturnValue(window,Oxdb);Window_CloseDialog(window);} catch(x){alert(OxObc37[36]);divpreview[OxObc37[32]]=OxObc37[6];return false;} ;} ;