
var display = document.getElementById("display");

var on_tick = function() {
  var time = new Date();
  var hour = time.getHours();
  var min  = time.getMinutes();
  var sec  = time.getSeconds();
  display.innerText = "" + hour + ":" + min + ":" + sec; 
};

window.setInterval(on_tick, 1000);
