// задание №1 - Интерполяция
const tempFunc = (city, temp) => {
  console.log(
    `Сейчас в городе ${city} температура ${temp} градусов по Цельсию`
  );
};

tempFunc('Ташкент', 40);

// задание №2 - Скорость света (if - else)
const speedOfLight = 299792458;

const speedComparisonFunc = (speed) => {
  if (speed > speedOfLight) {
    console.log('Сверхсветовая скорость');
  } else if (speed < speedOfLight) {
    console.log('Субсветовая скорость');
  } else if (speed === speedOfLight) {
    console.log('Скорость света');
  } else {
    console.log('Что-то пошло не так');
  }
};

speedComparisonFunc(299792458);

// задание №3 - Бюджет (if - else + Интерполяция)
const product = 'Арбуз';
const price = 20;

const purchaseFunc = (budget) => {
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

purchaseFunc(60);
