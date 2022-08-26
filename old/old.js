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