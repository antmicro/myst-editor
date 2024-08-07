import { Compartment, StateEffect } from "@codemirror/state";
import { Decoration, WidgetType } from "@codemirror/view";

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
        targetRegexSrc: `(?<=^|[ \\t\\r\\.]|\\b)${escapeRegExp(targetStr)}(?=$|[\\s\\.]|\\b)`,
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
