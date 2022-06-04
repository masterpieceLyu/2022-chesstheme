//scroll pointer function
const pageNum = document.querySelector("#page-number__now");
const point = document.querySelectorAll(".point");
const main_section = document.querySelectorAll("main");
const pageFixedSpan1 = document.querySelector("#page-span__1");
const pageFixedSpan2 = document.querySelector("#page-span__2");

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

const movingChess2 = document.querySelector(".movingChess2");
const movingChess3 = document.querySelector(".movingChess3");
const movingChess4 = document.querySelector(".movingChess4");
const movingChess5 = document.querySelector(".movingChess5");

//hidden menu
const nav_menu = document.querySelector(".header__nav-menu");
const nav_menu_hidden = document.querySelector(".header__nav-menu-hidden");

function handleClick() {
  nav_menu_hidden.classList.toggle("active");
  nav_menu.classList.toggle("active");
  mouseCursor.classList.toggle("hovered-hidden_menu_box");
}

nav_menu.addEventListener("click", handleClick);

//slide contents from scroll
//slide contents from scroll
//slide contents from scroll

//section 1
addEventListener("scroll", function () {
  let value = this.scrollY;

  if (value < main_section2_offset / 2) {
    pageNum.textContent = "01";
    pageFixedSpan1.textContent = "Our";
    pageFixedSpan2.textContent = "Company";
  }
});

//section 2
addEventListener("scroll", function () {
  let value = this.scrollY;

  if (
    value > main_section2_offset - main_section2_offset / 2 &&
    value < main_section3_offset - main_section2_offset / 2
  ) {
    pageNum.textContent = "02";
    pageFixedSpan1.textContent = "Our";
    pageFixedSpan2.textContent = "Service";

    mainText4.style.display = "inline";
    mainText5.style.display = "inline";
    mainText6.style.display = "inline";
    mainText7.style.display = "inline";
    mainText4.style.animation = "slideMainText 1.5s ease-in-out forwards";
    mainText5.style.animation = "slideMainText 1.5s 0.2s ease-in-out forwards";
    mainText6.style.animation = "slideMainText 1.5s 0.4s ease-in-out forwards";
    mainText7.style.animation = "slideMainText 1.5s 0.4s ease-in-out forwards";

    movingChess2.style.display = "block";
    movingChess2.style.animation =
      "apear 0.8s 1.3s ease forwards, movingChess 5s ease-in-out 2.1s infinite";
  } else {
    mainText4.style.animation = "slideMainTextDisapear 1.5s ease-in-out";
    mainText5.style.animation = "slideMainTextDisapear 1.5s ease-in-out";
    mainText6.style.animation = "slideMainTextDisapear 1.5s ease-in-out";
    mainText7.style.animation = "slideMainTextDisapear 1.5s ease-in-out";
    movingChess2.style.animation = "disApear 1.5s ease-in-out";

    mainText4.style.animation =
      "slideMainTextDisplayNone 0.1s 1.5 ease-in-out forward";
    mainText5.style.animation =
      "slideMainTextDisplayNone 0.1s 1.5 ease-in-out forward";
    mainText6.style.animation =
      "slideMainTextDisplayNone 0.1s 1.5 ease-in-out forward";
    mainText7.style.animation =
      "slideMainTextDisplayNone 0.1s 1.5 ease-in-out forward";
    movingChess2.style.animation =
      "slideMainTextDisplayNone 0.1s 1.5 ease-in-out forward";
  }
});

//section 3
addEventListener("scroll", function () {
  let value = this.scrollY;

  if (
    value > main_section3_offset - main_section2_offset / 2 &&
    value < main_section4_offset - main_section2_offset / 2
  ) {
    pageNum.textContent = "03";
    pageFixedSpan1.textContent = "Our";
    pageFixedSpan2.textContent = "Portfolio";

    mainText8.style.display = "inline";
    mainText9.style.display = "inline";
    mainText10.style.display = "inline";
    mainText11.style.display = "inline";
    mainText8.style.animation = "slideMainText 1.5s ease-in-out forwards";
    mainText9.style.animation = "slideMainText 1.5s 0.2s ease-in-out forwards";
    mainText10.style.animation = "slideMainText 1.5s 0.4s ease-in-out forwards";
    mainText11.style.animation = "slideMainText 1.5s 0.4s ease-in-out forwards";

    movingChess3.style.display = "block";
    movingChess3.style.animation =
      "apear 0.8s 1.3s ease forwards, movingChess 5s ease-in-out 2.1s infinite";
  } else {
    mainText8.style.display =
      "slideMainTextDisplayNone 0.1s 1.5 ease-in-out forward";
    mainText9.style.display =
      "slideMainTextDisplayNone 0.1s 1.5 ease-in-out forward";
    mainText10.style.display =
      "slideMainTextDisplayNone 0.1s 1.5 ease-in-out forward";
    mainText11.style.display =
      "slideMainTextDisplayNone 0.1s 1.5 ease-in-out forward";
    movingChess3.style.display =
      "slideMainTextDisplayNone 0.1s 1.5 ease-in-out forward";

    mainText8.style.animation = "slideMainTextDisapear 1.5s ease-in-out ";
    mainText9.style.animation = "slideMainTextDisapear 1.5s ease-in-out ";
    mainText10.style.animation = "slideMainTextDisapear 1.5s ease-in-out ";
    mainText11.style.animation = "slideMainTextDisapear 1.5s ease-in-out ";
    movingChess3.style.animation = "disApear 1.5s ease-in-out";
  }
});

