import { useEffect, useRef } from 'preact/hooks';
import { html } from "htm/preact";
import { basicSetup, EditorView } from "codemirror";
import { keymap } from "@codemirror/view";
import { indentWithTab } from "@codemirror/commands";
import { EditorState } from "@codemirror/state";
import styled from 'styled-components/macro';

const CodeEditor = styled.div`
  border-radius: var(--border-radius);
  background: var(--gray-200);
  font-family: monospace;
  font-size: 0.94em;
  resize: none;
  border: 0;
  padding: 20px;
  min-height: 500px;
  display: ${props => props.$shown ? 'block' : 'none'};
  flex: 1;
  border: 1px solid var(--gray-400);
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.15);

  @media print {
    display: none;
  }
`;

const HiddenTextArea = styled.textarea`
  display: none;
`;

const CodeMirror = ({ text, setText, id, name, className, shown, syncText, setSyncText }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    const startState = EditorState.create({
      doc: text,
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
      parent: document.getElementById(id+'-editor')
    });
    editorRef.current = view;

    return () => {
      view.destroy();
    };
  }, []);

  useEffect(() => {
    if (syncText) {
      editorRef.current.dispatch({
        changes: {
          from: 0,
          to: editorRef.current.state.doc.length,
          insert: text,
        },
      });
      setSyncText(false);
    }
  }, [text, syncText]);

  return html`
      <${CodeEditor} $shown="${shown}" id="${id}-editor" class=${className}><//>
      <${HiddenTextArea} value=${text} name=${name} id=${id}><//>
  `;
};

console.log('CodeMirror component loaded');

export default CodeMirror
