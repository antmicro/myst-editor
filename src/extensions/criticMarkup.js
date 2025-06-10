import { Decoration, EditorView, WidgetType } from "@codemirror/view";
import acceptImg from "../icons/accept.svg?url";
import rejectImg from "../icons/reject.svg?url";
import { Annotation, EditorSelection, EditorState, Range, StateField } from "@codemirror/state";
import { yHistoryAnnotation, yRemoteAnnotation } from "./collab";
import { criticMarkers } from "../markdown/markdownCriticMarkup";
import { collabClientFacet } from ".";

const criticMetaDeco = Decoration.mark({ class: "cm-critic-meta" });
const criticInsDeco = Decoration.mark({ class: "cm-critic-ins" });
const criticDelDeco = Decoration.mark({ class: "cm-critic-del" });

/**
 * @param {string} text
 * @param {Range<Decoration>[]} widgets
 * @param {number} start
 * @returns {number}
 */
const parseSuggestion = (text, widgets, start) => {
  let pos = start;

  // Opening
  if (text.charCodeAt(pos) != 0x7b /* { */) return -1;
  pos++;
  if (!criticMarkers.includes(text.charCodeAt(pos))) return -1;
  const marker = text.charCodeAt(pos);
  pos++;
  if (text.charCodeAt(pos) != marker) return -1;
  pos++;

  // Inner content
  const innerStart = pos;
  while (pos < text.length) {
    if (text.charCodeAt(pos) == marker && text.charCodeAt(pos + 1) == marker && text.charCodeAt(pos + 2) == 0x7d /* } */) break;
    pos++;
  }
  const content = text.slice(innerStart, pos);
  // Reject if no replacement mark
  let markPos;
  if (marker == 0x7e /* ~ */) {
    if (!content.includes("~>")) return -1;
    markPos = content.indexOf("~>");
    const [del, ins] = content.split("~>");
    if (!del || !ins) return -1;
  } else if (content.length === 0) return -1;

  // Closing
  const closeStart = pos;
  if (text.charCodeAt(pos) != marker) return -1;
  pos++;
  if (text.charCodeAt(pos) != marker) return -1;
  pos++;
  if (text.charCodeAt(pos) != 0x7d /* } */) return -1;
  pos++;

  widgets.push(criticMetaDeco.range(start, innerStart));
  const buttonOpts = { range: { from: start, to: pos } };

  if (marker == 0x2d /* - */) {
    // Deletion
    widgets.push(criticDelDeco.range(innerStart, closeStart));
    buttonOpts.remove = content;
  } else if (marker == 0x2b /* + */) {
    // Addition
    widgets.push(criticInsDeco.range(innerStart, closeStart));
    buttonOpts.insert = content;
  } else {
    // Replacement
    const parts = content.split("~>");
    widgets.push(criticDelDeco.range(innerStart, innerStart + markPos));
    widgets.push(criticMetaDeco.range(innerStart + markPos, innerStart + markPos + 2));
    widgets.push(criticInsDeco.range(innerStart + markPos + 2, closeStart));
    buttonOpts.remove = parts[0];
    buttonOpts.insert = parts[1];
  }

  widgets.push(criticMetaDeco.range(closeStart, pos));
  widgets.push(Decoration.widget({ widget: new CriticButtonsWidget(buttonOpts), side: 1 }).range(pos));

  return pos;
};

const processSuggestions = (/** @type {EditorState} */ state) => {
  const widgets = [];
  const suggestionRanges = [];

  const text = state.doc.toString();
  let pos = 0;
  while (pos < text.length) {
    const start = pos;
    const result = parseSuggestion(text, widgets, pos);
    if (result != -1) {
      pos = result;
      suggestionRanges.push({ from: start, to: pos });
    } else {
      pos = pos + 1;
    }
  }

  return { decorations: Decoration.set(widgets), suggestionRanges };
};

export const criticMarkup = StateField.define({
  create(state) {
    return processSuggestions(state);
  },
  update(prev, tr) {
    if (!tr.docChanged) return prev;
    return processSuggestions(tr.state);
  },
  provide(f) {
    return EditorView.decorations.from(f, (v) => v.decorations);
  },
});

export const criticAnnotation = Annotation.define();

class CriticButtonsWidget extends WidgetType {
  constructor({ insert, remove, range }) {
    super();
    this.insert = insert;
    this.remove = remove;
    this.range = range;
  }

