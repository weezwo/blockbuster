let score = 0;
let mouseVelX;
const game = document.getElementById('game');
const paddle = document.createElement('div');
const ball = document.createElement('div');
const scoreDisp = document.createElement('div');
const gameOver = document.createElement('div');

function initializeGame() {
  scoreDisp.innerHTML = score;

  paddle.id = 'paddle';
  ball.id = 'ball';
  scoreDisp.id = 'score';
  gameOver.id = 'game-over';
  game.append(paddle);
  game.append(ball);
  game.append(scoreDisp);
  setBall();

  for(let i=0;i < 69;i++){
    createBlock();
  }
}

function setBall() {
  ball.xVel = randomizeXVel();
  ball.yVel = 10;
  ball.left = window.innerWidth / 2; 
  ball.top = window.innerHeight / 2;

  ball.style.left = ball.left + 'px';
  ball.style.top = ball.top + 'px';

}

function randomizeXVel() {
  const sign = Math.floor(Math.random() * 2);
  const value = Math.floor(Math.random() * 10);
  return sign == 1 ? value : -value;
}

function addPaddleControl() {
  addEventListener('mousemove', (event) => {
    paddle.style.left = `${event.clientX - paddle.clientWidth / 2}px`;
    mouseVelX = event.movementX;
  });
}

function kickoffBall() {
  return setInterval(moveBall, 36);

}

function moveBall() {
  checkBallCollision();
  ball.left += ball.xVel;
  ball.top += ball.yVel;
  ball.style.top = `${ball.top}px`;
  ball.style.left = `${ball.left}px`;
}

