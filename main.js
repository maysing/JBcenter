const hamburger = document.querySelector(".hamburger");
const verkButton = document.querySelector(".verk-btn");
const nav = document.querySelector("nav ul .verk-show");
const hamMenu = document.querySelector(".hamburger-menu");
const galleryImages = document.querySelectorAll(".småbilder");
const popupImage = document.querySelector(".popup-image");
const popUp = document.querySelector(".popup");
const closeX = document.querySelector(".close");

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

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    const clickedImageSrc = image.src;
    popupImage.src = clickedImageSrc;
    popUp.classList.toggle("show");
  });
});

closeX.addEventListener("click", () => {
  popUp.classList.remove("show");
});
