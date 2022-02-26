import { html, Component, render } from 'https://unpkg.com/htm/preact/standalone.module.js'

class ButtonGroup extends Component {

  constructor(props) {
    super(props)
    this.state = { clickedId: 0, buttons: props.buttons }
    this.doSomethingAfterClick = props.doSomethingAfterClick
    this.doSomethingAfterClick.bind(this)
  }

  handleClick(event, id) {
    this.setState({ clickedId: id })
    this.doSomethingAfterClick(event)
  }

  render(props, state) {
  return html`
    ${state.buttons.map((buttonLabel, i) => (
      html`<button type="button" key={i} name=${buttonLabel} onClick=${(event) => this.handleClick(event, i)} class=${i === state.clickedId ? "customButton active" : "customButton"}>
        ${buttonLabel}
      </button>`
    ))}`
  }
}

console.log("ButtonGroup component loaded")

export default ButtonGroup

