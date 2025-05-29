import { useContext, useRef } from "preact/hooks";
import { DefaultButton, Modal } from "./CommonUI";
import { MystState } from "../mystState";
import { getTimestamp, Logger } from "../logger";
import { useSignal, useSignalEffect } from "@preact/signals";
import styled from "styled-components";
import { EditorView } from "codemirror";
import { CollaborationClient } from "../collaboration";

/**
 * @param {Error} error
 * @param {string} src
 * @param {*} options
 * @param {() => string} getLogString
 * @param {EditorView} editorView
 * @param {CollaborationClient} collabClient
 */
const formatError = (error, src, options, getLogString, editorView, collabClient) => {
  const header = `Error detected from: ${src}, while in mode: ${options.mode.peek()}, editor id: ${options.id.peek()}`;
  const time = `[${getTimestamp()}]`;
  const userAgent = `User agent: ${navigator.userAgent}`;
  const errorText = `${error.name}: ${error.message} ${error.cause ?? ""}\n${error.stack ?? ""}`;
  let documentInfo = `Document:\nLines: ${editorView.state.doc.lines}\nLength: ${editorView.state.doc.length}`;
  if (collabClient) {
    documentInfo += `\nUser count: ${collabClient.users.peek().length}`;
    documentInfo += `\nComments: count ${collabClient.ycomments.comments.peek().length}, lines [${collabClient.ycomments.comments
      .peek()
      .map((c) => c.lineNumber)
      .toSorted((a, b) => a - b)
      .join(", ")}]`;
    documentInfo += `\nResolved comments: count ${collabClient.ycomments.resolver().resolvedCommentsList.peek().length}, lines [${collabClient.ycomments
      .resolver()
      .resolvedCommentsList.peek()
      .map((c) => c.lineNumber)
      .toSorted((a, b) => a - b)
      .join(", ")}]`;
    const suggestionLines = [...collabClient.ycomments.suggestions.entries()]
      .filter(([_, values]) => values.length > 0)
      .map(([id]) => parseInt(collabClient.ycomments.positions().get(id)))
      .filter(Boolean)
      .toSorted((a, b) => a - b);
    documentInfo += `\nSuggestions: line count ${suggestionLines.length}, lines [${suggestionLines.join(", ")}]`;
  }
  const logs = `Logs:\n${getLogString()}`;

  return `\`\`\`\n${[header, time, userAgent, errorText, documentInfo, logs].join("\n")}\n\`\`\``;
};

const ErrorContainer = styled(Modal)`
  box-shadow: inset 0 8px var(--error-bg);

  button:hover {
    background-color: var(--button-bg-hover);
    border: 1px solid var(--button-bg-hover);
  }
`;

const defaultBtnText = "Copy error to clipboard";

const ErrorModal = () => {
  const { error, options, editorView, collab } = useContext(MystState);
  const { getLogString } = useContext(Logger);
  const modalRef = useRef();
  const btnText = useSignal(defaultBtnText);

  useSignalEffect(() => {
    if (error.value) modalRef.current?.showModal?.();
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(formatError(error.value.error, error.value.src, options, getLogString, editorView.value, collab.value));
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
