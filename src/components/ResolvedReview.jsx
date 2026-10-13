import styled from "styled-components";
import { useTimeDifference } from "../hooks/useTimeDifference";
import ResolvedEntry from "./ResolvedEntry";
import { ReviewMenu } from "./ReviewMenu";
import ellipsisIcon from "../icons/review-ellipsis.svg?url";
import restoreIcon from "../icons/restore.svg?url";
import trashcanIcon from "../icons/review-trashcan.svg?url";

const DEFAULT_REVIEW_COLOR = "#0087ff";

const ReviewLine = styled.span`
  white-space: pre-wrap;
`;

const ResolvedSuggestionDiff = styled.span`
  display: grid;
  gap: 4px;
  padding: 6px 8px;
  background: var(--editor-bg);
  border-radius: 6px;

  & > span {
    display: grid;
    grid-template-columns: 16px minmax(0, 1fr);
    gap: 4px;
  }

  ins,
  del {
    overflow-wrap: anywhere;
    white-space: normal;
  }

  ins {
    color: var(--green-500);
    background: var(--inserted-bg);
    text-decoration-color: var(--green-500);
  }

  del {
    color: var(--red-500);
    background: var(--deleted-bg);
    text-decoration: line-through var(--red-500);
    text-decoration-thickness: 2px;
  }
`;

const ReviewThread = styled.div`
  display: grid;
  gap: 8px;
  padding: 10px 6px;
`;

const ReviewMessage = styled.div`
  display: grid;
  gap: 2px;
  padding: 8px;
  background: color-mix(in srgb, ${(props) => props.color}, white 88%);
  border-left: 3px solid ${(props) => props.color};

  strong {
    font-size: 12px;
  }

  span {
    white-space: pre-wrap;
  }
`;

const MoreOptions = styled.span`
  position: relative;
  display: inline-flex;
  margin-left: 8px;

  & > button {
    display: inline-flex;
    width: 28px;
    height: 28px;
    align-items: center;
    justify-content: center;
    padding: 4px;
    color: inherit;
    background: transparent;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
  }

  & > button:hover {
    background: var(--button-bg-hover);
  }

  & > button img {
    width: 20px;
    height: 20px;
    filter: invert(var(--icon-invert));
  }

  & > span {
    position: absolute;
    top: 32px;
    right: 0;
    z-index: 30;
    display: grid;
    min-width: 156px;
    padding: 4px;
    background: var(--panel-bg);
    border: 1px solid var(--border);
    border-radius: 6px;
    box-shadow: 0 4px 16px color-mix(in oklch, #000 12%, transparent);
  }

  [role="menuitem"] {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 8px;
    padding: 8px;
    color: inherit;
    font: inherit;
    text-align: left;
    white-space: nowrap;
    background: transparent;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
  }

  [role="menuitem"]:hover:not(:disabled) {
    background: var(--button-bg-hover);
  }

  [role="menuitem"]:disabled {
    opacity: 0.5;
  }

  [role="menuitem"] img {
    width: 18px;
    height: 18px;
    object-fit: contain;
  }

  .resolved-review-restore img {
    filter: invert(var(--icon-invert));
  }

  .resolved-review-delete-icon {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    background-color: currentColor;
    -webkit-mask-image: url("${trashcanIcon}");
    -webkit-mask-position: center;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: contain;
    mask-image: url("${trashcanIcon}");
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: contain;
  }

  [role="menuitem"].resolved-review-delete {
    color: #e7473c;
  }
`;

const normalizeUser = (user) => ({
  name: user?.name ?? "You",
  color: user?.color ?? DEFAULT_REVIEW_COLOR,
  avatarUrl: user?.avatarUrl,
  userUrl: user?.userUrl,
});

const lineNumberText = (review) => {
  return review.resolvedAnchors.map(({ fromLine, toLine }) => (toLine !== fromLine ? `${fromLine}-${toLine}` : fromLine)).join(", ");
};

const resolvedLineText = (review) =>
  review.resolvedAnchors.map((anchor, index) => (
    <ReviewLine key={anchor.id}>
      {index > 0 ? " · " : ""}
      {anchor.line}
    </ReviewLine>
  ));

const ResolvedReviewThread = ({ messages }) => {
  if (messages.length === 0) return null;

  return (
    <ReviewThread className="resolved-review-thread">
      {messages.map((message) => {
        const author = normalizeUser(message.author);
        return (
          <ReviewMessage key={message.id} color={author.color} className="resolved-review-message">
            <strong>{author.name}</strong>
            <span>{message.text ?? message.content ?? ""}</span>
          </ReviewMessage>
        );
      })}
    </ReviewThread>
  );
};

const ResolvedReviewMenu = ({ canRestore, onRestore, onDelete }) => (
  <ReviewMenu
    as={MoreOptions}
    triggerIcon={<img src={ellipsisIcon} alt="" />}
    actions={[
      {
        label: "Restore",
        icon: <img src={restoreIcon} alt="" />,
        className: "resolved-review-restore",
        onClick: onRestore,
        disabled: !canRestore,
        title: canRestore ? undefined : "Can't restore: the referenced text was deleted.",
      },
      {
        label: "Delete",
        icon: <span className="resolved-review-delete-icon" aria-hidden="true" />,
        className: "resolved-review-delete",
        onClick: onDelete,
      },
    ].filter(({ onClick }) => onClick)}
  />
);

export const ResolvedReviewComment = ({ review, canRestore, onRestore, onDelete }) => {
  const timeText = useTimeDifference(review.resolvedAt ?? Date.now());
  const resolvedBy = normalizeUser(review.resolvedBy);
  const messages = [{ id: review.id, text: review.text, author: review.author }, ...(review.comments ?? [])];

  return (
    <ResolvedEntry
      lineNumber={lineNumberText(review)}
      action={`${review.legacy != null ? "Legacy comment" : "Comment"} resolved by @${resolvedBy.name} ${timeText}`}
      className="resolved-comment resolved-review-comment"
      lineText={resolvedLineText(review)}
      options={<ResolvedReviewMenu canRestore={canRestore} onRestore={onRestore} onDelete={onDelete} />}
    >
      <ResolvedReviewThread messages={messages} />
    </ResolvedEntry>
  );
};

export const ResolvedReviewSuggestion = ({ reviews }) => {
  const insertion = reviews.find(({ type }) => type === "insert");
  const deletion = reviews.find(({ type }) => type === "delete");
  const primary = insertion ?? deletion ?? reviews[0];
  const timeText = useTimeDifference(primary.resolvedAt ?? Date.now());
  const resolvedBy = normalizeUser(primary.resolvedBy);
  const comments = primary.comments ?? [];

  return (
    <ResolvedEntry
      lineNumber={lineNumberText(primary)}
      action={`Suggestion ${primary.resolution === "accept" ? "accepted" : "rejected"} by @${resolvedBy.name} ${timeText}`}
      className="resolved-suggestion resolved-review-suggestion"
      lineText={
        <ResolvedSuggestionDiff>
          {deletion && (
            <span>
              <small aria-hidden="true">-</small>
              <del>{deletion.text}</del>
            </span>
          )}
          {insertion && (
            <span>
              <small aria-hidden="true">+</small>
              <ins>{insertion.text}</ins>
            </span>
          )}
        </ResolvedSuggestionDiff>
      }
    >
      <ResolvedReviewThread messages={comments} />
    </ResolvedEntry>
  );
};
