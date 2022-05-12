//scroll pointer function
const pageNum = document.querySelector("#page-number__now");
const point = document.querySelectorAll(".point");
const main_section = document.querySelectorAll("main");

// Offset Info
const main_section1_offset = main_section[0].offsetTop;
const main_section2_offset = main_section[1].offsetTop;
const main_section3_offset = main_section[2].offsetTop;
const main_section4_offset = main_section[3].offsetTop;
const main_section5_offset = main_section[4].offsetTop;

// Main text apear and disapear

//section 1
const mainText1 = document.querySelector(".main-main__text__1");
const mainText2 = document.querySelector(".main-main__text__2");
const mainText3 = document.querySelectorAll(".main-main__text__3");

//section 2
const mainText4 = document.querySelector(".main-main2__text__1");
const mainText5 = document.querySelector(".main-main2__text__2");
const mainText6 = document.querySelector(".main-main2__text__3");
const mainText7 = document.querySelector(".main-main2__text__4");

//section 3
const mainText8 = document.querySelector(".main-main3__text__1");
const mainText9 = document.querySelector(".main-main3__text__2");
const mainText10 = document.querySelector(".main-main3__text__3");
const mainText11 = document.querySelector(".main-main3__text__4");

//section 4
const mainText12 = document.querySelector(".main-main4__text__1");
const mainText13 = document.querySelector(".main-main4__text__2");
const mainText14 = document.querySelector(".main-main4__text__3");
const mainText15 = document.querySelector(".main-main4__text__4");

//section 5
const mainText16 = document.querySelector(".main-main5__text__1");
const mainText17 = document.querySelector(".main-main5__text__2");
const mainText18 = document.querySelector(".main-main5__text__3");
const mainText19 = document.querySelector(".main-main5__text__4");

const movingCrown = document.querySelector(".movingCrown");
const wineHands = document.querySelector(".wineHands");
const faceGlasses = document.querySelector(".faceGlasses");
const elephantDoor = document.querySelector(".elephantDoor");

/*
if (window.scrollY >= main_section2_offset - main_section2_offset / 2) {
  console.log("!!!");

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
}
*/

//hidden menu
const nav_menu = document.querySelector(".header__nav-menu");
const nav_menu_hidden = document.querySelector(".header__nav-menu-hidden");

function handleClick() {
  nav_menu_hidden.classList.toggle("active");
  nav_menu.classList.toggle("active");
}

nav_menu.addEventListener("click", handleClick);

//slide contents from scroll
//slide contents from scroll
//slide contents from scroll

//section 2
addEventListener("scroll", function () {
  let value = this.scrollY;

  if (
    value > main_section2_offset - main_section2_offset / 2 &&
    value < main_section3_offset + main_section2_offset / 2
  ) {
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
    mainText4.style.animation = "slideMainTextDisapear 1.5s ease-in-out ";
    mainText5.style.animation = "slideMainTextDisapear 1.5s ease-in-out ";
    mainText6.style.animation = "slideMainTextDisapear 1.5s ease-in-out ";
    mainText7.style.animation = "slideMainTextDisapear 1.5s ease-in-out ";
    movingCrown.style.animation = "disApear 0.8s ease ";

    mainText4.style.display = "none";
    mainText5.style.display = "none";
    mainText6.style.display = "none";
    mainText7.style.display = "none";
    movingCrown.style.display = "none";
  }
});

//section 3
addEventListener("scroll", function () {
  let value = this.scrollY;
  console.log(value);

  if (
    // value >
    // main_section3_offset - 400
    value > main_section3_offset - main_section3_offset / 2 &&
    value < main_section4_offset + main_section3_offset / 2
  ) {
    mainText8.style.display = "inline";
    mainText9.style.display = "inline";
    mainText10.style.display = "inline";
    mainText11.style.display = "inline";
    wineHands.style.display = "block";

    mainText8.style.animation = "slideMainText 1.5s ease-in-out forwards";
    mainText9.style.animation = "slideMainText 1.5s 0.2s ease-in-out forwards";
    mainText10.style.animation = "slideMainText 1.5s 0.4s ease-in-out forwards";
    mainText11.style.animation = "slideMainText 1.5s 0.4s ease-in-out forwards";
    wineHands.style.animation =
      "apear 0.8s 1.3s ease forwards, movingWine 7s 2s ease-in-out infinite";
  } else {
    mainText8.style.display = "none";
    mainText9.style.display = "none";
    mainText10.style.display = "none";
    mainText11.style.display = "none";
    wineHands.style.display = "none";

    mainText8.style.animation = "slideMainTextDisapear 1.5s ease-in-out ";
    mainText9.style.animation = "slideMainTextDisapear 1.5s ease-in-out ";
    mainText10.style.animation = "slideMainTextDisapear 1.5s ease-in-out ";
    mainText11.style.animation = "slideMainTextDisapear 1.5s ease-in-out ";
    wineHands.style.animation = "disApear 0.8s ease ";
  }
});

