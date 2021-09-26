window.onscroll = function () {
  scrollRotate();
}

function scrollRotate() {
  let image = document.getElementById("arrow");
  image.style.transform = "rotate(" + window.pageYOffset/4 + "deg)";
}

function visitPrototype(url) {
  window.open(url, "_blank").focus();
}

function visitUnirecycle(url) {
  window.open(url, "_blank").focus();
}

function visitTomorrowToday(url) {
  window.open(url, "_blank").focus();
}

function visitJitsi(url) {
  window.open(url, "_blank").focus();
}

function home() {
  window.location='index.html';
}
