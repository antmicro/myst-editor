import { html } from "htm/preact";
import { useRef, useEffect, useState, useCallback } from 'preact/hooks'
import { styled } from 'styled-components';
import { EditorView } from "codemirror";
import { EditorState } from "@codemirror/state";
import { ExtensionBuilder } from "../extensions";
import { YComments } from "../comments/ycomments";

const YCommentWrapper = styled.div`
    position:absolute; 
    top:${props => props.top + 20}px; 
    left: 75px;
    z-index: 3; 
    right: 0px;
    background-color: var(--gray-500);

    .cm-editor {
      background-color: var(--gray-500);
    }

    .cm-ySelectionInfo {
      z-index: 1004;
    }

    .cm-gutter {
        background-color: var(--gray-500);
    }
`
/** @param {{ ycomments: YComments }} */
const YComment = ({ ycomments, commentId }) => {
  let cmref = useRef(null);

  const updateHeight = useCallback(
    (update) => update.heightChanged && ycomments.updateHeight(commentId, cmref.current.clientHeight),
    [commentId]
  )

  useEffect(() => {
    if (!cmref.current) {
      return;
    }
    const ytext = ycomments.getTextForComment(commentId);
    const view = new EditorView({
      state: EditorState.create({
        doc: ytext.toString(),
        extensions: ExtensionBuilder.minimalSetup()
          .useCollaboration({ ytext, provider: ycomments.provider })
          .useDefaultHistory()
          .addUpdateListener(updateHeight)
          .create()
      }),
      parent: cmref.current
    });
    view.focus();

    return () => {
      view.destroy();
    };
  }, [cmref])

  return html`
    <${YCommentWrapper} top=${ycomments.display().offset(commentId)}>
        <div style="display: ${ycomments.display().isShown(commentId) ? 'block' : 'none'}" >
          <div ref=${cmref}></div>
        </div>
    <//>`
}

/** @param {{ ycomments: YComments }} */
export const YCommentsParent = ({ ycomments }) => {
  let createWidget = ({ commentId }) => html`<${YComment} ...${{key: commentId, commentId, ycomments}}/>`
  let createWidgets = () => ycomments.iterComments().map(createWidget)
  let [widgets, setWidgets] = useState(createWidgets());

  ycomments.display()
    .onUpdate(() => setWidgets(createWidgets()));

  return html`${widgets}`
}