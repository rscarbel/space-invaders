playerShip = generateShip.player()
playerShip.healthRegeneration()

alienSlots.alienSlot1 = randomAlien();

document.querySelectorAll('.alien-ship').forEach(item => item.addEventListener('click', function(){Battle.playerAttackAlien(event)}));

battleZone.addEventListener('click', function(event) {
  lasers.createLaser(playerShipZone,Utils.mousePosition(event))
})

function beginGame () {
  document.querySelector('#play-game').remove()
  updateDisplay();
  newLevelSound.play()
  Battle.alienAttackPlayer(alienSlots.alienSlot1, 'alienSlot1')
}

Utils.oscillate(playerShipZone)
document.querySelectorAll(".alien-slot").forEach(item => Utils.oscillate(item,700,8))