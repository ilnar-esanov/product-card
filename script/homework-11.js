const form = document.querySelector('.form');
const input = document.querySelector('.form__input');

const signUpButton = document.querySelector('.form__sign-up');
const formBlock = document.querySelector('.modal');
const signUpForm = document.querySelector('.modal__form');
const closeButton = document.querySelector('.modal__close');


// способ №1
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const Inputemail = input.value;
  console.log({ email: Inputemail });
});

// способ №2
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const userEmail = formData.get('email');

  console.log({ email: userEmail });
});

signUpButton.addEventListener('click', () => {
  formBlock.classList.add('modal-showed');
});

closeButton.addEventListener('click', () => {
  formBlock.classList.remove('modal-showed');
});
