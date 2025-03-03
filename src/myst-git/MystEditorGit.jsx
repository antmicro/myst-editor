import { MystEditorPreact, defaultButtons } from "../MystEditor";
import { render } from "preact";
import { useEffect, useRef } from "preact/hooks";
import { batch, useComputed, useSignal, useSignalEffect } from "@preact/signals";
import { createMystState, MystState } from "../mystState";
import styled, { StyleSheetManager } from "styled-components";
import Select from "./Select";
import * as Y from "yjs";
import CommitModal, { Popup } from "./CommitModal";
import { useWatchChanges } from "./useWatchChanges";
import { MystCSSVars } from "../styles/MystStyles";

const MystContainer = styled(MystCSSVars)`
  --text: black;
  color: var(--text);
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 100%;
  height: 100%;
  font-family: "Lato";
  position: relative;
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
    margin-top: 24px;
    margin-bottom: 12px;
    font-weight: 600;
    font-size: 14px;
  }
`;

const ChangeHistory = styled.div`
  font-size: 12px;
  width: 100%;

  p:first-child {
    margin-top: 24px;
    margin-bottom: 12px;
    font-weight: 600;
    font-size: 14px;
  }

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

const Toast = styled(Popup)`
  background-color: white;
  position: absolute;
  top: 10px;
  left: 50%;
  z-index: 11;
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 15px;
  gap: 15px;
  border-radius: var(--border-radius);

  button {
    color: gray;
    background: transparent;
    border: none;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
  }

  a {
    display: inline-block;
    color: var(--blue-500);
  }
