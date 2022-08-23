const faqListItem = document.getElementsByClassName("faq-list-item")[0];
// const faqListItemAnswer = document.getElementsByClassName("faq-list-item-answer")[0];
const faqIcon = document.getElementById("faq-icon");
const faqAns = document.getElementById("faq-answer");

faqListItem.addEventListener("click", () => {
    faqListItem.classList.toggle("active");
    faqAns.classList.toggle("active");
    faqIcon.classList.toggle("active");
})