  toDOM(/** @type {EditorView} */ view) {
    const collab = view.state.facet(collabClientFacet)[0];
    const container = document.createElement("div");
    container.className = "cm-critic-widget";

    const acceptBtn = document.createElement("button");
    acceptBtn.title = "Accept suggestion";
    const acceptIcon = document.createElement("img");
    acceptIcon.src = acceptImg;
    acceptBtn.appendChild(acceptIcon);
    acceptBtn.addEventListener("mousedown", (ev) => {
      ev.preventDefault();
      const fromLine = view.state.doc.lineAt(this.range.from).number;
      const toLine = view.state.doc.lineAt(this.range.to).number;
      const id = crypto.randomUUID();
      collab?.storeSuggestion?.({ insert: this.insert, remove: this.remove, action: "accept", fromLine, toLine, id });
      view.dispatch({ changes: { from: this.range.from, to: this.range.to, insert: this.insert ?? "" }, annotations: criticAnnotation.of(id) });
    });

    const rejectBtn = document.createElement("button");
    rejectBtn.title = "Reject suggestion";
    const rejectIcon = document.createElement("img");
    rejectIcon.src = rejectImg;
    rejectBtn.appendChild(rejectIcon);
    rejectBtn.addEventListener("mousedown", (ev) => {
      ev.preventDefault();
      const fromLine = view.state.doc.lineAt(this.range.from).number;
      const toLine = view.state.doc.lineAt(this.range.to).number;
      const id = crypto.randomUUID();
      collab?.storeSuggestion?.({ insert: this.insert, remove: this.remove, action: "reject", fromLine, toLine, id });
      view.dispatch({ changes: { from: this.range.from, to: this.range.to, insert: this.remove ?? "" }, annotations: criticAnnotation.of(id) });
    });

    container.appendChild(acceptBtn);
    container.appendChild(rejectBtn);
    return container;
  }
}

const criticRegexp = /\{[~+-]{2}((?:.|\n)+)[~+-]{2}\}/g;

export const suggestMode = EditorState.transactionFilter.of((tr) => {
  if (tr.annotation(yRemoteAnnotation) || !tr.docChanged) return tr;
  const changes = [];
  const selectRanges = [];

  tr.changes.iterChanges((from, to, _, __, inserted) => {
    const { suggestionRanges } = tr.startState.field(criticMarkup);
    let inCriticMarkup = suggestionRanges.some((r) => from >= r.from && to <= r.to);
    if (criticRegexp.test(inserted)) {
      inCriticMarkup = true;
    }

    const offset = changes.reduce((acc, ch) => acc + ch.insert.length - (ch.to - ch.from), 0);
    const addCursor = (pos) => selectRanges.push(EditorSelection.range(offset + pos, offset + pos));

    if (inCriticMarkup) {
      changes.push({ from, to, insert: inserted.toString() });
      addCursor(from + inserted.length);
      return;
    }

    if (from === to) {
      changes.push({ from, to, insert: `{++${inserted.toString()}++}` });
      addCursor(from + 3 + inserted.length);
      return;
    }

    if (inserted.length === 0) {
      const removed = tr.startState.sliceDoc(from, to);
      changes.push({ from, to, insert: `{--${removed}--}` });
      addCursor(from + 3 + removed.length);
      return;
    }

    const replacement = `{~~${tr.startState.sliceDoc(from, to)}~>${inserted.toString()}~~}`;
    changes.push({ from, to, insert: replacement });
    addCursor(from + replacement.length - 3);
  });

  return { ...tr, changes, selection: EditorSelection.create(selectRanges) };
});

export const criticHistory = StateField.define({
  create() {
    return { undoStack: [], redoStack: [] };
  },
  update(prev, tr) {
    if (!tr.docChanged) return prev;

    const next = { ...prev };
    const criticId = tr.annotation(criticAnnotation);
    const historyChange = tr.annotation(yHistoryAnnotation);
    const collab = tr.state.facet(collabClientFacet)[0];
    let from, insert, remove;
    tr.changes.iterChanges((fromA, toA, __, ___, inserted) => {
      from = fromA;
      insert = inserted.toString();
      remove = tr.startState.sliceDoc(fromA, toA).toString();
    });

    // Map current suggestions to new positions
    next.undoStack.forEach((s) => (s.from = tr.changes.mapPos(s.from)));
    next.redoStack.forEach((s) => (s.from = tr.changes.mapPos(s.from)));

    // Save newly resolved suggestion
    if (criticId) {
      next.undoStack.push({ id: criticId, from });
      return next;
    }

    if (!collab) return next;
    const insertMatch = insert.matchAll(criticRegexp).next()?.value;
    const removeMatch = remove.matchAll(criticRegexp).next()?.value;

    // Undo
    if (historyChange && insertMatch) {
      const pos = from + insertMatch.index;
      const stackItem = next.undoStack.find((s) => s.from === pos);
      if (!stackItem) return next;
      const suggestion = collab.getSuggestion(stackItem.id);
      if (!suggestion) return next;

      collab.removeSuggestion(stackItem.id);
      suggestion.from = pos;
      next.undoStack = next.undoStack.filter((s) => s.id !== stackItem.id);
      next.redoStack.push(suggestion);
    }

    // Redo
    if (historyChange && removeMatch) {
      const pos = from + removeMatch.index;
      const suggestion = next.redoStack.find((s) => s.from === pos);
      if (!suggestion) return next;

      collab.storeSuggestion(suggestion);
      next.redoStack = next.redoStack.filter((s) => s.id !== suggestion.id);
      next.undoStack.push({ id: suggestion.id, from: suggestion.from });
    }

    return next;
  },
});
