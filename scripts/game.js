
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

