import { html } from "htm/preact";
import { useState, useEffect } from "preact/hooks";
import Modal from "./Modal.js";
import Tooltip from "./Tooltip.js";
import DefaultButton from "./Buttons.js";
import { styled } from "styled-components";
import { TopbarButton } from "./Topbar.js";

const TemplateDropdownContent = styled.div`
  display: none;
  margin-left: 5px;
  margin-right: 5px;
  text-transform: uppercase;
  white-space: nowrap;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  color: var(--icon-color);
  background-color: var(--icon-bg);
  width: 210%;
  z-index: 20;
`;

const TemplateIcon = () =>
  html`<svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 16L11 16" stroke="#332D37" stroke-width="1.75" />
    <path d="M1 21H10H19V12V6.5L13.5 1H1V6.5V12V21Z" stroke="#332D37" stroke-width="1.75" stroke-dasharray="6 3" />
    <path d="M5 12L15 12" stroke="#332D37" stroke-width="1.75" />
    <path d="M5 8L15 8" stroke="#332D37" stroke-width="1.75" />
  </svg> `;

const TemplateButton = styled(DefaultButton)`
  width: 90%;
  color: var(--icon-color);
  border: 1px solid var(--icon-border);
  padding: 0 10px 0 10px;
  margin-top: 0px;
  text-wrap: wrap;
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
  width: 100%;
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

const TemplateManager = ({ text, templatelist }) => {
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
        })
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

  useEffect(() => getTemplateConfig(templatelist).then(validateTemplConfig).then(fillTemplatesWithFetchedData).then(setReadyTemplates), []);

  if (generalErr.error) {
    return html` <${TopbarButton}
        type="button"
        template=${template}
        onMouseEnter=${() => setShowTooltip(true)}
        onMouseLeave=${() => setShowTooltip(false)}
      >
        <${TemplateIcon} />
      <//>
      <${showTooltip && Tooltip} tooltipOrientation="bottom" errorMessage=${generalErr.message} />`;
  }

  if (Object.keys(readyTemplates).length == 0) {
    return html` <${TopbarButton}
      type="button"
      template=${template}
      onMouseEnter=${() => setShowTooltip(true)}
      onMouseLeave=${() => setShowTooltip(false)}
    >
      <${TemplateIcon} />
    <//>`;
  }

  return html`
    ${showModal &&
    html`<${Modal}
      selectedTemplate=${selectedTemplate}
      closeModal=${() => {
        setShowModal(false);
        setSelectedTemplate(false);
      }}
      changeDocumentTemplate=${changeDocumentTemplate}
    />`}
    <${Dropdown} title="Templates">
      <${TopbarButton} className="icon" type="button"><${TemplateIcon} /><//>
      <${TemplatesList}>
        <${TemplateDropdownContent}>
          ${Object.keys(readyTemplates).map(
            (key) => html`
              ${readyTemplates[key].errorMessage
                ? html`
                    <${ButtonTooltipFlex}>
                      <${showTooltip === key && Tooltip} tooltipOrientation="left" errorMessage="${readyTemplates[key].errorMessage}" />
                      <${TemplateButton} type="button" onMouseEnter=${() => setShowTooltip(key)} onMouseLeave=${() => setShowTooltip(false)}
                        >${readyTemplates[key].id}
                      <//>
                    <//>
                  `
                : html`
                    <${TemplateButton}
                      type="button"
                      onClick=${() => {
                        setShowModal(true);
                        setSelectedTemplate(key);
                      }}
                      >${readyTemplates[key].id}
                    <//>
                  `}
            `
          )}
        <//>
      <//>
    <//>
  `;
};

export default TemplateManager;
