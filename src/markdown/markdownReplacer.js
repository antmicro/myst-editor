import MarkdownIt from "markdown-it";
import { Directive, directivePlugin, Role, rolePlugin } from "markdown-it-docutils";
import { waitForElement } from "../utils";
import { escapeRE } from "markdown-it/lib/common/utils";

/**
 * @typedef {{
 *  target: string | RegExp,
 *  transform: (input: string) => string | Promise<string>
 * }} Transform
 *
 * A transformation which will be applied to the output of `markdown-it`.
 * `transform` will be applied to all matches of `target`.
 */

class PreviewWrapper {
  constructor(preview, cache) {
    this.preview = preview;
    this.cache = cache;
  }

  fillPlaceholder(placeholderId, html) {
    const placeholder = this.preview.getElementById(placeholderId);
    if (placeholder) placeholder.outerHTML = html;
  }

  cancelTransform(placeholderId) {
    const el = this.preview.getElementById(placeholderId);
    if (el) el.outerHTML = el.innerHTML;
  }

  /**
   * Creates a placeholder which will be replaced with the value of resolved `promise`.
   * If promise fails to resolve then placeholder will be removed
   *
   * @param {Promise<string>} promise
   * @returns {string}
   */
  createTransformPlaceholder(input, promise, target) {
    const placeholderId = "placeholder-" + Math.random().toString().slice(2);

    promise
      .then(waitForElement(this.preview, placeholderId))
      .then((result) => {
        this.cache.set(input, result);
        this.fillPlaceholder(placeholderId, result);
      })
      .catch((err) => {
        console.error("Error in custom transform:", target, "Caused by input:", input, "Error:", err);
        this.cancelTransform(placeholderId);
        this.cache.set(input, input);
      });

    return `<span id="${placeholderId}">${input}</span>`;
  }

  /**
   * Adds special handling to transformations which return promises.
   *
   * @param {Transform}
   * @returns {Transform}
   */
  overloadTransform({ transform: originalTransform, target, ...rest }) {
    return {
      target,
      transform: (input, ...params) => {
        const cached = this.cache.get(input);
        if (cached) return cached;

        let transformResult = originalTransform(input, ...params);

        if (typeof transformResult.then == "function") {
          return this.createTransformPlaceholder(input, transformResult, target);
        }

        return transformResult;
      },
      ...rest,
    };
  }
}

/**
 * @param {string} txt
 * @param {Transform} transform
 */
const applyTransform = (txt, { transform, target }) => txt.replaceAll(target, transform);

/**
 * @param {Transform[]} transforms
 * @returns {function(MarkdownIt): void}
 */
const markdownReplacer = (transforms, editorParent, cache) => (markdownIt) => {
  const preview = new PreviewWrapper(editorParent, cache);
  const mappedTransforms = transforms.map((t) => ({
    ...preview.overloadTransform(t),
    /** A regular expression for a transform that only matches at the beggining of a string, useful for parsing */
    beginTarget: new RegExp(`^(?:${t.target instanceof RegExp ? t.target.source : escapeRE(t.target)})`, t.target.flags ?? "g"),
  }));

  const defaultTextRule = markdownIt.renderer.rules.text;
  markdownIt.renderer.rules.text = (...args) => mappedTransforms.reduce(applyTransform, defaultTextRule(...args));

  // This ruler entry ensures that no preexisting inline Markdown rules will be applied to any text that matches a transform.
  // The `text` rule above will handle it instead.
  markdownIt.inline.ruler.before("text", "transforms", (state, silent) => {
    const src = state.src.slice(state.pos, state.posMax);
    for (const transform of mappedTransforms) {
      /** Check if the current source fragment starts with a transform */
      const match = transform.beginTarget.exec(src);
      if (!match) continue;
      state.pos += match[0].length;
      if (silent) return true;

      const token = state.push("text", "", 0);
      token.content = src.slice(0, match[0].length);
      return true;
    }
    return false;
  });
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
 *  @param { Transform[] } transforms
 *  @returns {function(MarkdownIt): void}
 */
const useCustomRoles = (transforms, previewNode, cache) => (markdownIt) => {
  const preview = new PreviewWrapper(previewNode, cache);
  const customRoles = transforms
    .map((t) => preview.overloadTransform(t))
    .map(toDocutilsRole)
    .reduce((roles, { name, role }) => {
      roles[name] = role;
      return roles;
    }, {});

  // Usually a markdownIt renderer rule would escape all html code. Here we create a rule
  // which explicitly does nothing so that all html returned by transforms is rendered.
  markdownIt.renderer.rules[CUSTOM_ROLE_RULE] = (tokens, idx, options, env, self) =>
    `<span ${self.renderAttrs(tokens[idx])}>${tokens[idx].content}</span>`;
  markdownIt.use(rolePlugin, { roles: customRoles });
};

const CUSTOM_DIRECTIVE_RULE = "custom_directive";

const toDocutilsDirective = ({ target, transform, required_arguments = 0, optional_arguments = 0, option_spec = {} }) => {
  const DocutilsDirective = class extends Directive {
    has_content = true;
    required_arguments = required_arguments;
    optional_arguments = optional_arguments;
    option_spec = option_spec;
    run(data) {
      const token = this.createToken(CUSTOM_DIRECTIVE_RULE, "div", 1, {
        map: data.map,
        block: true,
      });
      // We should support caching and async directives
      token.content = transform(data.body + JSON.stringify(data.args) + JSON.stringify(data.options), data, this);
      return [token];
    }
  };

  return { name: target, directive: DocutilsDirective };
};

const useCustomDirectives = (transforms, previewNode, cache) => (markdownIt) => {
  const preview = new PreviewWrapper(previewNode, cache);
  const customDirectives = transforms
    .map((t) => preview.overloadTransform(t))
    .map(toDocutilsDirective)
    .reduce((directives, { name, directive }) => {
      directives[name] = directive;
      return directives;
    }, {});

  markdownIt.renderer.rules[CUSTOM_DIRECTIVE_RULE] = (tokens, idx, options, env, self) =>
    `<div ${self.renderAttrs(tokens[idx])}>${tokens[idx].content}</div>`;
  markdownIt.use(directivePlugin, { directives: customDirectives });
};

export { markdownReplacer, useCustomRoles, useCustomDirectives };
