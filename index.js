

var randomNumber1 = Math.floor((Math.random()*6))+1;

var randomDiceFileName1 = "images/dice"+randomNumber1+".png";

img1=document.querySelectorAll("img")[0];

img1.setAttribute("src",randomDiceFileName1);


var randomNumber2 = Math.floor((Math.random()*6))+1;

var randomDiceFileName2 = "images/dice"+randomNumber2+".png";

img2=document.querySelectorAll("img")[1];

img2.setAttribute("src",randomDiceFileName2);


if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}else{
    document.querySelector("h1").innerHTML="Its a draw";
}