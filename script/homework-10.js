import { products } from './products.js';

// task #5
const cardTemplate = document.querySelector('.card__template');
const catalog = document.querySelector('.catalog__products');
const IMAGE_BASE_PATH = './img/';

// валидация
function validateInput(input) {
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
const defineCardsQuantity = () => {
  const input = prompt('Сколько карточек отобразить? От 1 до 5');
  const isValid = validateInput(input);

  if (!isValid) {
    return defineCardsQuantity();
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
    const listItemsElement = cloneCard.querySelector('.card__list-items');
    const priceElement = cloneCard.querySelector('.card__price span');

    imageElement.src = IMAGE_BASE_PATH + image;
    imageElement.alt = title;
    typeElement.textContent = type;
    titleElement.textContent = title;
    descriptionElement.textContent = description;
    components.forEach((component) => {
      const li = document.createElement('li');
      li.textContent = component;
      listItemsElement.appendChild(li);
    });
    priceElement.textContent = `${price} ₽`;

    catalog.appendChild(cloneCard);
  });
};

const quantity = defineCardsQuantity();
const productsToShow = products.slice(0, quantity);
renderCards(productsToShow);

// task #4 - reduce
const productDescriptions = products.reduce((accumulator, product) => {
  accumulator[product.title] = product.description;
  return accumulator;
}, {});
// console.log(productDescriptions);
