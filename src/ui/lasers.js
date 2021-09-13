const battleZone = document.querySelector('.battle-zone');

const lasers = {
  createLaser: function(origin,target) {
    let beam = document.createElement("div");
    beam.style.position = "absolute";
    beam.innerHTML = redLaser;
    let xyCoordinates = Utils.getOriginCoordinates(origin);
    beam.style.left = `${xyCoordinates.x}px`;
    beam.style.top = `${xyCoordinates.y}px`;
    let tempId = Utils.getUniqueId();
    beam.setAttribute('id',tempId);
    battleZone.appendChild(beam);
    lasers.moveLaser(`#${tempId}`, target)
  },

  moveLaser: function (id, target) {
    let laser = document.querySelector(id);
    laser.animate(
      [
        {left: laser.style.left, top: laser.style.top},
        {left: `${target.x}px`, top: `${target.y}px`}
      ], 200);
    setTimeout(function(){
      laser.remove()
    }, 198)
  },

}