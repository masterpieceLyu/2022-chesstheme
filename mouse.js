let mouseCursor = document.getElementById("cursor");
let hiddenMenu = document.querySelectorAll(".header__nav-menu-hidden__menu a");
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

nav_menu_hidden.addEventListener("mouseleave", () => {
  mouseCursor.classList.remove("hovered-hidden_menu_box");
});
nav_menu_hidden.addEventListener("mouseover", () => {
  mouseCursor.classList.add("hovered-hidden_menu_box");
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

if (nav_menu.hasAttribute("active")) {
  console.log("메뉴 박스 액티브");
}
