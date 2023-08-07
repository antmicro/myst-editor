import { useEffect, useRef } from 'preact/hooks';
import { html } from "htm/preact";
import { basicSetup, EditorView } from "codemirror";
import { keymap } from "@codemirror/view";
import { indentWithTab } from "@codemirror/commands";
import { EditorState } from "@codemirror/state";

const CodeMirror = ({ value, setText, id, name, className }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    const prepareTextToSubmit = (doc, comp) => document.getElementById(comp).value = doc;

    const startState = EditorState.create({
      doc: value,
      extensions: [
        basicSetup,
        keymap.of([indentWithTab]),
        EditorView.lineWrapping,
        EditorView.updateListener.of(update => {
          if (update.docChanged) {
            const text = editorRef.current.state.doc.toString();
            setText(text);
            prepareTextToSubmit(text, id);
          }
        })
      ]
    });

    const view = new EditorView({
      state: startState,
      parent: document.getElementById('editor')
    });

    editorRef.current = view;

    return () => {
      view.destroy();
    };
  }, []);

  return html`
    <div id="editor" class=${className}></div>
    <textarea name=${name} id=${id} class="hidden"></textarea>
  `;
};

console.log('CodeMirror component loaded');

export default CodeMirror
