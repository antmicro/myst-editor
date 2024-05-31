import { commentStateEffect } from "./textareaWidget";
import { commentMarker } from "../comments/sidebarWidget";
import { ycommentsFacet } from "./state";
import { EditorView } from "@codemirror/view";

const commentExtension = (ycomments) => [
  ycommentsFacet.of(ycomments),
  commentStateEffect,
  commentMarker,
  EditorView.updateListener.of((update) => ycomments.syncComments(update)),
];

export { commentExtension };
