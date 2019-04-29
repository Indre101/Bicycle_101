position = 0;
var interval = setInterval(function () {
  position -= 1;
  document.querySelector(".frise").style({
    "background-position": +position + "px 0px"
  })
}, 50);