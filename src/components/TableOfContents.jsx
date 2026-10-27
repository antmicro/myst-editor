import { useContext } from "preact/hooks";
import styled from "styled-components";
import { MystState } from "../mystState";
import { scrollToPos } from "../utils";

const Wrapper = styled.div`
  background-color: var(--panel-bg);
  padding: 20px 0;
  box-sizing: border-box;
  height: 100%;
  border: 1px solid var(--border);
  box-shadow: inset 0px 0px 4px var(--box-shadow);
  border-radius: var(--border-radius);
  overflow-y: auto;
  overscroll-behavior: contain;

  & > h1 {
    font-size: 20px;
    padding-left: 100px;
    margin-bottom: 0;
  }
`;

const VerticalSparator = styled.hr`
  border: none;
  height: 1px;
  background-color: var(--border);
  margin-top: 20px;
  margin-bottom: 0;
`;

const HeadingList = styled.div`
  margin-left: 100px;
  margin-top: 20px;

  ul {
    list-style: none;
  }

  & > ul {
    padding-left: 0;
  }

  li > span {
    font-weight: bold;
    font-size: 18px;
    line-height: 150%;
    user-select: none;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

function Heading({ heading }) {
  const state = useContext(MystState);

  return (
    <li>
      <span title="Go to heading" onClick={() => scrollToPos(heading.pos, state)}>
        {heading.text}
      </span>
      {heading.children.length > 0 && (
        <ul>
          {heading.children.map((child) => (
            <Heading key={child.pos} heading={child} />
          ))}
        </ul>
      )}
    </li>
  );
}

export const TableOfContents = () => {
  const { headings } = useContext(MystState);

  return (
    <Wrapper>
      <h1>Table of Contents</h1>
      <VerticalSparator />
      <HeadingList>
        <ul>
          {headings.value.map((h) => (
            <Heading heading={h} key={h.pos} />
          ))}
        </ul>
      </HeadingList>
    </Wrapper>
  );
};
