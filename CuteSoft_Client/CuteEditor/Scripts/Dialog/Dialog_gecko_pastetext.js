var OxO344b=["value","idSource","length","DIV","innerHTML","checked","linebreaks","\x0D\x0A","ig","\x3Cbr /\x3E","\x0D","\x0A"];var editor=Window_GetDialogArguments(window);function cancel(){Window_CloseDialog(window);} ;function insertContent(){var Oxcd=document.getElementById(OxO344b[1])[OxO344b[0]];if(Oxcd&&Oxcd[OxO344b[2]]>0){var Ox7b=document.createElement(OxO344b[3]);Ox7b.appendChild(document.createTextNode(Oxcd));var Ox280=Ox7b[OxO344b[4]];if(document.getElementById(OxO344b[6])[OxO344b[5]]){Ox280=Ox280.replace(( new RegExp(OxO344b[7],OxO344b[8])),OxO344b[9]);Ox280=Ox280.replace(( new RegExp(OxO344b[10],OxO344b[8])),OxO344b[9]);Ox280=Ox280.replace(( new RegExp(OxO344b[11],OxO344b[8])),OxO344b[9]);} else {} ;editor.PasteHTML(Ox280);Window_CloseDialog(window);} ;} ;