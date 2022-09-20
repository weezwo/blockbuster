initializeGame();
addPaddleControl();
let ballMover = kickoffBall();

addEventListener('keydown', e => {
  if(e.code == "Space") resetGame();
});
