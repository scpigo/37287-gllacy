var link = document.querySelector(".map-adress .button");
var popup = document.querySelector(".modal");
var overlay = document.querySelector(".modal-overlay");
var close = document.querySelector(".modal-close");
  
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  overlay.classList.add("overlay-show");
});
  
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  overlay.classList.remove("overlay-show");
});

var background = document.querySelector(".background");
var radio1 = document.querySelector(".slider-radio-1");
var radio2 = document.querySelector(".slider-radio-2");
var radio3 = document.querySelector(".slider-radio-3");
var slider1 = document.querySelector(".slider-item-1");
var slider2 = document.querySelector(".slider-item-2");
var slider3 = document.querySelector(".slider-item-3");

radio1.addEventListener("click", function (evt) {
  background.classList.remove("background-2");
  background.classList.remove("background-3");
  background.classList.add("background-1");
  slider1.classList.remove("slider-hide");
  slider2.classList.add("slider-hide");
  slider3.classList.add("slider-hide");
});

radio2.addEventListener("click", function (evt) {        
  background.classList.remove("background-1");
  background.classList.remove("background-3");
  background.classList.add("background-2");
  slider1.classList.add("slider-hide");
  slider2.classList.remove("slider-hide");
  slider3.classList.add("slider-hide");
});

radio3.addEventListener("click", function (evt) {        
  background.classList.remove("background-2");
  background.classList.remove("background-1");
  background.classList.add("background-3");
  slider1.classList.add("slider-hide");
  slider2.classList.add("slider-hide");
  slider3.classList.remove("slider-hide");
});