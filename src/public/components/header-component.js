const isLocalhost =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1";

const basePath = "/";

const imageSrc = `${basePath}src/public/images/otrLogo.PNG`;
const filePath = `${basePath}src/public/html/`;
const homePageFilePath=basePath

class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
  this.innerHTML = `
    <style>
      .navigation-bar {
        background-color: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(30px);
        color: white;
        padding: 0 40px;
        height: 56px;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 2000;
        display: flex;
        justify-content: space-between;
        align-items: center;
        animation: header-load 600ms ease-in;
      }

      .otr-logo {
        width: 120px;
        min-width: 96px;
        transition: transform 0.2s;
      }

      .otr-logo img {
        width: 100%;
      }

      .otr-logo:hover {
        transform: scale(1.04);
      }

      .nav-items {
        display: flex;
        gap: 1rem;
      }

      .link {
        font-weight: 700;
        cursor: pointer;
        text-decoration: none;
        color: inherit;
        padding: 0.8em;
        border-radius: 6px;
        border: 1px solid transparent;
      }

      .link:hover,
      .link:active {
        background-color: white;
        color: #000;
      }

      .menu-button {
        display: none;
        background: transparent;
        border: none;
        cursor: pointer;
      }

      .bar1,
      .bar2,
      .bar3 {
        width: 30px;
        height: 4px;
        background-color: #d9d9d9;
        margin: 5px 0;
        transition: 0.4s;
      }

      .menu-button.open .bar1 {
        transform: translate(-6px, 6.5px) rotate(-45deg);
      }

      .menu-button.open .bar2 {
        opacity: 0;
      }

      .menu-button.open .bar3 {
        transform: translate(-6px, -11px) rotate(45deg);
      }

      @keyframes header-load {
        0% {
          transform: translateY(-100%);
        }
        100% {
          transform: translateY(0);
        }
      }

      @media (max-width: 700px) {
        .nav-items {
          display: none;
          position: absolute;
          top: 56px;
          right: 0;
          left: 0;
          flex-direction: column;
          align-items: center;
          background-color: #d9d9d9;
          padding-bottom: 6rem;
        }

        .navigation-bar.nav-open .nav-items {
          display: flex;
        }

        .menu-button {
          display: block;
        }

        .link {
          color: #000;
          font-size: 1.6rem;
        }

        .otr-logo {
          width: 95px;
        }
      }
    </style>

    <div class="navigation-bar">
      <div class="otr-logo">
        <img src="${imageSrc}" alt="Ontario Tech Racing Logo"/>
      </div>
      <div class="nav-items">
        <a class="link" href="${homePageFilePath}">Home</a>
        <a class="link" href="${filePath}TeamPage.html">Team</a>
        <a class="link" href="${filePath}GaragePage.html">Our Car</a>
        <a class="link" href="${filePath}joinUs.html">Join Us</a>
        <a class="link" href="${filePath}sponsers.html">Sponsors</a>
        <a class="link" href="${filePath}History.html">History</a>
      </div>
      <button class="menu-button">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </button>
    </div>

    <script>
      const menuButton = this.querySelector(".menu-button");
      const nav = this.querySelector(".navigation-bar");

      menuButton.addEventListener("click", () => {
        nav.classList.toggle("nav-open");
        menuButton.classList.toggle("open");
      });

      window.addEventListener("resize", () => {
        if (window.innerWidth > 700) {
          nav.classList.remove("nav-open");
          menuButton.classList.remove("open");
        }
      });
    </script>
  `;
}
}

customElements.define("header-component", Header);
