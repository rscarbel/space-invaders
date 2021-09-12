const GenerateShip = {
  saucer: function() {return new Ship(6, 0.1, 4, 3000, 0.6, 0.1, 'saucer', alienShip0Full)},
  attacker: function() {return new Ship(3, -0.2, 8, 3000, 0.85, 0, 'attacker', alienShip1Full)},

  juggernaught: function () {return new Ship(15, 0.1, 4, 3000, 0.7, 0.2, 'juggernaught', alienShip2Full)},

  player: function() {return new PlayerShip(25, 0, 4, 1750, 0.7, 0, 'Player', playerShip0, 0, 0)}
}