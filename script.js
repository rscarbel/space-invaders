const introText = document.querySelector("#intro-text");
const alienImage = document.querySelector('#alien-ship');
const playGameBtn = document.querySelector('button');

class Ship {
  constructor(health, firepower, accuracy, armor, name, sprite) {
    this.health = health;
    this.maxHealth = health;
    this.firepower = firepower;
    this.accuracy = accuracy;
    this.armor = armor;
    this.name = name;
    this.sprite = sprite;
  }
  attack() {
    if (Math.random() < this.accuracy) {
      return this.firepower;
    } else
      return 0;
  }
  takeDamage(damage) {
    this.health = Math.floor(this.health - damage + (damage * this.armor) + 0.5);
  }
}

const generateAlienStats = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const generateAlienShip = () => {
  return new Ship(generateAlienStats(3, 6), generateAlienStats(2, 4), generateAlienStats(2, 4) * 0.1, 0, 'Alien')
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

