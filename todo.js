function sp(){
	//work.innerHTML="<br/><li>Hello</li>";
	var np=document.getElementById("inp").value;
	document.getElementById("wrk1").innerHTML+="<br/><li>"+np+"</li>";
}

function sps(){
	//work.innerHTML="<br/><li>Hello</li>";
	var np=document.getElementById("inp").value;
	document.getElementById("wrk2").innerHTML+="<br/><li>"+np+"</li>";
}
function spp(){
	//work.innerHTML="<br/><li>Hello</li>";
	var np=document.getElementById("inp").value;
	document.getElementById("wrk3").innerHTML+="<br/><li>"+np+"</li>";
}

function sp2(){

	event.target.remove();
}

function sp3(){
	event.target.style.textDecoration="line-through";
}

function sp4(){
	event.target.style.textDecoration="none";
}






//document.getElementById("wrk").childNodes[0].addEventListener("click",sp2());