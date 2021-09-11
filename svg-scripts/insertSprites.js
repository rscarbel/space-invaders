const playerShipZone = document.querySelector('#player-ship');
const alienShipTop = document.querySelector('#alien-ship-top');
const alienShipMiddle = document.querySelector('#alien-ship-middle');
const alienShipBottom = document.querySelector('#alien-ship-bottom');
const playerDamageZone = document.querySelector('#player-damage');

let playerShip = {sprite: ''};
let alien1 = {sprite: ''};
let alien2 = {sprite: ''};
let alien3 = {sprite: ''};
let alien4 = {sprite: ''};
let alien5 = {sprite: ''};
let alien6 = {sprite: ''};


const updateDisplay = () => {

  playerShipZone.innerHTML = playerShip.sprite;
  playerDamageZone.innerHTML = playerShip.damageSprite;

  alienShipTop.innerHTML = `${alien5.sprite}${alien2.sprite}`;

  alienShipMiddle.innerHTML = `${alien4.sprite}${alien1.sprite}`;

  alienShipBottom.innerHTML = `${alien6.sprite}${alien3.sprite}`;
}