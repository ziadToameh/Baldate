var OxOc79a=["inp_name","inp_access","inp_id","inp_index","inp_size","inp_Multiple","inp_Disabled","inp_item_text","inp_item_value","btnInsertItem","btnUpdateItem","btnDeleteItem","btnMoveUpItem","btnMoveDownItem","list_options","list_options2","inp_item_forecolor","inp_item_forecolor_Preview","inp_item_backcolor_Preview","text","value","color","style","backgroundColor","selectedIndex","options","Please select an item first","length","ondblclick","onclick","OPTION","document","id","cssText","Name","name","size","checked","disabled","multiple","tabIndex","","accessKey"];var inp_name=Window_GetElement(window,OxOc79a[0],true);var inp_access=Window_GetElement(window,OxOc79a[1],true);var inp_id=Window_GetElement(window,OxOc79a[2],true);var inp_index=Window_GetElement(window,OxOc79a[3],true);var inp_size=Window_GetElement(window,OxOc79a[4],true);var inp_Multiple=Window_GetElement(window,OxOc79a[5],true);var inp_Disabled=Window_GetElement(window,OxOc79a[6],true);var inp_item_text=Window_GetElement(window,OxOc79a[7],true);var inp_item_value=Window_GetElement(window,OxOc79a[8],true);var btnInsertItem=Window_GetElement(window,OxOc79a[9],true);var btnUpdateItem=Window_GetElement(window,OxOc79a[10],true);var btnDeleteItem=Window_GetElement(window,OxOc79a[11],true);var btnMoveUpItem=Window_GetElement(window,OxOc79a[12],true);var btnMoveDownItem=Window_GetElement(window,OxOc79a[13],true);var list_options=Window_GetElement(window,OxOc79a[14],true);var list_options2=Window_GetElement(window,OxOc79a[15],true);var inp_item_forecolor=Window_GetElement(window,OxOc79a[16],true);var inp_item_forecolor=Window_GetElement(window,OxOc79a[16],true);var inp_item_forecolor_Preview=Window_GetElement(window,OxOc79a[17],true);var inp_item_backcolor_Preview=Window_GetElement(window,OxOc79a[18],true);function SetOption(Ox1a5){Ox1a5[OxOc79a[19]]=inp_item_text[OxOc79a[20]];Ox1a5[OxOc79a[20]]=inp_item_value[OxOc79a[20]];Ox1a5[OxOc79a[22]][OxOc79a[21]]=inp_item_forecolor[OxOc79a[20]];Ox1a5[OxOc79a[22]][OxOc79a[23]]=inp_item_backcolor[OxOc79a[20]];} ;function SetOption2(Ox1a5){Ox1a5[OxOc79a[19]]=inp_item_value[OxOc79a[20]];Ox1a5[OxOc79a[20]]=inp_item_text[OxOc79a[20]];Ox1a5[OxOc79a[22]][OxOc79a[21]]=inp_item_forecolor[OxOc79a[20]];Ox1a5[OxOc79a[22]][OxOc79a[23]]=inp_item_backcolor[OxOc79a[20]];} ;function Select(Ox1a5){var Ox59c=Ox1a5[OxOc79a[24]];list_options[OxOc79a[24]]=Ox59c;list_options2[OxOc79a[24]]=Ox59c;inp_item_text[OxOc79a[20]]=list_options2[OxOc79a[20]];inp_item_value[OxOc79a[20]]=list_options[OxOc79a[20]];} ;function Insert(){var Ox1a5= new Option();SetOption(Ox1a5);list_options[OxOc79a[25]].add(Ox1a5);var Ox59e= new Option();SetOption2(Ox59e);list_options2[OxOc79a[25]].add(Ox59e);FireUIChanged();} ;function Update(){if(list_options[OxOc79a[24]]==-1){alert(OxOc79a[26]);return ;} ;var Ox1a5=list_options.options(list_options.selectedIndex);SetOption(Ox1a5);var Ox59e=list_options2.options(list_options2.selectedIndex);SetOption2(Ox59e);FireUIChanged();} ;function Move(Ox141){var Ox59c=list_options[OxOc79a[24]];if(Ox59c<0){return ;} ;var Ox5a0=Ox59c-Ox141;if(Ox5a0<0){Ox5a0=0;} ;if(Ox5a0>(list_options[OxOc79a[25]][OxOc79a[27]]-1)){Ox5a0=list_options[OxOc79a[25]][OxOc79a[27]]-1;} ;if(Ox59c==Ox5a0){return ;} ;var Ox1a5=list_options.options(list_options.selectedIndex);var Ox12=list_options2[OxOc79a[20]];var Ox8=list_options[OxOc79a[20]];Delete();inp_item_text[OxOc79a[20]]=Ox12;inp_item_value[OxOc79a[20]]=Ox8;var Ox1a5= new Option();SetOption(Ox1a5);list_options[OxOc79a[25]].add(Ox1a5,Ox5a0);var Ox59e= new Option();SetOption2(Ox59e);list_options2[OxOc79a[25]].add(Ox59e,Ox5a0);list_options[OxOc79a[24]]=Ox5a0;list_options2[OxOc79a[24]]=Ox5a0;FireUIChanged();} ;function Delete(){if(list_options[OxOc79a[24]]==-1||list_options[OxOc79a[24]]==-1){alert(OxOc79a[26]);return ;} ;var Ox5a1=list_options[OxOc79a[24]];var Ox1a5=list_options.options(list_options.selectedIndex);Ox1a5.removeNode(true);Ox1a5=list_options2.options(list_options2.selectedIndex);Ox1a5.removeNode(true);if(list_options[OxOc79a[25]][OxOc79a[27]]>Ox5a1){list_options[OxOc79a[24]]=Ox5a1;} else {if(list_options[OxOc79a[25]][OxOc79a[27]]){list_options[OxOc79a[24]]=list_options[OxOc79a[25]][OxOc79a[27]]-1;} ;} ;list_options.ondblclick();if(list_options2[OxOc79a[25]][OxOc79a[27]]>Ox5a1){list_options2[OxOc79a[24]]=Ox5a1;} else {if(list_options2[OxOc79a[25]][OxOc79a[27]]){list_options2[OxOc79a[24]]=list_options2[OxOc79a[25]][OxOc79a[27]]-1;} ;} ;FireUIChanged();} ;list_options[OxOc79a[28]]=function list_options_ondblclick(){if(list_options[OxOc79a[24]]==-1){return ;} ;var Ox1a5=list_options.options(list_options.selectedIndex);inp_item_text[OxOc79a[20]]=Ox1a5[OxOc79a[19]];inp_item_value[OxOc79a[20]]=Ox1a5[OxOc79a[20]];inp_item_forecolor[OxOc79a[20]]=inp_item_forecolor[OxOc79a[22]][OxOc79a[23]]=inp_item_forecolor_Preview[OxOc79a[22]][OxOc79a[23]]=Ox1a5[OxOc79a[22]][OxOc79a[21]];inp_item_backcolor[OxOc79a[20]]=inp_item_backcolor[OxOc79a[22]][OxOc79a[23]]=inp_item_backcolor_Preview[OxOc79a[22]][OxOc79a[23]]=Ox1a5[OxOc79a[22]][OxOc79a[23]];} ;inp_item_forecolor[OxOc79a[29]]=inp_item_forecolor_Preview[OxOc79a[29]]=function inp_item_forecolor_onclick(){SelectColor(inp_item_forecolor,inp_item_forecolor_Preview);} ;inp_item_backcolor[OxOc79a[29]]=inp_item_backcolor_Preview[OxOc79a[29]]=function inp_item_backcolor_onclick(){SelectColor(inp_item_backcolor,inp_item_backcolor_Preview);} ;function CopySelect(Ox5a6,Ox5a7){Ox5a7[OxOc79a[25]][OxOc79a[27]]=0;for(var i=0;i<Ox5a6[OxOc79a[25]][OxOc79a[27]];i++){var Ox5a8=Ox5a6[OxOc79a[25]][i];var Ox59e;if(Browser_IsWinIE()){Ox59e=Ox5a7[OxOc79a[31]].createElement(OxOc79a[30]);} else {Ox59e=document.createElement(OxOc79a[30]);} ;if(Ox5a7[OxOc79a[32]]!=OxOc79a[15]){Ox59e[OxOc79a[20]]=Ox5a8[OxOc79a[20]];Ox59e[OxOc79a[19]]=Ox5a8[OxOc79a[19]];} else {Ox59e[OxOc79a[20]]=Ox5a8[OxOc79a[19]];Ox59e[OxOc79a[19]]=Ox5a8[OxOc79a[20]];} ;Ox59e[OxOc79a[22]][OxOc79a[33]]=Ox5a8[OxOc79a[22]][OxOc79a[33]];Ox5a7[OxOc79a[25]].add(Ox59e);} ;Ox5a7[OxOc79a[24]]=Ox5a6[OxOc79a[24]];} ;UpdateState=function UpdateState_Select(){} ;SyncToView=function SyncToView_Select(){if(element[OxOc79a[34]]){inp_name[OxOc79a[20]]=element[OxOc79a[34]];} ;if(element[OxOc79a[35]]){inp_name[OxOc79a[20]]=element[OxOc79a[35]];} ;inp_id[OxOc79a[20]]=element[OxOc79a[32]];inp_size[OxOc79a[20]]=element[OxOc79a[36]];CopySelect(element,list_options);CopySelect(element,list_options2);inp_Disabled[OxOc79a[37]]=element[OxOc79a[38]];inp_Multiple[OxOc79a[37]]=element[OxOc79a[39]];if(element[OxOc79a[40]]==0){inp_index[OxOc79a[20]]=OxOc79a[41];} else {inp_index[OxOc79a[20]]=element[OxOc79a[40]];} ;if(element[OxOc79a[42]]){inp_access[OxOc79a[20]]=element[OxOc79a[42]];} ;} ;SyncTo=function SyncTo_Select(element){element[OxOc79a[35]]=inp_name[OxOc79a[20]];if(element[OxOc79a[34]]){element[OxOc79a[34]]=inp_name[OxOc79a[20]];} else {if(element[OxOc79a[35]]){element.removeAttribute(OxOc79a[35],0);element[OxOc79a[34]]=inp_name[OxOc79a[20]];} else {element[OxOc79a[34]]=inp_name[OxOc79a[20]];} ;} ;element[OxOc79a[32]]=inp_id[OxOc79a[20]];element[OxOc79a[36]]=inp_size[OxOc79a[20]];element[OxOc79a[38]]=inp_Disabled[OxOc79a[37]];element[OxOc79a[39]]=inp_Multiple[OxOc79a[37]];element[OxOc79a[42]]=inp_access[OxOc79a[20]];element[OxOc79a[40]]=inp_index[OxOc79a[20]];if(element[OxOc79a[40]]==OxOc79a[41]){element.removeAttribute(OxOc79a[40]);} ;if(element[OxOc79a[42]]==OxOc79a[41]){element.removeAttribute(OxOc79a[42]);} ;CopySelect(list_options,element);} ;