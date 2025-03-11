import { useContext } from "preact/hooks";
import styled from "styled-components";
import { MystState } from "../mystState";
import { getLineById } from "../markdown/markdownSourceMap";
import { EditorView } from "codemirror";

const Wrapper = styled.div`
  background-color: white;
  padding: 20px 0;
  box-sizing: border-box;
  height: 100%;
  border: 1px solid var(--gray-400);
  border-left: 1px solid var(--gray-600);
  box-shadow: inset 0px 0px 4px var(--gray-600);
  border-radius: var(--border-radius);
  color: var(--gray-900);
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
  background-color: var(--gray-600);
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
  let children;
  if (heading.children.length > 0) {
    children = (
      <ul>
        {heading.children.map((c) => (
          <Heading key={c.lineId} heading={c} />
        ))}
      </ul>
    );
  }

  return (
    <li>
      <span title="Go to heading" data-heading-id={heading.lineId}>
        {heading.text}
      </span>
      {children}
    </li>
  );
}

export const TableOfContents = () => {
  const { text, editorView } = useContext(MystState);

  function handleClick(ev) {
    const lineId = ev.target?.getAttribute("data-heading-id");
    if (!lineId) return;
    const lineNum = getLineById(text.lineMap, lineId);
    if (!lineNum) return;
    const line = editorView.value.state.doc.line(lineNum);
    editorView.value.dispatch({ selection: { anchor: line.to, head: line.to }, effects: EditorView.scrollIntoView(line.to, { y: "start" }) });
  }

  return (
    <Wrapper>
      <h1>Table of Contents</h1>
      <VerticalSparator />
      <HeadingList onClick={handleClick}>
        <ul>
          {text.headings.value.map((h) => (
            <Heading heading={h} key={h.lineId} />
          ))}
        </ul>
      </HeadingList>
    </Wrapper>
  );
};
