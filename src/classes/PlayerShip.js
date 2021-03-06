class PlayerShip extends Ship {
  constructor (health, agility, firepower, firerate, accuracy, armor, name, sprite) {
    super (health, agility, firepower, firerate, accuracy, armor, name, sprite);
    this.healers = 1;
    this.missiles = 0;
    this.damageSprite = '';
  }
  heal(healingAmount) {
    this.health += healingAmount;
    if (this.health > this.maxHealth) {
      this.health = this.maxHealth
    }
  }
  healthRegeneration () {
    this.heal(this.healers);
    setTimeout(this.healthRegeneration.bind(this),3000)
  }
  fireMissile () {
    if (this.missiles) {
      this.missiles--;
    }
    return this.missiles;
    }
  checkForSpriteChange() {
    if (this.health <= this.maxHealth * 0.25) {
      this.damageSprite = identifySprite('Player',3)
    } else if (this.health <= this.maxHealth * 0.6) {
      this.damageSprite = identifySprite('Player',2)
    } else if (this.health <= this.maxHealth * 0.90) {
      this.damageSprite = identifySprite('Player',1)
    } else {
      this.damageSprite = '';
    }
  }
}