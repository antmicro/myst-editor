import { useEffect, useRef } from 'preact/hooks';
import { html } from "htm/preact";
import { basicSetup, EditorView } from "codemirror";
import { keymap } from "@codemirror/view";
import { indentWithTab } from "@codemirror/commands";
import { EditorState } from "@codemirror/state";

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

const CodeMirror = ({ value, setText, id, name, className, templateState }) => {
  const editorRef = useRef(null);
  const prevTemplateState = usePrevious(templateState);
  const prepareTextToSubmit = (doc, comp) => document.getElementById(comp).value = doc;

  useEffect(() => {
    const startState = EditorState.create({
      doc: value,
      extensions: [
        basicSetup,
        keymap.of([indentWithTab]),
        EditorView.lineWrapping,
        EditorView.updateListener.of(update => {
          if (update.docChanged) {
            setText(view.state.doc.toString());
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

  useEffect(() => {
    if (
      templateState &&
      (!prevTemplateState || prevTemplateState.timestamp !== templateState.timestamp)
    ) {
      editorRef.current.dispatch({
        changes: {
          from: 0,
          to: editorRef.current.state.doc.length,
          insert: templateState.template,
        },
      });
      setText(templateState.template);
      prepareTextToSubmit(templateState.template, id);
    }

  }, [templateState]);

  return html`
    <div id="editor" class=${className}></div>
    <textarea value=${value} name=${name} id=${id} class="hidden"></textarea>
  `;
};

console.log('CodeMirror component loaded');

export default CodeMirror
