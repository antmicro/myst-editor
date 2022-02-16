import { html, Component, render } from 'https://unpkg.com/htm/preact/standalone.module.js'
import autosize from 'https://cdnjs.cloudflare.com/ajax/libs/autosize.js/5.0.1/autosize.esm.min.js'
import markdownit from 'https://unpkg.com/markdown-it@12.3.2/dist/markdown-it.min.js?module'
import markdownitDocutils from 'https://unpkg.com/markdown-it-docutils@0.1.1/dist/mjs/index.js'


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

console.log("MyST component loaded")

export { Todos, html, render }
