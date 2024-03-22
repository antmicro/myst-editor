import { useState } from 'preact/hooks';
import { html } from 'htm/preact';
import styled from 'styled-components';
import DefaultButton from './Buttons.js';

const GroupButton = styled(DefaultButton)`
  color: ${props => props.$active ? 'white' : 'var(--icon-color)'};
  border: ${props => props.$active ? '1px solid var(--icon-main-selected)' : '1px solid var(--icon-border)'};
  background-color: ${props => props.$active ? 'var(--icon-main-selected)' : 'var(--icon-bg)'};
  margin: 5px;
  width: 40px;`;

const ButtonGroup = ({ buttons, initialClickedId = 2, clickCallback, highlightActive = true }) => {
  const [clickedId, setClickedId] = useState(initialClickedId);

  return html`
    ${buttons.map((buttonOptions, i) => (
    html`
      <${GroupButton} className="icon" type="button" key=${buttonOptions.label} name=${buttonOptions.label} onClick=${() => { highlightActive && setClickedId(i); clickCallback(buttonOptions.label); }} $active=${i === clickedId}>
        <${buttonOptions.icon}/>
      <//>`
  ))}
  `;
}

export default ButtonGroup
