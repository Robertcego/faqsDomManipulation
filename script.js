const faqQuestion = document.getElementsByClassName('faq-question');
const faqAnswer = document.getElementsByClassName('faq-answer');

(function toggleAnswer() {
  for (let i = 0; i < faqQuestion.length; i++) {
    faqQuestion[i].addEventListener('click', function () {
      faqAnswer[i].classList.toggle('active');
    });
  }
})();
