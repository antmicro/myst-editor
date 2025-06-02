import styled, { css } from "styled-components";

export const MdStyles = css`
  p {
    margin-top: 0px;
    line-height: 1.3em;
    display: block;

    a {
      display: inline;
    }
  }

  a {
    color: var(--accent-dark);
    word-break: break-word;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
    line-height: 1.5;
    margin: 1em 0;
  }
  h1 {
    font-size: 1.8em;
  }
  h2 {
    font-size: 1.5em;
  }
  h3 {
    font-size: 1.25em;
  }
  h4 {
    font-size: 1.15em;
  }
  h5 {
    font-size: 1.1em;
  }
  h6 {
    font-size: 1em;
  }

  hr {
    height: 1px;
    margin: 16px 0;
    background-color: var(--gray-500);
    border: 0 none;
  }

  code,
  pre {
    border-radius: var(--border-radius);
    background-color: var(--editor-bg);
  }
  code {
    padding: 0.1em 0.4em;
    font-family: "Source Code Pro";
    font-size: 0.9em;
    border: none;
  }
  pre {
    white-space: pre-wrap;
    padding: 16px;
    & > code {
      padding: 0px;
    }
  }
  details > summary {
    display: list-item;
    cursor: pointer;
  }
  aside {
    border-radius: var(--border-radius);

    &.admonition {
      border: var(--border-2) solid var(--green-500);
      margin-bottom: 16px;

      .admonition {
        margin: 0 22px 14px 22px;
      }

      & > header,
      p {
        padding: 10px;
      }
      & > p {
        margin-bottom: 0;
      }
      & > header {
        color: white;
        font-weight: bold;
        background: var(--green-500);
        display: flex;

        &::before {
          padding-right: 5px;
          display: flex;
          align-items: center;
        }
      }
    }

    &[class="admonition"] {
      .admonition {
        margin-top: 14px;
      }
    }

    &.note {
      border-color: var(--accent);

      & > header {
        background-color: var(--accent);

        &::before {
          content: url("data:image/svg+xml,%3Csvg style='color: white' xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-pencil' viewBox='0 0 16 16'%3E%3Cpath d='M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z' fill='white'%3E%3C/path%3E%3C/svg%3E");
        }
      }
    }

    &.warning {
      border: 3px solid var(--orange-500);

      & > header {
        background-color: var(--orange-500);

        &::before {
          content: url("data:image/svg+xml,%3Csvg style='color: white' xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-exclamation-triangle' viewBox='0 0 16 16'%3E%3Cpath d='M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z' fill='white'%3E%3C/path%3E%3Cpath d='M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z' fill='white'%3E%3C/path%3E%3C/svg%3E%0A");
        }
      }
    }

    &.tip,
    &.hint {
      & > header::before {
        content: url("data:image/svg+xml,%3Csvg style='color: white' width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7 0V2H8V0H7Z' fill='white'%3E%3C/path%3E%3Cpath d='M3.35355 3.64645L1.85355 2.14645L1.14645 2.85355L2.64645 4.35355L3.35355 3.64645Z' fill='white'%3E%3C/path%3E%3Cpath d='M12.3536 4.35355L13.8536 2.85355L13.1464 2.14645L11.6464 3.64645L12.3536 4.35355Z' fill='white'%3E%3C/path%3E%3Cpath d='M7.49998 3C5.52977 3 3.85938 4.44872 3.58075 6.39913L3.5707 6.46949C3.41148 7.58398 3.73042 8.64543 4.36009 9.45895C4.74345 9.95426 5 10.427 5 10.9013V12.5C5 12.7761 5.22386 13 5.5 13H9.5C9.77614 13 10 12.7761 10 12.5V10.9013C10 10.427 10.2565 9.95423 10.6399 9.45893C11.2696 8.64541 11.5885 7.58397 11.4293 6.4695L11.4192 6.39914C11.1406 4.44873 9.4702 3 7.49998 3Z' fill='white'%3E%3C/path%3E%3Cpath d='M0 8H2V7H0V8Z' fill='white'%3E%3C/path%3E%3Cpath d='M13 8H15V7H13V8Z' fill='white'%3E%3C/path%3E%3Cpath d='M6 15H9V14H6V15Z' fill='white'%3E%3C/path%3E%3C/svg%3E");
      }
    }

    &.important > header::before {
      content: url("data:image/svg+xml,%3Csvg style='color: white' xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24'%3E%3Cpath d='M18 16v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-5 0h-2v-2h2v2zm0-4h-2V8h2v4zm-1 10c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2z' fill='white'%3E%3C/path%3E%3C/svg%3E");
    }

    &.directive-unhandled,
    &.directive-error {
      margin-bottom: 1em;

      & > header {
        padding: 10px;
        color: white;

        mark {
          background: transparent;
          font-weight: bold;
          color: inherit;
        }

        code {
          background: transparent;
          font-family: "Lato", sans-serif;
          font-weight: bold;
          padding: 0;
          margin-left: 0.3em;
        }
      }

      pre {
        background-color: var(--panel-bg);
        margin: 0;
        font-family: "Lato", sans-serif;
      }
    }

    &.directive-unhandled {
      border: 3px solid var(--gray-700);
      & > header {
        background-color: var(--gray-700);
      }
    }

    &.directive-error {
      border: 3px solid var(--error-bg);
      & > header {
        background-color: var(--error-bg);
      }
    }
  }

  sup,
  sub,
  numref {
    line-height: 0;
  }

  abbr {
    letter-spacing: 0.1em;
    font-weight: bold;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  li {
    margin-bottom: 0.5em;
    line-height: 1.3em;
    p {
      padding: 0px;
    }
  }
  ul,
  ol {
    list-style: revert;
    padding-left: 40px;
    padding-top: 0.5em;
  }
  /* Add some padding to the outermost ul */
  &[class^="Preview"] > ul {
    padding-top: 0.5em;
    padding-bottom: 0.5em;
  }

  blockquote {
    border-left: 5px solid var(--green-500);
    margin-left: 0;
    margin-top: 0;
    padding-left: 12px;
  }

  table {
    border-spacing: 0;
    margin: 20px 0 20px 0;
  }
  th,
  td {
    padding: 20px;
    text-align: left;
    border-right: 1px solid var(--gray-500);
    border-bottom: 1px solid var(--gray-500);
  }
  th {
    background: var(--gray-900);
    border-top: 1px solid var(--gray-500);
    color: white;

    &:first-of-type {
      border-top-left-radius: var(--border-radius);
      border-left: 1px solid var(--gray-500);
    }

    &:last-of-type {
      border-top-right-radius: var(--border-radius);
    }
  }
  td {
    &:first-of-type {
      border-left: 1px solid var(--gray-500);
    }

    p:last-of-type {
      margin-bottom: 0;
    }
  }
  table:not(:has(thead)) > tbody > tr:first-of-type > td {
    border-top: 1px solid var(--gray-500);

    &:first-of-type {
      border-top-left-radius: var(--border-radius);
    }

    &:last-of-type {
      border-top-right-radius: var(--border-radius);
    }
  }
  tr {
    &:nth-child(2n + 2) {
      background: var(--gray-100);
    }

    &:last-of-type {
      td {
        &:first-of-type {
          border-bottom-left-radius: var(--border-radius);
        }

        &:last-of-type {
          border-bottom-right-radius: var(--border-radius);
        }
      }
    }
  }

  .cm-previewFocus {
    display: ${(props) => (props.mode === "Both" ? "block" : "none")};
  }

  .mermaid {
    background-color: transparent;
    padding: 0;
    display: flex;
    justify-content: center;
  }

  input[type="checkbox"] {
    margin: 0;
    margin-right: 8px;
    transform: translateY(2px);
  }

  figcaption {
    text-align: center;
    margin-top: 12px;
  }

  .hljs-attr {
    color: var(--accent-dark);
  }

  .hljs-comment {
    color: var(--string-fg);
  }
`;

const Preview = styled.div`
  background-color: var(--panel-bg);
  padding: 20px;
  box-sizing: border-box;
  height: 100%;
  border: 1px solid var(--border);
  box-shadow: inset 0px 0px 4px var(--box-shadow);
  border-radius: var(--border-radius);
  vertical-align: top;
  word-wrap: break-word;
  position: relative;
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: thin;

  ${MdStyles}

  @media print {
    & {
      display: block !important;
      border: 0px !important;
      box-shadow: none !important;
      border-radius: 0px !important;
      word-break: unset !important;
    }

    p {
      break-inside: avoid !important;
      text-align: justify !important;
      text-justify: inter-word !important;
    }

    a::after {
      content: "(" attr(href) ")" !important;
    }
  }
`;

export const PreviewFocusHighlight = styled.div`
  position: absolute;
  width: 5px;
  background-color: var(--accent);
`;

export default Preview;
