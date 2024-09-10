import { useEffect, useRef } from "preact/hooks";
import { html } from "htm/preact";
import { EditorView } from "codemirror";
import { EditorState } from "@codemirror/state";
import styled from "styled-components";
import { ExtensionBuilder } from "../extensions";
import { YCommentsParent } from "../components/Comment";
import commentIcon from "../icons/comment.svg?raw";
import { customHighlighter } from "../extensions/customHighlights";
import { AddSuggestionBtn, suggestionCompartment } from "../extensions/suggestions";
import editIcon from "../icons/edit.svg";

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
    margin-left: 4px;
    cursor: pointer;
  }

  :not(.cm-focused) > .cm-scroller > .cm-selectionLayer .cm-selectionBackground {
    background: transparent;
  }

  .cm-gutterElement span[title="Fold line"],
  .cm-gutterElement span[title="Unfold line"] {
    user-select: none;
  }
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

const CodeMirror = ({ text, id, root, mode, spellcheckOpts, highlights, collaboration, preview }) => {
  const editorRef = useRef(null);
  const editorMountpoint = useRef(null);
  const focusScroll = useRef(null);

  useEffect(() => {
    if (collaboration.opts.enabled && collaboration.error) {
      text.readyToRender();
      editorRef.current?.destroy();

      const view = new EditorView({
        root,
        state: EditorState.create({
          doc: text.get(),
          extensions: ExtensionBuilder.basicSetup().useHighlighter(highlights).useSpellcheck(spellcheckOpts).readonly().create(),
        }),
        parent: editorMountpoint.current,
      });

      view.dom.style.opacity = "0.5";
    }
  }, [collaboration.error]);

  useEffect(() => {
    if (collaboration.opts.enabled && !collaboration.ready) return;
    if (editorRef.current) return;
    if (collaboration.error) return;

    if (collaboration.ytext?.toString().length === 0 && text.get().length > 0) {
      console.warn("[Collaboration] Remote state is empty, overriding with local state");
      collaboration.ytext.insert(0, text.get());
    }

    if (collaboration.opts.enabled) text.set(collaboration.ytext.toString());

    text.readyToRender();

    const startState = EditorState.create({
      root,
      doc: collaboration.opts.enabled ? collaboration.ytext.toString() : text.get(),
      extensions: ExtensionBuilder.basicSetup()
        .useHighlighter(highlights)
        .useCompartment(suggestionCompartment, customHighlighter([]))
        .useSpellcheck(spellcheckOpts)
        .useCollaboration({
          enabled: collaboration.opts.enabled || false,
          ytext: collaboration.ytext,
          undoManager: collaboration.undoManager,
          provider: collaboration.provider,
          editorRef,
        })
        .useComments({ enabled: collaboration.opts.commentsEnabled, ycomments: collaboration.ycomments })
        .useSuggestionPopup({ enabled: collaboration.opts.commentsEnabled, ycomments: collaboration.ycomments, editorMountpoint })
        .addUpdateListener((update) => update.docChanged && text.set(view.state.doc.toString(), update))
        .useFixFoldingScroll(focusScroll)
        .useMoveCursorAfterFold()
        .useCursorIndicator({ lineMap: text.lineMap, preview })
        .create(),
    });

    const view = new EditorView({
      state: startState,
      parent: editorMountpoint.current,
    });
    editorRef.current = view;
    window.myst_editor.main_editor = view;

    collaboration.ycomments?.registerCodeMirror(view);
    collaboration.provider?.watchCollabolators(collaboration.setUsers);
    text.onSync((currentText) => setEditorText(view, currentText));

    return () => {
      if (collaboration.opts.enabled) {
        collaboration.provider.disconnect();
        collaboration.ydoc.destroy();
      }
      view.destroy();
    };
  }, [collaboration.ready]);

  return html`
    <${CodeEditor} className="myst-main-editor" ref=${editorMountpoint} $mode=${mode} id="${id}-editor">
      ${collaboration.opts.commentsEnabled &&
      !collaboration.error &&
      html`<${YCommentsParent} ycomments=${collaboration.ycomments} collaboration=${collaboration.opts} />`}
      ${collaboration.opts.commentsEnabled &&
      html`<${AddSuggestionBtn} style="display: none" className="myst-add-suggestion" title="Suggest Changes">
        <img src=${editIcon} alt="edit" />
      <//>`}
    <//>
  `;
};

export default CodeMirror;
export { CodeEditor };
