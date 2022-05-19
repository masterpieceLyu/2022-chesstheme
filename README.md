## : CHESS PORTFOILO :

<img width="1680" alt="Screen Shot 2022-05-19 at 5 07 29 PM" src="https://user-images.githubusercontent.com/89332618/169244904-db688552-5d96-49e9-842e-02bca7839164.png">

### Interaction Main Contents

1. Page Scrolling for Clicked Point nav
2. Page Number Change
3. Marquee(Slide Text from right to left)
4. Hidden menu
5. Cursor Pointer

<br></br>

# 1. Page Scrolling for Clicked Point nav
<img width="840" alt="pointScrolling" src="https://user-images.githubusercontent.com/89332618/169255298-557e416f-0d91-4831-91b7-d1507939c28b.gif">


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
