var OxOe12c=["SetStyle","length","","GetStyle","GetText",":",";","cssText","tblBorderStyle","sel_style","sel_border","sel_part","bordercolor","bordercolor_Preview","inp_color","inp_color_Preview","inp_shade","inp_shade_Preview","inp_MarginLeft","inp_MarginRight","inp_MarginTop","inp_MarginBottom","inp_PaddingLeft","inp_PaddingRight","inp_PaddingTop","inp_PaddingBottom","inp_width","sel_width_unit","inp_height","sel_height_unit","inp_id","inp_class","sel_align","sel_textalign","sel_float","inp_tooltip","value","borderColor","style"," ","backgroundColor","color","id","className","width","height","inp_","sel_","_unit","selectedIndex","options","align","styleFloat","cssFloat","textAlign","title","borderWidth","borderLeftWidth","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftStyle","borderTopStyle","borderRightStyle","borderBottomStyle","none","border","-","red","paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","[[ValidID]]","class","onclick"];function pause(Ox49f){var Oxa7= new Date();var Ox4a0=Oxa7.getTime()+Ox49f;while(true){Oxa7= new Date();if(Oxa7.getTime()>Ox4a0){return ;} ;} ;} ;function StyleClass(Ox200){var Ox4a2=[];var Ox4a3={};if(Ox200){Ox4a8();} ;this[OxOe12c[0]]=function SetStyle(name,Ox4f,Ox4a5){name=name.toLowerCase();for(var i=0;i<Ox4a2[OxOe12c[1]];i++){if(Ox4a2[i]==name){break ;} ;} ;Ox4a2[i]=name;Ox4a3[name]=Ox4f?(Ox4f+(Ox4a5||OxOe12c[2])):OxOe12c[2];} ;this[OxOe12c[3]]=function GetStyle(name){name=name.toLowerCase();return Ox4a3[name]||OxOe12c[2];} ;this[OxOe12c[4]]=function Ox4a7(){var Ox200=OxOe12c[2];for(var i=0;i<Ox4a2[OxOe12c[1]];i++){var Ox27=Ox4a2[i];var p=Ox4a3[Ox27];if(p){Ox200+=Ox27+OxOe12c[5]+p+OxOe12c[6];} ;} ;return Ox200;} ;function Ox4a8(){var arr=Ox200.split(OxOe12c[6]);for(var i=0;i<arr[OxOe12c[1]];i++){var p=arr[i].split(OxOe12c[5]);var Ox27=p[0].replace(/^\s+/g,OxOe12c[2]).replace(/\s+$/g,OxOe12c[2]).toLowerCase();Ox4a2[Ox4a2[OxOe12c[1]]]=Ox27;Ox4a3[Ox27]=p[1];} ;} ;} ;function GetStyle(Ox136,name){return  new StyleClass(Ox136.cssText).GetStyle(name);} ;function SetStyle(Ox136,name,Ox4f,Ox4a9){var Ox4aa= new StyleClass(Ox136.cssText);Ox4aa.SetStyle(name,Ox4f,Ox4a9);Ox136[OxOe12c[7]]=Ox4aa.GetText();} ;function ParseFloatToString(Ox24){if(!Ox24){return OxOe12c[2];} ;var Ox8=parseFloat(Ox24);if(isNaN(Ox8)){return OxOe12c[2];} ;return Ox8+OxOe12c[2];} ;var tblBorderStyle=Window_GetElement(window,OxOe12c[8],true);var sel_style=Window_GetElement(window,OxOe12c[9],true);var sel_border=Window_GetElement(window,OxOe12c[10],true);var sel_part=Window_GetElement(window,OxOe12c[11],true);var bordercolor=Window_GetElement(window,OxOe12c[12],true);var bordercolor_Preview=Window_GetElement(window,OxOe12c[13],true);var inp_color=Window_GetElement(window,OxOe12c[14],true);var inp_color_Preview=Window_GetElement(window,OxOe12c[15],true);var inp_shade=Window_GetElement(window,OxOe12c[16],true);var inp_shade_Preview=Window_GetElement(window,OxOe12c[17],true);var inp_MarginLeft=Window_GetElement(window,OxOe12c[18],true);var inp_MarginRight=Window_GetElement(window,OxOe12c[19],true);var inp_MarginTop=Window_GetElement(window,OxOe12c[20],true);var inp_MarginBottom=Window_GetElement(window,OxOe12c[21],true);var inp_PaddingLeft=Window_GetElement(window,OxOe12c[22],true);var inp_PaddingRight=Window_GetElement(window,OxOe12c[23],true);var inp_PaddingTop=Window_GetElement(window,OxOe12c[24],true);var inp_PaddingBottom=Window_GetElement(window,OxOe12c[25],true);var inp_width=Window_GetElement(window,OxOe12c[26],true);var sel_width_unit=Window_GetElement(window,OxOe12c[27],true);var inp_height=Window_GetElement(window,OxOe12c[28],true);var sel_height_unit=Window_GetElement(window,OxOe12c[29],true);var inp_id=Window_GetElement(window,OxOe12c[30],true);var inp_class=Window_GetElement(window,OxOe12c[31],true);var sel_align=Window_GetElement(window,OxOe12c[32],true);var sel_textalign=Window_GetElement(window,OxOe12c[33],true);var sel_float=Window_GetElement(window,OxOe12c[34],true);var inp_tooltip=Window_GetElement(window,OxOe12c[35],true);UpdateState=function UpdateState_Div(){} ;function doBorderStyle(Ox11f){sel_style[OxOe12c[36]]=Ox11f;} ;function doPart(Ox11f){sel_part[OxOe12c[36]]=Ox11f;} ;function doWidth(Ox11f){sel_border[OxOe12c[36]]=Ox11f;} ;SyncToView=function SyncToView_Div(){if(Browser_IsWinIE()){bordercolor[OxOe12c[36]]=element[OxOe12c[38]][OxOe12c[37]];} else {var arr=revertColor(element[OxOe12c[38]].borderColor).split(OxOe12c[39]);bordercolor[OxOe12c[36]]=arr[0];} ;bordercolor[OxOe12c[38]][OxOe12c[40]]=bordercolor[OxOe12c[36]];bordercolor_Preview[OxOe12c[38]][OxOe12c[40]]=bordercolor[OxOe12c[36]];inp_color[OxOe12c[36]]=revertColor(element[OxOe12c[38]].color);inp_color[OxOe12c[38]][OxOe12c[40]]=element[OxOe12c[38]][OxOe12c[41]];inp_color_Preview[OxOe12c[38]][OxOe12c[40]]=element[OxOe12c[38]][OxOe12c[41]];inp_shade[OxOe12c[36]]=revertColor(element[OxOe12c[38]].backgroundColor);inp_shade[OxOe12c[38]][OxOe12c[40]]=element[OxOe12c[38]][OxOe12c[40]];inp_shade_Preview[OxOe12c[38]][OxOe12c[40]]=element[OxOe12c[38]][OxOe12c[40]];inp_id[OxOe12c[36]]=element[OxOe12c[42]];if(ParseFloatToString(element[OxOe12c[38]].marginLeft)){inp_MarginLeft[OxOe12c[36]]=ParseFloatToString(element[OxOe12c[38]].marginLeft);} ;if(ParseFloatToString(element[OxOe12c[38]].marginRight)){inp_MarginRight[OxOe12c[36]]=ParseFloatToString(element[OxOe12c[38]].marginRight);} ;if(ParseFloatToString(element[OxOe12c[38]].marginTop)){inp_MarginTop[OxOe12c[36]]=ParseFloatToString(element[OxOe12c[38]].marginTop);} ;if(ParseFloatToString(element[OxOe12c[38]].marginBottom)){inp_MarginBottom[OxOe12c[36]]=ParseFloatToString(element[OxOe12c[38]].marginBottom);} ;if(ParseFloatToString(element[OxOe12c[38]].paddingLeft)){inp_PaddingLeft[OxOe12c[36]]=ParseFloatToString(element[OxOe12c[38]].paddingLeft);} ;if(ParseFloatToString(element[OxOe12c[38]].paddingRight)){inp_PaddingRight[OxOe12c[36]]=ParseFloatToString(element[OxOe12c[38]].paddingRight);} ;if(ParseFloatToString(element[OxOe12c[38]].paddingTop)){inp_PaddingTop[OxOe12c[36]]=ParseFloatToString(element[OxOe12c[38]].paddingTop);} ;if(ParseFloatToString(element[OxOe12c[38]].paddingBottom)){inp_PaddingBottom[OxOe12c[36]]=ParseFloatToString(element[OxOe12c[38]].paddingBottom);} ;inp_class[OxOe12c[36]]=element[OxOe12c[43]];var arr=[OxOe12c[44],OxOe12c[45]];for(var Ox1fb=0;Ox1fb<arr[OxOe12c[1]];Ox1fb++){var Ox27=arr[Ox1fb];var Ox43=Window_GetElement(window,OxOe12c[46]+Ox27,true);var Ox11f=Window_GetElement(window,OxOe12c[47]+Ox27+OxOe12c[48],true);Ox11f[OxOe12c[49]]=0;if(ParseFloatToString(element[OxOe12c[38]][Ox27])){Ox43[OxOe12c[36]]=ParseFloatToString(element[OxOe12c[38]][Ox27]);for(var i=0;i<Ox11f[OxOe12c[50]][OxOe12c[1]];i++){var Ox141=Ox11f[OxOe12c[50]][i][OxOe12c[36]];if(Ox141&&element[OxOe12c[38]][Ox27].indexOf(Ox141)!=-1){Ox11f[OxOe12c[49]]=i;break ;} ;} ;} ;} ;sel_align[OxOe12c[36]]=element[OxOe12c[51]];if(Browser_IsWinIE()){sel_float[OxOe12c[36]]=element[OxOe12c[38]][OxOe12c[52]];} else {sel_float[OxOe12c[36]]=element[OxOe12c[38]][OxOe12c[53]];} ;sel_textalign[OxOe12c[36]]=element[OxOe12c[38]][OxOe12c[54]];inp_tooltip[OxOe12c[36]]=element[OxOe12c[55]];try{sel_border[OxOe12c[36]]=element[OxOe12c[38]][OxOe12c[56]];if(element[OxOe12c[38]][OxOe12c[57]]==element[OxOe12c[38]][OxOe12c[58]]&&element[OxOe12c[38]][OxOe12c[57]]==element[OxOe12c[38]][OxOe12c[59]]&&element[OxOe12c[38]][OxOe12c[57]]==element[OxOe12c[38]][OxOe12c[60]]){sel_border[OxOe12c[36]]=element[OxOe12c[38]][OxOe12c[57]];} ;if(element[OxOe12c[38]][OxOe12c[61]]==element[OxOe12c[38]][OxOe12c[62]]&&element[OxOe12c[38]][OxOe12c[61]]==element[OxOe12c[38]][OxOe12c[63]]&&element[OxOe12c[38]][OxOe12c[61]]==element[OxOe12c[38]][OxOe12c[64]]){sel_style[OxOe12c[36]]=element[OxOe12c[38]][OxOe12c[61]];} ;} catch(x){} ;} ;SyncTo=function SyncTo_Div(element){var Ox4c2=sel_part[OxOe12c[36]];if(Ox4c2==OxOe12c[65]){element[OxOe12c[38]][OxOe12c[66]]=OxOe12c[65];} else {var Ox4c3=Ox4c2?OxOe12c[67]+Ox4c2:Ox4c2;var Oxdb=OxOe12c[68];var Ox136=sel_style[OxOe12c[36]]||OxOe12c[2];var Ox4c4=sel_border[OxOe12c[36]];element[OxOe12c[38]][OxOe12c[66]]=OxOe12c[65];if(Ox4c4||Ox136){SetStyle(element.style,OxOe12c[66]+Ox4c3,Ox4c4+OxOe12c[39]+Ox136+OxOe12c[39]+Oxdb);} else {SetStyle(element.style,OxOe12c[66]+Ox4c3,OxOe12c[2]);} ;SetStyle(element.style,OxOe12c[66]+Ox4c3,Ox4c4+OxOe12c[39]+Ox136+OxOe12c[39]+Oxdb);} ;try{element[OxOe12c[38]][OxOe12c[41]]=inp_color[OxOe12c[36]]||OxOe12c[2];} catch(x){element[OxOe12c[38]][OxOe12c[41]]=OxOe12c[2];} ;try{element[OxOe12c[38]][OxOe12c[40]]=inp_shade[OxOe12c[36]]||OxOe12c[2];} catch(x){element[OxOe12c[38]][OxOe12c[40]]=OxOe12c[2];} ;try{element[OxOe12c[38]][OxOe12c[37]]=bordercolor[OxOe12c[36]]||OxOe12c[2];} catch(x){element[OxOe12c[38]][OxOe12c[37]]=OxOe12c[2];} ;element[OxOe12c[38]][OxOe12c[69]]=inp_PaddingLeft[OxOe12c[36]];element[OxOe12c[38]][OxOe12c[70]]=inp_PaddingRight[OxOe12c[36]];element[OxOe12c[38]][OxOe12c[71]]=inp_PaddingTop[OxOe12c[36]];element[OxOe12c[38]][OxOe12c[72]]=inp_PaddingBottom[OxOe12c[36]];element[OxOe12c[38]][OxOe12c[73]]=inp_MarginLeft[OxOe12c[36]];element[OxOe12c[38]][OxOe12c[74]]=inp_MarginRight[OxOe12c[36]];element[OxOe12c[38]][OxOe12c[75]]=inp_MarginTop[OxOe12c[36]];element[OxOe12c[38]][OxOe12c[76]]=inp_MarginBottom[OxOe12c[36]];element[OxOe12c[43]]=inp_class[OxOe12c[36]];var arr=[OxOe12c[44],OxOe12c[45]];for(var Ox1fb=0;Ox1fb<arr[OxOe12c[1]];Ox1fb++){var Ox27=arr[Ox1fb];var Ox43=Window_GetElement(window,OxOe12c[46]+Ox27,true);var Ox4c5=Window_GetElement(window,OxOe12c[47]+Ox27+OxOe12c[48],true);if(ParseFloatToString(Ox43.value)){element[OxOe12c[38]][Ox27]=ParseFloatToString(Ox43.value)+Ox4c5[OxOe12c[36]];} else {element[OxOe12c[38]][Ox27]=OxOe12c[2];} ;} ;var Ox373=/[^a-z\d]/i;if(Ox373.test(inp_id.value)){alert(OxOe12c[77]);return ;} ;element[OxOe12c[51]]=sel_align[OxOe12c[36]];element[OxOe12c[42]]=inp_id[OxOe12c[36]];if(Browser_IsWinIE()){element[OxOe12c[38]][OxOe12c[52]]=sel_float[OxOe12c[36]];} else {element[OxOe12c[38]][OxOe12c[53]]=sel_float[OxOe12c[36]];} ;element[OxOe12c[38]][OxOe12c[54]]=sel_textalign[OxOe12c[36]];element[OxOe12c[55]]=inp_tooltip[OxOe12c[36]];if(element[OxOe12c[55]]==OxOe12c[2]){element.removeAttribute(OxOe12c[55]);} ;if(element[OxOe12c[43]]==OxOe12c[2]){element.removeAttribute(OxOe12c[43]);} ;if(element[OxOe12c[43]]==OxOe12c[2]){element.removeAttribute(OxOe12c[78]);} ;if(element[OxOe12c[51]]==OxOe12c[2]){element.removeAttribute(OxOe12c[51]);} ;if(element[OxOe12c[42]]==OxOe12c[2]){element.removeAttribute(OxOe12c[42]);} ;} ;bordercolor[OxOe12c[79]]=bordercolor_Preview[OxOe12c[79]]=function bordercolor_onclick(){SelectColor(bordercolor,bordercolor_Preview);} ;inp_color[OxOe12c[79]]=inp_color_Preview[OxOe12c[79]]=function inp_color_onclick(){SelectColor(inp_color,inp_color_Preview);} ;inp_shade[OxOe12c[79]]=inp_shade_Preview[OxOe12c[79]]=function inp_shade_onclick(){SelectColor(inp_shade,inp_shade_Preview);} ;