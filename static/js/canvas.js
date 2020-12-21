var canvas = document.getElementById("myCanvas");
var cntxt = canvas.getContext("2d");

console.log(cntxt);

// Adding a red square to the canvas.
cntxt.beginPath();
cntxt.rect(20, 40, 50, 50);
cntxt.fillStyle = "#FF0000";
cntxt.fill();
cntxt.closePath();

// Adding a green circle.
cntxt.beginPath();
cntxt.arc(240, 160, 20, 0, Math.PI*2, false);
cntxt.fillStyle = "green";
cntxt.fill();
cntxt.closePath();

// An empty purple rectangle.
cntxt.beginPath();
cntxt.rect(160, 10, 100, 40);
cntxt.strokeStyle = "rgba(0, 0, 255, 0.5)";
cntxt.stroke();
cntxt.closePath();

// Defining a draw loop for a moving ball.

// The ball starting position.
var x = canvas.width/2;
var y = canvas.height-30;

var dx = 2;
var dy = -2;

var ballRadius = 10;

// The function for drawing the ball.
function drawBall() {
  cntxt.beginPath();
  cntxt.arc(x, y, ballRadius, 0, Math.PI*2);
  cntxt.fillStyle = "#0095DD";
  cntxt.fill();
  cntxt.closePath();
}

// Rendering the ball after each iteration.
function draw() {
  cntxt.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  x += dx;
  y += dy;

  if (y + dy < 0 || y + dy > canvas.height) {
    dy = -dy;
  }

  if (x + dx < 0 || x + dx > canvas.width) {
    dx = -dx;
  }
}

setInterval(draw, 10)
