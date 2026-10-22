import { useLayoutEffect, useRef, useState } from "preact/hooks";
import { Avatar } from "./Avatars";
import { ReviewMenu } from "./ReviewMenu";
import { useTimeDifference } from "../hooks/useTimeDifference";
import { useOutsideClick } from "../hooks/useOutsideClick";
import ellipsisIcon from "../icons/review-ellipsis.svg?url";
import editIcon from "../icons/review-edit.svg?url";
import trashIcon from "../icons/review-trashcan.svg?url";

export const ReviewIcon = ({ icon }) => (
  <span className="cm-review-card-action-icon" aria-hidden="true" style={{ "--review-icon-url": `url("${icon}")` }} />
);

export const ReviewActionButton = ({ label, icon, className, onClick }) => (
  <button
    type="button"
    className={`cm-review-card-icon-button ${className}`}
    title={label}
    aria-label={label}
    onMouseDown={(event) => event.preventDefault()}
    onClick={(event) => {
      event.stopPropagation();
      onClick?.();
    }}
  >
    <ReviewIcon icon={icon} />
  </button>
);

export const ReviewCommentMenu = ({ canEdit, onEdit, onDelete }) =>
  canEdit && (
    <ReviewMenu
      className="cm-comment-card-more"
      buttonClassName="cm-review-card-icon-button cm-comment-card-more-button"
      menuClassName="cm-comment-card-menu"
      triggerIcon={<ReviewIcon icon={ellipsisIcon} />}
      actions={[
        { label: "Edit comment", icon: <ReviewIcon icon={editIcon} />, onClick: onEdit },
        { label: "Delete comment", icon: <ReviewIcon icon={trashIcon} />, className: "cm-comment-card-delete", onClick: onDelete },
      ]}
      preserveSelection
      stopPropagation
    />
  );

const ReviewHeader = ({ author, createdAt, kind, actions, avatarCrossorigin, legacy = null }) => {
  const date = createdAt ? new Date(createdAt) : null;
  const hasValidDate = date && !Number.isNaN(date.getTime());
  const timeText = useTimeDifference(hasValidDate ? date.getTime() : Date.now());
  const label = kind === "suggestion" ? "Suggestion" : "";

  return (
    <header className="cm-review-card-header">
      {author?.avatarUrl && <Avatar {...author} avatarCrossorigin={avatarCrossorigin} />}
      <span className="cm-review-card-author">
        {author?.name ?? label}
        {legacy != null ? (
          <small className="cm-review-card-created-at">Legacy</small>
        ) : hasValidDate ? (
          <small className="cm-review-card-created-at">
            <time dateTime={date.toISOString()} title={date.toLocaleString()}>
              {timeText.value}
            </time>
            {label && ` · ${label}`}
          </small>
        ) : null}
      </span>
      {actions && <span className="cm-review-card-actions">{actions}</span>}
    </header>
  );
};

export const ReviewEditForm = ({ comment, onSave, onClose }) => {
  const commentText = comment.text ?? comment.content ?? "";
  const [editText, setEditText] = useState(commentText);

  useLayoutEffect(() => setEditText(commentText), [comment.id, commentText]);

  const submitEdit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const text = editText.trim();
    if (!text) return;
    onSave?.(text);
    onClose?.();
  };

  return (
    <form className="cm-comment-card-edit" onClick={(event) => event.stopPropagation()} onSubmit={submitEdit}>
      <input
        type="text"
        value={editText}
        aria-label="Edit comment"
        autoComplete="off"
        autoFocus
        onInput={(event) => setEditText(event.currentTarget.value)}
      />
      <span className="cm-comment-card-edit-actions">
        <button
          type="button"
          data-size="sm"
          onClick={(event) => {
            event.stopPropagation();
            setEditText(commentText);
            onClose?.();
          }}
        >
          Cancel
        </button>
        <button type="submit" data-size="sm" data-variant="accent" disabled={!editText.trim()}>
          Save
        </button>
      </span>
    </form>
  );
};

