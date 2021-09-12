const alienSlots = {
  alienSlot1: {sprite: ''},
  alienSlot2: {sprite: ''},
  alienSlot3: {sprite: ''},
  alienSlot4: {sprite: ''},
  alienSlot5: {sprite: ''},
  alienSlot6: {sprite: ''}
};

const playerShipZone = document.querySelector('#player-ship');
const playerDamageZone = document.querySelector('#player-damage');

const alienSlot1DOM = document.querySelector('#alienSlot1');
const alienSlot2DOM = document.querySelector('#alienSlot2');
const alienSlot3DOM = document.querySelector('#alienSlot3');
const alienSlot4DOM = document.querySelector('#alienSlot4');
const alienSlot5DOM = document.querySelector('#alienSlot5');
const alienSlot6DOM = document.querySelector('#alienSlot6');

const healthDisplay = document.querySelector('#health-display');
const healthBar = document.querySelector('#health-remaining');


let playerShip = {sprite: ''};

const updateDisplay = () => {

  playerShipZone.innerHTML = playerShip.sprite;
  playerDamageZone.innerHTML = playerShip.damageSprite;

  alienSlot1DOM.innerHTML = alienSlots.alienSlot1.sprite;
  alienSlot2DOM.innerHTML = alienSlots.alienSlot2.sprite;
  alienSlot3DOM.innerHTML = alienSlots.alienSlot3.sprite;
  alienSlot4DOM.innerHTML = alienSlots.alienSlot4.sprite;
  alienSlot5DOM.innerHTML = alienSlots.alienSlot5.sprite;
  alienSlot6DOM.innerHTML = alienSlots.alienSlot6.sprite;

  healthDisplay.innerHTML = `${playerShip.health}/${playerShip.maxHealth}`;

  healthBar.style.width = `${Math.floor(((playerShip.health / playerShip.maxHealth)) * 300)}px`;

}

function identifySprite (shipType, damageStage) {
  if (shipType === 'saucer') {
    if (damageStage === 0) {
      return alienShip0Full
    } else if (damageStage === 1) {
      return alienShip0Light
    } else if (damageStage === 2) {
      return alienShip0Heavy
   }
  } else if (shipType === 'attacker') {
    if (damageStage === 0) {
      return alienShip1Full
    } else if (damageStage === 1) {
      return alienShip1Light
    } else if (damageStage === 2) {
      return alienShip1Heavy
   }
  } else if (shipType === 'juggernaught') {
    if (damageStage === 0) {
      return alienShip2Full
    } else if (damageStage === 1) {
      return alienShip2Light
    } else if (damageStage === 2) {
     return alienShip2Heavy
   }
  } else if (shipType === 'Player') {
    if (damageStage === 1) {
      return playerLightDamage;
    } else if (damageStage === 2) {
     return playerMediumDamage;
   } else if (damageStage === 3) {
    return playerHeavyDamage;
  }
  }
}