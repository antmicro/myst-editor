import { styled } from "styled-components";
import { useContext, useMemo } from "preact/hooks";
import purify from "dompurify";

import DefaultButton from "./Buttons";
import ButtonGroup from "./ButtonGroup";
import Avatars from "./Avatars";
import TemplateManager from "./TemplateManager";
import { MystState } from "../mystState";
import { useComputed, useSignal } from "@preact/signals";

const renderMdLinks = (title) =>
  [...(title || "").matchAll(/\[(.+)\]\(([^\s]+)\)/g)].reduce(
    (prev, match) => prev.replace(match[0], `<a href="${match[2]}">${match[1]}</a>`),
    title,
  );

const Topbar = styled.div`
  z-index: 10;
  position: sticky;
  top: 0;
  padding: 0 20px;
  width: 100%;
  height: 60px;
  background-color: var(--navbar-bg);

  display: flex;
  align-items: center;
  justify-content: space-between;

  .side {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .btns {
    display: flex;
    gap: 10px;
  }

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

  .btn-dropdown {
    position: absolute;
    top: 50px;
    padding-top: 10px;

    &:hover > * {
      display: block;
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
  font-family: "Lato";
  overflow: hidden;
  text-overflow: ellipsis;
  a {
    color: var(--blue-500);
  }
`;

const Alert = styled(DefaultButton)`
  padding: 0px 15px;
  margin-left: 10px;
  pointer-events: none;
  background-color: var(--alert);
  border: none;
  width: fit-content;
`;

export const TopbarButton = styled(DefaultButton)`
  color: ${(props) => (props.active ? "white" : "var(--icon-color)")};
  border: ${(props) => (props.active ? "1px solid var(--icon-main-active)" : "1px solid var(--icon-border)")};
  background-color: ${(props) => (props.active ? "var(--icon-main-active)" : "var(--icon-bg)")};
  width: 40px;

  &:hover ~ .btn-dropdown > * {
    display: block;
  }
`;

const FullscreenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M20.35 1.78003L12.61 9.51003" stroke-width="1.75" />
    <path d="M14.88 1.08008H20.89V7.27008" stroke-width="1.75" />
    <path d="M1.42999 20.3601L9.16999 12.6301" stroke-width="1.75" />
    <path d="M6.90002 21.0601H0.890015V14.8701" stroke-width="1.75" />
  </svg>
);

const RefreshIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
    <path d="M21.75 1V7.66H14.9" stroke-width="1.75" />
    <path
      d="M21.65 12.5899C20.95 17.4199 16.78 21.1399 11.75 21.1399C6.23 21.1399 1.75 16.6599 1.75 11.1399C1.75 5.61989 6.23 1.13989 11.75 1.13989C16.24 1.13989 20.03 4.09989 21.3 8.16989"
      stroke-width="1.75"
    />
  </svg>
);

const PreviewIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="18" viewBox="0 0 26 18" fill="none">
    <path
      d="M13.01 11.5902C14.5675 11.5902 15.83 10.3276 15.83 8.7702C15.83 7.21275 14.5675 5.9502 13.01 5.9502C11.4526 5.9502 10.1899 7.21275 10.1899 8.7702C10.1899 10.3276 11.4526 11.5902 13.01 11.5902Z"
      stroke-width="1.75"
    />
    <path
      d="M23.4301 9.80018C23.4301 9.80018 13.75 24.5402 2.58997 9.80018L1.98999 8.95018L2.59998 8.10018C2.59998 8.10018 12.2799 -6.63982 23.4399 8.10018L24.01 8.90018L23.4301 9.80018Z"
      stroke-width="1.75"
    />
  </svg>
);

const SourceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15" fill="none">
    <path d="M15.31 2.8501L19.56 7.1001L15.19 11.4801" stroke-width="1.75" />
    <path d="M5.75 11.4801L1.5 7.2201L5.88 2.8501" stroke-width="1.75" />
    <path d="M12.35 0.340088L8.72 13.9901" stroke-width="1.75" />
  </svg>
);

const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
    <path d="M13.99 1.04004H1.37V16.64H13.99V1.04004Z" stroke-width="1.75" />
    <path class="inner-copy" d="M18.63 5.51001H6.01001V21.11H18.63V5.51001Z" stroke-width="1.75" />
  </svg>
);

const BothIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="18" viewBox="0 0 23 18" fill="none">
    <path d="M21.84 1.65015H1.83997V16.6701H21.84V1.65015Z" stroke-width="1.75" />
    <path d="M11.84 1.83008V16.6701" stroke-width="1.75" />
  </svg>
);

const DiffIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
    <path d="M21.23 11.0801H10.29" stroke-width="1.75" />
    <path d="M17.86 6.71997L22.11 10.97L17.73 15.35" stroke-width="1.75" />
    <path d="M2.22998 5.09009H13.17" stroke-width="1.75" />
    <path d="M5.60999 9.44007L1.35999 5.19007L5.73999 0.820068" stroke-width="1.75" />
  </svg>
);

const PrintPDFIcon = () => (
  <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  </svg>
);

const ResolvedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="17" viewBox="0.5 -1 17 17" fill="none">
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
  </svg>
);

const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
    <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
      <path d="M12 8.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5M9.75 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" />
      <path d="M11.975 1.25c-.445 0-.816 0-1.12.02a2.8 2.8 0 0 0-.907.19a2.75 2.75 0 0 0-1.489 1.488c-.145.35-.184.72-.2 1.122a.87.87 0 0 1-.415.731a.87.87 0 0 1-.841-.005c-.356-.188-.696-.339-1.072-.389a2.75 2.75 0 0 0-2.033.545a2.8 2.8 0 0 0-.617.691c-.17.254-.356.575-.578.96l-.025.044c-.223.385-.408.706-.542.98c-.14.286-.25.568-.29.88a2.75 2.75 0 0 0 .544 2.033c.231.301.532.52.872.734a.87.87 0 0 1 .426.726a.87.87 0 0 1-.426.726c-.34.214-.64.433-.872.734a2.75 2.75 0 0 0-.545 2.033c.041.312.15.594.29.88c.135.274.32.595.543.98l.025.044c.222.385.408.706.578.96c.177.263.367.5.617.69a2.75 2.75 0 0 0 2.033.546c.376-.05.716-.2 1.072-.389a.87.87 0 0 1 .84-.005a.86.86 0 0 1 .417.731c.015.402.054.772.2 1.122a2.75 2.75 0 0 0 1.488 1.489c.29.12.59.167.907.188c.304.021.675.021 1.12.021h.05c.445 0 .816 0 1.12-.02c.318-.022.617-.069.907-.19a2.75 2.75 0 0 0 1.489-1.488c.145-.35.184-.72.2-1.122a.87.87 0 0 1 .415-.732a.87.87 0 0 1 .841.006c.356.188.696.339 1.072.388a2.75 2.75 0 0 0 2.033-.544c.25-.192.44-.428.617-.691c.17-.254.356-.575.578-.96l.025-.044c.223-.385.408-.706.542-.98c.14-.286.25-.569.29-.88a2.75 2.75 0 0 0-.544-2.033c-.231-.301-.532-.52-.872-.734a.87.87 0 0 1-.426-.726c0-.278.152-.554.426-.726c.34-.214.64-.433.872-.734a2.75 2.75 0 0 0 .545-2.033a2.8 2.8 0 0 0-.29-.88a18 18 0 0 0-.543-.98l-.025-.044a18 18 0 0 0-.578-.96a2.8 2.8 0 0 0-.617-.69a2.75 2.75 0 0 0-2.033-.546c-.376.05-.716.2-1.072.389a.87.87 0 0 1-.84.005a.87.87 0 0 1-.417-.731c-.015-.402-.054-.772-.2-1.122a2.75 2.75 0 0 0-1.488-1.489c-.29-.12-.59-.167-.907-.188c-.304-.021-.675-.021-1.12-.021zm-1.453 1.595c.077-.032.194-.061.435-.078c.247-.017.567-.017 1.043-.017s.796 0 1.043.017c.241.017.358.046.435.078c.307.127.55.37.677.677c.04.096.073.247.086.604c.03.792.439 1.555 1.165 1.974s1.591.392 2.292.022c.316-.167.463-.214.567-.227a1.25 1.25 0 0 1 .924.247c.066.051.15.138.285.338c.139.206.299.483.537.895s.397.69.506.912c.107.217.14.333.15.416a1.25 1.25 0 0 1-.247.924c-.064.083-.178.187-.48.377c-.672.422-1.128 1.158-1.128 1.996s.456 1.574 1.128 1.996c.302.19.416.294.48.377c.202.263.29.595.247.924c-.01.083-.044.2-.15.416c-.109.223-.268.5-.506.912s-.399.689-.537.895c-.135.2-.219.287-.285.338a1.25 1.25 0 0 1-.924.247c-.104-.013-.25-.06-.567-.227c-.7-.37-1.566-.398-2.292.021s-1.135 1.183-1.165 1.975c-.013.357-.046.508-.086.604a1.25 1.25 0 0 1-.677.677c-.077.032-.194.061-.435.078c-.247.017-.567.017-1.043.017s-.796 0-1.043-.017c-.241-.017-.358-.046-.435-.078a1.25 1.25 0 0 1-.677-.677c-.04-.096-.073-.247-.086-.604c-.03-.792-.439-1.555-1.165-1.974s-1.591-.392-2.292-.022c-.316.167-.463.214-.567.227a1.25 1.25 0 0 1-.924-.247c-.066-.051-.15-.138-.285-.338a17 17 0 0 1-.537-.895c-.238-.412-.397-.69-.506-.912c-.107-.217-.14-.333-.15-.416a1.25 1.25 0 0 1 .247-.924c.064-.083.178-.187.48-.377c.672-.422 1.128-1.158 1.128-1.996s-.456-1.574-1.128-1.996c-.302-.19-.416-.294-.48-.377a1.25 1.25 0 0 1-.247-.924c.01-.083.044-.2.15-.416c.109-.223.268-.5.506-.912s.399-.689.537-.895c.135-.2.219-.287.285-.338a1.25 1.25 0 0 1 .924-.247c.104.013.25.06.567.227c.7.37 1.566.398 2.292-.022c.726-.419 1.135-1.182 1.165-1.974c.013-.357.046-.508.086-.604c.127-.307.37-.55.677-.677" />
    </g>
  </svg>
);

