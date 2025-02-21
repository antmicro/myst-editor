import { MergeView } from "@codemirror/merge";
import { useRef, useEffect, useContext } from "preact/hooks";
import { CodeEditor } from "./CodeMirror";
import { styled } from "styled-components";
import { ExtensionBuilder } from "../extensions";
import { MystState } from "../mystState";

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

const initMergeView = ({ old, current, root }) => {
  const extensions = ExtensionBuilder.basicSetup().readonly().create();
  return new MergeView({
    a: { doc: old, extensions },
    b: { doc: current, extensions },
    orientation: "b-a",
    root,
  });
};

const Diff = () => {
  const { options, text } = useContext(MystState);
  let leftRef = useRef(null);
  let rightRef = useRef(null);
  let mergeView = useRef(null);

  useEffect(() => {
    if (mergeView.current) {
      return false;
    }
    mergeView.current = initMergeView({
      old: options.initialText,
      current: text.text.peek(),
      root: options.parent,
    });

    leftRef.current.appendChild(mergeView.current.b.dom);
    rightRef.current.appendChild(mergeView.current.a.dom);
  }, []);

  return (
    <DiffContainer>
      <MergeViewCodeEditor ref={leftRef} />
      <MergeViewCodeEditor ref={rightRef} />
    </DiffContainer>
  );
};
Diff.defaultProps = { className: "diff" };

export default Diff;
