var OxOf074=["inp_action","sel_Method","inp_name","inp_id","inp_encode","sel_target","Name","value","name","id","action","method","encoding","application/x-www-form-urlencoded","","target"];var inp_action=Window_GetElement(window,OxOf074[0],true);var sel_Method=Window_GetElement(window,OxOf074[1],true);var inp_name=Window_GetElement(window,OxOf074[2],true);var inp_id=Window_GetElement(window,OxOf074[3],true);var inp_encode=Window_GetElement(window,OxOf074[4],true);var sel_target=Window_GetElement(window,OxOf074[5],true);UpdateState=function UpdateState_Form(){} ;SyncToView=function SyncToView_Form(){if(element[OxOf074[6]]){inp_name[OxOf074[7]]=element[OxOf074[6]];} ;if(element[OxOf074[8]]){inp_name[OxOf074[7]]=element[OxOf074[8]];} ;inp_id[OxOf074[7]]=element[OxOf074[9]];if(element[OxOf074[10]]){inp_action[OxOf074[7]]=element[OxOf074[10]];} ;if(element[OxOf074[11]]){sel_Method[OxOf074[7]]=element[OxOf074[11]];} ;if(element[OxOf074[12]]==OxOf074[13]){inp_encode[OxOf074[7]]=OxOf074[14];} else {inp_encode[OxOf074[7]]=element[OxOf074[12]];} ;if(element[OxOf074[15]]){sel_target[OxOf074[7]]=element[OxOf074[15]];} ;} ;SyncTo=function SyncTo_Form(element){element[OxOf074[8]]=inp_name[OxOf074[7]];if(element[OxOf074[6]]){element[OxOf074[6]]=inp_name[OxOf074[7]];} else {if(element[OxOf074[8]]){element.removeAttribute(OxOf074[8],0);element[OxOf074[6]]=inp_name[OxOf074[7]];} else {element[OxOf074[6]]=inp_name[OxOf074[7]];} ;} ;element[OxOf074[9]]=inp_id[OxOf074[7]];element[OxOf074[10]]=inp_action[OxOf074[7]];element[OxOf074[11]]=sel_Method[OxOf074[7]];try{element[OxOf074[12]]=inp_encode[OxOf074[7]];} catch(e){} ;element[OxOf074[15]]=sel_target[OxOf074[7]];if(element[OxOf074[15]]==OxOf074[14]){element.removeAttribute(OxOf074[15]);} ;if(element[OxOf074[6]]==OxOf074[14]){element.removeAttribute(OxOf074[6]);} ;if(element[OxOf074[10]]==OxOf074[14]){element.removeAttribute(OxOf074[10]);} ;} ;