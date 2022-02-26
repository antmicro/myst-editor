import { html, Component, render } from 'https://unpkg.com/htm/preact/standalone.module.js'

class ButtonGroup extends Component {

  constructor(props) {
    super(props)
    this.state = { clickedId: 0, buttons: props.buttons }
  }

  handleClick(event, id, clickCallback) {
    this.setState({ clickedId: id })
    clickCallback(event)
  }

  render(props, state) {
  return html`
    ${state.buttons.map((buttonLabel, i) => (
      html`<button type="button" key={i} name=${buttonLabel} onClick=${(event) => this.handleClick(event, i, props.clickCallback)} class=${i === state.clickedId ? "customButton active" : "customButton"}>
        ${buttonLabel}
      </button>`
    ))}`
  }
}

console.log("ButtonGroup component loaded")

export default ButtonGroup

