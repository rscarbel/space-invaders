const Utils = {
  generateValue: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  },

  getUniqueId: () => `UI${Utils.generateValue(1000000000,9999999999)}`,

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
  },
  getOriginCoordinates: function(node,center) {
    let result = {x: 0, y: 0};
    let domRect = node.getBoundingClientRect()
    if (center){
      result.x = domRect.x + (domRect.width / 2);
    } else if (node === playerShipZone) {
      result.x = domRect.x
    } else {
      result.x = domRect.x + domRect.width;
    }
    result.y = domRect.y + (domRect.height / 2);
    return result
  },
  updateScore : function (alien) {
    if (alien === 'saucer') {
      score += 100;
    } else if (alien === 'attacker') {
      score += 150;
    } else if (alien === 'juggernaught') {
      score += 200;
    }
  }
}