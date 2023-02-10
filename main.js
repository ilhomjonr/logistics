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
const aboutRef = document.querySelector(".about");
const servicesRef = document.querySelector(".about");
const recruitingRef = document.querySelector(".about");
const contactRef = document.querySelector(".about");
const scrollFunction = () => {
  let top = window.pageYOffset;

  if (top >= 5) {
    setIsScrolled(true);
  } else {
    setIsScrolled(false);
  }

  if (window.innerWidth >= 880) {
    if (top >= aboutRef.current.offsetTop - 100) {
      setIsAboutActive(true);
    } else {
      setIsAboutActive(false);
    }
    if (top >= servicesRef.current.offsetTop - 100) {
      setIsAboutActive(false);
      setIsContactActive(false);
      setIsRecruitingActive(false);
      setIsServicesActive(true);
    } else {
      setIsServicesActive(false);
    }
    if (top >= recruitingRef.current.offsetTop - 100) {
      setIsAboutActive(false);
      setIsContactActive(false);
      setIsServicesActive(false);
      setIsRecruitingActive(true);
    } else {
      setIsRecruitingActive(false);
    }
    if (top >= contactRef.current.offsetTop - 100) {
      setIsAboutActive(false);
      setIsRecruitingActive(false);
      setIsContactActive(true);
    } else {
      setIsContactActive(false);
    }
  }
};

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
