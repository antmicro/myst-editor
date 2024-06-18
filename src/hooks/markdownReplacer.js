import MarkdownIt from "markdown-it";
import { Role, rolePlugin } from "markdown-it-docutils";
/**
 * @typedef {{
 *  target: string | RegExp,
 *  transform: (input: string) => string | Promise<string>
 * }} Transform
 *
 * A transformation which will be applied to the output of `markdown-it`.
 * `transform` will be applied to all matches of `target`.
 */

const cachePrefix = "myst-editor/";
const getCached = (key) => sessionStorage.getItem(cachePrefix + key);
const setCached = (key, value) => sessionStorage.setItem(cachePrefix + key, value);

const resetCache = () => {
  for (var key in sessionStorage) {
    if (key.startsWith("myst-editor")) {
      sessionStorage.removeItem(key);
    }
  }
};

function waitForElementWithId(id, editorParent) {
  return new Promise((resolve) => {
    const observer = new MutationObserver(() => {
      const elem = editorParent.getElementById(id);
      if (elem) {
        observer.disconnect();
        resolve(elem);
      }
    });

    observer.observe(editorParent, { childList: true, subtree: true });
  });
}

const fillPlaceholder = (placeholderId, html, editorParent) => {
  const placeholder = editorParent.getElementById(placeholderId);
  if (placeholder) placeholder.outerHTML = html;
};

const cancelTransform = (placeholderId, editorParent) => {
  const el = editorParent.getElementById(placeholderId);
  if (el) el.outerHTML = el.innerHTML;
};

/**
 * Creates a placeholder which will be replaced with the value of resolved `promise`.
 * If promise fails to resolve then placeholder will be removed
 *
 * @param {Promise<string>} promise
 * @returns {string}
 */
const createTransformPlaceholder = (input, promise, editorParent) => {
  const placeholderId = "placeholder-" + Math.random().toString().slice(2);

  promise
    .then(waitForElementWithId(placeholderId, editorParent))
    .then((result) => {
      setCached(input, result);
      fillPlaceholder(placeholderId, result, editorParent);
    })
    .catch((err) => {
      console.error(err);
      cancelTransform(placeholderId, editorParent);
      setCached(input, input);
    });

  return `<span id="${placeholderId}">${input}</span>`;
};

/**
 * Adds special handling to transformations which return promises.
 *
 * @param {Transform}
 * @returns {Transform}
 */
const overloadTransform = ({ transform: originalTransform, target }, editorParent) => ({
  target,
  transform: (input) => {
    const cached = getCached(input);
    if (cached) return cached;

    let transformResult = originalTransform(input);

    if (typeof transformResult.then == "function") {
      return createTransformPlaceholder(input, transformResult, editorParent);
    }

    return transformResult;
  },
});

/**
 * @param {string} txt
 * @param {Transform} transform
 */
const applyTransform = (txt, { transform, target }) => txt.replaceAll(target, transform);

/**
 * @param {Transform[]} transforms
 * @returns {function(MarkdownIt): void}
 */
const markdownReplacer = (transforms, editorParent) => (markdownIt) => {
  const defaultRender = markdownIt.renderer.rules.text;
  markdownIt.renderer.rules.text = function (...args) {
    const defaultOutput = defaultRender(...args);
    return transforms.map((t) => overloadTransform(t, editorParent)).reduce(applyTransform, defaultOutput);
  };
};

/***************************** CUSTOM ROLES *****************************/

/**
 * @typedef {{
 *  target: string,
 *  transform: (input: string) => string | Promise<string>
 * }} RoleTransform
 *
 * A transformation which will be applied to the content of a MyST role specified as `target`
 */

const CUSTOM_ROLE_RULE = "custom_role";

/**
 * @param {RoleTransform}
 * @returns {{ name: string, role: Role }}
 */
const toDocutilsRole = ({ target, transform }) => {
  const DocutilsRole = class extends Role {
    run({ content }) {
      const token = new this.state.Token(CUSTOM_ROLE_RULE, "span", 1);
      token.content = transform(content);
      return [token];
    }
  };

  return { name: target, role: DocutilsRole };
};

/**
 *  @param { Transform[] }
 *  @returns {{ [rolename: string]: Role }}
 */
const asDocutilsRoles = (transforms, editorParent) =>
  transforms
    .map((t) => overloadTransform(t, editorParent))
    .map(toDocutilsRole)
    .reduce((roles, { name, role }) => {
      roles[name] = role;
      return roles;
    }, {});

/**
 *  @param { Transform[] } transforms
 *  @returns {function(MarkdownIt): void}
 */
const useCustomRoles = (transforms, editorParent) => (markdownIt) => {
  const customRoles = asDocutilsRoles(transforms, editorParent);

  // Usually a markdownIt renderer rule would escape all html code. Here we create a rule
  // which explicitly does nothing so that all html returned by transforms is rendered.
  markdownIt.renderer.rules[CUSTOM_ROLE_RULE] = (tokens, idx) => tokens[idx].content;
  markdownIt.use(rolePlugin, { roles: customRoles });
};

export { markdownReplacer, useCustomRoles, resetCache };
