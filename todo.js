function add1(){

	var val=swal("Add your work:", {
    content: "input",
    });
	
	 /*.then((value) => {
     swal(`You added: ${value}`);
    });*/
	//var np=document.getElementById("inp").value;

	document.getElementById("wrk1").innerHTML+="<br/><li>"+val.content+"</li>";
}

function add2(){
	
	var val=swal("Add your work:", {
    content: "input",
    })
    .then((value) => {
     swal(`You added: ${value}`);
    });
	document.getElementById("wrk2").innerHTML+="<br/><li>"+val.value+"</li>";
}

function add3(){
	
	var val=swal("Add your work:", {
    content: "input",
    });
	//var np=document.getElementById("inp").value;
	document.getElementById("wrk3").innerHTML+="<br/><li>"+val.vaue+"</li>";
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