(function (className) {
var rAF = requestAnimationFrame;
var prevTime = 0;
var counter = 0;

rAF(fpsRender);

function fpsRender (timestamp) {
  var diff = timestamp - prevTime;

  if (diff > 1000) {

    var fps = 1000 * counter / diff;
    var len = fps.toFixed(1).length;
    if (len === 3) {
      fps = fps.toFixed(2);
    } else if (len === 4) {
      fps = fps.toFixed(1);
    } else {
      fps = fps.toFixed(0);
    }

    fps += ' fps';

    var fpsmeter = document.getElementsByClassName(className);

    for (var i = 0; i < fpsmeter.length; i++) {
      fpsmeter[i].textContent = fps;
    }

    prevTime = timestamp;
    counter = 0;
  }

  counter++;
  rAF(fpsRender);
}
})('simple-fps-meter');
