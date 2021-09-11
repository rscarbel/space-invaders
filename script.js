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
  constructor (health, agility, firepower, firerate, accuracy, armor, name, sprite, regeneration, missles) {
    super (health, agility, firepower, accuracy, armor, name, sprite);
  }
  heal(healingAmount) {
    this.health += healingAmount;
    if (this.health > this.maxHealth) {
      this.health = this.maxHealth
    }
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
  return new Ship(6, 1, 3, 2500, 4 * 0.1, 0, 'Saucer Alien', )
}

const generateAlien1Ship = () => {
  return new Ship(3, 7, 1750, 7 * 0.1, 2, 'Attacker Alien')
}



const alienTeam = [];
for (i = 0; i < 6; i++) {
  alienTeam.push(generateAlienShip)
}


const ussAssembly = new Ship(20, 5, 0.7, 0, 'Player 1')


playGameBtn.addEventListener('click', function () {
  playGameBtn.style.display = "none";
  ussAssembly.name = prompt('What is your name, captain?')
  introText.innerHTML = `${ussAssembly.name}, you are the galaxy's last hope! Defend against the invasion!\nClick the alien ship to attack!`;
  alienImage.addEventListener('click', function () {
    alert('attacked')
  })
})

