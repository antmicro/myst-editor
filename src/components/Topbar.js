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

  display: grid;
  grid-template-columns: repeat(5, 45px) min-content auto auto 150px 215px;
  align-items: center;

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

  button:not(:disabled):not(view-menu):not(.radio-icon):hover {
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
  white-space: nowrap;
  margin-left: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  a {
    color: var(--blue-500);
  }
`;

const Alert = styled(DefaultButton)`
  padding: 0px 15px;
  margin: 5px;
  pointer-events: none;
  background-color: var(--alert);
  border: none;
  width: fit-content;
`;

export const TopbarButton = styled(DefaultButton)`
  color: ${(props) => (props.active ? "white" : "var(--icon-color)")};
  border: ${(props) => (props.active ? "1px solid var(--icon-main-active)" : "1px solid var(--icon-border)")};
  background-color: ${(props) => (props.active ? "var(--icon-main-active)" : "var(--icon-bg)")};
  margin: 5px;
  width: 40px;
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

const ResolvedIcon = () =>
  html` <svg xmlns="http://www.w3.org/2000/svg" width="26" height="17" viewBox="0.5 -1 17 17" fill="none">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.38496 5.09174C5.90507 5.09174 5.51465 5.48216 5.51465 5.96205C5.51465 6.18979 5.60412 6.41754 5.76679 6.58021C5.92947 6.74289 6.14908 6.83236 6.38496 6.83236C6.62084 6.83236 6.84045 6.74289 7.00313 6.58021C7.1658 6.41754 7.25527 6.19793 7.25527 5.96205C7.25527 5.48216 6.86485 5.09174 6.38496 5.09174Z"
      fill="#332D37"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.99629 5.09174C8.5164 5.09174 8.12598 5.48216 8.12598 5.96205C8.12598 6.18979 8.21545 6.41754 8.37812 6.58021C8.5408 6.74289 8.76041 6.83236 8.99629 6.83236C9.23217 6.83236 9.45178 6.74289 9.61445 6.58021C9.77713 6.41754 9.8666 6.19793 9.8666 5.96205C9.8666 5.48216 9.47618 5.09174 8.99629 5.09174Z"
      fill="#332D37"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.6066 5.09174C11.1267 5.09174 10.7363 5.48216 10.7363 5.96205C10.7363 6.18979 10.8258 6.41754 10.9885 6.58021C11.1511 6.74289 11.3708 6.83236 11.6066 6.83236C11.8425 6.83236 12.0621 6.74289 12.2248 6.58021C12.3875 6.41754 12.477 6.19793 12.477 5.96205C12.477 5.48216 12.0865 5.09174 11.6066 5.09174Z"
      fill="#332D37"
    />
    <path
      d="M17.1298 11.0375V0.862183H0.862305V10.8748L5.11626 10.9155L9.053 14.8522L12.884 11.0294L17.1298 11.0375Z"
      stroke="#332D37"
      stroke-width="1.5"
    />
  </svg>`;

const icons = {
  fullscreen: FullscreenIcon,
  "copy-html": CopyIcon,
  refresh: RefreshIcon,
  "print-to-pdf": PrintPDFIcon,
};

export const EditorTopbar = ({ alert, users, text, setMode, templatelist, buttons, title, collaboration }) => {
  const titleHtml = useMemo(() => purify.sanitize(renderMdLinks(title || ""), []));

  const editorModeButtons = [
    { id: "source", tooltip: "Source", action: () => setMode("Source"), icon: SourceIcon },
    { id: "preview", tooltip: "Preview", action: () => setMode("Preview"), icon: PreviewIcon },
    { id: "both", tooltip: "Dual Pane", action: () => setMode("Both"), icon: BothIcon },
    { id: "diff", tooltip: "Diff View", action: () => setMode("Diff"), icon: DiffIcon },
  ];
  if (collaboration.resolvingCommentsEnabled) {
    editorModeButtons.push({ id: "resolved", tooltip: "Resolved Comments", action: () => setMode("Resolved"), icon: ResolvedIcon });
  }
  const buttonsLeft = useMemo(() => buttons.map((b) => ({ ...b, icon: b.icon || icons[b.id] })).filter((b) => b.icon), []);
  const textButtons = useMemo(() => buttons.filter((b) => b.text && b.id !== "template-manager"), []);
  return html` <${Topbar} nTextButtons=${textButtons.length}>
    ${buttonsLeft.map(
      (button) => html`
        <${TopbarButton} className="icon" type="button" key=${button.id} title=${button.tooltip} name=${button.id} onClick=${button.action}>
          ${typeof button.icon == "function" ? html`<${button.icon} />` : html`<img src=${button.icon} />`}
        <//>
      `,
    )}
    ${buttons.find((b) => b.id === "template-manager") && templatelist && html`<${TemplateManager} text=${text} templatelist=${templatelist} />`}
    <span> ${alert && html`<${Alert}> ${alert} <//>`} </span>
    <${Title} dangerouslySetInnerHTML=${{ __html: titleHtml }} />
    <${Avatars} users=${users} />
    <span> ${textButtons.map((b) => html`<${DefaultButton} type="button" onClick=${b.action}>${b.text}<//>`)} </span>
    <${ButtonGroup} buttons=${editorModeButtons} initialClickedId=${2} />
  <//>`;
};
