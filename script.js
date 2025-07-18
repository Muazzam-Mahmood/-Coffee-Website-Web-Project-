const navLinks = document.querySelectorAll(".nav-menu .navbar-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
menuOpenButton.addEventListener("click", () => {
  // toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});
// close menu button when clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());
// close menu  when the nav link is clicked
navLinks.forEach(link=>{
link.addEventListener("click",() => menuOpenButton.click());
});


//initialize swiper

const swiper = new Swiper(".slider-wrapper", {
  // Optional parameters
  loop: true,
  grabCursor:true,
  spaceBetween:25,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
    dynamicBullets:true
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
