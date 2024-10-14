import { styled } from "styled-components";
import DefaultButton from "./Buttons";

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
  background-color: var(--icon-bg);
  border: 1px solid var(--icon-border);
  border-radius: var(--border-radius);
`;

const Heading = styled.h3`
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
    background-color: ${(props) => (props.$negative ? "var(--red-500)" : "var(--icon-main-active)")} !important;
    border: 1px solid ${(props) => (props.$negative ? "var(--red-500)" : "var(--icon-main-active)")} !important;
  }
`;

const Modal = ({ changeDocumentTemplate, selectedTemplate, closeModal }) => {
  return (
    <Container>
      <Heading>Are you sure you want to change the current template?</Heading>
      <ButtonContainer>
        <ModalButton type="button" onClick={() => changeDocumentTemplate(selectedTemplate)}>
          ✓ Yes
        </ModalButton>
        <ModalButton $negative type="button" onClick={closeModal}>
          x Cancel
        </ModalButton>
      </ButtonContainer>
    </Container>
  );
};

export default Modal;
