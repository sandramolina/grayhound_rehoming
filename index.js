var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function changeSize() {
  var frame = document.getElementById("frame");
  var content = frame.contentDocument || frame.contentWindow;
  content.body.style.fontSize = "1150%";
}

changeSize();
