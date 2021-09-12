const introText = document.querySelector("#intro-text");
const playGameBtn = document.querySelector('button');

const alienSlots = {
  alienSlot1: {sprite: ''},
  alienSlot2: {sprite: ''},
  alienSlot3: {sprite: ''},
  alienSlot4: {sprite: ''},
  alienSlot5: {sprite: ''},
  alienSlot6: {sprite: ''}
};

const generateValue = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const generateAlien0Ship = () => {
  return new Ship(6, 0.1, 4, 3000, 0.6, 0.1, 'Saucer', alienShip0Full)
}

const generateAlien1Ship = () => {
  return new Ship(3, -0.2, 8, 3000, 0.85, 0, 'Attacker', alienShip1Full)
}

const generateAlien2Ship = () => {
  return new Ship(15, 0.1, 4, 3000, 0.7, 0.2, 'Juggernaught', alienShip2Full)
}

const attackShip = (attacker, target) => {
  target.takeDamage(attacker.attack(target.agility));
  updateDisplay()
}

function alienAttackPlayer (alien) {
  attackShip (alien,playerShip);
  setTimeout(function(){alienAttackPlayer(alien)},alien.firerate);
}

function playerAttackAlien (event) {
  let greatGrandParentid = event.target.parentNode.parentNode.parentNode.id
  if(greatGrandParentid) {
    attackShip (playerShip,alienSlots[greatGrandParentid]);
    alienSlots[greatGrandParentid].checkForSpriteChange()
  }
}

playerShip = new PlayerShip(25, 0, 4, 1750, 0.7, 0, 'Player', playerShip0, 0, 0);
console.log(playerShip)

alienSlots.alienSlot1 = generateAlien1Ship();

document.querySelectorAll('.alien-ship').forEach(item => item.addEventListener('click', function(){playerAttackAlien(event)}));

console.log(alienSlots.alienSlot1)

updateDisplay();
alienAttackPlayer(alienSlots.alienSlot1)