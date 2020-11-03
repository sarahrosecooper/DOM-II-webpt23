// Your code goes here

// LISTENER #1: LOAD
// -- on load of page, change bus image

const busImage = document.querySelector(".intro img");
console.log(busImage);

window.addEventListener("load", () => {
  busImage.src = "https://www.clker.com/cliparts/T/R/r/a/6/P/pink-bus.svg";
});

// LISTENER #2: RESIZE
// ON RESIZE OF PAGE, CHANGE ALL PARAGRAPH TEXT TO PINK

const allPs = document.querySelectorAll("p");

window.addEventListener("resize", () =>
  allPs.forEach((paragraph) => {
    paragraph.style.color = "pink";
  })
);

window.addEventListener("resize", () => {
  if ((allPs.style.color = "pink")) {
    allPs.style.color = "black";
  }
});

// LISTENER #3: MOUSEENTER
// ON MOUSEENTER (INTO HEADER) CREATE BACKGROUND IMAGE
// HIGHLIGHT A LINKS, AS WELL AS H1 TO DIFFERENT COLORS

const header = document.querySelector(".main-navigation");

header.addEventListener("mouseenter", () => {
  header.style.backgroundImage =
    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQb0QeOgaRY3NTqAoIvuhS9yfznNoRAGlyEqQd49zCqoM8YMY-JSoxAAH6F_VJnK3K7QqPIkzHtNcMPOOlJhTOZTOkT0NVOXytGtnCn&usqp=CAU&ec=45714078)";
});

const navLinks = document.querySelectorAll(".nav-link");

header.addEventListener("mouseenter", () =>
  navLinks.forEach((element) => {
    element.style.backgroundColor = "yellow";
  })
);

const h1 = document.querySelector("h1");

h1.addEventListener("mouseenter", () => {
  h1.style.backgroundColor = "pink";
});

// LISTENER #4: DBLCLICK
// CHANGE IMAGE

const changeImage = document.querySelector(".img-content img");

console.log(changeImage);

changeImage.addEventListener("dblclick", () => {
  changeImage.src =
    "https://ih1.redbubble.net/image.314543733.1811/st,small,507x507-pad,600x600,f8f8f8.u4.jpg";
});

// LISTENER #5: SCROLLING

window.addEventListener("scroll", () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;

  if (Math.ceil(scrolled) === scrollable) {
    alert("Slow down, buddy!");
  }
});

// LISTENER #6 & 7: MAKE LETS GO DISAPPEAR/ MOUSELEAVE

const letsGo = document.querySelector(".content-section h2");
letsGo.addEventListener("mouseenter", () => {
  letsGo.style.visibility = "hidden";
});


// make reappear after 550 milliseconds
letsGo.addEventListener("mouseleave", function () {
  setTimeout(visibleHeader, 550);
});

// to make visible
function visibleHeader() {
  letsGo.style.visibility = "visible";
}

// QUESTIONS:
// still confused by event.target vs no need for event
// when to use window vs document
// how to use if else for resize
