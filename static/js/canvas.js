var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

console.log(ctx);


// GLOBAL VARIABLES.
// The ball starting position.
var ballRadius = 10;

var circleRadius = canvas.height/2.5;

var numBalls = 10;

var lineWidth = 6;

var centerX = canvas.width/2;
var centerY = canvas.height/2;

var x = centerX + circleRadius;
var y = centerY;

var pointX = [];
var pointY = [];

var pointOne = 0;
var pointTwo = 0;

var ballColor1 = "#619CFB";
var ballColor2 = "#EC746B";
var lineColor = "#60BB3B";

// Get a random integer. Min is included, Max is not.
function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// The function for drawing the balls.
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = ballColor1;
  ctx.fill();
  ctx.closePath();
}

function generatePoints() {
  for (var i = 0; i < numBalls; i++) {
    x = centerX + circleRadius * Math.cos(i * 2 * Math.PI / numBalls);
    y = centerY + circleRadius * Math.sin(i * 2 * Math.PI / numBalls);
    pointX.push(x);
    pointY.push(y);
  }
}

// The function for drawing lines between randomly selected points.
function drawRandomLine() {
  pointOne = randomInt(0, numBalls - 1);

  if (numBalls > 1) {
    pointTwo = randomInt(pointOne + 1, numBalls);
  }

  // The line joining the points.
  ctx.beginPath();
  ctx.moveTo(pointX[pointOne], pointY[pointOne]);
  ctx.lineTo(pointX[pointTwo], pointY[pointTwo]);
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = lineColor;
  ctx.stroke();
  ctx.closePath();
}

function drawTwoPoints() {
  ctx.beginPath();
  ctx.arc(pointX[pointOne], pointY[pointOne], 1.25 * ballRadius, 0, Math.PI*2);
  ctx.fillStyle = lineColor;
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(pointX[pointTwo], pointY[pointTwo], 1.25 * ballRadius, 0, Math.PI*2);
  ctx.fillStyle = lineColor;
  ctx.fill();
  ctx.closePath();
}

// Rendering the objects.
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  generatePoints();

  drawRandomLine();

  for (var i = 0; i < pointX.length; i++) {
    x = pointX[i];
    y = pointY[i];
    drawBall();
  }

  drawTwoPoints();

}

//setInterval(draw, 1000);
draw();
