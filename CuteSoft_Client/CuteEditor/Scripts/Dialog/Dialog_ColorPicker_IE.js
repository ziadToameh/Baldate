var OxO2831=["onerror","onload","onclick","btnCancel","btnOK","onkeyup","txtHSB_Hue","onkeypress","txtHSB_Saturation","txtHSB_Brightness","txtRGB_Red","txtRGB_Green","txtRGB_Blue","txtHex","btnWebSafeColor","rdoHSB_Hue","rdoHSB_Saturation","rdoHSB_Brightness","rdoRGB_Red","rdoRGB_Green","rdoRGB_Blue","onmousemove","onmousedown","onmouseup","{format}","length","\x5C{","\x5C}","BadNumber","A number between {0} and {1} is required. Closest value inserted.","Title","Color Picker","SelectAColor","Select a color:","OKButton","OK","CancelButton","Cancel","AboutButton","About","Recent","WebSafeWarning","Warning: not a web safe color","WebSafeClick","Click to select web safe color","HsbHue","H:","HsbHueTooltip","Hue","HsbHueUnit","%","HsbSaturation","S:","HsbSaturationTooltip","Saturation","HsbSaturationUnit","HsbBrightness","B:","HsbBrightnessTooltip","Brightness","HsbBrightnessUnit","RgbRed","R:","RgbRedTooltip","Red","RgbGreen","G:","RgbGreenTooltip","Green","RgbBlue","RgbBlueTooltip","Blue","Hex","#","RecentTooltip","Recent:","\x0D\x0ALewies Color Pickerversion 1.1\x0D\x0A\x0D\x0AThis form was created by Lewis Moten in May of 2004.\x0D\x0AIt simulates the color picker in a popular graphics application.\x0D\x0AIt gives users a visual way to choose colors from a large and dynamic palette.\x0D\x0A\x0D\x0AVisit the authors web page?\x0D\x0Awww.lewismoten.com\x0D\x0A","UNDEFINED","FFFFFF","value","checked","ColorMode","ColorType","RecentColors","","pnlRecent","all","border","style","0px","backgroundColor","srcElement","display","none","title","innerHTML","backgroundPosition","px ","px","000000","zIndex","01234567879","keyCode","abcdef","01234567879ABCDEF","closeeditordialog","close","returnValue","0123456789ABCDEFabcdef","0","id","pnlGradient_Top","pnlVertical_Top","top","opacity","filters","backgroundImage","url(Load.ashx?type=image\x26file=cpie_GradientPositionDark.gif)","url(Load.ashx?type=image\x26file=cpie_GradientPositionLight.gif)","cancelBubble","clientX","clientY","className","GradientNormal","button","GradientFullScreen","=","; path=/;"," expires=",";","cookie","00336699CCFF","0x","do_select","frm","__cphex"];var POSITIONADJUSTX=21;var POSITIONADJUSTY=46;var POSITIONADJUSTZ=43;var msg= new Object();window[OxO2831[0]]=alert;var ColorMode=1;var GradientPositionDark= new Boolean(false);var frm= new Object();window[OxO2831[1]]=window_load;function initialize(){frm[OxO2831[3]][OxO2831[2]]=btnCancel_Click;frm[OxO2831[4]][OxO2831[2]]=btnOK_Click;frm[OxO2831[6]][OxO2831[5]]=Hsb_Changed;frm[OxO2831[6]][OxO2831[7]]=validateNumber;frm[OxO2831[8]][OxO2831[5]]=Hsb_Changed;frm[OxO2831[8]][OxO2831[7]]=validateNumber;frm[OxO2831[9]][OxO2831[5]]=Hsb_Changed;frm[OxO2831[9]][OxO2831[7]]=validateNumber;frm[OxO2831[10]][OxO2831[5]]=Rgb_Changed;frm[OxO2831[10]][OxO2831[7]]=validateNumber;frm[OxO2831[11]][OxO2831[5]]=Rgb_Changed;frm[OxO2831[11]][OxO2831[7]]=validateNumber;frm[OxO2831[12]][OxO2831[5]]=Rgb_Changed;frm[OxO2831[12]][OxO2831[7]]=validateNumber;frm[OxO2831[13]][OxO2831[5]]=Hex_Changed;frm[OxO2831[13]][OxO2831[7]]=validateHex;frm[OxO2831[14]][OxO2831[2]]=btnWebSafeColor_Click;frm[OxO2831[15]][OxO2831[2]]=rdoHsb_Hue_Click;frm[OxO2831[16]][OxO2831[2]]=rdoHsb_Saturation_Click;frm[OxO2831[17]][OxO2831[2]]=rdoHsb_Brightness_Click;frm[OxO2831[18]][OxO2831[2]]=rdoRgb_Red_Click;frm[OxO2831[19]][OxO2831[2]]=rdoRgb_Green_Click;frm[OxO2831[20]][OxO2831[2]]=rdoRgb_Blue_Click;pnlGradient_Top[OxO2831[2]]=pnlGradient_Top_Click;pnlGradient_Top[OxO2831[21]]=pnlGradient_Top_MouseMove;pnlGradient_Top[OxO2831[22]]=pnlGradient_Top_MouseDown;pnlGradient_Top[OxO2831[23]]=pnlGradient_Top_MouseUp;pnlVertical_Top[OxO2831[2]]=pnlVertical_Top_Click;pnlVertical_Top[OxO2831[21]]=pnlVertical_Top_MouseMove;pnlVertical_Top[OxO2831[22]]=pnlVertical_Top_MouseDown;pnlVertical_Top[OxO2831[23]]=pnlVertical_Top_MouseUp;pnlWebSafeColor[OxO2831[2]]=btnWebSafeColor_Click;pnlWebSafeColorBorder[OxO2831[2]]=btnWebSafeColor_Click;pnlOldColor[OxO2831[2]]=pnlOldClick_Click;lblHSB_Hue[OxO2831[2]]=rdoHsb_Hue_Click;lblHSB_Saturation[OxO2831[2]]=rdoHsb_Saturation_Click;lblHSB_Brightness[OxO2831[2]]=rdoHsb_Brightness_Click;lblRGB_Red[OxO2831[2]]=rdoRgb_Red_Click;lblRGB_Green[OxO2831[2]]=rdoRgb_Green_Click;lblRGB_Blue[OxO2831[2]]=rdoRgb_Blue_Click;pnlGradient_Top.focus();} ;function formatString(Ox2b0){if(!Ox2b0){return OxO2831[24];} ;for(var i=1;i<arguments[OxO2831[25]];i++){Ox2b0=Ox2b0.replace( new RegExp(OxO2831[26]+(i-1)+OxO2831[27]),arguments[i]);} ;return Ox2b0;} ;function AddValue(Ox119,Ox4f){Ox4f=Ox4f.toLowerCase();for(var i=0;i<Ox119[OxO2831[25]];i++){if(Ox119[i]==Ox4f){return ;} ;} ;Ox119[Ox119[OxO2831[25]]]=Ox4f;} ;function SniffLanguage(Ox11){} ;function LoadLanguage(){msg[OxO2831[28]]=OxO2831[29];msg[OxO2831[30]]=OxO2831[31];msg[OxO2831[32]]=OxO2831[33];msg[OxO2831[34]]=OxO2831[35];msg[OxO2831[36]]=OxO2831[37];msg[OxO2831[38]]=OxO2831[39];msg[OxO2831[40]]=OxO2831[40];msg[OxO2831[41]]=OxO2831[42];msg[OxO2831[43]]=OxO2831[44];msg[OxO2831[45]]=OxO2831[46];msg[OxO2831[47]]=OxO2831[48];msg[OxO2831[49]]=OxO2831[50];msg[OxO2831[51]]=OxO2831[52];msg[OxO2831[53]]=OxO2831[54];msg[OxO2831[55]]=OxO2831[50];msg[OxO2831[56]]=OxO2831[57];msg[OxO2831[58]]=OxO2831[59];msg[OxO2831[60]]=OxO2831[50];msg[OxO2831[61]]=OxO2831[62];msg[OxO2831[63]]=OxO2831[64];msg[OxO2831[65]]=OxO2831[66];msg[OxO2831[67]]=OxO2831[68];msg[OxO2831[69]]=OxO2831[57];msg[OxO2831[70]]=OxO2831[71];msg[OxO2831[72]]=OxO2831[73];msg[OxO2831[74]]=OxO2831[75];msg[OxO2831[39]]=OxO2831[76];} ;function localize(){} ;function window_load(){frm=frmColorPicker;LoadLanguage();localize();initialize();var hex=OxO2831[77];if(hex==OxO2831[77]){hex=OxO2831[78];} ;if(hex[OxO2831[25]]==7){hex=hex.substr(1,6);} ;frm[OxO2831[13]][OxO2831[79]]=hex;Hex_Changed();hex=Form_Get_Hex();SetBg(pnlOldColor,hex);frm[OxO2831[82]][ new Number(GetCookie(OxO2831[81])||0)][OxO2831[80]]=true;ColorMode_Changed();var Ox2a6=GetCookie(OxO2831[83])||OxO2831[84];var Ox2b6=msg[OxO2831[74]];for(var i=1;i<33;i++){if(Ox2a6[OxO2831[25]]/6>=i){hex=Ox2a6.substr((i-1)*6,6);var Ox2b7=HexToRgb(hex);var title=formatString(msg.RecentTooltip,hex,Ox2b7[0],Ox2b7[1],Ox2b7[2]);SetBg(document[OxO2831[86]][OxO2831[85]+i],hex);SetTitle(document[OxO2831[86]][OxO2831[85]+i],title);document[OxO2831[86]][OxO2831[85]+i][OxO2831[2]]=pnlRecent_Click;} else {document[OxO2831[86]][OxO2831[85]+i][OxO2831[88]][OxO2831[87]]=OxO2831[89];} ;} ;} ;function pnlRecent_Click(){frm[OxO2831[13]][OxO2831[79]]=event[OxO2831[91]][OxO2831[88]][OxO2831[90]].substr(1,6).toUpperCase();Hex_Changed();} ;function pnlOldClick_Click(){frm[OxO2831[13]][OxO2831[79]]=pnlOldColor[OxO2831[88]][OxO2831[90]].substr(1,6).toUpperCase();Hex_Changed();} ;function rdoHsb_Hue_Click(){frm[OxO2831[15]][OxO2831[80]]=true;ColorMode_Changed();} ;function rdoHsb_Saturation_Click(){frm[OxO2831[16]][OxO2831[80]]=true;ColorMode_Changed();} ;function rdoHsb_Brightness_Click(){frm[OxO2831[17]][OxO2831[80]]=true;ColorMode_Changed();} ;function rdoRgb_Red_Click(){frm[OxO2831[18]][OxO2831[80]]=true;ColorMode_Changed();} ;function rdoRgb_Green_Click(){frm[OxO2831[19]][OxO2831[80]]=true;ColorMode_Changed();} ;function rdoRgb_Blue_Click(){frm[OxO2831[20]][OxO2831[80]]=true;ColorMode_Changed();} ;function Hide(){for(var i=0;i<arguments[OxO2831[25]];i++){arguments[i][OxO2831[88]][OxO2831[92]]=OxO2831[93];} ;} ;function Show(){for(var i=0;i<arguments[OxO2831[25]];i++){arguments[i][OxO2831[88]][OxO2831[92]]=OxO2831[84];} ;} ;function SetValue(){for(var i=0;i<arguments[OxO2831[25]];i+=2){arguments[i][OxO2831[79]]=arguments[i+1];} ;} ;function SetTitle(){for(var i=0;i<arguments[OxO2831[25]];i+=2){arguments[i][OxO2831[94]]=arguments[i+1];} ;} ;function SetHTML(){for(var i=0;i<arguments[OxO2831[25]];i+=2){arguments[i][OxO2831[95]]=arguments[i+1];} ;} ;function SetBg(){for(var i=0;i<arguments[OxO2831[25]];i+=2){arguments[i][OxO2831[88]][OxO2831[90]]=OxO2831[73]+arguments[i+1];} ;} ;function SetBgPosition(){for(var i=0;i<arguments[OxO2831[25]];i+=3){arguments[i][OxO2831[88]][OxO2831[96]]=arguments[i+1]+OxO2831[97]+arguments[i+2]+OxO2831[98];} ;} ;function ColorMode_Changed(){for(var i=0;i<6;i++){if(frm[OxO2831[82]][i][OxO2831[80]]){ColorMode=i;} ;} ;SetCookie(OxO2831[81],ColorMode,60*60*24*365);Hide(pnlGradientHsbHue_Hue,pnlGradientHsbHue_Black,pnlGradientHsbHue_White,pnlVerticalHsbHue_Background,pnlVerticalHsbSaturation_Hue,pnlVerticalHsbSaturation_White,pnlVerticalHsbBrightness_Hue,pnlVerticalHsbBrightness_Black,pnlVerticalRgb_Start,pnlVerticalRgb_End,pnlGradientRgb_Base,pnlGradientRgb_Invert,pnlGradientRgb_Overlay1,pnlGradientRgb_Overlay2);switch(ColorMode){case 0:Show(pnlGradientHsbHue_Hue,pnlGradientHsbHue_Black,pnlGradientHsbHue_White,pnlVerticalHsbHue_Background);Hsb_Changed();break ;;case 1:Show(pnlVerticalHsbSaturation_Hue,pnlVerticalHsbSaturation_White,pnlGradientRgb_Base,pnlGradientRgb_Overlay1,pnlGradientRgb_Overlay2);SetBgPosition(pnlGradientRgb_Base,0,0);SetBg(pnlGradientRgb_Overlay1,OxO2831[78],pnlGradientRgb_Overlay2,OxO2831[99]);pnlGradientRgb_Overlay1[OxO2831[88]][OxO2831[100]]=5;pnlGradientRgb_Overlay2[OxO2831[88]][OxO2831[100]]=6;Hsb_Changed();break ;;case 2:Show(pnlVerticalHsbBrightness_Hue,pnlVerticalHsbBrightness_Black,pnlGradientRgb_Base,pnlGradientRgb_Overlay1,pnlGradientRgb_Overlay2);SetBgPosition(pnlGradientRgb_Base,0,0);SetBg(pnlGradientRgb_Overlay1,OxO2831[99],pnlGradientRgb_Overlay2,OxO2831[78]);pnlGradientRgb_Overlay1[OxO2831[88]][OxO2831[100]]=6;pnlGradientRgb_Overlay2[OxO2831[88]][OxO2831[100]]=5;Hsb_Changed();break ;;case 3:Show(pnlVerticalRgb_Start,pnlVerticalRgb_End,pnlGradientRgb_Base,pnlGradientRgb_Invert);SetBgPosition(pnlGradientRgb_Base,256,0,pnlGradientRgb_Invert,256,0);Rgb_Changed();break ;;case 4:Show(pnlVerticalRgb_Start,pnlVerticalRgb_End,pnlGradientRgb_Base,pnlGradientRgb_Invert);SetBgPosition(pnlGradientRgb_Base,0,256,pnlGradientRgb_Invert,0,256);Rgb_Changed();break ;;case 5:Show(pnlVerticalRgb_Start,pnlVerticalRgb_End,pnlGradientRgb_Base,pnlGradientRgb_Invert);SetBgPosition(pnlGradientRgb_Base,256,256,pnlGradientRgb_Invert,256,256);Rgb_Changed();break ;;default:break ;;} ;} ;function btnWebSafeColor_Click(){var Ox2b7=HexToRgb(frm[OxO2831[13]].value);Ox2b7=RgbToWebSafeRgb(Ox2b7);frm[OxO2831[13]][OxO2831[79]]=RgbToHex(Ox2b7);Hex_Changed();} ;function checkWebSafe(){var Ox2b7=Form_Get_Rgb();if(RgbIsWebSafe(Ox2b7)){Hide(frm.btnWebSafeColor,pnlWebSafeColor,pnlWebSafeColorBorder);} else {Ox2b7=RgbToWebSafeRgb(Ox2b7);SetBg(pnlWebSafeColor,RgbToHex(Ox2b7));Show(frm.btnWebSafeColor,pnlWebSafeColor,pnlWebSafeColorBorder);} ;} ;function validateNumber(){var Ox2cc=String.fromCharCode(event.keyCode);if(IgnoreKey()){return ;} ;if(OxO2831[101].indexOf(Ox2cc)!=-1){return ;} ;event[OxO2831[102]]=0;} ;function validateHex(){if(IgnoreKey()){return ;} ;var Ox2cc=String.fromCharCode(event.keyCode);if(OxO2831[103].indexOf(Ox2cc)!=-1){event[OxO2831[102]]=Ox2cc.toUpperCase().charCodeAt(0);return ;} ;if(OxO2831[104].indexOf(Ox2cc)!=-1){return ;} ;event[OxO2831[102]]=0;} ;function IgnoreKey(){var Ox2cc=String.fromCharCode(event.keyCode);var Ox2cf= new Array(0,8,9,13,27);if(Ox2cc==null){return true;} ;for(var i=0;i<5;i++){if(event[OxO2831[102]]==Ox2cf[i]){return true;} ;} ;return false;} ;function btnCancel_Click(){(top[OxO2831[105]]||top[OxO2831[106]])();} ;function btnOK_Click(){var hex= new String(frm[OxO2831[13]].value);try{window[OxO2831[107]]=hex;} catch(e){} ;recent=GetCookie(OxO2831[83])||OxO2831[84];for(var i=0;i<recent[OxO2831[25]];i+=6){if(recent.substr(i,6)==hex){recent=recent.substr(0,i)+recent.substr(i+6);i-=6;} ;} ;if(recent[OxO2831[25]]>31*6){recent=recent.substr(0,31*6);} ;recent=frm[OxO2831[13]][OxO2831[79]]+recent;SetCookie(OxO2831[83],recent,60*60*24*365);(top[OxO2831[105]]||top[OxO2831[106]])();} ;function SetGradientPosition(x,y){x=x-POSITIONADJUSTX+5;y=y-POSITIONADJUSTY+5;x-=7;y-=27;x=x<0?0:x>255?255:x;y=y<0?0:y>255?255:y;SetBgPosition(pnlGradientPosition,x-5,y-5);switch(ColorMode){case 0:var Ox2d3= new Array(0,0,0);Ox2d3[1]=x/255;Ox2d3[2]=1-(y/255);frm[OxO2831[8]][OxO2831[79]]=Math.round(Ox2d3[1]*100);frm[OxO2831[9]][OxO2831[79]]=Math.round(Ox2d3[2]*100);Hsb_Changed();break ;;case 1:var Ox2d3= new Array(0,0,0);Ox2d3[0]=x/255;Ox2d3[2]=1-(y/255);frm[OxO2831[6]][OxO2831[79]]=Ox2d3[0]==1?0:Math.round(Ox2d3[0]*360);frm[OxO2831[9]][OxO2831[79]]=Math.round(Ox2d3[2]*100);Hsb_Changed();break ;;case 2:var Ox2d3= new Array(0,0,0);Ox2d3[0]=x/255;Ox2d3[1]=1-(y/255);frm[OxO2831[6]][OxO2831[79]]=Ox2d3[0]==1?0:Math.round(Ox2d3[0]*360);frm[OxO2831[8]][OxO2831[79]]=Math.round(Ox2d3[1]*100);Hsb_Changed();break ;;case 3:var Ox2b7= new Array(0,0,0);Ox2b7[1]=255-y;Ox2b7[2]=x;frm[OxO2831[11]][OxO2831[79]]=Ox2b7[1];frm[OxO2831[12]][OxO2831[79]]=Ox2b7[2];Rgb_Changed();break ;;case 4:var Ox2b7= new Array(0,0,0);Ox2b7[0]=255-y;Ox2b7[2]=x;frm[OxO2831[10]][OxO2831[79]]=Ox2b7[0];frm[OxO2831[12]][OxO2831[79]]=Ox2b7[2];Rgb_Changed();break ;;case 5:var Ox2b7= new Array(0,0,0);Ox2b7[0]=x;Ox2b7[1]=255-y;frm[OxO2831[10]][OxO2831[79]]=Ox2b7[0];frm[OxO2831[11]][OxO2831[79]]=Ox2b7[1];Rgb_Changed();break ;;} ;} ;function Hex_Changed(){var hex=Form_Get_Hex();var Ox2b7=HexToRgb(hex);var Ox2d3=RgbToHsb(Ox2b7);Form_Set_Rgb(Ox2b7);Form_Set_Hsb(Ox2d3);SetBg(pnlNewColor,hex);SetupCursors();SetupGradients();checkWebSafe();} ;function Rgb_Changed(){var Ox2b7=Form_Get_Rgb();var Ox2d3=RgbToHsb(Ox2b7);var hex=RgbToHex(Ox2b7);Form_Set_Hsb(Ox2d3);Form_Set_Hex(hex);SetBg(pnlNewColor,hex);SetupCursors();SetupGradients();checkWebSafe();} ;function Hsb_Changed(){var Ox2d3=Form_Get_Hsb();var Ox2b7=HsbToRgb(Ox2d3);var hex=RgbToHex(Ox2b7);Form_Set_Rgb(Ox2b7);Form_Set_Hex(hex);SetBg(pnlNewColor,hex);SetupCursors();SetupGradients();checkWebSafe();} ;function Form_Set_Hex(hex){frm[OxO2831[13]][OxO2831[79]]=hex;} ;function Form_Get_Hex(){var hex= new String(frm[OxO2831[13]].value);for(var i=0;i<hex[OxO2831[25]];i++){if(OxO2831[108].indexOf(hex.substr(i,1))==-1){hex=OxO2831[99];frm[OxO2831[13]][OxO2831[79]]=hex;alert(formatString(msg.BadNumber,OxO2831[99],OxO2831[78]));break ;} ;} ;while(hex[OxO2831[25]]<6){hex=OxO2831[109]+hex;} ;return hex;} ;function Form_Get_Hsb(){var Ox2d3= new Array(0,0,0);Ox2d3[0]= new Number(frm[OxO2831[6]].value)/360;Ox2d3[1]= new Number(frm[OxO2831[8]].value)/100;Ox2d3[2]= new Number(frm[OxO2831[9]].value)/100;if(Ox2d3[0]>1||isNaN(Ox2d3[0])){Ox2d3[0]=1;frm[OxO2831[6]][OxO2831[79]]=360;alert(formatString(msg.BadNumber,0,360));} ;if(Ox2d3[1]>1||isNaN(Ox2d3[1])){Ox2d3[1]=1;frm[OxO2831[8]][OxO2831[79]]=100;alert(formatString(msg.BadNumber,0,100));} ;if(Ox2d3[2]>1||isNaN(Ox2d3[2])){Ox2d3[2]=1;frm[OxO2831[9]][OxO2831[79]]=100;alert(formatString(msg.BadNumber,0,100));} ;return Ox2d3;} ;function Form_Set_Hsb(Ox2d3){SetValue(frm.txtHSB_Hue,Math.round(Ox2d3[0]*360),frm.txtHSB_Saturation,Math.round(Ox2d3[1]*100),frm.txtHSB_Brightness,Math.round(Ox2d3[2]*100));} ;function Form_Get_Rgb(){var Ox2b7= new Array(0,0,0);Ox2b7[0]= new Number(frm[OxO2831[10]].value);Ox2b7[1]= new Number(frm[OxO2831[11]].value);Ox2b7[2]= new Number(frm[OxO2831[12]].value);if(Ox2b7[0]>255||isNaN(Ox2b7[0])||Ox2b7[0]!=Math.round(Ox2b7[0])){Ox2b7[0]=255;frm[OxO2831[10]][OxO2831[79]]=255;alert(formatString(msg.BadNumber,0,255));} ;if(Ox2b7[1]>255||isNaN(Ox2b7[1])||Ox2b7[1]!=Math.round(Ox2b7[1])){Ox2b7[1]=255;frm[OxO2831[11]][OxO2831[79]]=255;alert(formatString(msg.BadNumber,0,255));} ;if(Ox2b7[2]>255||isNaN(Ox2b7[2])||Ox2b7[2]!=Math.round(Ox2b7[2])){Ox2b7[2]=255;frm[OxO2831[12]][OxO2831[79]]=255;alert(formatString(msg.BadNumber,0,255));} ;return Ox2b7;} ;function Form_Set_Rgb(Ox2b7){frm[OxO2831[10]][OxO2831[79]]=Ox2b7[0];frm[OxO2831[11]][OxO2831[79]]=Ox2b7[1];frm[OxO2831[12]][OxO2831[79]]=Ox2b7[2];} ;function SetupCursors(){var Ox2d3=Form_Get_Hsb();var Ox2b7=Form_Get_Rgb();if(RgbToYuv(Ox2b7)[0]>=0.5){SetGradientPositionDark();} else {SetGradientPositionLight();} ;if(event[OxO2831[91]]!=null){if(event[OxO2831[91]][OxO2831[110]]==OxO2831[111]){return ;} ;if(event[OxO2831[91]][OxO2831[110]]==OxO2831[112]){return ;} ;} ;var x;var y;var z;if(ColorMode>=0&&ColorMode<=2){for(var i=0;i<3;i++){Ox2d3[i]*=255;} ;} ;switch(ColorMode){case 0:x=Ox2d3[1];y=Ox2d3[2];z=Ox2d3[0]==0?1:Ox2d3[0];break ;;case 1:x=Ox2d3[0]==0?1:Ox2d3[0];y=Ox2d3[2];z=Ox2d3[1];break ;;case 2:x=Ox2d3[0]==0?1:Ox2d3[0];y=Ox2d3[1];z=Ox2d3[2];break ;;case 3:x=Ox2b7[2];y=Ox2b7[1];z=Ox2b7[0];break ;;case 4:x=Ox2b7[2];y=Ox2b7[0];z=Ox2b7[1];break ;;case 5:x=Ox2b7[0];y=Ox2b7[1];z=Ox2b7[2];break ;;} ;y=255-y;z=255-z;SetBgPosition(pnlGradientPosition,x-5,y-5);pnlVerticalPosition[OxO2831[88]][OxO2831[113]]=(z+27)+OxO2831[98];} ;function SetupGradients(){var Ox2d3=Form_Get_Hsb();var Ox2b7=Form_Get_Rgb();switch(ColorMode){case 0:SetBg(pnlGradientHsbHue_Hue,RgbToHex(HueToRgb(Ox2d3[0])));break ;;case 1:var b= new Array();for(var i=0;i<3;i++){b[i]=Math.round(Ox2d3[2]*255);} ;SetBg(pnlGradientHsbHue_Hue,RgbToHex(HueToRgb(Ox2d3[0])),pnlVerticalHsbSaturation_Hue,RgbToHex(HsbToRgb( new Array(Ox2d3[0],1,Ox2d3[2]))),pnlVerticalHsbSaturation_White,RgbToHex(b));pnlGradientRgb_Overlay1[OxO2831[115]][0][OxO2831[114]]=(100-Math.round(Ox2d3[1]*100));break ;;case 2:SetBg(pnlVerticalHsbBrightness_Hue,RgbToHex(HsbToRgb( new Array(Ox2d3[0],Ox2d3[1],1))));pnlGradientRgb_Overlay1[OxO2831[115]][0][OxO2831[114]]=(100-Math.round(Ox2d3[2]*100));break ;;case 3:pnlGradientRgb_Invert[OxO2831[115]][3][OxO2831[114]]=100-Math.round((Ox2b7[0]/255)*100);SetBg(pnlVerticalRgb_Start,RgbToHex( new Array(0xFF,Ox2b7[1],Ox2b7[2])),pnlVerticalRgb_End,RgbToHex( new Array(0x00,Ox2b7[1],Ox2b7[2])));break ;;case 4:pnlGradientRgb_Invert[OxO2831[115]][3][OxO2831[114]]=100-Math.round((Ox2b7[1]/255)*100);SetBg(pnlVerticalRgb_Start,RgbToHex( new Array(Ox2b7[0],0xFF,Ox2b7[2])),pnlVerticalRgb_End,RgbToHex( new Array(Ox2b7[0],0x00,Ox2b7[2])));break ;;case 5:pnlGradientRgb_Invert[OxO2831[115]][3][OxO2831[114]]=100-Math.round((Ox2b7[2]/255)*100);SetBg(pnlVerticalRgb_Start,RgbToHex( new Array(Ox2b7[0],Ox2b7[1],0xFF)),pnlVerticalRgb_End,RgbToHex( new Array(Ox2b7[0],Ox2b7[1],0x00)));break ;;default:;} ;} ;function SetGradientPositionDark(){if(GradientPositionDark){return ;} ;GradientPositionDark=true;pnlGradientPosition[OxO2831[88]][OxO2831[116]]=OxO2831[117];} ;function SetGradientPositionLight(){if(!GradientPositionDark){return ;} ;GradientPositionDark=false;pnlGradientPosition[OxO2831[88]][OxO2831[116]]=OxO2831[118];} ;function pnlGradient_Top_Click(){event[OxO2831[119]]=true;SetGradientPosition(event[OxO2831[120]]-5,event[OxO2831[121]]-5);pnlGradient_Top[OxO2831[122]]=OxO2831[123];} ;function pnlGradient_Top_MouseMove(){event[OxO2831[119]]=true;if(event[OxO2831[124]]!=1){return ;} ;SetGradientPosition(event[OxO2831[120]]-5,event[OxO2831[121]]-5);} ;function pnlGradient_Top_MouseDown(){event[OxO2831[119]]=true;SetGradientPosition(event[OxO2831[120]]-5,event[OxO2831[121]]-5);pnlGradient_Top[OxO2831[122]]=OxO2831[125];} ;function pnlGradient_Top_MouseUp(){event[OxO2831[119]]=true;SetGradientPosition(event[OxO2831[120]]-5,event[OxO2831[121]]-5);pnlGradient_Top[OxO2831[122]]=OxO2831[123];} ;function Document_MouseUp(){event[OxO2831[119]]=true;pnlGradient_Top[OxO2831[122]]=OxO2831[123];} ;function SetVerticalPosition(z){var z=z-POSITIONADJUSTZ;if(z<27){z=27;} ;if(z>282){z=282;} ;pnlVerticalPosition[OxO2831[88]][OxO2831[113]]=z+OxO2831[98];z=1-((z-27)/255);switch(ColorMode){case 0:if(z==1){z=0;} ;frm[OxO2831[6]][OxO2831[79]]=Math.round(z*360);Hsb_Changed();break ;;case 1:frm[OxO2831[8]][OxO2831[79]]=Math.round(z*100);Hsb_Changed();break ;;case 2:frm[OxO2831[9]][OxO2831[79]]=Math.round(z*100);Hsb_Changed();break ;;case 3:frm[OxO2831[10]][OxO2831[79]]=Math.round(z*255);Rgb_Changed();break ;;case 4:frm[OxO2831[11]][OxO2831[79]]=Math.round(z*255);Rgb_Changed();break ;;case 5:frm[OxO2831[12]][OxO2831[79]]=Math.round(z*255);Rgb_Changed();break ;;} ;} ;function pnlVertical_Top_Click(){SetVerticalPosition(event[OxO2831[121]]-5);event[OxO2831[119]]=true;} ;function pnlVertical_Top_MouseMove(){if(event[OxO2831[124]]!=1){return ;} ;SetVerticalPosition(event[OxO2831[121]]-5);event[OxO2831[119]]=true;} ;function pnlVertical_Top_MouseDown(){SetVerticalPosition(event[OxO2831[121]]-5);event[OxO2831[119]]=true;} ;function pnlVertical_Top_MouseUp(){SetVerticalPosition(event[OxO2831[121]]-5);event[OxO2831[119]]=true;} ;function SetCookie(name,Ox4f,Ox55){var Ox56=name+OxO2831[126]+escape(Ox4f)+OxO2831[127];if(Ox55){var Ox57= new Date();Ox57.setSeconds(Ox57.getSeconds()+Ox55);Ox56+=OxO2831[128]+Ox57.toUTCString()+OxO2831[129];} ;document[OxO2831[130]]=Ox56;} ;function GetCookie(name){var Ox59=document[OxO2831[130]].split(OxO2831[129]);for(var i=0;i<Ox59[OxO2831[25]];i++){var Ox5a=Ox59[i].split(OxO2831[126]);if(name==Ox5a[0].replace(/\s/g,OxO2831[84])){return unescape(Ox5a[1]);} ;} ;} ;function GetCookieDictionary(){var Ox12a={};var Ox59=document[OxO2831[130]].split(OxO2831[129]);for(var i=0;i<Ox59[OxO2831[25]];i++){var Ox5a=Ox59[i].split(OxO2831[126]);Ox12a[Ox5a[0].replace(/\s/g,OxO2831[84])]=unescape(Ox5a[1]);} ;return Ox12a;} ;function RgbIsWebSafe(Ox2b7){var hex=RgbToHex(Ox2b7);for(var i=0;i<3;i++){if(OxO2831[131].indexOf(hex.substr(i*2,2))==-1){return false;} ;} ;return true;} ;function RgbToWebSafeRgb(Ox2b7){var Ox2ed= new Array(Ox2b7[0],Ox2b7[1],Ox2b7[2]);if(RgbIsWebSafe(Ox2b7)){return Ox2ed;} ;var Ox2ee= new Array(0x00,0x33,0x66,0x99,0xCC,0xFF);for(var i=0;i<3;i++){for(var Ox25=1;Ox25<6;Ox25++){if(Ox2ed[i]>Ox2ee[Ox25-1]&&Ox2ed[i]<Ox2ee[Ox25]){if(Ox2ed[i]-Ox2ee[Ox25-1]>Ox2ee[Ox25]-Ox2ed[i]){Ox2ed[i]=Ox2ee[Ox25];} else {Ox2ed[i]=Ox2ee[Ox25-1];} ;break ;} ;} ;} ;return Ox2ed;} ;function RgbToYuv(Ox2b7){var Ox2f0= new Array();Ox2f0[0]=(Ox2b7[0]*0.299+Ox2b7[1]*0.587+Ox2b7[2]*0.114)/255;Ox2f0[1]=(Ox2b7[0]*-0.169+Ox2b7[1]*-0.332+Ox2b7[2]*0.500+128)/255;Ox2f0[2]=(Ox2b7[0]*0.500+Ox2b7[1]*-0.419+Ox2b7[2]*-0.0813+128)/255;return Ox2f0;} ;function RgbToHsb(Ox2b7){var Ox2f2= new Array(Ox2b7[0],Ox2b7[1],Ox2b7[2]);var Ox2f3= new Number(1);var Ox2f4= new Number(0);var Ox2f5= new Number(1);var Ox2d3= new Array(0,0,0);var Ox2f6= new Array();for(var i=0;i<3;i++){Ox2f2[i]=Ox2b7[i]/255;if(Ox2f2[i]<Ox2f3){Ox2f3=Ox2f2[i];} ;if(Ox2f2[i]>Ox2f4){Ox2f4=Ox2f2[i];} ;} ;Ox2f5=Ox2f4-Ox2f3;Ox2d3[2]=Ox2f4;if(Ox2f5==0){return Ox2d3;} ;Ox2d3[1]=Ox2f5/Ox2f4;for(var i=0;i<3;i++){Ox2f6[i]=(((Ox2f4-Ox2f2[i])/6)+(Ox2f5/2))/Ox2f5;} ;if(Ox2f2[0]==Ox2f4){Ox2d3[0]=Ox2f6[2]-Ox2f6[1];} else {if(Ox2f2[1]==Ox2f4){Ox2d3[0]=(1/3)+Ox2f6[0]-Ox2f6[2];} else {if(Ox2f2[2]==Ox2f4){Ox2d3[0]=(2/3)+Ox2f6[1]-Ox2f6[0];} ;} ;} ;if(Ox2d3[0]<0){Ox2d3[0]+=1;} else {if(Ox2d3[0]>1){Ox2d3[0]-=1;} ;} ;return Ox2d3;} ;function HsbToRgb(Ox2d3){var Ox2b7=HueToRgb(Ox2d3[0]);var Ox11f=Ox2d3[2]*255;for(var i=0;i<3;i++){Ox2b7[i]=Ox2b7[i]*Ox2d3[2];Ox2b7[i]=((Ox2b7[i]-Ox11f)*Ox2d3[1])+Ox11f;Ox2b7[i]=Math.round(Ox2b7[i]);} ;return Ox2b7;} ;function RgbToHex(Ox2b7){var hex= new String();for(var i=0;i<3;i++){Ox2b7[2-i]=Math.round(Ox2b7[2-i]);hex=Ox2b7[2-i].toString(16)+hex;if(hex[OxO2831[25]]%2==1){hex=OxO2831[109]+hex;} ;} ;return hex.toUpperCase();} ;function HexToRgb(hex){var Ox2b7= new Array();for(var i=0;i<3;i++){Ox2b7[i]= new Number(OxO2831[132]+hex.substr(i*2,2));} ;return Ox2b7;} ;function HueToRgb(Ox2fb){var Ox2fc=Ox2fb*360;var Ox2b7= new Array(0,0,0);var Ox2fd=(Ox2fc%60)/60;if(Ox2fc<60){Ox2b7[0]=255;Ox2b7[1]=Ox2fd*255;} else {if(Ox2fc<120){Ox2b7[1]=255;Ox2b7[0]=(1-Ox2fd)*255;} else {if(Ox2fc<180){Ox2b7[1]=255;Ox2b7[2]=Ox2fd*255;} else {if(Ox2fc<240){Ox2b7[2]=255;Ox2b7[1]=(1-Ox2fd)*255;} else {if(Ox2fc<300){Ox2b7[2]=255;Ox2b7[0]=Ox2fd*255;} else {if(Ox2fc<360){Ox2b7[0]=255;Ox2b7[2]=(1-Ox2fd)*255;} ;} ;} ;} ;} ;} ;return Ox2b7;} ;function CheckHexSelect(){if(window[OxO2831[133]]&&window[OxO2831[134]]&&frm[OxO2831[13]]){var Oxdb=OxO2831[73]+frm[OxO2831[13]][OxO2831[79]];if(Oxdb[OxO2831[25]]==7){if(window[OxO2831[135]]!=Oxdb){window[OxO2831[135]]=Oxdb;window.do_select(Oxdb);} ;} ;} ;} ;setInterval(CheckHexSelect,10);