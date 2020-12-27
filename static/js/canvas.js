var canvas = document.getElementById("myCanvas");
var cntxt = canvas.getContext("2d");

console.log(cntxt);

// A simple ball and paddle game.

// VARIABLES.
// The ball starting position.
var ballRadius = 10;

var circleRadius = canvas.height/2.5;

var numCircles = 10;

var centerX = canvas.width/2;
var centerY = canvas.height/2;

var x = centerX + circleRadius;
var y = centerY;

var pointX = [];
var pointY = [];

// Get a random integer. Min is included, Max is not.
function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// The function for drawing the balls.
function drawBall() {
  cntxt.beginPath();
  cntxt.arc(x, y, ballRadius, 0, Math.PI*2);
  cntxt.fillStyle = "#59C0C5";
  cntxt.fill();
  cntxt.closePath();
}

// Rendering the objects.
function draw() {
  cntxt.clearRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i < numCircles; i++) {
    x = centerX + circleRadius * Math.cos(i * 2 * Math.PI / numCircles);
    y = centerY + circleRadius * Math.sin(i * 2 * Math.PI / numCircles);
    pointX.push(x);
    pointY.push(y);
    drawBall();
  }

  console.log(pointX[randomInt(0,10)]);
}

draw();
