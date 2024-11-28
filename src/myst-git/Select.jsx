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
`;

const Toggle = styled.button`
  width: 100%;
  text-align: left;
  justify-content: space-between;
  padding: 0 15px;
  cursor: pointer;
  color: var(--icon-color);
  font-size: 12px;
  font-weight: bold;
  border: 1px solid var(--icon-border);
  background-color: var(--icon-bg);
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
    background-color: var(--icon-selected);
    border: 1px solid var(--icon-selected);
  }
`;

const ArrowIcon = ({ up }) => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" style={up ? "rotate: 180deg;" : ""}>
    <path d="M1 1L4 7L7 1" stroke="rgb(108, 108, 108)" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

const Dropdown = styled.div`
  position: absolute;
  z-index: 100;
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: var(--border-radius);

  input {
    width: 100%;
    height: 40px;
    padding: 0 15px;
    border-radius: var(--border-radius);
    border: 1px solid var(--icon-border);
  }
`;

const OptionList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  margin: 0;
  margin-top: 0.5rem;
  max-height: 10rem;
  overflow-y: auto;
  scrollbar-width: thin;
  overscroll-behavior: contain;
  padding-right: 5px;

  li {
    width: 100%;
    cursor: pointer;
    border-radius: var(--border-radius);
    height: 2rem;
    padding: 0 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;

    &:hover {
      background-color: var(--icon-selected);
    }

    &.active {
      color: var(--blue-500);
      font-weight: bold;
    }

    span {
      color: var(--gray-800);
    }
  }
`;

/**
 * Component providing UI to select one option from a list. Also has a searchbox.
 * Options can be lazily loaded.
 */
const Select = ({ options, initialValue, onChange, inputPlaceholder, loadMore, searchOptions }) => {
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
      <Toggle onClick={toggleDropdown}>
        <span>{selectedOption.value?.label}</span>
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
          <OptionList onScroll={listScroll} ref={optionList}>
            {shownOptions.value.map((o) => (
              <li key={o.value} onClick={() => selectOption(o)} className={o.value == selectedValue.value ? "active" : ""}>
                {o.label}
              </li>
            ))}
          </OptionList>
        </Dropdown>
      )}
    </Container>
  );
};

export default Select;
