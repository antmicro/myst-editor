import styled from "styled-components";

export const MystCSSVars = styled.div`
  --gray-900: #333;
  --gray-800: #5c5c5c;
  --gray-700: #88818c;
  --gray-600: #cccccc;
  --gray-500: #dadada;
  --gray-400: #e5e5e5;
  --gray-300: #e8e6e8;
  --gray-200: #f8f8f8;
  --gray-100: #f9f9f9;
  --blue-500: #0083e1;
  --blue-200: #82cfe6;
  --blue-100: #c1e4ef;
  --red-500: #e74a3c;
  --red-400: #fae6e6;
  --orange-500: #f59e0b;
  --green-500: #00af91;
  --green-400: #00ccaa;
  --green-300: #ecfce6;
  --brown-500: #940;

  --accent: var(--blue-200);
  --accent-light: var(--blue-100);
  --accent-dark: var(--blue-500);

  --border-2: 3px;
  --border-radius: 5px;
  --border: var(--gray-600);

  --navbar-bg: var(--gray-200);
  --button-bg: white;
  --button-bg-hover: var(--gray-400);
  --modal-bg: white;
  --switch-bg: var(--gray-500);
  --switch-active-bg: var(--blue-500);
  --panel-bg: white;
  --box-shadow: var(--gray-600);
  --icon-invert: 0;
  --string-fg: var(--brown-500);
  --deleted-bg: var(--red-400);
  --inserted-bg: var(--green-300);

  --editor-bg: var(--gray-200);
  --editor-gutter-fg: var(--gray-800);
  --editor-selection-bg: rgb(215, 212, 240);
  --editor-active-line-bg: #cceeff44;
  --error-bg: var(--red-500);
`;

export const MystContainer = styled(MystCSSVars)`
  all: initial;
  font-family: "Lato", sans-serif;
  height: 100%;

  @media print {
    @page {
      margin: 1.5cm !important;
    }
  }

  .todo {
    background-color: yellow;
  }

  .file-link {
    color: var(--accent-dark);

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  button,
  input,
  dialog,
  textarea {
    color: inherit;
  }

  ins {
    background: var(--inserted-bg);
  }

  del {
    background: var(--deleted-bg);
  }
`;

export const darkTheme = new CSSStyleSheet();
darkTheme.replaceSync(`
  #myst-css-namespace {
    color: white;
    --navbar-bg: #1a1a1a;
    --border: #878787;
    --button-bg: #333;
    --button-bg-hover: #5c5c5c;
    --switch-bg: #5c5c5c;
    --modal-bg: #1a1a1a;
    --panel-bg: #1a1a1a;
    --box-shadow: #333;
    --icon-invert: 1;
    --string-fg: #ffa657;

    --accent: #0083e1;
    --accent-light: #82cfe6;
    --accent-dark: rgb(121, 192, 255);

    --editor-bg: #2a2a2a;
    --editor-gutter-fg: #ddd;
    --editor-selection-bg: #d7d4f020;
    --editor-active-line-bg: #cceeff10;
    --error-bg: #f5766e;
    --deleted-bg: #e74a3cb2;
    --inserted-bg: #00af91b2;
    
    color-scheme: dark;
  }
`);
