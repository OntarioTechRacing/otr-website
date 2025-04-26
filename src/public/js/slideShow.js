document.addEventListener("DOMContentLoaded", () => {
  const slideShowImages = [
    "../images/carImages/2024/slideshow-1.jpg",
    "../images/carImages/2024/slideshow-2.png",
    "../images/carImages/2024/slideshow-3.png",
    "../images/carImages/2024/slideshow-4.png",
    "../images/carImages/2024/slideshow-5.jpg",
    "../images/carImages/2024/slideshow-7.jpg",
  ];
  let slideShowHTML = `<div class="slideshow">
      <div class="slideshow-heading section-header not-in-view">TEAM SHOWCASE</div>
      <div class="slideshow-container">
        <div class="slideshow-images">
          <button class="left-arrow">
            <img src="../images/icons/arrow-left-white.png" alt="" />
          </button>
          ${slideShowImages
            .map((image, index) => {
              return `
             <div class="slideimage-container">
              <img
                class="slideimage silde-fade"
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
  document.querySelector(".slide-show").innerHTML = slideShowHTML;

  const images = document.querySelectorAll(".slideshow-images .slideimage");
  images[0].classList.add("display");
  let pos = 0;
  document.querySelectorAll(".slideshow-images button").forEach((button) => {
    button.addEventListener("click", () => {
      let currentImage = images[pos];
      if (button.classList.contains("right-arrow")) {
        pos += 1;
      }
      if (button.classList.contains("left-arrow")) {
        pos -= 1;
      }
      currentImage.classList.remove("display");
      if (images[pos]) images[pos].classList.add("display");
      else {
        pos = pos >= images.length ? 0 : images.length - 1;
        images[pos].classList.add("display");
      }
    });
  });
});
