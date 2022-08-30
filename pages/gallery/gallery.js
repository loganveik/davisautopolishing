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
const modalOverlay = document.querySelector(".modal-overlay");
closeModalBtn.addEventListener("click", () => {
    modalOverlay.classList.toggle("active");
})