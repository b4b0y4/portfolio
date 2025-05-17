const loadPage = (page = window.location.hash.slice(1) || "portfolio") => {
  const template = document.getElementById(page);
  const main = document.querySelector("main");
  main.innerHTML = "";
  main.appendChild(template.content.cloneNode(true));

  if (!window.location.hash) window.location.hash = page;
};

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const burger = document.querySelector(".burger-menu");

  window.addEventListener("hashchange", () => {
    loadPage(window.location.hash.slice(1));
    burger.classList.remove("active");
    nav.classList.remove("active");
  });

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
  });

  loadPage();
});
