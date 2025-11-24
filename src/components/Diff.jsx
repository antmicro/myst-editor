import { MergeView } from "@codemirror/merge";
import { useRef, useEffect, useContext } from "preact/hooks";
import { CodeEditor } from "./CodeMirror";
import { ViewUpdate } from "@codemirror/view";
import { styled } from "styled-components";
import { ExtensionBuilder } from "../extensions";
import { MystState } from "../mystState";
import { DefaultButton, Modal } from "./CommonUI";
import { useSignalEffect } from "@preact/signals";

const DiffContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: max-content;
  width: 100%;
  height: 100%;
  scrollbar-width: thin;
  overflow-y: auto;
  overscroll-behavior: contain;
`;

const MergeViewCodeEditor = styled(CodeEditor)`
  overflow-y: visible;
  overscroll-behavior: contain;
  display: block;
`;

const Diff = () => {
  const { options, text, editorView, collab, error } = useContext(MystState);
  const leftRef = useRef();
  const rightRef = useRef();
  const mergeView = useRef();
  const modalRef = useRef();

  useEffect(() => {
    if (mergeView.current) {
      return false;
    }

    mergeView.current = new MergeView({
      a: {
        doc: options.initialText.peek(),
        extensions: new ExtensionBuilder().useReadonly().useMarkdown(options.transforms.value).create(),
      },
      b: {
        doc: text.text.peek(),
        extensions: ExtensionBuilder.basicSetup()
          .useMarkdown(options.transforms.value)
          .if(options.collaboration.value.enabled, (b) => {
            return b.useCollaboration({ collabClient: collab.value, editorView });
          })
          .if(!options.collaboration.value.enabled, (b) => b.useDefaultHistory())
          .addUpdateListener((update) => {
            if (!update.docChanged) return;
            text.shiftLineMap(update);
            text.text.value = update.view.state.doc.toString();
          })
          .useExceptionSink(error)
          .create(),
      },
      root: options.parent,
    });

    leftRef.current.appendChild(mergeView.current.b.dom);
    rightRef.current.appendChild(mergeView.current.a.dom);

    const currButtons = options.includeButtons.value;
    options.includeButtons.value = [...currButtons, { id: "discard", text: "Discard changes", action: () => modalRef.current.showModal() }];

    return () => {
      options.includeButtons.value = currButtons;
    };
  }, []);

  // Update the initial state when it changes
  useSignalEffect(() => {
    mergeView.current?.a?.dispatch?.({ changes: { from: 0, to: mergeView.current?.a?.state?.doc?.length, insert: options.initialText.value } });
  });

  return (
    <DiffContainer>
      <MergeViewCodeEditor ref={leftRef} />
      <MergeViewCodeEditor ref={rightRef} />
      <Modal ref={modalRef}>
        <h3>Are you sure you want to discard all changes made to this file?</h3>
        <div className="buttons">
          <DefaultButton
            onClick={() => {
              editorView.value.dispatch({ changes: { from: 0, to: editorView.value.state.doc.length, insert: options.initialText.peek() } });
              options.onDiscardChanges?.value?.();
              modalRef.current.close();
            }}
          >
            Yes, discard
          </DefaultButton>
          <DefaultButton onClick={() => modalRef.current.close()}>No, cancel</DefaultButton>
        </div>
      </Modal>
    </DiffContainer>
  );
};
Diff.defaultProps = { className: "diff" };

export default Diff;
