import * as dom from './homework-11.js';
import { modalWindow } from './Modal.js';

let user;
class Form {
  constructor(id) {
    this.id = id;
  }

  getFormData() {
    const formData = new FormData(this.id);

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

    return user;
  }

  isFormValid() {
    return this.id.checkValidity();
  }

  resetForm() {
    this.id.reset();
  }
}

const modalForm = new Form(dom.form);

dom.form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!modalForm.isFormValid()) {
    alert('Форма заполнена некорректно!');
    return;
  }
  const userInfo = modalForm.getFormData();

  if (userInfo.password !== userInfo.passwordAgain) {
    alert('Пароли не совпадают!');
    return;
  }

  user = userInfo;
  console.log(userInfo);
  modalWindow.closeModal();
  modalForm.resetForm();
});
