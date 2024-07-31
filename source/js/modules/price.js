const priceInputs = document.querySelectorAll('.price__input');
const priceItems = document.querySelectorAll('.price__item-value');
const shadowItems = document.querySelectorAll('.price__item-shadow');

const priceValues = [
  { items: ['5000 ', '1700 ', '2700 '], shadows: ['5000', '1700', '2700'] },
  { items: ['30000 ', '10200 ', '16200 '], shadows: ['30000', '10200', '16200'] },
  { items: ['60000 ', '20400 ', '32400 '], shadows: ['60000', '20400', '32400'] }
];

function updateItem(elements, values) {
  elements.forEach((element, index) => {
    element.childNodes[0].textContent = values[index];
  });
}

function setPrices(index) {
  updateItem(priceItems, priceValues[index].items);
  updateItem(shadowItems, priceValues[index].shadows);
}

function updatePrices() {
  const selectedIndex = Array.from(priceInputs).findIndex((input) => input.checked);
  if (selectedIndex !== -1) {
    setPrices(selectedIndex);
  }
}

priceInputs.forEach((input) => {
  input.addEventListener('change', updatePrices);
});

updatePrices();
