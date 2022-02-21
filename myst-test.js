import { h, Component, render } from 'preact'
import htm from 'htm'

const html = htm.bind(h)

import markdownit from 'markdown-it'
import markdownitDocutils from 'markdown-it-docutils'
import DOMPurify from 'dompurify'

class MystEditor extends Component {
  constructor(props) {
    super(props)
    this.state = { text: props.text }
    this.handleInput = this.handleInput.bind(this)
  }
  handleInput(event) {
    this.setState({text: event.target.value})
  }
  renderAndSanitize(text) {
    return DOMPurify.sanitize(markdownit().use(markdownitDocutils).render(text))
  }
  render({ id = '' }) {
    return html`
      <div class="myst_content_parent">
        <div class="myst_top_bar"/>
        <textarea ref=${this.contentRef} onInput=${this.handleInput} id=${id} class="myst_content">${this.state.text}</textarea>
        <div class="myst_rendered" dangerouslySetInnerHTML=${{__html: this.renderAndSanitize(this.state.text)}}/>
      </div>`
  }
}

console.log("MystEditor component loaded")

export { MystEditor, html, render }
