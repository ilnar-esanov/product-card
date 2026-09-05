const form = document.querySelector('.form');
const input = document.querySelector('.form__input');
const signUpButton = document.querySelector('.form__sign-up');
const formBlock = document.querySelector('.modal');
const signUpForm = document.querySelector('.modal__form');
const closeButton = document.querySelector('.modal__close');
const overlay = document.querySelector('.overlay');

// задание 4 - способ №1
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const Inputemail = input.value;
  console.log({ email: Inputemail });
});

// задание 4 - способ №2
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const userEmail = formData.get('email');

  console.log({ email: userEmail });
});

// модалка

// open modal button
signUpButton.addEventListener('click', () => {
  formBlock.classList.add('modal-showed');
  overlay.classList.add('overlay_visible');
});

// close modal button
closeButton.addEventListener('click', () => {});

const closeModel = () => {
  formBlock.classList.remove('modal-showed');
  overlay.classList.remove('overlay_visible');
};

closeButton.addEventListener('click', closeModel);

// modal window logic
let user;
signUpForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!signUpForm.checkValidity()) {
    alert('Форма заполнена некорректно!');
    return;
  }

  const formData = new FormData(signUpForm);

  const userName = formData.get('name');
  const useSurname = formData.get('surname');
  const userBirthday = formData.get('birthday');
  const userLogin = formData.get('login');
  const userPassword = formData.get('password');
  const userPasswordAgain = formData.get('password-confirm');

  user = {
    name: userName,
    surname: useSurname,
    birthday: userBirthday,
    login: userLogin,
    password: userPassword,
    passwordAgain: userPasswordAgain,
    createdOn: new Date(),
  };

  console.log(user);
  closeModel();
});
