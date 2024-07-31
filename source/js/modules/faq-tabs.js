const tabsButton = document.querySelectorAll('.faq__button');
const tabsItems = document.querySelectorAll('.faq__list');

function activateItem(tab) {
  const firstFaqItem = tab.querySelector('.faq__item');
  if (firstFaqItem) {
    firstFaqItem.classList.add('faq__item--active');
    const answer = firstFaqItem.querySelector('.faq__answer');
    answer.style.maxHeight = `${answer.scrollHeight}px`;
  }
}

tabsButton.forEach((item) => {
  item.addEventListener('click', () => {
    const currentBtn = item;
    const tabId = currentBtn.getAttribute('data-tab');
    const currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains('faq__button--active')) {
      tabsButton.forEach((i) => {
        i.classList.remove('faq__button--active');
      });

      tabsItems.forEach((j) => {
        j.classList.remove('faq__list--active');
      });

      currentBtn.classList.add('faq__button--active');
      currentTab.classList.add('faq__list--active');

      activateItem(currentTab);
    }
  });
});

tabsItems.forEach((tabItem) => {
  activateItem(tabItem);
});
