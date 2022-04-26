/* ------ 1vh = 884px ------ */

// Main text apear and disapear
const mainText1 = document.querySelector(".main-main__text__1");
const mainText2 = document.querySelector(".main-main__text__2");
const mainText3 = document.querySelectorAll(".main-main__text__3");
const mainText4 = document.querySelector(".main-main2__text__1");
const mainText5 = document.querySelector(".main-main2__text__2");
const mainText6 = document.querySelector(".main-main2__text__3");
const mainText7 = document.querySelector(".main-main2__text__4");
const movingCrown = document.querySelector(".movingCrown");

addEventListener("scroll", function () {
  let value = this.scrollY;

  if (value > 442) {
    mainText4.style.display = "inline";
    mainText5.style.display = "inline";
    mainText6.style.display = "inline";
    mainText7.style.display = "inline";
    movingCrown.style.display = "block";

    mainText4.style.animation = "slideMainText 1.5s ease-in-out forwards";
    mainText5.style.animation = "slideMainText 1.5s 0.2s ease-in-out forwards";
    mainText6.style.animation = "slideMainText 1.5s 0.4s ease-in-out forwards";
    mainText7.style.animation = "slideMainText 1.5s 0.4s ease-in-out forwards";
    movingCrown.style.animation =
      "apear 0.8s 1.3s ease forwards, movingCrown 7s 2s ease-in-out infinite";
  } else {
    mainText4.style.display = "none";
    mainText5.style.display = "none";
    mainText6.style.display = "none";
    mainText7.style.display = "none";
    movingCrown.style.display = "none";

    mainText4.style.animation = "slideMainTextDisapear 1.5s ease-in-out";
    mainText5.style.animation = "slideMainTextDisapear 1.5s ease-in-out";
    mainText6.style.animation = "slideMainTextDisapear 1.5s ease-in-out";
    mainText7.style.animation = "slideMainTextDisapear 1.5s ease-in-out";
    movingCrown.style.animation = "disApear 0.8s ease forwards";
  }
});

//hidden menu
const nav_menu = document.querySelector(".header__nav-menu");
const nav_menu_hidden = document.querySelector(".header__nav-menu-hidden");

function handleClick() {
  nav_menu_hidden.classList.toggle("active");
  nav_menu.classList.toggle("active");
}

nav_menu.addEventListener("click", handleClick);

//scrall pointer function

const pointOn = document.querySelectorAll("li.pointOn");
const point = document.querySelectorAll(".point");

addEventListener("scroll", function () {
  let scrollValue = this.scrollY;
});

function pointhandleClick1() {
  pointOn[0].classList.toggle("active");
  window.scrollTo(0, 884);
}

function pointhandleClick2() {
  pointOn[1].classList.toggle("active");
  window.scrollTo(0, 1768);
}

function pointhandleClick3() {
  pointOn[2].classList.toggle("active");
  window.scrollTo(0, 2612);
}

function pointhandleClick4() {
  pointOn[3].classList.toggle("active");
  window.scrollTo(0, 3496);
}

function pointhandleClick5() {
  pointOn[4].classList.toggle("active");
  window.scrollTo(0, 4380);
}

pointOn[0].addEventListener("click", pointhandleClick1);
pointOn[1].addEventListener("click", pointhandleClick2);
pointOn[2].addEventListener("click", pointhandleClick3);
pointOn[3].addEventListener("click", pointhandleClick4);
pointOn[4].addEventListener("click", pointhandleClick5);
