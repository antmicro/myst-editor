import { html, Component, render } from 'https://unpkg.com/htm/preact/standalone.module.js'
import markdownitDocutils from 'https://unpkg.com/markdown-it-docutils@0.1.1/dist/mjs/index.js'
import purify from 'https://unpkg.com/dompurify@2.3.5/dist/purify.es.js'
import markdownIt from 'https://cdn.skypack.dev/@esm-bundle/markdown-it'

import ButtonGroup from "./ButtonGroup.js";

class MystEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {...props}
    this.handleInput = this.handleInput.bind(this)
    this.changeMode = this.changeMode.bind(this)
  }
  changeMode(event) {
    const name = event.target.name
    if (name == "Source") {
      this.setState({source: true, preview: false})
    }
    else if (name == "Preview") {
      this.setState({source: false, preview: true})
    }
    else if (name == "Both") {
      this.setState({source: true, preview: true})
    }
    console.log(event.target.name)
  }
  handleInput(event) {
    this.setState({ text: event.target.value })
  }
  handlePrint(event, printCallback) {
    printCallback(event)
  }
  renderAndSanitize(text) {
    return purify.sanitize(markdownIt().use(markdownitDocutils).render(text))
  }
  render(state, props) {
    return html`
      <div class="myst_content_parent">
        <div class="myst_top_bar ${state.topbar? 'shown' : 'hidden'}">
	  <${ButtonGroup} buttons=${["Source", "Preview", "Both"]} clickCallback=${this.changeMode}/>
	  <button onClick=${(event) => this.handlePrint(event, props.printCallback)}>Print</button>
	</div>
        <div class="flex-break"></div>
        <textarea onInput=${this.handleInput} id=${props.id} class="myst_content ${state.source? 'shown' : 'hidden'}">${state.text}</textarea>
        <div class="myst_rendered ${state.preview? 'shown' : 'hidden'}" dangerouslySetInnerHTML=${{__html: this.renderAndSanitize(state.text)}}/>
      </div>`
  }
}

MystEditor.defaultProps = {
  topbar: true,
  source: true,
  preview: true,
  printCallback: window.print
}

console.log("MystEditor component loaded")

export { MystEditor, html, render }
