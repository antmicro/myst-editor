import { html } from 'htm/preact';

const Tooltip = ({ tooltipOrientation, showTooltip, errorMessage }) => {

    return html`
              <div class="tooltip-box${`-${tooltipOrientation}`} ${showTooltip? "" : "hidden"}">
                <div class="tooltip${`-${tooltipOrientation}`}">
                    ${errorMessage}
                </div>
              </div>`
  }

console.log("Tooltip component loaded")

export default Tooltip
