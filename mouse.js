let mouseCursor = document.getElementById("cursor");
let hiddenMenu = document.querySelectorAll(".header__nav-menu-hidden__menu a");
let activeHiddenMenu = document.querySelector(".hovered-hidden_menu");
const Logo = document.querySelector(".header__nav-logo");

addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

point.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
  });
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
  });
});

nav_menu.addEventListener("mouseleave", () => {
  mouseCursor.classList.remove("link-grow");
});
nav_menu.addEventListener("mouseover", () => {
  mouseCursor.classList.add("link-grow");
});

Logo.addEventListener("mouseleave", () => {
  mouseCursor.classList.remove("link-grow");
});
Logo.addEventListener("mouseover", () => {
  mouseCursor.classList.add("link-grow");
});

hiddenMenu.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("hovered-hidden_menu");
  });
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("hovered-hidden_menu");
  });
});
