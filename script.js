document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
  const nav = document.querySelector("nav");
  const burgerMenu = document.querySelector(".burger-menu");
  const imagesToPreload = [
    "./img/blocks.png",
    "./img/rainbow.png",
    "./img/connect.png",
    "./img/fundMe.png",
  ];

  imagesToPreload.forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  loadPage();

  function loadPage(
    page = sessionStorage.getItem("currentPage") || "portfolio",
  ) {
    const template = document.getElementById(`${page}-template`);
    if (!template) return;

    main.innerHTML = "";
    main.appendChild(template.content.cloneNode(true));
    document.querySelector(".wrapper").scrollTop = 0;

    nav.querySelectorAll("a").forEach((link) => {
      link.classList.toggle("active", link.dataset.page === page);
    });

    sessionStorage.setItem("currentPage", page);
  }

  nav.addEventListener("click", (e) => {
    const page = e.target.dataset.page;
    if (page) {
      e.preventDefault();
      loadPage(page);
      burgerMenu.classList.remove("active");
      nav.classList.remove("active");
    }
  });

  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    nav.classList.toggle("active");
  });

  const root = document.documentElement;
  const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const updateTheme = () =>
    root.classList.toggle("dark-mode", darkModeMediaQuery.matches);

  updateTheme();
  root.classList.remove("no-flash");
  darkModeMediaQuery.addEventListener("change", updateTheme);
});
