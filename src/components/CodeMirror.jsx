import { useContext, useRef } from "preact/hooks";
import { EditorView } from "codemirror";
import { EditorState } from "@codemirror/state";
import styled from "styled-components";
import { ExtensionBuilder, skipAndFoldAll } from "../extensions";
import { YCommentsParent } from "./Comment";
import commentIcon from "../icons/comment.svg?raw";
import { MystState } from "../mystState";
import { userExtensionsCompartment } from "./Settings";
import { useSignalEffect } from "@preact/signals";
import { MdStyles } from "./Preview";
import { Logger } from "../logger";

const CodeEditor = styled.div`
  border-radius: var(--border-radius);
  background: ${(props) => (props.$mode != "Inline" ? "var(--editor-bg)" : "var(--panel-bg)")};
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
  position: relative;
  box-shadow: inset 0px 0px 4px var(--box-shadow);

  .cm-editor .cm-gutters {
    background-color: ${(props) => (props.$mode != "Inline" ? "var(--editor-bg)" : "var(--panel-bg)")};
    border-right: 1px solid var(--border);
  }

  .comment-gutter-icon {
    height: 17px;
    width: 17px;
    cursor: pointer;
  }

  .comment-image {
    position: absolute;
    display: inline;
    background-image: url("data:image/svg+xml;charset=UTF-8,${() => encodeURIComponent(commentIcon)}");
    filter: invert(var(--icon-invert));
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

  .cm-editor .cm-ySelectionInfo {
    font-size: 10px;
    padding: 4px 8px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    font-family: "Lato";
    font-weight: 600;
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
    text-decoration: underline var(--error-bg) 2px;
  }

  .cm-link {
    color: var(--accent-dark);

    .cm-error {
      text-decoration: unset;
    }

    .ͼ6.ͼ5 {
      color: unset;
    }
  }

  .cm-mono {
    color: var(--accent-dark);
  }

  [title="Fold line"] {
    user-select: none;
  }

  .cm-panels-bottom {
    z-index: 3;
  }

  :not(.cm-focused) > .cm-scroller > .cm-selectionLayer .cm-selectionBackground {
    background: transparent;
  }

  .cm-editor.cm-focused {
    outline: none;
  }

  .cm-gutterElement {
    color: var(--editor-gutter-fg);
  }

  .cm-foldGutter {
    margin-right: 5px;

    .cm-gutterElement span[title="Fold line"],
    .cm-gutterElement span[title="Unfold line"] {
      user-select: none;
    }
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
      z-index: 200;
      background-color: var(--accent);
      transform: translateX(-11px);
    }
  }

  .cm-tooltip-hover {
    padding: 10px;

    & *:first-child {
      margin-top: 0;
    }

    & *:last-child {
      margin-bottom: 0;
    }
  }

  .cm-inline-bullet::after {
    display: inline-block;
    content: "•";
  }

  .cm-inline-ordered-list-marker::after {
    display: inline-block;
    font-family: "Lato";
    content: attr(data-item-num);
  }

  .cm-inline-rendered-md {
    &:not(&.inline-custom-styles) {
      all: initial;
      color: inherit;
      font-family: "Lato";
      font-size: 16px;
    }

    ${MdStyles}

    aside.admonition {
      margin-bottom: 0;
    }

    & > * {
      margin: 0 !important;
    }
  }

  .cm-inline-mono,
  .cm-inline-mono *,
  .cm-line > *:has(> .cm-inline-mono) {
    font-family: monospace !important;
    line-height: 1.3em !important;
    font-size: 14px !important;
    display: inline-block !important;
  }

  .cm-editor .cm-lintRange-error {
    background-image: none;
    text-decoration: underline var(--error-bg) 2px;
  }

  .cm-editor .cm-diagnostic-error {
    border-left: 5px solid var(--error-bg);
  }

  .cm-editor .cm-tooltip {
    max-width: min(90vw, 600px);

    a {
      color: var(--accent-dark);
    }
  }

  .cm-critic-widget {
    display: inline-flex;
    align-items: center;
    margin-left: 4px;
    transform: translateY(2px);

    button {
      padding: 0;
      border: none;
      background: transparent;
      cursor: pointer;
      height: 16px;

      img {
        width: 16px;
        height: auto;
      }
    }
  }

  .cm-critic-meta {
    color: darkgray;
  }

  .cm-critic-ins {
    background: var(--inserted-bg);
    text-decoration: underline;
  }

  .cm-critic-del {
    background: var(--deleted-bg);
    text-decoration: line-through;
  }
`;

