import { useMemo, useContext } from "preact/hooks";
import styled from "styled-components";
import { Logger } from "../logger";
import { useTimeDifference } from "../hooks/useTimeDifference";
import ResolvedEntry from "./ResolvedEntry";

const ResolvedLine = styled.span`
  text-decoration: ${(props) => (props.orphaned ? "line-through" : "none")};
  color: ${(props) => (props.orphaned ? "var(--editor-gutter-fg)" : "currentColor")};
`;

const CommentContent = styled.p`
  margin: 0;
  margin-top: 3px;
  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
`;

const CommentLine = styled.span`
  display: block;
  background-color: color-mix(in srgb, ${(props) => props.color}, white);
  margin: 0;
  padding: 10px 6px;
  white-space: pre-wrap;
`;

const OptionsContainer = styled.span`
  margin-left: 24px;
  margin-right: 6px;
  display: block;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px 0;

  &:hover div {
    display: flex !important;
  }
`;

const DropdownContainer = styled.div`
  align-items: center;
  position: absolute;
  background-color: var(--panel-bg);
  transform: translate(calc(-100% + 22px), calc(100% - 10px));
  width: max-content;
  border: 1px solid var(--border);
  display: none;

  & p {
    margin: 0;
    font-size: 12px;
    color: var(--error-bg);
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
  align-self: stretch;
  width: fit-content;
  font-family: inherit;

  &:hover {
    background-color: var(--button-bg-hover);
  }

  &.myst-restore-btn {
    svg {
      padding-right: 10px;
      filter: invert(var(--icon-invert));
    }

    p {
      color: black;
      filter: invert(var(--icon-invert));
    }
  }
`;

const OptionsIcon = () => (
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
);
const DeleteIcon = () => (
  <svg width="25" height="26" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.71387 6.14294V12.5715" stroke="#E7473C" stroke-width="1.75" />
    <path d="M10.2852 6.14288V12.5715" stroke="#E7473C" stroke-width="1.75" />
    <path d="M6.42871 1H11.5716" stroke="#E7473C" stroke-width="1.75" />
    <path d="M0 2.28564H18" stroke="#E7473C" stroke-width="1.75" />
    <path d="M1.92871 2.28564L3.85728 18.3571H14.143L16.0716 2.28564" stroke="#E7473C" stroke-width="1.75" />
  </svg>
);
const RestoreIcon = () => (
  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.00169 1V6.66103H6.82422" stroke="black" stroke-width="1.75" />
    <path
      d="M1.08493 10.8517C1.67993 14.9572 5.22444 18.1192 9.49996 18.1192C14.192 18.1192 18 14.3112 18 9.61918C18 4.92716 14.192 1.11914 9.49996 1.11914C5.68344 1.11914 2.46193 3.63515 1.38242 7.09467"
      stroke="black"
      stroke-width="1.75"
    />
  </svg>
);

const ResolvedComment = ({ c, authors, ycomments, content }) => {
  const { log } = useContext(Logger);
  const timeText = useTimeDifference(c.resolvedDate);

  const groupedLines = useMemo(() => {
    const lines = content.split("\n");
    const grouped = [];
    for (let i = 0; i < lines.length; i++) {
      if (grouped.length == 0 || grouped[grouped.length - 1].author.name != authors.get(i + 1).name) {
        grouped.push({ text: lines[i], author: authors.get(i + 1) });
      } else {
        grouped[grouped.length - 1].text += "\n" + lines[i];
      }
    }
    return grouped;
  }, [content]);

  const restoreText = useMemo(() => {
    if (c.orphaned) {
      return "RESTORE ORPHANED";
    } else if (c.occupied) {
      return "RESTORE AND MERGE";
    }
    return "RESTORE";
  }, [c]);

  const user = authors.get(1);

  return (
    <ResolvedEntry
      user={{ ...user, avatarUrl: user.avatar, userUrl: user.url }}
      lineNumber={c.orphaned ? "" : c.lineNumber}
      action={`Comment resolved by @${c.resolvedBy.name} ${timeText}`}
      className="resolved-comment"
      lineText={<ResolvedLine orphaned={c.orphaned}>{c.resolvedLine}</ResolvedLine>}
      options={
        <OptionsContainer className="myst-dropdown-toggle">
          <OptionsIcon />
          <DropdownContainer>
            <DropdownButton
              className="myst-restore-btn"
              onClick={() => {
                log(`Restoring comment on line ${c.orphaned ? "orphaned" : c.lineNumber}`);
                ycomments.restoreComment(c);
              }}
            >
              <RestoreIcon />
              <p>{restoreText}</p>
            </DropdownButton>
            <DropdownButton
              className="myst-delete-btn"
              onClick={() => {
                log(`Deleting resolved comment on line ${c.orphaned ? "orphaned" : c.lineNumber}`);
                ycomments.resolver().delete(c.commentId);
              }}
            >
              <DeleteIcon />
              <p>DELETE</p>
            </DropdownButton>
          </DropdownContainer>
        </OptionsContainer>
      }
    >
      <CommentContent>
        {groupedLines.map((lineData, i) => (
          <CommentLine key={i} color={lineData.author.color}>
            {lineData.text}
          </CommentLine>
        ))}
      </CommentContent>
    </ResolvedEntry>
  );
};

export default ResolvedComment;
