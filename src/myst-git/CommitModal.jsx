import { useComputed, useSignal, useSignalEffect } from "@preact/signals";
import { EditorView } from "codemirror";
import { useEffect, useRef } from "preact/hooks";
import styled from "styled-components";
import { ExtensionBuilder } from "../extensions";
import { unifiedMergeView } from "@codemirror/merge";
import { CodeEditor } from "../components/CodeMirror";

const Modal = styled.dialog`
  background-color: white;
  border-radius: var(--border-radius);
  top: 80px;
  border: none;
  margin: 0;
  left: 50%;
  transform: translateX(-50%);
  max-height: calc(100vh - 160px);
  overflow-y: auto;
  scrollbar-width: thin;
  overscroll-behavior: contain;
  box-shadow: 4px 4px 10px var(--gray-600);
  padding: 20px 15px;
  width: 800px;
  max-width: 100vw;

  form {
    margin-top: 20px;
  }

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
      transition: 0.4s ease;
      border-radius: var(--border-radius);

      &:hover {
        background-color: var(--icon-selected);
        border: 1px solid var(--icon-selected);
      }
    }
  }

  #diffs {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .diff-parent {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .file-name {
    display: flex;
    align-items: center;
    gap: 8px;

    input,
    label {
      display: inline;
      width: fit-content;
      margin: 0;
    }

    label.unstaged {
      text-decoration: line-through;
      color: var(--gray-700);
    }
  }
`;

const CommitModal = ({ initialSummary = "", onSubmit, onClose, documents = [], parent }) => {
  const summary = useSignal(initialSummary);
  const description = useSignal("");
  const message = useComputed(() => `${summary.value}\n\n${description.value}`);
  const stagedDocs = useSignal(documents.map((d) => d.file));
  const modalRef = useRef();

  useEffect(() => {
    if (initialSummary) {
      summary.value = initialSummary;
      modalRef.current?.showModal?.();
      modalRef.current.onclose = onClose;
    }
  }, [initialSummary]);

  function handleStage(staged, file) {
    if (staged) {
      stagedDocs.value = [...stagedDocs.peek(), file];
    } else {
      stagedDocs.value = stagedDocs.peek().filter((f) => f !== file);
    }
  }

  return (
    <Modal ref={modalRef}>
      <div id="diffs">
        {documents.map((d) => (
          <Diff key={d.file} parent={parent} document={d} onStage={(staged) => handleStage(staged, d.file)} />
        ))}
      </div>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          if (stagedDocs.value.length === 0) return;
          modalRef.current.onclose = () => {};
          modalRef.current.close();
          onSubmit({ summary: summary.value, message: message.value, stagedDocs: stagedDocs.value });
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
          <button type="submit" disabled={stagedDocs.value.length === 0}>
            Commit
          </button>
          <button type="button" onClick={() => modalRef.current.close()}>
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

const MergeViewCodeEditor = styled(CodeEditor)``;

const Diff = ({ document, parent, onStage }) => {
  const diffRef = useRef();
  const staged = useSignal(true);

  useEffect(() => {
    if (!diffRef.current) return;
    const view = new EditorView({
      parent: diffRef.current,
      root: parent,
      doc: document.text,
      extensions: [
        ...ExtensionBuilder.basicSetup().useReadonly().create(),
        unifiedMergeView({
          original: document.initialText,
          mergeControls: false,
        }),
      ],
    });

    return () => {
      view.destroy();
    };
  }, [diffRef.current]);

  useSignalEffect(() => onStage(staged.value));

  return (
    <div className="diff-parent">
      <div className="file-name">
        <input type="checkbox" name={document.file} id={document.file} checked={staged.value} onChange={(ev) => (staged.value = ev.target.checked)} />
        <label
          for={document.file}
          className={staged.value ? "" : "unstaged"}
          title={staged.value ? "This file will be committed" : "This file will not be committed"}
        >
          {document.file}
        </label>
      </div>
      {staged.value && <MergeViewCodeEditor ref={diffRef} />}
    </div>
  );
};

export default CommitModal;
