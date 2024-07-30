import { useEffect, useRef } from "preact/hooks";
import { html } from "htm/preact";
import { EditorView } from "codemirror";
import { EditorState } from "@codemirror/state";
import styled from "styled-components";
import useCollaboration from "../hooks/useCollaboration";
import { ExtensionBuilder } from "../extensions";
import { YCommentsParent } from "../components/Comment";
import useComments from "../hooks/useComments";
import commentIcon from "../icons/comment.svg?raw";
import ResolvedComments from "./Resolved";
import { customHighlighter } from "../extensions/customHighlights";
import { suggestionCompartment } from "../extensions/suggestions";

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
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.15);

  .cm-gutters {
    background-color: var(--gray-200);
  }

  .comment-gutter-icon {
    height: 17px;
    width: 17px;
    cursor: pointer;
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

  .comment-box-hidden {
    position: absolute;
    pointer-events: none;
    margin-top: -5px;
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
    margin: 0 2px 0 6px;
  }

  .cm-editor {
    outline: 0;
  }

  .cm-scroller {
    overflow: visible;
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

  .editor-msg {
    padding: 10px;
    border-radius: 2px;
    text-align: center;

    &.collab-error {
      background-color: var(--red-500);
    }

    &.collab-notif {
      background-color: var(--blue-100);
    }
  }

  .cm-panels-bottom {
    z-index: 3;
  }

  .cm-suggestion {
    font-weight: 700;

    &.replaced {
      font-weight: initial;
      color: initial !important;
      text-decoration: line-through;
    }

    & * {
      color: inherit;
    }
  }

  .cm-replacement {
    font-weight: 700;
    display: inline-block;
    margin-right: 4px;
    cursor: pointer;
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

const CodeMirror = ({ text, id, name, mode, collaboration, spellcheckOpts, highlights, setUsers, getAvatar }) => {
  const editorRef = useRef(null);
  const editorMountpoint = useRef(null);
  const { provider, undoManager, ytext, ydoc, ready, error } = useCollaboration(collaboration);
  const ycomments = useComments(ydoc, provider, getAvatar);

  useEffect(() => {
    if (collaboration.enabled && error) {
      text.readyToRender();
      editorRef.current?.destroy();

      const view = new EditorView({
        state: EditorState.create({
          doc: text.get(),
          extensions: ExtensionBuilder.basicSetup().useHighlighter(highlights).useSpellcheck(spellcheckOpts).readonly().create(),
        }),
        parent: editorMountpoint.current,
      });

      view.dom.style.opacity = "0.5";
    }
  }, [error]);

  useEffect(() => {
    if (collaboration.enabled && !ready) return;
    if (editorRef.current) return;
    if (error) return;

    if (ytext?.toString().length === 0 && text.get().length > 0) {
      console.warn("[Collaboration] Remote state is empty, overriding with local state");
      ytext.insert(0, text.get());
    }

    if (collaboration.enabled) text.set(ytext.toString());

    text.readyToRender();

    const startState = EditorState.create({
      doc: collaboration.enabled ? ytext.toString() : text.get(),
      extensions: ExtensionBuilder.basicSetup()
        .useHighlighter(highlights)
        .useCompartment(suggestionCompartment, customHighlighter([]))
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
        .useRemoveSelectionOnBlur(ytext, provider)
        .create(),
    });

    const view = new EditorView({
      state: startState,
      parent: editorMountpoint.current,
    });
    editorRef.current = view;
    window.myst_editor.main_editor = view;

    ycomments?.registerCodeMirror(view);
    provider?.watchCollabolators(setUsers);
    text.onSync((currentText) => setEditorText(view, currentText));

    return () => {
      if (collaboration.enabled) {
        provider.disconnect();
        ydoc.destroy();
      }
      view.destroy();
    };
  }, [ready]);

  return html`
    <${CodeEditor} className="myst-main-editor" ref=${editorMountpoint} $mode=${mode} id="${id}-editor">
      ${error && html`<div class="editor-msg collab-error">${typeof error == "string" ? error : "No connection to the collaboration server"}</div>`}
      ${collaboration.enabled && !ready && !error && html`<div class="editor-msg collab-notif">Connecting to the collaboration server ...</div>`}
      ${collaboration.commentsEnabled && !error ? html`<${YCommentsParent} ycomments=${ycomments} collaboration=${collaboration} />` : ""}
    <//>

    ${collaboration.commentsEnabled && !error ? html`<${ResolvedComments} ycomments=${ycomments} />` : ""}

    <${HiddenTextArea} value=${text.get()} name=${name} id=${id}><//>
  `;
};

export default CodeMirror;
export { CodeEditor };
