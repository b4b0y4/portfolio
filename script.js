document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
  const nav = document.querySelector("nav");
  const burgerMenu = document.querySelector(".burger-menu");
  const navLinks = nav.querySelectorAll("a");

  function setActivePage(page) {
    navLinks.forEach((link) => link.classList.remove("active"));
    const activeLink = nav.querySelector(`[data-page="${page}"]`);
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }

  function loadContent(page) {
    const template = document.getElementById(`${page}-template`);
    if (template) {
      main.innerHTML = "";
      main.appendChild(template.content.cloneNode(true));
      setActivePage(page);
      sessionStorage.setItem("currentPage", page);
    }
  }

  const savedPage = sessionStorage.getItem("currentPage");
  loadContent(savedPage || "portfolio");

  nav.addEventListener("click", (e) => {
    if (e.target.dataset.page) {
      e.preventDefault();
      loadContent(e.target.dataset.page);
      burgerMenu.classList.remove("active");
      nav.classList.remove("active");
    }
  });

  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    nav.classList.toggle("active");
  });

  const root = document.documentElement;

  function applySystemTheme() {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    root.classList.toggle("dark-mode", prefersDark);
  }

  applySystemTheme();
  root.classList.remove("no-flash");

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", applySystemTheme);
});
