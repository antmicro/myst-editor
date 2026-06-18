import styled from "styled-components";
import { TableOfContents } from "./TableOfContents";

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

// Page-index data and `switchFile` are computed in MystEditorGit and passed in so an external integration can reuse them.
const Sidebar = ({ file, branch, commit, getText, indexFile, indexedFiles, unIndexedFiles, markedFiles, switchFile }) => {
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
