class Footer extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <style>
            .footer {
                padding: 0px 40px 30px 40px;
                border-top: 1px solid white;
                height: 200px;
                /* background-color: #000000; */
                color: white;
                position: relative;
                margin-top: auto;
                justify-content:center;
            }
            .footer-info {
                position: absolute;
                display: flex;
                flex-direction: column;
                align-items: center;
                width: max-content;
                height: max-content;
                row-gap: 5px;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
                margin: auto;
            }
            .otr-info {
                display: flex;
                flex-direction: column;
                align-items: center;
                font-size: 1.2em;
                font-weight: 500;
            }

            .developer {
                position: absolute;
                bottom: 10px;
                left: 16px;
                font-size: 1.2em;
                font-weight: 500;
            }
            .otr-links {
                display: flex;
                flex-direction: row;
                align-items: center;
                column-gap: 30px;
                width: max-content;
            }
            .otr-links a:nth-child(1) {
                width: 50px;
            }
            .otr-links a:nth-child(2) {
                width: 55px;
            }
            .instagram-link,
            .linkedin-link {
                display: block;
                width: 100%;
                -webkit-filter: invert(100%); /* Safari/Chrome */
                filter: invert(100%);
            }

            @media (max-width: 580px) {
                .otr-info,
                .developer {
                    font-size: 1em;
                }
            }

            @media (max-width: 965px) {
            .otr-links {
                margin: auto;
                left: 0;
                right: 0;
                top: 180px;
            }
            }
            @media (max-width: 1400px) {
            .otr-links a:nth-child(1) {
                width: 35px;
            }
            .otr-links a:nth-child(2) {
                width: 40px;
            }
            }

        </style>
            <div class="footer">
                <div class="footer-info">
                <div class="otr-links">
                    <a href="https://www.instagram.com/ontariotechracing/">
                    <img
                        class="instagram-link"
                        src="https://clipartcraft.com/images/instagram-clipart-logo-black-4.png"
                        alt=""
                    />
                    </a>
                    <a href="https://www.linkedin.com/company/ontariotechracing/">
                    <img
                        class="linkedin-link"
                        src="https://icons.iconarchive.com/icons/iconsmind/outline/512/Linkedin-icon.png"
                        alt=""
                    />
                    </a>
                </div>
                <div class="otr-info">
                    <span class="otr-email">motorsports@ontariotechu.net</span>
                    <span class="otr-name"
                    >2025 Ontario Tech University Formula Racing</span
                    >
                </div>
                </div>
            </div>
                `
    }
}

customElements.define('footer-component', Footer)