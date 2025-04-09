import styled from "styled-components";
import { EditorView } from "codemirror";
import { useContext } from "preact/hooks";
import { MystState } from "../mystState";
import { useComputed, useSignal, useSignalEffect } from "@preact/signals";

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

export const TableOfContents = ({ indexedFiles, currentFile, onFileClick, getText, branch, commit }) => {
  const { headings, editorView } = useContext(MystState);

  const fileList = useSignal([]);
  useSignalEffect(() => {
    branch.value;
    commit.value;

    const files = indexedFiles.value;
    (async () => {
      for (const f of files) {
        const text = await getText(branch.value, commit.value, f.file);
        const headingMatch = text.match(/^(#+) (.+)/m);
        if (!headingMatch || headingMatch[1].length !== 1) {
          f.title = f.file;
        } else {
          f.title = headingMatch[2];
        }
      }
      fileList.value = files;
    })();
  });

  const fileHeadings = useComputed(() => headings.value.flatMap((h, i) => (i == 0 && h.level == 1 ? h.children : h)));

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
        {fileList.value.map((f) => {
          return (
            <li key={f.file}>
              <span
                className={`file ${currentFile.startsWith(f.file) ? "active" : ""}`}
                title={`Go to file ${f.file}`}
                onClick={() => onFileClick(f)}
              >
                {f.file === currentFile ? (headings.value[0]?.level === 1 ? headings.value[0].text : currentFile) : f.title}
              </span>
              {currentFile.startsWith(f.file) && (
                <ul id="headings" onClick={handleHeadingClick}>
                  {fileHeadings.value.map((h) => (
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
