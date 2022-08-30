// When page is scrolled at all, change nav background color to gray, and links to black
const navbar = document.querySelector(".nav");
window.onscroll = () => {
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};

const navMobile = document.querySelector(".mobile-nav");
const openBtn = document.querySelector("#bars-icon");
const closeBtn = document.querySelector("#close-icon");
// When bars icon is clicked on mobile, nav drops down. When X icon is clicked, dropdown nav hides
openBtn.addEventListener("click", () => {
    navMobile.classList.add("active");
});
closeBtn.addEventListener("click", () => {
    navMobile.classList.remove("active");
});

// When individual link in dropdown nav is clicked, close dropdown nav
const navMobileLinks = document.querySelectorAll(".mobile-nav-link");
navMobileLinks.forEach(navMobileLink => {
    navMobileLink.addEventListener("click", () => {
        navMobile.classList.toggle("active");
    });
});


// When individual faq card is clicked, open/close dropdown answer as well as flip arrow icon
const faqListItems = document.querySelectorAll(".faq-list-item");
faqListItems.forEach(faqListItem => {
    faqListItem.addEventListener("click", () => {
        faqListItem.classList.toggle("active");
    });
});

// JS for SwiperJS CDN for gallery image slider and package card carousel
const swiper = new Swiper(".swiper", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

const viewBtns = document.querySelectorAll(".view-more-btn");
viewBtns.forEach(viewBtn => {
    viewBtn.addEventListener("click", () => {
        navMobile.classList.toggle("active");
    });
});

const closeModalBtn = document.querySelector(".overlay-close-icon");
const openModalBtn = document.querySelector(".overlay-open-icon");
const modalOverlay = document.querySelector(".modal-overlay");
const body = document.querySelector("body");

openModalBtn.addEventListener("click", () => {
    modalOverlay.classList.add("active");
    // body.css("overflow", "hidden");
    body.style.overflow = "hidden";
});

closeModalBtn.addEventListener("click", () => {
    modalOverlay.classList.remove("active");
    // body.css("overflow", "auto");
    body.style.overflow = "auto";
});