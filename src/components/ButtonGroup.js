import { useState } from 'preact/hooks';
import { html } from 'htm/preact';
import styled from 'styled-components/macro';
import DefaultButton from './Buttons.js';

const GroupButton = styled(DefaultButton)`
  color: ${props => props.$active ? 'white' : 'var(--gray-900)'};
  border: ${props => props.$active ? '1px solid var(--green-500)' : '1px solid var(--gray-800)'};
  background-color: ${props => props.$active ? 'var(--green-500)' : 'var(--gray-800)'};
  margin: 5px;
  width: 40px;
`;

const ButtonGroup = ({ buttons, initialClickedId = 2, clickCallback }) => {
  const [clickedId, setClickedId] = useState(initialClickedId);

  return html`
    ${buttons.map((buttonOptions, i) => (
    html`
      <${GroupButton} type="button" key=${buttonOptions.label} name=${buttonOptions.label} onClick=${() => { setClickedId(i); clickCallback(buttonOptions.label); }} $active=${i === clickedId}>
        <img src=${buttonOptions.img} alt=${buttonOptions.label} />
      <//>`
  ))}
  `;
}

console.log("ButtonGroup component loaded")

export default ButtonGroup
