# Suggestions

:::{figure-md} suggest-change
![Suggest Change](./assets/suggestion.png)

Change suggestion
:::

You can make use of the [CriticMarkup](https://fletcher.github.io/MultiMarkdown-6/syntax/critic.html) syntax to add suggestions in a document.
From the editor, you can accept or reject suggestions using the buttons visible after each one.

```{tip}
To make adding suggestions easier you can use the `Toggle suggest mode` button in the left of the topbar.
When active, it will turn all your changes into suggestions.
You can type anywhere to add text, select and delete text to make a deletion suggestion or select text and start typing to suggest a replacement.
```

## Supported syntax

- Additions
    ```md
    This is some text{++ and this is a suggestion++}.
    ```
- Deletions
    ```md
    This is some text{-- text--}.
    ```
- Substitutions
    ```md
    This {~~was~>is~~} some text.
    ```