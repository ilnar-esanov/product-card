// задание №1 - Интерполяция
const tempFunc = (city, temp) => {
  console.log(
    `Сейчас в городе ${city} температура ${temp} градусов по Цельсию`
  );
};

// tempFunc('Ташкент', 40);

// задание №2 - Скорость света (if - else)
function inputValidator(input) {
  const inputToNumber = Number(input);

  if (inputToNumber === false || input === true) {
    console.log('ошибка ввода', input);
    return false
  }
  return true
}
const speedOfLight = 299792458;

const speedComparisonFunc = (speed) => {
  const validationResult = inputValidator(speed);
  if (!validationResult) {
    return
  }
  else if (speed > speedOfLight) {
    console.log('Сверхсветовая скорость');
    return;
  } else if (speed < speedOfLight) {
    console.log('Субсветовая скорость');
    return;
  } else if (speed === speedOfLight) {
    console.log('Скорость света');
    return;
  }
};

// speedComparisonFunc(299792458);

// задание №3 - Бюджет (if - else + Интерполяция)
const product = 'Арбуз';
const price = 20;

const purchaseFunc = (budget) => {
  inputValidator(budget);
  if (budget > price) {
    const change = budget - price;
    console.log(
      `${product} приобретен. Спасибо за покупку! Ваша сдача ${change}$`
    );
  } else if (budget === price) {
    console.log(`${product} приобретен. Спасибо за покупку!`);
  } else if (budget < price) {
    const diff = price - budget;
    console.log(
      `Вам не хватает ${diff}$, пополните баланс. Стоимость продукта составляет ${price}$!`
    );
  }
};

// purchaseFunc(20);

// задание №4 - функция
const greeting = () => {
  console.log('Hello');
};
// greeting();

// задание №5 - 3 переменные
let age = 24;
const country = 'Uzbekistan';
const myName = 'Ilnar';
