document.addEventListener("DOMContentLoaded", () => {
  //MAKE SURE LIST LENGTH IS EVEN
  const slideShowImages = [
    "../images/carImages/2024/slideshow-1.jpg",
    "../images/carImages/2024/slideshow-2.png",
    "../images/carImages/2024/slideshow-3.png",
    "../images/carImages/2024/slideshow-4.png",
    "../images/carImages/2024/slideshow-5.jpg",
    "../images/carImages/2024/slideshow-7.jpg",
    "../images/carImages/2022/slideshow-1.jpg",
    "../images/carImages/2022/slideshow-2.jpg",
    "../images/carImages/2022/slideshow-3.jpg",
    "../images/carImages/2022/slideshow-5.jpg",
    "../images/carImages/2022/slideshow-6.jpg",
    "../images/carImages/2022/slideshow-7.jpg",
  ];
  let slideShowHTML = `<div class="slideshow">
      <div class="slideshow-heading section-header not-in-view">TEAM SHOWCASE</div>
      <div class="slideshow-container">
        <div class="slideshow-images">
          <button class="left-arrow">
            <img src="../images/icons/arrow-left-white.png" alt="" />
          </button>
             <div class="slideimage-container">
            
           <img
                id="slide-image-left"
                class="slideimage"
                src=${slideShowImages[slideShowImages.length - 1]}
                alt=""
                style="
              
              animation-name: slide-fade;
              animation-duration: 500ms;
              animation-fill-mode: both;
              animation-timing-function: ease-in;
              animation-delay: 100ms;
            "
              />
          ${slideShowImages
            .map((image, index) => {
              return `
          
              <img
                id="slide-image-center"
                class="slideimage slide-fade-2"
                src=${image}
                alt=""
                data-id=${index}
                style="
                animation-delay: 300ms;
                "
              />
            `;
            })
            .join("")}
             <img
                id="slide-image-right"
                class="slideimage"
                src=${slideShowImages[1]}
                alt=""
              style="
              animation-name: slide-fade;
              animation-duration: 500ms;
              animation-delay: 600ms;
              animation-fill-mode: both;
              animation-timing-function: ease-in;
            "
              />
          </div>

          <button class="right-arrow">
            <img src="../images/icons/arrow-right-white.png" alt="" />
          </button>
        </div>
      </div>
    </div>

`;
  document.querySelector(".slide-show").innerHTML = slideShowHTML;

  // const images = document.querySelectorAll(".slideshow-images .slideimage");
  const images = document.querySelectorAll("#slide-image-center");
  images[0].classList.add("display");
  const leftImage = document.getElementById("slide-image-left");
  const rightImage = document.getElementById("slide-image-right");
  if (leftImage && rightImage && images.length > 0) {
    leftImage.classList.add("display");
    rightImage.classList.add("display");
    let pos = 0;
    function toggleChange(pos, dir) {
      console.log(pos);
      if (dir === "left") {
        leftImage.style.animationDelay = "600ms";
        rightImage.style.animationDelay = "100ms";
      } else {
        leftImage.style.animationDelay = "100ms";
        rightImage.style.animationDelay = "600ms";
      }

      if (leftImage.style.animationName === "slide-fade") {
        leftImage.style.animationName = "slide-fade-1";
        rightImage.style.animationName = "slide-fade-1";
      } else {
        leftImage.style.animationName = "slide-fade";
        rightImage.style.animationName = "slide-fade";
      }
      images[pos].classList.add("display");
      if (pos - 1 >= 0) {
        leftImage.src = slideShowImages[pos - 1];
      } else {
        leftImage.src = slideShowImages[slideShowImages.length - 1];
      }
      if (pos + 1 < slideShowImages.length - 1) {
        rightImage.src = slideShowImages[pos + 1];
      } else {
        rightImage.src = slideShowImages[0];
      }
    }
    document.querySelectorAll(".slideshow-images button").forEach((button) => {
      button.addEventListener("click", () => {
        let dir;
        let currentImage = images[pos];
        if (button.classList.contains("right-arrow")) {
          pos += 1;
          dir = "right";
        }
        if (button.classList.contains("left-arrow")) {
          pos -= 1;
          dir = "left";
        }
        currentImage.classList.remove("display");
        if (images[pos]) {
          toggleChange(pos, dir);
        } else {
          pos = pos >= images.length ? 0 : images.length - 1;
          toggleChange(pos, dir);
        }
      });
    });
  }
});
