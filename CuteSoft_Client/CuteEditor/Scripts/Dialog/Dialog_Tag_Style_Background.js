var OxO97e0=["SetStyle","length","","GetStyle","GetText",":",";","cssText","inp_color","inp_color_Preview","tb_image","btnbrowse","sel_bgrepeat","sel_bgattach","sel_hor","tb_hor","sel_hor_unit","sel_ver","tb_ver","sel_ver_unit","outer","div_demo","onclick","value","disabled","selectedIndex","style","backgroundImage","backgroundColor","backgroundRepeat","backgroundAttachment","backgroundPositionX","options","backgroundPositionY","url(",")","background-image","backgroundPosition","none"];function pause(Ox49f){var Oxa7= new Date();var Ox4a0=Oxa7.getTime()+Ox49f;while(true){Oxa7= new Date();if(Oxa7.getTime()>Ox4a0){return ;} ;} ;} ;function StyleClass(Ox200){var Ox4a2=[];var Ox4a3={};if(Ox200){Ox4a8();} ;this[OxO97e0[0]]=function SetStyle(name,Ox4f,Ox4a5){name=name.toLowerCase();for(var i=0;i<Ox4a2[OxO97e0[1]];i++){if(Ox4a2[i]==name){break ;} ;} ;Ox4a2[i]=name;Ox4a3[name]=Ox4f?(Ox4f+(Ox4a5||OxO97e0[2])):OxO97e0[2];} ;this[OxO97e0[3]]=function GetStyle(name){name=name.toLowerCase();return Ox4a3[name]||OxO97e0[2];} ;this[OxO97e0[4]]=function Ox4a7(){var Ox200=OxO97e0[2];for(var i=0;i<Ox4a2[OxO97e0[1]];i++){var Ox27=Ox4a2[i];var p=Ox4a3[Ox27];if(p){Ox200+=Ox27+OxO97e0[5]+p+OxO97e0[6];} ;} ;return Ox200;} ;function Ox4a8(){var arr=Ox200.split(OxO97e0[6]);for(var i=0;i<arr[OxO97e0[1]];i++){var p=arr[i].split(OxO97e0[5]);var Ox27=p[0].replace(/^\s+/g,OxO97e0[2]).replace(/\s+$/g,OxO97e0[2]).toLowerCase();Ox4a2[Ox4a2[OxO97e0[1]]]=Ox27;Ox4a3[Ox27]=p[1];} ;} ;} ;function GetStyle(Ox136,name){return  new StyleClass(Ox136.cssText).GetStyle(name);} ;function SetStyle(Ox136,name,Ox4f,Ox4a9){var Ox4aa= new StyleClass(Ox136.cssText);Ox4aa.SetStyle(name,Ox4f,Ox4a9);Ox136[OxO97e0[7]]=Ox4aa.GetText();} ;function ParseFloatToString(Ox24){var Ox8=parseFloat(Ox24);if(isNaN(Ox8)){return OxO97e0[2];} ;return Ox8+OxO97e0[2];} ;var inp_color=Window_GetElement(window,OxO97e0[8],true);var inp_color_Preview=Window_GetElement(window,OxO97e0[9],true);var tb_image=Window_GetElement(window,OxO97e0[10],true);var btnbrowse=Window_GetElement(window,OxO97e0[11],true);var sel_bgrepeat=Window_GetElement(window,OxO97e0[12],true);var sel_bgattach=Window_GetElement(window,OxO97e0[13],true);var sel_hor=Window_GetElement(window,OxO97e0[14],true);var tb_hor=Window_GetElement(window,OxO97e0[15],true);var sel_hor_unit=Window_GetElement(window,OxO97e0[16],true);var sel_ver=Window_GetElement(window,OxO97e0[17],true);var tb_ver=Window_GetElement(window,OxO97e0[18],true);var sel_ver_unit=Window_GetElement(window,OxO97e0[19],true);var outer=Window_GetElement(window,OxO97e0[20],true);var div_demo=Window_GetElement(window,OxO97e0[21],true);btnbrowse[OxO97e0[22]]=function btnbrowse_onclick(){function Ox35a(Ox13d){if(Ox13d){tb_image[OxO97e0[23]]=Ox13d;} ;} ;editor.SetNextDialogWindow(window);if(Browser_IsSafari()){editor.ShowSelectImageDialog(Ox35a,tb_image.value,tb_image);} else {editor.ShowSelectImageDialog(Ox35a,tb_image.value);} ;} ;UpdateState=function UpdateState_Background(){tb_hor[OxO97e0[24]]=sel_hor_unit[OxO97e0[24]]=(sel_hor[OxO97e0[25]]>0);tb_ver[OxO97e0[24]]=sel_ver_unit[OxO97e0[24]]=(sel_ver[OxO97e0[25]]>0);div_demo[OxO97e0[26]][OxO97e0[7]]=element[OxO97e0[26]][OxO97e0[7]];} ;SyncToView=function SyncToView_Background(){tb_image[OxO97e0[23]]=element[OxO97e0[26]][OxO97e0[27]];FixTbImage();inp_color[OxO97e0[23]]=element[OxO97e0[26]][OxO97e0[28]];inp_color[OxO97e0[26]][OxO97e0[28]]=element[OxO97e0[26]][OxO97e0[28]];inp_color_Preview[OxO97e0[26]][OxO97e0[28]]=element[OxO97e0[26]][OxO97e0[28]];sel_bgrepeat[OxO97e0[23]]=element[OxO97e0[26]][OxO97e0[29]];sel_bgattach[OxO97e0[23]]=element[OxO97e0[26]][OxO97e0[30]];sel_hor[OxO97e0[23]]=element[OxO97e0[26]][OxO97e0[31]];sel_hor_unit[OxO97e0[25]]=0;if(sel_hor[OxO97e0[25]]==-1){if(ParseFloatToString(element[OxO97e0[26]].backgroundPositionX)){tb_hor[OxO97e0[23]]=ParseFloatToString(element[OxO97e0[26]].backgroundPositionX);for(var i=0;i<sel_hor_unit[OxO97e0[32]][OxO97e0[1]];i++){var Ox141=sel_hor_unit[OxO97e0[32]][i][OxO97e0[23]];if(Ox141&&element[OxO97e0[26]][OxO97e0[31]].indexOf(Ox141)!=-1){sel_hor_unit[OxO97e0[25]]=i;break ;} ;} ;} ;} ;sel_ver[OxO97e0[23]]=element[OxO97e0[26]][OxO97e0[33]];sel_ver_unit[OxO97e0[25]]=0;if(sel_ver[OxO97e0[25]]==-1){if(ParseFloatToString(element[OxO97e0[26]].backgroundPositionY)){tb_ver[OxO97e0[23]]=ParseFloatToString(element[OxO97e0[26]].backgroundPositionY);for(var i=0;i<sel_ver_unit[OxO97e0[32]][OxO97e0[1]];i++){var Ox141=sel_ver_unit[OxO97e0[32]][i][OxO97e0[23]];if(Ox141&&element[OxO97e0[26]][OxO97e0[33]].indexOf(Ox141)!=-1){sel_ver_unit[OxO97e0[25]]=i;break ;} ;} ;} ;} ;} ;SyncTo=function SyncTo_Background(element){if(tb_image[OxO97e0[23]]){element[OxO97e0[26]][OxO97e0[27]]=OxO97e0[34]+tb_image[OxO97e0[23]]+OxO97e0[35];} else {SetStyle(element.style,OxO97e0[36],OxO97e0[2]);} ;try{element[OxO97e0[26]][OxO97e0[28]]=inp_color[OxO97e0[23]]||OxO97e0[2];} catch(x){element[OxO97e0[26]][OxO97e0[28]]=OxO97e0[2];} ;element[OxO97e0[26]][OxO97e0[29]]=sel_bgrepeat[OxO97e0[23]]||OxO97e0[2];element[OxO97e0[26]][OxO97e0[30]]=sel_bgattach[OxO97e0[23]]||OxO97e0[2];element[OxO97e0[26]][OxO97e0[37]]=OxO97e0[2];if(sel_hor[OxO97e0[25]]>0){element[OxO97e0[26]][OxO97e0[31]]=sel_hor[OxO97e0[23]];} else {if(ParseFloatToString(tb_hor.value)){element[OxO97e0[26]][OxO97e0[31]]=ParseFloatToString(tb_hor.value)+sel_hor_unit[OxO97e0[23]];} else {element[OxO97e0[26]][OxO97e0[31]]=OxO97e0[2];} ;} ;if(sel_ver[OxO97e0[25]]>0){element[OxO97e0[26]][OxO97e0[33]]=sel_ver[OxO97e0[23]];} else {if(ParseFloatToString(tb_ver.value)){element[OxO97e0[26]][OxO97e0[33]]=ParseFloatToString(tb_ver.value)+sel_ver_unit[OxO97e0[23]];} else {element[OxO97e0[26]][OxO97e0[33]]=OxO97e0[2];} ;} ;} ;function FixTbImage(){var Ox141=tb_image[OxO97e0[23]].replace(/^(\s+)/g,OxO97e0[2]).replace(/(\s+)$/g,OxO97e0[2]);if(Ox141.substr(0,4).toLowerCase()==OxO97e0[34]){Ox141=Ox141.substr(4,Ox141[OxO97e0[1]]-4);} ;if(Ox141.substr(Ox141[OxO97e0[1]]-1,1)==OxO97e0[35]){Ox141=Ox141.substr(0,Ox141[OxO97e0[1]]-1);} ;if(Ox141==OxO97e0[38]){Ox141=OxO97e0[2];} ;tb_image[OxO97e0[23]]=Ox141;} ;inp_color[OxO97e0[22]]=inp_color_Preview[OxO97e0[22]]=function inp_color_onclick(){SelectColor(inp_color,inp_color_Preview);} ;