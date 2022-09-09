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
const swiperGallery = new Swiper(".swiper-gallery", {
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
    body.style.overflow = "hidden";
});

closeModalBtn.addEventListener("click", () => {
    modalOverlay.classList.remove("active");
    body.style.overflow = "auto";
});

// JS for SwiperJS CDN for package card slider for both desktop and mobile
const swiper = new Swiper(".swiper-desktop", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const swiperMobile = new Swiper(".swiper-mobile", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Package Card modal form popups
const choosePlanBtns = document.querySelectorAll(".choosePlanBtn");
const pkgsOverlay = document.querySelector(".packages-overlay");
const pkgsOverlayClose = document.querySelector(".pkgs-modal-close");
const serviceInput = document.getElementById("service-request");

choosePlanBtns.forEach(choosePlanBtn => {
    choosePlanBtn.addEventListener("click", () => {
        pkgsOverlay.classList.toggle("active")
        serviceInput.setAttribute("value", choosePlanBtn.dataset.planName)
        body.style.overflow = "hidden";
    });
});

pkgsOverlayClose.addEventListener("click", () => {
    pkgsOverlay.classList.toggle("active")
    body.style.overflow = "auto";
});


// Footer Formspree JS to submit form to D.A.P. gmail
const form = document.getElementById("my-footer-form");

async function handleFooterFormSubmit(event) {
    event.preventDefault();
    const status = document.getElementById("my-footer-form-status");
    const data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Thanks! We will be in touch for scheduling.";
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    status.innerHTML = "Oops! There was a problem submitting your form"
                }
            })
        }
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
    });
}
form.addEventListener("submit", handleFooterFormSubmit)