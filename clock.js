
var display = document.getElementById("display");

var clock = {
  hex: false,
  tick: function() {
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

    if (clock.hex === true) {
      var display_value = "#" + hour + min + sec; 
      display.innerText = display_value
      display.style.backgroundColor = display_value;
    } else { 
      display.innerText = hour + ":" + min + ":" + sec; 
    }
  }
};

var bg_color = display.style.backgroundColor;
display.onclick = function() {
  if (clock.hex === true) {
    display.style.backgroundColor = bg_color;
  }
  clock.hex = !clock.hex;
};

window.setInterval(clock.tick, 1000);
