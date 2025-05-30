# Comments

To leave feedback for other users collaborating on a document without changing the document text itself, you can leave comments.

## Adding a Comment

:::{figure-md} add-comment
![Add Comment](./assets/comment-add.png)

Add comment
:::

To add a comment, hover your cursor over the editor gutter (to the left of line numbers) on the line you want to comment on.
This should make the comment icon appear.
Click on the icon to create a comment.

## Toggling Comments

Clicking on the comment icon can be used to hide/show a comment.
By default, when you load a document, all preexisting comments will be expanded.
All new comments will be expanded as well.

## Collaborating on a Comment

:::{figure-md} multiple-authors
![Multiple comment authors](./assets/comment.png)

Multiple comment authors
:::

Comments can span multiple lines, and multiple users can participate in writing a single comment.
MyST Editor enables comment discussions through a concept of line authorship.
Every line of a comment is highlighted in the color of the line's author.
When you hover over a line, you can also see its author's avatar to the left of the comment.
If you want to participate in a discussion, it is recommended to add a new line (for example, at the end of a comment you want to reply to).

## Moving Comments

As new lines are added above a line with a comment, the comment will move with its original line. 
Pressing `enter` at the beginning of a commented line will also move it downwards.

```{warning}
Pressing backspace at the beginning of a commented line will delete the comment.
```

You can also move comments via drag and drop. To move a comment to another line, drag its icon to the left of the desired line's number.

```{tip}
Moving a comment onto another comment will append its contents.
```

## Deleting Comments

```{warning}
Deleting a comment will delete input from all users, not just your text.
```

In order to delete a comment, you can:

- Press backspace at the beginning of a commented line
- Delete/cut a selection containing the commented line
- Hover over the comment icon and press the delete button
- Press the delete button in the resolved comments view (details in the [](#resolving-comments) section).

## Resolving Comments

MyST Editor offers a comment resolution functionality.

To resolve a comment, hover over its icon and click the resolve button.
This will move it to the `Resolved Comments` view in the [topbar](topbar.md) where it will be accessible.
Click the `Resolved Comments` button to see it.
Such comments are annotated with the following information:

- Comment author
- User who resolved the comment
- Comment resolution time
- Origin text line

You can access more options by hovering over the `...` button in the top right of a comment.

:::{figure-md} resolved-comment
![Resolved Comment](./assets/resolved-comment.png)

Resolved comment
:::

### Restoring Comments

After a comment is resolved, it will keep track of the line it was attached to.
Should the text in the line or its line number change, it will be reflected in this view.
You can bring back a comment to the editor by clicking the restore button in the `...` menu.

In case there is another comment in a resolved comment's line, the restore button will read `RESTORE AND MERGE`, indicating that the original line is occupied.
When you press this button, the resolved comment will be added to the bottom of the newer comment.

:::{figure-md} merge-comments
![Merge Comments](./assets/comment-occupied.png)

Merging comments
:::

#### Orphaned Comments

:::{figure-md}
![Orphaned Comment](./assets/comment-orphaned.png)

Orphaned comment
:::

If a resolved comment does not have a line number next to it or the text of the commented line is crossed out, the line the comment was assigned to has been deleted.
Such a comment is considered `orphaned`.
If you try to restore such a comment, it will be added to the last line of the document.
From there you can move it wherever you want.

```{warning}
Applying a document template to a document with resolved comments, will make all of them `orphaned`.
```