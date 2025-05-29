import styled from "styled-components";
import { useComputed, useSignal, useSignalEffect } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";

const Container = styled.div`
  max-width: 100%;
  width: 250px;
  position: relative;
  font-family: "Lato";

  * {
    box-sizing: border-box;
  }

  .marked::after {
    content: "";
    display: inline-block;
    margin-left: 8px;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: currentColor;
  }
`;

const Toggle = styled.button`
  width: 100%;
  text-align: left;
  justify-content: space-between;
  padding: 0 15px;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  border: 1px solid var(--border);
  background-color: var(--button-bg);
  height: 40px;
  display: flex;
  margin-top: 0px;
  align-items: center;
  transition: 0.4s ease;
  border-radius: var(--border-radius);
  font-family: "Lato";

  span {
    margin-right: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  svg {
    min-width: 8px;
  }

  &:hover {
    background-color: var(--button-bg-hover);
    border: 1px solid var(--button-bg-hover);
  }
`;

const ArrowIcon = ({ up }) => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" style={up ? "rotate: 180deg;" : ""}>
    <path d="M1 1L4 7L7 1" stroke="var(--border)" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

const Dropdown = styled.div`
  position: absolute;
  z-index: 100;
  background-color: var(--navbar-bg);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: var(--border-radius);
  border: 1px solid var(--border);

  input {
    width: 100%;
    height: 40px;
    padding: 0 15px;
    background-color: var(--button-bg);
    border-radius: var(--border-radius);
    border: 1px solid var(--border);
  }
`;

const OptionList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  margin: 0;
  margin-top: 12px;
  max-height: 240px;
  overflow-y: auto;
  scrollbar-width: thin;
  overscroll-behavior: contain;
  padding-right: 5px;

  li {
    width: 100%;
    cursor: pointer;
    border-radius: var(--border-radius);
    height: 48px;
    padding: 0 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;

    &:hover {
      background-color: var(--button-bg-hover);
    }

    &.active {
      color: var(--accent-dark);
      font-weight: bold;
    }
  }
`;

/**
 * Component providing UI to select one option from a list. Also has a searchbox.
 * Options can be lazily loaded.
 */
const Select = ({ options, initialValue, onChange, inputPlaceholder, loadMore, searchOptions, name }) => {
  const open = useSignal(false);
  const selectedValue = useSignal(initialValue);
  const selectedOption = useComputed(() => allOptions.value.find((o) => o.value == selectedValue.value));
  const search = useSignal("");
  const allOptions = useSignal(options);
  const shownOptions = useSignal(options);
  const nextPage = useSignal(2);
  const optionList = useRef();
  const loading = useRef(false);

  const toggleDropdown = () => {
    if (open.value == true) {
      open.value = false;
      search.value = "";
    } else {
      open.value = true;
    }
  };

  const selectOption = (option) => {
    selectedValue.value = option.value;
    const isNew = !allOptions.peek().find((o) => o.value == option.value);
    onChange(option, isNew);
    toggleDropdown();
  };

  const bottomThreshold = 5;
  const listScroll = () => {
    if (
      Math.abs(optionList.current.scrollTop + optionList.current.clientHeight - optionList.current.scrollHeight) < bottomThreshold &&
      !loading.current &&
      search.value.trim().length == 0
    ) {
      loading.current = true;
      loadMore?.(nextPage.peek())
        ?.then?.(() => {
          nextPage.value++;
          setTimeout(() => (loading.current = false), 500);
        })
        ?.catch?.((err) => {
          console.warn("Error while loading more options: ", err);
        });
    }
  };

  useSignalEffect(() => {
    search.value;
    allOptions.value;
    const timer = setTimeout(() => {
      if (search.value.trim() == "") {
        shownOptions.value = allOptions.value;
      } else {
        searchOptions(search.value).then((opts) => (shownOptions.value = opts));
      }
    }, 300);

    return () => clearTimeout(timer);
  });

  useEffect(() => (allOptions.value = options), [options]);
  useEffect(() => (selectedValue.value = initialValue), [initialValue]);

  return (
    <Container>
      <Toggle id={name} onClick={toggleDropdown}>
        <span className={selectedOption.value?.marked ? "marked" : ""}>{selectedOption.value?.label}</span>
        <ArrowIcon up={open.value} />
      </Toggle>
      {open.value && (
        <Dropdown>
          <input
            type="text"
            ref={(el) => el?.focus()}
            placeholder={inputPlaceholder}
            value={search.value}
            onChange={(ev) => (search.value = ev.target.value)}
          />
          <OptionList id={`${name}-list`} onScroll={listScroll} ref={optionList}>
            {shownOptions.value.map((o) => (
              <li key={o.value} onClick={() => selectOption(o)} className={`${o.value == selectedValue.value ? "active" : ""}`}>
                <span className={`${o.marked ? "marked" : ""}`}>{o.label}</span>
              </li>
            ))}
          </OptionList>
        </Dropdown>
      )}
    </Container>
  );
};

export default Select;
