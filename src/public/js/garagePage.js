document.addEventListener("DOMContentLoaded", async () => {
  //register gsap utilities
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  // Initialize a new Lenis instance for smooth scrolling
  const lenis = new Lenis();

  // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000); // Convert time from seconds to milliseconds
  });

  // Disable lag smoothing in GSAP to prevent any delay in scroll animations
  gsap.ticker.lagSmoothing(0);

  const image = document.getElementById("car-model");
  const textSection = document.getElementById("text-section");
  const pointerFinger = document.getElementById("pointer");

  const textSectionHeading = document.getElementById("section-heading");
  const textSectionContent = document.getElementById("section-content");
  const specsContainer = document.getElementById("dept-specs-container");
  const progressBarGrowth = document.getElementById("bar-progress");
  const progressBarBubbleArray = document.querySelectorAll(
    "#progress-bar-bubble"
  );
  const scrollToTopBtn = document.getElementById("scroll-to-top-btn");

  const autoPlayBtn = document.getElementById("auto-play-btn");
  const autoPlayBtnLabel = document.querySelector("button.auto-play-btn span");
  const autoPlayBtnIcon = document.getElementById("play-stop-icon");

  console.log(document.documentElement.scrollHeight);
  const defaultHeading = "3D Display of Our Car";
  const defaultContent = "Scroll down to see the animation";
  const INITIAL_PROGRESS_BAR_HEIGHT = 2;
  //function to switch text content on scroll
  //toggling animations to ensure text content animates in at the right time
  const replaceTextSection = (heading, content) => {
    if (textSectionContent && textSectionHeading) {
      textSectionContent.textContent = content;
      textSectionHeading.textContent = heading;

      if (textSectionHeading.style.animationName === "move-heading") {
        textSectionHeading.style.animationName = "move-heading1";
        textSectionContent.style.animationName = "move-content1";
      } else {
        textSectionHeading.style.animationName = "move-heading";
        textSectionContent.style.animationName = "move-content";
      }
    }
  };
  const generateSpecsHtml = (specArray, index, flag = "notresize") => {
    if (specsContainer) {
      if (index === 0 || index === 7) {
        specsContainer.classList.add("hide-element");
      } else {
        specsContainer.classList.remove("hide-element");
      }
      if (specArray.length > 0) {
        specArray.forEach((spec, index) => {
          document.getElementById(`spec-${index + 1}`).textContent = spec;
        });
      }
    }
    if (flag !== "resize") {
      if (specsContainer.style.animationName === "spec-animate-in") {
        specsContainer.style.animationName = "spec-animate-in1";
      } else {
        specsContainer.style.animationName = "spec-animate-in";
      }
    }
    // const childern = specsContainer.children;
    // if (childern.length > 0) {
    //   for (const child of childern) {
    //     console.log(childern.length);
    //     specsContainer.removeChild(child);
    //   }
    // }
    // specArray.forEach((spec) => {
    //   const span = document.createElement("span");
    //   span.classList.add("car-garage-spec");
    //   span.textContent = spec;
    //   specsContainer.appendChild(span);
    // });
  };
  //logic for progress bar
  const fillProgressBar = (progress) => {
    if (progressBarGrowth && progressBarBubbleArray.length > 0) {
      let progressToPercent = progress * 100;

      progressBarGrowth.style.height =
        INITIAL_PROGRESS_BAR_HEIGHT + progressToPercent + "%";
      fillProgressBubble(progressToPercent);
      // console.log("progress percent", progressToPercent);
      // console.log("barHeight", barProgress);
    }
  };
  //logic for filling progress bar bubbles
  const fillProgressBubble = (percentProgress) => {
    for (let i = 0; i < progressBarBubbleArray.length; i++) {
      let shouldFill =
        percentProgress >=
        parseFloat(progressBarBubbleArray[i].style.top) -
          INITIAL_PROGRESS_BAR_HEIGHT;
      //do not want to alter style for the first bubble
      if (i > 1) {
        if (
          shouldFill &&
          progressBarBubbleArray[i].style.backgroundColor === "rgb(84, 22, 0)"
        ) {
          progressBarBubbleArray[i].style.backgroundColor = "#e75d2a";
        } else if (
          !shouldFill &&
          progressBarBubbleArray[i].style.backgroundColor === "rgb(231, 93, 42)"
        ) {
          progressBarBubbleArray[i].style.backgroundColor = "#541600";
        }
      }
    }
  };

  //content  for text section
  const carInfo = [
    {
      heading: "Welcome to F2024",
      content: `Introducing the F2024, our latest Formula SAE 
          electric vehicle, built through collaboration, innovation, and cutting-edge engineering.`,
      specs: [],
    },
    {
      heading: "Manufacturing",
      content: `Designed for strength and weight efficiency, the chassis provides 
      the backbone of the vehicle while ensuring safety and performance.`,
      specs: ["4130 chromoly", "Torsional stiffness 1366 Nm/deg", "39.2kg"],
    },
    {
      heading: "Suspension",
      content: `Adjustability is key. Our suspension team focuses on refining 
          geometry, optimizing anti-dive/anti-squat, and enhancing tunability for different track conditions.`,
      specs: ["Contact Pitch", "spec2", "spec3"],
    },
    {
      heading: "Drivetrain & Braking",
      content: `We design the systems that get power to the wheels and 
      bring the car to a stop. From fine-tuned brakes that deliver confident control,
       to a drivetrain built for smooth, responsive acceleration.`,
      specs: [
        " Emrax 208 HV Motor",
        "Total voltage 400V",
        "Max current 180 Amps",
      ],
    },
    {
      heading: "Hardware & Electronics",
      content: ` Responsible for designing, building, and integrating critical systems
       such as the battery management system (BMS), power distribution, control units, and sensor networks. 
       From high-voltage safety to efficient energy delivery, the department ensures every
       electronic component works seamlessly to optimize performance, reliability, and safety on the track.`,
      specs: ["Energus TinyBMS s516 v2.1", "spec2", "spec3"],
    },
    {
      heading: "Aerodynamics",
      content: `The Aerodynamics department focuses on designing and optimizing the body 
      of the electric car to minimize drag and maximize efficiency and stability. 
      Using tools like CFD simulations and wind tunnel testing, the
       team develops wings, diffusers, and bodywork that enhance downforce and improve handling at high speeds.`,
      specs: ["Aero coefficients", "spec2", "spec3"],
    },
    {
      heading: "Vehicle Analysis",
      content: `The Vehicle Dynamics team focuses on how the car moves and handles on the track. 
      We work on things like suspension, steering, and tires to make sure the car
      is smooth, stable, and easy to control. Our goal is to give the driver the best 
      possible feel and performance during every part of the race.`,
      specs: ["Top Speed - 164km/h", "spec2", "spec3"],
    },
    {
      heading: "Our Sponsors",
      content: `Our business team secures vital sponsorships,
           providing the financial support and industry partnerships that make this project possible.`,
      specs: [],
    },
  ];
  //scrolltrigger progress thresholds for text content
  const IMAGE_CODE_2_PROGRESS = 0.14207119741100324;
  const IMAGE_CODE_3_PROGRESS = 0.25210355987055016;

  // 0.25857605177993526
  const IMAGE_CODE_4_PROGRESS = 0.36084142394822005;
  // 0.40614886731391586 -> 5
  const IMAGE_CODE_5_PROGRESS = 0.402;
  const IMAGE_CODE_6_PROGRESS = 0.5420711974110033;
  const IMAGE_CODE_7_PROGRESS = 0.6650485436893204;
  const IMAGE_CODE_8_PROGRESS = 0.7944983818770227;
  //gsap animation of pointer finger
  gsap.fromTo(
    "#pointer",
    {
      y: -2.5,
    },
    {
      y: 2.5,
      yoyo: true,
      duration: 0.3,
      delay: 0.5,
      repeat: -1,
      ease: "circ.inOut",
    }
  );
  //for spects html generation
  //array for all the image srcs
  const imgSrcs = Array.from({ length: 150 }, (_, index) => {
    const src = `../images/carFrames/frame00${index
      .toString()
      .padStart(3, "0")}.png`;
    return src;
  });
  //function to preload images
  const preloadImages = async () => {
    let loadedCount = 0;
    const images = [];
    return new Promise((resolve, reject) => {
      const loadImages = () => {
        loadedCount++;
        if (loadedCount === imgSrcs.length - 1) resolve(images);
      };
      const loadError = (index) => {
        const message = "There was an error loading image " + imgSrcs[index];
        console.log(message, index);
        reject();
      };
      for (let i = 0; i < imgSrcs.length; i++) {
        const image = new Image();
        image.src = imgSrcs[i];

        image.addEventListener("load", loadImages);
        image.addEventListener("error", () => loadError(i));
        images.push(image);
      }
    });
  };

  //*MOVE THIS FUNCTION TO ITS OWN SCRIPT AND COMMENT IT
  let currentContent = "";
  let notResizing = true;
  const getTextContent = (status, progress) => {
    let textVal = textSectionContent.textContent;
    if (progress >= 0 && progress < IMAGE_CODE_2_PROGRESS) {
      currentContent = carInfo[0].content;
      if (status === "PAGE_LOAD" && currentContent !== textVal && notResizing) {
        // specsContainer.classList.add("hide-element");
        generateSpecsHtml(carInfo[0].specs, 0);
        replaceTextSection(carInfo[0].heading, carInfo[0].content);
        // generateSpecsHtml(carInfo[0].specs);

        // textSection.innerHTML = html;
        // console.log(progress, currentContent);
      }
      if (status === "RESIZE") {
        textSectionContent.textContent = carInfo[0].content;
        textSectionHeading.textContent = carInfo[0].heading;
        generateSpecsHtml(carInfo[0].specs, 0, "resize");
      }
    }
    if (progress >= IMAGE_CODE_2_PROGRESS && progress < IMAGE_CODE_3_PROGRESS) {
      currentContent = carInfo[1].content;
      if (status === "PAGE_LOAD" && currentContent !== textVal && notResizing) {
        // specsContainer.classList.remove("hide-element");
        generateSpecsHtml(carInfo[1].specs, 1);
        replaceTextSection(carInfo[1].heading, carInfo[1].content);
        // generateSpecsHtml(carInfo[1].specs);

        // textSection.innerHTML = html;
        // console.log(progress);
      }
      if (status == "RESIZE") {
        console.log(progress);

        textSectionContent.textContent = carInfo[1].content;
        textSectionHeading.textContent = carInfo[1].heading;
        generateSpecsHtml(carInfo[1].specs, 1, "resize");
      }
    }
    if (
      progress >= IMAGE_CODE_3_PROGRESS &&
      progress < IMAGE_CODE_4_PROGRESS &&
      notResizing
    ) {
      currentContent = carInfo[2].content;
      if (status === "PAGE_LOAD" && currentContent !== textVal && notResizing) {
        // specsContainer.classList.remove("hide-element");
        generateSpecsHtml(carInfo[2].specs, 2);
        replaceTextSection(carInfo[2].heading, carInfo[2].content);
        // textSection.innerHTML = html;
        // console.log(progress);
      }
      if (status === "RESIZE") {
        textSectionContent.textContent = carInfo[2].content;
        textSectionHeading.textContent = carInfo[2].heading;
        generateSpecsHtml(carInfo[2].specs, 2, "resize");
      }
    }
    if (
      progress >= IMAGE_CODE_4_PROGRESS &&
      progress < IMAGE_CODE_5_PROGRESS &&
      notResizing
    ) {
      currentContent = carInfo[3].content;
      if (status === "PAGE_LOAD" && currentContent !== textVal && notResizing) {
        // specsContainer.classList.remove("hide-element");
        generateSpecsHtml(carInfo[3].specs, 3);
        replaceTextSection(carInfo[3].heading, carInfo[3].content);
        // textSection.innerHTML = html;
        // console.log(progress);
      }
      if (status === "RESIZE") {
        textSectionContent.textContent = carInfo[3].content;
        textSectionHeading.textContent = carInfo[3].heading;
        generateSpecsHtml(carInfo[3].specs, 3, "resize");
      }
    }
    if (
      progress >= IMAGE_CODE_5_PROGRESS &&
      progress < IMAGE_CODE_6_PROGRESS &&
      notResizing
    ) {
      currentContent = carInfo[4].content;
      if (status === "PAGE_LOAD" && currentContent !== textVal && notResizing) {
        // specsContainer.classList.remove("hide-element");
        generateSpecsHtml(carInfo[4].specs, 4);
        replaceTextSection(carInfo[4].heading, carInfo[4].content);
        // textSection.innerHTML = html;
        // console.log(progress);
      }
      if (status === "RESIZE") {
        textSectionContent.textContent = carInfo[4].content;
        textSectionHeading.textContent = carInfo[4].heading;
        generateSpecsHtml(carInfo[4].specs, 4, "resize");
      }
    }
    if (
      progress >= IMAGE_CODE_6_PROGRESS &&
      progress < IMAGE_CODE_7_PROGRESS &&
      notResizing
    ) {
      currentContent = carInfo[5].content;
      if (status === "PAGE_LOAD" && currentContent !== textVal && notResizing) {
        // specsContainer.classList.remove("hide-element");
        generateSpecsHtml(carInfo[5].specs, 5);
        replaceTextSection(carInfo[5].heading, carInfo[5].content);
        // textSection.innerHTML = html;
        // console.log(progress);
      }
      if (status === "RESIZE") {
        textSectionContent.textContent = carInfo[5].content;
        textSectionHeading.textContent = carInfo[5].heading;
        generateSpecsHtml(carInfo[5].specs, 5, "resize");
      }
    }
    if (
      progress >= IMAGE_CODE_7_PROGRESS &&
      progress < IMAGE_CODE_8_PROGRESS &&
      notResizing
    ) {
      currentContent = carInfo[6].content;
      if (status === "PAGE_LOAD" && currentContent !== textVal && notResizing) {
        // specsContainer.classList.remove("hide-element");
        generateSpecsHtml(carInfo[6].specs, 6);
        replaceTextSection(carInfo[6].heading, carInfo[6].content);
        // textSection.innerHTML = html;
        // console.log(progress);
      }
      if (status === "RESIZE") {
        textSectionContent.textContent = carInfo[6].content;
        textSectionHeading.textContent = carInfo[6].heading;
        generateSpecsHtml(carInfo[6].specs, 6, "resize");
      }
    }
    if (progress >= IMAGE_CODE_8_PROGRESS && notResizing) {
      currentContent = carInfo[7].content;
      if (status === "PAGE_LOAD" && currentContent !== textVal && notResizing) {
        // specsContainer.classList.add("hide-element");
        generateSpecsHtml(carInfo[7].specs, 7);
        replaceTextSection(carInfo[7].heading, carInfo[7].content);
        // textSection.innerHTML = html;
        // console.log(progress);
      }
      if (status === "RESIZE") {
        textSectionContent.textContent = carInfo[7].content;
        textSectionHeading.textContent = carInfo[7].heading;
        generateSpecsHtml(carInfo[7].specs, 7, "resize");
      }
    }
  };
  //toggle classes to remove intial section with scroll down instruction for user
  const toggleClasses = () => {
    textSection.classList.toggle("toggle-text-pos");
    pointerFinger.classList.toggle("hide-pointer");
  };

  //get all the preloaded images
  const loadedImages = await preloadImages();
  //scrolltrigger that controls the image ands text changes on scroll
  let triggerProgress = 0;
  const DURATION = 30;
  let scrollingAnimation;
  let isPaused = true;
  if (loadedImages && loadedImages.length === imgSrcs.length) {
    const ST = ScrollTrigger.create({
      id: "image-seq",
      trigger: "#garage-main",
      start: "clamp(2% top)",
      end: "clamp(bottom top)",
      scrub: true,
      //changes image src whenever the user scrolls based on scroll progress
      //changes the text at the appropriate progress
      onUpdate: ({ progress }) => {
        triggerProgress = progress;
        const imageSrc =
          imgSrcs[Math.floor(progress * (loadedImages.length - 1))];
        // console.log("scrolltrigger progress", progress);

        image.src = imageSrc;
        getTextContent("PAGE_LOAD", progress);
        fillProgressBar(progress);

        // const nums = [31, 51, 110, 130];
        // nums.forEach((val) => {
        //   if (imageCode === `frame00${val.toString().padStart(3, "0")}.png`) {
        //     console.log(imageCode + ": ", progress);
        //   }
        // });
      },
      //changes the appropriate styles when the scrolltrigger starts
      onEnter: () => {
        toggleClasses();
        image.style.opacity = 1;
        image.style.zIndex = 1;

        //animates scroll to top btn in
        scrollToTopBtn.classList.remove("animate-btn-out");
        scrollToTopBtn.classList.add("animate-btn-in");
      },
      //reverts the appropriate styles when the scrolltrigger goes back past the start point
      onLeaveBack: () => {
        toggleClasses();
        image.style.zIndex = 0;
        image.style.opacity = 0;
        if (notResizing) replaceTextSection(defaultHeading, defaultContent);
        currentContent = defaultContent;

        //animates scroll to top btn out
        scrollToTopBtn.classList.remove("animate-btn-in");
        scrollToTopBtn.classList.add("animate-btn-out");
      },
      //reverts the appropriate styles when the scrolltrigger ends

      onLeave: () => {
        console.log("end");
        //reset automatic play btn when the ply ends
        if (autoPlayBtnLabel.textContent === "Stop Play") {
          setToPlayDisplay();
          isPaused = true;
        }
      },
    });
    //function to get scroll position for progress bar bubble links
    const getScrollPos = (progress) => {
      return ST.start + (ST.end - ST.start) * progress;
    };
    //add click eventlistener for going to each section linked by the bubble btn on progress bar
    //had to use 1.3 as an offset to get more exact image frames
    for (let i = 0; i < progressBarBubbleArray.length; i++) {
      if (i > 0) {
        progressBarBubbleArray[i].addEventListener("click", () => {
          console.log(progressBarBubbleArray[i].style.top);
          let scrollProgress =
            (parseFloat(progressBarBubbleArray[i].style.top) - 1.3) / 100;
          if (scrollProgress < 0) {
            scrollProgress = 0.25687 / 100;
          }
          console.log(scrollProgress);
          gsap.to(window, {
            scrollTo: getScrollPos(scrollProgress),
            duration: 0,
          });
        });
      }
    }

    //scroll to top of the page
    //autoKill to allow mouse scroll kill the scroll
    if (scrollToTopBtn) {
      scrollToTopBtn.addEventListener("click", () => {
        let duration = 2 * triggerProgress;
        console.log(duration);
        if (isPaused) {
          gsap.to(window, {
            scrollTo: { y: getScrollPos(0), autoKill: true },
            duration: duration,
            ease: "none",
          });
        }
      });
    }
    //functions to chnage the apperance of the auto play button when clicked
    function setToPlayDisplay() {
      document.body.style.overflowY = "auto";
      autoPlayBtnLabel.textContent = "Automatic Play";
      autoPlayBtnIcon.classList.remove("fa-circle-stop");
      autoPlayBtnIcon.classList.add("fa-circle-play");
    }
    function setToStopDisplay() {
      document.body.style.overflowY = "hidden";
      autoPlayBtnLabel.textContent = "Stop Play";
      autoPlayBtnIcon.classList.remove("fa-circle-play");
      autoPlayBtnIcon.classList.add("fa-circle-stop");
    }
    //the auto play button functionality
    if (autoPlayBtn && autoPlayBtnLabel) {
      autoPlayBtn.addEventListener("click", () => {
        let unit = document.documentElement.scrollHeight / 100;
        let duration = DURATION - DURATION * triggerProgress;
        console.log(unit, autoPlayBtnLabel.textContent);
        if (autoPlayBtnLabel.textContent === "Automatic Play") {
          setToStopDisplay();
          if (triggerProgress === 0) {
            window.scrollTo({ top: 2 * unit, behavior: "smooth" });
          }
          scrollingAnimation = gsap.to(window, {
            scrollTo: { y: getScrollPos(1), autoKill: false },
            duration: duration,
            ease: "none",
          });
          isPaused = scrollingAnimation.paused();
          console.log(isPaused, scrollingAnimation.paused());
        } else if (autoPlayBtnLabel.textContent === "Stop Play") {
          setToPlayDisplay();
          scrollingAnimation.pause();
          isPaused = scrollingAnimation.paused();
          console.log(scrollingAnimation.paused());
        }
      });
    }
    //handle keeping current image frame and text from changing on screen resize
    let resizeTimer;
    let progress = 0;
    //resize listener to get the last scrolltrigger progress value before resize
    window.addEventListener("resize", function () {
      console.log("progress non-debounce", triggerProgress);
      if (notResizing) {
        progress = triggerProgress;
        console.log("progress ", progress);
      }

      notResizing = false;

      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        notResizing = true;
      }, 200);
    });
    //scrolltrigger scrolls to the last progress value recoreded by the resize listener to keep
    //the current frame and text
    ScrollTrigger.addEventListener("refresh", () => {
      if (progress > 0 && progress <= 1) {
        ST.scroll(ST.start + (ST.end - ST.start) * progress);
        getTextContent("RESIZE", progress);
      }
    });
  }
});
