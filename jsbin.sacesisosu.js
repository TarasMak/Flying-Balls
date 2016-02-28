var balls = document.getElementsByClassName("ball");

var counter = document.getElementById("count").innerHTML=balls.length;
var height = document.getElementById("box").clientHeight;
var width = document.getElementById("box").clientWidth;

console.log(height);
console.log(width);

function ballMove(ball) {
  var x=Math.floor(Math.random()*height-3);
  var y=Math.floor(Math.random()*width-3);
  var dx=Math.floor(Math.random()*2)-3;
  var dy=Math.floor(Math.random()*2)-3;
  setInterval(frame,10);
      
  function frame() {
      ball.style.background = "radial-gradient(circle at 30px 35px, rgb("+Math.floor(55+0.5*y*x-y)+"," + Math.floor(255-42.5*x/y) + "," + Math.floor(155-42.5*y/x) + "), #000)";
      ball.style.top = x++ + 'px'; 
      ball.style.left = y++ + 'px';
      
      if( x<(0-dx) || x>(height-dx)) {dx=-dx;}
      if( y<(0-dy) || y>(width-dy)) {dy=-dy;}
      x+=dx; 
      y+=dy; 
  }
  
}



function init(){
    
  for (var i=0,j=1; i<=counter;i++,j++){
    
    balls[i].style.width= 85*j*0.3 + "px";
    balls[i].style.height=85*j*0.3 + "px";
    ballMove(balls[i]);
    balls[i].addEventListener("click", delBall);
  }
    
}

function delBall() {
  document.getElementById("box").removeChild(this);
  document.getElementById("count").innerHTML=--counter;
}
