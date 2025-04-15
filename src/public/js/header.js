document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-button");
  const nav = document.querySelector(".navigation-bar");
  const body = document.body;
  menuButton.addEventListener("click", (e) => {
    menuButton.classList.toggle("open");
    if (!nav.classList.contains("nav-open")) {
      nav.classList.add("nav-open");
    } else {
      nav.classList.remove("nav-open");
    }
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 700) {
      nav.classList.remove("nav-open");
      menuButton.classList.remove("open");
    }
  });
});
