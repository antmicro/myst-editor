# Mermaid Diagrams

MyST allows users to include various diagrams in their documents using the [Mermaid](https://mermaid.js.org/) library.
For an explanation on how to create diagrams, refer to the `Diagram Syntax` section of the [Mermaid Documentation](https://mermaid.js.org/intro/).
Here is an example graph in MyST:

````md
```mermaid
  graph TD;
      A-->B;
      A-->C;
      B-->D;
      C-->D;
```
````

:::{figure-md} mermaid-graph
![Connection Error](./assets/mermaid.png)

Mermaid Graph
:::