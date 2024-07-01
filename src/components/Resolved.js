import { html } from "htm/preact";
import { useState, useEffect, useReducer, useRef, useMemo } from "preact/hooks";
import styled from "styled-components";

const ResolvedWrapper = styled.div`
  flex: 1;
  width: 50%;
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
    [resolvedComments],
  );

  ycomments.resolver().onUpdate(setResolvedComments);

  return html` <${ResolvedWrapper}>
    <ul>
      ${resolvedComments.map(
        (c) =>
          html`<li key=${c.commentId}>
            <p>${c.resolvedLine}</p>
            <p>${c.resolvedBy.name}</p>
            <p>${commentContents[c.commentId]}</p>
          </li>`,
      )}
    </ul>
  <//>`;
};

export default ResolvedComments;
