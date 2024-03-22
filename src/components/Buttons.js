import styled from 'styled-components';

const DefaultButton = styled.button`
  &:focus {
    outline: 0 !important;
  }

  cursor: pointer;
  color: var(--icon-color);
  font-family: "Lato", sans-serif;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  border: 1px solid var(--icon-border);
  background-color: var(--icon-bg);
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  transition: 0.4s ease;
  border-radius: var(--border-radius);`;

export const TopbarButton = styled(DefaultButton)`
  padding: 0px 15px;
  margin: 5px;`;

export default DefaultButton;