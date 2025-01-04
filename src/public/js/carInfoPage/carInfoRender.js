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
        <div class="background-heading section-header">BACKGROUND</div>
        <p class="background-information">
         ${CurrentPageData.background.backgroundInfo}
        </p>
      </div>
      <div class="background-image">
        <img class="image" src=${
          CurrentPageData.background.backgroundImage
        } alt="" />
      </div>
    </div>
    <div class="team-section">
      <div class="team-heading section-header">THE TEAM</div>
      <div class="team-grid">
        <div class="member-col table">
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
        <div class="dept-col table">
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
      <div class="competition-heading section-header">COMPETITIONS</div>
      <div class="competition-grid">
        <div class="competition-info-row comp">
          <div>${CurrentPageData.Competition.competitionName}</div>
          <div>Placed ${CurrentPageData.Competition.placement}</div>
        </div>
        <div class="competition-image">
          <img
            class="image"
            src=${CurrentPageData.Competition.competitionImage}
            alt=""
          />
        </div>
        <div class="competition-info comp">
          <div>${CurrentPageData.Competition.competitionName}</div>
          <div>&#8618; ${CurrentPageData.Competition.competitionLocation}</div>
          <div>&#8618; ${CurrentPageData.Competition.competitionDate}</div>
          <div>&#8618; Placed ${CurrentPageData.Competition.placement}</div>
        </div>
        <div class="competition-info-row comp">
          <div>${CurrentPageData.Competition.competitionLocation}</div>
          <div>${CurrentPageData.Competition.competitionDate}</div>
        </div>
      
      </div>
    </div>
    <div class="spec-section">
      <div class="spec-heading section-header">SPECIFICATIONS</div>
      <div class="spec-grid">
      ${CurrentPageData.specifications
        .map((element) => {
          return `
        <div class="specification">
          <div class="spec-name">${element.spec}</div>
          <div class="spec-description">${
            element.image ? element.value : ""
          }</div>

         ${
           element.image
             ? `<div class="spec-image">
            <img
              class="image"
              src=${element.image}
              alt=""
            />
          </div>`
             : `          
             <div class="spec-number-value number-value">${element.value}</div>
                `
         }
        </div>
        `;
        })
        .join("")}
      </div>
    </div>
    <div class="slideshow">
      <div class="slideshow-heading section-header">SLIDESHOW</div>
      <div class="slideshow-container">
        <div class="slideshow-images">
          <button class="left-arrow">
            <img src="../images/icons/arrow-left.webp" alt="" />
          </button>
          ${CurrentPageData.slideshow
            .map((image, index) => {
              return `
             <div>
            <img
              class="slideimage"
              src=${image}
              alt=""
              data-id=${index}
            />
          </div>
            `;
            })
            .join("")}
          <button class="right-arrow">
            <img src="../images/icons/arrow-right.webp" alt="" />
          </button>
        </div>
      </div>
    </div>

`;
// console.log(pageHTML);
document.querySelector(".page-content").innerHTML = pageHTML;
