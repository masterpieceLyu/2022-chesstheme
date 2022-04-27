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

//scroll pointer function
const point = document.querySelectorAll(".point");
const main_section = document.querySelectorAll("main");

function activeMenu() {
  let len = main_section.length;
  while (--len && window.scrollY < main_section[len].offsetTop) {}
  point.forEach((ltx) => ltx.classList.remove("active"));
  point[len].classList.add("active");
}
activeMenu();
addEventListener("scroll", activeMenu);

const main_section1_offset = main_section[0].offsetTop;
const main_section2_offset = main_section[1].offsetTop;
const main_section3_offset = main_section[2].offsetTop;
const main_section4_offset = main_section[3].offsetTop;
const main_section5_offset = main_section[4].offsetTop;

point[0].onclick = function () {
  window.scroll({ top: main_section1_offset, behavior: "smooth" });
};
point[1].onclick = function () {
  window.scroll({ top: main_section2_offset, behavior: "smooth" });
};
point[2].onclick = function () {
  window.scroll({ top: main_section3_offset, behavior: "smooth" });
};
point[3].onclick = function () {
  window.scroll({ top: main_section4_offset, behavior: "smooth" });
};
point[4].onclick = function () {
  window.scroll({ top: main_section5_offset, behavior: "smooth" });
};
