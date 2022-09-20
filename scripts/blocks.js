let blocks = [];

let brickLair = document.createElement('div');
brickLair.id = 'brick-lair';
game.append(brickLair);

function createBlock() {
  const block = document.createElement('div');
  block.classList.add('block');
  block.style.width = game.clientWidth / 10;
  block.dataset.isHit = 0;
  brickLair.append(block);
  blocks.push(block);
}

function resetBlocks() {
  blocks.forEach(b =>{
    b.dataset.isHit = 0;
  })
}

function allBlocksHit() {
  return !blocks.some(b => b.dataset.isHit == false);
}
