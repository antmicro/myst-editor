import { useState } from "preact/hooks";
import { ReviewActionButton, ReviewCard, ReviewCommentMenu, ReviewEditForm } from "./ReviewCard";
import resolveIcon from "../icons/review-resolve.svg?url";

export const CommentCard = ({ comment, onResolve, onEdit, onDelete, canEdit, ...cardProps }) => {
  const commentText = comment.text ?? comment.content ?? "";
  const [editing, setEditing] = useState(false);

  const actions = !comment.draft && (
    <>
      <ReviewActionButton label="Resolve comment" icon={resolveIcon} className="cm-comment-card-resolve" onClick={onResolve} />
      <ReviewCommentMenu canEdit={canEdit} onEdit={() => setEditing(true)} onDelete={onDelete} />
    </>
  );

  return (
    <ReviewCard
      {...cardProps}
      id={comment.id}
      kind="comment"
      author={comment.author}
      createdAt={comment.createdAt}
      legacy={comment.legacy}
      actions={actions}
      comments={comment.comments}
      initiallySelected={comment.draft}
      submitLabel={comment.draft ? "Comment" : "Reply"}
      composerPlaceholder={comment.draft ? "Mention someone with @" : undefined}
      composerHidden={editing}
      data-comment-id={comment.id}
    >
      {editing ? (
        <ReviewEditForm comment={comment} onSave={onEdit} onClose={() => setEditing(false)} />
      ) : (
        <span className="cm-comment-card-content">{commentText}</span>
      )}
    </ReviewCard>
  );
};