const icons = {
  fullscreen: FullscreenIcon,
  "copy-html": CopyIcon,
  refresh: RefreshIcon,
  "print-to-pdf": PrintPDFIcon,
  settings: SettingsIcon,
};

export const EditorTopbar = ({ alert, users, buttons }) => {
  const { options, editorView } = useContext(MystState);
  const titleHtml = useComputed(() => purify.sanitize(renderMdLinks(options.title.value)));
  const emptyDiff = useSignal(false);
  const editorModeButtons = useComputed(() => {
    const modeButtons = [
      { id: "source", tooltip: "Source", action: () => (options.mode.value = "Source"), icon: SourceIcon },
      { id: "preview", tooltip: "Preview", action: () => (options.mode.value = "Preview"), icon: PreviewIcon },
      { id: "both", tooltip: "Dual Pane", action: () => (options.mode.value = "Both"), icon: BothIcon },
      {
        id: "diff",
        tooltip: emptyDiff.value ? "No changes to show" : "Diff View",
        disabled: emptyDiff.value,
        action: () => (options.mode.value = "Diff"),
        hover: () => (emptyDiff.value = options.initialText == editorView.value?.state?.doc?.toString?.()),
        icon: DiffIcon,
      },
    ];
    if (options.collaboration.value.resolvingCommentsEnabled) {
      modeButtons.push({ id: "resolved", tooltip: "Resolved Comments", action: () => (options.mode.value = "Resolved"), icon: ResolvedIcon });
    }

    return modeButtons;
  });
  const clickedId = useComputed(() => editorModeButtons.value.findIndex((b) => b.id[0].toUpperCase() + b.id.slice(1) === options.mode.value));
  const buttonsLeft = useMemo(() => buttons.map((b) => ({ ...b, icon: b.icon || icons[b.id] })).filter((b) => b.icon), [buttons]);
  const textButtons = useMemo(() => buttons.filter((b) => b.text && b.id !== "template-manager"), [buttons]);

  return (
    <Topbar id="topbar">
      <div className="side">
        <div class="btns">
          {buttonsLeft.map((button) => (
            <div key={button.id}>
              <TopbarButton className="icon" type="button" title={button.tooltip} name={button.id} onClick={button.action}>
                {typeof button.icon == "function" ? <button.icon /> : <img src={button.icon} />}
              </TopbarButton>
              <div className="btn-dropdown">{button.dropdown?.()}</div>
            </div>
          ))}
          {buttons.find((b) => b.id === "template-manager") && options.templatelist.value && <TemplateManager />}
        </div>
        {alert && <Alert className="topbar-alert"> {alert} </Alert>}
        <Title id="document-title" dangerouslySetInnerHTML={{ __html: titleHtml.value }} />
      </div>
      <div className="side">
        <Avatars users={users} />
        {textButtons.length > 0 && (
          <div className="btns">
            {textButtons.map((b) => (
              <DefaultButton type="button" onClick={b.action}>
                {b.text}
              </DefaultButton>
            ))}
          </div>
        )}
        <ButtonGroup buttons={editorModeButtons.value} clickedId={clickedId.value} />
      </div>
    </Topbar>
  );
};
