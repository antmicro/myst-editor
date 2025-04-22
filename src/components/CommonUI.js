import styled from "styled-components";

export const DefaultButton = styled.button`
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
  align-items: center;
  padding: 0;
  transition: 0.4s ease;
  border-radius: var(--border-radius);
  font-family: "Lato";

  &:not(:has(svg)) {
    padding: 0px 15px;
  }
`;

export const Modal = styled.dialog`
  width: 450px;
  padding: 20px;
  background-color: var(--icon-bg);
  border: 1px solid var(--icon-border);
  border-radius: var(--border-radius);
  margin: 0;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);

  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  }
`;
