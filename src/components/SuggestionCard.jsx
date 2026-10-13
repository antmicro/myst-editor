import { ReviewActionButton, ReviewCard } from "./ReviewCard";
import resolveIcon from "../icons/review-resolve.svg?url";
import rejectIcon from "../icons/review-reject.svg?url";

export const SuggestionCard = ({ suggestions, onAccept, onReject, ...cardProps }) => {
  const suggestion = suggestions.find(({ type }) => type === "insert") ?? suggestions[0];
  const cardId = suggestion.replacementId ?? suggestion.id;

  return (
    <ReviewCard
      {...cardProps}
      id={cardId}
      kind="suggestion"
      author={suggestion.author}
      createdAt={suggestion.createdAt}
      comments={suggestion.comments}
      data-suggestion-id={cardId}
      actions={
        <>
          <ReviewActionButton label="Accept suggestion" icon={resolveIcon} className="cm-suggestion-card-accept" onClick={onAccept} />
          <ReviewActionButton label="Reject suggestion" icon={rejectIcon} className="cm-suggestion-card-decline" onClick={onReject} />
        </>
      }
    >
      <span className="suggestion-diff">
        {suggestions.map(({ id, type, text }) => (
          <span className="suggestion-content" key={id}>
            <small aria-hidden="true">{type === "insert" ? "+" : "-"}</small>
            <span className={`cm-suggestion-card-content suggestions-${type}`}>{text}</span>
          </span>
        ))}
      </span>
    </ReviewCard>
  );
};
