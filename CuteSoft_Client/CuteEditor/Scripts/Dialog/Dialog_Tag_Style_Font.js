var OxO7e3a=["SetStyle","length","","GetStyle","GetText",":",";","cssText","sel_font","div_font_detail","sel_fontfamily","cb_decoration_under","cb_decoration_over","cb_decoration_through","cb_style_bold","cb_style_italic","sel_fontTransform","sel_fontsize","inp_fontsize","sel_fontsize_unit","inp_color","inp_color_Preview","outer","div_demo","disabled","selectedIndex","style","value","font","fontFamily","color","backgroundColor","textDecoration","checked","overline","underline","line-through","fontWeight","bold","fontStyle","italic","fontSize","options","textTransform","font-family","overline ","underline ","line-through ","onclick"];function pause(Ox49f){var Oxa7= new Date();var Ox4a0=Oxa7.getTime()+Ox49f;while(true){Oxa7= new Date();if(Oxa7.getTime()>Ox4a0){return ;} ;} ;} ;function StyleClass(Ox200){var Ox4a2=[];var Ox4a3={};if(Ox200){Ox4a8();} ;this[OxO7e3a[0]]=function SetStyle(name,Ox4f,Ox4a5){name=name.toLowerCase();for(var i=0;i<Ox4a2[OxO7e3a[1]];i++){if(Ox4a2[i]==name){break ;} ;} ;Ox4a2[i]=name;Ox4a3[name]=Ox4f?(Ox4f+(Ox4a5||OxO7e3a[2])):OxO7e3a[2];} ;this[OxO7e3a[3]]=function GetStyle(name){name=name.toLowerCase();return Ox4a3[name]||OxO7e3a[2];} ;this[OxO7e3a[4]]=function Ox4a7(){var Ox200=OxO7e3a[2];for(var i=0;i<Ox4a2[OxO7e3a[1]];i++){var Ox27=Ox4a2[i];var p=Ox4a3[Ox27];if(p){Ox200+=Ox27+OxO7e3a[5]+p+OxO7e3a[6];} ;} ;return Ox200;} ;function Ox4a8(){var arr=Ox200.split(OxO7e3a[6]);for(var i=0;i<arr[OxO7e3a[1]];i++){var p=arr[i].split(OxO7e3a[5]);var Ox27=p[0].replace(/^\s+/g,OxO7e3a[2]).replace(/\s+$/g,OxO7e3a[2]).toLowerCase();Ox4a2[Ox4a2[OxO7e3a[1]]]=Ox27;Ox4a3[Ox27]=p[1];} ;} ;} ;function GetStyle(Ox136,name){return  new StyleClass(Ox136.cssText).GetStyle(name);} ;function SetStyle(Ox136,name,Ox4f,Ox4a9){var Ox4aa= new StyleClass(Ox136.cssText);Ox4aa.SetStyle(name,Ox4f,Ox4a9);Ox136[OxO7e3a[7]]=Ox4aa.GetText();} ;function ParseFloatToString(Ox24){var Ox8=parseFloat(Ox24);if(isNaN(Ox8)){return OxO7e3a[2];} ;return Ox8+OxO7e3a[2];} ;var sel_font=Window_GetElement(window,OxO7e3a[8],true);var div_font_detail=Window_GetElement(window,OxO7e3a[9],true);var sel_fontfamily=Window_GetElement(window,OxO7e3a[10],true);var cb_decoration_under=Window_GetElement(window,OxO7e3a[11],true);var cb_decoration_over=Window_GetElement(window,OxO7e3a[12],true);var cb_decoration_through=Window_GetElement(window,OxO7e3a[13],true);var cb_style_bold=Window_GetElement(window,OxO7e3a[14],true);var cb_style_italic=Window_GetElement(window,OxO7e3a[15],true);var sel_fontTransform=Window_GetElement(window,OxO7e3a[16],true);var sel_fontsize=Window_GetElement(window,OxO7e3a[17],true);var inp_fontsize=Window_GetElement(window,OxO7e3a[18],true);var sel_fontsize_unit=Window_GetElement(window,OxO7e3a[19],true);var inp_color=Window_GetElement(window,OxO7e3a[20],true);var inp_color_Preview=Window_GetElement(window,OxO7e3a[21],true);var outer=Window_GetElement(window,OxO7e3a[22],true);var div_demo=Window_GetElement(window,OxO7e3a[23],true);UpdateState=function UpdateState_Font(){inp_fontsize[OxO7e3a[24]]=sel_fontsize_unit[OxO7e3a[24]]=(sel_fontsize[OxO7e3a[25]]>0);div_font_detail[OxO7e3a[24]]=sel_font[OxO7e3a[25]]>0;div_demo[OxO7e3a[26]][OxO7e3a[7]]=element[OxO7e3a[26]][OxO7e3a[7]];} ;SyncToView=function SyncToView_Font(){sel_font[OxO7e3a[27]]=element[OxO7e3a[26]][OxO7e3a[28]].toLowerCase()||null;sel_fontfamily[OxO7e3a[27]]=element[OxO7e3a[26]][OxO7e3a[29]];inp_color[OxO7e3a[27]]=element[OxO7e3a[26]][OxO7e3a[30]];inp_color[OxO7e3a[26]][OxO7e3a[31]]=inp_color[OxO7e3a[27]];var Ox5df=element[OxO7e3a[26]][OxO7e3a[32]].toLowerCase();cb_decoration_over[OxO7e3a[33]]=Ox5df.indexOf(OxO7e3a[34])!=-1;cb_decoration_under[OxO7e3a[33]]=Ox5df.indexOf(OxO7e3a[35])!=-1;cb_decoration_through[OxO7e3a[33]]=Ox5df.indexOf(OxO7e3a[36])!=-1;cb_style_bold[OxO7e3a[33]]=element[OxO7e3a[26]][OxO7e3a[37]]==OxO7e3a[38];cb_style_italic[OxO7e3a[33]]=element[OxO7e3a[26]][OxO7e3a[39]]==OxO7e3a[40];sel_fontsize[OxO7e3a[27]]=element[OxO7e3a[26]][OxO7e3a[41]];sel_fontsize_unit[OxO7e3a[25]]=0;if(sel_fontsize[OxO7e3a[25]]==-1){if(ParseFloatToString(element[OxO7e3a[26]].fontSize)){sel_fontsize[OxO7e3a[27]]=ParseFloatToString(element[OxO7e3a[26]].fontSize);for(var i=0;i<sel_fontsize_unit[OxO7e3a[42]][OxO7e3a[1]];i++){var Ox141=sel_fontsize_unit.options(i)[OxO7e3a[27]];if(Ox141&&element[OxO7e3a[26]][OxO7e3a[41]].indexOf(Ox141)!=-1){sel_fontsize_unit[OxO7e3a[25]]=i;break ;} ;} ;} ;} ;sel_fontTransform[OxO7e3a[27]]=element[OxO7e3a[26]][OxO7e3a[43]];} ;SyncTo=function SyncTo_Font(element){SetStyle(element.style,OxO7e3a[28],sel_font.value);if(sel_fontfamily[OxO7e3a[27]]){element[OxO7e3a[26]][OxO7e3a[29]]=sel_fontfamily[OxO7e3a[27]];} else {SetStyle(element.style,OxO7e3a[44],OxO7e3a[2]);} ;try{element[OxO7e3a[26]][OxO7e3a[30]]=inp_color[OxO7e3a[27]]||OxO7e3a[2];} catch(x){element[OxO7e3a[26]][OxO7e3a[30]]=OxO7e3a[2];} ;var Ox5e1=cb_decoration_over[OxO7e3a[33]];var Ox5e2=cb_decoration_under[OxO7e3a[33]];var Ox5e3=cb_decoration_through[OxO7e3a[33]];if(!Ox5e1&&!Ox5e2&&!Ox5e3){element[OxO7e3a[26]][OxO7e3a[32]]=OxO7e3a[2];} else {var Ox57=OxO7e3a[2];if(Ox5e1){Ox57+=OxO7e3a[45];} ;if(Ox5e2){Ox57+=OxO7e3a[46];} ;if(Ox5e3){Ox57+=OxO7e3a[47];} ;element[OxO7e3a[26]][OxO7e3a[32]]=Ox57.substr(0,Ox57[OxO7e3a[1]]-1);} ;element[OxO7e3a[26]][OxO7e3a[37]]=cb_style_bold[OxO7e3a[33]]?OxO7e3a[38]:OxO7e3a[2];element[OxO7e3a[26]][OxO7e3a[39]]=cb_style_italic[OxO7e3a[33]]?OxO7e3a[40]:OxO7e3a[2];element[OxO7e3a[26]][OxO7e3a[43]]=sel_fontTransform[OxO7e3a[27]]||OxO7e3a[2];if(sel_fontsize[OxO7e3a[25]]>0){element[OxO7e3a[26]][OxO7e3a[41]]=sel_fontsize[OxO7e3a[27]];} else {if(ParseFloatToString(inp_fontsize.value)){element[OxO7e3a[26]][OxO7e3a[41]]=ParseFloatToString(inp_fontsize.value)+sel_fontsize_unit[OxO7e3a[27]];} else {element[OxO7e3a[26]][OxO7e3a[41]]=OxO7e3a[2];} ;} ;} ;inp_color[OxO7e3a[48]]=inp_color_Preview[OxO7e3a[48]]=function inp_color_onclick(){SelectColor(inp_color,inp_color_Preview);} ;