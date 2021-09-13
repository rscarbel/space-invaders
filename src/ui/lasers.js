const battleZone = document.querySelector('.battle-zone');

const lasers = {
  createLaser: function(origin,target) {
    let beam = document.createElement("div");
    beam.style.position = "absolute";
    beam.innerHTML = redLaser;
    let xyCoordinates = lasers.getOriginCoordinates(origin);
    beam.style.left = `${xyCoordinates.x}px`;
    beam.style.top = `${xyCoordinates.y}px`;
    let tempId = `L${Utils.generateValue(100000,999999)}`
    beam.setAttribute('id',tempId);
    battleZone.appendChild(beam);
    lasers.moveLaser(`#${tempId}`, target)
  },

  moveLaser: function (id, target) {
    let laser = document.querySelector(id);
    console.log(laser)
    console.log(laser.style.left)
    laser.animate(
      [
        {left: laser.style.left, top: laser.style.top},
        {left: `${target.x}px`, top: `${target.y}px`}
      ], 200);
    setTimeout(function(){
      laser.remove()
    }, 195)
  },

  playerLaser: function () {

  },

  getOriginCoordinates: function(node) {
    let result = {x: 0, y: 0};
    let domRect = node.getBoundingClientRect()
    result.x = domRect.x + Math.floor((domRect.width / 2));
    result.y = domRect.y + Math.floor((domRect.height / 2));
    console.log(domRect)
    return result
  }
}