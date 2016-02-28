var balls = document.getElementsByClassName("ball");

var counter = document.getElementById("count").innerHTML=balls.length;
var height = document.getElementById("box").clientHeight;
var width = document.getElementById("box").clientWidth;

console.log(height);
console.log(width);

function ballMove(ball) {
  var x=0;
  var y=0;
  var dx=-Math.floor(Math.random()*10);
  var dy=-Math.floor(Math.random()*5);
  var id = setInterval(frame,70);
      
  function frame() {
     
      ball.style.top = x++ + 'px'; 
      ball.style.left = y++ + 'px';
      
      if( x<(0-dx) || x>(height-dx)) {dx=-dx;}
      if( y<(0-dy) || y>(width-dy))  {dy=-dy;}
      x+=dx; 
      y+=dy; 
  }
  
}



function init(){
    
  for (var i=0,j=1; i<=counter;i++,j++){
    balls[i].style.background = "radial-gradient(circle at 20px 15px, rgb(0," + Math.floor(255-42.5*j*0.5) + "," + Math.floor(255-102.5*j*0.2) + "), #000)";
    balls[i].style.width= 75*j*0.3 + "px";
    balls[i].style.height=75*j*0.3 + "px";
    ballMove(balls[i]);
    balls[i].addEventListener("click", delBall);
  }
    
}

function delBall() {
  document.getElementById("box").removeChild(this);
  document.getElementById("count").innerHTML=--counter;
}