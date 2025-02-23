import { pageInfoData } from "./data.js";

const url = new URL(window.location.href);
// const carYear = url.searchParams.get('year');
const carYear = "OTR F24";

const CurrentPageData = pageInfoData.find(
  (element) => element.title.titleName === carYear
);
{
  /* <div class="car-quote"><p>${CurrentPageData.title.tagLine}</p></div> */
}
{
  /* <div class="background-section">
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
</div> */
}

let pageHTML =
  CurrentPageData &&
  `
    <div class="title-section">
      <div class="title">${CurrentPageData.title.titleName}
      </div>

      <div class='image-spec-container'>
        <div class="title-image">
            <img src=${CurrentPageData.title.titleImage} alt="" />
        </div> 
        <div class='title-Specs-Container'>
          ${Object.keys(CurrentPageData.titleSpecs)
            .map((titleSpec) => {
              return `
              <div class='title-Specs'>
                <span class='title-spec-name'>${titleSpec}</span><span class='arrow'>&#8658;</span> ${CurrentPageData.titleSpecs[titleSpec]}
              </div>
              `;
            })
            .join("")}
        </div>
        <div class='title-Specs-mobile'>
          <div class='title-spec-mobile' style='--i: 1;'>
            <span class='title-spec-name-mobile'>
              TopSpeed
            </span>
            <span>
              164km/h
            </span>
          </div>
          <div class='title-spec-mobile' style='--i: 2;'>
            <span class='title-spec-name-mobile'>
              PeakPower
            </span>
            <span>
              86kW
            </span>
          </div>
          <div class='title-spec-mobile' style='--i: 3;'>
            <span class='title-spec-name-mobile'>
              Acceleration
            </span>
            <span>
              0 - 100km/h in ~4 sec
            </span>
          </div>
        </div>
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
      <div class='slider'>
        <div class='list'>
          ${CurrentPageData.specs
            .map((spec, index) => {
              return `
              <div class='item ${index === 0 ? "active" : ""}'>
                <img src=${spec.image} />
                <div class='content'>
                  <h2>
                    ${spec.name}
                  </h2>
                  <p>
                    ${spec.desc}
                  </p>
                </div>
              </div>
            `;
            })
            .join("")}
        </div>
        <div class='arrows'>
          <button id='prev'><</button>
          <button id='next'>></button>
        </div>
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
