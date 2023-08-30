import { html } from 'htm/preact'
import { useState, useEffect } from 'preact/hooks';
import Modal from './Modal.js'
import Tooltip from './Tooltip.js'

const TemplateManager = ({ setDocumentTemplate, templatelist }) => {
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
    setDocumentTemplate(readyTemplates[template].templatetext);
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
      <button type="button" template=${template} id="customButton_templates" class="disabled" onMouseEnter=${() => setShowTooltip(true)} onMouseLeave=${() => setShowTooltip(false)}>
        Templates
      </button>
      <${Tooltip} tooltipOrientation="bottom" showTooltip=${showTooltip} errorMessage=${error.errorText}/>`;
  }
  return html`
    ${showModal && html`<${Modal} selectedTemplate=${selectedTemplate} closeModal=${() => { setShowModal(false); setSelectedTemplate(false); }} changeDocumentTemplate=${changeDocumentTemplate}/>`}
    <div class="dropdown">
      <button type="button" template=${template} id="customButton_templates">Templates</button>
      <div class="templates-list">
      <div className="template-dropdown-content">
      ${Object.keys(readyTemplates).map(key => (
    html`
            ${readyTemplates[key].templatetext == null ? html`
              <div class="button-tooltip-flex">
              <${Tooltip} tooltipOrientation="left" showTooltip=${showTooltip === key} errorMessage="Failed to fetch template"/>
              <button type="button" class="template-name-button disabled" onMouseEnter=${() => setShowTooltip(key)} onMouseLeave=${() => setShowTooltip(false)}>${readyTemplates[key].id}
              </button>
              </div>`
        : html`
              <button type="button" class="template-name-button" 
              onClick=${() => { setShowModal(true); setSelectedTemplate(key); }}>${readyTemplates[key].id}
              </button>`}`
  ))}      
      </div>
      </div>
    </div>
  `
}

console.log("TemplateManager component loaded")

export default TemplateManager
