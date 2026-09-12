import * as dom from './homework-11.js';  

class Modal {
  constructor(id) {
    this.id = id;
    this.closeWindowButton();
  }

  isModalOpen() {
    if (dom.formBlock.classList.contains('modal-showed')) {
      console.log('Modal window is open');
      return true
    } else {
      console.log('Modal window is closed');
      return false
    }
  }

  openModal() {
    dom.formBlock.classList.add('modal-showed');
    dom.overlay.classList.add('overlay_visible');
    this.isModalOpen();
  }

  closeModal() {
    dom.formBlock.classList.remove('modal-showed');
    dom.overlay.classList.remove('overlay_visible');
    this.isModalOpen();
  }

  closeWindowButton() {
    dom.closeButton.addEventListener('click', () => modalWindow.closeModal());
  }
}

export const modalWindow = new Modal(dom.modal);
dom.signUpButton.addEventListener('click', () => modalWindow.openModal());
