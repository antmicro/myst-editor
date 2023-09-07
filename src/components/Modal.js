import { html } from 'htm/preact';
import { styled } from 'styled-components/macro';
import DefaultButton from './Buttons';

const Container = styled.section`
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 450px;
  padding: 20px;
  right: 50%;
  transform: translate(50%, 0);
  top: 100%;
  position: absolute;
  background-color: var(--white);
  border: 1px solid var(--gray-600);
  border-radius: var(--border-radius);
`;

const Heading = styled.h3`
  font-family: 'Lato', sans-serif;
  color: var(--gray-900);
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ModalButton = styled(DefaultButton)`
  padding: 0 10px;
  margin-top: 0px;

  &:hover {
    background-color: ${props => props.$negative ? 'var(--red-500)' : 'var(--green-400)'} !important;
    border: 1px solid ${props => props.$negative ? 'var(--red-500)' : 'var(--green-400)'} !important;
  }
`;

const Modal = ({changeDocumentTemplate, selectedTemplate, closeModal}) => {

  return html`
    <${Container}>
        <${Heading}>Are you sure you want to change the current template?<//>
        <${ButtonContainer}>
            <${ModalButton} type="button" onClick=${ () => changeDocumentTemplate(selectedTemplate)}>✓ Yes<//>
            <${ModalButton} $negative type="button" onClick=${closeModal}>x Cancel<//>
        <//>
    <//>
  `
}

console.log("Modal functional component loaded")

export default Modal;
