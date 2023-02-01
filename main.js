// // const all=document.
// const menus = document.querySelector(".menu");
// const btn = document.getElementsByClassName("hamburger_div");

// document.querySelector(".hamburger").onclick = function () {
//   hamburgers();
// };

const hamburgers = document.querySelector(".hamburger");
const menus = document.querySelector(".mobile");
hamburgers?.addEventListener("click", () => {
  menus.classList.toggle("show");
});
const menu = document.querySelectorAll(".r_top");
const desc = document.querySelectorAll(".serv_desc");

menu?.addEventListener("click", () => {
  desc.classList.toggle("show");
  console.log("helo");
  for (let num = 0; num < number.length; num++) {
    console.log("hello");
  }
});
