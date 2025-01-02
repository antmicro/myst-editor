import { useState, useEffect, useContext } from "preact/hooks";
import Modal from "./Modal";
import DefaultButton from "./Buttons";
import { css, styled } from "styled-components";
import { TopbarButton } from "./Topbar";
import { MystState } from "../mystState.js";
import { useSignalEffect } from "@preact/signals";

const TemplateDropdownContent = styled.div`
  display: none;
  text-transform: uppercase;
  white-space: nowrap;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  color: var(--icon-color);
  background-color: var(--icon-bg);
  z-index: 20;
  gap: 5px;
  padding: 5px;
`;

const TemplateIcon = () => (
  <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 16L11 16" stroke="#332D37" stroke-width="1.75" />
    <path d="M1 21H10H19V12V6.5L13.5 1H1V6.5V12V21Z" stroke="#332D37" stroke-width="1.75" stroke-dasharray="6 3" />
    <path d="M5 12L15 12" stroke="#332D37" stroke-width="1.75" />
    <path d="M5 8L15 8" stroke="#332D37" stroke-width="1.75" />
  </svg>
);

const TemplateButton = styled(DefaultButton)`
  color: ${(props) => (props.error ? "var(--red-500)" : "var(--icon-color)")};
  border: 1px solid ${(props) => (props.error ? "var(--red-500)" : "var(--icon-border)")};
  padding: 0 10px 0 10px;
  margin-top: 0px;

  ${(props) =>
    props.error &&
    css`
      cursor: default;
      &:hover {
        border: 1px solid var(--red-500) !important;
        background-color: var(--icon-bg) !important;
      }
    `}
`;

const Dropdown = styled.div`
  position: relative;
  &:hover {
    div {
      display: inline-flex;
      flex-direction: column;
    }
  }
`;

const ButtonTooltipFlex = styled.div`
  display: flex;
  flex-direction: row-reverse;
  border: 1px solid var(--gray-900);
  width: inherit;
`;

const TemplatesList = styled.div`
  position: absolute;
  padding-top: 5px;
`;

const validateTemplConfig = (templConfig) => {
  const requiredFields = ["id", "templatetext"];
  for (const key in templConfig) {
    for (let field of requiredFields) {
      if (!templConfig[key][field]) templConfig[key].errorMessage = `Configuration of template ${key} is lacking '${field}'`;
    }

    if (templConfig[key].errorMessage) console.error(templConfig[key].errorMessage);
  }

  return templConfig;
};

const TemplateManager = ({ text }) => {
  const { options } = useContext(MystState);
  const [template, setTemplate] = useState("");
  const [readyTemplates, setReadyTemplates] = useState({});
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const [generalErr, setGeneralErr] = useState({
    error: null,
    message: null,
  });

  const checkResponseStatus = (response) => (response.ok ? response : Promise.reject(`Invalid HTTP response: ${response.status}`));

  const changeDocumentTemplate = (template) => {
    setTemplate(readyTemplates[template].templatetext);
    text.set(readyTemplates[template].templatetext);
    text.sync();
    setShowModal(false);
  };

  const getTemplateConfig = (url) =>
    fetch(url)
      .then(checkResponseStatus)
      .then((response) =>
        response.json().catch((error) => {
          console.error(error);
          setGeneralErr({
            error,
            message: "Template configuration is not valid",
          });
        }),
      )
      .catch((error) => {
        console.warn(error);
        setGeneralErr({ error, message: "Template configuration not found" });
      });

  const loadTemplateFromURL = (url) =>
    fetch(url)
      .then(checkResponseStatus)
      .then((response) => response.text())
      .catch((err) => {
        console.error(err);
        throw new Error("Could not fetch the template");
      });

  const fillTemplatesWithFetchedData = async (templatesConfig) => {
    if (!templatesConfig) {
      return {};
    }

    for (const templateName in templatesConfig) {
      const templateUrl = templatesConfig[templateName].templatetext;
      await loadTemplateFromURL(templateUrl)
        .then((templateText) => (templatesConfig[templateName].templatetext = templateText))
        .catch((err) => (templatesConfig[templateName].errorMessage ??= err.message));
    }

    return templatesConfig;
  };

  useSignalEffect(() => {
    // reset all and fetch config
    setTemplate("");
    setReadyTemplates({});
    setSelectedTemplate(null);
    setShowModal(false);
    setShowTooltip(false);
    getTemplateConfig(options.templatelist.value).then(validateTemplConfig).then(fillTemplatesWithFetchedData).then(setReadyTemplates);
  });

  if (generalErr.error) {
    return null;
  }

  if (Object.keys(readyTemplates).length == 0) {
    return (
      <TopbarButton
        type="button"
        title="Templates"
        template={template}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <TemplateIcon />
      </TopbarButton>
    );
  }

  return (
    <>
      {showModal && (
        <Modal
          selectedTemplate={selectedTemplate}
          closeModal={() => {
            setShowModal(false);
            setSelectedTemplate(false);
          }}
          changeDocumentTemplate={changeDocumentTemplate}
        />
      )}
      <Dropdown>
        <TopbarButton className="icon" title="Templates" type="button">
          <TemplateIcon />
        </TopbarButton>
        <TemplatesList>
          <TemplateDropdownContent>
            {Object.keys(readyTemplates).map((key) => (
              <TemplateButton
                type="button"
                key={key}
                error={readyTemplates[key].errorMessage != undefined}
                title={readyTemplates[key].errorMessage ?? ""}
                onClick={() => {
                  if (readyTemplates[key].errorMessage) return;
                  setShowModal(true);
                  setSelectedTemplate(key);
                }}
              >
                {readyTemplates[key].id}
              </TemplateButton>
            ))}
          </TemplateDropdownContent>
        </TemplatesList>
      </Dropdown>
    </>
  );
};

export default TemplateManager;
