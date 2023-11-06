import { render } from 'preact';
import { useState } from 'preact/hooks';
import { html } from 'htm/preact';
import markdownitDocutils from 'markdown-it-docutils'
import purify from 'dompurify'
import markdownIt from 'markdown-it'
import { StyleSheetManager, styled } from 'styled-components/macro';

import ButtonGroup from "./components/ButtonGroup";
import CodeMirror from './components/CodeMirror';
import TemplateManager from './components/TemplateManager';
import { TopbarButton } from './components/Buttons';
import Preview from './components/Preview';
import Diff from './components/Diff';

const EditorParent = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`;

const Topbar = styled.div`
  z-index: 10;
  position: sticky;
  top: 0;
  display: ${props => props.$shown ? 'flex' : 'none'};
  width: 100%;
  height: 60px;
  background-color: var(--gray-900);
  border-bottom: 1px solid var(--gray-600);

  @media print {
    display: none;
  }
`;

const TopbarLeft = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 5px;
`;


const Alert = styled(TopbarButton)`
  pointer-events: none; 
  background-color: green; 
  border: none;
  width: fit-content;
`

const TopbarRight = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 15px;
`;

const Separator = styled.div`
  border-left: 1px solid var(--gray-800);
  height: 40px;
  margin-right: 10px;
  margin-left: 10px;
`;

const MystWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`;

const buttonsRight = [
  { label: 'Source', img: "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22 14.3344V15.6663L17 18.1331V16.7394L20.525 15L17 13.2562V11.8669L22 14.3344ZM12 16.7394L8.475 15L12 13.2562V11.8669L7 14.3344V15.6663L12 18.1331V16.7394ZM16.4044 10H15.1056L12.5988 20H13.8944L16.4044 10V10Z' fill='%23FFFFFF'/%3E%3C/svg%3E" },
  { label: 'Preview', img: "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12.7232 13.5185L13.0717 13.6453C13.364 13.7516 13.6059 13.4674 13.5201 13.2249L13.394 12.8684C13.1324 13.0434 12.905 13.264 12.7232 13.5185ZM5.3783 14.1143L6.20344 14.6793L5.36684 15.2271L5 14.6669L5.3783 14.1143ZM23.4976 14.6793C23.4976 14.6793 20.4337 20 14.8613 20C9.68749 20 6.20344 14.6793 6.20344 14.6793C6.20344 14.6793 9.40718 10 14.8613 10C20.4056 10 23.4976 14.6793 23.4976 14.6793ZM23.4976 14.6793C24.3642 15.1783 24.364 15.1787 24.3638 15.179L24.3633 15.1799L24.3621 15.182L24.3588 15.1875L24.3489 15.2044C24.3407 15.2182 24.3295 15.2369 24.3153 15.2603C24.2867 15.3069 24.246 15.3722 24.1933 15.4533C24.0878 15.6154 23.9336 15.8417 23.7316 16.1109C23.3288 16.6477 22.7301 17.3626 21.9419 18.0794C20.3721 19.5072 17.9836 21 14.8613 21C11.9278 21 9.5357 19.4963 7.93308 18.0917C7.12296 17.3817 6.48766 16.6739 6.05421 16.1433C5.83691 15.8773 5.66881 15.6539 5.55335 15.4945C5.49559 15.4147 5.45088 15.3508 5.41968 15.3054C5.40407 15.2827 5.39183 15.2646 5.38301 15.2514L5.37234 15.2355L5.36894 15.2303L5.36773 15.2285L5.36724 15.2277C5.36703 15.2274 5.36684 15.2271 6.20344 14.6793C5.3783 14.1143 5.37853 14.114 5.37878 14.1137L5.37933 14.1129L5.38065 14.1109L5.38421 14.1058L5.39489 14.0905C5.40361 14.0781 5.41551 14.0614 5.43057 14.0406C5.46067 13.9989 5.50343 13.941 5.55862 13.8692C5.66894 13.7255 5.82936 13.5255 6.03813 13.288C6.45474 12.814 7.06911 12.1846 7.86767 11.5546C9.45985 10.2984 11.8369 9 14.8613 9C17.9286 9 20.3014 10.2965 21.8823 11.558C22.6741 12.1898 23.2783 12.8211 23.6867 13.2969C23.8913 13.5353 24.048 13.7361 24.1557 13.8806C24.2095 13.9528 24.2513 14.0111 24.2806 14.0531C24.2954 14.0741 24.307 14.091 24.3155 14.1036L24.326 14.1192L24.3296 14.1244L24.3309 14.1264L24.3314 14.1273C24.3317 14.1276 24.3319 14.128 23.4976 14.6793ZM23.4976 14.6793L24.3319 14.128L24.6724 14.6432L24.3642 15.1783L23.4976 14.6793ZM15.5108 12.959C16.3818 13.2357 17.0123 14.0453 17.0123 15C17.0123 16.1836 16.0445 17.1429 14.8505 17.1429C13.8785 17.1429 13.0565 16.5071 12.7844 15.6322C12.7222 15.4324 12.6888 15.2201 12.6888 15C12.6888 14.8579 12.7032 14.7193 12.7298 14.585C12.8702 14.6361 13.0104 14.6627 13.147 14.6678C13.8935 14.6961 14.535 14.0861 14.541 13.3486C14.5422 13.2 14.5176 13.0462 14.4628 12.8914C14.5882 12.87 14.7179 12.8571 14.8505 12.8571C15.0808 12.8571 15.3027 12.8929 15.5108 12.959ZM11.2476 15C11.2476 16.9729 12.861 18.5714 14.8505 18.5714C16.8408 18.5714 18.4535 16.9729 18.4535 15C18.4535 13.0279 16.8408 11.4286 14.8505 11.4286C12.861 11.4286 11.2476 13.0279 11.2476 15Z' fill='%23FFFFFF'/%3E%3C/svg%3E%0A" },
  { label: 'Both', img: "data:image/svg+xml,%3Csvg width='22' height='17' viewBox='0 0 22 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.66667 0.666667H10.5338V15.5109H2.66667C1.5621 15.5109 0.666667 14.6154 0.666667 13.5109V2.66667C0.666667 1.5621 1.5621 0.666667 2.66667 0.666667Z' stroke='white' stroke-width='1.33333'/%3E%3Cpath d='M10.8001 0.666667H18.6673C19.7718 0.666667 20.6673 1.5621 20.6673 2.66667V13.5109C20.6673 14.6154 19.7718 15.5109 18.6673 15.5109H10.8001V0.666667Z' stroke='white' stroke-width='1.33333'/%3E%3C/svg%3E%0A" },
  { label: 'Diff', img: "data:image/svg+xml,%3Csvg width='22' height='17' viewBox='-2 0 20 15' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.207 15.061L1 11.854v-.707L4.207 7.94l.707.707-2.353 2.354H15v1H2.56l2.354 2.353-.707.707zm7.586-7L15 4.854v-.707L11.793.94l-.707.707L13.439 4H1v1h12.44l-2.354 2.354.707.707z' stroke='white' stroke-width='0.3'/%3E%3C/svg%3E%0A" }
]

