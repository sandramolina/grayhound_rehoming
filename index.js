function changeSize() {
  var frame = document.getElementById("frame");
  var content = frame.contentDocument || frame.contentWindow;
  content.body.style.fontSize = "1150%";
}

changeSize();
