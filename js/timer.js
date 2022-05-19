// © 2022 Simon Vander Linden

let time = "300";
t();

function t() {
  var counter = document.getElementById("counter");
  s = time;
  m = 0;
  h = 0;
  if (s < 0) {
    alert("Perdu! Temps écouler");
        window.location = "";
  } else {
    if (s > 59) {
      m = Math.floor(s / 60);
      s = s - m * 60;
    }
    if (m > 59) {
      h = Math.floor(m / 60);
      m = m - h * 60;
    }
    if (s < 10) {
      s = "0" + s;
    }
    if (m < 10) {
      m = "0" + m;
    }
    counter.innerHTML = h + ":" + m + ":" + s;
  }
  time = time - 1;
  window.setTimeout("t();", 999);
}