`;

const CommitIcon = () => (
  <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17.5 24.2941V18.1277C17.4997 17.8572 17.446 17.5895 17.3421 17.3398C17.2383 17.0901 17.0862 16.8634 16.8946 16.6725C16.703 16.4817 16.4757 16.3304 16.2256 16.2275C15.9755 16.1246 15.7076 16.0719 15.4372 16.0726H8.56282C8.29239 16.0719 8.02448 16.1246 7.7744 16.2275C7.52433 16.3304 7.297 16.4817 7.10542 16.6725C6.91383 16.8634 6.76175 17.0901 6.65787 17.3398C6.55398 17.5895 6.50034 17.8572 6.5 18.1277V24.2941M17.5 1.36884V4.42554C17.4997 4.69597 17.446 4.96369 17.3421 5.21337C17.2383 5.46306 17.0862 5.68981 16.8946 5.88068C16.703 6.07154 16.4757 6.22277 16.2256 6.32571C15.9755 6.42865 15.7076 6.48128 15.4372 6.4806H8.56282C8.29239 6.48128 8.02448 6.42865 7.7744 6.32571C7.52433 6.22277 7.297 6.07154 7.10542 5.88068C6.91383 5.68981 6.76175 5.46306 6.65787 5.21337C6.55398 4.96369 6.50034 4.69597 6.5 4.42554V1.00001M17.5 1.36884C16.9633 1.12578 16.3809 1.00004 15.7918 1.00001H6.5M17.5 1.36884C17.9452 1.57072 18.3554 1.85284 18.7087 2.20354L21.7913 5.27707C22.1741 5.65796 22.4779 6.11066 22.6853 6.60922C22.8927 7.10778 22.9997 7.64238 23 8.18237V20.1814C22.9997 20.7224 22.8927 21.258 22.6851 21.7576C22.4776 22.2572 22.1736 22.7109 21.7905 23.0929C21.4075 23.4749 20.9529 23.7776 20.4527 23.9837C19.9525 24.1898 19.4166 24.2953 18.8756 24.2941H5.12565C4.58468 24.2955 4.04874 24.1902 3.54851 23.9842C3.04828 23.7783 2.59356 23.4757 2.21037 23.0938C1.82719 22.712 1.52305 22.2583 1.31536 21.7588C1.10767 21.2593 1.00051 20.7237 1 20.1827V5.11013C1.00068 4.56927 1.10797 4.03384 1.31573 3.53447C1.5235 3.0351 1.82766 2.58159 2.21083 2.19986C2.594 1.81813 3.04866 1.51568 3.54881 1.3098C4.04896 1.10392 4.58478 0.998652 5.12565 1.00001H6.5"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

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
  commitChanges = async () => {},
  ...props
}) => {
  const branches = useSignal(initialBranches);
  const branch = useSignal(initialBranches[0]);
  const commits = useSignal([]);
  const commit = useSignal();
  const files = useSignal([]);
  const file = useSignal();
  const initialText = useSignal("");
  const room = useComputed(() => (commit.value && file.value ? `${repo}/${branch.value}/${commit.value.hash}/${file.value}` : ""));
  const mystState = useRef(createMystState({ ...props, collaboration: { ...props.collaboration, mode: "manual" } }));
  const changeHistory = useSignal(initialHistory);
  const toast = useSignal({ content: null, timeout: null });
  const commitSummary = useSignal(null);
  const commentStateToApply = useRef(null);
  const { docsWithChanges, statusSocket } = useWatchChanges(props, repo);

  useEffect(() => {
    window.myst_editor[props.id].state = mystState.current;
    window.myst_editor[props.id].git = { branch, commits, commit, files, file, initialText, room };
  }, [mystState.current, props.id]);

  useSignalEffect(() => {
    mystState.current.options.initialText = initialText.value;
  });

  useSignalEffect(() => {
    if (!room.value) return;
    const collaboration = mystState.current.options.collaboration.peek();
    mystState.current.options.collaboration.value = { ...collaboration, room: room.value, mode: props.collaboration.mode };
  });

  function toastNotify(content) {
    if (toast.value.timeout) {
      clearTimeout(toast.value.timeout);
    }
    toast.value = { content, timeout: setTimeout(() => (toast.value = { content: null }), 5000) };
  }

  const commitButton = {
    tooltip: "Commit",
    icon: CommitIcon,
    action: () => {
      const textChanged = mystState.current.editorView.value.state.doc.toString() != initialText.value;
      if (!textChanged) {
        toastNotify({ text: "No changes to commit" });
        return;
      }
      mystState.current.options.includeButtons.value = defaultButtons;
      mystState.current.collab.value.lock("A commit is being prepared for this document");
      commitSummary.value = `MyST: update docs ${file.value}`;
    },
  };
  async function onCommit({ summary, message }) {
    try {
      commitSummary.value = null;
      const { hash, webUrl } = await commitChanges(message);
      // Let the server know the changes have been commited
      if (!statusSocket.current || statusSocket.current.readyState !== 1) {
        console.warn("Document statuses not available");
      } else {
        statusSocket.current.send(room.peek());
      }
      commentStateToApply.current = mystState.current.collab.value.ycomments.encodeState();
      toastNotify({ text: "Changes have been commited. ", link: { text: "See in Gitlab", href: webUrl } });
      mystState.current.collab.value.provider.awareness.setLocalStateField("newCommit", { hash, message: summary });
      mystState.current.collab.value.unlock();
      switchCommit({ hash, message: summary }, true);
    } catch (error) {
      console.error(error);
      toastNotify({ text: `Error occured while commiting: ${error}` });
      mystState.current.options.includeButtons.value = [...defaultButtons, commitButton];
      mystState.current.collab.value.unlock();
    }
  }
  function onCommitCancel() {
    commitSummary.value = null;
    mystState.current.options.includeButtons.value = [...defaultButtons, commitButton];
    mystState.current.collab.value.unlock();
  }
  useSignalEffect(() => {
    if (commit.value?.hash == commits.value[0]?.hash) {
      mystState.current.options.includeButtons.value = [...defaultButtons, commitButton];
    } else {
      mystState.current.options.includeButtons.value = defaultButtons;
    }
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

  const gotoRoomFromUrl = async () => {
    if (!branches.value.includes(initialState.branch)) {
      branches.value = [initialState.branch, ...branches.value];
    }

    let resolvedCommits = await getCommits(initialState.branch, 1);
    if (!resolvedCommits.some((c) => c.hash == initialState.commit.hash)) {
      resolvedCommits.push(initialState.commit);
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

  useSignalEffect(() => {
    const doc = mystState.current.collab.value.ydoc;
    const awareness = mystState.current.collab.value.provider.awareness;
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

    awareness.on("change", ({ added, updated }) => {
      const ids = [...added, ...updated];
      const states = awareness.getStates();
      for (const id of ids) {
        if (id === awareness.clientID) continue;
        const state = states.get(id);
        if (state.newCommit) {
          switchCommit(state.newCommit, true);
          return;
        }
      }
    });

    // This is done to keep this signal effect from running in a cycle when some singals are updated in applyState.
    queueMicrotask(() => {
      if (commentStateToApply.current != null) {
        mystState.current.collab.value.ycomments.applyState(commentStateToApply.current);
        commentStateToApply.current = null;
      }
    });

    return () => doc.off("afterTransaction", handleChange);
  });

  return (
    <div style="all: initial;">
      <StyleSheetManager target={props.parent}>
        <MystContainer id="myst-git-container">
          <GitSidebar>
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
            </div>
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
          {toast.value.content && (
            <Toast id="toast">
              <span>
                {toast.value.content.text}
                {toast.value.content.link && (
                  <a href={toast.value.content.link.href} target="_blank">
                    {toast.value.content.link.text}
                  </a>
                )}
              </span>
              <button
                title="Dismiss"
                onClick={() => {
                  clearTimeout(toast.value.timeout);
                  toast.value = { content: null };
                }}
              >
                x
              </button>
            </Toast>
          )}
          {commitSummary.value && <CommitModal initialSummary={commitSummary.value} onSubmit={onCommit} onClose={onCommitCancel} />}
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
