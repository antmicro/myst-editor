import "./MystEditor.js";
import { q as c, m as d, M as m, d as p } from "./MystEditor.5bab6932.js";
(function() {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload"))
    return;
  for (const t of document.querySelectorAll('link[rel="modulepreload"]'))
    s(t);
  new MutationObserver((t) => {
    for (const i of t)
      if (i.type === "childList")
        for (const n of i.addedNodes)
          n.tagName === "LINK" && n.rel === "modulepreload" && s(n);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(t) {
    const i = {};
    return t.integrity && (i.integrity = t.integrity), t.referrerpolicy && (i.referrerPolicy = t.referrerpolicy), t.crossorigin === "use-credentials" ? i.credentials = "include" : t.crossorigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
  }
  function s(t) {
    if (t.ep)
      return;
    t.ep = !0;
    const i = r(t);
    fetch(t.href, i);
  }
})();
let h = `# h1 is quite big

## [h2 which is a link](https://google.com)

Issue in this repo: #1
PR in this repo: !2
Issue in another repo: github/docs#30828
PR in another repo: github/docs!100
Person/org handle: @antmicro

### h3

#### h4

##### h5

###### h6 is the size of the regular font

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore

Veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores

  * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed [do eiusmod tempor incididunt](site.com) ut labore et dolore magna aliqua
  * Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt
    * Nam libero tempore, cum soluta \`nobis est eligendi\` optio cumque nihil impedit quo minus id quod maxime
    * Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores tempor incididunt ut \`labore et dolore\` magna aliqua
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
const u = ["#30bced", "#60c771", "#e6aa3a", "#cbb63e", "#ee6352", "#9ac2c9", "#8acb88", "#14b2c4"], a = new URLSearchParams(window.location.search), g = a.get("room") || "0", l = a.get("username") || Math.floor(Math.random() * 1e3).toString(), f = u[Math.floor(Math.random() * u.length)];
let b = [{
  target: "say",
  transform: async (e) => l + " says: '" + e + "'"
}], y = [{
  target: /[0-9a-z\-]+\/[0-9a-z\-]+#\d{1,10}/g,
  transform: (e) => {
    const [o, r] = e.split("#");
    return `<a href="https://github.com/${o}/issues/${r}">${e}</a>`;
  }
}, {
  target: /[0-9a-z\-]+\/[0-9a-z\-]+\!\d+/g,
  transform: (e) => {
    const [o, r] = e.split("!");
    return `<a href="https://github.com/${o}/pull/${r}">${e}</a>`;
  }
}, {
  target: new RegExp("(^|(?<=\\s))#\\d+", "g"),
  transform: (e) => `<a href="https://github.com/antmicro/myst-editor/issues/${e.slice(1)}">${e}</a>`
}, {
  target: new RegExp("(^|(?<=\\s))!\\d+", "g"),
  transform: (e) => `<a href="https://github.com/antmicro/myst-editor/pull/${e.slice(1)}">${e}</a>`
}, {
  target: /@[0-9a-z\-]+/g,
  transform: (e) => {
    const o = e.slice(1);
    return `
          <a href='https://github.com/${o}'>
            ${o}
          </a>`;
  }
}, {
  target: /\|date\|/g,
  transform: (e) => new Promise((o) => o(new Date().toLocaleString("en-GB", {
    timeZone: "UTC"
  })))
}];
c(d`
          <${m}
            templatelist="linkedtemplatelist.json"
            initialText=${h}
            title="[MyST Editor](https://github.com/antmicro/myst-editor/) demo"
            id="textarea_id"
            transforms=${y}
            collaboration=${{
  enabled: {}.VITE_COLLAB == "ON" || a.get("collab"),
  commentsEnabled: {}.VITE_COLLAB == "ON" || a.get("collab"),
  wsUrl: {}.VITE_WS_URL || a.get("collab_server"),
  resolvingCommentsEnabled: {}.VITE_COLLAB == "ON" || a.get("collab"),
  username: l,
  room: g,
  color: f
}}
            customRoles=${b}
            includeButtons=${p.concat([{
  text: "Custom button",
  action: () => alert("Custom button action")
}])}
            spellcheckOpts=${{
  dict: "en_US",
  dictionaryPath: "/myst-editor/dictionaries"
}}
          />
        `, document.getElementById("myst"));
