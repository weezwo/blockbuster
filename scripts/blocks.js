let blocks = [];

let brickLair = document.createElement('div');
brickLair.id = 'brick-lair';
game.append(brickLair);

function createBlock() {
  const block = document.createElement('div');
  block.classList.add('block');
  block.style.width = game.clientWidth / 10;
  block.isHit = false;
  brickLair.append(block);
  blocks.push(block);
}

function resetBlocks() {
  blocks.forEach(b =>{
    b.isHit = false;
    b.style.backgroundColor = '#FCFFFD';
  })
}

