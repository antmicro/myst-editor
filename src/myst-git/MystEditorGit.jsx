import { MystEditorPreact } from "../MystEditor";
import { render } from "preact";
import { useEffect, useRef } from "preact/hooks";
import { batch, useComputed, useSignal, useSignalEffect } from "@preact/signals";
import { createMystState, MystState } from "../mystState";
import styled, { StyleSheetManager } from "styled-components";

const MystContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  height: 100%;
`;

const MystEditorGit = ({
  repo = "repo",
  branches = ["main"],
  getCommits = async () => [],
  getFiles = async () => [],
  getText = async () => "",
  ...props
}) => {
  const branch = useSignal(branches[0]);
  const commits = useSignal([]);
  const commit = useSignal();
  const files = useSignal([]);
  const file = useSignal();
  const initialText = useSignal("");
  const room = useComputed(() => (commit.value && file.value ? `${repo}/${commit.value.hash}/${encodeURIComponent(file.value)}` : ""));
  const mystState = useRef(createMystState({ ...props }));

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

  async function switchBranch(newBranch) {
    const resolvedCommits = await getCommits(newBranch);
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

  // Since we need to make some async calls, we cannot just pass initial values to signals
  useEffect(() => {
    switchBranch(branches[0]);
  }, [branches]);

  async function switchCommit(newCommit) {
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

  async function switchFile(newFile) {
    const text = await getText(branch.peek(), commit.peek(), newFile);
    batch(() => {
      file.value = newFile;
      initialText.value = text;
    });
  }

  return (
    <StyleSheetManager target={props.parent}>
      <MystContainer>
        <div>
          <label>
            Branch:
            <select value={branch.name} onChange={(e) => switchBranch(e.target.value)}>
              {branches.map((b) => (
                <option value={b} key={b}>
                  {b}
                </option>
              ))}
            </select>
          </label>
          <label>
            Commit:
            <select value="{commit.value?.name}" onChange={(e) => switchCommit({ hash: e.target.value })}>
              {commits.value.map((c) => (
                <option value={c.hash} key={c}>
                  {c.message}
                </option>
              ))}
            </select>
          </label>
          <label>
            File:
            <select value={file.value?.name} onChange={(e) => switchFile(e.target.value)}>
              {files.value.map((f) => (
                <option value={f} key={f}>
                  {f}
                </option>
              ))}
            </select>
          </label>
        </div>
        <MystState.Provider value={mystState.current}>{room.value && <MystEditorPreact />}</MystState.Provider>
      </MystContainer>
    </StyleSheetManager>
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
