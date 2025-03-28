// https://github.com/lezer-parser/markdown/blob/main/src/markdown.ts
import { tags } from "@lezer/highlight";
import { Element, Table } from "@lezer/markdown";

const Type = {
  FencedCode: 3,
  CodeMark: 39,
  CodeText: 40,
  CodeInfo: 41,
};

export const colonFencedCodeParser = {
  /** @type {import("@lezer/markdown").BlockParser[]} */
  parseBlock: [
    {
      name: "ColonFenceCode",
      parse(cx, line) {
        let fenceEnd = isFencedCode(line);
        if (fenceEnd < 0) return false;
        let from = cx.lineStart + line.pos,
          ch = line.next,
          len = fenceEnd - line.pos;
        let infoFrom = line.skipSpace(fenceEnd),
          infoTo = skipSpaceBack(line.text, line.text.length, infoFrom);
        let marks = [elt(Type.CodeMark, from, from + len)];
        if (infoFrom < infoTo) marks.push(elt(Type.CodeInfo, cx.lineStart + infoFrom, cx.lineStart + infoTo));

        for (let first = true; cx.nextLine() && line.depth >= cx.stack.length; first = false) {
          let i = line.pos;
          if (line.indent - line.baseIndent < 4) while (i < line.text.length && line.text.charCodeAt(i) == ch) i++;
          if (i - line.pos >= len && line.skipSpace(i) == line.text.length) {
            for (let m of line.markers) marks.push(m);
            marks.push(elt(Type.CodeMark, cx.lineStart + line.pos, cx.lineStart + i));
            cx.nextLine();
            break;
          } else {
            if (!first) addCodeText(marks, cx.lineStart - 1, cx.lineStart);
            for (let m of line.markers) marks.push(m);
            let textStart = cx.lineStart + line.basePos,
              textEnd = cx.lineStart + line.text.length;
            if (textStart < textEnd) addCodeText(marks, textStart, textEnd);
          }
        }
        cx.addNode(cx.buffer.writeElements(marks, -from).finish(Type.FencedCode, cx.prevLineEnd() - from), from);
        return true;
      },
    },
  ],
};

function isFencedCode(line) {
  if (line.next != 58 /* ':' */) return -1;
  let pos = line.pos + 1;
  while (pos < line.text.length && line.text.charCodeAt(pos) == line.next) pos++;
  if (pos < line.pos + 3) return -1;
  if (line.next == 96) for (let i = pos; i < line.text.length; i++) if (line.text.charCodeAt(i) == 96) return -1;
  return pos;
}

function space(ch) {
  return ch == 32 || ch == 9 || ch == 10 || ch == 13;
}

function skipSpaceBack(line, i, to) {
  while (i > to && space(line.charCodeAt(i - 1))) i--;
  return i;
}

function elt(type, from, to, children) {
  return new Element(type, from, to, children);
}

function addCodeText(marks, from, to) {
  let last = marks.length - 1;
  if (last >= 0 && marks[last].to == from && marks[last].type == Type.CodeText) marks[last].to = to;
  else marks.push(elt(Type.CodeText, from, to));
}

export const tableParser = {
  defineNodes: [
    { name: "Table", block: true },
    { name: "TableHeader", style: { "TableHeader/...": tags.monospace } },
    "TableRow",
    { name: "TableCell", style: tags.monospace },
    { name: "TableDelimiter", style: tags.monospace },
  ],
  parseBlock: Table.parseBlock,
};

export const roleParser = {
  /** @type {import("@lezer/markdown").NodeSpec[]} */
  defineNodes: [{ name: "Role", style: tags.monospace }],
  /** @type {import("@lezer/markdown").InlineParser[]} */
  parseInline: [
    {
      parse(cx, next, start) {
        if (next != 123 /* '{' */ || (start && cx.char(start - 1) == 123)) return -1;
        let pos = start + 1;
        while (pos < cx.end && cx.char(pos) != 125 /* '}' */) pos++;
        if (pos == cx.end || cx.char(pos + 1) != 96 /* '`' */) return -1;
        pos += 2;
        while (pos < cx.end && cx.char(pos) != 96 /* '`' */) pos++;
        if (cx.char(pos) != 96) return -1;

        return cx.addElement(cx.elt("Role", start, pos + 1));
      },
      before: "InlineCode",
    },
  ],
};
