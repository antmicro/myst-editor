import styled from "styled-components";
import { batch, useComputed } from "@preact/signals";
import { TableOfContents } from "./TableOfContents";
import { useContext } from "preact/hooks";
import { MystState } from "../mystState";

const GitSidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 25px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 24px;
  overscroll-behavior: contain;
  gap: 24px;
  background-color: var(--navbar-bg);
`;

const UnindexedFiles = styled.details`
  width: 100%;

  summary {
    margin-bottom: 12px;
    font-weight: 600;
    font-size: 14px;
    user-select: none;
  }

  ul {
    list-style: none;
    padding-left: 12px;

    li {
      &.active {
        color: var(--accent-dark);
      }
      &.marked::after {
        content: "";
        display: inline-block;
        margin-left: 8px;
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background-color: currentColor;
      }
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;

const Sidebar = ({ docsRoot, files, file, branch, commit, getText, docsWithChanges, indexFile, index }) => {
  const { options } = useContext(MystState);

  async function switchFile(newFile) {
    const text = await getText(branch.peek(), commit.peek(), newFile);
    batch(() => {
      file.value = newFile;
      options.initialText.value = text;
    });
  }

  const indexedFiles = useComputed(() => {
    const entries = index ? [{ file: index, fileName: index }] : [];
    const start = "```{toctree}";
    if (indexFile.value?.includes(start)) {
      let body = indexFile.value.slice(indexFile.value.indexOf(start) + start.length);
      if (body.includes("```")) {
        body = body.slice(0, body.indexOf("```"));
        let prefix = docsRoot;
        if (prefix === "." || prefix === "./") prefix = "";
        if (prefix !== "") prefix += "/";
        entries.push(
          ...body
            .split("\n")
            .map((l) => l.trim())
            .filter((l) => l && !l.startsWith(":"))
            .map((f) => ({ file: prefix + f + ".md", fileName: f })),
        );
      }
    }
    return entries.filter((f) => files.value.some((file) => file == f.file));
  });
  const unIndexedFiles = useComputed(() => files.value.filter((f) => !indexedFiles.value.some((iF) => iF.file === f)));
  const markedFiles = useComputed(() =>
    files.value.filter((f) =>
      docsWithChanges.value.some(
        ({ branch: branchName, commitHash, file }) => branchName == branch.value && commit.value.hash === commitHash && f == file,
      ),
    ),
  );

  return (
    <GitSidebar>
      {indexFile.value && file.value && (
        <TableOfContents
          indexedFiles={indexedFiles}
          markedFiles={markedFiles}
          currentFile={file.value}
          onFileClick={(f) => switchFile(f.file)}
          getText={getText}
          branch={branch}
          commit={commit}
        />
      )}
      {unIndexedFiles.value.length > 0 && (
        <UnindexedFiles>
          <summary>Unindexed files:</summary>
          <ul id="unindexed-files-list">
            {unIndexedFiles.value.map((f) => (
              <li
                key={f}
                title="Go to file"
                onClick={() => switchFile(f)}
                className={`${file.value == f ? "active" : ""} ${markedFiles.value.includes(f) ? "marked" : ""}`}
              >
                {f}
              </li>
            ))}
          </ul>
        </UnindexedFiles>
      )}
    </GitSidebar>
  );
};

export default Sidebar;
