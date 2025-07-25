const isLocalhost =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1";

const repoName = window.location.pathname.split("/")[1];

const basePath = isLocalhost ? "/" : `/${repoName}/`;
const homePageFilePath = `${basePath}`;

const imageSrc = `${basePath}src/public/images/otrLogo.PNG`;
const filePath = `${basePath}src/public/html/`;

class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
        <style>
        ul{
        margin-top: 0;
        margin-bottom: 0;
        }
        .navigation-bar {
            background-color: rgba(0,0,0,0.8);
            backdrop-filter: blur(30px);
            color: white;
            padding-left: 40px;
            padding-right: 40px;
            height: auto;
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            z-index: 2000;
            animation: header-load 600ms ease-in; 
            }
        .nav-shell {
            position: relative;
        }
        .navigation-bar ul {
            list-style: none;
            padding: unset;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .nav-toggle {
            display: flex;
        }
        .navigation-bar a {
            text-decoration: none;
            color: inherit;
            display: inline-block;
            padding: 0.8em;
            border: 1px solid transparent;
            border-radius: 6px;
        }
        .navigation-bar a:hover {
            background-color: white;
            color: #000000;
        }
        .navigation-bar a:active {
            background-color: white;
            color: #000000;
        }
        .otr-logo {
            width: 120px;
            min-width: 96px;
            transition: transform 0.2s;
        }
        .otr-logo:hover {
            transform: scale(1.04);
        }
        .otr-logo img {
            width: 100%;
        }

        .link {
            font-weight: 700;
            cursor: pointer;
        }

        .open .mobile-menu-container {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: end;
        }
        .mobile-menu-container {
            display: block;
            position: absolute;
            top: 56px;
            left: 0;
            right: 0;
            width: 100%;
            font-weight: 500;
            background-color: #d9d9d9;

            padding: 10px 60px 10px 10px;
        }
        .menu-button {
            position: absolute;
            top: 12px;

            right: 0;
            background-color: transparent;
            border: none;
            display: none;
            cursor: pointer;

            transition: 1000ms ease all;
        }

        @keyframes header-load {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(-0);
          }
        }
        .bar1,
        .bar2,
        .bar3 {
          width: 30px;
          height: 4px;
          margin: 5px 0;
          background-color: #d9d9d9;
          transition: 0.4s;
        }

        .menu-button.open .bar1 {
          -webkit-transform: translate(-6px, 6.5px) rotate(-45deg);
          transform: translate(-6px, 6.5px) rotate(-45deg);
        }
        .menu-button.open .bar2 {
          opacity: 0;
        }
        .menu-button.open .bar3 {
          -webkit-transform: translate(-6px, -11px) rotate(45deg);
          transform: translate(-6px, -11px) rotate(45deg);
        }
        @media (max-width: 700px) {
          .navigation-bar.nav-open {
            min-height: 100%;
          }
          .nav-toggle {
            display: none;
          }
          .navigation-bar.nav-open ul {
            display: block;
          }
          .navigation-bar.nav-open .nav-toggle {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            justify-content: center;
            padding-bottom: 6.5rem;
            align-items: center;
            gap: 1rem;
          }
          .navigation-bar.nav-open a {
            display: block;
            font-size: 1.6rem;
          }
          .menu-button {
            display: initial;
          }
          .otr-logo {
            width: 95px;
          }
        }
        </style>
          <div class="navigation-bar">
            <div class="nav-shell">
             <ul>
                  <li class="otr-logo">
                      <img src=${imageSrc} alt="Ontario Tech Racing Logo"/>
                  </li>
                  <div class="nav-toggle">
                      <li class="link">
                          <a href=${homePageFilePath}> Home </a>
                      </li>
                      <li class="link">
                          <a href=${filePath + "TeamPage.html"}>Team</a>
                      </li>
                      <li class="link">
                          <a href=${filePath + "GaragePage.html"}>Our Car</a>
                      </li>
                      <li class="link">
                          <a href=${filePath + "joinUs.html"}>Join Us</a>
                      </li>
                      <li class="link">
                          <a href=${filePath + "sponsers.html"}>Sponsors</a>
                      </li>
                      <li class="link">
                          <a href=${filePath + "History.html"}>History</a>
                      </li>
                  </div>
                </ul>
                <button class="menu-button">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </button>
            </div>
        </div>
    `;
  }
}

customElements.define("header-component", Header);
