import { Compartment, EditorSelection, StateEffect } from "@codemirror/state";
import { Decoration, EditorView, ViewUpdate, WidgetType } from "@codemirror/view";
import { YComments } from "../comments/ycomments";
import { lineAuthorsEffect } from "../comments/lineAuthors";
import styled from "styled-components";
import DefaultButton from "../components/Buttons";

export const suggestionEffect = StateEffect.define();

export const suggestionCompartment = new Compartment();

/** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions#escaping */
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function parseCommentLine({ commentId, text, color }) {
  const suggestions = [];

  while (text !== "") {
    text = text.slice(text.indexOf("|") + 1);
    const endIdx = text.indexOf("|");
    if (endIdx === -1) break;

    let targetStr = text.slice(0, endIdx);
    let replacement = "";
    if (targetStr.includes("->")) {
      replacement = targetStr.slice(targetStr.indexOf("->") + 2).trimStart();
      targetStr = targetStr.slice(0, targetStr.indexOf("->")).trimEnd();
    }

    if (targetStr.length !== 0) {
      suggestions.push({
        targetRegexSrc: `(?<=^|[ \\t\\r\\.]|\\W)${escapeRegExp(targetStr)}(?=$|[\\s\\.]|\\W)`,
        targetRegexFlags: "gm",
        id: commentId,
        cssClass: "cm-suggestion",
        replacement,
        color,
      });
    }

    text = text.slice(endIdx + 1);
  }

  return suggestions;
}

export function modifyHighlight({ builder, from, match, hl, markParams, view }) {
  if (hl.color) {
    markParams.attributes = { style: `color: ${hl.color}` };
  }

  if (hl.replacement) {
    markParams.class += " replaced";
    return () => {
      builder.add(
        from + match.index + match[0].length,
        from + match.index + match[0].length,
        Decoration.widget({
          widget: new Replacement({
            text: hl.replacement,
            color: hl.color,
            from: from + match.index,
            to: from + match.index + match[0].length,
            view,
          }),
        }),
      );
    };
  }
}

class Replacement extends WidgetType {
  constructor({ text, color, from, to, view }) {
    super();
    this.text = text;
    this.color = color;
    this.from = from;
    this.to = to;
    this.view = view;
  }

  toDOM() {
    const replacementText = document.createElement("span");
    replacementText.innerText = this.text;
    replacementText.style.color = this.color;
    replacementText.classList.add("cm-replacement");
    replacementText.title = "Accept suggestion";

    replacementText.addEventListener("mouseup", () => {
      this.view.dispatch({
        changes: {
          from: this.from,
          to: this.to,
          insert: this.text,
        },
      });
    });

    return replacementText;
  }
}

export function suggestionPopup(/** @type {ViewUpdate} */ update, /** @type {YComments} */ ycomments, editorMountpoint) {
  const addSuggestionBtn = editorMountpoint.current.querySelector(".myst-add-suggestion");
  const mainSel = update.state.selection.main;
  const noSelection = mainSel.head === mainSel.anchor;
  const multilineSelection = update.state.doc.lineAt(mainSel.head).number !== update.state.doc.lineAt(mainSel.anchor).number;
  if (!update.selectionSet || noSelection || multilineSelection) {
    addSuggestionBtn.style.display = "none";
    return;
  }
  const contentDOM = update.view.dom.getBoundingClientRect();

  const startPos = update.view.coordsAtPos(mainSel.from);
  const endPos = update.view.coordsAtPos(mainSel.to);
  const middle = (startPos.left + endPos.left) / 2;
  addSuggestionBtn.style.top = `${startPos.top - contentDOM.top - update.view.defaultLineHeight - 12}px`;
  addSuggestionBtn.style.left = `${middle - contentDOM.left}px`;
  addSuggestionBtn.style.display = "block";

  addSuggestionBtn.onmousedown = async (ev) => {
    // This is to ensure the button does not take focus from CodeMirror
    ev.preventDefault();
    const line = update.state.doc.lineAt(mainSel.from);

    let suggestionFrom = mainSel.from;
    const wordBoundaryRegex = /[ \t\r\W]/;
    let pos;
    for (pos = suggestionFrom - 1; pos >= line.from; pos--) {
      if (wordBoundaryRegex.test(update.state.doc.sliceString(pos, pos + 1))) {
        break;
      }
    }
    suggestionFrom = pos + 1;

    let suggestionTo = mainSel.to;
    for (pos = suggestionTo; pos <= line.to; pos++) {
      if (wordBoundaryRegex.test(update.state.doc.sliceString(pos, pos + 1))) {
        break;
      }
    }
    suggestionTo = pos;

    let suggestionText = `|${update.state.doc.sliceString(suggestionFrom, suggestionTo)} -> |`;
    let id = ycomments.findCommentOn(line.number)?.commentId;
    if (id) {
      suggestionText = "\n" + suggestionText;
    } else {
      id = ycomments.newComment(line.number);
    }

    ycomments.ydoc.transact(() => {
      const text = ycomments.getTextForComment(id);
      text.insert(text.length, suggestionText);
      const authors = ycomments.lineAuthors(id);
      authors.mark(authors.lineAuthors.length);
    }, ycomments.provider.awareness.clientID);

    ycomments.display().setVisibility(id, true);
    ycomments.updateMainCodeMirror();

    /** @type {EditorView} */
    const commentView = await ycomments.getEditorForComment(id);
    commentView.focus();
    commentView.dispatch({
      selection: EditorSelection.create([EditorSelection.range(commentView.state.doc.length - 1, commentView.state.doc.length - 1)]),
      effects: lineAuthorsEffect.of(null),
    });
  };
}

export const AddSuggestionBtn = styled(DefaultButton)`
  position: absolute;
  z-index: 10;
  display: none;
  margin: 0 !important;
  width: 40px;
  display: block;
  align-items: center;
  justify-content: center;
  padding: 0 !important;

  &:hover {
    background-color: var(--gray-400);
  }

  img {
    filter: invert(100%);
  }

  &::after {
    content: "";
    position: absolute;
    display: block;
    transform: translate(10px, 8px);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid var(--icon-border);
  }
`;
