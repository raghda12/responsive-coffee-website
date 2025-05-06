const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-close-btn");
const menuCloseButton = document.querySelector("#menu-open-btn");
menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});
menuCloseButton.addEventListener("click", () => menuOpenButton.click());
navLinks.forEach((link) => {
  link.addEventListener("click", () => menuOpenButton.click());
});
const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPreView: 1,
    },
    768: {
      slidesPreView: 2,
    },
    1024: {
      slidesPreView: 3,
    },
  },
});
