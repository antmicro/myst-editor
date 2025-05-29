import { useComputed, useSignal, useSignalEffect } from "@preact/signals";
import { EditorView } from "codemirror";
import { useContext, useEffect, useRef } from "preact/hooks";
import styled from "styled-components";
import { ExtensionBuilder } from "../extensions";
import { unifiedMergeView } from "@codemirror/merge";
import { CodeEditor } from "../components/CodeMirror";
import { MystState } from "../mystState";
import { Modal } from "../components/CommonUI";

const CommitForm = styled(Modal)`
  && {
    width: 800px;
  }

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
    background-color: var(--button-bg);
    border: 1px solid var(--border);
    border-radius: var(--border-radius);
  }

  input {
    margin-bottom: 20px;
  }

  button {
    cursor: pointer;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    font-family: inherit;
    border: 1px solid var(--border);
    background-color: var(--button-bg);
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 15px;
    transition: 0.4s ease;
    border-radius: var(--border-radius);

    &:hover {
      background-color: var(--button-bg-hover);
      border: 1px solid var(--button-bg-hover);
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

  .file-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
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

const CommitModal = ({ initialSummary = "", onSubmit, onClose, documents = [], parent, latestCommit, statusSocket }) => {
  const summary = useSignal(initialSummary);
  const description = useSignal("");
  const message = useComputed(() => `${summary.value}\n\n${description.value}`);
  const discardedDocs = useSignal([]);
  const stagedDocs = useSignal(documents.map((d) => d.file));
  const modalRef = useRef();

  useEffect(() => {
    if (initialSummary) {
      summary.value = initialSummary;
      description.value = "";
      discardedDocs.value = [];
      stagedDocs.value = documents.map((d) => d.file);
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
    <CommitForm ref={modalRef}>
      <div id="diffs">
        {documents
          .filter((d) => !discardedDocs.value.includes(d.file))
          .map((d) => (
            <Diff
              key={d.file}
              parent={parent}
              document={d}
              onStage={(staged) => handleStage(staged, d.file)}
              discardFile={() => {
                discardedDocs.value = [...discardedDocs.peek(), d.file];
                handleStage(false, d.file);
                d.client.ytext.delete(0, d.client.ytext.length);
                d.client.ytext.insert(0, d.initialText);
                statusSocket.current.send(d.client.provider.roomname);
              }}
            />
          ))}
      </div>
      {latestCommit ? (
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
          <div className="buttons">
            <button type="submit" disabled={stagedDocs.value.length === 0}>
              Commit
            </button>
            <button type="button" onClick={() => modalRef.current.close()}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          <p>You can only commit changes from the latest commit of a branch</p>
          <div className="buttons">
            <div />
            <button onClick={() => modalRef.current.close()}>Close</button>
          </div>
        </>
      )}
    </CommitForm>
  );
};

const MergeViewCodeEditor = styled(CodeEditor)``;

const Diff = ({ document, parent, onStage, discardFile }) => {
  const { options } = useContext(MystState);
  const diffRef = useRef();
  const staged = useSignal(true);

  useEffect(() => {
    if (!diffRef.current) return;
    const view = new EditorView({
      parent: diffRef.current,
      root: parent,
      doc: document.text,
      extensions: [
        ...ExtensionBuilder.basicSetup().useMarkdown(options.transforms.value).useReadonly().create(),
        unifiedMergeView({
          original: document.initialText,
          mergeControls: false,
          collapseUnchanged: {
            margin: 3,
            minSize: 6,
          },
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
      <div className="file-controls">
        <div className="file-name">
          <input
            type="checkbox"
            name={document.file}
            id={document.file}
            checked={staged.value}
            onChange={(ev) => (staged.value = ev.target.checked)}
          />
          <label
            for={document.file}
            className={staged.value ? "" : "unstaged"}
            title={staged.value ? "This file will be committed" : "This file will not be committed"}
          >
            {document.file}
          </label>
        </div>
        <button onClick={() => discardFile()}>Discard changes</button>
      </div>
      {staged.value && <MergeViewCodeEditor ref={diffRef} />}
    </div>
  );
};

export default CommitModal;
