var OxOc3a2=["inp_src","box1","box2","box3","box4","box5","box6","box7","box8","box9","inp_start","CustomBullet","nodeName","LI","parentNode","none","decimal","upper-roman","upper-alpha","lower-alpha","lower-roman","disc","circle","square","listStyleType","style","border","solid 2px #708090","listStyleImage","","value","visibility","hidden","length","start","url(\x27","\x27)","visible","UL","OL","document","firstChild","element","solid 2px #ffffff","solid 2px #ECECF6","onclick"];var inp_src=Window_GetElement(window,OxOc3a2[0],true);var box1=Window_GetElement(window,OxOc3a2[1],true);var box2=Window_GetElement(window,OxOc3a2[2],true);var box3=Window_GetElement(window,OxOc3a2[3],true);var box4=Window_GetElement(window,OxOc3a2[4],true);var box5=Window_GetElement(window,OxOc3a2[5],true);var box6=Window_GetElement(window,OxOc3a2[6],true);var box7=Window_GetElement(window,OxOc3a2[7],true);var box8=Window_GetElement(window,OxOc3a2[8],true);var box9=Window_GetElement(window,OxOc3a2[9],true);var inp_start=Window_GetElement(window,OxOc3a2[10],true);var CustomBullet=Window_GetElement(window,OxOc3a2[11],true);OriginalnodeName=element[OxOc3a2[12]];if(element[OxOc3a2[12]]&&element[OxOc3a2[12]]==OxOc3a2[13]){OriginalnodeName=(element[OxOc3a2[14]])[OxOc3a2[12]];} ;var OriginalnodeName,CurrentnodeName,selectedObject;SyncToView=function SyncToView_LI(){if(element[OxOc3a2[12]]==OxOc3a2[13]){element=element[OxOc3a2[14]];} ;switch((element[OxOc3a2[25]][OxOc3a2[24]]).toLowerCase()){case OxOc3a2[15]:selectedObject=box1;break ;;case OxOc3a2[16]:selectedObject=box2;break ;;case OxOc3a2[17]:selectedObject=box3;break ;;case OxOc3a2[18]:selectedObject=box4;break ;;case OxOc3a2[19]:selectedObject=box5;break ;;case OxOc3a2[20]:selectedObject=box6;break ;;case OxOc3a2[21]:selectedObject=box7;break ;;case OxOc3a2[22]:selectedObject=box8;break ;;case OxOc3a2[23]:selectedObject=box9;break ;;default:selectedObject=box1;break ;;} ;selectedObject[OxOc3a2[25]][OxOc3a2[26]]=OxOc3a2[27];if(element[OxOc3a2[25]][OxOc3a2[28]]==OxOc3a2[29]){inp_src[OxOc3a2[30]]=OxOc3a2[29];CustomBullet[OxOc3a2[25]][OxOc3a2[31]]=OxOc3a2[32];} else {var Ox11f;Ox11f=element[OxOc3a2[25]][OxOc3a2[28]];Ox11f=Ox11f.substring(4,Ox11f[OxOc3a2[33]]-1);inp_src[OxOc3a2[30]]=Ox11f;} ;} ;SyncTo=function SyncTo_LI(element){switch(selectedObject){case box1:;case box2:;case box3:;case box4:;case box5:;case box6:try{element.setAttribute(OxOc3a2[34],inp_start.value);} catch(er){} ;break ;;case box7:;case box8:;case box9:break ;;} ;if(inp_src[OxOc3a2[30]]){element[OxOc3a2[25]][OxOc3a2[28]]=OxOc3a2[35]+inp_src[OxOc3a2[30]]+OxOc3a2[36];} ;} ;function ToggleCustomBullet(){if(CustomBullet[OxOc3a2[25]][OxOc3a2[31]]==OxOc3a2[32]){CustomBullet[OxOc3a2[25]][OxOc3a2[31]]=OxOc3a2[37];} else {CustomBullet[OxOc3a2[25]][OxOc3a2[31]]=OxOc3a2[32];} ;} ;function doClick1(Ox36c){if(element[OxOc3a2[12]]==OxOc3a2[13]){element=element[OxOc3a2[14]];} ;selectedObject=Ox36c;switch(selectedObject){case box1:element[OxOc3a2[25]][OxOc3a2[24]]=OxOc3a2[15];break ;;case box2:element[OxOc3a2[25]][OxOc3a2[24]]=OxOc3a2[16];break ;;case box3:element[OxOc3a2[25]][OxOc3a2[24]]=OxOc3a2[17];break ;;case box4:element[OxOc3a2[25]][OxOc3a2[24]]=OxOc3a2[18];break ;;case box5:element[OxOc3a2[25]][OxOc3a2[24]]=OxOc3a2[19];break ;;case box6:element[OxOc3a2[25]][OxOc3a2[24]]=OxOc3a2[20];break ;;case box7:element[OxOc3a2[25]][OxOc3a2[24]]=OxOc3a2[21];break ;;case box8:element[OxOc3a2[25]][OxOc3a2[24]]=OxOc3a2[22];break ;;case box9:element[OxOc3a2[25]][OxOc3a2[24]]=OxOc3a2[23];break ;;} ;var Ox79=false;switch(selectedObject){case box1:;case box2:;case box3:;case box4:;case box5:;case box6:if(OriginalnodeName==OxOc3a2[38]){OriginalnodeName=OxOc3a2[39];Ox79=true;} ;break ;;case box7:;case box8:;case box9:if(OriginalnodeName==OxOc3a2[39]){OriginalnodeName=OxOc3a2[38];Ox79=true;} ;break ;;} ;if(Ox79){var Ox583=editwin[OxOc3a2[40]].createElement(OriginalnodeName);while(element[OxOc3a2[41]]){Ox583.appendChild(element.firstChild);} ;element[OxOc3a2[14]].insertBefore(Ox583,element);element[OxOc3a2[14]].removeChild(element);var arg=Window_FindDialogArguments(window);arg[OxOc3a2[42]]=element=Ox583;} ;box1[OxOc3a2[25]][OxOc3a2[26]]=OxOc3a2[43];box2[OxOc3a2[25]][OxOc3a2[26]]=OxOc3a2[43];box3[OxOc3a2[25]][OxOc3a2[26]]=OxOc3a2[43];box4[OxOc3a2[25]][OxOc3a2[26]]=OxOc3a2[43];box5[OxOc3a2[25]][OxOc3a2[26]]=OxOc3a2[43];box6[OxOc3a2[25]][OxOc3a2[26]]=OxOc3a2[43];box7[OxOc3a2[25]][OxOc3a2[26]]=OxOc3a2[43];box8[OxOc3a2[25]][OxOc3a2[26]]=OxOc3a2[43];box9[OxOc3a2[25]][OxOc3a2[26]]=OxOc3a2[43];selectedObject[OxOc3a2[25]][OxOc3a2[26]]=OxOc3a2[27];inp_src[OxOc3a2[30]]=OxOc3a2[29];SyncTo();} ;function doMouseOut(Ox36c){if(Ox36c==selectedObject){Ox36c[OxOc3a2[25]][OxOc3a2[26]]=OxOc3a2[27];} else {Ox36c[OxOc3a2[25]][OxOc3a2[26]]=OxOc3a2[43];} ;} ;function doMouseOver(Ox36c){Ox36c[OxOc3a2[25]][OxOc3a2[26]]=OxOc3a2[44];} ;btnbrowse[OxOc3a2[45]]=function btnbrowse_onclick(){function Ox35a(Ox13d){if(Ox13d){inp_src[OxOc3a2[30]]=Ox13d;SyncTo(element);} ;} ;editor.SetNextDialogWindow(window);if(Browser_IsSafari()){editor.ShowSelectImageDialog(Ox35a,inp_src.value,inp_src);} else {editor.ShowSelectImageDialog(Ox35a,inp_src.value);} ;} ;