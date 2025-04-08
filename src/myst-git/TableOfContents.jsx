import styled from "styled-components";
import { EditorView } from "codemirror";
import { useContext } from "preact/hooks";
import { MystState } from "../mystState";

const List = styled.div`
  font-size: 12px;
  width: 100%;

  .active {
    color: var(--blue-500);
  }

  .file {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    margin-top: 24px;
    margin-bottom: 12px;
    font-weight: 600;
    font-size: 14px;
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;

    li {
      font-size: 16px;
    }
  }

  #headings {
    border-left: 1px solid var(--blue-500);

    &,
    & ul {
      padding-left: 16px;
      margin-top: 8px;
    }

    .heading {
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const fileToTitle = (f) =>
  f
    .split("-")
    .map((p) => p[0].toUpperCase() + p.slice(1))
    .join(" ");

function Heading({ heading }) {
  let children;
  if (heading.children.length > 0) {
    children = (
      <ul>
        {heading.children.map((c) => (
          <Heading key={c.pos} heading={c} />
        ))}
      </ul>
    );
  }

  return (
    <li>
      <span title="Go to heading" className="heading" data-heading-pos={heading.pos}>
        {heading.text}
      </span>
      {children}
    </li>
  );
}

export const TableOfContents = ({ indexedFiles, currentFile, onFileClick }) => {
  const { headings, editorView } = useContext(MystState);
  const fileList = indexedFiles.map((f) => ({ ...f, title: fileToTitle(f.fileName) }));

  function handleHeadingClick(ev) {
    const posAttr = ev.target?.dataset?.headingPos;
    if (!posAttr) return;
    const pos = parseInt(posAttr, 10);
    editorView.value.dispatch({ selection: { anchor: pos, head: pos }, effects: EditorView.scrollIntoView(pos, { y: "start" }) });
  }

  return (
    <List>
      <p>Page index:</p>
      <ul>
        {fileList.map((f) => {
          return (
            <li key={f.file}>
              <span className={`file ${currentFile.startsWith(f.file) ? "active" : ""}`} title="Go to file" onClick={() => onFileClick(f)}>
                {f.title}
              </span>
              {currentFile.startsWith(f.file) && (
                <ul id="headings" onClick={handleHeadingClick}>
                  {headings.value.map((h) => (
                    <Heading heading={h} key={h.pos} />
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </List>
  );
};
