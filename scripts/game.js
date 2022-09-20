
function updateScore() {
  score++;
  scoreDisp.innerHTML = score;
}

function endGame() {
  ball.yVel = 0;
  ball.xVel = 0;
  gameOver.innerHTML = 'U SUK';
  game.append(gameOver);
}

function resetGame() {
  ball.yVel = 0;
  ball.xVel = 0;
  gameOver.remove();
  resetBlocks();
  setBall();
  score = -1;
  updateScore();
}
