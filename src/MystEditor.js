import { render } from "preact";
import { useState, useEffect, useReducer, useRef, useMemo } from "preact/hooks";
import { html } from "htm/preact";
import { StyleSheetManager, styled } from "styled-components";
import CodeMirror from "./components/CodeMirror";
import Preview, { PreviewFocusHighlight } from "./components/Preview";
import Diff from "./components/Diff";
import { resetCache } from "./hooks/markdownReplacer";
import { useText } from "./hooks/useText";
import { EditorTopbar } from "./components/Topbar";
import useCollaboration from "./hooks/useCollaboration";
import useComments from "./hooks/useComments";
import ResolvedComments from "./components/Resolved";

if (!window.myst_editor?.isFresh) {
  resetCache();
  window.myst_editor = { isFresh: true };
}

const EditorParent = styled.div`
  font-family: "Lato";
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  ${(props) => props.fullscreen && "position: fixed; left: 0; top: 0; z-index: 10;"}
  ${(props) => {
    switch (props.mode) {
      case "Preview":
        return ".myst-main-editor { display: none } .myst-resolved { display: none }";
      case "Source":
        return ".myst-preview { display: none } .myst-resolved { display: none }";
      case "Diff":
        return ".myst-main-editor { display: none }; .myst-preview { display: none } .myst-resolved { display: none }";
      case "Both":
        return ".myst-resolved { display: none }";
      case "Resolved":
        return ".myst-preview { display: none };";
      default:
        return ``;
    }
  }}
`;

const MystWrapper = styled.div`
  padding: 20px;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(50%, 1fr);
  grid-template-rows: max-content;
  box-sizing: border-box;
  width: 100%;
  position: relative;
  background-color: white;
  ${(props) => props.fullscreen && "box-sizing:border-box; height: calc(100vh - 60px); overflow-y: scroll;"}
`;
MystWrapper.defaultProps = { className: "myst-editor-wrapper" };

const StatusBanner = styled.div`
  height: 40px;
  position: sticky;
  z-index: 10;
  width: 100%;
  top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.error ? "var(--red-500)" : "var(--blue-100)")};
  color: ${(props) => (props.error ? "white" : "inherit")};
  font-weight: 600;
`;

const createExtraScopePlugin = (scope) => {
  const plugin = (element, index, children) => {
    if (element.type == "rule") {
      element.props[0] = element.props[0]
        .split(",")
        .map((x) => `${scope} ${x}`)
        .join(",");
    }
  };

  // Styled-components require the function to have a name
  Object.defineProperty(plugin, "name", { value: `scope-${scope}` });

  return plugin;
};

const hideBodyScrollIf = (val) => (document.documentElement.style.overflow = val ? "hidden" : "visible");

const predefinedButtons = {
  printToPdf: {
    id: "print-to-pdf",
    tooltip: "Print document as pdf",
    action: () => window.print(),
  },
  templateManager: { id: "template-manager" },
  copyHtml: { id: "copy-html", tooltip: "Copy document as HTML" },
  fullscreen: { id: "fullscreen", tooltip: "Fullscreen" },
  refresh: { id: "refresh", tooltip: "Refresh issue links" },
};

const defaultButtons = [
  predefinedButtons.fullscreen,
  predefinedButtons.copyHtml,
  predefinedButtons.refresh,
  predefinedButtons.printToPdf,
  predefinedButtons.templateManager,
];

const MystEditor = ({
  name = "myst_editor_textarea",
  id = "myst_editor_textarea",
  title = null,
  initialMode = "Both",
  initialText = "",
  includeButtons = defaultButtons,
  topbar = true,
  templatelist,
  collaboration = {},
  spellcheckOpts = { dict: "en_US", dictionaryPath: "/dictionaries" },
  customRoles = [],
  transforms = [],
  // this will create a bogus random avatar when no specific getAvatar function is provided
  getAvatar = (login) => `https://secure.gravatar.com/avatar/${login}?s=30&d=identicon`,
  backslashLineBreak = true,
  parent,
}) => {
  const [mode, setMode] = useState(initialMode);
  const [fullscreen, setFullscreen] = useState(false);

  const preview = useRef(null);
  const text = useText({ initialText, transforms, customRoles, preview, backslashLineBreak, parent });

  const [alert, setAlert] = useState(null);
  const [users, setUsers] = useReducer((_, currentUsers) => currentUsers.map((u) => ({ ...u, avatarUrl: getAvatar(u.login) })), []);

  const { provider, undoManager, ytext, ydoc, ready, error } = useCollaboration(collaboration);
  const ycomments = useComments(ydoc, provider, getAvatar);

  const alertFor = (alertText, secs) => {
    setAlert(alertText);
    setTimeout(() => setAlert(null), secs * 1000);
  };

  const buttonActions = {
    "copy-html": () => {
      text.copy();
      alertFor("copied!", 2);
    },
    fullscreen: () => setFullscreen((f) => !f),
    refresh: () => {
      resetCache();
      alertFor("Rich links refreshed!", 1);
      text.refresh();
    },
  };

  const buttons = useMemo(
    () =>
      includeButtons.map((b) => ({
        ...b,
        action: b.action || buttonActions[b.id],
      })),
    [],
  );

  useEffect(() => hideBodyScrollIf(fullscreen), [fullscreen]);

  return html` <div style="all: initial" id="myst-css-namespace">
    <${StyleSheetManager} target=${parent} stylisPlugins=${[createExtraScopePlugin("#myst-css-namespace")]}>
      <${EditorParent} mode=${mode} fullscreen=${fullscreen}>
        ${topbar &&
        html`<${EditorTopbar}
          ...${{
            alert,
            users,
            text,
            templatelist,
            buttons,
            collaboration,
            setMode,
            title,
          }}
        />`}
        ${error && html`<${StatusBanner} error> ${typeof error == "string" ? error : "No connection to the collaboration server"} <//>`}
        ${collaboration.enabled && !ready && !error && html`<${StatusBanner}>Connecting to the collaboration server ...<//>`}
        <${MystWrapper} fullscreen=${fullscreen}>
          <${CodeMirror}
            ...${{
              mode,
              text,
              id,
              spellcheckOpts,
              root: parent,
              highlights: transforms,
              preview,
              collaboration: {
                opts: collaboration,
                setUsers,
                provider,
                undoManager,
                ytext,
                ydoc,
                ready,
                error,
                ycomments,
              },
            }}
          />
          <${Preview} ref=${preview} mode=${mode}><${PreviewFocusHighlight} className="cm-previewFocus" /><//>
          ${mode === "Diff" && html`<${Diff} root=${parent} oldText=${initialText} text=${text} />`}
          ${collaboration.commentsEnabled && collaboration.resolvingCommentsEnabled && !error && html`<${ResolvedComments} ycomments=${ycomments} />`}
        <//>
      <//>
    <//>
  </div>`;
};

export default ({ additionalStyles, ...params }, /** @type {HTMLElement} */ target) => {
  target.attachShadow({
    mode: "open",
  });
  if (additionalStyles) {
    target.shadowRoot.adoptedStyleSheets.push(...(Array.isArray(additionalStyles) ? additionalStyles : [additionalStyles]));
  }
  params.parent = target.shadowRoot;

  const form = target.closest("form");
  if (form) {
    form.addEventListener("formdata", (e) => e.formData.append(params.name, window.myst_editor.text));
  }

  render(html`<${MystEditor} ...${params} />`, target.shadowRoot);
};

export { defaultButtons, predefinedButtons };
