let mouseVelX;
const game = document.getElementById('game');
const paddle = document.createElement('div');
const ball = document.createElement('div');
ball.xVel = 5;
ball.yVel = 10;
ball.left = window.innerWidth / 2; 
ball.top = window.innerHeight / 2;

paddle.id = 'paddle';
ball.id = 'ball';
game.append(paddle);
game.append(ball);
ball.style.left = ball.left + 'px';
ball.style.top = ball.top + 'px';

function addPaddleControl() {
  addEventListener('mousemove', (event) => {
    paddle.style.left = `${event.clientX - paddle.clientWidth / 2}px`;
    mouseVelX = event.movementX;
  });
}

function moveBall() {
  checkBallCollision();
  ball.left += ball.xVel;
  ball.top += ball.yVel;
  ball.style.top = `${ball.top}px`;
  ball.style.left = `${ball.left}px`;
}

function checkBallCollision() {
  if(isWallSideColliding()) {
    ball.xVel = -ball.xVel;
  }
  if(isPaddleColliding() || isWallTopColliding()) ball.yVel = -ball.yVel;
  if(isPaddleColliding()) ball.xVel += mouseVelX; 
  if(isWallBottomColliding()) endGame();
}

function isWallTopColliding() {
  return (ball.top <= 0);
}

function isWallSideColliding() {
  return (ball.left <= 0 || ball.left + 15 >= game.clientWidth);
}

function isWallBottomColliding() {
  return (ball.top - 15 >= game.clientHeight);
}

function isPaddleColliding() {
  const paddleLeft = paddle.getBoundingClientRect().left;
  const paddleRight = paddle.getBoundingClientRect().right;
  const paddleTop = paddle.getBoundingClientRect().top;
  const paddleBottom = paddle.getBoundingClientRect().bottom;

  return (ball.left > paddleLeft 
    && ball.left + 15 < paddleRight 
    && (ball.top + 40) >= paddleTop 
    && ball.top + 40 <= paddleBottom)
}

function decayBallVelocity() {
  ball.xVel = ball.xVel  * .9;
  ball.yVel = ball.yVel * .9;
}

function endGame() {
  clearInterval(ballMover);
  console.log('U SUK');
}

addPaddleControl();
const ballMover = setInterval(moveBall, 36);
