// // const all=document.
// const menus = document.querySelector(".menu");
// const btn = document.getElementsByClassName("hamburger_div");

// document.querySelector(".hamburger").onclick = function () {
//   hamburgers();
// };

const hamburgers = document.querySelector(".hamburger");
const menus = document.querySelector(".mobile");
hamburgers?.addEventListener("click", () => {
  hamburgers.classList.toggle("show");
  menus.classList.toggle("show");
});
const btns = document.querySelector(".hamburgercontent");

btns?.addEventListener("click", () => {
  hamburgers.classList.toggle("show");
  menus.classList.toggle("show");
});

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// menu?.addEventListener("click", () => {
//   desc.classList.toggle("show");
//   console.log("helo");
//   for (let num = 0; num < number.length; num++) {
//     console.log("hello");
//   }
// });
