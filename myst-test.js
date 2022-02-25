import { html, Component, render } from 'https://unpkg.com/htm/preact/standalone.module.js'
import markdownitDocutils from 'https://unpkg.com/markdown-it-docutils@0.1.1/dist/mjs/index.js'
import purify from 'https://unpkg.com/dompurify@2.3.5/dist/purify.es.js'
import markdownIt from 'https://cdn.skypack.dev/@esm-bundle/markdown-it'

import ButtonGroup from "./button-group.js";

class MystEditor extends Component {
  constructor(props) {
    super(props)
    this.state = { text: props.text, topbar: props.topbar, source: props.source, preview: props.preview }
    this.handleInput = this.handleInput.bind(this)
    this.printButtonLabel = this.printButtonLabel.bind(this)
  }
  printButtonLabel(event) {
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
  renderAndSanitize(text) {
    return purify.sanitize(markdownIt().use(markdownitDocutils).render(text))
  }
  render({ id = '' }) {
    return html`
      <div class="myst_content_parent">
        <div class="myst_top_bar ${this.state.topbar? 'shown' : 'hidden'}">
	  <${ButtonGroup} buttons=${["Source", "Preview", "Both"]} doSomethingAfterClick=${this.printButtonLabel}/>
	</div>
        <div class="flex-break"></div>
        <textarea ref=${this.contentRef} onInput=${this.handleInput} id=${id} class="myst_content ${this.state.source? 'shown' : 'hidden'}">${this.state.text}</textarea>
        <div class="myst_rendered ${this.state.preview? 'shown' : 'hidden'}" dangerouslySetInnerHTML=${{__html: this.renderAndSanitize(this.state.text)}}/>
      </div>`
  }
}

MystEditor.defaultProps = {
  topbar: true,
  source: true,
  preview: true
}

console.log("MystEditor component loaded")

export { MystEditor, html, render }
