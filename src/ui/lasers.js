const battleZone = document.querySelector('.battle-zone');

const lasers = {
  createLaser: function(origin,target) {
    let beam = Utils.generateNode(redLaser,origin)
    battleZone.prepend(beam.node);
    lasers.moveLaser(`#${beam.id}`, target)
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