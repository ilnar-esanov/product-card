export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.closeButton = this.modal.querySelector('#modal-close-button');
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;

    this.initOpen(buttonId);
    this.handleClose = () => this.close();
  }

  open() {
    if (this.isOpen()) return;

    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');

    this.closeButton.addEventListener('click', this.handleClose);

    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', this.handleClose);
    }
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');

    this.closeButton.removeEventListener('click', this.handleClose);
    this.overlay.removeEventListener('click', this.handleClose);
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', () => {
      this.open();
    });
  }
}
