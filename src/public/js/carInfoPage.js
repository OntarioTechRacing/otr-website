const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        entry.target.classList.remove("not-in-view");
      } else {
        entry.target.classList.remove("in-view");
        entry.target.classList.add("not-in-view");
      }
    });
  },
  {
    rootMargin: "0px",
    threshold: [0, 0.1, 1],
  }
);
const observer1 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("pop-in");
        entry.target.classList.remove("not-in-view");
      } else {
        entry.target.classList.remove("pop-in");
        entry.target.classList.add("not-in-view");
      }
    });
  },
  {
    rootMargin: "0px",
    threshold: [0, 0.1, 1],
  }
);

const tags = document.querySelectorAll(
  ".image,.table,.section-header, .background-information, .number-value, .comp, .spec-description"
);
const specTags = document.querySelectorAll(".spec-name");
tags.forEach((tag) => {
  observer.observe(tag);
});
specTags.forEach((tag) => {
  observer1.observe(tag);
});

history.scrollRestoration = "manual";