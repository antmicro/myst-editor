import { useComputed, useSignal } from "@preact/signals";
import styled from "styled-components";

export const Popup = styled.div`
  background-color: white;
  position: absolute;
  z-index: 11;
  border-radius: var(--border-radius);
`;

const Modal = styled(Popup)`
  left: 50%;
  top: 80px;
  transform: translateX(-160px);
  box-shadow: 4px 4px 10px var(--gray-600);
  padding: 20px 15px;
  width: 600px;

  label,
  input,
  textarea {
    display: block;
  }

  label {
    margin-bottom: 10px;
  }

  textarea,
  input {
    padding: 5px 10px;
    font-family: inherit;
    width: 100%;
    box-sizing: border-box;
  }

  input {
    margin-bottom: 20px;
  }

  #buttons {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    button {
      cursor: pointer;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: bold;
      font-family: inherit;
      border: 1px solid var(--icon-border);
      background-color: var(--icon-bg);
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0px 15px;
      margin: 5px;
      transition: 0.4s ease;
      border-radius: var(--border-radius);

      &:hover {
        background-color: var(--icon-selected);
        border: 1px solid var(--icon-selected);
      }
    }
  }
`;

const CommitModal = ({ initialSummary = "", onSubmit, onClose }) => {
  const summary = useSignal(initialSummary);
  const description = useSignal("");
  const message = useComputed(() => `${summary.value}\n\n${description.value}`);

  return (
    <Modal>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          onSubmit({ summary: summary.value, message: message.value });
        }}
      >
        <label htmlFor="summary">Commit summary</label>
        <input id="summary" type="text" value={summary.value} onChange={(ev) => (summary.value = ev.target.value)} autoFocus />
        <label htmlFor="description">Commit description</label>
        <textarea
          name="description"
          id="description"
          value={description.value}
          onChange={(ev) => (description.value = ev.target.value)}
          cols={80}
          rows={5}
        />
        <div id="buttons">
          <button type="submit">Commit</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default CommitModal;
