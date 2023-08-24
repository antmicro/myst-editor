import { html } from 'htm/preact';

const Tooltip = ({ tooltipOrientation, errorMessage }) => {

    return html`
              <div class="tooltip-box${`-${tooltipOrientation}`}">
                <div class="tooltip${`-${tooltipOrientation}`}">
                    ${errorMessage}
                </div>
              </div>`
  }

console.log("Tooltip component loaded")

export default Tooltip
