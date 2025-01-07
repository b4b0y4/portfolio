const root = document.documentElement
const isDarkMode = JSON.parse(localStorage.getItem("darkMode"))

if (isDarkMode) root.classList.toggle("dark-mode")
root.classList.remove("no-flash")

document.querySelector(".theme").addEventListener("click", () => {
  root.classList.toggle("dark-mode")
  const updateMode = root.classList.contains("dark-mode")
  localStorage.setItem("darkMode", updateMode)
})