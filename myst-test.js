import { html, Component, render } from 'https://unpkg.com/htm/preact/standalone.module.js'
import autosize from 'https://cdnjs.cloudflare.com/ajax/libs/autosize.js/5.0.1/autosize.esm.min.js'
import markdownitDocutils from 'https://unpkg.com/markdown-it-docutils@0.1.1/dist/mjs/index.js'
import purify from 'https://unpkg.com/dompurify@2.3.5/dist/purify.es.js'

let importUMD = async (url, module = {exports:{}}) =>
  (Function('module', 'exports', await (await fetch(url)).text()).call(module, module, module.exports), module).exports

// no ESM version for markdownit
const markdownit = await importUMD(`https://unpkg.com/markdown-it@12.3.2/dist/markdown-it.min.js`)

class MystEditor extends Component {
  constructor(props) {
    super(props)
    this.state = { text: props.text }
    this.handleInput = this.handleInput.bind(this)
  }
  handleInput(event) {
    this.setState({text: event.target.value})
    autosize(event.target)
  }
  renderAndSanitize(text) {
    return purify.sanitize(markdownit().use(markdownitDocutils).render(text))
  }
  render({ id = '' }) {
    return html`
      <div class="myst_content_parent">
        <textarea ref=${this.contentRef} onInput=${this.handleInput} id=${id} class="myst_content">${this.state.text}</textarea>
        <div class="myst_rendered" dangerouslySetInnerHTML=${{__html: this.renderAndSanitize(this.state.text)}}/>
      </div>`
  }
}

console.log("MystEditor component loaded")

export { MystEditor, html, render, autosize }
