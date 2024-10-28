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
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));
