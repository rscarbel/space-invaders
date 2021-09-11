const introText = document.querySelector("#intro-text");
const alienImage = document.querySelector('#alien-ship');
const playGameBtn = document.querySelector('button');

class Ship {
  constructor(health, agility, firepower, firerate, accuracy, armor, name, sprite) {
    this.health = health;
    this.maxHealth = health;
    this.agility = agility;
    this.firepower = firepower;
    this.firerate = firerate
    this.accuracy = accuracy;
    this.armor = armor;
    this.name = name;
    this.sprite = sprite;
  }
  attack(opponetAgility) {
    if (Math.random() < (this.accuracy - opponetAgility)) {
      return generateValue(1,this.firepower);
    } else
      return 0;
  }
  takeDamage(damage) {
    this.health = Math.floor(this.health - damage + (damage * this.armor) + 0.5);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}

class PlayerShip extends Ship {
  constructor (health, agility, firepower, firerate, accuracy, armor, name, sprite, healers, missiles) {
    super (health, agility, firepower, accuracy, armor, name, sprite);
    this.healers = healers;
    this.missiles = this.missiles;
  }
  heal(healingAmount) {
    this.health += healingAmount;
    if (this.health > this.maxHealth) {
      this.health = this.maxHealth
    }
  }
  healthRegeneration () {
    this.heal(this.healers);
    setTimeOut(this.healthRegeneration,2500)
  }
  fireMissile () {
    if (this.missiles) {
      this.missiles--;
    }
    return this.missiles;
    }
}

class AlienShip0 extends Ship {
  constructor(health, agility, firepower, firerate, accuracy, armor, name, sprite) {
    super (health, agility, firepower, accuracy, armor, name, sprite);
  }
}

const generateValue = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const generateAlien0Ship = () => {
  return new Ship(6, 0.1, 4, 2250, 0.6, 0.1, 'Saucer', alienShip0Full )
}

const generateAlien1Ship = () => {
  return new Ship(3, -0.2, 8, 1750, 0.85, 0, 2, 'Attacker', alienShip1Full)
}

const generateAlien2Ship = () => {
  return new Ship(15, 0.1, 4, 2500, 0.7, 0.2, 'Juggernaught', alienShip2Full)
}

const ussAssembly = new PlayerShip(25, 0, 4, 1750, 0.7, 0, 'Player 1', playerShip0, 0, 0)


playGameBtn.addEventListener('click', function () {
  playGameBtn.style.display = "none";
  ussAssembly.name = prompt('What is your name, captain?')
  introText.innerHTML = `${ussAssembly.name}, you are the galaxy's last hope! Defend against the invasion!\nClick the alien ship to attack!`;
  alienImage.addEventListener('click', function () {
    alert('attacked')
  })
})

