import { products } from './products.js';

// task #5
const cardTemplate = document.querySelector('.card__template');
const catalog = document.querySelector('.catalog__products');

// валидация
function numberValidator(input) {
  const number = Number(input);

  if (isNaN(number)) {
    alert('Ошибка: введено не число');
    return false;
  }

  if (number < 1 || number > 5) {
    alert('Ошибка: число должно быть от 1 до 5');
    return false;
  }
  return true;
}

// определяем кол-во карточек
const cardsQuantity = () => {
  const input = prompt('Сколько карточек отобразить? От 1 до 5');
  const isValid = numberValidator(input);

  if (!isValid) {
    return cardsQuantity();
  }

  return Number(input);
};

// рендерим
const renderCards = (array) => {
  array.forEach(({ image, type, title, description, components, price }) => {
    const cloneCard = cardTemplate.content.cloneNode(true);

    const imageElement = cloneCard.querySelector('.card__image');
    const typeElement = cloneCard.querySelector('.card__type');
    const titleElement = cloneCard.querySelector('.card__title');
    const descriptionElement = cloneCard.querySelector('.card__description');
    const listItemsElement = cloneCard.querySelectorAll('.card__list-items li');
    const priceElement = cloneCard.querySelector('.card__price span');

    imageElement.src = image;
    imageElement.alt = title;
    typeElement.textContent = type;
    titleElement.textContent = title;
    descriptionElement.textContent = description;
    listItemsElement.forEach((li, index) => {
      li.textContent = components[index];
    });
    priceElement.textContent = `${price} ₽`;

    catalog.appendChild(cloneCard);
  });
};

const quantity = cardsQuantity();
const productsToShow = products.slice(0, quantity);
renderCards(productsToShow);

// task #4 - reduce
const productDescriptions = products.reduce((accumulator, product) => {
  accumulator[product.title] = product.description;
  return accumulator;
}, {});
console.log(productDescriptions);
