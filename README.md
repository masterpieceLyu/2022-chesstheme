## **: CHESS PORTFOILO :**

https://masterpiecelyu.github.io/2022-chesstheme

<img width="1680" alt="Screen Shot 2022-05-19 at 5 07 29 PM" src="https://user-images.githubusercontent.com/89332618/169244904-db688552-5d96-49e9-842e-02bca7839164.png">

# **Main Contents Interaction**

### **1. Page Scrolling for Clicked Point nav : 포인트 네비게이션을 통한 클릭 & 스크롤 이벤트**
### **2. Marquee(Slide Text from right to left) : 텍스트 슬라이드 애니메이션**
### **3. Hidden menu : MENU 클릭 이벤트를 이용한 ROLL & UNROLL**
### **4. Cursor Pointer : 마우스 이벤트를 이용한 포인터**


<br></br>
<br></br>

### 1. Page Scrolling for Clicked Point nav
<img width="840" alt="pointScrolling" src="https://user-images.githubusercontent.com/89332618/169255298-557e416f-0d91-4831-91b7-d1507939c28b.gif">

```js
function activeSection() {
  let len = main_section.length;
  while ((--len && window.scrollY) < main_section[len].offsetTop) {}
  point.forEach((ltx) => ltx.classList.remove("active"));
  point[len].classList.add("active");
  // pageNum.textContent = "0" + (len + 1);
}
activeSection();
addEventListener("scroll", activeSection);
```

```js
const point = document.querySelectorAll(".point");

point[0].onclick = function () {
  window.scroll({ top: main_section1_offset, behavior: "smooth" });
};

...

point[4].onclick = function () {
  window.scroll({ top: main_section5_offset, behavior: "smooth" });
};
```





<br></br>

___
### 2. Marquee(Slide Text from right to left)
<img width="1680" alt="marquee" src="https://user-images.githubusercontent.com/89332618/169260526-101933a1-ba1a-4bd5-b1a7-f3d7dfdfdb9f.gif">

```html
 <div class="marquee">
            <span>WHERE ALL EXPERIENCE <mark>BEGINS</mark></span>
            <span>WHERE ALL EXPERIENCE <mark>BEGINS</mark></span>
            <span>WHERE ALL EXPERIENCE <mark>BEGINS</mark></span>
            <span>WHERE ALL EXPERIENCE <mark>BEGINS</mark></span>
            <span>WHERE ALL EXPERIENCE <mark>BEGINS</mark></span>
            <span>WHERE ALL EXPERIENCE <mark>BEGINS</mark></span>
          </div>
          <div class="marquee marquee2">
            <span>WHERE ALL EXPERIENCE <mark>BEGINS</mark></span>
            <span>WHERE ALL EXPERIENCE <mark>BEGINS</mark></span>
            <span>WHERE ALL EXPERIENCE <mark>BEGINS</mark></span>
            <span>WHERE ALL EXPERIENCE <mark>BEGINS</mark></span>
            <span>WHERE ALL EXPERIENCE <mark>BEGINS</mark></span>
            <span>WHERE ALL EXPERIENCE <mark>BEGINS</mark></span>
          </div>
```

```css
.marquee {
  animation: slidemrqueev 20s linear infinite;
}

.marquee2 {
  animation-delay: -10s;
}

@keyframes slidemarquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
```

<br></br>

___
### 3. Hidden menu : MENU 클릭 이벤트를 이용한 ROLL & UNROLL
<img width="840" alt="menuRolling" src="https://user-images.githubusercontent.com/89332618/169261369-3674d2db-e662-4384-9302-b3fc7e5a976d.gif">

```js
//hidden menu
const nav_menu = document.querySelector(".header__nav-menu");
const nav_menu_hidden = document.querySelector(".header__nav-menu-hidden");

function handleClick() {
  nav_menu_hidden.classList.toggle("active");
  nav_menu.classList.toggle("active");
}

nav_menu.addEventListener("click", handleClick);
```

```css
.header__nav-menu-hidden {
  position: absolute;
  top: 54px;
  right: 110px;
  display: block;
  width: 1px;
  height: 1px;
  border-radius: 50%;
  background: var(--colorpurple);
  z-index: 1;
  transition: 0.5s ease-in-out;
}
```


```css
.header__nav-menu-hidden.active {
  display: block;
  border-radius: 50%;
  background: var(--colorpurple);
  transform: scale(5000);
}
```


<br></br>

___
### 4. Cursor Pointer : 마우스 이벤트를 이용한 포인터
<img width="840" alt="mouseCursor" src="https://user-images.githubusercontent.com/89332618/169262534-79f6f01b-8fa2-4c85-89c7-b4bfe8365e88.gif">

```js
const Logo = document.querySelector(".header__nav-logo");
addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

Logo.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
  });
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
  });
});
```




