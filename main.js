const hamburger = document.querySelector(".hamburger");
const verkButton = document.querySelector(".verk-btn");
const nav = document.querySelector("nav ul .verk-show");
const hamMenu = document.querySelector(".hamburger-menu");
const verkBtnHeader = document.querySelector(".verksamhet-btn-header");
const verkSubSections = document.querySelector(".sub-sections");
const galleriBilder = document.querySelector(".småbilder");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  hamMenu.classList.toggle("active");
});

verkButton.addEventListener("click", () => {
  nav.classList.toggle("show");
});

document.addEventListener("click", function (event) {
  if (!hamMenu.contains(event.target) && !hamburger.contains(event.target)) {
    hamMenu.classList.remove("active");
    hamburger.classList.remove("active");
  }
});

document.addEventListener("touchstart", function (event) {
  if (!hamMenu.contains(event.target) && !hamburger.contains(event.target)) {
    hamMenu.classList.remove("active");
    hamburger.classList.remove("active");
  }
});


