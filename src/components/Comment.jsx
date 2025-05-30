import { useRef, useEffect, useCallback, useMemo, useContext } from "preact/hooks";
import { styled } from "styled-components";
import { EditorView } from "codemirror";
import { Compartment, EditorState } from "@codemirror/state";
import { ExtensionBuilder } from "../extensions";
import commentIcon from "../icons/comment.svg?url";
import trashcanIcon from "../icons/trashcan.svg?url";
import resolveIcon from "../icons/resolve.svg?url";
import { MystState } from "../mystState";
import { useSignalEffect } from "@preact/signals";

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
    padding: 0px !important;
  }
  .cm-line {
    line-height: 1.5em;
  }

  .cm-scroller {
    overflow-x: unset !important;
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
    box-shadow: 0px 0px 4px var(--box-shadow);
    position: absolute;
    transform: translateX(-30px);
  }
`;

const commentUserSettingsCompartment = new Compartment();

const YComment = ({ commentId }) => {
  const { options, collab, userSettings } = useContext(MystState);
  let cmref = useRef(null);
  const cmView = useRef(null);

  const lineAuthors = useMemo(() => collab.value.ycomments.lineAuthors(commentId), [commentId]);

  const updateHeight = useCallback(
    (update) =>
      update.heightChanged && update.view.requestMeasure({ read: (view) => collab.value.ycomments.updateHeight(commentId, view.dom.clientHeight) }),
    [commentId],
  );

  const parentHeight = collab.value.ycomments.parentLineHeight(commentId) - 1;

  useEffect(() => {
    if (!cmView.current) return;
    const userExtensions = userSettings.value.filter((s) => s.enabled && s.extension && s.comments).map((s) => s.extension);
    cmView.current.dispatch({
      effects: commentUserSettingsCompartment.reconfigure(userExtensions),
    });
  }, [userSettings.value, cmView.current]);

  useSignalEffect(() => {
    const ytext = collab.value.ycomments.getTextForComment(commentId);
    const view = new EditorView({
      state: EditorState.create({
        doc: ytext.toString(),
        extensions: new ExtensionBuilder()
          .disable(["Mod-z", "Mod-y", "Mod-Z"])
          .if(collab.value.lockMsg.value, (b) => b.useReadonly().useNoSelection())
          .useCollaboration({ collabClient: { ytext, provider: collab.value.provider } })
          .addUpdateListener(updateHeight)
          .showCommentLineAuthors(lineAuthors)
          .useRemoveSelectionOnBlur()
          .useCompartment(commentUserSettingsCompartment, [])
          .create(),
      }),
      parent: cmref.current,
    });
    cmView.current = view;

    collab.value.ycomments.registerCommentEditor(commentId, view);
    ytext.observe((_, tr) => {
      if (!tr.local) return;
      collab.value.ycomments.provider.awareness.setLocalStateField("lastChanged", Date.now());
    });

    if (collab.value.ycomments.newLocalComment) {
      view.focus();
      collab.value.ycomments.newLocalComment = false;
    }

    return () => {
      view.destroy();
    };
  });

  return (
    <YCommentWrapper
      left={collab.value.ycomments.marginLeft()}
      top={collab.value.ycomments.display().comments.value[commentId]?.top}
      fade={collab.value.ycomments.draggedComment.value == commentId}
      data-comment-line={collab.value.ycomments.positions().get(commentId)}
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
              <path d="M1 1V25" stroke="var(--border)" stroke-width="0.75" stroke-linecap="round" />
            </svg>

            <PopupButton icon={trashcanIcon} bgOnHover={"#e7473c15"} text="DELETE" onClick={() => collab.value.ycomments.deleteComment(commentId)} />
            {options.collaboration.value.resolvingCommentsEnabled && (
              <PopupButton
                icon={resolveIcon}
                bgOnHover={"#AAE17320"}
                text="RESOLVE"
                onClick={() => collab.value.ycomments.resolveComment(commentId)}
                invert
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
  background-color: var(--panel-bg);
  border: 1px solid var(--border);
  z-index: 30000000;
  left: ${(props) => -props.left - 13}px;
  top: ${(props) => -props.shift}px;
  box-shadow: 0 0 3px var(--box-shadow);
  box-sizing: content-box;

  .comment-icon {
    height: 20px;
    padding: 3px;
    margin-left: 10px;
    margin-right: 10px;
    filter: invert(var(--icon-invert));
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
    filter: ${(props) => (props.invert ? "invert(var(--icon-invert))" : "none")}};
  }

  .resolve-btn {
    color: var(--error-bg);
    line-height: 25px;
    font-size: 10px;
    margin-left: 5px;
    margin-right: 5px;
    box-sizing: content-box;
  }
`;

const PopupButton = ({ icon, onClick, text, bgOnHover, invert }) => {
  return (
    <PopupButtonWrapper bgOnHover={bgOnHover} onClick={onClick} invert={invert}>
      <img class="resolve-icon" src={icon} />
      <span class="resolve-btn"> {text} </span>
    </PopupButtonWrapper>
  );
};

export const YCommentsParent = () => {
  const { ycomments } = useContext(MystState).collab.value;
  return ycomments.comments.value.map(({ commentId }) => <YComment key={commentId} commentId={commentId} />);
};
