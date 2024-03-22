import { render } from 'preact';
import { useState, useEffect, useReducer, useRef } from 'preact/hooks';
import { html } from 'htm/preact';
import { StyleSheetManager, styled } from 'styled-components';

import CodeMirror from './components/CodeMirror';
import Preview from './components/Preview';
import Diff from './components/Diff';
import { resetCache } from './hooks/markdownReplacer';
import { useText } from './hooks/useText';
import { EditorTopbar } from './components/Topbar';

if (!window.myst_editor?.isFresh) {
  resetCache();
  window.myst_editor = { isFresh: true };
}

const EditorParent = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  ${props => props.fullscreen && 'position: fixed; left: 0; top: 0; z-index: 10;'}
`;


const MystWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  position: relative;
  background-color: white;
  ${props => props.fullscreen && 'box-sizing:border-box; height: calc(100vh - 60px); overflow-y: scroll;'}
`;


const createExtraScopePlugin = (scope) => {
  const plugin = (element, index, children) => {
    if (element.type == "rule") {
      element.props[0] = element.props[0].split(',').map(x => `${scope} ${x}`).join(',');
    }
  };

  // Styled-components require the function to have a name
  Object.defineProperty(plugin, 'name', { value: `scope-${scope}` });

  return plugin;
};

const hideBodyScrollIf = val => document.documentElement.style.overflow = val ? "hidden" : "visible";

const MystEditor = ({
  name = "myst_editor_textarea",
  id = "myst_editor_textarea",
  initialMode = "Both",
  initialText = "",
  printCallback = window.print,
  topbar = true,
  templatelist,
  collaboration = {},
  spellcheckOpts = { dict: "en_US", dictionaryPath: "/dictionaries" },
  customRoles = [],
  transforms = [],
  // this will create a bogus random avatar when no specific getAvatar function is provided
  getAvatar = (login) => `https://secure.gravatar.com/avatar/${login}?s=30&d=identicon`,
}) => {
  const [mode, setMode] = useState(initialMode);
  const [fullscreen, setFullscreen] = useState(false);

  const preview = useRef(null);
  const text = useText({ initialText, transforms, customRoles, preview });

  const [alert, setAlert] = useState(null);
  const [users, setUsers] = useReducer((_, currentUsers) => currentUsers.map(u => ({...u, avatarUrl: getAvatar(u.login)})), []);

  const alertFor = (alertText, secs) => {
    setAlert(alertText);
    setTimeout(
      () => setAlert(null),
      secs * 1000
    )
  }

  const copyHtml = () => {
    text.copy();
    alertFor("copied!", 2);
  }

  const buttonActions = {
    "Copy HTML": copyHtml,
    "Fullscreen": () => setFullscreen(f => !f),
    "Refresh": () => {
      resetCache();
      alertFor("Rich links refreshed!", 1);
      text.refresh();
    }
  }

  useEffect(() => hideBodyScrollIf(fullscreen), [fullscreen])

  return html`
  <div id="myst-css-namespace">
    <${StyleSheetManager} stylisPlugins=${[createExtraScopePlugin('#myst-css-namespace')]}>
      <${EditorParent} fullscreen=${fullscreen}>
        <${EditorTopbar} ...${{shown: topbar, alert, users, text, templatelist, printCallback, setMode, buttonActions}}/>
        <${MystWrapper} fullscreen=${fullscreen}>
          <${CodeMirror} setUsers=${setUsers} getAvatar=${getAvatar} mode=${mode} text=${text} name=${name} id=${id} collaboration=${collaboration} spellcheckOpts=${spellcheckOpts} highlights=${transforms}/>
          <${Preview} $mode=${mode} ref=${preview}/>
          ${mode === 'Diff' ? html`<${Diff} oldText=${initialText} text=${text}/>` : "" }
        <//>
      <//>
    <//>
  </div>`;
}

export default MystEditor
export { html, render }
