import { useEffect, useRef, useState } from "preact/hooks";
import { html } from "htm/preact";
import { EditorView } from "codemirror";
import { EditorState, StateEffect } from "@codemirror/state";
import styled from "styled-components";
import useCollaboration from "../hooks/useCollaboration";
import { adjustToMode } from "./Preview";
import { ExtensionBuilder } from "../extensions";
import { YCommentsParent } from "../components/Comment";
import useComments from "../hooks/useComments";
import commentIcon from "../icons/comment.svg?raw";

const adjust = adjustToMode("Source");

const CodeEditor = styled.div`
  border-radius: var(--border-radius);
  background: var(--gray-200);
  font-family: monospace;
  font-size: 0.94em;
  resize: none;
  border: 0;
  padding: 20px;
  min-height: 500px;
  color: black;
  position: relative;

  ${(props) => adjust(props.$mode)}

  flex: 1;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.15);

  .cm-gutters {
    background-color: var(--gray-200);
  }

  .comment-gutter-icon {
    height: 17px;
    width: 17px;
    cursor: pointer;
  }

  .cm-ySelectionCaret {
    position: fixed;
  }

  .comment-image {
    position: absolute;
    display: inline;
    background-color: var(--gray-200);
    background-image: url("data:image/svg+xml;charset=UTF-8,${(props) => encodeURIComponent(commentIcon)}");
    background-repeat: no-repeat;
  }

  .comment-box {
    width: 95%;
    display: flex;
    margin: 0px;
    padding: 0px;
  }

  @media print {
    & {
      display: none;
    }
  }

  .cm-ySelectionInfo {
    opacity: 1 !important;
    font-size: 0.6rem;
    padding: 0.25rem 0.5rem !important;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    font-family: "Lato" !important;
    font-weight: 600 !important;
  }

  .cm-widgetBuffer {
    margin-bottom: 0;
  }

  .cm-ySelectionCaretDot {
    display: none;
  }

  .cm-yLineSelection {
    margin: 0 2px 0 6px !important;
  }

  .cm-editor {
    outline: 0;
  }

  .cm-error {
    text-decoration: underline red;
  }

  .cm-link {
    color: var(--blue-500);

    .cm-error {
      text-decoration: unset;
    }

    .ͼ6.ͼ5 {
      color: unset;
    }
  }

  .cm-mono {
    color: #219;
  }

  [title="Fold line"] {
    user-select: none;
  }
`;

const HiddenTextArea = styled.textarea`
  display: none;
`;

const setEditorText = (editor, text) => {
  editor.dispatch({
    changes: {
      from: 0,
      to: editor.state.doc.length,
      insert: text,
    },
  });
};

const CodeMirror = ({ text, id, name, className, mode, collaboration, spellcheckOpts, highlights, setUsers, getAvatar }) => {
  const editorRef = useRef(null);
  const [initialized, setInitialized] = useState(false);

  const { provider, undoManager, ytext, ydoc, ready } = useCollaboration(collaboration);
  const ycomments = useComments(ydoc, provider, getAvatar);

  useEffect(() => {
    if (collaboration.enabled && !ready) return;
    if (editorRef.current) return;

    const startState = EditorState.create({
      doc: collaboration.enabled ? ytext.toString() : text.get(),
      extensions: ExtensionBuilder.basicSetup()
        .useHighlighter(highlights)
        .useSpellcheck(spellcheckOpts)
        .useCollaboration({
          enabled: collaboration.enabled || false,
          ytext,
          undoManager,
          provider,
          editorRef,
        })
        .useComments({ enabled: collaboration.commentsEnabled, ycomments })
        .addUpdateListener((update) => update.docChanged && text.set(view.state.doc.toString()))
        .create(),
    });

    const view = new EditorView({
      state: startState,
      parent: document.getElementById(id + "-editor"),
    });
    editorRef.current = view;
    setInitialized(true);

    ycomments?.registerCodeMirror(view);

    return () => {
      if (collaboration.enabled) {
        provider.disconnect();
        ydoc.destroy();
      }
      view.destroy();
    };
  }, [ready]);

  useEffect(() => {
    const mystEditorCount = document.querySelectorAll("#myst-css-namespace").length;
    const isFirstUser =
      collaboration.enabled && ytext.toString().length == 0 && provider.awareness.getStates().size == mystEditorCount && provider.firstUser && ready;

    if (ytext && ytext.toString().length != 0) text.set(ytext.toString());

    if (isFirstUser) {
      console.log("You are the first user in this document. Initiating...");
      setEditorText(editorRef.current, text.get());
    }

    text.onSync((currentText) => setEditorText(editorRef.current, currentText));
    ycomments?.updateMainCodeMirror();
    provider?.watchCollabolators(setUsers);
  }, [ready, initialized]);

  return html`
    <${CodeEditor} $mode=${mode} id="${id}-editor" class=${className}>
      ${collaboration.commentsEnabled ? html`<${YCommentsParent} ycomments=${ycomments} />` : ""}
    <//>
    <${HiddenTextArea} value=${text.get()} name=${name} id=${id}><//>
  `;
};

export default CodeMirror;
export { CodeEditor };
