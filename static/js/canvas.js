var canvas = document.getElementById("myCanvas");
var cntxt = canvas.getContext("2d");

console.log(cntxt);

// A simple ball and paddle game.

// VARIABLES.
// The ball starting position.
var x = canvas.width/2;
var y = canvas.height-30;

var dx = 2;
var dy = -2;

var ballRadius = 10;

var paddleHeight = 75;
var paddleWidth = 10;
var paddleY = (canvas.height - paddleHeight) / 2;

var upPressed = false;
var downPressed = false;

var interval = setInterval(draw, 10);

// The function for drawing the ball.
function drawBall() {
  cntxt.beginPath();
  cntxt.arc(x, y, ballRadius, 0, Math.PI*2);
  cntxt.fillStyle = "#0095DD";
  cntxt.fill();
  cntxt.closePath();
}

// The function for drawing the paddle.
function drawPaddle() {
  cntxt.beginPath();
  cntxt.rect(paddleWidth - paddleWidth, paddleY, paddleWidth, paddleHeight);
  cntxt.fillStyle = "#0095DD";
  cntxt.fill();
  cntxt.closePath();
}

// Key handlers.
function keyDownHandler(e) {
  if (e.key == "Up" || e.key == "ArrowUp") {
    upPressed = true;
  }
  else if (e.key == "Down" || e.key == "ArrowDown") {
    downPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key == "Up" || e.key == "ArrowUp") {
    upPressed = false;
  }
  else if (e.key == "Down" || e.key == "ArrowDown") {
    downPressed = false;
  }
}

// Rendering the objects.
function draw() {
  cntxt.clearRect(0, 0, canvas.width, canvas.height);

  drawBall();
  drawPaddle();

  // Ball.
  x += dx;
  y += dy;

  if (y + dy < 0 || y + dy > canvas.height) {
    dy = -dy;
  }

  if (x + dx > canvas.width) {
    dx = -dx;
  } else if (x + dx < 0) {
    if (y < paddleY + paddleHeight && y > paddleY) {
      dx = -dx;
    } else {
//      alert("Game Over");
      document.location.reload();
      clearInterval(interval);
    }
  }



  // Paddle.
  if (upPressed) {
    paddleY -= 7;
    if (paddleY < 0) {
      paddleY = 0;
    }
  }
  if (downPressed) {
    paddleY += 7;
    if (paddleY + paddleHeight > canvas.height) {
      paddleY = canvas.height - paddleHeight;
    }
  }
}

// Event listeners.
document.addEventListener("keydown", keyDownHandler, false)
document.addEventListener("keyup", keyUpHandler, false)

setInterval(draw, 10)
