import styled from "styled-components";
import { EditorView } from "codemirror";
import { useContext } from "preact/hooks";
import { MystState } from "../mystState";
import { useComputed, useSignal, useSignalEffect } from "@preact/signals";

const List = styled.div`
  font-size: 12px;
  width: 100%;

  .active {
    color: var(--accent-dark);
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

      .marked::after {
        content: "";
        display: inline-block;
        margin-left: 8px;
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background-color: currentColor;
      }
    }
  }

  #headings {
    border-left: 1px solid var(--accent-dark);

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

export const TableOfContents = ({ indexedFiles, markedFiles, currentFile, onFileClick, getText, branch, commit }) => {
  const { headings, editorView } = useContext(MystState);

  const fileList = useSignal([]);
  useSignalEffect(() => {
    const files = indexedFiles.value;
    (async () => {
      for (const f of files) {
        const text = await getText(branch.peek(), commit.peek(), f.file);
        const headingMatch = text.match(/(?:^# (.+))|(?:^(.*)\n=+)/);
        if (!headingMatch) {
          f.title = f.file;
        } else {
          f.title = headingMatch[1] ?? headingMatch[2];
        }
      }
      fileList.value = files;
    })();
  });

  const fileHeadings = useComputed(() => headings.value.flatMap((h, i) => (i == 0 && h.level == 1 && h.pos === 0 ? h.children : h)));

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
          let fileLabel = f.title;
          if (f.file === currentFile) {
            // Use first h1 heading as file label if possible
            if (headings.value[0]?.level === 1 && headings.value[0]?.pos === 0) {
              fileLabel = headings.value[0].text;
            } else {
              // Otherwise use the file path
              fileLabel = currentFile;
            }
          }

          return (
            <li key={f.file}>
              <span
                className={`file ${currentFile.startsWith(f.file) ? "active" : ""} ${markedFiles.value.includes(f.file) ? "marked" : ""}`}
                title={`Go to file ${f.file}`}
                onClick={() => onFileClick(f)}
              >
                {fileLabel}
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
