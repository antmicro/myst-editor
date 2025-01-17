import { useRef, useEffect, useState, useCallback, useMemo, useContext } from "preact/hooks";
import { styled } from "styled-components";
import { EditorView } from "codemirror";
import { EditorState } from "@codemirror/state";
import { ExtensionBuilder } from "../extensions";
import { YComments } from "../comments/ycomments";
import commentIcon from "../icons/comment.svg?url";
import trashcanIcon from "../icons/trashcan.svg?url";
import resolveIcon from "../icons/resolve.svg?url";
import { MystState } from "../mystState";

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

  .cm-yLineSelection {
    margin: 0 !important;
    padding: 0 2px 0 6px;
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

  .cm-comment-author-colored {
    &::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: var(--bg);
      z-index: -3;
    }
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

const YComment = ({ commentId }) => {
  const { options, collab } = useContext(MystState);
  let cmref = useRef(null);

  const lineAuthors = useMemo(() => collab.value.ycomments.lineAuthors(commentId), [commentId]);

  const updateHeight = useCallback(
    (update) =>
      update.heightChanged && update.view.requestMeasure({ read: (view) => collab.value.ycomments.updateHeight(commentId, view.dom.clientHeight) }),
    [commentId],
  );

  const parentHeight = collab.value.ycomments.parentLineHeight(commentId) - 1;

  useEffect(() => {
    if (!cmref.current) {
      return;
    }
    const ytext = collab.value.ycomments.getTextForComment(commentId);
    const view = new EditorView({
      state: EditorState.create({
        doc: ytext.toString(),
        extensions: ExtensionBuilder.minimalSetup()
          .disable(["Mod-z", "Mod-y", "Mod-Z"])
          .useCollaboration({ collabClient: { ytext, provider: collab.value.provider } })
          .useDefaultHistory()
          .addUpdateListener(updateHeight)
          .showCommentLineAuthors(lineAuthors)
          .useRemoveSelectionOnBlur()
          .create(),
      }),
      parent: cmref.current,
    });

    collab.value.ycomments.syncSuggestions(commentId);
    collab.value.ycomments.registerCommentEditor(commentId, view);
    ytext.observe((_, tr) => {
      if (!tr.local) return;
      collab.value.ycomments.syncSuggestions(commentId);
      collab.value.ycomments.provider.awareness.setLocalStateField("lastChanged", Date.now());
    });

    if (collab.value.ycomments.newLocalComment) {
      view.focus();
      collab.value.ycomments.newLocalComment = false;
    }

    return () => {
      view.destroy();
    };
  }, [cmref]);

  return (
    <YCommentWrapper
      left={collab.value.ycomments.marginLeft()}
      top={collab.value.ycomments.display().comments.value[commentId]?.top}
      fade={collab.value.ycomments.draggedComment.value == commentId}
    >
      <div class="comment-wrapper" style="position:relative">
        {collab.value.ycomments.commentWithPopup.value == commentId && (
          <YCommentPopup
            left={collab.value.ycomments.marginLeft()}
            shift={parentHeight}
            onMouseLeave={() => {
              collab.value.ycomments.commentWithPopup.value = null;
              collab.value.ycomments.updateMainCodeMirror();
            }}
          >
            <img
              class="comment-icon"
              src={commentIcon}
              onClick={() => {
                collab.value.ycomments.display().switchVisibility(commentId);
                collab.value.ycomments.updateMainCodeMirror();
              }}
              onDragStart={() => (collab.value.ycomments.draggedComment.value = commentId)}
              onDragEnd={() => (collab.value.ycomments.draggedComment.value = null)}
            />

            <svg width="3" height="22" viewBox="0 10 2 19" fill="none">
              <path d="M1 1V25" stroke="#DDDDDD" stroke-width="0.75" stroke-linecap="round" />
            </svg>

            <PopupButton icon={trashcanIcon} bgOnHover={"#e7473c15"} text="DELETE" onClick={() => collab.value.ycomments.deleteComment(commentId)} />
            {options.collaboration.value.resolvingCommentsEnabled && (
              <PopupButton
                icon={resolveIcon}
                bgOnHover={"#AAE17320"}
                text="RESOLVE"
                onClick={() => collab.value.ycomments.resolveComment(commentId)}
              />
            )}
          </YCommentPopup>
        )}

        <div style={`display: ${collab.value.ycomments.display().isShown(commentId) ? "block" : "none"}`} ref={cmref} />
      </div>
    </YCommentWrapper>
  );
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
  return (
    <PopupButtonWrapper bgOnHover={bgOnHover} onClick={onClick}>
      <img class="resolve-icon" src={icon} />
      <span class="resolve-btn"> {text} </span>
    </PopupButtonWrapper>
  );
};

export const YCommentsParent = () => {
  const { ycomments } = useContext(MystState).collab.value;
  return ycomments.comments.value.map(({ commentId }) => <YComment key={commentId} commentId={commentId} />);
};
