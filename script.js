document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
  const nav = document.querySelector("nav");
  const burger = document.querySelector(".burger-menu");

  function loadPage(page = window.location.hash.slice(1) || "portfolio") {
    const template = document.getElementById(`${page}-template`);

    main.innerHTML = "";
    main.appendChild(template.content.cloneNode(true));
    document.querySelector(".wrapper").scrollTop = 0;

    if (!window.location.hash) window.location.hash = page;
  }

  window.addEventListener("hashchange", () => {
    loadPage(window.location.hash.slice(1));
    burger.classList.remove("active");
    nav.classList.remove("active");
  });

  loadPage();
  document.documentElement.classList.remove("no-flash");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
  });
});
