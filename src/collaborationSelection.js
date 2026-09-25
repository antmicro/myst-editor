import { EditorSelection } from "@codemirror/state";
import * as Y from "yjs";

export const saveCollaborationSelection = (view, collabClient) => ({
  ydoc: collabClient.ydoc,
  focused: view.hasFocus,
  mainIndex: view.state.selection.mainIndex,
  ranges: view.state.selection.ranges.map((range) => ({
    anchor: Y.createRelativePositionFromTypeIndex(collabClient.ytext, range.anchor, range.assoc),
    head: Y.createRelativePositionFromTypeIndex(collabClient.ytext, range.head, range.assoc),
    fallbackAnchor: range.anchor,
    fallbackHead: range.head,
  })),
});

export const restoreCollaborationSelection = (savedSelection, collabClient) => {
  if (!savedSelection || savedSelection.ydoc !== collabClient.ydoc) return;

  const resolvePosition = (relativePosition, fallbackPosition) => {
    const absolutePosition = Y.createAbsolutePositionFromRelativePosition(relativePosition, collabClient.ydoc);
    const position = absolutePosition?.type === collabClient.ytext ? absolutePosition.index : fallbackPosition;
    return Math.min(position, collabClient.ytext.length);
  };
  const ranges = savedSelection.ranges.map(({ anchor, head, fallbackAnchor, fallbackHead }) =>
    EditorSelection.range(resolvePosition(anchor, fallbackAnchor), resolvePosition(head, fallbackHead)),
  );
  return EditorSelection.create(ranges, savedSelection.mainIndex);
};
