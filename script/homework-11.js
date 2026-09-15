import { Modal } from './Modal.js';
import { Form } from './Form.js';

const signUpButton = document.querySelector('.form__sign-up');

const modalWindow = new Modal('modal');
const formBlock = new Form('form');

signUpButton.addEventListener('click', () => modalWindow.openModal());

formBlock.form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!formBlock.isFormValid()) {
    alert('Форма заполнена некорректно!');
    
    return;
  }
  const userInfo = formBlock.getFormData();
  console.log(userInfo);

  modalWindow.closeModal();
  formBlock.resetForm();
});
