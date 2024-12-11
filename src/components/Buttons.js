import styled from "styled-components";

const DefaultButton = styled.button`
  &:focus {
    outline: 0 !important;
  }

  &:disabled {
    cursor: default;
  }

  cursor: pointer;
  color: var(--icon-color);
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  font-family: inherit;
  border: 1px solid var(--icon-border);
  background-color: var(--icon-bg);
  height: 40px;
  display: flex;
  justify-content: center;
  margin-top: 0px;
  align-items: center;
  padding: 0;
  transition: 0.4s ease;
  border-radius: var(--border-radius);
  font-family: "Lato";

  &:not(:has(svg)) {
    padding: 0px 15px;
    margin: 5px;
  }
`;

export default DefaultButton;
