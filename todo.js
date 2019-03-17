function add1(){
	
	//work.innerHTML="<br/><li>Hello</li>";
	var np=document.getElementById("inp").value;
	document.getElementById("wrk1").innerHTML+="<br/><li>"+np+"</li>";
}

function add2(){
	
	//work.innerHTML="<br/><li>Hello</li>";
	var np=document.getElementById("inp").value;
	document.getElementById("wrk2").innerHTML+="<br/><li>"+np+"</li>";
}

function add3(){
	
	//work.innerHTML="<br/><li>Hello</li>";
	var np=document.getElementById("inp").value;
	document.getElementById("wrk3").innerHTML+="<br/><li>"+np+"</li>";
}

function del(){

	event.target.remove();
}

function cross(){
	
	event.target.style.textDecoration="line-through";
}

function orig(){
	
	event.target.style.textDecoration="none";
}

//document.getElementById("wrk").childNodes[0].addEventListener("click",sp2());
