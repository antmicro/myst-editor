import { MystEditorPreact } from "../MystEditor";
import { render } from "preact";
import { useEffect, useRef } from "preact/hooks";
import { batch, useComputed, useSignal, useSignalEffect } from "@preact/signals";
import { createMystState, MystState } from "../mystState";
import styled, { StyleSheetManager } from "styled-components";
import Select from "./Select";
import * as Y from "yjs";

const MystContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 100%;
  height: 100%;
  font-family: "Lato";
`;

const GitSidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 25px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 24px;
  overscroll-behavior: contain;

  label {
    display: block;
    color: white;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
    font-size: 14px;
  }
`;

const ChangeHistory = styled.div`
  color: white;
  font-size: 12px;
  width: 100%;

  p:first-child {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
    font-size: 14px;
  }

  .history-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow-y: auto;
    scrollbar-width: thin;
  }

  button {
    cursor: pointer;
    background: white;
    border: none;
    font-family: "Lato";
    font-weight: 600;
    display: flex;
    text-align: left;
    padding: 0.25rem;
    border-radius: var(--border-radius);
    flex-direction: column;
    gap: 0.5rem;

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

const MystEditorGit = ({
  repo = "repo",
  initialBranches = ["main"],
  getBranches = async () => [],
  searchBranches = async () => [],
  getCommits = async () => [],
  searchCommits = async () => [],
  getFiles = async () => [],
  getText = async () => "",
  initialHistory = [],
  storeHistory = () => {},
  initialState = null,
  ...props
}) => {
  const branches = useSignal(initialBranches);
  const branch = useSignal(initialBranches[0]);
  const commits = useSignal([]);
  const commit = useSignal();
  const files = useSignal([]);
  const file = useSignal();
  const initialText = useSignal("");
  const room = useComputed(() => (commit.value && file.value ? `${repo}/${commit.value.hash}/${encodeURIComponent(file.value)}` : ""));
  const mystState = useRef(createMystState({ ...props }));
  const changeHistory = useSignal(initialHistory);

  useEffect(() => {
    window.myst_editor[props.id].state = mystState.current;
    window.myst_editor[props.id].git = { branch, commits, commit, files, file, initialText, room };
  }, [mystState.current, props.id]);

  useSignalEffect(() => {
    mystState.current.options.initialText = initialText.value;
  });

  useSignalEffect(() => {
    const collaboration = mystState.current.options.collaboration.peek();
    mystState.current.options.collaboration.value = { ...collaboration, room: room.value };
  });

  async function switchBranch(newBranch, isNew = false) {
    if (isNew) {
      branches.value = [newBranch, ...branches.value];
    }
    const resolvedCommits = await getCommits(newBranch, 1);
    const resolvedFiles = await getFiles(newBranch, resolvedCommits[0]);
    const currentFile = file.peek();
    const resolvedFile = resolvedFiles.includes(currentFile) ? currentFile : resolvedFiles[0];
    const text = await getText(newBranch, resolvedCommits[0], resolvedFile);
    batch(() => {
      branch.value = newBranch;
      commits.value = resolvedCommits;
      commit.value = resolvedCommits[0];
      files.value = resolvedFiles;
      file.value = resolvedFile;
      initialText.value = text;
    });
  }

  async function loadBranches(page) {
    const moreBranches = await getBranches(page);
    if (moreBranches.length == 0) throw "Empty branches";
    branches.value = [...branches.value, ...moreBranches];
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

  const gotoRoomFromUrl = async () => {
    if (!branches.value.includes(initialState.branch)) {
      branches.value = [initialState.branch, ...branches.value];
    }

    let resolvedCommits = await getCommits(initialState.branch, 1);
    if (!resolvedCommits.some((c) => c.hash == initialState.commit.hash)) {
      resolvedCommits = [initialState.commit, ...resolvedCommits];
    }
    const resolvedFiles = await getFiles(initialState.branch, initialState.commit);
    const text = await getText(initialState.branch, initialState.commit, initialState.file);

    batch(() => {
      branch.value = initialState.branch;
      commits.value = resolvedCommits;
      commit.value = initialState.commit;
      files.value = resolvedFiles;
      file.value = initialState.file;
      initialText.value = text;
    });
  };

  // Since we need to make some async calls, we cannot just pass initial values to signals
  useEffect(() => {
    if (initialState) {
      gotoRoomFromUrl(initialState);
    } else {
      switchBranch(initialBranches[0]);
    }
  }, [initialBranches, initialState]);

  async function switchCommit(newCommit, isNew = false) {
    if (isNew) {
      commits.value = [newCommit, ...commits.value];
    }
    const newCommitFromList = commits.peek().find((c) => c.hash == newCommit.hash);
    const resolvedFiles = await getFiles(branch.peek(), newCommitFromList);
    const currentFile = file.peek();
    const resolvedFile = resolvedFiles.includes(currentFile) ? currentFile : resolvedFiles[0];
    const text = await getText(branch.peek(), newCommitFromList, resolvedFile);
    batch(() => {
      commit.value = newCommitFromList;
      files.value = resolvedFiles;
      file.value = resolvedFile;
      initialText.value = text;
    });
  }

  async function loadCommits(page) {
    const moreCommits = await getCommits(branch.value, page);
    if (moreCommits.length == 0) throw "Empty commits";
    commits.value = [...commits.value, ...moreCommits];
  }

  async function switchFile(newFile) {
    const text = await getText(branch.peek(), commit.peek(), newFile);
    batch(() => {
      file.value = newFile;
      initialText.value = text;
    });
  }

  const branchToSelectOpt = (b) => ({ label: b, value: b });
  const commitToSelectOpt = (c) => ({ label: c.message, value: c.hash });
  const fileToSelectOpt = (f) => ({ label: f, value: f });

  useSignalEffect(() => {
    const doc = mystState.current.collab.ydoc.value;
    if (!doc) return;

    const handleChange = (/** @type {Y.Transaction} */ tr) => {
      if (tr.local && tr.origin) {
        const old = changeHistory.peek().filter((ch) => ch.room != room.peek());
        changeHistory.value = [{ branch: branch.peek(), commit: commit.peek(), file: file.peek(), room: room.peek(), timestamp: Date.now() }, ...old];
        storeHistory(changeHistory.peek());
        doc.off("afterTransaction", handleChange);
      }
    };
    doc.on("afterTransaction", handleChange);

    return () => doc.off("afterTransaction", handleChange);
  });

  return (
    <div style="all: initial;">
      <StyleSheetManager target={props.parent}>
        <MystContainer>
          <GitSidebar>
            <div>
              <label>Branch:</label>
              <Select
                options={branches.value.map(branchToSelectOpt)}
                inputPlaceholder="Search branches"
                onChange={(o, isNew) => switchBranch(o.value, isNew)}
                initialValue={branch.value}
                loadMore={loadBranches}
                searchOptions={(input) => searchBranches(input).then((branches) => branches.map(branchToSelectOpt))}
              />
            </div>
            <div>
              <label>Commit:</label>
              <Select
                options={commits.value.map(commitToSelectOpt)}
                inputPlaceholder="Search commits"
                onChange={(o, isNew) => switchCommit({ hash: o.value, message: o.label }, isNew)}
                loadMore={loadCommits}
                initialValue={commit.value?.hash}
                searchOptions={(input) => searchCommits(input, branch.value).then((commits) => commits.map(commitToSelectOpt))}
              />
            </div>
            <div>
              <label>File:</label>
              <Select
                options={files.value.map(fileToSelectOpt)}
                inputPlaceholder="Search files"
                onChange={(o) => switchFile(o.value)}
                initialValue={file.value}
                searchOptions={async (input) => files.value.filter((f) => f.toLowerCase().includes(input.toLowerCase())).map(fileToSelectOpt)}
              />
            </div>
            <ChangeHistory>
              <p>History:</p>
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
          <MystState.Provider value={mystState.current}>{room.value && <MystEditorPreact />}</MystState.Provider>
        </MystContainer>
      </StyleSheetManager>
    </div>
  );
};

export default ({ additionalStyles, id, ...params }, target) => {
  if (!target.shadowRoot) {
    target.attachShadow({
      mode: "open",
    });
  }
  if (additionalStyles) {
    target.shadowRoot.adoptedStyleSheets = target.shadowRoot.adoptedStyleSheets.filter((s) => !additionalStyles.includes(s));
    target.shadowRoot.adoptedStyleSheets.push(...(Array.isArray(additionalStyles) ? additionalStyles : [additionalStyles]));
  }
  params.parent = target.shadowRoot;

  const editorId = id ?? crypto.randomUUID();
  if (!window.myst_editor) window.myst_editor = {};
  window.myst_editor[editorId] = {};

  const form = target.closest("form");
  if (form) {
    form.addEventListener("formdata", (e) => e.formData.append(params.name, window.myst_editor[id].text));
  }

  // runs Preact cleanup logic when target is removed
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (Array.prototype.findIndex.call(mutation.removedNodes, (n) => n == target) != -1) {
        delete window.myst_editor[editorId];
        render(null, target.shadowRoot);
        observer.disconnect();
      }
    }
  });
  observer.observe(target.parentElement, { childList: true });

  render(<MystEditorGit {...{ ...params, id: editorId }} />, target.shadowRoot);
};
