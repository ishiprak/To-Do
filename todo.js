function add1(){

	swal("Add your work:", {
    content: "input",
    })
    .then((value) => {
     document.getElementById("wrk1").innerHTML+="<br/><li>"+ value +"</li>";
    });
}

function add2(){
	
	swal("Add your work:", {
    content: "input",
    })
    .then((value) => {
     document.getElementById("wrk2").innerHTML+="<br/><li>"+ value +"</li>";
    });
	
}

function add3(){
	
	swal("Add your work:", {
    content: "input",
    })
    .then((value) => {
     document.getElementById("wrk3").innerHTML+="<br/><li>"+ value +"</li>";
    });
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
