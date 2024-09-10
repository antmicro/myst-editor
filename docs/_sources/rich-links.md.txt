# Rich Links

MyST editor offers convenient links for integrating with parts of your chosen infrastructure.
Below we provide examples of the functionality integrated with GitHub's infrastructure.

You can test these functionalities in the [MyST Editor demo](https://antmicro.github.io/myst-editor/).

## Issues

You can link to an issue by using a issue number and optionally a repository name. 
Without a repository name, the editor will assume the same repo MyST is deployed to.

```md
#<issue number>
eg. #11111

<repo>#<issue number>
eg. github/docs#11111
```

## Pull Requests

You can link to a pull request by the PR number and optionally the git repository name:

```md
!<PR number>
eg. !213

<repo>!<PR number>
eg. antmicro/myst-editor!2
```

## Mentions

You can mention another user, which will render a link to their profile.

```md
@<username>
eg. @jdoe
```

## 'Say' phrase

You can put your username next to a string of text within an inline code block by using the `{say}` custom role:

```md
{say}`<text>`
eg. {say}`something` -> will render as: <username> says: 'something'
```

## Refreshing Links

To refresh all rich links within a document, click the `Refresh issue links` button in the [left section of the topbar](topbar.md#left-side-buttons).
