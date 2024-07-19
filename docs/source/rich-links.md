# Rich Links

MyST editor has some convenient syntax for adding links to certain things

## Issues

Using the number of an issue and optionally the repo name you can link to the issue. Without a git repository name it will assume the same repo MyST is deployed to.

```md
#<issue number>
eg. #11111

#<repo><issue number>
eg. github/docs#11111
```

## Pull Requests

You can link to a pull request by the PR number and optionally the git repository name:

```md
!<PR number>
eg. !213

!<repo><PR number>
eg. antmicro/myst-editor!2
```

## Mentions

You can mention another person which will render a link to their profile.

```md
@<username>
eg. @jkowalski
```

## Say phrase

Using a custom role on a inline code block you can put your username next to some text:

```md
{say}`<text>`
eg. {say}`something` -> will render as: <username> says: 'something'
```

## Refreshing Links

There are some scenarios where you might want to refresh these links. To do this press the `Refresh issue links` button in the left of the topbar.
