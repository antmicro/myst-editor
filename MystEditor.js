import { render } from 'preact';
import { useState } from 'preact/hooks';
import { html } from 'htm/preact';
import markdownitDocutils from 'markdown-it-docutils'
import purify from 'dompurify'
import markdownIt from 'markdown-it'

import ButtonGroup from "./ButtonGroup.js";

const MystEditor = ({
  name = "myst_editor_textarea",
  id = "myst_editor_textarea",
  initialMode = "Both",
  initialText = "",
  printCallback = window.print,
  topbar = true
}) => {
  const [mode, setMode] = useState(initialMode);
  const [text, setText] = useState(initialText);

  const renderAndSanitize = (text) => {
    return purify.sanitize(markdownIt().use(markdownitDocutils).render(text))
  }

  return html`
  <div class="myst_editor_parent">
    <div class="myst_top_bar ${topbar? 'shown' : 'hidden'}">
      <div class="myst_top_bar-right">
        <button type="button" onClick=${(event) => printCallback(event)} id="customButton_print">Export as PDF</button>
        <div class="vl"></div>
        <${ButtonGroup} buttons=${["Source", "Preview", "Both"]} clickedId=${2} clickCallback=${(event) => setMode(event.target.name)}/>
      </div>
    </div>
  <div class="myst_wrapper">
    <textarea onInput=${(event) => setText(event.target.value)} name=${name} id=${id} className="myst_content ${mode === "Both" || mode === "Source" ? 'shown' : 'hidden'}" value=${text}/>
    <div class="myst_rendered ${mode === "Both" || mode === "Preview" ? 'shown' : 'hidden'}" dangerouslySetInnerHTML=${{__html: renderAndSanitize(text)}}/>
  </div>
</div>`
}

export default MystEditor
export { html, render }
