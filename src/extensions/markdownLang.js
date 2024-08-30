// Taken from https://github.com/codemirror/lang-markdown/blob/main/src/markdown.ts
import { parser } from "@lezer/markdown";
import { NodeProp } from "@lezer/common";
import { foldNodeProp, indentNodeProp, languageDataProp, defineLanguageFacet, Language, foldService, syntaxTree } from "@codemirror/language";

const data = defineLanguageFacet({ commentTokens: { block: { open: "<!--", close: "-->" } } });

const headingProp = new NodeProp();

// This is here to customize the markdown parser used by Codemirror, in particular the folding nodes.
const commonmark = parser.configure({
  props: [
    foldNodeProp.add((type) => {
      return !type.is("Block") || type.is("Document") || isHeading(type) != null
        ? undefined
        : (tree, state) => {
            let from = state.doc.lineAt(tree.from).to;
            let to = tree.to;
            if (state.doc.lineAt(from).text.startsWith("``")) {
              // leave last line closing the code block unfolded
              to = state.doc.line(state.doc.lineAt(tree.to).number - 1).to;
            }
            return { from, to };
          };
    }),
    headingProp.add(isHeading),
    indentNodeProp.add({
      Document: () => null,
    }),
    languageDataProp.add({
      Document: data,
    }),
  ],
});

function isHeading(type) {
  let match = /^(?:ATX|Setext)Heading(\d)$/.exec(type.name);
  return match ? +match[1] : undefined;
}

export const headerIndent = foldService.of((state, start, end) => {
  for (let node = syntaxTree(state).resolveInner(end, -1); node; node = node.parent) {
    if (node.from < start) break;
    let heading = node.type.prop(headingProp);
    if (heading == null) continue;
    let upto = findSectionEnd(node, heading);
    if (upto > end) return { from: end, to: upto };
  }
  return null;
});

function findSectionEnd(headerNode, level) {
  let last = headerNode;
  for (;;) {
    let next = last.nextSibling,
      heading;
    if (!next || ((heading = isHeading(next.type)) != null && heading <= level)) break;
    last = next;
  }
  return last.to;
}

export const customCommonMark = new Language(data, commonmark, [headerIndent], "markdown");
