import { useContext } from "preact/hooks";
import styled from "styled-components";
import { MystState } from "../mystState";
import { Compartment } from "@codemirror/state";
import { useSignalEffect } from "@preact/signals";

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

const Toggle = ({ ...props }) => {
  return (
    <ToggleContainer>
      <input type="checkbox" {...props} />
      <label htmlFor={props.id} title="Toggle setting" />
    </ToggleContainer>
  );
};

export const userExtensionsCompartment = new Compartment();

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
    </SettingsList>
  );
};

export default Settings;
