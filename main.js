const hamburger = document.querySelector(".hamburger");
const navVerksamhet = document.querySelector(".nav-verksamhet");
const verkButton = document.querySelector(".verk-btn");
const nav = document.querySelector("nav ul .verk-show");
const hamMenu = document.querySelector(".hamburger-menu");
const body = document.querySelector(".body");
const content = document.querySelector(".content");



hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  hamMenu.classList.toggle("active");
  
});

verkButton.addEventListener("click", () => {
    nav.classList.toggle("show");
    navVerksamhet.classList.toggle("active");
});

content.addEventListener("click", () => {
    if (hamMenu.classList("active")) {
        hamMenu.classList.toggle("hidden");
    }    
})

