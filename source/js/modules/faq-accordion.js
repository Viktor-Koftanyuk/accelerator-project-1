const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach((faqItem) => {
  const question = faqItem.querySelector('.faq__question');
  const answer = faqItem.querySelector('.faq__answer');

  question.addEventListener('click', () => {
    faqItem.classList.toggle('faq__item--active');

    if (faqItem.classList.contains('faq__item--active')) {
      answer.style.maxHeight = `${answer.scrollHeight}px`;
    } else {
      answer.style.maxHeight = null;
    }
  });
});
