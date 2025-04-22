import { useEffect } from "preact/hooks";
import styled from "styled-components";
import { DefaultButton } from "./CommonUI";
import { useComputed } from "@preact/signals";

const GroupContainer = styled.div`
  display: flex;

  & > button:first-child {
    border-left: 1px solid var(--icon-border) !important;
    border-radius: var(--border-radius) 0 0 var(--border-radius);
  }

  .btn-dropdown {
    right: 20px;
  }

  .dropdown-btns {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
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

  &:hover ~ .btn-dropdown {
    display: block;
  }

  &.more {
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
  }
`;

const DropdownButton = styled(DefaultButton)`
  gap: 8px;
  width: 100%;
  padding: 0 16px;
  justify-content: start;
  background-color: ${(props) => (props.active ? "var(--icon-main-active) !important" : "var(--icon-bg)")};
`;

const MoreIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000">
    <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" />
  </svg>
);

const ButtonGroup = ({ buttons, clickedId, mainButtonsNum = buttons.value.length }) => {
  useEffect(() => {
    buttons.value[clickedId].action();
  }, []);

  const mainButtons = useComputed(() => buttons.value.slice(0, mainButtonsNum));
  const dropdownButtons = useComputed(() => buttons.value.slice(mainButtonsNum));

  return (
    <GroupContainer>
      {mainButtons.value.map((button, i) => (
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
      <div>
        <RadioButton className="icon radio-icon more" active={clickedId >= mainButtonsNum}>
          <MoreIcon />
        </RadioButton>
        <div className="btn-dropdown">
          <div className="dropdown-content">
            <div className="dropdown-btns">
              {dropdownButtons.value.map((button, i) => (
                <DropdownButton
                  type="button"
                  disabled={button.disabled}
                  key={button.id}
                  name={button.id}
                  onClick={() => button.action()}
                  onMouseOver={() => button.hover?.()}
                  title={button.tooltip}
                  active={i + mainButtonsNum === clickedId}
                >
                  {typeof button.icon == "function" ? <button.icon /> : <img src={button.icon} />}
                  <span>{button.text}</span>
                </DropdownButton>
              ))}
            </div>
          </div>
        </div>
      </div>
    </GroupContainer>
  );
};

export default ButtonGroup;
