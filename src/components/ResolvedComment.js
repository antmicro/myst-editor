import { html } from "htm/preact";
import { useState, useEffect, useRef } from "preact/hooks";
import styled from "styled-components";
import { Avatar } from "./Avatars";

const ResolvedLine = styled.p`
  font-family: monospace;
  font-size: 16px;
  padding: 10px 6px;
  margin-bottom: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 95%;
`;

const CommentContainer = styled.div`
  background-color: color-mix(in srgb, ${(props) => props.color}, white);
  border: 2px solid ${(props) => props.color};
  padding: 10px 0;
  margin-left: -1px;
  width: calc(100% - 2px);
`;

const CommentTopbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 22px;
  padding: 0 6px;
`;

const CommentAuthor = styled.h2`
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
    border: 3px solid;
    height: 28px;
    width: 28px;
    position: absolute;
    transform: translateX(calc(-100% - 12px));
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

  ${(props) =>
    props.lastForeignLine &&
    `
    margin-bottom: -10px;
    padding-bottom: 8px;
  `}
`;

const LineNumber = styled.span`
  position: absolute;
  transform: translateX(calc(-100% - 24px));
  color: var(--gray-700);
`;

const OptionsContainer = styled.span`
  margin-right: 6px;
  display: block;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px 0;

  &:hover div {
    display: block !important;
  }
`;

const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  background-color: var(--gray-200);
  transform: translate(calc(-100% + 22px), calc(100% - 10px));
  width: max-content;
  border: 1px solid var(--gray-600);
  display: none;

  & p {
    margin: 0;
    font-size: 12px;
    color: var(--red-500);
    font-weight: 700;
  }
`;

const DropdownButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 7px 18px;

  &:hover {
    background-color: var(--gray-300);
  }
`;

const OptionsIcon = () => html`
  <svg width="20" height="5" viewBox="0 0 20 5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.5 0C1.12149 0 0 1.12149 0 2.5C0 3.15421 0.257009 3.80841 0.724299 4.2757C1.19159 4.74299 1.82243 5 2.5 5C3.17757 5 3.80841 4.74299 4.2757 4.2757C4.74299 3.80841 5 3.17757 5 2.5C5 1.12149 3.8785 0 2.5 0Z"
      fill="#6C6C6C"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 0C8.6215 0 7.5 1.12149 7.5 2.5C7.5 3.15421 7.75701 3.80841 8.2243 4.2757C8.69159 4.74299 9.32243 5 10 5C10.6776 5 11.3084 4.74299 11.7757 4.2757C12.243 3.80841 12.5 3.17757 12.5 2.5C12.5 1.12149 11.3785 0 10 0Z"
      fill="#6C6C6C"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.5 0C16.1215 0 15 1.12149 15 2.5C15 3.15421 15.257 3.80841 15.7243 4.2757C16.1916 4.74299 16.8224 5 17.5 5C18.1776 5 18.8084 4.74299 19.2757 4.2757C19.743 3.80841 20 3.17757 20 2.5C20 1.12149 18.8785 0 17.5 0Z"
      fill="#6C6C6C"
    />
  </svg>
`;

const DeleteIcon = () => html`
  <svg width="25" height="26" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.71387 6.14294V12.5715" stroke="#E7473C" stroke-width="1.75" />
    <path d="M10.2852 6.14288V12.5715" stroke="#E7473C" stroke-width="1.75" />
    <path d="M6.42871 1H11.5716" stroke="#E7473C" stroke-width="1.75" />
    <path d="M0 2.28564H18" stroke="#E7473C" stroke-width="1.75" />
    <path d="M1.92871 2.28564L3.85728 18.3571H14.143L16.0716 2.28564" stroke="#E7473C" stroke-width="1.75" />
  </svg>
`;

const formatter = new Intl.RelativeTimeFormat("en", { style: "long" });

const ResolvedComment = ({ c, idx, authors, ycomments, commentContents }) => {
  const [difference, setDifference] = useState({ amount: 0, unit: "second" });
  const timer = useRef(null);

  function setTimeDifference() {
    const secondDifference = Math.floor((Date.now() - c.resolvedDate) / 1000);
    const minuteDifference = Math.floor(secondDifference / 60);
    const hourDifference = Math.floor(minuteDifference / 60);
    const dayDifference = Math.floor(hourDifference / 24);
    const monthDifference = Math.floor(dayDifference / 30);
    const yearDifference = Math.floor(monthDifference / 12);

    if (minuteDifference >= 60) {
      clearInterval(timer.current);
    }

    if (secondDifference < 60) {
      setDifference({ amount: secondDifference, unit: "second" });
    } else if (minuteDifference < 60) {
      setDifference({ amount: minuteDifference, unit: "minute" });
    } else if (hourDifference < 24) {
      setDifference({ amount: hourDifference, unit: "hour" });
    } else if (dayDifference < 30) {
      setDifference({ amount: dayDifference, unit: "day" });
    } else if (monthDifference < 12) {
      setDifference({ amount: monthDifference, unit: "month" });
    } else {
      setDifference({ amount: yearDifference, unit: "year" });
    }
  }

  useEffect(() => {
    timer.current = setInterval(setTimeDifference, 1000);
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return html`
    <div key=${c.commentId}>
      <${ResolvedLine}>
        <${LineNumber}>${c.lineNumber}<//>
        ${c.resolvedLine}
      <//>
      <${CommentContainer} color=${authors[idx].get(1).color}>
        <${CommentTopbar}>
          <${FlexRow}>
            <${Avatar} login=${authors[idx].get(1).name} color=${authors[idx].get(1).color} avatarUrl=${authors[idx].get(1).avatar} />
            <${CommentAuthor}>${authors[idx].get(1).name}<//>
          <//>
          <${FlexRow}>
            <${ResolvedBy}>Comment resolved by @${c.resolvedBy.name} ${formatter.format(-difference.amount, difference.unit)}<//>
            <${OptionsContainer}>
              <${OptionsIcon} />
              <${DropdownContainer}>
                <${DropdownButton} onClick=${() => ycomments.resolver().delete(c.commentId)}>
                  <${DeleteIcon} />
                  <p>DELETE COMMENT</p>
                <//>
              <//>
            <//>
          <//>
        <//>
        <${CommentContent}>
          ${commentContents[c.commentId]
            .split("\n")
            .map(
              (line, i) => html`
                <${CommentLine}
                  color=${authors[idx].get(i + 1).color}
                  spacingTop=${authors[idx].get(i + 1).name !== authors[idx].get(1).name && authors[idx].get(i).name !== authors[idx].get(i + 1).name}
                  spacingBottom=${authors[idx].get(i + 1).name !== authors[idx].get(1).name &&
                  authors[idx].get(Math.min(i + 2, commentContents[c.commentId].split("\n").length)).name !== authors[idx].get(i + 1).name}
                  lastForeignLine=${authors[idx].get(i + 1).name !== authors[idx].get(1).name &&
                  i + 1 == commentContents[c.commentId].split("\n").length}
                  >${line}<//
                >
              `,
            )}
        <//>
      <//>
    </div>
  `;
};

export default ResolvedComment;
