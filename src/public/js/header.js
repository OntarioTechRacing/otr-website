const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".navigation-bar");
const body = document.body;
menuButton.addEventListener("click", (e) => {
  menuButton.classList.toggle("open");
  if (!nav.classList.contains("nav-open")) {
    nav.classList.add("nav-open");
    body.style.marginTop = "318px";
  } else {
    nav.classList.remove("nav-open");
    body.style.marginTop = "56px";
  }
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 700) {
    body.style.marginTop = "56px";
    nav.classList.remove("nav-open");
    menuButton.classList.remove("open");
  }
});

    menuButton.classList.toggle("open");
    if (!nav.classList.contains("nav-open")) {
        nav.classList.add("nav-open");
        body.style.marginTop = "318px";
    } else {
        nav.classList.remove("nav-open");
        body.style.marginTop = "56px";
    }
});
window.addEventListener("resize", () => {
    if (window.innerWidth > 700) {
        body.style.marginTop = "56px";
        nav.classList.remove("nav-open");
        menuButton.classList.remove("open");
    }
});
