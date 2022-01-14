var cCount=0;
function sixClick(){
		if(cCount==6){
			sixClickDisplay();
		}else if(cCount==7){
			sevenClickHidden();
		}else if(cCount==10){
			alert(cCount+"休息一下吧!");
			location.reload();
		}else {
			clickCount();
		}
	} 
function clickCount(){ 
	cCount=cCount+1;
} 

function sixClickDisplay(){ 
	document.getElementById("menu").hidden="";
	cCount=cCount+1; 
}
function sevenClickHidden(){
		document.getElementById("menu").hidden="hidden";
		cCount=cCount+1;
}
