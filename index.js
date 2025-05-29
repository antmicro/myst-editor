import d, { defaultButtons as h, darkTheme as l } from "./MystEditor.js";
let c = `# This is MyST Editor

A Markdown editor using the [markdown-it parser](https://github.com/markdown-it/markdown-it), based on the [CommonMark specification](https://spec.commonmark.org/0.31.2/).
We added some extensions so that users can make use of various features of the [MyST Markdown flavor](https://mystmd.org/).

## Admonitions

You can bring more attention to sections of your documents by putting them inside an admonition block. There are many types to choose from.

~~~{note}
You can find more information on https://mystmd.org/guide/admonitions.
~~~

~~~{important}
Notice that the link in the previous admonition is rendered, even without the standard Markdown link syntax.
~~~

~~~~{tip}
Admonitions can be nested.
~~~{note}
Like so.
~~~
~~~~

## Dual Pane sync

- In the default dual pane view mode in MyST Editor, you will notice a blue cursor appear both in the editor and in the preview.
- The editor is aware of the correspondence between the lines and the respective HTML segments, and will highlight them accordingly.
- The preview pane will also scroll if needed, so that you can always see where you are typing.

~~~{tip}
Try clicking something in the preview, the cursor in the editor should jump to the end of the corresponding line.
~~~

## Images

Apart from the standard Markdown image syntax:

![](https://picsum.photos/400/300)

You can also use:
- The image directive:
  ~~~{image} https://picsum.photos/400/300
  :alt: placeholder
  :width: 200px
  ~~~

- The figure directive
  ~~~{figure} https://picsum.photos/400/300
  :alt: placeholder
  :width: 200px

  An example figure.
  ~~~

## Mermaid diagrams

We have integrated the [Mermaid](https://mermaid.js.org/) diagramming tool with our editor, enabling you to add various diagrams and flowcharts to your documents.
An overview of the Mermaid syntax is available [here](https://mermaid.js.org/intro/).

### Graphs

~~~mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
~~~

### Sequence diagrams

~~~mermaid
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop HealthCheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
~~~

### Git graphs

~~~mermaid
gitGraph
   commit
   commit
   branch develop
   commit
   commit
   commit
   checkout main
   commit
   commit
~~~

## Copy document, print to PDF, templates

In the top left you will find some useful buttons that can be customized when integrating the editor with a website.
Some of the buttons include:
- \`Copy document as HTML\`
- \`Print document as PDF\`
- \`Templates\` - allows you to apply various document templates, depends on the configuration of the  MyST Editor

## View modes

In the top right corner you will find various view modes, including the source mode, preview mode, dual pane mode and the text diff mode, allowing you to see what changes were made.

## Custom transforms

The editor allows you to easily extend the standard Markdown syntax without having to write your own \`markdown-it\` plugins using the custom transforms feature.
You can specify a regular expression and what the output should look like, e.g.:

~~~js
{
  // Same repo issue links
  target: /(^|(?<=s))#d+/g,
  transform: (match) => {
    const issueId = match.slice(1);
    return \`<a href="https://github.com/antmicro/myst-editor/issues/\${issueId}">\${match}</a>\`;
  },
}
~~~

~~~{tip}
The \`transform\` function can also be async. These async transforms will be cached, so that the editor doesn't make too many calls.
~~~

Examples of transforms included in the demo:

Issue in this repo: #1
PR in this repo: !2
Issue in another repo: github/docs#30828
PR in another repo: github/docs!100
Person/org handle: @antmicro

## Collaboration

Collaborative features are not available in this demo, you will need to run the collaborative server to use them.
These features include:
- real-time editing with other people
- seeing remote cursors
- comments - add some text that does not show up in the preview
  - resolved comments - a new view to see comments that were resolved
  - suggestions - non-destructively suggest changes to the document`;
console.log("Welcome to the MyST editor demo. The right hand side should auto update.");
const n = ["#30bced", "#60c771", "#e6aa3a", "#cbb63e", "#ee6352", "#9ac2c9", "#8acb88", "#14b2c4"], a = new URLSearchParams(window.location.search), u = a.get("room") || "0", m = a.get("username") || Math.floor(Math.random() * 1e3).toString(), p = n[Math.floor(Math.random() * n.length)];
let g = [{
  target: "say",
  transform: async (e) => m + " says: '" + e + "'"
}], w = [{
  target: "bold",
  transform: (e, t) => `<b style="white-space: pre-wrap;">${t.body}</b>`
}], f = [{
  target: /[0-9a-z\-]+\/[0-9a-z\-]+#\d{1,10}/g,
  transform: (e) => {
    const [t, s] = e.split("#");
    return `<a href="https://github.com/${t}/issues/${s}">${e}</a>`;
  }
}, {
  target: /[0-9a-z\-]+\/[0-9a-z\-]+\!\d+/g,
  transform: (e) => {
    const [t, s] = e.split("!");
    return `<a href="https://github.com/${t}/pull/${s}">${e}</a>`;
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
const i = {}.VITE_COLLAB != "OFF" && a.get("collab") != "false";
var r;
const o = (r = {}.VITE_WS_URL) != null ? r : a.get("collab_server");
d({
  id: "demo",
  templatelist: "linkedtemplatelist.json",
  initialText: c,
  title: "[MyST Editor](https://github.com/antmicro/myst-editor/) demo",
  transforms: f,
  collaboration: {
    enabled: i,
    commentsEnabled: i,
    resolvingCommentsEnabled: i,
    wsUrl: o != null ? o : "#",
    username: m,
    room: u,
    color: p,
    mode: o ? "websocket" : "local"
  },
  customRoles: g,
  customDirectives: w,
  includeButtons: h.concat([{
    text: "Custom button",
    action: () => alert("Custom button action")
  }]),
  spellcheckOpts: {
    dict: "en_US",
    dictionaryPath: `${window.location.pathname}dictionaries`
  },
  syncScroll: !0,
  additionalStyles: l,
  cmDarkTheme: !0,
  mermaidTheme: "dark"
}, document.getElementById("myst"));
//# sourceMappingURL=index.js.map
