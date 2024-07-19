# Topbar

The editor topbar contains some useful information and buttons. Starting from the left:

## Left side buttons:

- `Fullscreen` - toggle fullscreen mode (the editor will take up the entire page)
- `Copy as HTML` - copies the rendered document as HTML, you might find this useful if you want to paste the document somewhere, for example in an email
- `Refresh Rich Links` - rerenders all the rich links in the document, for more information refer to {doc}`rich-links`
- `Print to PDF` - save the rendered document as a PDF file or print it straight away
- `Templates` - some projects might have templates available, which make starting new documents easier. When you click on a template it will ask for confirmation to apply it.
  ```{warning}
  Applying a template while there is already text in the document will replace all the text with the template. You can undo this action, however if there where any comments in the document, they will be removed.
  ```

## Document name

Shows the name of the document, for example the name of an issue or documentation page.

## User avatars

Users who are currently editing the document will be shown (including you). When there are too many users, only a couple are shown and there is an indicator saying how many more are editing.

```{tip}
Hovering over an avatar or the more users indicator reveals usernames.
```

## Custom buttons

Depending on the configuration of the editor, additional buttons may be shown.

## View mode buttons

MyST editor has several view modes:

- `Source` - only show the Markdown source code
- `Preview` - only show the rendered document
- `Dual Pane` **(default)** - show Markdown on the left and a preview on the right
- `Diff View` - show changes made to the document
- `Resolved Comments` - show resolved comments, for more information check {doc}`comments`
