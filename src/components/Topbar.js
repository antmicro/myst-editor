import { styled } from "styled-components";
import { html } from "htm/preact";
import { useMemo } from "preact/hooks";
import purify from "dompurify";

import DefaultButton from "./Buttons";
import ButtonGroup from "./ButtonGroup";
import Avatars from "./Avatars";
import TemplateManager from "./TemplateManager";

const renderMdLinks = (title) =>
  [...title.matchAll(/\[(.+)\]\(([^\s]+)\)/g)].reduce((prev, match) => prev.replace(match[0], `<a href="${match[2]}">${match[1]}</a>`), title);

const Topbar = styled.div`
  z-index: 10;
  position: sticky;
  top: 0;
  display: flex;
  width: 100%;
  height: 60px;
  background-color: var(--navbar-bg);

  svg > path {
    stroke: var(--icon-color);
    &.inner-copy {
      transition: 0.4s ease;
      fill: var(--icon-bg);
    }
  }

  button:not(:disabled):not(view-menu):hover {
    background-color: var(--icon-selected);
    border: 1px solid var(--icon-selected);
    .inner-copy {
      fill: var(--icon-selected);
    }
  }

  @media print {
    & {
      display: none;
    }
  }
`;

const Title = styled.div`
  font-size: large;
  font-family: "Lato", sans-serif;
  white-space: nowrap;
  margin-left: 10px;

  a {
    color: var(--blue-500);
  }
`;

const TopbarLeft = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 5px;
`;

const Alert = styled(DefaultButton)`
  padding: 0px 15px;
  margin: 5px;
  pointer-events: none;
  background-color: var(--alert);
  border: none;
  width: fit-content;
`;

const TopbarRight = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 15px;

  button[active] {
    pointer-events: none;
  }

  button.icon:not(disabled):hover {
    background-color: var(--icon-main-selected);
    border: 1px solid var(--icon-main-selected);
  }
`;

const Separator = styled.div`
  border-left: 1px solid var(--separator);
  height: 40px;
  margin-right: 10px;
  margin-left: 10px;
`;

const FullscreenIcon = () =>
  html` <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M20.35 1.78003L12.61 9.51003" stroke-width="1.75" />
    <path d="M14.88 1.08008H20.89V7.27008" stroke-width="1.75" />
    <path d="M1.42999 20.3601L9.16999 12.6301" stroke-width="1.75" />
    <path d="M6.90002 21.0601H0.890015V14.8701" stroke-width="1.75" />
  </svg>`;

const RefreshIcon = () =>
  html` <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
    <path d="M21.75 1V7.66H14.9" stroke-width="1.75" />
    <path
      d="M21.65 12.5899C20.95 17.4199 16.78 21.1399 11.75 21.1399C6.23 21.1399 1.75 16.6599 1.75 11.1399C1.75 5.61989 6.23 1.13989 11.75 1.13989C16.24 1.13989 20.03 4.09989 21.3 8.16989"
      stroke-width="1.75"
    />
  </svg>`;

const PreviewIcon = () =>
  html` <svg xmlns="http://www.w3.org/2000/svg" width="26" height="18" viewBox="0 0 26 18" fill="none">
    <path
      d="M13.01 11.5902C14.5675 11.5902 15.83 10.3276 15.83 8.7702C15.83 7.21275 14.5675 5.9502 13.01 5.9502C11.4526 5.9502 10.1899 7.21275 10.1899 8.7702C10.1899 10.3276 11.4526 11.5902 13.01 11.5902Z"
      stroke-width="1.75"
    />
    <path
      d="M23.4301 9.80018C23.4301 9.80018 13.75 24.5402 2.58997 9.80018L1.98999 8.95018L2.59998 8.10018C2.59998 8.10018 12.2799 -6.63982 23.4399 8.10018L24.01 8.90018L23.4301 9.80018Z"
      stroke-width="1.75"
    />
  </svg>`;

const SourceIcon = () =>
  html` <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15" fill="none">
    <path d="M15.31 2.8501L19.56 7.1001L15.19 11.4801" stroke-width="1.75" />
    <path d="M5.75 11.4801L1.5 7.2201L5.88 2.8501" stroke-width="1.75" />
    <path d="M12.35 0.340088L8.72 13.9901" stroke-width="1.75" />
  </svg>`;

