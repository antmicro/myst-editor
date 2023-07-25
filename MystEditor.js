import { render, Component } from 'preact';
import { html } from 'htm/preact';
import markdownitDocutils from 'markdown-it-docutils'
import purify from 'dompurify'
import markdownIt from 'markdown-it'

import ButtonGroup from "./ButtonGroup.js";

class MystEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: props.text,
      topbar: props.topbar,
      source: props.source,
      preview: props.preview
    }
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
  render(props,state) {
    return html`
      <div class="myst_editor_parent">
        <div class="myst_top_bar ${state.topbar? 'shown' : 'hidden'}">
	  <div class="myst_top_bar-right">
            <button type="button" onClick=${(event) => this.handlePrint(event, props.printCallback)} id="customButton_print">Export as PDF</button>
            <div class="vl"></div>
	    <${ButtonGroup} buttons=${["Source", "Preview", "Both"]} clickedId=${2} clickCallback=${this.changeMode}/>
          </div>
	</div>
	<div class="myst_wrapper">
          <textarea onInput=${this.handleInput} name=${props.name} id=${props.id} class="myst_content ${state.source? 'shown' : 'hidden'}" value=${state.text}/>
          <div class="myst_rendered ${state.preview? 'shown' : 'hidden'}" dangerouslySetInnerHTML=${{__html: this.renderAndSanitize(state.text)}}/>
	</div>
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