//section 4
addEventListener("scroll", function () {
  let value = this.scrollY;

  if (
    value > main_section4_offset - main_section2_offset / 2 &&
    value < main_section5_offset - main_section2_offset / 2
  ) {
    pageNum.textContent = "04";
    pageFixedSpan1.textContent = "Our";
    pageFixedSpan2.textContent = "Insight";

    mainText12.style.display = "inline";
    mainText13.style.display = "inline";
    mainText14.style.display = "inline";
    mainText15.style.display = "inline";
    mainText12.style.animation = "slideMainText 1.5s ease-in-out forwards";
    mainText13.style.animation = "slideMainText 1.5s 0.2s ease-in-out forwards";
    mainText14.style.animation = "slideMainText 1.5s 0.4s ease-in-out forwards";
    mainText15.style.animation = "slideMainText 1.5s 0.4s ease-in-out forwards";

    movingChess4.style.display = "block";
    movingChess4.style.animation =
      "apear 0.8s 1.3s ease forwards, movingChess 5s ease-in-out 2.1s infinite";
  } else {
    mainText12.style.display =
      "slideMainTextDisplayNone 0.1s 1.5 ease-in-out forward";
    mainText13.style.display =
      "slideMainTextDisplayNone 0.1s 1.5 ease-in-out forward";
    mainText14.style.display =
      "slideMainTextDisplayNone 0.1s 1.5 ease-in-out forward";
    mainText15.style.display =
      "slideMainTextDisplayNone 0.1s 1.5 ease-in-out forward";
    movingChess4.style.display =
      "slideMainTextDisplayNone 0.1s 1.5 ease-in-out forward";

    mainText12.style.animation = "slideMainTextDisapear 1.5s ease-in-out ";
    mainText13.style.animation = "slideMainTextDisapear 1.5s ease-in-out ";
    mainText14.style.animation = "slideMainTextDisapear 1.5s ease-in-out ";
    mainText15.style.animation = "slideMainTextDisapear 1.5s ease-in-out ";
    movingChess4.style.animation = "disApear 1.5s ease-in-out";
  }
});

//section 5
addEventListener("scroll", function () {
  let value = this.scrollY;

  if (value > main_section5_offset - main_section2_offset / 2) {
    pageNum.textContent = "05";
    pageFixedSpan1.textContent = "Our";
    pageFixedSpan2.textContent = "Contact";

    mainText16.style.display = "inline";
    mainText17.style.display = "inline";
    mainText18.style.display = "inline";
    mainText19.style.display = "inline";
    mainText16.style.animation = "slideMainText 1.5s ease-in-out forwards";
    mainText17.style.animation = "slideMainText 1.5s 0.2s ease-in-out forwards";
    mainText18.style.animation = "slideMainText 1.5s 0.4s ease-in-out forwards";
    mainText19.style.animation = "slideMainText 1.5s 0.4s ease-in-out forwards";

    movingChess5.style.display = "block";
    movingChess5.style.animation =
      "apear 0.8s 1.3s ease forwards, movingChess 5s ease-in-out 2.1s infinite";
  } else {
    mainText16.style.display =
      "slideMainTextDisplayNone 0.1s 1.5 ease-in-out forward";
    mainText17.style.display =
      "slideMainTextDisplayNone 0.1s 1.5 ease-in-out forward";
    mainText18.style.display =
      "slideMainTextDisplayNone 0.1s 1.5 ease-in-out forward";
    mainText19.style.display =
      "slideMainTextDisplayNone 0.1s 1.5 ease-in-out forward";
    movingChess5.style.display =
      "slideMainTextDisplayNone 0.1s 1.5 ease-in-out forward";

    mainText16.style.animation = "slideMainTextDisapear 1.5s ease-in-out ";
    mainText17.style.animation = "slideMainTextDisapear 1.5s ease-in-out ";
    mainText18.style.animation = "slideMainTextDisapear 1.5s ease-in-out ";
    mainText19.style.animation = "slideMainTextDisapear 1.5s ease-in-out ";
    movingChess5.style.animation = "disApear 1.5s ease-in-out";
  }
});

//scrolling
//scrolling
//scrolling

function activeSection() {
  let len = main_section.length;
  while ((--len && window.scrollY) < main_section[len].offsetTop) {}
  point.forEach((ltx) => ltx.classList.remove("active"));
  point[len].classList.add("active");
}
activeSection();
addEventListener("scroll", activeSection);

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
