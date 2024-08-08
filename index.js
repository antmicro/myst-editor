import r, { render as n, html as u, defaultButtons as l } from "./MystEditor.js";
let m = `# h1 is quite big

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
const a = ["#30bced", "#60c771", "#e6aa3a", "#cbb63e", "#ee6352", "#9ac2c9", "#8acb88", "#14b2c4"], o = new URLSearchParams(window.location.search), d = o.get("room") || "0", s = o.get("username") || Math.floor(Math.random() * 1e3).toString(), c = a[Math.floor(Math.random() * a.length)];
let h = [{
  target: "say",
  transform: async (e) => s + " says: '" + e + "'"
}], p = [{
  target: /[0-9a-z\-]+\/[0-9a-z\-]+#\d{1,10}/g,
  transform: (e) => {
    const [t, i] = e.split("#");
    return `<a href="https://github.com/${t}/issues/${i}">${e}</a>`;
  }
}, {
  target: /[0-9a-z\-]+\/[0-9a-z\-]+\!\d+/g,
  transform: (e) => {
    const [t, i] = e.split("!");
    return `<a href="https://github.com/${t}/pull/${i}">${e}</a>`;
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
    const t = e.slice(1);
    return `
          <a href='https://github.com/${t}'>
            ${t}
          </a>`;
  }
}, {
  target: /\|date\|/g,
  transform: (e) => new Promise((t) => t(new Date().toLocaleString("en-GB", {
    timeZone: "UTC"
  })))
}];
n(u`
          <${r}
            templatelist="linkedtemplatelist.json"
            initialText=${m}
            title="[MyST Editor](https://github.com/antmicro/myst-editor/) demo"
            id="textarea_id"
            transforms=${p}
            collaboration=${{
  enabled: {}.VITE_COLLAB == "ON" || o.get("collab"),
  commentsEnabled: {}.VITE_COLLAB == "ON" || o.get("collab"),
  wsUrl: {}.VITE_WS_URL || o.get("collab_server"),
  resolvingCommentsEnabled: {}.VITE_COLLAB == "ON" || o.get("collab"),
  username: s,
  room: d,
  color: c
}}
            customRoles=${h}
            includeButtons=${l.concat([{
  text: "Custom button",
  action: () => alert("Custom button action")
}])}
            spellcheckOpts=${{
  dict: "en_US",
  dictionaryPath: "/myst-editor/dictionaries"
}}
          />
        `, document.getElementById("myst"));
