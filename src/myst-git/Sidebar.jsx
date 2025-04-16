import styled from "styled-components";
import Select from "./Select";
import { batch, useComputed } from "@preact/signals";
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

  label {
    display: block;
    margin-bottom: 12px;
    font-weight: 600;
    font-size: 14px;
  }

  .others {
    font-size: 12px;
    margin: 0;
    margin-top: 6px;
  }
`;

const SidebarDetails = styled.details`
  width: 100%;

  summary {
    margin-bottom: 12px;
    font-weight: 600;
    font-size: 14px;
    user-select: none;
  }
`;

const ChangeHistory = styled(SidebarDetails)`
  font-size: 12px;

  .history-wrapper {
    display: flex;
    flex-direction: column;
    gap: 24px;
    overflow-y: auto;
    scrollbar-width: thin;
  }

  button {
    cursor: pointer;
    background: white;
    border: 1px solid var(--icon-border);
    font-family: "Lato";
    font-weight: 600;
    display: flex;
    text-align: left;
    padding: 6px;
    border-radius: var(--border-radius);
    flex-direction: column;
    gap: 12px;

    &:hover {
      background: var(--icon-selected);
    }

    .hash,
    .date {
      font-weight: normal;
    }

    .commit-msg {
      display: block;
    }
  }
