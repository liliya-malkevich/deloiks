const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    720: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1110: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1430: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

const burgerMenu = document.getElementById("burger-menu");
const menu = document.getElementById("menu");
burgerMenu.addEventListener("click", () => {
  menu.classList.toggle("open");
});

// if(menu.classList.contains("open")) {

// }
