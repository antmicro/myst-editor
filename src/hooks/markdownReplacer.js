import MarkdownIt from "markdown-it";
/**
 * @typedef {{ 
 *  target: RegExp,
 *  transform: function(string): string | Promise<string>
 * }} Transform 
 * 
 * A transformation which will be applied to the output of `markdown-it`. 
 * `transform` will be applied to all matches of `target`.
 */

const cachePrefix = "myst-editor/"
const getCached = (key) => sessionStorage.getItem(cachePrefix + key)
const setCached = (key, value) => sessionStorage.setItem(cachePrefix + key, value)

function waitForElementWithId(id) {
  return new Promise(resolve => {
    const observer = new MutationObserver(() => {
      const elem = document.getElementById(id);
      if (elem) {
        observer.disconnect()
        resolve(elem)
      };
    });

    document.querySelectorAll("#myst-css-namespace")
      .forEach(
        editorInstance => observer.observe(editorInstance, { childList: true, subtree: true })
      );
  });
}

const fillPlaceholder = (placeholderId, html) => {
  const placeholder = document.getElementById(placeholderId)
  if (placeholder) placeholder.outerHTML = html;
}

const cancelTransform = (placeholderId) => {
  const el = document.getElementById(placeholderId);
  if (el) el.outerHTML = el.innerHTML;
}

/**
 * Creates a placeholder which will be replaced with the value of resolved `promise`.
 * If promise fails to resolve then placeholder will be removed
 * 
 * @param {Promise<string>} promise 
 * @returns {string}
 */
const createTransformPlaceholder = (input, promise) => {
  const placeholderId = Math.random().toString().slice(2);

  promise
    .then(waitForElementWithId(placeholderId))
    .then(result => {
      setCached(input, result);
      fillPlaceholder(placeholderId, result);
    })
    .catch(err => {
      console.error(err);
      cancelTransform(placeholderId);
      setCached(input, input)
    })

  return `<span id="${placeholderId}">${input}</span>`
}

/**
 * Adds special handling to transformations which return promises.
 * 
 * @param {Transform}
 * @returns {Transform}
 */
const overloadTransform = ({ transform: originalTransform, target }) => ({
  target,
  transform: (input) => {
    const cached = getCached(input);
    if (cached) return cached;

    let transformResult = originalTransform(input);

    if (typeof transformResult.then == "function") {
      return createTransformPlaceholder(input, transformResult);
    }
    
    return transformResult;
  }
})

/** 
 * @param {string} txt
 * @param {Transform} transform
 */
const applyTransform = (txt, { transform, target }) => txt.replaceAll(target, transform);

/** 
 * @param {Transform[]} transforms
 * @returns {function(MarkdownIt): void} 
 */
const markdownReplacer =
  (transforms) =>
    (markdownIt) => {
      const defaultRender = markdownIt.renderer.rules.text;
      markdownIt.renderer.rules.text = function (...args) {
        const defaultOutput = defaultRender(...args);
        return transforms
          .map(overloadTransform)
          .reduce(applyTransform, defaultOutput)
      };
    }

export {
  markdownReplacer
}