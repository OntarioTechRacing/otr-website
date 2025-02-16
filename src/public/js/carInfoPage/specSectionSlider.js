window.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".slider .list .item");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");

  let countItems = items.length;

  let itemActive = 0;

  //automatic function
  let refreshInterval = setInterval(() => {
    next.click();
  }, 1500);

  //previous button
  prev.onclick = function () {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
      itemActive = countItems - 1;
    }
    showSlider();
  };
  //next button
  next.onclick = function () {
    itemActive = itemActive + 1;
    if (itemActive >= countItems) {
      itemActive = 0;
    }
    showSlider();
  };
  function showSlider() {
    // remove active item
    let oldActiveItem = document.querySelector(".slider .list .item.active");
    oldActiveItem.classList.remove("active");

    //new atcive item
    items[itemActive].classList.add("active");

    //to restart automatic function when click on buttons
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
      next.click();
    }, 4000);
  }
});
