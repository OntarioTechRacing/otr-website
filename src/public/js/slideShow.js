const images = document.querySelectorAll(".slideshow-images .image");
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
