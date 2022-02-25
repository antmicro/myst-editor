import { html, Component, render } from 'https://unpkg.com/htm/preact/standalone.module.js'

class ButtonGroup extends Component {

  constructor(props) {
    super(props)
    this.state = { clickedId: 0, buttons: props.buttons, doSomethingAfterClick: props.doSomethingAfterClick }
    this.doSomethingAfterClick = props.doSomethingAfterClick
    this.doSomethingAfterClick.bind(this)
  }

  handleClick(event, id) {
    this.setState({ clickedId: id })
    this.state.doSomethingAfterClick(event)
  }

  render() {
  return html`
    ${this.state.buttons.map((buttonLabel, i) => (
      html`<button key={i} name=${buttonLabel} onClick=${(event) => this.handleClick(event, i)} class=${i === this.state.clickedId ? "customButton active" : "customButton"}>
        ${buttonLabel}
      </button>`
    ))}`
  }
}

console.log("ButotonGroup component loaded")

export default ButtonGroup

