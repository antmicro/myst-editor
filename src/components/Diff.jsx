import { MergeView } from "@codemirror/merge";
import { useRef, useEffect, useContext } from "preact/hooks";
import { CodeEditor } from "./CodeMirror";
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

const initMergeView = ({ old, current, root, transforms }) => {
  const extensions = new ExtensionBuilder().useReadonly().useMarkdown(transforms).create();
  return new MergeView({
    a: { doc: old, extensions },
    b: { doc: current, extensions },
    orientation: "b-a",
    root,
  });
};

const Diff = () => {
  const { options, text, editorView } = useContext(MystState);
  const leftRef = useRef();
  const rightRef = useRef();
  const mergeView = useRef();
  const modalRef = useRef();

  useEffect(() => {
    if (mergeView.current) {
      return false;
    }
    mergeView.current = initMergeView({
      old: options.initialText.peek(),
      current: text.text.peek(),
      root: options.parent,
      transforms: options.transforms.value,
    });
    leftRef.current.appendChild(mergeView.current.b.dom);
    rightRef.current.appendChild(mergeView.current.a.dom);

    const currButtons = options.includeButtons.value;
    options.includeButtons.value = [...currButtons, { id: "discard", text: "Discard changes", action: () => modalRef.current.showModal() }];

    return () => {
      options.includeButtons.value = currButtons;
    };
  }, []);

  // Sync text changes with diff view
  useSignalEffect(() => {
    mergeView.current?.b?.dispatch?.({ changes: { from: 0, to: mergeView.current?.b?.state?.doc?.length, insert: text.text.value } });
  });
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
