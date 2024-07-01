import { html } from "htm/preact";
import { useRef, useEffect, useState, useCallback, useMemo } from "preact/hooks";
import { styled } from "styled-components";
import { EditorView } from "codemirror";
import { EditorState } from "@codemirror/state";
import { ExtensionBuilder } from "../extensions";
import { YComments } from "../comments/ycomments";
import commentIcon from "../icons/comment.svg?url";
import trashcanIcon from "../icons/trashcan.svg?url";
import resolveIcon from "../icons/resolve.svg?url";

const YCommentWrapper = styled.div`
  position: absolute;
  top: ${(props) => props.top + 20}px;
  left: ${(props) => props.left + 19}px;

  z-index: 3;
  right: 0px;
  background-color: var(--gray-500);

  ${(props) => (props.fade ? "opacity: 0.4;" : "")}

  .cm-editor {
    background-color: var(--gray-500);
  }

  .cm-ySelectionInfo {
    z-index: 1004;
  }

  .cm-gutters {
    border-width: 0;
  }

  .cm-content {
    padding: 0px;
  }
  .cm-line {
    line-height: 1.5em;
  }

  .cm-scroller {
    overflow-x: unset;
  }

  .author-avatar {
    border-radius: 50%;
    height: 24px;
    width: 24px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 4px;
    position: absolute;
    transform: translateX(-30px);
  }
`;
/** @param {{ ycomments: YComments }} */
const YComment = ({ ycomments, commentId }) => {
  let cmref = useRef(null);

  const lineAuthors = useMemo(() => ycomments.lineAuthors(commentId), [commentId]);

  const updateHeight = useCallback((update) => update.heightChanged && ycomments.updateHeight(commentId, cmref.current.clientHeight), [commentId]);

  const parentHeight = ycomments.parentLineHeight(commentId) + 3.8;

  useEffect(() => {
    if (!cmref.current) {
      return;
    }
    const ytext = ycomments.getTextForComment(commentId);
    const view = new EditorView({
      state: EditorState.create({
        doc: ytext.toString(),
        extensions: ExtensionBuilder.minimalSetup()
          .disable(["Mod-z", "Mod-y", "Mod-Z"])
          .useCollaboration({ ytext, provider: ycomments.provider })
          .useDefaultHistory()
          .addUpdateListener(updateHeight)
          .showCommentLineAuthors(lineAuthors)
          .create(),
      }),
      parent: cmref.current,
    });

    if (ycomments.newLocalComment) {
      view.focus();
      ycomments.newLocalComment = false;
    }

    return () => {
      view.destroy();
    };
  }, [cmref]);

  const popupIcon = useRef(null);
  useEffect(() => {
    if (!popupIcon.current) return;

    popupIcon.current.onmouseup = () => {
      ycomments.display().switchVisibility(commentId);
      ycomments.updateMainCodeMirror();
    };

    popupIcon.current.ondragstart = () => {
      ycomments.draggedComment = commentId;
      ycomments.display().update();
    };

    popupIcon.current.ondragend = () => {
      ycomments.draggedComment = null;
      ycomments.display().update();
    };
  }, [popupIcon.current, ycomments.commentWithPopup]);

  return html` <${YCommentWrapper}
    left=${ycomments.marginLeft()}
    top=${ycomments.display().offset(commentId)}
    fade=${ycomments.draggedComment == commentId}
  >
    <div style="position:relative">
      ${ycomments.commentWithPopup == commentId &&
      html`
        <${YCommentPopup}
          left=${ycomments.marginLeft()}
          shift=${parentHeight}
          onMouseLeave=${() => {
            ycomments.commentWithPopup = null;
            ycomments.updateMainCodeMirror();
          }}
        >
          <img class="comment-icon" ref=${popupIcon} src=${commentIcon} />

          <svg width="3" height="22" viewBox="0 10 2 19" fill="none">
            <path d="M1 1V25" stroke="#DDDDDD" stroke-width="0.75" stroke-linecap="round" />
          </svg>

          <${PopupButton} icon=${trashcanIcon} bgOnHover=${"#e7473c15"} text="DELETE" onClick=${() => ycomments.deleteComment(commentId)} />
          <${PopupButton} icon=${resolveIcon} bgOnHover=${"#AAE17320"} text="RESOLVE" onClick=${() => ycomments.resolveComment(commentId)} />
        <//>
      `}

      <div style="display: ${ycomments.display().isShown(commentId) ? "block" : "none"}" ref=${cmref}></div>
    </div>
  <//>`;
};

const YCommentPopup = styled.div`
  width: fit-content;
  height: 25px;
  border-radius: 2px;
  position: absolute;
  background-color: white;
  border: 1px solid var(--icon-border);
  z-index: 30000000;
  left: ${(props) => -props.left - 13}px;
  top: ${(props) => -props.shift}px;
  box-shadow: 0 0 3px #ccc;
  box-sizing: content-box;

  .comment-icon {
    height: 20px;
    padding: 3px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .resolve-icon {
    height: 20px;
    padding: 3px;
  }

  svg {
    box-sizing: content-box;
  }
`;

const PopupButtonWrapper = styled.div`
  display: inline-flex;
  cursor: pointer;
  padding-left: 5px;
  padding-right: 5px;

  &:hover {
    background-color: ${(props) => props.bgOnHover};
  }

  img {
    height: 20px;
  }

  .delete-btn,
  .resolve-btn {
    color: #e7473c;
    line-height: 25px;
    font-size: 10px;
    margin-left: 5px;
    margin-right: 5px;
    box-sizing: content-box;
  }

  .delete-icon,
  resolve-icon {
    width: 11px;
    margin-top: 2px;
    margin-left: 5px;
    box-sizing: content-box;
  }
`;

const PopupButton = ({ icon, onClick, text, bgOnHover }) => {
  return html`
    <${PopupButtonWrapper} bgOnHover=${bgOnHover} onClick=${onClick}>
      <img class="resolve-icon" src=${icon} />
      <span class="resolve-btn"> ${text} </span>
    <//>
  `;
};

/** @param {{ ycomments: YComments }} */
export const YCommentsParent = ({ ycomments }) => {
  let createWidget = ({ commentId }) => html`<${YComment} ...${{ key: commentId, commentId, ycomments }} />`;
  let createWidgets = () => ycomments.iterComments().map(createWidget);
  let [widgets, setWidgets] = useState(createWidgets());

  ycomments.display().onUpdate(() => setWidgets(createWidgets()));

  return html` ${widgets} `;
};
