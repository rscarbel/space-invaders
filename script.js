

playerShip = GenerateShip.player()
playerShip.healthRegeneration()
console.log(playerShip)

alienSlots.alienSlot1 = GenerateShip.juggernaught();

document.querySelectorAll('.alien-ship').forEach(item => item.addEventListener('click', function(){Battle.playerAttackAlien(event)}));

battleZone.addEventListener('click', function(event) {
  Utils.mousePosition.x = event.clientX;
  Utils.mousePosition.y = event.clientY;
  console.log(Utils.mousePosition.x + ' ' + Utils.mousePosition.y)
})

console.log(alienSlots.alienSlot1)

function beginGame () {
  document.querySelector('#play-game').remove()
  updateDisplay();
  newLevelSound.play()
  Battle.alienAttackPlayer(alienSlots.alienSlot1, 'alienSlot1')
  lasers.createLaser(document.querySelector('.player-ship-body'))
}