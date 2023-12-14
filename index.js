import "./MystEditor2.js";
import l, { render as u, html as d } from "./MystEditor.js";
(function() {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload"))
    return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
    n(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const o of t.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(e) {
    const t = {};
    return e.integrity && (t.integrity = e.integrity), e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy), e.crossorigin === "use-credentials" ? t.credentials = "include" : e.crossorigin === "anonymous" ? t.credentials = "omit" : t.credentials = "same-origin", t;
  }
  function n(e) {
    if (e.ep)
      return;
    e.ep = !0;
    const t = s(e);
    fetch(e.href, t);
  }
})();
let c = `# h1 is quite big

## [h2 which is a link](https://google.com)

### h3

#### h4

##### h5

###### h6 is the size of the regular font

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore

Veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores

  * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
  * Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt
    * Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
    * Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores tempor incididunt ut labore et dolore magna aliqua
      * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        Eos qui ratione voluptatem sequi nesciunt
    * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
  * Lorem Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores

Unhandled role: {unknown}\`content\` in paragraph.

Raw role: {raw}\`content\`

Unhandled directive:

\`\`\`{unknown} argument
content
\`\`\`

Erroneous directive:

\`\`\`{admonition}
\`\`\`

Admonition with title

\`\`\`{admonition} A **Title**
Some *content*
\`\`\`

Nested admonitions:

\`\`\`\`{note} This is a note
\`\`\`{warning} This is a nested warning
\`\`\`
\`\`\`\`

Images and figures:

\`\`\`{image} https://via.placeholder.com/150
:align: center
\`\`\`

\`\`\`{figure} https://via.placeholder.com/150
:align: center
:name: placeholder

A **caption**
\`\`\`

The placeholder figure is {numref}\`Figure %s <placeholder>\`.
The \`ref\` link is: {ref}\`placeholder\`.
We can also see {eq}\`math_label\` which is below!

Tables:

\`\`\`{list-table} Caption *text*
:header-rows: 1

- * Heading, Column 1
  * Heading, Column 2
- * Row, Column 1
  * Row, Column 2

    Second paragraph
\`\`\`

HTML:

* H{sub}\`2\`O
* 4{sup}\`th\` of July
* {abbr}\`CSS (Cascading Style Sheets)`;
console.log("Welcome to the MyST editor demo. The right hand side should auto update.");
const m = (a) => {
  console.log(`Example callback fired on ${a.target}`), window.print();
}, r = ["#30bced", "#60c771", "#e6aa3a", "#cbb63e", "#ee6352", "#9ac2c9", "#8acb88", "#14b2c4"], p = "0", h = Math.floor(Math.random() * 1e3).toString(), g = r[Math.floor(Math.random() * r.length)];
u(d`
        <${l}
          printCallback=${m}
          templatelist="linkedtemplatelist.json"
          initialText=${c}
          id="textarea_id"
          collaboration=${{
  enabled: {}.VITE_COLLAB == "ON",
  wsUrl: {}.VITE_WS_URL,
  username: h,
  room: p,
  color: g
}}
          spellcheckOpts=${{
  dict: "en_US",
  dictionaryPath: "/myst-editor/dictionaries"
}}
        />
      `, document.getElementById("myst"));
