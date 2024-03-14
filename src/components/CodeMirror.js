import { useEffect, useRef, useState } from 'preact/hooks';
import { html } from "htm/preact";
import { EditorView } from "codemirror";
import { EditorState } from "@codemirror/state";
import styled from 'styled-components';
import useCollaboration from '../hooks/useCollaboration';
import { adjustToMode } from './Preview';
import { ExtensionBuilder } from '../extensions';
import { YCommentsParent } from "../components/Comment";
import useComments from '../hooks/useComments';

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
  color: black;
  position: relative;

  ${props => adjust(props.$mode)}

  flex: 1;
  border: 1px solid var(--gray-400);
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.15);

  .comment-gutter-icon {
    height: 17px;
    width: 17px;
    cursor: pointer;
  }

  .comment-image {
    position: absolute;
    display: inline;
    background-color: var(--gray-200);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns' width='17px' height='17px' viewBox='0 0 32 32' version='1.1'%3E%3Ctitle%3Ecomment-3%3C/title%3E%3Cdesc%3ECreated with Sketch Beta.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'%3E%3Cg id='Icon-Set' sketch:type='MSLayerGroup' transform='translate(-204.000000, -255.000000)' fill='%23000000'%3E%3Cpath d='M228,267 C226.896,267 226,267.896 226,269 C226,270.104 226.896,271 228,271 C229.104,271 230,270.104 230,269 C230,267.896 229.104,267 228,267 L228,267 Z M220,281 C218.832,281 217.704,280.864 216.62,280.633 L211.912,283.463 L211.975,278.824 C208.366,276.654 206,273.066 206,269 C206,262.373 212.268,257 220,257 C227.732,257 234,262.373 234,269 C234,275.628 227.732,281 220,281 L220,281 Z M220,255 C211.164,255 204,261.269 204,269 C204,273.419 206.345,277.354 210,279.919 L210,287 L217.009,282.747 C217.979,282.907 218.977,283 220,283 C228.836,283 236,276.732 236,269 C236,261.269 228.836,255 220,255 L220,255 Z M212,267 C210.896,267 210,267.896 210,269 C210,270.104 210.896,271 212,271 C213.104,271 214,270.104 214,269 C214,267.896 213.104,267 212,267 L212,267 Z M220,267 C218.896,267 218,267.896 218,269 C218,270.104 218.896,271 220,271 C221.104,271 222,270.104 222,269 C222,267.896 221.104,267 220,267 L220,267 Z' id='comment-3' sketch:type='MSShapeGroup'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }

  .comment-box {
    width: 95%;
    display: flex;
    margin: 0px;
    padding: 0px;
  }

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


const setEditorText = (editor, text) => {
  editor.dispatch({
    changes: {
      from: 0,
      to: editor.state.doc.length,
      insert: text,
    }
  });
}

const CodeMirror = ({ text, id, name, className, mode, collaboration, spellcheckOpts, highlights, setUsers, getAvatar }) => {
  const editorRef = useRef(null);
  const [initialized, setInitialized] = useState(false);

  const { provider, undoManager, ytext, ydoc, ready } = useCollaboration(collaboration);
  const ycomments = useComments(ydoc, provider, getAvatar);

  useEffect(() => {
    const startState = EditorState.create({
      doc: collaboration.enabled ? ytext.toString() : text.get(),
      extensions: ExtensionBuilder.basicSetup()
        .useHighlighter(highlights)
        .useSpellcheck(spellcheckOpts)
        .useCollaboration({enabled: collaboration.enabled || false, ytext, undoManager, provider, editorRef})
        .useComments({enabled: collaboration.commentsEnabled, ycomments})
        .addUpdateListener(update => update.docChanged && text.set(view.state.doc.toString()))
        .create()
    });

    const view = new EditorView({
      state: startState,
      parent: document.getElementById(id+'-editor')
    });
    editorRef.current = view;
    setInitialized(true);

    ycomments?.registerCodeMirror(view);

    
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

    if (ytext && ytext.toString().length != 0) text.set(ytext.toString());

    if (isFirstUser) {
      console.log('You are the first user in this document. Initiating...');
      setEditorText(editorRef.current, text.get());
    }
    
    text.onSync(currentText => setEditorText(editorRef.current, currentText))
    ycomments?.updateMainCodeMirror();
    provider?.watchCollabolators(setUsers)
  }, [ready, initialized]);

  return html`
      <${CodeEditor} $mode=${mode} id="${id}-editor" class=${className}>
        ${collaboration.commentsEnabled ? html`<${YCommentsParent} ycomments=${ycomments}/>` : ""}
      <//>
      <${HiddenTextArea} value=${text.get()} name=${name} id=${id}><//>
  `;
};

export default CodeMirror
export {
  CodeEditor
}