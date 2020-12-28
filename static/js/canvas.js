var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

console.log(ctx);


// GLOBAL VARIABLES.
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

// The function for drawing lines between randomly selected points.
function drawRandomLine() {
  var pointOne = randomInt(0, numCircles - 1);

  if (numCircles > 1) {
    var pointTwo = randomInt(pointOne + 1, numCircles);
  } else {
    var pointTwo = 1;
  }

  console.log(pointOne, pointTwo);

  console.log(pointX[pointOne], pointY[pointOne]);
  console.log(pointX[pointTwo], pointY[pointTwo]);

  ctx.beginPath();
  ctx.moveTo(pointX[pointOne], pointY[pointOne]);
  ctx.lineTo(pointX[pointTwo], pointY[pointTwo]);
  ctx.lineWidth = 8;
  ctx.strokeStyle = lineColor;
  ctx.stroke();
  ctx.closePath();
}

// Rendering the objects.
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i < numCircles; i++) {
    x = centerX + circleRadius * Math.cos(i * 2 * Math.PI / numCircles);
    y = centerY + circleRadius * Math.sin(i * 2 * Math.PI / numCircles);
    pointX.push(x);
    pointY.push(y);
  }

  drawRandomLine();

  for (var i = 0; i < pointX.length; i++) {
    x = pointX[i];
    y = pointY[i];
    drawBall();
  }

}

draw();
