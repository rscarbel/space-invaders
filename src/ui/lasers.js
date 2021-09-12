const battleZone = document.querySelector('.battle-zone');

const lasers = {
  createLaser: function(node) {
    let beam = document.createElement("div");
    beam.style.position = "absolute";
    beam.innerHTML = redLaser;
    let xyCoordinates = lasers.getOriginCoordinates(node);
    beam.style.left = `${xyCoordinates.x}px`;
    beam.style.right = `${xyCoordinates.x}px`;
    battleZone.appendChild(beam)
  },

  playerLaser: function () {

  },

  getOriginCoordinates: function(node) {
    let result = {x: 0, y: 0};
    let domRect = node.getBoundingClientRect()
    result.x = domRect.x;
    result.y = domRect.y;
    return result
  }
}