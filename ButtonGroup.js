import { html, Component, render } from 'https://unpkg.com/htm/preact/standalone.module.js'

class ButtonGroup extends Component {

  constructor(props) {
    super(props)
    this.state = { clickedId: props.clickedId, buttons: props.buttons }
  }

  handleClick(event, id, clickCallback) {
    this.setState({ clickedId: id })
    clickCallback(event)
  }

  render(props, state) {
  return html`
    ${state.buttons.map((buttonLabel, i) => (
      html`<button type="button" key={i} name=${buttonLabel} onClick=${(event) => this.handleClick(event, i, props.clickCallback)} class=${i === state.clickedId ? "customButton active" : "customButton"}>
       <img key={i} name=${buttonLabel} onClick=${(event) => this.handleClick(event, i, props.clickCallback)}/>
      </button>`
    ))}`
  }
}

ButtonGroup.defaultProps = {
  clickedId: 0
}

console.log("ButtonGroup component loaded")

export default ButtonGroup

