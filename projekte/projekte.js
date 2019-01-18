
// BILD VERGROESSERN
function enlarge() {
	document.getElementById("picblank").style.width="100%";
	document.getElementById("picblank").style.height="100%";
	var wdwidth = window.innerWidth || (window.document.documentElement.clientWidth || window.document.body.clientWidth);
	var wdheight = window.innerHeight || (window.document.documentElement.clientHeight || window.document.body.clientHeight);
	var wdVergleich = wdwidth / wdheight;
	if (wdVergleich >= 1.7){picX_Adj();} else {picY_Adj(wdheight);}
}
function picX_Adj() {
	document.getElementById("bigpic").style.height="100%";
	var picHeight = document.getElementById("bigpic").offsetHeight;	
	var picWidth = picHeight * 1.7;
	document.getElementById("bigpic").style.width=(picWidth+"px");
	document.getElementById("bigpic").style.marginLeft=("-"+picWidth/2+"px");
}
function picY_Adj(WdHeight) {
	document.getElementById("bigpic").style.width="100%";
	var picWidth = document.getElementById("bigpic").offsetWidth;	
	var picHeight = picWidth / 1.7;
	var offSetTop = (WdHeight - picHeight) / 2;
	document.getElementById("bigpic").style.height=(picHeight+"px");
	document.getElementById("bigpic").style.marginTop=(offSetTop + "px");
}
function closePic() {
	document.getElementById("picblank").style.width="0%";
	document.getElementById("picblank").style.height="0%";
	document.getElementById("bigpic").style.width="0%";
	document.getElementById("bigpic").style.height="0%";
}
function returnKey(evt) {
	var evt  = (evt) ? evt : ((event) ? event : null);
	if (evt.keyCode == 27) {
		document.getElementById("picblank").style.width="0%";
		document.getElementById("picblank").style.height="0%";
		document.getElementById("bigpic").style.width="0%";
		document.getElementById("bigpic").style.height="0%";
	}
}


function ChangeProject(id1, id2) {
	Reset();
	document.getElementById(id2).style.display = "block";
}


function Reset(){
	var fieldContent = document.getElementsByClassName('details');
	for(var i = 0; i < fieldContent.length; i++) {
		fieldContent[i].style.display = "none";
	}
	document.getElementById("aktuell").style.background = "#b7b7b7";
	document.getElementById("aktuell").style.background = "#c4b3a1";
}



var pageNumber = 1;
var projectNumber = 1;

function nextPage() {
	Reset();
	if (pageNumber > 0 && pageNumber < 4) {pageNumber = pageNumber + 1;}
	else {pageNumber = 1;}
	if (projectNumber == 3) {pageNumber = 1;}
	ChangeProject("four", "ak"+projectNumber+pageNumber);
}
function previousPage() {
	Reset();
	if (pageNumber > 1 && pageNumber < 5) {pageNumber = pageNumber - 1;}
	else {pageNumber = 4;}
	if (projectNumber == 3) {pageNumber = 1;}
	ChangeProject("four", "ak"+projectNumber+pageNumber);
}



function nextProject() {
	Reset();
	if (projectNumber > 0 && projectNumber < 3) {projectNumber = projectNumber + 1;}
	else {projectNumber = 1;}
	pageNumber = 1;
	ChangeProject("four", "ak"+projectNumber+pageNumber);
}

function previousProject() {
	Reset();
	if (projectNumber > 1 && projectNumber < 4) {projectNumber = projectNumber - 1;}
	else {projectNumber = 3;}
	pageNumber = 1;
	ChangeProject("four", "ak"+projectNumber+pageNumber);
}

