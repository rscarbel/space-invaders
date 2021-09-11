const introText = document.querySelector("#intro-text");
const alienImage = document.querySelector('#alien-ship');
const playGameBtn = document.querySelector('button');


function identifySprite (shipType, damageStage) {
  if (shipType === 'Saucer') {
    if (damageStage === 0) {
      return alienShip0Full
    } else if (damageStage === 1) {
      return alienShip0Light
    } else if (damageStage === 2) {
      return alienShip0Heavy
   }
  } else if (shipType === 'Attacker') {
    if (damageStage === 0) {
      return alienShip1Full
    } else if (damageStage === 1) {
      return alienShip1Light
    } else if (damageStage === 2) {
      return alienShip1Heavy
   }
  } else if (shipType === 'Juggernaught') {
    if (damageStage === 0) {
      return alienShip1Full
    } else if (damageStage === 1) {
      return alienShip1Light
    } else if (damageStage === 2) {
     return alienShip1Heavy
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


const generateValue = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const generateAlien0Ship = () => {
  return new Ship(6, 0.1, 4, 2250, 0.6, 0.1, 'Saucer', alienShip0Full )
}

const generateAlien1Ship = () => {
  return new Ship(3, -0.2, 8, 1750, 0.85, 0, 'Attacker', alienShip1Full)
}

const generateAlien2Ship = () => {
  return new Ship(15, 0.1, 4, 2500, 0.7, 0.2, 'Juggernaught', alienShip2Full)
}

const ussAssembly = new PlayerShip(25, 0, 4, 1750, 0.7, 0, 'Player', playerShip0, 0, 0)


alien1 = generateAlien1Ship();
console.log(alien1)

updateDisplay();