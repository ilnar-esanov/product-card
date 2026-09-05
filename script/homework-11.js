const form = document.querySelector('.form');
const input = document.querySelector('.form__input');


// способ №1
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const Inputemail = input.value
  console.log({email: Inputemail});
})


// способ №2
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const userEmail = formData.get('email');

  console.log({ email: userEmail });
});
