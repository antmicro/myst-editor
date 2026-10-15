/* global __MYST_EDITOR_SHA__ */
import { useContext, useEffect, useRef } from "preact/hooks";
import styled from "styled-components";
import { MystState } from "../mystState";
import { Compartment } from "@codemirror/state";
import { useSignal, useSignalEffect } from "@preact/signals";

const SettingsList = styled.div`
  width: 240px;

  h1 {
    font-size: 20px;
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-height: 400px;
    overflow-y: auto;
    scrollbar-width: thin;
    margin: 0;
    margin-top: 16px;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  p {
    margin: 0;
  }
`;

const ToggleContainer = styled.span`
  input {
    display: none;
  }

  label {
    display: block;
    width: 48px;
    height: 24px;
    border-radius: 12px;
    transition: 0.4s;
    cursor: pointer;
    position: relative;
    background-color: var(--switch-bg);

    &::before {
      content: "";
      position: absolute;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: white;
      left: 4px;
      top: 4px;
      transition: 0.4s;
    }
  }

  input:checked + label {
    background-color: var(--switch-active-bg);

    &::before {
      transform: translateX(24px);
    }
  }
`;

const BuildButton = styled.button`
  display: block;
  width: fit-content;
  margin: 12px 0 0 auto;
  padding: 2px 0;
  border: 0;
  background: transparent;
  color: inherit;
  opacity: 0.5;
  font: 11px/1.2 monospace;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }

  &:focus-visible {
    opacity: 1;
    outline: 1px solid var(--accent-dark);
    outline-offset: 3px;
  }
`;

const Toggle = ({ ...props }) => {
  return (
    <ToggleContainer>
      <input type="checkbox" {...props} />
      <label htmlFor={props.id} title="Toggle setting" />
    </ToggleContainer>
  );
};

export const userExtensionsCompartment = new Compartment();
const editorCommit = __MYST_EDITOR_SHA__;

const BuildInfo = () => {
  const copyLabel = useSignal(null);
  const copyResetTimeout = useRef();

  useEffect(() => () => clearTimeout(copyResetTimeout.current), []);

  async function copyCommit() {
    try {
      await navigator.clipboard.writeText(editorCommit);
      copyLabel.value = "copied";
    } catch {
      copyLabel.value = "copy failed";
    }
    clearTimeout(copyResetTimeout.current);
    copyResetTimeout.current = setTimeout(() => (copyLabel.value = null), 500);
  }

  return (
    <BuildButton type="button" title={`Copy ${editorCommit}`} aria-label={`Copy ${editorCommit}`} onClick={copyCommit}>
      <span>{copyLabel.value ?? `build ${editorCommit.slice(0, 10)}`}</span>
    </BuildButton>
  );
};

const Settings = () => {
  const { userSettings } = useContext(MystState);

  function changeSetting(id, enabled) {
    userSettings.value = userSettings.value.map((s) => (s.id == id ? { ...s, enabled } : s));
  }

  useSignalEffect(() => {
    localStorage.setItem("myst/settings", JSON.stringify(userSettings.value.map((s) => ({ id: s.id, enabled: s.enabled }))));
  });

  return (
    <SettingsList>
      <h1>Settings</h1>
      <ul>
        {userSettings.value.map((s) => (
          <li key={s.id}>
            <p>{s.title}</p>
            <Toggle name={s.id} id={s.id} checked={s.enabled} onChange={(ev) => changeSetting(s.id, ev.target.checked)} />
          </li>
        ))}
      </ul>
      <BuildInfo />
    </SettingsList>
  );
};

export default Settings;
