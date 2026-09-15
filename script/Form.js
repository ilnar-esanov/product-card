export class Form {
  constructor(id) {
    this.form = document.getElementById(id);
  }

  getFormData() {
    const formData = new FormData(this.form);

    const userName = formData.get('name');
    const useSurname = formData.get('surname');
    const userBirthday = formData.get('birthday');
    const userLogin = formData.get('login');
    const userPassword = formData.get('password');
    const userPasswordAgain = formData.get('password-confirm');

    const user = {
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
    const user = this.getFormData();
    const passwordsMatch = user.password === user.passwordAgain;

    return this.form.checkValidity() && passwordsMatch;
  }

  resetForm() {
    this.form.reset();
  }
}
