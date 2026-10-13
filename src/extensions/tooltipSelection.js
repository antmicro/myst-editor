import { StateEffect, StateField } from "@codemirror/state";
import { EditorView, showTooltip } from "@codemirror/view";
import commentIcon from "../icons/review-comment.svg?url";

const setEditorFocused = StateEffect.define();

const getCommentSelection = (state) => {
  const anchors = state.selection.ranges.filter((range) => !range.empty).map(({ from, to }) => ({ from, to }));
  if (anchors.length === 0) return null;

  return { anchors, range: state.selection.main.empty ? anchors[anchors.length - 1] : state.selection.main };
};

const createTooltip = (state, onSelect) => {
  const selection = getCommentSelection(state);
  if (!selection) return null;

  return {
    pos: selection.range.from,
    end: selection.range.to,
    above: true,
    clip: false,
    arrow: false,
    create(view) {
      const button = view.dom.ownerDocument.createElement("button");
      const icon = view.dom.ownerDocument.createElement("img");

      button.type = "button";
      button.className = "cm-tooltip-selection-button";
      button.title = "Add comment";
      button.setAttribute("aria-label", "Add comment");
      button.addEventListener("mousedown", (event) => event.preventDefault());
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        const current = getCommentSelection(view.state);
        if (current) onSelect?.(view, { anchors: current.anchors, head: current.range.to });
      });

      icon.src = commentIcon;
      icon.alt = "";
      icon.draggable = false;
      button.appendChild(icon);

      return {
        dom: button,
        offset: { x: 0, y: 4 },
      };
    },
  };
};

const tooltipSelectionTheme = EditorView.baseTheme({
  ".cm-tooltip.cm-tooltip-selection-button": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "30px",
    height: "30px",
    padding: "4px",
    boxSizing: "border-box",
    backgroundColor: "var(--panel-bg)",
    border: "1px solid var(--border)",
    borderRadius: "var(--border-radius)",
    boxShadow: "0 2px 8px var(--box-shadow)",
    cursor: "pointer",
  },
  ".cm-tooltip-selection-button:hover": {
    backgroundColor: "var(--button-bg-hover)",
  },
  ".cm-tooltip-selection-button img": {
    display: "block",
    width: "18px",
    height: "18px",
    filter: "invert(var(--icon-invert))",
    pointerEvents: "none",
  },
});

export const tooltipSelection = (onSelect) => {
  const tooltipSelectionState = StateField.define({
    create() {
      return { focused: false, tooltip: null };
    },
    update(value, transaction) {
      let focused = value.focused;
      for (const effect of transaction.effects) {
        if (effect.is(setEditorFocused)) focused = effect.value;
      }

      if (focused === value.focused && !transaction.selection && !transaction.docChanged) return value;

      return {
        focused,
        tooltip: focused ? createTooltip(transaction.state, onSelect) : null,
      };
    },
    provide: (field) => showTooltip.from(field, ({ tooltip }) => tooltip),
  });

  return [tooltipSelectionState, EditorView.focusChangeEffect.of((_state, focused) => setEditorFocused.of(focused)), tooltipSelectionTheme];
};
