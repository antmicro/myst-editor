import styled from 'styled-components/macro';

const DefaultButton = styled.button`
  cursor: pointer;
  color: #fff;
  font-family: "Lato", sans-serif;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  border: 1px solid var(--gray-800);
  background-color: var(--gray-800);
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  transition: 0.4s ease;
  border-radius: var(--border-radius);

  &:not(:disabled):hover {
    background-color: var(--green-400);
    border: 1px solid var(--green-400);
  }
`;

export const TopbarButton = styled(DefaultButton)`
  padding: 0px 15px;
  margin: 5px;
`;

export default DefaultButton;