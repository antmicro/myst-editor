import { html, Component, render } from 'https://unpkg.com/htm/preact/standalone.module.js'
import autosize from 'https://cdnjs.cloudflare.com/ajax/libs/autosize.js/5.0.1/autosize.esm.min.js'
import markdownitDocutils from 'https://unpkg.com/markdown-it-docutils@0.1.1/dist/mjs/index.js'

let importUMD = async (url, module = {exports:{}}) =>
  (Function('module', 'exports', await (await fetch(url)).text()).call(module, module, module.exports), module).exports

// no ESM version for markdownit
const markdownit = await importUMD(`https://unpkg.com/markdown-it@12.3.2/dist/markdown-it.min.js`)

class MystEditor extends Component {
  constructor(props) {
    super(props)
    this.state = { text: props.text }
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(event) { this.setState({text: event.target.value}) }
  render({ id = '' }) {
    return html`
      <div class="myst_content_parent">
        <textarea onChange=${this.handleInput} id=${id} class="myst_content">${this.state.text}</textarea>
        <div class="myst_rendered">${markdownit().use(markdownitDocutils).render(this.state.text)}</div>
      </div>
    `
  }
}

class Todos extends Component {
  addTodo() {
    const { todos = [] } = this.state
    this.setState({ todos: todos.concat(`Item ${todos.length}`) })
  }
  render({ page }, { todos = [] }) {
    return html`
      <div class="app">
        <${Header} name="ToDo's (${page})" />
        <ul>
          ${todos.map(todo => html`
            <li key=${todo}>${todo}</li>
          `)}
        </ul>
        <button onClick=${() => this.addTodo()}>Add Todo</button>
        <${Footer}>footer content here<//>
      </div>
    `
  }
}

const Header = ({ name }) => html`<h1>${name} List</h1>`

const Footer = props => html`<footer ...${props} />`

console.log("Myst component loaded")

export { Todos, MystEditor, html, render }