`;

const UnindexedFiles = styled(SidebarDetails)`
  ul {
    list-style: none;
    padding-left: 12px;

    li {
      &.active {
        color: var(--blue-500);
      }
      &.marked::after {
        content: "";
        display: inline-block;
        margin-left: 8px;
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background-color: var(--gray-800);
      }
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;

const Sidebar = ({
  searchBranches,
  searchCommits,
  docsRoot,
  branches,
  branch,
  commits,
  commit,
  files,
  file,
  initialText,
  getBranches,
  getCommits,
  getText,
  docsWithChanges,
  switchBranch,
  switchCommit,
  indexFile,
  changeHistory,
}) => {
  async function loadBranches(page) {
    const moreBranches = await getBranches(page);
    if (moreBranches.length == 0) throw "Empty branches";
    branches.value = [...new Set([...branches.value, ...moreBranches])];
  }

  const gotoChangeFromHistory = (histEntry) => {
    batch(() => {
      if (!branches.value.includes(histEntry.branch)) {
        branches.value = [histEntry.branch, ...branches.value];
      }
      branch.value = histEntry.branch;

      if (!commits.value.find((c) => c.hash == histEntry.commit.hash)) {
        commits.value = [histEntry.commit, ...commits.value];
      }
      commit.value = histEntry.commit;

      file.value = histEntry.file;
      initialText.value = "";
    });
  };

  async function loadCommits(page) {
    let moreCommits = await getCommits(branch.value, page);
    if (moreCommits.length == 0) throw "Empty commits";
    moreCommits = moreCommits.filter((newC) => !commits.value.some((oldC) => newC.hash == oldC.hash));
    commits.value = [...commits.value, ...moreCommits];
  }

  async function switchFile(newFile) {
    const text = await getText(branch.peek(), commit.peek(), newFile);
    batch(() => {
      file.value = newFile;
      initialText.value = text;
    });
  }

  const indexedFiles = useComputed(() => {
    if (!indexFile.value) return [];
    const start = "```{toctree}";
    if (!indexFile.value.includes(start)) return;
    let file = indexFile.value.slice(indexFile.value.indexOf(start) + start.length);
    if (!file.includes("```")) return;
    file = file.slice(0, file.indexOf("```"));
    let prefix = docsRoot;
    if (prefix === "." || prefix === "./") prefix = ""; // these 3 should be equivalent meaning "top-level dir"
    if (prefix !== "") prefix += "/"; // unless in top-level dir, add slash to at end
    return file
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l && !l.startsWith(":"))
      .map((f) => ({ file: prefix + f + ".md", fileName: f }))
      .filter((f) => files.value.some((file) => file == f.file));
  });
  const unIndexedFiles = useComputed(() => files.value.filter((f) => !indexedFiles.value.some((iF) => iF.file === f)));
  const markedFiles = useComputed(() =>
    files.value.filter((f) =>
      docsWithChanges.value.some(
        ({ branch: branchName, commitHash, file }) => branchName == branch.value && commit.value.hash === commitHash && f == file,
      ),
    ),
  );

  const branchToSelectOpt = (b) => ({ label: b, value: b, marked: docsWithChanges.value.some((desc) => desc.branch === b) });
  const commitToSelectOpt = (c) => ({
    label: c.message,
    value: c.hash,
    marked: docsWithChanges.value.some((desc) => desc.branch === branch.peek() && desc.commitHash === c.hash),
  });
  const fileToSelectOpt = (f) => ({
    label: f,
    value: f,
    marked: docsWithChanges.value.some(
      ({ branch: branchName, commitHash, file }) => branchName == branch.peek() && commit.peek().hash === commitHash && f == file,
    ),
  });

  const otherBranchesWithChanges = useComputed(() => {
    const branchesWithChanges = new Set(docsWithChanges.value.map(({ branch }) => branch));
    console.log(branchesWithChanges);
    branchesWithChanges.delete(branch.value);
    return branchesWithChanges.size;
  });
  const otherCommitsWithChanges = useComputed(() => {
    if (!commit.value) return 0;
    const commitsWithChanges = new Set(docsWithChanges.value.filter(({ branch: b }) => b == branch.value).map(({ commitHash }) => commitHash));
    commitsWithChanges.delete(commit.value.hash);
    return commitsWithChanges.size;
  });

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
      <UnindexedFiles>
        <summary>Unindexed files:</summary>
        <ul>
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
      <div>
        <label>File:</label>
        <Select
          name="files"
          options={files.value.map(fileToSelectOpt)}
          inputPlaceholder="Search files"
          onChange={(o) => switchFile(o.value)}
          initialValue={file.value}
          searchOptions={async (input) => files.value.filter((f) => f.toLowerCase().includes(input.toLowerCase())).map(fileToSelectOpt)}
        />
      </div>
      <div>
        <label>Branch:</label>
        <Select
          name="branches"
          options={branches.value.map(branchToSelectOpt)}
          inputPlaceholder="Search branches"
          onChange={(o, isNew) => switchBranch(o.value, isNew)}
          initialValue={branch.value}
          loadMore={loadBranches}
          searchOptions={(input) => searchBranches(input).then((branches) => branches.map(branchToSelectOpt))}
        />
        {otherBranchesWithChanges > 0 && (
          <p className="others">
            {otherBranchesWithChanges} other {otherBranchesWithChanges == 1 ? "branch has" : "branches have"} changes
          </p>
        )}
      </div>
      <div>
        <label>Commit:</label>
        <Select
          name="commits"
          options={commits.value.map(commitToSelectOpt)}
          inputPlaceholder="Search commits"
          onChange={(o, isNew) => switchCommit({ hash: o.value, message: o.label }, isNew)}
          loadMore={loadCommits}
          initialValue={commit.value?.hash}
          searchOptions={(input) => searchCommits(input, branch.value).then((commits) => commits.map(commitToSelectOpt))}
        />
        {otherCommitsWithChanges > 0 && (
          <p className="others">
            {otherCommitsWithChanges} other commit{otherCommitsWithChanges != 1 && "s"} on this branch {otherCommitsWithChanges == 1 ? "has" : "have"}{" "}
            changes
          </p>
        )}
      </div>
      <ChangeHistory>
        <summary>History</summary>
        {changeHistory.value.length == 0 ? (
          <p>When you make any changes, you will be able to go back to them later from this panel.</p>
        ) : (
          <div className="history-wrapper">
            {changeHistory.value.map((ch) => (
              <button key={ch.timestamp} onClick={() => gotoChangeFromHistory(ch)}>
                <div className="date">{new Date(ch.timestamp).toLocaleString()}</div>
                <div>{ch.branch}</div>
                <div>
                  <span className="hash">{ch.commit.hash}</span> <span className="commit-msg">{ch.commit.message}</span>
                </div>
                <div>{ch.file}</div>
              </button>
            ))}
          </div>
        )}
      </ChangeHistory>
    </GitSidebar>
  );
};

export default Sidebar;
