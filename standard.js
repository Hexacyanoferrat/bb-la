
// VARIABLEN
var x = 0;
var y = 0;
var z = 0;
var a = 0;

// FENSTER AUSMESSEN
var width = window.innerWidth || 
      (window.document.documentElement.clientWidth || window.document.body.clientWidth);
var height = window.innerHeight || 
      (window.document.documentElement.clientHeight || window.document.body.clientHeight);
var Vergleich = width / height;


//FENSTER ANPASSEN
function Lol () {
	if (Vergleich >= 2){X_Adj();} else {Y_Adj();}
	var cWidth = window.innerWidth || 
      (window.document.documentElement.clientWidth || window.document.body.clientWidth);
}




Lol();
function X_Adj () {y = height; x = 2 * height; a = (width - x) / 2; z = 0; addHeight = 99 + y/1500; nav = y/20;}
function Y_Adj () {x = width; y = Math.round(width / 2); z = (height - y) / 2; a = 0;  addHeight = 99 + y/1500; nav = y/20;}

document.write("<style> #container 	{height: " + y + "px;	width: " + x + "px; position: absolute; top: " + z + "px; left: " + a + "px;}</style>")



function NeuAufbau () {location.href = location.href}



window.onresize = function () {	
	NeuAufbau();
}

function browserTrennung(){
	var IE = /*@cc_on!@*/false;
	if (IE == true){document.write("<style></style>")}
}
browserTrennung();