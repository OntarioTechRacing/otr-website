document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          entry.target.classList.remove("not-in-view");
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
        }
      });
    },
    {
      rootMargin: "0px",
      threshold: [0, 0.1, 1],
    }
  );
  const observer2 = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("silde-fade");
          entry.target.classList.remove("not-in-view");
        }
      });
    },
    {
      rootMargin: "0px",
      threshold: [0, 0.9, 1],
    }
  );

  const tags = document.querySelectorAll(
    ".image, .table, .section-header, .background-information, .number-value, .comp, .spec-description"
  );
  const specTags = document.querySelectorAll(".spec-name");
  const slideImages = document.querySelectorAll(".slideimage");

  tags.forEach((tag) => {
    observer.observe(tag);
  });

  specTags.forEach((tag) => {
    observer1.observe(tag);
  });
  slideImages.forEach((tag) => {
    observer2.observe(tag);
  });
  history.scrollRestoration = "manual";
});
