import { MergeView } from "@codemirror/merge";
import { useRef, useEffect } from "preact/hooks";
import { CodeEditor } from "./CodeMirror";
import { html } from "htm/preact";
import { styled } from "styled-components";
import { ExtensionBuilder } from "../extensions";

const MergeViewCodeEditor = styled(CodeEditor)`
  width: 50%;
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

const Diff = ({ oldText, text, root }) => {
  let leftRef = useRef(null);
  let rightRef = useRef(null);
  let mergeView = useRef(null);

  useEffect(() => {
    if (mergeView.current) {
      return false;
    }
    mergeView.current = initMergeView({
      old: oldText,
      current: text.get(),
      root,
    });

    leftRef.current.appendChild(mergeView.current.b.dom);
    rightRef.current.appendChild(mergeView.current.a.dom);
  }, []);

  return html` <div style="display:flex; width: 100%">
    <${MergeViewCodeEditor} ref=${leftRef} />
    <${MergeViewCodeEditor} ref=${rightRef} />
  </div>`;
};
Diff.defaultProps = { className: "diff" };

export default Diff;
