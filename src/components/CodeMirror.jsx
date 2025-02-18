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
import { userExtensionsCompartment } from "./Settings";
import { useSignalEffect } from "@preact/signals";
import * as Y from "yjs";

const CodeEditor = styled.div`
  border-radius: var(--border-radius);
  background: var(--gray-200);
  font-family: monospace;
  font-size: 14px;
  resize: none;
  border: 0;
  padding: 20px;
  box-sizing: border-box;
  height: 100%;
  scrollbar-width: thin;
  overflow-y: auto;
  overscroll-behavior: contain;
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
    font-size: 10px;
    padding: 4px 8px !important;
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
    margin: 0 2px 0 0px;
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

  .cm-suggestion-remove {
    text-decoration: line-through;
    font-weight: initial;
    cursor: pointer;
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
      z-index: -1;
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

const CodeMirror = ({ text, setUsers, preview }) => {
  const { editorView, options, collab, userSettings } = useContext(MystState);
  const editorMountpoint = useRef(null);
  const focusScroll = useRef(null);
  const lastTyped = useRef(null);

  useSignalEffect(() => {
    if (!options.collaboration.value.enabled || (collab.value.ready.value && !collab.value.lockMsg.value)) return;
    text.readyToRender();
    editorView.value?.destroy();

    const view = new EditorView({
      root: options.parent,
      state: EditorState.create({
        doc: text.get(),
        extensions: ExtensionBuilder.basicSetup().useHighlighter(options.transforms.value).readonly().create(),
      }),
      parent: editorMountpoint.current,
    });
    view.dom.style.opacity = "0.5";

    collab.value?.ycomments?.registerCodeMirror(view);

    return () => {
      view.destroy();
    };
  });

  useSignalEffect(() => {
    const userExtensions = userSettings.value.filter((s) => s.enabled && s.extension).map((s) => s.extension);
    editorView.value?.dispatch?.({
      effects: userExtensionsCompartment.reconfigure(userExtensions),
    });
  });

  useSignalEffect(() => {
    if (options.collaboration.value.enabled) {
      if (!collab.value.ready.value || collab.value.lockMsg.value) return;

      if (collab.value.ytext.toString().length === 0 && options.initialText.length > 0) {
        console.warn("[Collaboration] Remote state is empty, overriding with local state");
        text.set(options.initialText);
        collab.value.ydoc.transact(() => {
          collab.value.ytext.insert(0, options.initialText);
          const metaMap = collab.value.ydoc.getMap("meta");
          metaMap.set("initial", true);
        });
      }

      text.set(collab.value.ytext.toString());
      collab.value.ytext.observe((ev, tr) => {
        if (!tr.local) return;
        lastTyped.current = performance.now();
      });
    }

    text.readyToRender();

    const startState = EditorState.create({
      root: options.parent,
      doc: options.collaboration.value.enabled ? collab.value.ytext.toString() : text.get(),
      extensions: ExtensionBuilder.basicSetup()
        .useHighlighter(options.transforms.value)
        .useCompartment(suggestionCompartment, customHighlighter([]))
        .useCompartment(userExtensionsCompartment, [])
        .useSpellcheck(options.spellcheckOpts.value)
        .if(options.collaboration.value.enabled, (b) => {
          return b.useCollaboration({ collabClient: collab.value, editorView });
        })
        .if(!options.collaboration.value.enabled, (b) => b.useDefaultHistory())
        .if(options.collaboration.value.commentsEnabled, (b) =>
          b.useComments({ ycomments: collab.value.ycomments }).useSuggestionPopup({
            ycomments: collab.value.ycomments,
            editorMountpoint,
          }),
        )
        .addUpdateListener((update) => update.docChanged && text.set(view.state.doc.toString(), update))
        .useFixFoldingScroll(focusScroll)
        .useMoveCursorAfterFold()
        .useCursorIndicator({ lineMap: text.lineMap, preview })
        .if(options.syncScroll.value, (b) => b.useSyncPreviewWithCursor({ lineMap: text.lineMap, preview, lastTyped }))
        .create(),
    });

    const view = new EditorView({
      state: startState,
      parent: editorMountpoint.current,
    });
    editorView.value = view;
    window.myst_editor[options.id.value].main_editor = view;

    if (options.unfoldedHeadings.value != undefined) {
      skipAndFoldAll(view, options.unfoldedHeadings.value);
    }

    collab.value?.ycomments?.registerCodeMirror(view);
    collab.value?.provider?.watchCollabolators(setUsers);
    text.onSync((currentText) => setEditorText(view, currentText));

    return () => {
      view.destroy();
    };
  });

  return (
    <CodeEditor className="myst-main-editor" ref={editorMountpoint} $mode={options.mode.value} id={`${options.id.value}-editor`}>
      {options.collaboration.value.commentsEnabled && collab.value.ready.value && collab.value.ycomments?.mainCodeMirror && <YCommentsParent />}
      {options.collaboration.value.commentsEnabled && (
        <AddSuggestionBtn style="display: none" className="myst-add-suggestion" title="Suggest Changes">
          <img src={editIcon} alt="edit" />
        </AddSuggestionBtn>
      )}
    </CodeEditor>
  );
};

export default CodeMirror;
export { CodeEditor };