//section 4
addEventListener("scroll", function () {
  let value = this.scrollY;

  if (
    value > main_section4_offset - main_section4_offset / 2 &&
    value < main_section5_offset + main_section4_offset / 2
  ) {
    mainText12.style.display = "inline";
    mainText13.style.display = "inline";
    mainText14.style.display = "inline";
    mainText15.style.display = "inline";
    faceGlasses.style.display = "block";

    mainText12.style.animation = "slideMainText 1.5s ease-in-out forwards";
    mainText13.style.animation = "slideMainText 1.5s 0.2s ease-in-out forwards";
    mainText14.style.animation = "slideMainText 1.5s 0.4s ease-in-out forwards";
    mainText15.style.animation = "slideMainText 1.5s 0.4s ease-in-out forwards";
    faceGlasses.style.animation =
      "apear 0.8s 1.3s ease forwards, movingGlasses 7s 2s ease-in-out infinite";
  } else {
    mainText12.style.display = "none";
    mainText13.style.display = "none";
    mainText14.style.display = "none";
    mainText15.style.display = "none";
    faceGlasses.style.display = "none";

    mainText12.style.animation = "slideMainTextDisapear 1.5s ease-in-out ";
    mainText13.style.animation = "slideMainTextDisapear 1.5s ease-in-out ";
    mainText14.style.animation = "slideMainTextDisapear 1.5s ease-in-out ";
    mainText15.style.animation = "slideMainTextDisapear 1.5s ease-in-out ";
    faceGlasses.style.animation = "disApear 0.8s ease ";
  }
});

//section 5
addEventListener("scroll", function () {
  let value = this.scrollY;

  if (value > main_section5_offset - 400) {
    mainText16.style.display = "inline";
    mainText17.style.display = "inline";
    mainText18.style.display = "inline";
    mainText19.style.display = "inline";
    elephantDoor.style.display = "block";

    mainText16.style.animation = "slideMainText 1.5s ease-in-out forwards";
    mainText17.style.animation = "slideMainText 1.5s 0.2s ease-in-out forwards";
    mainText18.style.animation = "slideMainText 1.5s 0.4s ease-in-out forwards";
    mainText19.style.animation = "slideMainText 1.5s 0.4s ease-in-out forwards";
    elephantDoor.style.animation =
      "apear 0.8s 1.3s ease forwards, movingElephantDoor 7s 2s ease-in-out infinite";
  } else {
    mainText16.style.display = "none";
    mainText17.style.display = "none";
    mainText18.style.display = "none";
    mainText19.style.display = "none";
    elephantDoor.style.display = "none";

    mainText16.style.animation = "slideMainTextDisapear 1.5s ease-in-out ";
    mainText17.style.animation = "slideMainTextDisapear 1.5s ease-in-out ";
    mainText18.style.animation = "slideMainTextDisapear 1.5s ease-in-out ";
    mainText19.style.animation = "slideMainTextDisapear 1.5s ease-in-out ";
    elephantDoor.style.animation = "disApear 0.8s ease ";
  }
});

// mainText16 = document.querySelector(".main-main5__text__1");
// mainText17 = document.querySelector(".main-main5__text__2");
// mainText18 = document.querySelector(".main-main5__text__3");
// mainText19 = document.querySelector(".main-main5__text__4");

//scroll animation
//scroll animation
//scroll animation

const pageFixedSpan1 = document.querySelector("#page-span__1");
const pageFixedSpan2 = document.querySelector("#page-span__2");

// value > main_section2_offset - main_section2_offset / 2 &&
// value < main_section3_offset + main_section2_offset / 2

function activeMenu() {
  let len = main_section.length;
  while (--len && window.scrollY < main_section[len].offsetTop) {}
  point.forEach((ltx) => ltx.classList.remove("active"));
  point[len].classList.add("active");
  pageNum.textContent = "0" + (len + 1);
  pageFixedSpan1.style.animation = "fade 0.7s ease-in-out forwards";
  pageFixedSpan2.style.animation = "fade 0.7s ease-in-out forwards";
  pageNum.style.animation = "fade 0.7s ease-in-out forwards";

  if (len === 0) {
    pageFixedSpan1.textContent = "Introducing";
    pageFixedSpan2.textContent = "our company";
  }

  if (len === 1) {
    pageFixedSpan1.textContent = "Our";
    pageFixedSpan2.textContent = "Service";
  }

  if (len === 2) {
    pageFixedSpan1.textContent = "Our";
    pageFixedSpan2.textContent = "Portfolio";
  }

  if (len === 3) {
    pageFixedSpan1.textContent = "Our";
    pageFixedSpan2.textContent = "Insight";
  }

  if (len === 4) {
    pageFixedSpan1.textContent = "Contact";
    pageFixedSpan2.textContent = "Us";
  }
}
activeMenu();
addEventListener("scroll", activeMenu);

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
