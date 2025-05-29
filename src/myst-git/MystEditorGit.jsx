import { MystEditorPreact, CollaborationClient } from "../MystEditor";
import { render } from "preact";
import { useContext, useEffect, useRef } from "preact/hooks";
import { batch, effect, useComputed, useSignal, useSignalEffect } from "@preact/signals";
import { createMystState, MystState } from "../mystState";
import styled, { StyleSheetManager } from "styled-components";
import * as Y from "yjs";
import CommitModal from "./CommitModal";
import { useWatchChanges } from "./useWatchChanges";
import { MystCSSVars } from "../styles/MystStyles";
import Sidebar from "./Sidebar";
import { createLogger, Logger } from "../logger";

const MystContainer = styled(MystCSSVars)`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 100%;
  height: 100%;
  font-family: "Lato";
  position: relative;

  button,
  input,
  dialog,
  textarea {
    color: inherit;
  }
`;

const Toast = styled.div`
  background-color: var(--button-bg);
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
    color: var(--border);
    background: transparent;
    border: none;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
  }

  a {
    display: inline-block;
    color: var(--accent-dark);
  }
`;

const CommitIcon = () => (
  <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17.5 24.2941V18.1277C17.4997 17.8572 17.446 17.5895 17.3421 17.3398C17.2383 17.0901 17.0862 16.8634 16.8946 16.6725C16.703 16.4817 16.4757 16.3304 16.2256 16.2275C15.9755 16.1246 15.7076 16.0719 15.4372 16.0726H8.56282C8.29239 16.0719 8.02448 16.1246 7.7744 16.2275C7.52433 16.3304 7.297 16.4817 7.10542 16.6725C6.91383 16.8634 6.76175 17.0901 6.65787 17.3398C6.55398 17.5895 6.50034 17.8572 6.5 18.1277V24.2941M17.5 1.36884V4.42554C17.4997 4.69597 17.446 4.96369 17.3421 5.21337C17.2383 5.46306 17.0862 5.68981 16.8946 5.88068C16.703 6.07154 16.4757 6.22277 16.2256 6.32571C15.9755 6.42865 15.7076 6.48128 15.4372 6.4806H8.56282C8.29239 6.48128 8.02448 6.42865 7.7744 6.32571C7.52433 6.22277 7.297 6.07154 7.10542 5.88068C6.91383 5.68981 6.76175 5.46306 6.65787 5.21337C6.55398 4.96369 6.50034 4.69597 6.5 4.42554V1.00001M17.5 1.36884C16.9633 1.12578 16.3809 1.00004 15.7918 1.00001H6.5M17.5 1.36884C17.9452 1.57072 18.3554 1.85284 18.7087 2.20354L21.7913 5.27707C22.1741 5.65796 22.4779 6.11066 22.6853 6.60922C22.8927 7.10778 22.9997 7.64238 23 8.18237V20.1814C22.9997 20.7224 22.8927 21.258 22.6851 21.7576C22.4776 22.2572 22.1736 22.7109 21.7905 23.0929C21.4075 23.4749 20.9529 23.7776 20.4527 23.9837C19.9525 24.1898 19.4166 24.2953 18.8756 24.2941H5.12565C4.58468 24.2955 4.04874 24.1902 3.54851 23.9842C3.04828 23.7783 2.59356 23.4757 2.21037 23.0938C1.82719 22.712 1.52305 22.2583 1.31536 21.7588C1.10767 21.2593 1.00051 20.7237 1 20.1827V5.11013C1.00068 4.56927 1.10797 4.03384 1.31573 3.53447C1.5235 3.0351 1.82766 2.58159 2.21083 2.19986C2.594 1.81813 3.04866 1.51568 3.54881 1.3098C4.04896 1.10392 4.58478 0.998652 5.12565 1.00001H6.5"
      stroke="currentColor"
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
  index = null,
  docsRoot = "",
  ...props
}) => {
  const branches = useSignal(initialBranches);
  const branch = useSignal(initialBranches[0]);
  const commits = useSignal([]);
  const commit = useSignal();
  const files = useSignal([]);
  const file = useSignal();
  const room = useComputed(() => (commit.value && file.value ? `${repo}/${branch.value}/${commit.value.hash}/${file.value}` : ""));
  const changeHistory = useSignal(initialHistory);
  const toast = useSignal({ content: null, timeout: null });
  const commitSummary = useSignal(null);
  const commentStateToApply = useRef(null);
  const { docsWithChanges, statusSocket } = useWatchChanges(props, repo);
  const indexFile = useSignal();
  const { collab, options } = useContext(MystState);
  const commitDocuments = useRef(null);

  useEffect(() => {
    window.myst_editor[props.id].git = { branch, commits, commit, files, file, room, statusSocket };
  }, [props.id]);

  useSignalEffect(() => {
    if (!room.value) return;
    const collaboration = options.collaboration.peek();
    options.collaboration.value = { ...collaboration, room: room.value, mode: props.collaboration.mode };
  });

  function toastNotify(content) {
    if (toast.value.timeout) {
      clearTimeout(toast.value.timeout);
    }
    toast.value = { content, timeout: setTimeout(() => (toast.value = { content: null }), 5000) };
  }

  const commitButton = {
    id: "commit",
    tooltip: "Compare changes and commit",
    icon: CommitIcon,
    action: async () => {
      options.includeButtons.value = options.includeButtons.peek().filter((b) => b.id != "commit");
      const changedFiles = docsWithChanges
        .peek()
        .filter((d) => d.branch === branch.peek() && d.commitHash === commit.peek().hash)
        .map(({ file }) => file);
      const otherFiles = changedFiles.filter((f) => f !== file.peek());
      let documents = await setupFileConnections(repo, props, branch.peek(), commit.peek().hash, otherFiles, getText);
      if (otherFiles.length < changedFiles.length) {
        documents.unshift({
          client: collab.peek(),
          file: file.peek(),
          initialText: options.initialText.peek(),
          text: collab.peek().ytext.toString(),
        });
      }
      documents = documents.map((d) => ({ ...d, textChanged: d.text != d.initialText, commentCount: d.client.ycomments.comments.peek().length }));

      // Filter out documents without any changes and remove the change mark from the UI for them all
      const unchangedDocs = documents.filter((d) => !d.textChanged && d.commentCount == 0);
      cleanupConnections(unchangedDocs, collab);
      unchangedDocs.map((d) => d.client.provider.roomname).forEach((r) => statusSocket.current.send(r));
      documents = documents.filter((d) => d.textChanged || d.commentCount > 0);

      if (!documents.some((d) => d.textChanged)) {
        toastNotify({ text: "No changes to commit" });
        options.includeButtons.value = [...options.includeButtons.peek(), commitButton];
        return;
      }
      documents.forEach(({ client }) => client.lock("A commit is being prepared for this document"));
      commitDocuments.current = documents;
      commitSummary.value = `MyST: update docs ${documents.map(({ file }) => file).join(", ")}`;
    },
  };
  async function onCommit({ summary, message, stagedDocs }) {
    let newConnections = [];
    try {
      commitSummary.value = null;
      const { hash, webUrl } = await commitChanges(
        message,
        commitDocuments.current.filter((d) => d.textChanged && stagedDocs.includes(d.file)),
      );
      // Let the server know the changes have been commited
      if (!statusSocket.current || statusSocket.current.readyState !== 1) {
        console.warn("Document statuses not available");
      } else {
        // Let the server know the changes have been commited (also includes comments)
        commitDocuments.current
          .filter((d) => (d.textChanged && stagedDocs.includes(d.file)) || (!d.textChanged && d.commentCount > 0))
          .forEach(({ client }) => statusSocket.current.send(client.provider.roomname));
      }
      // Store comment information for the other files, do not include comments from files where text changed but were not committed
      const commentStates = commitDocuments.current
        .filter((d) => d.client != collab.peek() && d.commentCount > 0 && (!d.textChanged || stagedDocs.includes(d.file)))
        .reduce((states, { client, file }) => ({ ...states, [file]: client.ycomments.encodeState() }), {});
      // Store comments for this file
      commentStateToApply.current = collab.value.ycomments.encodeState();
      toastNotify({ text: "Changes have been commited. ", link: { text: "See in Gitlab", href: webUrl } });
      commitDocuments.current.forEach(({ client }) => client.provider.awareness.setLocalStateField("newCommit", { hash, message: summary }));
      cleanupConnections(commitDocuments.current, collab);
      commitDocuments.current = null;

      switchCommit({ hash, message: summary }, true);

      // Move comments over in other files
      newConnections = await setupFileConnections(repo, props, branch.peek(), hash, Object.keys(commentStates));
      newConnections.forEach(({ client, file }) => client.ycomments.applyState(commentStates[file]));
    } catch (error) {
      console.error(error);
      toastNotify({ text: `Error occured while commiting: ${error}` });
      cleanupConnections(commitDocuments.current, collab);
      commitDocuments.current = null;
    } finally {
      cleanupConnections(newConnections, collab);
      options.includeButtons.value = [...options.includeButtons.peek(), commitButton];
    }
  }
  function onCommitCancel() {
    commitSummary.value = null;
    options.includeButtons.value = [...options.includeButtons.peek(), commitButton];
    cleanupConnections(commitDocuments.current, collab);
    commitDocuments.current = null;
  }

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
      options.initialText.value = text;
    });
  }

  const gotoInitialRoom = async () => {
    const currBranch = initialState.branch ?? branches.peek()[0];
    if (!branches.value.includes(currBranch)) {
      branches.value = [currBranch, ...branches.value];
    }

    const resolvedCommits = await getCommits(currBranch, 1);
    const currCommit = initialState.commit ?? resolvedCommits[0];
    if (!resolvedCommits.some((c) => c.hash == currCommit.hash)) {
      resolvedCommits.push(currCommit);
    }

    const resolvedFiles = await getFiles(currBranch, currCommit);
    const currFile = initialState.file && resolvedFiles.includes(initialState.file) ? initialState.file : resolvedFiles[0];
    const text = await getText(currBranch, currCommit, currFile);

    batch(() => {
      branch.value = currBranch;
      commits.value = resolvedCommits;
      commit.value = currCommit;
      files.value = resolvedFiles;
      file.value = currFile;
      options.initialText.value = text;
    });
  };

  // Since we need to make some async calls, we cannot just pass initial values to signals
  useEffect(() => {
    if (initialState) {
      gotoInitialRoom(initialState);
    } else {
      switchBranch(initialBranches[0]);
    }
    options.includeButtons.value = [...options.includeButtons.peek(), commitButton];
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
      options.initialText.value = text;
    });
  }

  useSignalEffect(() => {
    const doc = collab.value.ydoc;
    const awareness = collab.value.provider.awareness;
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
        collab.value.ycomments.applyState(commentStateToApply.current);
        commentStateToApply.current = null;
      }
    });

    return () => doc.off("afterTransaction", handleChange);
  });

  useSignalEffect(() => {
    if (!branch.value || !commit.value?.hash) return;
    getText(branch.value, commit.value, index).then((txt) => (indexFile.value = txt));
  });

  return (
    <div style="all: initial;">
      <StyleSheetManager target={props.parent}>
        <MystContainer id="myst-css-namespace">
          <Sidebar
            {...{
              searchBranches,
              searchCommits,
              docsRoot,
              branches,
              branch,
              commits,
              commit,
              files,
              file,
              getBranches,
              getCommits,
              getText,
              docsWithChanges,
              switchBranch,
              switchCommit,
              indexFile,
              changeHistory,
            }}
          />
          {toast.value.content && (
            <Toast id="toast">
              <span>
                {toast.value.content.text}
                {toast.value.content.link && (
                  <a href={toast.value.content.link.href} target="_blank" rel="noreferrer">
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
          <CommitModal
            initialSummary={commitSummary.value}
            onSubmit={onCommit}
            onClose={onCommitCancel}
            documents={commitDocuments.current?.filter?.((d) => d.textChanged) ?? []}
            parent={props.parent}
            latestCommit={commits.value?.[0]?.hash == commit.value?.hash}
            statusSocket={statusSocket}
          />
          {room.value && <MystEditorPreact />}
        </MystContainer>
      </StyleSheetManager>
    </div>
  );
};

export default ({ additionalStyles, id, ...params }, /** @type {HTMLElement} */ target) => {
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

  const fileLinkTransform = {
    target: /\[\[(.+)\]\]/g,
    transform: async (input, file) => {
      const fileFull = file + ".md";
      const files = window.myst_editor[editorId].git.files.peek();
      if (!files.includes(fileFull)) return `<span title="Invalid file path">${input}</span>`;
      const text = await params.getText(window.myst_editor[editorId].git.branch.peek(), window.myst_editor[editorId].git.commit.peek(), fileFull);
      const heading = text.match(/^# .+$/gm);
      const fileName = heading ? heading[0].slice(2) : file;

      return `<span class="file-link" title="Switch to file" data-file-link="${fileFull}">${fileName}</span>`;
    },
  };

  const state = createMystState({
    id: editorId,
    ...params,
    collaboration: { ...params.collaboration, mode: "manual" },
    transforms: [...params.transforms, fileLinkTransform],
    onPreviewClick: (ev) => {
      if (params.onPreviewClick?.(ev)) return true;
      const file = ev.target.dataset?.fileLink;
      if (!file) return false;

      ev.preventDefault();
      ev.stopPropagation();
      (async () => {
        const text = await params.getText(window.myst_editor[editorId].git.branch.peek(), window.myst_editor[editorId].git.commit.peek(), file);
        batch(() => {
          window.myst_editor[editorId].git.file.value = file;
          window.myst_editor[editorId].state.options.initialText.value = text;
        });
      })();
      return true;
    },
    onDiscardChanges: () => {
      // Unmark file in the sidebar
      window.myst_editor[editorId].git.statusSocket.current.send(window.myst_editor[editorId].git.room.peek());
      params.onDiscardChanges?.();
    },
  });
  window.myst_editor[editorId].state = state;
  const logger = createLogger(state);
  window.myst_editor[editorId].logger = logger;

  render(
    <MystState.Provider value={state}>
      <Logger.Provider value={logger}>
        <MystEditorGit id={editorId} {...params} />
      </Logger.Provider>
    </MystState.Provider>,
    target.shadowRoot,
  );
};

async function setupFileConnections(repo, props, branch, commitHash, files, getText) {
  return await Promise.all(
    files.map(
      (file) =>
        new Promise(async (res) => {
          const initialText = getText ? await getText(branch, { hash: commitHash }, file) : null;
          const client = new CollaborationClient(
            {
              wsUrl: props.collaboration.wsUrl,
              room: `${repo}/${branch}/${commitHash}/${file}`,
              mode: "websocket",
              commentsEnabled: true,
            },
            { id: props.id },
          );
          effect(() => {
            if (!client.ready.value) return;
            res({ client, file, text: client.ytext.toString(), initialText });
          });
        }),
    ),
  );
}

function cleanupConnections(documents, currClient) {
  documents.forEach(({ client }) => {
    client.unlock();
    if (client != currClient.peek()) client.destroy();
  });
}
