// Задание №2
const orangeColor = '#b27526';
const firstCard = document.querySelector('#card');
const changeFirstCardColor = document.querySelector('.buttons__first');

changeFirstCardColor.addEventListener('click', () => {
  firstCard.style.backgroundColor = orangeColor;
});

// Задание №3
const productCards = document.querySelectorAll('.card');
const changeAllCardColor = document.querySelector('.buttons__all');
const greenColor = '#228c52';

changeAllCardColor.addEventListener('click', () => {
  productCards.forEach(function (card) {
    card.style.backgroundColor = greenColor;
  });
});

// Задание №4
const googleButton = document.querySelectorAll('.buttons__button-google');

googleButton.forEach(function (button) {
  button.addEventListener('click', () => {
    window.open('https://www.google.com/');

    // Задание №5
    console.log('You pressed google button');
    alert('You pressed google button');
  });
});

// Задание №6
const heading = document.querySelector('.heading');

heading.addEventListener('mouseover', () => {
  console.log(heading.textContent);
});

// Задание №7
const buyButton = document.querySelectorAll('.card__button');
buyButton.forEach(function (button) {
  button.addEventListener('click', () => {
    button.classList.toggle('card__button_state_added');

    if (button.classList.contains('card__button_state_added')) {
      button.textContent = 'Добавлено';
    } else {
      button.textContent = 'В корзину';
    }
  });
});

// reset button 
const resetButton = document.querySelector('.buttons__button-reset')
const baseColor = '#f7f7fa'

resetButton.addEventListener('click', () => {
  productCards.forEach(function (card) {
    card.style.backgroundColor = baseColor;
  });
})
