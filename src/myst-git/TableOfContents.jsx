import styled from "styled-components";
import { getLineById } from "../markdown/markdownSourceMap";
import { EditorView } from "codemirror";
import { useMemo } from "preact/hooks";

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

const indexToFiles = ({ docsRoot, index, files }) => {
  const start = "```{toctree}";
  if (!index.includes(start)) return;
  let file = index.slice(index.indexOf(start) + start.length);
  if (!file.includes("```")) return;
  file = file.slice(0, file.indexOf("```"));
  return file
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith(":"))
    .map((f) => ({ file: `${docsRoot}/${f}`, title: fileToTitle(f) }))
    .filter((f) => files.some((file) => file.startsWith(f.file)));
};

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
      <span title="Go to heading" className="heading" data-heading-id={heading.lineId}>
        {heading.text}
      </span>
      {children}
    </li>
  );
}

export const TableOfContents = ({ index, docsRoot, currentFile, mystState, onFileClick, files }) => {
  const parsedFiles = useMemo(() => indexToFiles({ docsRoot, index, files }), [docsRoot, index, files]);

  function handleHeadingClick(ev) {
    const lineId = ev.target?.getAttribute("data-heading-id");
    if (!lineId) return;
    const lineNum = getLineById(mystState.text.lineMap, lineId);
    if (!lineNum) return;
    const line = mystState.editorView.value.state.doc.line(lineNum);
    mystState.editorView.value.dispatch({
      selection: { anchor: line.to, head: line.to },
      effects: EditorView.scrollIntoView(line.to, { y: "start" }),
    });
  }

  return (
    <List>
      <p>Table of Contents:</p>
      <ul id="files">
        {parsedFiles.map((f) => {
          return (
            <li key={f.file}>
              <span className={`file ${currentFile.startsWith(f.file) ? "active" : ""}`} title="Go to file" onClick={() => onFileClick(f)}>
                {f.title}
              </span>
              {currentFile.startsWith(f.file) && (
                <ul id="headings" onClick={handleHeadingClick}>
                  {mystState.text.headings.value.map((h) => (
                    <Heading heading={h} key={h.lineId} />
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
