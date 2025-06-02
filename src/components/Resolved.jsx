import { useContext } from "preact/hooks";
import styled from "styled-components";
import ResolvedComment from "./ResolvedComment";
import CommentIcon from "../icons/comment.svg";
import { MystState } from "../mystState";
import { useComputed } from "@preact/signals";
import ResolvedSuggestion from "./ResolvedSuggestion";

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

  img {
    margin: 0 5px;
    transform: translateY(20%);
    filter: invert(var(--icon-invert));
  }

  span {
    color: #e7473c;
    line-height: 25px;
    font-size: 10px;
    margin: 0 5px;
  }
`;

function dateComparator(c1, c2) {
  return c1.resolvedDate - c2.resolvedDate;
}

const ResolvedComments = () => {
  const { collab } = useContext(MystState);
  const ycomments = collab.value.ycomments;
  const suggestions = collab.value.storedSuggestions;
  const resolvedComments = useComputed(() => ycomments.resolver().resolvedCommentsList.value.sort(dateComparator));
  const commentContents = useComputed(() =>
    resolvedComments.value.reduce((contents, { commentId }) => {
      contents[commentId] = ycomments.getTextForComment(commentId).toString();
      return contents;
    }, {}),
  );
  const authors = useComputed(() => resolvedComments.value.map((c) => ycomments.lineAuthors(c.commentId)));

  return (
    <ResolvedWrapper className="myst-resolved">
      <h1>Resolved comments</h1>
      <VerticalSparator />
      <Container>
        {resolvedComments.value.length === 0 ? (
          <NoCommentsText>
            No resolved comments yet, to resolve a comment hover over it's icon <img src={CommentIcon} /> and click <span>RESOLVE</span>
          </NoCommentsText>
        ) : (
          resolvedComments.value.map((c, idx) => (
            <ResolvedComment
              key={c.commentId}
              c={c}
              authors={authors.value[idx]}
              ycomments={ycomments}
              content={commentContents.value[c.commentId]}
            />
          ))
        )}
      </Container>
      <VerticalSparator style="margin-top: 0;" />
      <h1 className="suggestions-heading">Resolved suggestions</h1>
      <VerticalSparator />
      <Container>
        {suggestions.value.length === 0 ? (
          <NoCommentsText>No resolved suggestions yet.</NoCommentsText>
        ) : (
          suggestions.value.map((s, idx) => <ResolvedSuggestion key={idx} suggestion={s} />)
        )}
      </Container>
    </ResolvedWrapper>
  );
};

export default ResolvedComments;
