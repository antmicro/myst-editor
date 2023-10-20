import "./MystEditor.js";
import { D as s, m as c, M as d, a as u } from "./MystEditor.70d07ab0.js";
(function() {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload"))
    return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
    i(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const a of t.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && i(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(e) {
    const t = {};
    return e.integrity && (t.integrity = e.integrity), e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy), e.crossorigin === "use-credentials" ? t.credentials = "include" : e.crossorigin === "anonymous" ? t.credentials = "omit" : t.credentials = "same-origin", t;
  }
  function i(e) {
    if (e.ep)
      return;
    e.ep = !0;
    const t = r(e);
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
const m = (n) => {
  console.log(`Example callback fired on ${n.target}`), window.print();
}, l = ["#30bced", "#60c771", "#e6aa3a", "#cbb63e", "#ee6352", "#9ac2c9", "#8acb88", "#14b2c4"], p = "0", f = Math.floor(Math.random() * 1e3).toString(), g = l[Math.floor(Math.random() * l.length)], b = (n) => {
  const o = (r, i, e) => {
    r.type == "rule" && (r.props[0] = r.props[0].split(",").map((t) => `${n} ${t}`).join(","));
  };
  return Object.defineProperty(o, "name", {
    value: `scope-${n}`
  }), o;
};
s(c`
      <${d} stylisPlugins=${[b("#myst")]}>
        <${u}
          printCallback=${m}
          templatelist="linkedtemplatelist.json"
          initialText=${h}
          id="textarea_id"
          collaboration=${{
  enabled: {}.VITE_COLLAB == "ON",
  wsUrl: {}.VITE_WS_URL,
  username: f,
  room: p,
  color: g
}}
        />
      <//>`, document.getElementById("myst"));
