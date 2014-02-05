var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    blob = {
        "x":  10,
        "y":  10,
        "xd": 10,
        "yd": 10,
        "w": 20,
        "h": 20,
    };

window.requestAnimationFrame = window.requestAnimationFrame
                            || window.mozRequestAnimationFrame
                            || window.webkitRequestAnimationFrame
                            || window.msRequestAnimationFrame; 

function tick() {
  blob.x = blob.x + blob.xd;
  blob.y = blob.y + blob.yd;

  ctx.clearRect(0,0, canvas.width, canvas.height)  
  ctx.fillRect(blob.x, blob.y, blob.w, blob.h);

  if (blob.x <= 0 || blob.x + blob.w > canvas.width)
    blob.xd = -1 * blob.xd;
  if (blob.y <= 0 || blob.y + blob.h > canvas.height)
    blob.yd = -1 * blob.yd;

  window.requestAnimationFrame(tick);
}

window.requestAnimationFrame(tick);

window.onload = window.onresize = function() {
  canvas.width  = window.innerWidth - 20;
  canvas.height = window.innerHeight -20;
};