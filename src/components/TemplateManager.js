import { html } from 'htm/preact'
import { useState, useEffect } from 'preact/hooks';
import Modal from './Modal.js'
import Tooltip from './Tooltip.js'
import DefaultButton, { TopbarButton } from './Buttons.js';
import { styled } from 'styled-components/macro';

const TemplateDropdownContent = styled.div`
  display: none;
  margin-left: 5px;
  font-family: 'Lato', sans-serif;
  text-transform: uppercase;
  font-size: 12px;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  border: 1px solid var(--gray-900);
  border-radius: var(--border-radius);
  color: var(--white);
  background-color: var(--gray-800);
  z-index: 20;
  width: 100%;
`;

const TemplateButton = styled(DefaultButton)`
&& {
  width: 100%!important;
  color: var(--white);
  border: 1px solid var(--gray-900)!important;
  padding: 0 10px 0 10px!important;
  margin-top: 0px;
}`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  width: min-content;

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
  display: flex;
  padding-top: 5px;
`;

const TemplateManager = ({ setText, templatelist, setSyncText }) => {
  const [template, setTemplate] = useState("");
  const [readyTemplates, setReadyTemplates] = useState({});
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [error, setError] = useState({
    fetchError: false,
    errorText: "",
    templateError: []
  });

  const handleError = (err, message) => {
    setError({
      ...error,
      fetchError: true,
      errorText: message
    });
    throw new Error(message);
  };

  const changeDocumentTemplate = (template) => {
    setTemplate(readyTemplates[template].templatetext);
    setText(readyTemplates[template].templatetext);
    setSyncText(true);
    setShowModal(false);
  }

  const getTemplateConfig = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      const responseJson = await response.json();
      return responseJson;
    } catch (err) {
      handleError(err, "Unable to download template config.");
    }
  }
  const loadTemplateFromURL = async (URL) => {
    try {
      const response = await fetch(URL);
      if (!response.ok)
        throw new Error(`Encountered error while fetching the template`);

      const data = await response.text();
      return data;
    } catch (err) {
      setError({
        ...error,
        templateError: [...error.templateError, URL]
      });
      return null;
    }
  }
  const fillTemplatesWithFetchedData = async (templatesJSON) => {
    const entries = Object.entries(templatesJSON)
    const templatePromises = entries.map(async ([key, val]) => {
      const newKey = key
      const newValue = {
        ...val,
        templatetext: val.templatetext ? await loadTemplateFromURL(val.templatetext) : undefined
      }
      return [newKey, newValue]
    })
    return Object.fromEntries(
      await Promise.all(templatePromises)
    )
  }

  useEffect(async () => {
    const linkedtemplatelist = await getTemplateConfig(templatelist);
    const readyTemplates = await fillTemplatesWithFetchedData(linkedtemplatelist);
    setReadyTemplates(readyTemplates);
  }, []);

  if (error.fetchError) {
    return html`
      <${TopbarButton} disabled type="button" template=${template} onMouseEnter=${() => setShowTooltip(true)} onMouseLeave=${() => setShowTooltip(false)}>
        Templates
      <//>
      <${Tooltip} tooltipOrientation="bottom" showTooltip=${showTooltip} errorMessage=${error.errorText}/>`;
  }
  return html`
    ${showModal && html`<${Modal} selectedTemplate=${selectedTemplate} closeModal=${() => { setShowModal(false); setSelectedTemplate(false); }} changeDocumentTemplate=${changeDocumentTemplate}/>`}
    <${Dropdown}>
      <${TopbarButton} type="button">Templates<//>
      <${TemplatesList}>
        <${TemplateDropdownContent}>
        ${Object.keys(readyTemplates).map(key => (
    html`
            ${readyTemplates[key].templatetext == undefined ? html`
              <${ButtonTooltipFlex}>
                <${Tooltip} tooltipOrientation="left" showTooltip=${showTooltip === key} errorMessage="Failed to fetch template"/>
                  <${TemplateButton} disabled type="button" onMouseEnter=${() => setShowTooltip(key)} onMouseLeave=${() => setShowTooltip(false)}>${readyTemplates[key].id}
                <//>
              <//>
            `
        : html`
              <${TemplateButton} type="button" 
              onClick=${() => { setShowModal(true); setSelectedTemplate(key); }}>${readyTemplates[key].id}
              <//>
            `}
          `))}      
        <//>
      <//>
    <//>
  `
}

console.log("TemplateManager component loaded")

export default TemplateManager