const buttonsLeft = [
  { label: 'Copy HTML', img: "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 -3 25 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 2h7v4h4v10h-3v1h4V4.6L17.4 1H8v5h1zm8 0h.31L20 4.69V5h-3zM5 19h7v1H5zm-2 4h13V10.6L12.4 7H3zm9-15h.31L15 10.69V11h-3zM4 8h7v4h4v10H4zm1 5h9v1H5zm4 3h5v1H5v-1z' fill='%23FFFFFF'/%3E%3C/svg%3E" },
]

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


function copyHtmlAsRichText(str) {
  function listener(e) {
    e.clipboardData.setData("text/html", str);
    e.clipboardData.setData("text/plain", str);
    e.preventDefault();
  }
  document.addEventListener("copy", listener);
  document.execCommand("copy");
  document.removeEventListener("copy", listener);
};

const MystEditor = ({
  name = "myst_editor_textarea",
  id = "myst_editor_textarea",
  initialMode = "Both",
  initialText = "",
  printCallback = window.print,
  topbar = true,
  templatelist,
  collaboration = {}
}) => {
  const [mode, setMode] = useState(initialMode);
  const [text, setText] = useState(initialText);
  const [alert, setAlert] = useState(null);
  const [syncText, setSyncText] = useState(false);

  const renderAndSanitize = (text) => {
    return purify.sanitize(markdownIt({ breaks: true, linkify: true }).use(markdownitDocutils).render(text))
  }

  const alertFor = (alertText, secs) => {
    setAlert(alertText);
    setTimeout(
      () => setAlert(null),
      secs * 1000
    )
  }

  const copyHtml = () => {
    copyHtmlAsRichText(renderAndSanitize(text))
    alertFor("copied!", 2)
  }

  return html`
  <div id="myst-css-namespace">
    <${StyleSheetManager} stylisPlugins=${[createExtraScopePlugin('#myst-css-namespace')]}>
      <${EditorParent}>
        <${Topbar} $shown=${topbar}>
          <${TopbarLeft}> 
            <${ButtonGroup} buttons=${buttonsLeft} highlightActive=${false} clickCallback=${() => copyHtml()}/>
            ${alert && html`<${Alert}> ${alert} <//>`}
          <//>
          <${TopbarRight}>
            <${TopbarButton} type="button" onClick=${(event) => printCallback(event)}>Export as PDF<//>
            <${TemplateManager} templatelist=${templatelist} setText=${setText} setSyncText=${setSyncText}/>
            <${Separator} />
            <${ButtonGroup} buttons=${buttonsRight} clickedId=${2} clickCallback=${(newMode) => setMode(newMode)}/>
          <//>
        <//>
        <${MystWrapper}>
          <${CodeMirror} text=${text} setText=${setText} syncText=${syncText} setSyncText=${setSyncText} name=${name} id=${id} shown=${mode === "Both" || mode === "Source"} collaboration=${collaboration}/>
          <${Preview} $shown=${mode === "Both" || mode === "Preview"} dangerouslySetInnerHTML=${{ __html: renderAndSanitize(text) }}/>
          <${mode == 'Diff' && Diff} oldText=${initialText} text=${text}/>
        <//>
      <//>
    <//>
  </div>`;
}

export default MystEditor
export { html, render }
