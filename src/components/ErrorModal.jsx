import { useContext, useRef } from "preact/hooks";
import { DefaultButton, Modal } from "./CommonUI";
import { MystState } from "../mystState";
import { useSignal, useSignalEffect } from "@preact/signals";
import styled from "styled-components";

const formatError = (/** @type {Error} */ error, src, mode) =>
  `\`\`\`\nError detected from: ${src}, while in mode: ${mode}\n${error.name}: ${error.message} ${error.cause ?? ""}\n${error.stack ?? ""}\`\`\``;

const ErrorContainer = styled(Modal)`
  box-shadow: inset 0 8px var(--red-500);

  button:hover {
    background-color: var(--icon-selected);
    border: 1px solid var(--icon-selected);
  }
`;

const defaultBtnText = "Copy error to clipboard";

const ErrorModal = () => {
  const { error, options } = useContext(MystState);
  const modalRef = useRef();
  const btnText = useSignal(defaultBtnText);

  useSignalEffect(() => {
    if (error.value) modalRef.current?.showModal?.();
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(formatError(error.value.error, error.value.src, options.mode.value));
    btnText.value = "Copied!";
    setTimeout(() => (btnText.value = defaultBtnText), 2000);
  };

  return (
    <ErrorContainer ref={modalRef} onCancel={(ev) => ev.preventDefault()}>
      <h3>The editor ran into an error</h3>
      <p>Please try reloading the page and clearing your browser cache</p>
      <DefaultButton onClick={handleCopy}>{btnText}</DefaultButton>
    </ErrorContainer>
  );
};

export default ErrorModal;
