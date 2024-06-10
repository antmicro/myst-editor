import { useState } from "preact/hooks";
import { html } from "htm/preact";
import styled from "styled-components";
import DefaultButton from "./Buttons.js";

const GroupButton = styled(DefaultButton)`
  color: ${(props) => (props.active ? "white" : "var(--icon-color)")};
  border: ${(props) => (props.active ? "1px solid var(--icon-main-active)" : "1px solid var(--icon-border)")};
  background-color: ${(props) => (props.active ? "var(--icon-main-active)" : "var(--icon-bg)")};
  margin: 5px;
  width: 40px;
`;

const ButtonGroup = ({ buttons, initialClickedId = 2, highlightActive = true }) => {
  const [clickedId, setClickedId] = useState(initialClickedId);

  return html`
    ${buttons.map(
      (button, i) =>
        html` <${GroupButton}
          className="icon"
          type="button"
          key=${button.id}
          name=${button.id}
          onClick=${() => {
            highlightActive && setClickedId(i);
            button.action();
          }}
          active=${i === clickedId}
        >
          ${typeof button.icon == "function" ? html`<${button.icon} />` : html`<img src=${button.icon} />`}
        <//>`,
    )}
  `;
};

export default ButtonGroup;
