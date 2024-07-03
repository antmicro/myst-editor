import { html } from "htm/preact";
import { useState, useEffect, useReducer, useRef, useMemo } from "preact/hooks";
import styled from "styled-components";
import { Avatar } from "./Avatars";

const ResolvedWrapper = styled.div`
  background-color: white;
  padding: 20px 0;
  min-height: 150px;
  border: 1px solid var(--gray-400);
  border-left: 1px solid var(--gray-600);
  box-shadow: inset 0px 0px 4px var(--gray-600);
  border-radius: var(--border-radius);
  font-family: "Lato", sans-serif;
  color: var(--gray-900);

  & h1 {
    font-size: 20px;
    padding-left: 100px;
    margin-bottom: 0;
  }
`;

const VerticalSparator = styled.hr`
  border: none;
  height: 1px;
  background-color: var(--gray-600);
  margin-top: 20px;
  margin-bottom: 0;
`;

const CommentsContainer = styled.div`
  margin-left: 100px;
  border-left: 1px solid var(--gray-600);

  & ul,
  p {
    margin-top: 0;
  }
`;

const ResolvedLine = styled.p`
  font-family: monospace;
  font-size: 16px;
  padding: 10px 6px;
  margin-bottom: 0;
`;

const ThreadContainer = styled.div`
  background-color: color-mix(in srgb, ${(props) => props.color}, white);
  border: 2px solid ${(props) => props.color};
  padding: 10px 0;
  margin-left: -1px;
  width: calc(100% - 14px);
`;

const ThreadTopbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 22px;
  padding: 0 6px;
`;

const ThreadAuthor = styled.h2`
  font-weight: bold;
  font-size: 12px;
  margin: 0;
`;

const ResolvedBy = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  margin: 0;
  margin-right: 25px;
`;

const CommentContent = styled.p`
  margin: 0;
  margin-top: 13px;
  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;

  & .avatar {
    border-radius: 50%;
    margin-top: 5px;
    float: right;
    border: 3px solid;
    height: 28px;
    width: 28px;
    position: absolute;
    transform: translateX(-46px);
  }
`;

const CommentLine = styled.span`
  display: block;
  background-color: color-mix(in srgb, ${(props) => props.color}, white);
  margin: 0;
  padding: 0 6px;

  ${(props) =>
    props.spacingTop &&
    `
    margin-top: 12px;
    padding-top: 8px;
  `};

  ${(props) =>
    props.spacingBottom &&
    `
    margin-bottom: 12px;
    padding-bottom: 8px;
  `};
`;

ResolvedWrapper.defaultProps = { className: "resolved" };

const ResolvedComments = ({ ycomments }) => {
  let [resolvedComments, setResolvedComments] = useState(ycomments.resolver().resolved());
  let commentContents = useMemo(
    () =>
      resolvedComments.reduce((contents, { commentId }) => {
        contents[commentId] = ycomments.getTextForComment(commentId).toString();
        return contents;
      }, {}),
    [resolvedComments]
  );
  let authors = useMemo(() => resolvedComments.map((c) => ycomments.lineAuthors(c.commentId)), [resolvedComments]);

  ycomments.resolver().onUpdate(setResolvedComments);

  return html` <${ResolvedWrapper}>
    <h1>Resolved comments</h1>
    <${VerticalSparator} />
    <${CommentsContainer}>
      ${resolvedComments.map(
        (c, idx) => html`
          <div key=${c.commentId}>
            <${ResolvedLine}>${c.resolvedLine}<//>
            <${ThreadContainer} color=${authors[idx].get(1).color}>
              <${ThreadTopbar}>
                <${FlexRow}>
                  <${Avatar} login=${authors[idx].get(1).name} color=${authors[idx].get(1).color} avatarUrl=${authors[idx].get(1).avatar} />
                  <${ThreadAuthor}>${authors[idx].get(1).name}<//>
                <//>
                <${ResolvedBy}>Thread resolved by ${c.resolvedBy.name}<//>
              <//>
              <${CommentContent}>
                ${commentContents[c.commentId]
                  .split("\n")
                  .map(
                    (line, i) => html`
                      <${CommentLine}
                        color=${authors[idx].get(i + 1).color}
                        spacingTop=${authors[idx].get(i + 1).name !== authors[idx].get(1).name &&
                        authors[idx].get(i).name !== authors[idx].get(i + 1).name}
                        spacingBottom=${authors[idx].get(i + 1).name !== authors[idx].get(1).name &&
                        authors[idx].get(Math.min(i + 2, commentContents[c.commentId].split("\n").length)).name !== authors[idx].get(i + 1).name}
                        >${line}<//
                      >
                    `
                  )}
              <//>
            <//>
          </div>
        `
      )}
    <//>
  <//>`;
};

export default ResolvedComments;
