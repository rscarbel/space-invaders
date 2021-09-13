

playerShip = GenerateShip.player()
playerShip.healthRegeneration()
console.log(playerShip)

alienSlots.alienSlot1 = GenerateShip.juggernaught();

document.querySelectorAll('.alien-ship').forEach(item => item.addEventListener('click', function(){Battle.playerAttackAlien(event)}));

battleZone.addEventListener('click', function(event) {
  lasers.createLaser(playerShipZone,Utils.mousePosition(event))
})

console.log(alienSlots.alienSlot1)

function beginGame () {
  document.querySelector('#play-game').remove()
  updateDisplay();
  newLevelSound.play()
  Battle.alienAttackPlayer(alienSlots.alienSlot1, 'alienSlot1')
  // lasers.createLaser(document.querySelector('.player-ship-body'))
}