
var display = document.getElementById("display");

var clock = {
  hex: 0,
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

    if (clock.hex === 1) {
      var display_value = "#" + hour + min + sec; 
      display.innerText = display_value
      display.style.backgroundColor = display_value;
    } else if (clock.hex === 2) {
        var display_value = Math.floor(Date.now() / 1000);
        display_value = display_value.toString(16);
        display_value = display_value.substring(2,8);
        display.innerText = display_value.toUpperCase();
        display.style.backgroundColor = "#" + display_value;
    } else { 
      display.innerText = hour + ":" + min + ":" + sec; 
    }
  }
};

var bg_color = display.style.backgroundColor;
display.onclick = function() {
  clock.hex += 1;
  clock.hex %= 3;
   if (clock.hex === 0) {
    display.style.backgroundColor = bg_color;
   }
};

window.setInterval(clock.tick, 1000);
