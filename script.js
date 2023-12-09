const body = document.querySelector("body");
const header = document.querySelector(".portfolio-header");
const logoText = document.querySelector(".logo-text");
const navWrapper = document.querySelector(".nav-wrapper");
const navItems = document.querySelectorAll(".nav-item");
const menuLines = document.querySelectorAll(".line");
const menuIcon = document.querySelector(".menu-icon");
const navBarBg = document.querySelector(".nav-bar-bg");
const navBar = document.querySelector(".nav-bar");
const navLinks = document.querySelectorAll(".nav-links");
const hireBtn = document.querySelector(".hire-me-btn");
const imageWrapper = document.querySelector(".image-wrapper");
const resumeBtns = document.querySelectorAll(".resume-btn");
const textHeaders = document.querySelectorAll(".text-header");
const textContents = document.querySelectorAll(".text-content");
const slideShowWrapper = document.querySelector(".slide-show-wrapper");
const slideShows = document.querySelectorAll(".slide-show");
const portfolioSkillsMain = document.querySelector(".portfolio-skills-main");
const slideWrappers = document.querySelectorAll(".slide-wrapper");
const projectTabContainer = document.querySelector(".projects-tab-container");
const projectsTabContainerBtns = document.querySelectorAll(
  ".projects-tab-container-btn"
);
const projectsTabContents = document.querySelectorAll(".projects-tab-content");
const contactCard = document.querySelector(".contact-card");
const contactBtn = document.querySelector(".contact-btn");
const scrollTopBtnsWrapper = document.querySelector(".scroll-top-btns-wrapper");
const scrollTopBtn = document.querySelector(
  ".scroll-top-btns-wrapper a:nth-child(6)"
);
const scrollTopBtnsClose = document.querySelector(
  ".scroll-top-btns-wrapper a:nth-child(7)"
);
const viewMoreBtn = document.querySelector(".view-more-btn");
const introModelBox = document.querySelector(".intro-model-box");
const introModelBoxBg = document.querySelector(".intro-model-box-bg");
const introCloseBtn = document.querySelector(".intro-close");
const partContents = document.querySelectorAll(".part-content");
const iconWrapper = document.querySelector(".icon-wrapper");
const sectionWrapper = document.querySelector(".section-wrapper");
const sections = document.querySelectorAll(".section");
const progressBarWrappers = document.querySelectorAll(".progress-bar-wrapper");
const submitBtn = document.querySelector(".submit-btn");

// nav-item click
navWrapper.addEventListener(`click`, (e) => {
  const currNavItem = e.target.closest(".nav-item");

  navItems.forEach((navItem) => {
    navItem.style.animation = "";
  });

  if (currNavItem) {
    currNavItem.style.animation = "navItemAnim 1s forwards";
    navWrapper.classList.toggle("change");
    menuIcon.classList.toggle("change");
    header.classList.toggle("change");
  }
});

// MENU-ICON

menuIcon.addEventListener("click", function () {
  menuIcon.classList.toggle("change");
  navWrapper.classList.toggle("change");
  header.classList.toggle("change");
  navBarBg.classList.toggle("change");
});

navBarBg.addEventListener("click", function () {
  menuIcon.classList.remove("change");
  navWrapper.classList.remove("change");
  header.classList.remove("change");
  navBarBg.classList.remove("change");
});

//hire-btn
hireBtn.addEventListener("click", function () {
  hireBtn.style.cssText =
    "box-shadow:0 0 0 transparent; transform: translateX(0)";
});

//image-wrapper
imageWrapper.addEventListener("click", function () {
  imageWrapper.style.cssText = "box-shadow:0 0 0 transparent";
});

//resume-btns
resumeBtns.forEach((resumeBtn) => {
  resumeBtn.addEventListener("mouseover", function () {
    resumeBtn.classList.add("change");
  });
  resumeBtn.addEventListener("mouseout", function () {
    resumeBtn.classList.remove("change");
  });
  resumeBtn.addEventListener("click", function () {
    resumeBtn.classList.remove("change");
  });
});

