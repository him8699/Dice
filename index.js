var a=Math.floor(Math.random()*6)+1;
var b="images/"+"dice"+a+".png";
var c=document.querySelectorAll("img")[0];
c.setAttribute("src",b);

var d=Math.floor(Math.random()*6)+1;
var e="images/"+"dice"+d+".png";
var f=document.querySelectorAll("img")[1];
f.setAttribute("src",e);

if(a>d){
    document.querySelector("h1").innerHTML="palyer 1 won";
}
else if(a<d){
    document.querySelector("h1").innerHTML="player 2 won";
}
else{
    document.querySelector("h1").innerHTML="DRAW!";
}