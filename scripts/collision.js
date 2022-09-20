
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

