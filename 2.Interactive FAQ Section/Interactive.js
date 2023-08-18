const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  question.addEventListener("click", () => {
    item.classList.toggle("active");
    answer.style.display = item.classList.contains("active") ? "block" : "none";
  });
});
