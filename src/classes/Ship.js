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
      return Utils.generateValue(1,this.firepower);
    } else
      return 0;
  }
  takeDamage(damage) {
    this.health = Math.floor(this.health - damage + (damage * this.armor) + 0.5);
    if (this.health < 0) {
      this.health = 0;
    }
  }
  checkForSpriteChange() {
    if (this.health <= this.maxHealth * 0.3) {
      this.sprite = identifySprite(this.name,2)
    } else if (this.health <= this.maxHealth * 0.66) {
      this.sprite = identifySprite(this.name,1)
    } else {
      this.sprite = identifySprite(this.name,0)
    }
  }
}