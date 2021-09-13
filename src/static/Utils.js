const Utils = {
  generateValue: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  },

  mousePosition: function (event) {
    return {x:event.clientX,y:event.clientY}
  }
}