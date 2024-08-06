import { html } from "htm/preact";
import { css, styled } from "styled-components";

const TooltipBox = styled.div`
  position: absolute;
  ${(props) =>
    props.$orientation == "left" &&
    css`
      left: 0;
    `}
  transform: ${(props) => (props.$orientation == "left" ? "translateX(-105%)" : "translate(-65%, 130%)")};
`;

const TooltipContent = styled.div`
  position: relative;
  background: var(--alert);
  color: var(--icon-color);
  text-align: left;
  padding: 10px 20px 10px 20px;
  border-radius: var(--border-radius);
  border: solid var(--alert);
  border-width: 1px 1px 1px 1px;
  max-height: 40px;
  top: calc(100% + 11px);
  ${(props) =>
    props.$orientation == "bottom" &&
    css`
      left: 50%;
    `}
  transform: ${(props) => (props.$orientation == "left" ? "none" : "translateX(calc(50% - 14px))")};

  &::before {
    content: "";
    position: absolute;
    ${(props) =>
      props.$orientation == "left"
        ? css`
            right: 0;
            top: 50%;
            border-top: 15px solid transparent;
            border-bottom: 15px solid transparent;
            border-left: 30px solid var(--alert);
          `
        : css`
            left: 50%;
            border-left: 15px solid transparent;
            border-right: 15px solid transparent;
            border-bottom: 30px solid var(--alert);
          `}
    transform: ${(props) => (props.$orientation == "left" ? "translate(50%, -50%)" : "translate(-50%, -100%)")};
  }
`;

const Tooltip = ({ tooltipOrientation, errorMessage }) => {
  return html` <${TooltipBox} $orientation=${tooltipOrientation}>
    <${TooltipContent} $orientation=${tooltipOrientation}> ${errorMessage} <//>
  <//>`;
};

export default Tooltip;
