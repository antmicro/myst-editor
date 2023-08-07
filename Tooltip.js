import { html } from 'htm/preact';

const Tooltip = (props) => {

    return html`
              <div class="tooltip-box${`-${props.tooltipOrientation}`} ${props.showTooltip? "" : "hidden"}">
                <div class="tooltip${`-${props.tooltipOrientation}`}">
                    ${props.errorMessage}
                </div>
              </div>`
  }

console.log("Tooltip component loaded")

export default Tooltip
