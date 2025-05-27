import { ensureSyntaxTree, syntaxTree } from "@codemirror/language";
import { EditorState, StateField } from "@codemirror/state";

export const trackHeadings = (headings) =>
  StateField.define({
    create(state) {
      const headingsFlat = getHeadingsFlat(state);
      headings.value = nestHeadings(headingsFlat);
    },
    update(_, tr) {
      if (!tr.docChanged) return;

      // Only update headings signal if headings changed
      const trees = [syntaxTree(tr.startState), syntaxTree(tr.state)];
      let headingChanged = false;
      for (const [i, tree] of trees.entries()) {
        tr.changes.iterChangedRanges((...range) => {
          if (headingChanged) return;
          tree.iterate({
            from: range[i == 0 ? 0 : 2],
            to: range[i == 0 ? 1 : 3],
            enter(nodeRef) {
              if (headingChanged) return false;
              headingChanged = nodeRef.name.startsWith("ATXHeading") || nodeRef.name.startsWith("SetextHeading");
              return !headingChanged;
            },
          });
        });
        if (headingChanged) break;
      }
      if (!headingChanged) return;

      const headingsFlat = getHeadingsFlat(tr.state);
      headings.value = nestHeadings(headingsFlat);
    },
  });

function getHeadingsFlat(/** @type {EditorState} */ state) {
  const headingsFlat = [];
  const maxParseTimeMs = 10_000;
  ensureSyntaxTree(state, state.doc.length, maxParseTimeMs).iterate({
    enter(nodeRef) {
      const isATX = nodeRef.name.startsWith("ATXHeading");
      if (!isATX && !nodeRef.name.startsWith("SetextHeading")) return true;

      const level = parseInt(nodeRef.name.replace("ATXHeading", "").replace("SetextHeading", ""));
      const fullText = state.sliceDoc(nodeRef.from, nodeRef.to);
      headingsFlat.push({
        level,
        text: isATX ? fullText.slice(level + 1) : fullText.split("\n")[0],
        pos: nodeRef.from,
      });
      return false;
    },
  });
  return headingsFlat;
}

function nestHeadings(headingsFlat) {
  const headingsNested = [];
  const levelMap = {};
  headingsFlat.forEach((h) => {
    const newItem = { ...h, children: [] };
    const parent = levelMap[h.level - 1];
    if (h.level === 1) {
      headingsNested.push(newItem);
    } else if (parent) {
      parent.children.push(newItem);
    } else {
      headingsNested.push(newItem);
    }
    levelMap[h.level] = newItem;
  });
  return headingsNested;
}
