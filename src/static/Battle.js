const Battle = {
  attackShip: function (attacker, target) {
    target.takeDamage(attacker.attack(target.agility));
    //un-comment this after playership model is refactored into a function
    // target.checkForSpriteChange()
    updateDisplay()
  },

  alienAttackPlayer: function (alien, key) {
    if (alienSlots[key].health) {
      Battle.attackShip (alien,playerShip);
      if (!playerShip.health) {
        playerDeathSound.play()
      } else {
        setTimeout(function(){Battle.alienAttackPlayer(alien, key)},alien.firerate);
      }
    }
  },

  playerAttackAlien: function (event) {
    let greatGrandParentid = event.target.parentNode.parentNode.parentNode.id
    if(greatGrandParentid) {
      Battle.attackShip (playerShip,alienSlots[greatGrandParentid]);
      alienSlots[greatGrandParentid].checkForSpriteChange()
      if (alienSlots[greatGrandParentid].health === 0) {
        Utils.updateScore(alienSlots[greatGrandParentid].name)
        alienSlots[greatGrandParentid] = {sprite: ''};
        updateDisplay()
        explosion1Sound.play()
        setTimeout(function(){
          alienSlots.alienSlot1 = randomAlien();
          setTimeout (function (){
            Battle.alienAttackPlayer(alienSlots.alienSlot1, 'alienSlot1')
          },1000)
        },3000)
      }
    }
  }
}