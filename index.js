import "./MystEditor2.js";
import s, { render as c, html as d } from "./MystEditor.js";
(function() {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload"))
    return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
    r(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const n of t.addedNodes)
          n.tagName === "LINK" && n.rel === "modulepreload" && r(n);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(e) {
    const t = {};
    return e.integrity && (t.integrity = e.integrity), e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy), e.crossorigin === "use-credentials" ? t.credentials = "include" : e.crossorigin === "anonymous" ? t.credentials = "omit" : t.credentials = "same-origin", t;
  }
  function r(e) {
    if (e.ep)
      return;
    e.ep = !0;
    const t = l(e);
    fetch(e.href, t);
  }
})();
let h = `# h1 is quite big

## [h2 which is a link](https://google.com)

### h3

#### h4

##### h5

###### h6 is the size of the regular font

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
const u = (i) => {
  console.log(`Example callback fired on ${i.target}`), window.print();
}, a = ["#30bced", "#60c771", "#e6aa3a", "#cbb63e", "#ee6352", "#9ac2c9", "#8acb88", "#14b2c4"], m = "0", p = Math.floor(Math.random() * 1e3).toString(), f = a[Math.floor(Math.random() * a.length)];
c(d`
        <${s}
          printCallback=${u}
          templatelist="linkedtemplatelist.json"
          initialText=${h}
          id="textarea_id"
          collaboration=${{
  enabled: {}.VITE_COLLAB == "ON",
  wsUrl: {}.VITE_WS_URL,
  username: p,
  room: m,
  color: f
}}
          spellcheckOpts=${{
  dict: "en_US",
  dictionaryPath: "/dictionaries"
}}
        />
      `, document.getElementById("myst"));
