export class Modal {
  constructor(id) {
    this.modal = document.getElementById(id);
    this.closeButton = this.modal.querySelector('.modal__close');
    this.overlay = this.modal.closest('.overlay');

    this.closeWindowButton();
  }

  isModalOpen() {
    if (this.modal.classList.contains('modal-showed')) {
      console.log('Modal window is open');
      return true
    } else {
      console.log('Modal window is closed');
      return false
    }
  }

  openModal() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay_visible');
    this.isModalOpen();
  }

  closeModal() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay_visible');
    this.isModalOpen();
  }

  closeWindowButton() {
    this.closeButton.addEventListener('click', () => this.closeModal());
  }
}