const ReviewComment = ({ comment, currentUser, editing, onStartEditing, onStopEditing, onEdit, onDelete, avatarCrossorigin }) => {
  const commentText = comment.text ?? comment.content ?? "";

  return (
    <span className="cm-review-card-comment">
      <ReviewHeader
        author={comment.author}
        createdAt={comment.createdAt}
        kind="comment"
        legacy={comment.legacy}
        avatarCrossorigin={avatarCrossorigin}
        actions={
          <ReviewCommentMenu
            canEdit={Boolean(currentUser?.name && currentUser.name === comment.author?.name)}
            onEdit={onStartEditing}
            onDelete={onDelete}
          />
        }
      />
      {editing ? (
        <ReviewEditForm comment={comment} onSave={onEdit} onClose={onStopEditing} />
      ) : (
        <span className="cm-review-card-comment-text">{commentText}</span>
      )}
    </span>
  );
};

export const ReviewCard = ({
  id,
  kind,
  author,
  createdAt,
  legacy = null,
  actions,
  comments = [],
  currentUser,
  avatarCrossorigin,
  selected = false,
  composerOpen = false,
  onSelect,
  onClose,
  initiallySelected = false,
  submitLabel = "Reply",
  composerPlaceholder = "Reply or add others with @",
  onCancel,
  onReply,
  onEditComment,
  onDeleteComment,
  composerHidden = false,
  className = "",
  children,
  ...props
}) => {
  const [composerFocused, setComposerFocused] = useState(initiallySelected);
  const [draft, setDraft] = useState("");
  const [editingCommentId, setEditingCommentId] = useState(null);
  const cardRef = useRef(null);
  const inputRef = useRef(null);
  const threadComments = comments ?? [];
  const showComposer = initiallySelected || composerOpen;

  useOutsideClick(
    cardRef,
    (event) => {
      const path = event.composedPath?.() ?? [];
      if (path.some((element) => element.classList?.contains("cm-review-card"))) return;
      setComposerFocused(false);
      onClose?.();
      onCancel?.();
    },
    showComposer,
  );

  useLayoutEffect(() => {
    setComposerFocused(initiallySelected);
    if (initiallySelected) inputRef.current?.focus({ preventScroll: true });
  }, [id, initiallySelected, showComposer]);

  const selectCard = (event) => {
    if (event.target.closest?.("button, input, a")) return;

    if (showComposer && selected) return;

    onSelect?.();
  };

  const closeComposer = () => {
    setDraft("");
    setComposerFocused(false);
    onClose?.();
  };

  const cancelReply = () => {
    closeComposer();
    onCancel?.();
  };

  const addReply = (event) => {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;

    const comment = {
      id: crypto.randomUUID(),
      text,
      author: currentUser?.name ? currentUser : { name: "You" },
      createdAt: Date.now(),
    };
    onReply?.(comment);
    closeComposer();
  };

  return (
    <span
      ref={cardRef}
      className={`cm-review-card cm-${kind}-card ${selected || showComposer ? "cm-review-card-selected" : ""} ${className}`.trim()}
      data-review-id={id}
      data-review-kind={kind}
      {...props}
      onPointerDown={selectCard}
    >
      <ReviewHeader author={author} createdAt={createdAt} kind={kind} actions={actions} avatarCrossorigin={avatarCrossorigin} legacy={legacy} />
      {children}

      {threadComments.length > 0 && (
        <span className="cm-review-card-thread">
          {threadComments.map((comment) => (
            <ReviewComment
              key={comment.id}
              comment={comment}
              currentUser={currentUser}
              avatarCrossorigin={avatarCrossorigin}
              editing={editingCommentId === comment.id}
              onStartEditing={() => setEditingCommentId(comment.id)}
              onStopEditing={() => setEditingCommentId(null)}
              onEdit={(text) => onEditComment?.(comment.id, text)}
              onDelete={() => onDeleteComment?.(comment.id)}
            />
          ))}
        </span>
      )}

      {showComposer && !composerHidden && editingCommentId === null && (
        <form className="cm-review-card-composer" onClick={(event) => event.stopPropagation()} onSubmit={addReply}>
          <input
            ref={inputRef}
            type="text"
            value={draft}
            name="Comment"
            placeholder={composerPlaceholder}
            aria-label={composerPlaceholder}
            autoComplete="off"
            onInput={(event) => setDraft(event.currentTarget.value)}
            onFocus={() => setComposerFocused(true)}
          />
          {composerFocused && (
            <span className="cm-review-card-composer-actions">
              <button type="button" className="cm-review-card-cancel" data-size="sm" onClick={cancelReply}>
                Cancel
              </button>
              <button type="submit" className="cm-review-card-reply" data-size="sm" data-variant="accent" disabled={!draft.trim()}>
                {submitLabel}
              </button>
            </span>
          )}
        </form>
      )}
    </span>
  );
};
