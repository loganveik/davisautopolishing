const navbar = document.querySelector(".nav");
window.onscroll = () => {
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};


const faqListItem1 = document.querySelector(".faq-list-item1");
const faqListItem2 = document.querySelector(".faq-list-item2");
const faqListItem3 = document.querySelector(".faq-list-item3");
const faqListItem4 = document.querySelector(".faq-list-item4");
const faqListItem5 = document.querySelector(".faq-list-item5");
const faqIcon1 = document.getElementById("faq-icon1");
const faqIcon2 = document.getElementById("faq-icon2");
const faqIcon3 = document.getElementById("faq-icon3");
const faqIcon4 = document.getElementById("faq-icon4");
const faqIcon5 = document.getElementById("faq-icon5");
const faqAns1 = document.getElementById("faq-answer1");
const faqAns2 = document.getElementById("faq-answer2");
const faqAns3 = document.getElementById("faq-answer3");
const faqAns4 = document.getElementById("faq-answer4");
const faqAns5 = document.getElementById("faq-answer5");

faqListItem1.addEventListener("click", () => {
    faqAns1.classList.toggle("active");
    faqIcon1.classList.toggle("active");
})
faqListItem2.addEventListener("click", () => {
    faqAns2.classList.toggle("active");
    faqIcon2.classList.toggle("active");
})
faqListItem3.addEventListener("click", () => {
    faqAns3.classList.toggle("active");
    faqIcon3.classList.toggle("active");
})
faqListItem4.addEventListener("click", () => {
    faqAns4.classList.toggle("active");
    faqIcon4.classList.toggle("active");
})
faqListItem5.addEventListener("click", () => {
    faqAns5.classList.toggle("active");
    faqIcon5.classList.toggle("active");
})