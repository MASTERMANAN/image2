var input=document.getElementById("input");
console.log(input.value);
var btn=document.getElementById("btn");
var img=document.getElementById("img");

function show(){
    if(input.value=="Mewtow")
    img.src="Mewtow.jpg";
    else if (input.value=="arceus")
    img.src="arceus.jpg";
    else if (input.value=="dailga")
    img.src="dailga.jpg";
    else if (input.value=="Rayquaza")
    img.src="Rayquaza.jpg";

    else
        alert("choose beetween Mewtow Rayquaza arceus dailga: ")
}