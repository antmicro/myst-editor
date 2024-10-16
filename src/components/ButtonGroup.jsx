import { useEffect, useState } from "preact/hooks";
import styled from "styled-components";
import DefaultButton from "./Buttons.js";

const GroupContainer = styled.div`
  display: flex;
`;

const RadioButton = styled(DefaultButton)`
  color: ${(props) => (props.active ? "white" : "var(--icon-color)")};
  background-color: ${(props) => (props.active ? "var(--icon-main-active)" : "var(--navbar-bg)")};
  width: 40px;
  border: "1px solid var(--icon-border)";
  border-left: none;
  border-radius: 0;

  &:hover {
    background-color: var(--icon-main-selected);
  }

  &:first-child {
    border-left: 1px solid var(--icon-border) !important;
    border-radius: var(--border-radius) 0 0 var(--border-radius);
    margin-left: 10px;
  }

  &:last-child {
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
  }
`;

const ButtonGroup = ({ buttons, initialClickedId = 2 }) => {
  const [clickedId, setClickedId] = useState(initialClickedId);

  useEffect(() => {
    buttons[initialClickedId].action();
  }, [initialClickedId]);

  return (
    <GroupContainer>
      {buttons.map((button, i) => (
        <RadioButton
          className="icon radio-icon"
          type="button"
          key={button.id}
          name={button.id}
          onClick={() => {
            setClickedId(i);
            button.action();
          }}
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
