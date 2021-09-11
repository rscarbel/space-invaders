class PlayerShip extends Ship {
  constructor (health, agility, firepower, firerate, accuracy, armor, name, sprite) {
    super (health, agility, firepower, firerate, accuracy, armor, name, sprite);
    this.healers = 0;
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
    setTimeOut(this.healthRegeneration,2500)
  }
  fireMissile () {
    if (this.missiles) {
      this.missiles--;
    }
    return this.missiles;
    }
  checkForSpriteChange() {
    if (this.health <= health * 0.25) {
      this.damageSprite = identifySprite(this.name,3)
    } else if (this.health <= health * 0.6) {
      this.damageSprite = identifySprite(this.name,2)
    } else if (this.health <= health * 0.90) {
      this.damageSprite = identifySprite(this.name,1)
    } else {
      this.damageSprite = '';
    }
  }
}