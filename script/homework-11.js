const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const userEmail = formData.get('email');

  console.log({ email: userEmail });
});
