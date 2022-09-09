const prevBtn = document.querySelector(".fa-caret-left");
const nextBtn = document.querySelector(".fa-caret-right");
const wrap = document.querySelector(".box-wrap");
const boxes = document.querySelectorAll(".box");

nextBtn.addEventListener("click", () => {
    boxes.forEach(box => {
        wrap.scrollLeft += box.getBoundingClientRect().width;
    });
});
prevBtn.addEventListener("click", () => {
    boxes.forEach(box => {
        wrap.scrollLeft -= box.getBoundingClientRect().width;
    });
});

const modalBtns = document.querySelectorAll(".modalBtn");
const pkgOverlay = document.querySelector(".packages-overlay");
const closeBtn = document.querySelector(".fa-xmark");
const serviceInput = document.getElementById("service-request");

modalBtns.forEach(modalBtn => {
    modalBtn.addEventListener("click", () => {
        console.log(modalBtn.dataset.planName);
        pkgOverlay.classList.toggle("active")
        serviceInput.setAttribute("value", modalBtn.dataset.planName)
    });
});

closeBtn.addEventListener("click", () => {
    pkgOverlay.classList.toggle("active")
});