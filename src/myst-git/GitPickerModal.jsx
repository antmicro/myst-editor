import styled from "styled-components";
import { useSignal, useSignalEffect } from "@preact/signals";
import { useRef } from "preact/hooks";
import { Modal } from "../components/CommonUI";

const PickerForm = styled(Modal)`
  && {
    width: 400px;
  }
  &::backdrop {
    pointer-events: none;
  }
  h2 {
    margin: 0 0 12px;
    font-size: 14px;
    font-weight: 600;
  }
  input {
    width: 100%;
    height: 40px;
    padding: 0 15px;
    box-sizing: border-box;
    background-color: var(--button-bg);
    border: 1px solid var(--border);
    border-radius: var(--border-radius);
    font-family: Lato, sans-serif;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 12px 0 0;
    max-height: 320px;
    overflow-y: auto;
    scrollbar-width: thin;
  }
  li {
    cursor: pointer;
    border-radius: var(--border-radius);
    min-height: 40px;
    padding: 8px 5px;
    display: flex;
    align-items: center;
    font-size: 12px;
    font-family: Lato, sans-serif;
    &:hover {
      background-color: var(--button-bg-hover);
    }
    &.active {
      color: var(--accent-dark);
      font-weight: bold;
    }
  }
  .marked::after {
    content: "";
    display: inline-block;
    margin-left: 8px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: currentColor;
  }
`;

const GitPickerModal = ({ id, title, open, options, selectedValue, onSelect, searchPlaceholder, searchOptions, loadMore }) => {
  const modalRef = useRef();
  const search = useSignal("");
  const shown = useSignal(options.value);
  // Page 1 is the initial list; paginate from 2.
  const page = useRef(2);
  const loading = useRef(false);

  useSignalEffect(() => {
    const dialog = modalRef.current;
    if (!open.value) {
      dialog?.close?.();
      return;
    }
    search.value = "";
    page.current = 2;
    dialog.onclose = () => (open.value = false);
    dialog.showModal?.();
    const dismiss = (ev) => dialog.open && !ev.composedPath().includes(dialog) && dialog.close();
    document.addEventListener("mousedown", dismiss);
    return () => document.removeEventListener("mousedown", dismiss);
  });

  useSignalEffect(() => {
    if (!open.value) return;
    const query = search.value.trim();
    if (query == "") {
      shown.value = options.value;
      return;
    }
    const timer = setTimeout(() => searchOptions(query).then((opts) => (shown.value = opts)), 300);
    return () => clearTimeout(timer);
  });

  function loadNextPage() {
    if (loading.current) return;
    loading.current = true;
    loadMore?.(page.current)
      ?.then?.(() => {
        page.current++;
        setTimeout(() => (loading.current = false), 500);
      })
      // Keep `loading` set on failure (e.g. no more pages) to stop retrying.
      ?.catch?.((err) => console.warn("Error while loading more options: ", err));
  }

  return (
    <PickerForm ref={modalRef} id={id}>
      <h2>{title}</h2>
      <input type="text" placeholder={searchPlaceholder} value={search.value} onInput={(ev) => (search.value = ev.target.value)} />
      <ul
        id={`${id}-list`}
        onScroll={(ev) => {
          const list = ev.currentTarget;
          const atBottom = Math.abs(list.scrollTop + list.clientHeight - list.scrollHeight) < 5;
          if (atBottom && !search.value.trim()) loadNextPage();
        }}
      >
        {shown.value.map((o) => (
          <li
            key={o.value}
            onClick={() => {
              onSelect(o, !options.peek().some((x) => x.value == o.value));
              open.value = false;
            }}
            className={o.value == selectedValue ? "active" : ""}
          >
            <span className={o.marked ? "marked" : ""}>{o.label}</span>
          </li>
        ))}
      </ul>
    </PickerForm>
  );
};

export default GitPickerModal;
