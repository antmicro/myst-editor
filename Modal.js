import { html } from 'htm/preact';

const Modal = (props) => {
  const { showModal, changeDocumentTemplate, selectedTemplate, closeModal } = props;

  return html`
    <section class="modal ${showModal? "" : "hidden"}">
        <h3 class="modal-text">Are you sure you want to change the current template?</h3>
        <div class="flex-container">
            <button type="button" class="modal-button" onClick=${ () => changeDocumentTemplate(selectedTemplate)}>✓ Yes</button>
            <button type="button" class="modal-close-button" onClick=${closeModal}>x Cancel</button>
        </div>
    </section>
  `
}

console.log("Modal functional component loaded")

export default Modal;
