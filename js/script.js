let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () => {
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        }
    },
});


// CART BTN
let cartItemContainer = document.querySelector(".cart-items-container");
let cartBtn = document.querySelector("#cart-btn");

// SEARCH
let searchForm = document.querySelector(".search-form");
let searchBtn = document.querySelector("#search-btn");

menu.onclick = () => {
  showComponent(menu, navbar);
};

cartBtn.onclick = () => {
  showComponent(cartBtn, cartItemContainer);
};

searchBtn.onclick = () => {
  showComponent(searchBtn, searchForm);
};

function showComponent(btn, component) {
  // Deactivate all other components and buttons
  let activeElements = [navbar, cartItemContainer, searchForm];
  let buttons = [menu, cartBtn, searchBtn];
  activeElements.forEach((element, index) => {
    if (element !== component && element.classList.contains("active")) {
      element.classList.remove("active");
      buttons[index].classList.remove("fa-times");
    }
  });

  // Toggle the clicked button and its component
  btn.classList.toggle("fa-times");
  component.classList.toggle("active");
}
