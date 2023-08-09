import { useEffect } from 'preact/hooks';
import { html } from "htm/preact";
import { basicSetup, EditorView } from "codemirror";
import { keymap } from "@codemirror/view";
import { indentWithTab } from "@codemirror/commands";
import { EditorState } from "@codemirror/state";

const CodeMirror = ({ value, setText, id, name, className }) => {
  let view = null

  useEffect(() => {
    const startState = EditorState.create({
      doc: value,
      extensions: [
        basicSetup,
        keymap.of([indentWithTab]),
        EditorView.lineWrapping,
        EditorView.updateListener.of(update => {
          if (update.docChanged) {
            const text = view.state.doc.toString();
            setText(text);
          }
        })
      ]
    });

    view = new EditorView({
      state: startState,
      parent: document.getElementById('editor')
    });
  }, []);

  return html`
    <div id="editor" class=${className}></div>
    <textarea value=${value} name=${name} id=${id} class="hidden"></textarea>
  `;
};

console.log('CodeMirror component loaded');

export default CodeMirror
