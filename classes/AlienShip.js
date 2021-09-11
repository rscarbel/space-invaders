class AlienShip extends Ship {
  constructor(health, agility, firepower, firerate, accuracy, armor, name, sprite) {
    super (health, agility, firepower, accuracy, armor, name, sprite);
  }
  checkForSpriteChange() {
    if (this.health <= health * 0.3) {
      this.sprite = identifySprite(this.name,2)
    } else if (this.health <= health * 0.66) {
      this.sprite = identifySprite(this.name,1)
    } else {
      this.sprite = identifySprite(this.name,0)
    }
  }
}