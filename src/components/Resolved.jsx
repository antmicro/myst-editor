import { useContext } from "preact/hooks";
import styled from "styled-components";
import { MystState } from "../mystState";
import { useComputed } from "@preact/signals";
import {
  deleteResolvedReview,
  restoreResolvedReview,
  getRestorableReviewAnchors,
  getCurrentUser,
  isCommentAuthor,
} from "../extensions/reviewCommands";
import { ResolvedReviewComment, ResolvedReviewSuggestion } from "./ResolvedReview";

const ResolvedWrapper = styled.div`
  background-color: var(--panel-bg);
  padding: 20px 0;
  box-sizing: border-box;
  height: 100%;
  border: 1px solid var(--border);
  box-shadow: inset 0px 0px 4px var(--box-shadow);
  border-radius: var(--border-radius);
  overflow-y: auto;
  overscroll-behavior: contain;

  & h1 {
    font-size: 20px;
    padding-left: 100px;
    margin-bottom: 0;

    &.suggestions-heading {
      margin-top: 20px;
    }
  }
`;

const VerticalSparator = styled.hr`
  border: none;
  height: 1px;
  background-color: var(--gray-600);
  margin-top: 20px;
  margin-bottom: 0;
`;

const Container = styled.div`
  margin-left: 100px;
  border-left: 1px solid var(--gray-600);

  & ul,
  p {
    margin-top: 0;
  }
`;

const NoCommentsText = styled.p`
  padding: 10px 6px;
  margin: 0;
`;

function dateComparator(c1, c2) {
  return (c1.resolvedAt ?? 0) - (c2.resolvedAt ?? 0);
}

function groupResolvedSuggestions(reviewItems) {
  const groups = new Map();

  for (const review of reviewItems.values()) {
    if (!review.resolved || review.kind !== "suggestion") continue;
    const groupId = review.replacementId ?? review.id;
    const group = groups.get(groupId) ?? [];
    group.push(review);
    groups.set(groupId, group);
  }

  return [...groups.values()].sort((a, b) => dateComparator(a[0], b[0]));
}

const ResolvedReviews = () => {
  const { editorView, reviewItems } = useContext(MystState);
  const currentUser = editorView.value ? getCurrentUser(editorView.value.state) : null;
  const resolvedComments = useComputed(() =>
    [...reviewItems.value.values()].filter((review) => review.resolved && review.kind === "comment").sort(dateComparator),
  );
  const resolvedSuggestions = useComputed(() => groupResolvedSuggestions(reviewItems.value));

  return (
    <ResolvedWrapper className="myst-resolved">
      <h1>Resolved comments</h1>
      <VerticalSparator />
      <Container>
        {resolvedComments.value.length === 0 ? (
          <NoCommentsText>No resolved comments yet.</NoCommentsText>
        ) : (
          resolvedComments.value.map((review) => (
            <ResolvedReviewComment
              key={review.id}
              review={review}
              canRestore={getRestorableReviewAnchors(editorView.value, review).length > 0}
              onRestore={() => restoreResolvedReview(editorView.value, review.id)}
              onDelete={isCommentAuthor(currentUser, review) ? () => deleteResolvedReview(editorView.value, review.id) : undefined}
            />
          ))
        )}
      </Container>
      <VerticalSparator style="margin-top: 0;" />
      <h1 className="suggestions-heading">Resolved suggestions</h1>
      <VerticalSparator />
      <Container>
        {resolvedSuggestions.value.length === 0 ? (
          <NoCommentsText>No resolved suggestions yet.</NoCommentsText>
        ) : (
          resolvedSuggestions.value.map((reviews) => <ResolvedReviewSuggestion key={reviews[0].replacementId ?? reviews[0].id} reviews={reviews} />)
        )}
      </Container>
    </ResolvedWrapper>
  );
};

export default ResolvedReviews;
