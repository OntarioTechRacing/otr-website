import { pageInfoData } from "./data.js";

const url = new URL(window.location.href);
// const carYear = url.searchParams.get('year');
const carYear = "OTR F2024";

const CurrentPageData = pageInfoData.find(
  (element) => element.title.titleName === carYear
);

let pageHTML =
  CurrentPageData &&
  `
     <div class="title-section">
      <div
       class="title">${CurrentPageData.title.titleName}
    </div>
    <div class="title-image">
        <img src=${CurrentPageData.title.titleImage} alt="" />
    </div> 
      <div class="car-quote"><p>${CurrentPageData.title.tagLine}</p></div>
    </div>

    <div class="background-section">
      <div class="background">
        <div class="background-heading section-header not-in-view">BACKGROUND</div>
        <p class="background-information not-in-view">
         ${CurrentPageData.background.backgroundInfo}
        </p>
      </div>
      <div class="background-image">
        <img class="image not-in-view" src=${
          CurrentPageData.background.backgroundImage
        } alt="" />
      </div>
    </div>
    <div class="team-section">
      <div class="team-heading section-header not-in-view">THE TEAM</div>
      <div class="team-grid">
        <div class="member-col table not-in-view">
          <div>Team Member</div>
          ${CurrentPageData.team
            .map((element) => {
              return `
                      <div>${element[0]}</div>

            `;
            })
            .join("")}
          
        </div>
        <div></div>
        <div class="dept-col table not-in-view">
          <div>Department</div>
          ${CurrentPageData.team
            .map((element) => {
              return `
                <div>${element[1]}</div>

            `;
            })
            .join("")}
        </div>
      </div>
    </div>
    <div class="competition-section">
      <div class="competition-heading section-header not-in-view">COMPETITIONS</div>
      <div class="competition-grid">
        <div class="competition-info-row comp not-in-view">
          <div>${CurrentPageData.Competition.competitionName}</div>
          <div>Placed ${CurrentPageData.Competition.placement}</div>
        </div>
        <div class="competition-image">
          <img
            class="image not-in-view"
            src=${CurrentPageData.Competition.competitionImage}
            alt=""
          />
        </div>
        <div class="competition-info comp not-in-view">
          <div>${CurrentPageData.Competition.competitionName}</div>
          <div>&#8618; ${CurrentPageData.Competition.competitionLocation}</div>
          <div>&#8618; ${CurrentPageData.Competition.competitionDate}</div>
          <div>&#8618; Placed ${CurrentPageData.Competition.placement}</div>
        </div>
        <div class="competition-info-row comp not-in-view">
          <div>${CurrentPageData.Competition.competitionLocation}</div>
          <div>${CurrentPageData.Competition.competitionDate}</div>
        </div>
      
      </div>
    </div>
    <div class="spec-section">
      <div class="spec-heading section-header not-in-view">SPECIFICATIONS</div>
      <div class="spec-grid">
      ${CurrentPageData.specifications
        .map((element) => {
          return `
        <div class="specification">
          <div class="spec-name not-in-view">${element.spec}</div>
          <div class="spec-description not-in-view">${
            element.image ? element.value : ""
          }</div>

         ${
           element.image
             ? `<div class="spec-image">
            <img
              class="image not-in-view"
              src=${element.image}
              alt=""
            />
          </div>`
             : `          
             <div class="spec-number-value not-in-view number-value">${element.value}</div>
                `
         }
        </div>
        `;
        })
        .join("")}
      </div>
    </div>
    <div class="slideshow">
      <div class="slideshow-heading section-header not-in-view">SLIDESHOW</div>
      <div class="slideshow-container">
        <div class="slideshow-images">
          <button class="left-arrow">
            <img src="../images/icons/arrow-left-white.png" alt="" />
          </button>
          ${CurrentPageData.slideshow
            .map((image, index) => {
              return `
             <div class="slideimage-container">
              <img
                class="slideimage not-in-view"
                src=${image}
                alt=""
                data-id=${index}
              />
            </div>
            `;
            })
            .join("")}
          <button class="right-arrow">
            <img src="../images/icons/arrow-right-white.png" alt="" />
          </button>
        </div>
      </div>
    </div>

`;
document.querySelector(".page-content").innerHTML = pageHTML;
