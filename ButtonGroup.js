import { useState } from 'preact/hooks';
import { html } from 'htm/preact';

const ButtonGroup = ({buttons, initialClickedId = 0, clickCallback}) => {
    const [clickedId, setClickedId] = useState(initialClickedId);

    return html`
        ${buttons.map((buttonLabel, i) => (
            html`<button type="button" key=${buttonLabel} name=${buttonLabel} onClick=${(event) => {setClickedId(i); clickCallback(event);}} class=${i === clickedId ? "customButton active" : "customButton"}>
            </button>`
        ))}
    `;
}

console.log("ButtonGroup component loaded")

export default ButtonGroup
