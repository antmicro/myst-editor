import { useContext, useEffect, useRef } from "preact/hooks";
import { EditorView } from "codemirror";
import { EditorState } from "@codemirror/state";
import styled from "styled-components";
import { ExtensionBuilder, skipAndFoldAll } from "../extensions";
import { YCommentsParent } from "./Comment";
import commentIcon from "../icons/comment.svg?raw";
import { customHighlighter } from "../extensions/customHighlights";
import { AddSuggestionBtn, suggestionCompartment } from "../extensions/suggestions";
import editIcon from "../icons/edit.svg";
import { MystState } from "../mystState";

const CodeEditor = styled.div`
  border-radius: var(--border-radius);
  background: var(--gray-200);
  font-family: monospace;
  font-size: 0.875rem;
  resize: none;
  border: 0;
  padding: 20px;
  box-sizing: border-box;
  height: 100%;
  scrollbar-width: thin;
  overflow-y: auto;
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
    font-size: 0.6rem;
    padding: 0.25rem 0.5rem !important;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    font-family: "Lato" !important;
    font-weight: 600 !important;
    transition: none;

    &.active {
      opacity: 1;
    }
  }

  .cm-ySelectionCaretDot {
    transition: none;
    &:has(+ .active) {
      transform: scale(0);
    }
  }

  .cm-widgetBuffer {
    margin-bottom: 0;
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

  .cm-line {
    padding-left: 11px;
  }

  .cm-activeLine:not(.comment-wrapper *) {
    position: relative;

    &::before {
      content: "";
      display: block;
      width: 5px;
      height: 100%;
      position: absolute;
      background-color: var(--blue-200);
      transform: translateX(-11px);
    }
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

const CodeMirror = ({ text, root, mode, spellcheckOpts, highlights, collaboration, preview, syncScroll, unfoldedHeadings }) => {
  const { id, editorView } = useContext(MystState);
  const editorMountpoint = useRef(null);
  const focusScroll = useRef(null);
  const lastTyped = useRef(null);

  useEffect(() => {
    if (collaboration.opts.enabled && collaboration.error) {
      text.readyToRender();
      editorView.value?.destroy();

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
    if (editorView.value) return;
    if (collaboration.error) return;

    if (collaboration.ytext?.toString().length === 0 && text.get().length > 0) {
      console.warn("[Collaboration] Remote state is empty, overriding with local state");
      collaboration.ytext.insert(0, text.get());
    }

    if (collaboration.opts.enabled) {
      text.set(collaboration.ytext.toString());
      collaboration.ytext.observe((ev, tr) => {
        if (!tr.local) return;
        lastTyped.current = performance.now();
      });
    }

    text.readyToRender();

    const startState = EditorState.create({
      root,
      doc: collaboration.opts.enabled ? collaboration.ytext.toString() : text.get(),
      extensions: ExtensionBuilder.basicSetup()
        .useHighlighter(highlights)
        .useCompartment(suggestionCompartment, customHighlighter([]))
        .useSpellcheck(spellcheckOpts)
        .if(collaboration.opts.enabled, (b) => b.useCollaboration({ ...collaboration, editorView }))
        .if(collaboration.opts.commentsEnabled, (b) =>
          b.useComments({ ycomments: collaboration.ycomments }).useSuggestionPopup({
            ycomments: collaboration.ycomments,
            editorMountpoint,
          }),
        )
        .addUpdateListener((update) => update.docChanged && text.set(view.state.doc.toString(), update))
        .useFixFoldingScroll(focusScroll)
        .useMoveCursorAfterFold()
        .useCursorIndicator({ lineMap: text.lineMap, preview })
        .if(syncScroll, (b) => b.useSyncPreviewWithCursor({ lineMap: text.lineMap, preview, lastTyped }))
        .create(),
    });

    const view = new EditorView({
      state: startState,
      parent: editorMountpoint.current,
    });
    editorView.value = view;
    window.myst_editor[id.value].main_editor = view;

    if (unfoldedHeadings != undefined) {
      skipAndFoldAll(view, unfoldedHeadings);
    }

    collaboration.ycomments?.registerCodeMirror(view);
    collaboration.provider?.watchCollabolators(collaboration.setUsers);
    text.onSync((currentText) => setEditorText(view, currentText));

    return () => {
      view.destroy();
    };
  }, [collaboration.ready]);

  return (
    <CodeEditor className="myst-main-editor" ref={editorMountpoint} $mode={mode} id={`${id}-editor`}>
      {collaboration.opts.commentsEnabled && !collaboration.error && collaboration.ycomments.mainCodeMirror && (
        <YCommentsParent ycomments={collaboration.ycomments} collaboration={collaboration.opts} />
      )}
      {collaboration.opts.commentsEnabled && (
        <AddSuggestionBtn style="display: none" className="myst-add-suggestion" title="Suggest Changes">
          <img src={editIcon} alt="edit" />
        </AddSuggestionBtn>
      )}
    </CodeEditor>
  );
};

export default CodeMirror;
export { CodeEditor };