const CopyIcon = () =>
  html` <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
    <path d="M13.99 1.04004H1.37V16.64H13.99V1.04004Z" stroke-width="1.75" />
    <path class="inner-copy" d="M18.63 5.51001H6.01001V21.11H18.63V5.51001Z" stroke-width="1.75" />
  </svg>`;

const BothIcon = () =>
  html` <svg xmlns="http://www.w3.org/2000/svg" width="23" height="18" viewBox="0 0 23 18" fill="none">
    <path d="M21.84 1.65015H1.83997V16.6701H21.84V1.65015Z" stroke-width="1.75" />
    <path d="M11.84 1.83008V16.6701" stroke-width="1.75" />
  </svg>`;

const DiffIcon = () =>
  html` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
    <path d="M21.23 11.0801H10.29" stroke-width="1.75" />
    <path d="M17.86 6.71997L22.11 10.97L17.73 15.35" stroke-width="1.75" />
    <path d="M2.22998 5.09009H13.17" stroke-width="1.75" />
    <path d="M5.60999 9.44007L1.35999 5.19007L5.73999 0.820068" stroke-width="1.75" />
  </svg>`;

const PrintPDFIcon = () =>
  html`<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path stroke-width="0.2" d="M21 12.4286V11H16.7143V18.1429H18.1429V15.2857H20.2857V13.8571H18.1429V12.4286H21Z" fill="#332D37" />
    <path
      stroke-width="0.2"
      d="M13.1428 18.1429H10.2857V11H13.1428C14.3571 11 15.2857 11.9286 15.2857 13.1429V16C15.2857 17.2143 14.3571 18.1429 13.1428 18.1429ZM11.7143 16.7143H13.1428C13.5714 16.7143 13.8571 16.4286 13.8571 16V13.1429C13.8571 12.7143 13.5714 12.4286 13.1428 12.4286H11.7143V16.7143Z"
      fill="#332D37"
    />
    <path
      stroke-width="0.2"
      d="M7.42855 11H3.85712V18.1429H5.28569V16H7.42855C8.21426 16 8.85712 15.3571 8.85712 14.5714V12.4286C8.85712 11.6429 8.21426 11 7.42855 11ZM5.28569 14.5714V12.4286H7.42855V14.5714H5.28569Z"
      fill="#332D37"
    />
    <path d="M14 21H9.5H1V1H9M15 10V7.5M9 1H9.5L15 6.5V7.5M9 1V7.5H15" stroke="#332D37" stroke-width="1.75" />
  </svg> `;

const icons = {
  fullscreen: FullscreenIcon,
  "copy-html": CopyIcon,
  refresh: RefreshIcon,
  "print-to-pdf": PrintPDFIcon,
};

export const EditorTopbar = ({ alert, users, text, setMode, templatelist, buttons, title }) => {
  const titleHtml = useMemo(() => purify.sanitize(renderMdLinks(title || ""), []));

  const editorModeButtons = [
    { id: "source", action: () => setMode("Source"), icon: SourceIcon },
    { id: "preview", action: () => setMode("Preview"), icon: PreviewIcon },
    { id: "both", action: () => setMode("Both"), icon: BothIcon },
    { id: "diff", action: () => setMode("Diff"), icon: DiffIcon },
  ];
  const buttonsLeft = useMemo(() => buttons.map((b) => ({ ...b, icon: b.icon || icons[b.id] })).filter((b) => b.icon), []);
  const textButtons = useMemo(() => buttons.filter((b) => b.text && b.id !== "template-manager"), []);
  return html` <${Topbar}>
    <${TopbarLeft}>
      <${ButtonGroup} buttons=${buttonsLeft} highlightActive=${false} initialClickedId=${null} />
      ${buttons.find((b) => b.id === "template-manager") && html`<${TemplateManager} text=${text} templatelist=${templatelist} />`}
      ${alert && html`<${Alert}> ${alert} <//>`}
      <${Title} dangerouslySetInnerHTML=${{ __html: titleHtml }} />
    <//>
    <${TopbarRight}>
      <${Avatars} users=${users} />
      ${textButtons.map((b) => html`<${DefaultButton} type="button" onClick=${b.action}>${b.text}<//>`)}

      <${Separator} />
      <${ButtonGroup} buttons=${editorModeButtons} clickedId=${2} />
    <//>
  <//>`;
};
