var ban = new Array("../img/ban1.jpg","../img/ban2.jpg","../img/ban3.jpg","../img/ban4.jpg","../img/ban5.jpg")

var c =  0;
function carrusel(){
    var b = document.getElementById("banner");
    c++;
    if(c >= ban.length){
       c = 0;
    }
    b.src = ban[c];
    setTimeout("carrusel()", 1000);
}
document.body.setAttribute("onload","carrusel()");


function cambiar_color(){
    let r = Math.floor(Math.random()*150);
    let g = Math.floor(Math.random()*150);
    let b = Math.floor(Math.random()*150);
    
    document.getElementById("color_h1").style.color="rgb("+r+","+g+","+b+")";
 
    setTimeout("cambiar_color()",1000);
 }
 cambiar_color();