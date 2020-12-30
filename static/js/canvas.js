var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

console.log(ctx);


// GLOBAL VARIABLES.
// The ball starting position.
var ballRadius = 10;

var circleRadius = canvas.height/2.5;

var player1Balls = 5;
var player2Balls = 5;

var lineWidth = 6;

var centerX = canvas.width/2;
var centerY = canvas.height/2;

var x = centerX + circleRadius;
var y = centerY;

var pointX = [];
var pointY = [];
var pointScore = [];

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
  ctx.fillStyle = ballColor;
  ctx.fill();
  ctx.closePath();
}

// Initialize the scores for the balls.
for (var i = 0; i < player1Balls; i++) {
  pointScore.push(0);
}
for (var j = 0; j < player2Balls; j++) {
  pointScore.push(1);
}

function generatePoints() {
  for (var i = 0; i < player1Balls + player2Balls; i++) {
    x = centerX + circleRadius * Math.cos(i * 2 * Math.PI / (player1Balls + player2Balls));
    y = centerY + circleRadius * Math.sin(i * 2 * Math.PI / (player1Balls + player2Balls));
    pointX.push(x);
    pointY.push(y);
  }
}

// The function for drawing lines between randomly selected points.
function drawRandomLine() {
  pointOne = randomInt(0, player1Balls + player2Balls - 1);

  if (player1Balls + player2Balls > 1) {
    pointTwo = randomInt(pointOne + 1, player1Balls + player2Balls);
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
  ctx.arc(pointX[pointOne], pointY[pointOne], 1.45 * ballRadius, 0, Math.PI*2);
  ctx.fillStyle = lineColor;
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(pointX[pointTwo], pointY[pointTwo], 1.45 * ballRadius, 0, Math.PI*2);
  ctx.fillStyle = lineColor;
  ctx.fill();
  ctx.closePath();
}


// Rendering the objects.
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  generatePoints();

  drawRandomLine();

  drawTwoPoints();


  for (var i = 0; i < pointX.length; i++) {
    x = pointX[i];
    y = pointY[i];
    if (pointScore[i]==0) {
      drawBall(ballColor=ballColor1);
    }
    else {
      drawBall(ballColor=ballColor2);
    }
  }

}

//setInterval(draw, 1000);
draw();
