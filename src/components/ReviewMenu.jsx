import { useRef, useState } from "preact/hooks";
import { useOutsideClick } from "../hooks/useOutsideClick";

export const ReviewMenu = ({
  as: Wrapper = "span",
  className,
  buttonClassName,
  menuClassName,
  triggerIcon,
  actions,
  preserveSelection = false,
  stopPropagation = false,
}) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  useOutsideClick(menuRef, () => setOpen(false), open);

  const handleClick = (event, action) => {
    if (stopPropagation) event.stopPropagation();
    setOpen(false);
    action?.();
  };

  return (
    <Wrapper className={className} ref={menuRef}>
      <button
        type="button"
        className={buttonClassName}
        title="More options"
        aria-label="More options"
        aria-haspopup="menu"
        aria-expanded={open}
        onMouseDown={preserveSelection ? (event) => event.preventDefault() : undefined}
        onClick={(event) => {
          if (stopPropagation) event.stopPropagation();
          setOpen((current) => !current);
        }}
      >
        {triggerIcon}
      </button>
      {open && (
        <span className={menuClassName} role="menu">
          {actions.map(({ label, icon, className: actionClassName, onClick, disabled, title }) => (
            <button
              key={label}
              type="button"
              role="menuitem"
              className={actionClassName}
              disabled={disabled}
              title={title}
              onClick={(event) => handleClick(event, onClick)}
            >
              {icon}
              {label}
            </button>
          ))}
        </span>
      )}
    </Wrapper>
  );
};
