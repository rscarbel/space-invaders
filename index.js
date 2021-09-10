const introText = document.querySelector("#intro-text");
const alienImage = document.querySelector('#alien-ship');
const playGameBtn = document.querySelector('button')

class Ship {
  constructor(hull, firepower, accuracy, name) {
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
    this.name = name
  }
  attack() {
    //does the attack hit?
    if (Math.random() < this.accuracy) {
      return this.firepower
    } else
      return 0;
  }
  takeDamage(damage) {
    this.hull - damage
  }
}



const generateAlienStats = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}


const generateAlienShip = () => {
  return new Ship(generateAlienStats(3, 6), generateAlienStats(2, 4), generateAlienStats(2, 4) * 0.1, 'Alien')
}

const alienTeam = [];
for (i = 0; i < 6; i++) {
  alienTeam.push(generateAlienShip)
}


const ussAssembly = new Ship(20, 5, 0.7, 'Player 1')


playGameBtn.addEventListener('click', function () {
  playGameBtn.style.display = "none";
  ussAssembly.name = prompt('What is your name, captain?')
  introText.innerHTML = `${ussAssembly.name}, you are the galaxy's last hope! Defend against the invasion!\nClick the alien ship to attack!`;
  alienImage.addEventListener('click', function () {
    alert('attacked')
  })
})


/*
generate 6 ships
have options for user to attack or run

*/

