// Your code goes here

// LISTENER #1: LOAD
// -- on load of page, change bus image

const busImage = document.querySelector(".intro img");
console.log(busImage);

window.addEventListener("load", () => {
  busImage.src = "https://www.clker.com/cliparts/T/R/r/a/6/P/pink-bus.svg";
});

const allPs = document.querySelectorAll("p");

// function changeToPink() {
//     allPs.forEach(paragrapj )
// }

window.addEventListener("resize", () =>
  allPs.forEach((paragraph) => {
    paragraph.style.color = "pink";
  })
);

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

// QUESTIONS:
// still confused by event.target vs no need for event
// when to use window vs document
