
var display = document.getElementById("display");

var on_tick = function() {
  var time = new Date();
  var hour = time.getHours().toString();
  var min  = time.getMinutes().toString();
  var sec  = time.getSeconds().toString();

  if (hour.length == 1) {
    hour = "0" + hour;
  }

  if (min.length == 1) {
    min = "0" + min;
  }

  if (sec.length == 1) {
    sec = "0" + sec;
  }

  display.innerText = hour + ":" + min + ":" + sec; 
};

window.setInterval(on_tick, 1000);
