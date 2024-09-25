import { render } from "preact";
import { useState, useEffect, useReducer, useRef, useMemo } from "preact/hooks";
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
import { handlePreviewClickToScroll } from "./extensions/syncDualPane";

if (!window.myst_editor?.isFresh) {
  resetCache();
  window.myst_editor = { isFresh: true };
}

const EditorParent = styled.div`
  font-family: "Lato";
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: 100%;
  ${(props) => props.fullscreen && "position: fixed; left: 0; top: 0; z-index: 10;"}
  ${(props) => {
    switch (props.mode) {
      case "Preview":
        return "#editor-wrapper { display: none } #resolved-wrapper { display: none }";
      case "Source":
        return "#preview-wrapper { display: none } #resolved-wrapper { display: none }";
      case "Diff":
        return "#editor-wrapper { display: none }; #preview-wrapper { display: none } #resolved-wrapper { display: none }";
      case "Both":
        return "#resolved-wrapper { display: none }";
      case "Resolved":
        return "#preview-wrapper { display: none };";
      default:
        return ``;
    }
  }}
`;

const MystWrapper = styled.div`
  padding: 20px;
  display: flex;
  box-sizing: border-box;
  height: calc(100% - 60px);
  width: 100%;
  position: relative;
  background-color: white;
  ${(props) => props.fullscreen && "box-sizing:border-box; height: calc(100vh - 60px);"}
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

/** CSS flexbox takes the content size of elements to determine the layout and ignores padding.
 * This wrapper is here to make sure the padding is added one element deeper and elements are equal width.
 * Ideally we would use CSS Grid but that has some performance issues with CodeMirror on Chromium. */
const FlexWrapper = styled.div`
  flex: 1;
  min-width: 0;
  height: 100%;

  & > * {
    min-height: 500px;
  }
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
  getUserUrl = (login) => "#",
  backslashLineBreak = true,
  parent,
  syncScroll = false,
  unfoldedHeadings,
}) => {
  const [mode, setMode] = useState(initialMode);
  const [fullscreen, setFullscreen] = useState(false);
  const editorRef = useRef(null);

  const preview = useRef(null);
  const text = useText({ initialText, transforms, customRoles, preview, backslashLineBreak, parent, editorRef });

  const [alert, setAlert] = useState(null);
  const [users, setUsers] = useReducer(
    (_, currentUsers) => currentUsers.map((u) => ({ ...u, avatarUrl: getAvatar(u.login), userUrl: getUserUrl(u.login) })),
    [],
  );

  const { provider, undoManager, ytext, ydoc, ready, error } = useCollaboration(collaboration, parent);
  const ycomments = useComments(ydoc, provider, getAvatar, getUserUrl);

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
      text.refresh(editorRef);
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

  return (
    <div style="all: initial" id="myst-css-namespace">
      <StyleSheetManager target={parent} stylisPlugins={[createExtraScopePlugin("#myst-css-namespace")]}>
        <EditorParent mode={mode} fullscreen={fullscreen}>
          {topbar && (
            <EditorTopbar
              {...{
                alert,
                users,
                text,
                templatelist,
                buttons,
                collaboration,
                setMode,
                initialMode,
                title,
              }}
            />
          )}
          {error && <StatusBanner error> {typeof error == "string" ? error : "No connection to the collaboration server"} </StatusBanner>}
          {collaboration.enabled && !ready && !error && <StatusBanner>Connecting to the collaboration server ...</StatusBanner>}
          <MystWrapper fullscreen={fullscreen}>
            <FlexWrapper id="editor-wrapper">
              <CodeMirror
                {...{
                  mode,
                  text,
                  id,
                  spellcheckOpts,
                  root: parent,
                  highlights: transforms,
                  preview,
                  syncScroll,
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
                  unfoldedHeadings,
                }}
                onView={(view) => (editorRef.current = view)}
              />
            </FlexWrapper>
            <FlexWrapper id="preview-wrapper">
              <Preview
                ref={preview}
                mode={mode}
                onClick={(ev) => {
                  if (syncScroll && mode == "Both") handlePreviewClickToScroll(ev, text.lineMap, preview, editorRef);
                }}
              >
                <PreviewFocusHighlight className="cm-previewFocus" />
              </Preview>
            </FlexWrapper>
            {mode === "Diff" && (
              <FlexWrapper>
                <Diff root={parent} oldText={initialText} text={text} />
              </FlexWrapper>
            )}
            {collaboration.commentsEnabled && collaboration.resolvingCommentsEnabled && !error && (
              <FlexWrapper id="resolved-wrapper">
                <ResolvedComments ycomments={ycomments} />
              </FlexWrapper>
            )}
          </MystWrapper>
        </EditorParent>
      </StyleSheetManager>
    </div>
  );
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

  render(<MystEditor {...params} />, target.shadowRoot);
};

export { defaultButtons, predefinedButtons };
