import { useContext, useEffect, useRef } from "preact/hooks";
import { EditorView } from "codemirror";
import { EditorState } from "@codemirror/state";
import styled, { css } from "styled-components";
import { ExtensionBuilder, skipAndFoldAll, foldMarkedHeadings, multipleSelectionsCompartment, suggestionsCompartment } from "../extensions";
import { restoreCollaborationSelection, saveCollaborationSelection } from "../collaborationSelection";
import {
  addReviewComment,
  getAllReviewItems,
  setReviewStateEffect,
  showCommentsCompartment,
  showCommentsFacet,
  reviewSidebarCompartment,
  reviewSidebarFacet,
  reviewSidebarWideCompartment,
  reviewSidebarWideFacet,
  suggestionsTypingExtension,
} from "../extensions/review";
import commentIcon from "../icons/comment.svg?raw";
import { MystState } from "../mystState";
import { userExtensionsCompartment } from "./Settings";
import { useSignalEffect } from "@preact/signals";
import { FoldChevron, MdStyles } from "./Preview";
import { Logger } from "../logger";
import { ReviewStyles } from "../extensions/reviewTheme";

const CodeEditor = styled.div`
  ${(props) =>
    props.$reviews &&
    css`
      .cm-editor {
        ${ReviewStyles}
      }
    `}

  border-radius: var(--border-radius);
  background: ${(props) => (props.$mode != "Inline" ? "var(--editor-bg)" : "var(--panel-bg)")};
  font-family: monospace;
  font-size: 14px;
  resize: none;
  border: 0;
  padding: 20px;
  padding-right: 5px;
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
    height: 100%;
  }

  .cm-editor .cm-scroller {
    overflow: visible;
  }

  .cm-error {
    text-decoration: spelling-error;
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

  /* Rendered blocks are much taller than a line of text, which leaves the number stranded at the
     top of them. CodeMirror sizes every gutter element to its line block, so centering is enough. */
  ${(props) =>
    props.$mode === "Inline" &&
    css`
      .cm-lineNumbers .cm-gutterElement {
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
    `}

  .cm-foldGutter {
    margin-right: 5px;

    .cm-foldMarker {
      ${FoldChevron}
      width: 12px;
      height: 100%;
    }

    .cm-foldMarker[data-fold="closed"]::before {
      transform: rotate(-45deg) translate(-0.75px, -0.75px);
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
      /* Takes back the mid-word breaking of the line, without which content too long to fit widens the editor instead of wrapping. */
      word-break: inherit;
    }

    ${MdStyles}

    aside.admonition {
      margin-bottom: 0;
    }

    /* Custom directives are rendered wrapped in a div, so their content is one level deeper. */
    & > *,
    & > div > * {
      margin: 0 !important;
    }
  }

  .cm-inline-mono,
  .cm-inline-mono *,
  .cm-line > *:has(> .cm-inline-mono) {
    font-family: monospace !important;
    line-height: 1.3em !important;
    font-size: 14px !important;
    /* An inline-block would be sized against the whole line instead of the space left in the row, so it would move down as a whole and break the text early. */
    display: inline !important;
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
  const {
    editorView,
    options,
    collab,
    userSettings,
    linter,
    text,
    headings,
    error,
    suggestMode,
    showComments,
    reviewItems,
    reviewSidebarExpanded,
    reviewSidebarWide,
  } = useContext(MystState);
  const logger = useContext(Logger);
  const editorMountpoint = useRef(null);
  const focusScroll = useRef(null);
  const lastTyped = useRef(null);
  const renderTimer = useRef(null);
  const savedCollaborationSelection = useRef(null);
  const activeCollaborationView = useRef(null);
  const destroyedViews = useRef(new WeakSet());

  const destroyEditorView = (view) => {
    if (!view || destroyedViews.current.has(view)) return;

    const activeView = activeCollaborationView.current;
    if (activeView?.view === view) {
      savedCollaborationSelection.current = saveCollaborationSelection(view, activeView.collabClient);
      activeCollaborationView.current = null;
    }
    view.destroy();
    destroyedViews.current.add(view);
  };

  // Track sidebar space and reset card expansion when the editor crosses 800px.
  useEffect(() => {
    const element = editorMountpoint.current;
    if (!element) return;

    let wasWide = null;
    const updateAvailability = () => {
      const width = element.getBoundingClientRect().width;
      if (width === 0) return;
      const isWide = width >= 800;
      if (wasWide === null ? !isWide : wasWide !== isWide) reviewSidebarExpanded.value = isWide;
      reviewSidebarWide.value = isWide;
      wasWide = isWide;
    };
    const ResizeObserverClass = element.ownerDocument.defaultView?.ResizeObserver;
    const observer = ResizeObserverClass ? new ResizeObserverClass(updateAvailability) : null;
    observer?.observe(element);
    element.ownerDocument.defaultView?.addEventListener("resize", updateAvailability);
    updateAvailability();

    return () => {
      observer?.disconnect();
      element.ownerDocument.defaultView?.removeEventListener("resize", updateAvailability);
      reviewSidebarWide.value = false;
    };
  }, []);

  useSignalEffect(() => {
    if (!options.collaboration.value.enabled || (collab.value.editorReady.value && !error.value)) return;
    destroyEditorView(editorView.value);

    const view = new EditorView({
      root: options.parent,
      state: EditorState.create({
        doc: text.text.peek(),
        extensions: ExtensionBuilder.basicSetup().useLanguage(options.language.value, options.transforms.value).useReadonly().create(),
      }),
      parent: editorMountpoint.current,
    });
    view.dom.style.opacity = "0.5";

    return () => {
      destroyEditorView(view);
    };
  });

  useSignalEffect(() => {
    const userExtensions = userSettings.value.filter((s) => s.enabled && s.extension).map((s) => s.extension);
    editorView.value?.dispatch?.({
      effects: userExtensionsCompartment.reconfigure(userExtensions),
    });
  });

  // Sync suggest mode with CodeMirror; keep only the main selection when enabling it.
  useSignalEffect(() => {
    const enabled = suggestMode.value;
    const reviewEnabled = options.collaboration.value.commentsEnabled;
    const view = editorView.value;

    if (!view || !reviewEnabled) return;

    view.dispatch({
      selection: enabled && view.state.selection.ranges.length > 1 ? view.state.selection.asSingle() : undefined,
      effects: [
        suggestionsCompartment.reconfigure(enabled ? suggestionsTypingExtension : []),
        multipleSelectionsCompartment.reconfigure(EditorState.allowMultipleSelections.of(!enabled)),
      ],
    });
  });

  // Show or hide review cards while keeping inline markup and review state intact.
  useSignalEffect(() => {
    const visible = showComments.value;
    const reviewEnabled = options.collaboration.value.commentsEnabled;
    const view = editorView.value;

    if (!view || !reviewEnabled) return;

    view.dispatch({ effects: showCommentsCompartment.reconfigure(showCommentsFacet.of(visible)) });
  });

  // Sync card expansion and sidebar space with CodeMirror's review layout.
  useSignalEffect(() => {
    const expanded = reviewSidebarExpanded.value;
    const wide = reviewSidebarWide.value;
    const reviewEnabled = options.collaboration.value.commentsEnabled;
    const view = editorView.value;
    if (!view || !reviewEnabled) return;
    view.dispatch({
      effects: [
        reviewSidebarCompartment.reconfigure(reviewSidebarFacet.of(expanded)),
        reviewSidebarWideCompartment.reconfigure(reviewSidebarWideFacet.of(wide)),
      ],
    });
  });

  useSignalEffect(() => {
    const collabClient = collab.value;
    if (options.collaboration.value.enabled) {
      if (!collabClient.ready.value || error.value) return;

      collabClient.initializeText(options.initialText.peek());
      if (!collabClient.editorReady.value) return;

      text.text.value = collabClient.ytext.toString();
      collabClient.ytext.observe((ev, tr) => {
        if (!tr.local) return;
        lastTyped.current = performance.now();
      });
    }

    // Seed the width facet before constructing the editor; the resize effect keeps it current.
    const reviewSidebarWideAtMount = editorMountpoint.current.getBoundingClientRect().width >= 800;
    reviewSidebarWide.value = reviewSidebarWideAtMount;
    if (!options.collaboration.value.commentsEnabled) reviewItems.value = new Map();

    const restoredSelection = options.collaboration.value.enabled
      ? restoreCollaborationSelection(savedCollaborationSelection.current, collabClient)
      : undefined;

    const startState = EditorState.create({
      root: options.parent,
      doc: options.collaboration.value.enabled ? collabClient.ytext.toString() : text.text.peek(),
      selection: restoredSelection,
      extensions: ExtensionBuilder.basicSetup()
        .useLanguage(options.language.value, options.transforms.value)
        .useLineNumbers()
        .useCompartment(userExtensionsCompartment, [])
        .useSpellcheck(options.spellcheckOpts.value)
        .if(options.collaboration.value.enabled, (b) => {
          return b.useCollaboration({ collabClient, editorView });
        })
        .if(!options.collaboration.value.enabled, (b) => b.useDefaultHistory())
        .addUpdateListener((update) => {
          const reviewEnabled = options.collaboration.peek().commentsEnabled;
          const reviewsChanged = reviewEnabled && update.transactions.some((tr) => tr.effects.some((effect) => effect.is(setReviewStateEffect)));
          if (!update.docChanged && !reviewsChanged) {
            return;
          }

          if (reviewEnabled) reviewItems.value = getAllReviewItems(update.state);

          // Apply every document change, even when a later review update replaces the timer.
          if (update.docChanged) text.shiftLineMap(update);
          clearTimeout(renderTimer.current);
          renderTimer.current = setTimeout(() => {
            const source = update.state.doc.toString();
            // Changing the text already triggers a preview render with the latest reviews.
            if (text.text.peek() === source) text.renderText(false);
            else text.text.value = source;
          });
        })
        .useFixFoldingScroll(focusScroll)
        .useMoveCursorAfterFold()
        .if(options.mode.value === "Both", (b) => b.useCursorIndicator({ text }))
        .if(options.syncScroll.value && options.mode.value === "Both", (b) => b.useSyncPreviewWithCursor({ text, lastTyped }))
        .if(options.yamlSchema.value, (b) => b.useYamlLSPExtension(options.yamlSchema.value, editorView, linter, options.language.value))
        .if(options.mode.value === "Inline", (b) => b.useInlinePreview(text, options, editorView))
        .useTrackHeadings(headings)
        .useExceptionSink(error)
        .useLogger(logger)
        .if(options.cmDarkTheme.value, (b) => b.useCmDarkTheme())
        .if(options.collaboration.value.commentsEnabled, (b) =>
          b
            .useReview(reviewItems, showComments.peek(), reviewSidebarExpanded.peek(), reviewSidebarWideAtMount, options.avatarCrossorigin)
            .useSuggestions(suggestMode.peek())
            .useTooltipSelection((view, selection) => {
              showComments.value = true;
              return addReviewComment(view, selection);
            }),
        )
        .create(),
    });
    const view = new EditorView({
      state: startState,
      parent: editorMountpoint.current,
    });
    if (options.collaboration.value.enabled) {
      activeCollaborationView.current = { view, collabClient };
    }
    editorView.value = view;
    window.myst_editor[options.id.value].main_editor = view;

    if (options.unfoldedHeadings.value != undefined) {
      skipAndFoldAll(view, options.unfoldedHeadings.value);
    }
    if (options.collapsibleHeadingMarker.value) {
      foldMarkedHeadings(view);
    }

    if (restoredSelection) {
      view.dispatch({ effects: EditorView.scrollIntoView(restoredSelection.main.head) });
      if (savedCollaborationSelection.current.focused) view.focus();
    }

    collab.value?.ycomments?.registerCodeMirror(view);

    /* We call updateMainCodeMirror to recreate spacing for comments. Calling this function immediately inside useSignalEffect
     * would cause an infinite loop (probably because the effect that it triggers interacts with some dependencies of this hook)
     * so instead we call it outside the current hook using setTimeout. */
    setTimeout(() => {
      collab.value?.ycomments?.updateMainCodeMirror();
    }, 0);

    return () => {
      clearTimeout(renderTimer.current);
      destroyEditorView(view);
    };
  });

  return (
    <CodeEditor
      className="myst-main-editor"
      ref={editorMountpoint}
      $mode={options.mode.value}
      $reviews={options.collaboration.value.commentsEnabled}
      id={`${options.id.value}-editor`}
    />
  );
};

export default CodeMirror;
export { CodeEditor };
