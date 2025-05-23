import styled from "styled-components";

export const MystCSSVars = styled.div`
  --border-radius: 5px;
  --black: #000;
  --gray-900: #333;
  --gray-800: #5c5c5c;
  --gray-700: #88818c;
  --gray-600: #cccccc;
  --gray-500: #dadada;
  --gray-400: #e5e5e5;
  --gray-300: #e8e6e8;
  --gray-200: #f8f8f8;
  --gray-100: #f9f9f9;
  --white: #fff;
  --blue-500: #0083e1;
  --blue-200: #82cfe6;
  --blue-100: #c1e4ef;
  --red-500: #e74a3c;
  --orange-500: #f59e0b;
  --green-500: #00af91;
  --green-400: #00ccaa;
  --brown-500: #940;
  --border-2: 3px;
  --dark-violet: #332d37;

  --navbar-bg: var(--gray-200);
  --icon-border: var(--gray-600);
  --icon-bg: var(--white);
  --icon-main-selected: var(--blue-100);
  --icon-main-active: var(--blue-200);
  --icon-selected: var(--gray-400);
  --icon-color: var(--dark-violet);
  --separator: var(--gray-500);
  --alert: var(--blue-100);
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
    color: var(--blue-500);

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
