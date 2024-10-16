# MyST Editor

Copyright (c) 2022-2024 [Antmicro](https://antmicro.com)

This is a [MyST](https://myst-parser.readthedocs.io/en/v0.16.0/) editor in a [Preact](https://preactjs.com/) component, using [htm](https://github.com/developit/htm) as the templating language.

## Features

### Live preview

Changes in the text editor are immediately reflected in the preview.

![Live Preview Demo](./assets/LivePreview.gif)

### Templates

You can use document templates to quickly start documents and skip repetitive work.

![Template Demo](./assets/TemplateDemo.gif)

### Changing the Layout

The editor can display the text area and preview area separately, or in a split view.

![Layout Demo](./assets/ViewChangeDemo.gif)

### Live Collaboration

You can work on a document with multiple people at the same time.

![Collaboration Demo](./assets/CollaborationDemo.gif)

### Exporting to PDF

You can export the rendered markdown to a PDF file.

![PDF Demo](./assets/PDFDemo.png)

### Diff

You can use the diff view to see exactly what changes have been made to the document as compared to the original state.

![Diff Demo](./assets/DiffDemo.png)

### Copy rendered contents

Copy and paste the document into other tools, such as email clients.

![Copy Demo](./assets/CopyDemo.png)

### Custom transforms

You can create custom transforms that turn specific regexes to custom output HTML.
This is useful for implementing functionalities such as issue links, for example (as showcased in the demo):

```js
const transforms = [{
  target: /[0-9a-z\-]+\/[0-9a-z\-]+#\d{1,10}/g,
  transform: (match) => {
    const [repo, issueId] = match.split('#');
    return `<a href="https://github.com/${repo}/issues/${issueId}">${match}</a>`
  }
}]
```

Then provide the transforms array as the `transforms` prop to MyST editor.

For more examples see the exampleTransforms object in [the demo HTML](src/index.html).

## Usage

### Building the component

```bash
npm i && npm run build
```

### Using as a library

You can embed this editor on another website.

After building, you should see a `dist` folder with `MystEditor.css` and `MystEditor.js` in it.
Put those files alongside your HTML.

Add a link to the css file into yout HTML:

```html
<link rel="stylesheet" href="MystEditor.css">
```

Add the following html where you want the editor to be:

```html
<div id="myst"></div>
```

Add the following javascript as a module (of course add any props as needed):

```js
import MystEditor, { html, render } from 'MystEditor.js'
render(html`<${MystEditor} />`, document.getElementById("myst"))
```

And voila!

### Developing / running the demo

There is a demo available for the editor with some example markdown and templates, also useful for development of the component itself.

To run it locally, use:

```bash
npm run dev
```

Your terminal will display what URL to open to see the demo.
You can edit the source files in `src/` to modify the behavior of the component, with hot reload thanks to Vite.

An analogous demo deployed with GH actions from latest main should be deployed at https://antmicro.github.io/myst-editor/

### Collaboration Server

The example server is located in the `bin` directory. To run it use:

```bash
cd bin
npm i && npm run server
```

You can change the port it runs on with setting a `PORT` environment variable.

### MystEditor Props

Here are the props you can pass to the MystEditor component:

- `name` *(default: "myst_editor_textarea")* - this will change the name of the textarea element which contains your markdown. Useful if you want the editor to be part of an html `form`.
- `id` *(default: "myst_editor_textarea")* - changes the id of the textarea
- `initialMode` *(default: "Both", possibleValues: "Source" | "Preview" | "Both")* - changes what is visible when you open the editor. By default you will see a split view with the text editor and preview.
- `initialText` *(default: "")* - initial markdown text
- `includeButtons` *(default: defaultButtons)* - An array of button definitions. A button definition is an object which has an `action: () => void` and either `icon` or `text`. As an example, a button could be defined as `{ text: "Button title", action: () => alert('clicked!') }`
- `topbar` *(default: true)* - whether to show the topbar
- `templateList` - path/url to a JSON file containing your document templates. For an example see `public/linkedtemplatelist.json`.
- `transforms` - [custom transforms](#custom-transforms)
- `getAvatar` *(default: (login) => `https://secure.gravatar.com/avatar/${login}?s=30&d=identicon`)* - a function that returns the avatar for a given username
- `getUserUrl` *(default: (login) => `#`)* - a function that returns a url to a web page with a users profile
  It is used when an avatar is clicked.
- `collaboration` - options related to live collaboration:
  - `enabled` *(default: false)*
  - `wsUrl` *(example: ws://example:4444)* - url of the websocket server
  - `commentsEnabled` - enable basic comment functionality,
  - `resolvingCommentsEnabled` - enable resolving comments,
  - `username`
  - `room` - name of the room to join, users will see others in the same room
  - `color` - color of the cursor seen by other users
  - `hideUsernameDelay` *(default: 5000)* - milliseconds of inactivity after which the username attached to a remote cursor will be hidden
- `spellcheckOpts` - Configuration for the spellchecker. If the value is *null* or *false* then the spellchecker will be disabled.
  - `dict` *(default: "en_US")* - Name of the desired dictionary. For an example see `public/dictionaries/en_US`.
  - `dictionaryPath` *(default: "/dictionaries")*  - Path to a folder with dictionaries. For an example see `public/dictionaries/`.
- `backslashLineBreak` *(default: true)* - treat `\` as a line break even when it is at the end of a paragraph/block
- `additionalStyles` *(`CSSStylesheet` | `CSSStylesheet[]`)* - extra CSS stylesheets to customize the component
- `syncScroll` *(default: false)* - synchronize scrolling of the editor and preview in `Dual Pane` view mode.
  - > NOTE: This only works if you set a height limit on the MyST parent element.
- `unfoldedHeadings` *(`number?`)* - fold all but the given number of top level syntax nodes on startup.
  If the option is not set, nothing will be folded by default.

## License

[Apache 2.0](./LICENSE)
