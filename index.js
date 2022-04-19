const toggle = document.querySelectorAll(".toggle");
const menu = document.querySelector(".menu");
const icon = document.querySelector(".icon-toggle");
const hamburger = document.querySelector(".icon-hamburger");
const close = document.querySelector(".icon-close");

icon.addEventListener("click", () => {
  hamburger.classList.toggle("show");
  close.classList.toggle("show");
  menu.classList.toggle("show");
});

toggle.forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    var id = e.target.id;
    var arrowUp = document.querySelector(`.${id}-arrow-up`);
    var arrowdown = document.querySelector(`.${id}-arrow-down`);
    var content = document.querySelector(`.${id}-content`);
    arrowUp.classList.toggle("show");
    arrowdown.classList.toggle("show");
    content.classList.toggle("show");
  });
});