// typing-home
const sentences = [
  "User-centric, pixel-perfect frontend solutions.",
  "Crafting visually stunning, intuitive designs.",
  "Transforming ideas into dynamic websites.",
];

function typing(textHeaders, textContents, elementIndex) {
  textHeaders[elementIndex].classList.add("change");
  setTimeout(() => {
    textContents[elementIndex].style.cssText = "opacity: 1;visibility: visible";
    let sentence = sentences[elementIndex];
    let index = 0;
    textContents[elementIndex].textContent = "";
    const forwardTypingInterval = setInterval(() => {
      textContents[elementIndex].textContent += sentence[index];
      index++;
      if (index == sentence.length) {
        clearInterval(forwardTypingInterval);
        setTimeout(() => {
          const backwardTypingInterval = setInterval(() => {
            textContents[elementIndex].textContent = sentence.slice(0, index--);
            if (index == 0) {
              textHeaders[elementIndex].classList.remove("change");
              textContents[elementIndex].style.cssText =
                "opacity: 0;visibility: hidden";
              clearInterval(backwardTypingInterval);
              elementIndex++;
              if (elementIndex == 3) {
                elementIndex = 0;
              }
              setTimeout(() => {
                typing(textHeaders, textContents, elementIndex);
              }, 2000);
            }
          }, 50);
        }, 1000);
      }
    }, 150);
  }, 1000);
}

setTimeout(() => {
  typing(textHeaders, textContents, 0);
}, 3000);

// about
// view-more
viewMoreBtn.addEventListener("click", function () {
  introModelBox.classList.add("change");
  introModelBoxBg.classList.add("change");
  typingEffect();
});

console.log(viewMoreBtn);

introCloseBtn.addEventListener("click", function () {
  introModelBox.classList.remove("change");
  introModelBoxBg.classList.remove("change");
});

introModelBox.addEventListener("mouseleave", function () {
  introModelBox.classList.remove("change");
  introModelBoxBg.classList.remove("change");
});

// typing effect

function typingEffect() {
  partContents.forEach(function (partContent) {
    const text = partContent.textContent;
    let index = 0;
    partContent.textContent = "";
    const typingInterval = setInterval(() => {
      partContent.textContent += text[index];
      index++;
      if (index == text.length) {
        clearInterval(typingInterval);
      }
    }, 20);
  });
}

// section view-more button

sectionWrapper.addEventListener("click", (e) => {
  if (e.target.closest(".view-more-btn")) {
    const section = e.target.closest(".view-more-btn").closest(".section");
    section.classList.toggle("change");
  }
});

sections.forEach((section) => {
  section.addEventListener("mouseleave", () => {
    section.classList.remove("change");
  });
});

// progress-bar animation
setTimeout(() => {
  progressBarWrappers.forEach((progressBarWrapper) => {
    const progressBarContent = progressBarWrapper.querySelector(
      ".progress-bar-content"
    );
    const skillTitle = progressBarWrapper.querySelector(".skill-title");
    const progressBarContentValue = progressBarContent.textContent;
    const skills = progressBarWrapper.closest(".skills");
    let num = 0;
    const count = setInterval(() => {
      progressBarContent.textContent = num;
      progressBarContent.style.left = `${-6 + num}%`;
      num++;
      if (num == progressBarContentValue) {
        clearInterval(count);
        skillTitle.style.cssText = "opacity:1;visibility:visible";
      }
    }, 15);
    skills.classList.add("change");
  });
}, 5000);

// projects-slideshow

function slideShow(currentSlide, slides) {
  slides.forEach(function (slide) {
    slide.style.left = `${currentSlide * 100}%`;
    currentSlide++;
  });
}