const CodeMirror = () => {
  const { editorView, options, collab, userSettings, linter, text, headings, error, suggestMode } = useContext(MystState);
  const logger = useContext(Logger);
  const editorMountpoint = useRef(null);
  const focusScroll = useRef(null);
  const lastTyped = useRef(null);
  const renderTimer = useRef(null);

  useSignalEffect(() => {
    if (!options.collaboration.value.enabled || (collab.value.ready.value && !collab.value.lockMsg.value && !error.value)) return;
    editorView.value?.destroy();

    const view = new EditorView({
      root: options.parent,
      state: EditorState.create({
        doc: text.text.peek(),
        extensions: ExtensionBuilder.basicSetup().useLanguage(options.language.value, options.transforms.value).useReadonly().create(),
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
      if (!collab.value.ready.value || collab.value.lockMsg.value || error.value) return;

      if (collab.value.ytext.toString().length === 0 && options.initialText.peek().length > 0) {
        console.warn("[Collaboration] Remote state is empty, overriding with local state");
        text.text.value = options.initialText.peek();
        collab.value.ydoc.transact(() => {
          collab.value.ytext.insert(0, options.initialText.peek());
          const metaMap = collab.value.ydoc.getMap("meta");
          metaMap.set("initial", true);
        });
      }

      text.text.value = collab.value.ytext.toString();
      collab.value.ytext.observe((ev, tr) => {
        if (!tr.local) return;
        lastTyped.current = performance.now();
      });
    }

    const startState = EditorState.create({
      root: options.parent,
      doc: options.collaboration.value.enabled ? collab.value.ytext.toString() : text.text.peek(),
      extensions: ExtensionBuilder.basicSetup()
        .useLanguage(options.language.value, options.transforms.value)
        .if(options.mode.value !== "Inline", (b) => b.useLineNumbers())
        .useCompartment(userExtensionsCompartment, [])
        .useSpellcheck(options.spellcheckOpts.value)
        .if(options.collaboration.value.enabled, (b) => {
          return b.useCollaboration({ collabClient: collab.value, editorView });
        })
        .if(!options.collaboration.value.enabled, (b) => b.useDefaultHistory())
        .if(options.collaboration.value.commentsEnabled, (b) => b.useComments({ ycomments: collab.value.ycomments }))
        .addUpdateListener((update) => {
          if (!update.docChanged) return;
          clearTimeout(renderTimer.current);
          renderTimer.current = setTimeout(() => {
            text.shiftLineMap(update);
            text.text.value = view.state.doc.toString();
          });
        })
        .useFixFoldingScroll(focusScroll)
        .useMoveCursorAfterFold()
        .if(options.mode.value === "Both", (b) => b.useCursorIndicator({ text, preview: text.preview.value }))
        .if(options.syncScroll.value && options.mode.value === "Both", (b) =>
          b.useSyncPreviewWithCursor({ text, preview: text.preview.value, lastTyped }),
        )
        .if(options.yamlSchema.value, (b) => b.useYamlSchema(options.yamlSchema.value, editorView, linter))
        .if(options.mode.value === "Inline", (b) => b.useInlinePreview(text, options, editorView))
        .useTrackHeadings(headings)
        .useExceptionSink(error)
        .useLogger(logger)
        .if(options.cmDarkTheme.value, (b) => b.useCmDarkTheme())
        .useCriticMarkup()
        .if(suggestMode.value, (b) => b.useSuggestMode())
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

    return () => {
      view.destroy();
    };
  });

  return (
    <CodeEditor className="myst-main-editor" ref={editorMountpoint} $mode={options.mode.value} id={`${options.id.value}-editor`}>
      {options.collaboration.value.commentsEnabled && collab.value.ready.value && collab.value.ycomments?.mainCodeMirror && <YCommentsParent />}
    </CodeEditor>
  );
};

export default CodeMirror;
export { CodeEditor };
