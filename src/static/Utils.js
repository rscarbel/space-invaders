const Utils = {
  generateValue: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  },

  mousePosition: function (event) {
    return {x:event.clientX,y:event.clientY}
  },

  oscillate: function (node,speed=1000,distance=15) {
    node.animate([
      // keyframes
      { transform: 'translateY(0px)' },
      { transform: `translateY(${distance}px)` }
    ], {
      // timing options
      duration: speed,
      iterations: Infinity,
      easing: "ease-in-out",
      direction: 'alternate'
    });
  }
}