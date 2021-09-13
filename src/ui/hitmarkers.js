const hitmarker = {
  colorMiss : "#5757FF",
  colorHit : "#FF0000",

  generateHitmarker: function (target,amount) {
    let newHitmarker = Utils.generateNode(amount ? hitmarkerSVG('#FF0000',amount):hitmarkerSVG(),target);
    target.appendChild(newHitMarker.node);
    let domHitmarker = document.querySelector(`#${newHitmarker.id}`);
    let centerCoordinates = getOriginCoordinates(target,'center-point')
    domHitmarker.style.left = centerCoordinates.x;
    domHitmarker.style.top = centerCoordinates.y;
    setTimeout(function(){
      domHitmarker.remove()
    }, 300)
  }
}