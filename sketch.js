var canvas=document.getElementById("snake");
var per=canvas.getContext("2d");
var score=0;
//load images
var ground=new Image()
ground.src="ground.png"
var foodImg=new Image()
foodImg.src="food.png"


var food={
    x:Math.floor(Math.random()*17)*32,
    y:Math.floor(Math.random()*15)*32
}


function game(){
per.drawImage(ground,0,0)
per.drawImage(foodImg,food.x,food.y)
per.fillStyle="white"
per.font="40px calibri"
per.fillText(score,32,1.5*32)
}



setInterval(game,100)