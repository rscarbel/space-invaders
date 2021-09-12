const Utils = {
  generateValue: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  },
  mousePosition : {
    x: 0,
    y: 0
  }
}