import { syntaxTree } from "@codemirror/language";
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
              headingChanged = nodeRef.name.startsWith("ATXHeading");
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
  return [...state.doc.toString().matchAll(/^(#{1,6}) (.+)/gm)].map((match) => ({
    level: match[1].length,
    text: match[2],
    pos: match.index,
  }));
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
