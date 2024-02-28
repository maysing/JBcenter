const hamburger = document.querySelector(".hamburger");
const verkButton = document.querySelector(".verk-btn");
const nav = document.querySelector("nav ul .verk-show");
const hamMenu = document.querySelector(".hamburger-menu");
const verkBtnHeader = document.querySelector(".verksamhet-btn-header")
const verkSubSections = document.querySelector(".sub-sections")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  hamMenu.classList.toggle("active");
  
});

verkButton.addEventListener("click", () => {
    nav.classList.toggle("show");
});

verkBtnHeader.addEventListener("click", () => {
  verkSubSections.classList.toggle ("show");
});