projectsTabContents.forEach((projectsTabContent) => {
  const slides = projectsTabContent.querySelectorAll(".slide");
  const slideCount = slides.length;
  const slideRightBtn = projectsTabContent.querySelector(".slide-right-btn");
  const slideLeftBtn = projectsTabContent.querySelector(".slide-left-btn");
  let currentSlide = 0;

  slideRightBtn.addEventListener("click", () => {
    slideRightBtn.style.animation = "slideRightBtnAnimate .2s";
    currentSlide--;
    if (currentSlide == -`${slideCount}`) currentSlide = 0;

    slideShow(currentSlide, slides);
    setTimeout(() => {
      slideRightBtn.style.animation = "";
    }, 200);
  });

  slideLeftBtn.addEventListener("click", () => {
    slideLeftBtn.style.animation = "slideLeftBtnAnimate .2s";
    currentSlide++;

    if (currentSlide == 1) currentSlide = -`${slideCount - 1}`;
    slideShow(currentSlide, slides);
    setTimeout(() => {
      slideLeftBtn.style.animation = "";
    }, 200);
  });
});

// refresh tab-content-height
function refreshHeight() {
  const tabContents = document.querySelectorAll(`.projects-tab-content`);
  tabContents.forEach((tabContent) => {
    const slide = tabContent.querySelector(".slide-1");
    setInterval(() => {
      const slideHeight = window
        .getComputedStyle(slide)
        .getPropertyValue("height");
      const slideWrapper = tabContent.querySelector(".slide-wrapper");
      slideWrapper.style.height = slideHeight;
    }, 100);
  });
}

refreshHeight();

// projects-tabs

projectTabContainer.addEventListener("click", (e) => {
  projectsTabContainerBtns.forEach((projectsTabContainerBtn) => {
    projectsTabContainerBtn.classList.remove(
      "projects-tab-container-btn-active"
    );

    projectsTabContainerBtn.style.boxShadow = "";
  });
  const activeButton = e.target.closest("button");
  activeButton.classList.add("projects-tab-container-btn-active");
  activeButton.style.boxShadow = `0 0 3rem ${getComputedStyle(activeButton)
    .getPropertyValue("border")
    .substring(10)}`;
  projectsTabContents.forEach((projectsTabContent) => {
    if (
      projectsTabContent.getAttribute("data-content") ===
      e.target.closest("button").getAttribute("data-btn")
    ) {
      projectsTabContent.style.cssText = "display:flex";
    } else {
      projectsTabContent.style.cssText = "display:none";
    }
  });
});

// view project button
projectsTabContents.forEach((projectsTabContent) => {
  projectsTabContent.addEventListener("click", (e) => {
    if (e.target.closest(".view-btn")) {
      const slideContents = e.currentTarget.querySelectorAll(".slide-content");
      slideContents.forEach((slideContent) => {
        slideContent.style.transform = "rotateY(0deg)";
      });
      const slideContent = e.target.closest(".slide-content");
      const slideContentBack = slideContent.querySelector(
        ".slide-content-back"
      );

      slideContent.style.transform = "rotateY(180deg)";

      if (slideContentBack.querySelector(".close-btn")) {
        return;
      } else {
        const html = `<div class="close-btn"><i class="fa-solid fa-xmark"></i></div>`;
        slideContentBack.insertAdjacentHTML("beforeend", html);

        const closeBtn = slideContentBack.querySelector(".close-btn");
        closeBtn.style.backgroundColor = `${window
          .getComputedStyle(e.target.closest(".view-btn"))
          .getPropertyValue("background-color")}`;

        closeBtn.addEventListener("click", () => {
          e.target.closest(".slide-content").style.transform = "rotateY(0deg)";
        });
      }
    }
  });
});

// contact-card
contactBtn.addEventListener("click", () => {
  contactCard.classList.toggle("change");
});

// scroll top Btn

scrollTopBtn.addEventListener("click", function (e) {
  e.preventDefault();
  scrollTopBtnsWrapper.classList.add("change");
  setTimeout(function () {
    scrollTopBtnsWrapper.classList.remove("change");
  }, 3000);
});

scrollTopBtnsClose.addEventListener("click", function (e) {
  e.preventDefault();
  scrollTopBtnsWrapper.classList.remove("change");
});

//submit btn click
submitBtn.addEventListener("mouseover", function (e) {
  submitBtn.classList.add("change");
});

submitBtn.addEventListener("mouseleave", function (e) {
  submitBtn.classList.remove("change");
});

submitBtn.addEventListener("click", function (e) {
  submitBtn.classList.remove("change");
  submitBtn.style.border = ".1rem solid #4bbb7d";
});
