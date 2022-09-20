let score = 0;
let mouseVelX;
const game = document.getElementById('game');
const paddle = document.createElement('div');
const ball = document.createElement('div');
const scoreDisp = document.createElement('div');
scoreDisp.innerHTML = score;

ball.xVel = 5;
ball.yVel = 10;
ball.left = window.innerWidth / 2; 
ball.top = window.innerHeight / 2;

paddle.id = 'paddle';
ball.id = 'ball';
scoreDisp.id = 'score';
game.append(paddle);
game.append(ball);
game.append(scoreDisp);
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
  handleBlockCollision();
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
  return (ball.top + 15 >= game.clientHeight);
}

function isPaddleColliding() {
  const paddleLeft = paddle.getBoundingClientRect().left;
  const paddleRight = paddle.getBoundingClientRect().right;
  const paddleTop = paddle.getBoundingClientRect().top;
  const paddleBottom = paddle.getBoundingClientRect().bottom;

  return (ball.left + 15 > paddleLeft 
    && ball.left < paddleRight 
    && (ball.top + 20) >= paddleTop 
    && ball.top <= paddleBottom)
}

function handleBlockCollision() {
  blocks.forEach(b => {
    
  const blockLeft = b.getBoundingClientRect().left;
  const blockRight = b.getBoundingClientRect().right;
  const blockTop = b.getBoundingClientRect().top;
  const blockBottom = b.getBoundingClientRect().bottom;
  
    if (ball.left + 15 >= blockLeft 
    && ball.left <= blockRight 
    && (ball.top + 20) >= blockTop 
    && ball.top <= blockBottom
    && b.isHit == false
    ) {
      updateScore();
      b.isHit = true
      b.style.backgroundColor = '#2A1E5C';
      if(ball.left + 15 ==  blockLeft || ball.left == blockRight) {
        ball.xVel = -ball.xVel;
      } else {
        ball.yVel = -ball.yVel + 0.25;
      }
    }
    
  });
}

function decayBallVelocity() {
  ball.xVel = ball.xVel  * .9;
  ball.yVel = ball.yVel * .9;
}

function updateScore() {
  score++;
  scoreDisp.innerHTML = score;
}

function endGame() {
  clearInterval(ballMover);
  let gameOver = document.createElement('div');
  gameOver.id = 'game-over';
  gameOver.innerHTML = 'U SUK';
  game.append(gameOver);
}

addPaddleControl();
const ballMover = setInterval(moveBall, 36);
