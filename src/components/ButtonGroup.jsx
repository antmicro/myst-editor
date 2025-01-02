import { useEffect } from "preact/hooks";
import styled from "styled-components";
import DefaultButton from "./Buttons.js";

const GroupContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;

const RadioButton = styled(DefaultButton)`
  color: ${(props) => (props.active ? "white" : "var(--icon-color)")};
  background-color: ${(props) => (props.active ? "var(--icon-main-active)" : "var(--navbar-bg)")};
  width: 40px;
  border: "1px solid var(--icon-border)";
  border-left: none;
  border-radius: 0;

  &:hover:not(&:disabled) {
    background-color: var(--icon-main-selected);
  }

  &:first-child {
    border-left: 1px solid var(--icon-border) !important;
    border-radius: var(--border-radius) 0 0 var(--border-radius);
  }

  &:last-child {
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
  }
`;

const ButtonGroup = ({ buttons, clickedId }) => {
  useEffect(() => {
    buttons[clickedId].action();
  }, []);

  return (
    <GroupContainer>
      {buttons.map((button, i) => (
        <RadioButton
          className="icon radio-icon"
          type="button"
          disabled={button.disabled}
          key={button.id}
          name={button.id}
          onClick={() => button.action()}
          onMouseOver={() => button.hover?.()}
          title={button.tooltip}
          active={i === clickedId}
        >
          {typeof button.icon == "function" ? <button.icon /> : <img src={button.icon} />}
        </RadioButton>
      ))}
    </GroupContainer>
  );
};

export default ButtonGroup;
