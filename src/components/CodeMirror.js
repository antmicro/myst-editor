import { useEffect, useRef, useState } from 'preact/hooks';
import { html } from "htm/preact";
import { basicSetup, EditorView } from "codemirror";
import { keymap } from "@codemirror/view";
import { indentWithTab } from "@codemirror/commands";
import { EditorState } from "@codemirror/state";
import styled from 'styled-components';
import { yCollab } from "y-codemirror.next";
import useCollaboration from '../hooks/useCollaboration';
import spellcheck from '../hooks/spellchecker';
import { customHighlighter } from '../hooks/customHighlights';
import { adjustToMode } from './Preview';
import { markdown } from "@codemirror/lang-markdown";

const adjust = adjustToMode("Source");

const CodeEditor = styled.div`
  border-radius: var(--border-radius);
  background: var(--gray-200);
  font-family: monospace;
  font-size: 0.94em;
  resize: none;
  border: 0;
  padding: 20px;
  min-height: 500px;

  ${props => adjust(props.$mode)}

  flex: 1;
  border: 1px solid var(--gray-400);
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.15);

  @media print {
    & {
      display: none;
    }
  }

  .cm-ySelectionInfo {
    opacity: 1 !important;
    font-size: 0.6rem;
    padding: 0.25rem 0.5rem !important;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    font-family: "Lato" !important;
    font-weight: 600 !important;
  }

  .cm-widgetBuffer {
    margin-bottom: 0;
  }

  .cm-ySelectionCaretDot {
    display: none;
  }

  .cm-yLineSelection {
    margin: 0 2px 0 6px !important;
  }

  .cm-editor {
    outline: 0;
  }

  .cm-error {
    text-decoration: underline red
  }

  .cm-link {
    color: var(--blue-500);

    .cm-error {
      text-decoration: unset;
    }

    .ͼ6.ͼ5 {
      color: unset;
    }
  }

  .cm-mono {
    color: #219;
  }
`;

const HiddenTextArea = styled.textarea`
  display: none;
`;

const getRelativeCursorLocation = (view) => {
  const { from } = view.state.selection.main;
  const pos = view.state.doc.lineAt(from);
  return { line: pos.number - 1, ch: from - pos.from };
};

const restoreCursorLocation = (view, location) => {
  const { line, ch } = location;
  const pos = view.state.doc.line(line + 1).from + ch;
  view.dispatch({
    selection: { anchor: pos, head: pos },
    scrollIntoView: true,
  });
};

const setEditorText = (editor, text) => {
  editor.dispatch({
    changes: {
      from: 0,
      to: editor.state.doc.length,
      insert: text,
    }
  });
}

const CodeMirror = ({ text, setText, id, name, className, mode, syncText, setSyncText, collaboration, spellcheckOpts, highlights }) => {
  const editorRef = useRef(null);
  const [initialized, setInitialized] = useState(false);
  const { provider, undoManager, ytext, ydoc, ready } = useCollaboration(collaboration);

  useEffect(() => {
    if (collaboration.enabled) {
      undoManager.on('stack-item-added', event => {
        event.stackItem.meta.set('cursor-location', getRelativeCursorLocation(editorRef.current));
      });
      undoManager.on('stack-item-popped', event => {
        restoreCursorLocation(editorRef.current, event.stackItem.meta.get('cursor-location'));
      });
    }

    const basicSetupWithoutHistory = basicSetup.filter((_, i) => i != 3);
    const extensions = [
      collaboration.enabled ? basicSetupWithoutHistory : basicSetup,
      keymap.of([
        indentWithTab
      ]),
      markdown(),
      spellcheck(spellcheckOpts),
      customHighlighter(highlights),
      EditorView.lineWrapping,
      EditorView.updateListener.of(update => {
        if (update.docChanged) {
          if (localStorage.getItem('log') == 'true') console.log('doc changed');
          setText(view.state.doc.toString());
        }
      })
    ];
    if (collaboration.enabled) {
      extensions.push(yCollab(ytext, provider.awareness, { undoManager }));
      extensions.push(keymap.of([
        { key: "Mod-z", run: () => undoManager.undo(), preventDefault: true },
        { key: "Mod-y", run: () => undoManager.redo(), preventDefault: true },
      ]));
    }

    const startState = EditorState.create({
      doc: collaboration.enabled ? ytext.toString() : text,
      extensions
    });

    const view = new EditorView({
      state: startState,
      parent: document.getElementById(id+'-editor')
    });
    editorRef.current = view;
    setInitialized(true);

    return () => {
      if (collaboration.enabled) {
        provider.disconnect();
        ydoc.destroy();
      }
      view.destroy();
    };
  }, []);

  useEffect(() => {
    const mystEditorCount = document.querySelectorAll("#myst-css-namespace").length;
    const isFirstUser = collaboration.enabled && 
      ytext.toString().length == 0 && 
      provider.awareness.getStates().size == mystEditorCount && 
      provider.firstUser && 
      ready;

    if (ytext && ytext.toString().length != 0) setText(ytext.toString());

    if (isFirstUser) {
      console.log('You are the first user in this document. Initiating...');
      setEditorText(editorRef.current, text);
    }
  }, [ready, initialized]);

  useEffect(() => {
    if (syncText) {
      console.log('setting text');
      setEditorText(editorRef.current, text);
      setSyncText(false);
    }
  }, [syncText]);

  return html`
      <${CodeEditor} $mode=${mode} id="${id}-editor" class=${className}><//>
      <${HiddenTextArea} value=${text} name=${name} id=${id}><//>
  `;
};

console.log('CodeMirror component loaded');

export default CodeMirror
export {
  CodeEditor
}