import MarkdownIt from "markdown-it";
import { Directive, directivePlugin, Role, rolePlugin } from "markdown-it-docutils";
import { waitForElement } from "../utils";
import { splitReviewExclusions } from "./markdownReview";

/**
 * @typedef {{
 *  target: string | RegExp,
 *  transform: (input: string) => string | Promise<string>
 * }} Transform
 *
 * A transformation which will be applied to the output of `markdown-it`.
 * `transform` will be applied to all matches of `target`.
 * A bare URL fully matching a transform isn't auto-linked, so only the transform's output is shown.
 * Top-level output elements marked with `data-review-exclude` (e.g. an MR badge) are left out of comment highlights.
 */

class PreviewWrapper {
  constructor(preview, cache) {
    this.preview = preview;
    this.cache = cache;
  }

  fillPlaceholder(placeholderId, html) {
    const placeholder = this.preview.getElementById(placeholderId);
    if (!placeholder) return;
    const reviewWrapper = placeholder.parentElement?.closest("[data-review-kind], [data-suggestion-type]");
    // If the placeholder sits inside a `[]()` link's label, don't let the resolved
    // value introduce a nested link.
    placeholder.outerHTML = placeholder.closest("a") ? stripAnchors(html) : html;
    // Async results arrive after the review highlight was rendered, so split it now.
    if (reviewWrapper) splitReviewExclusions(reviewWrapper);
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

    // The rendered HTML may not be in the DOM yet, so wait for the placeholder before filling it.
    // The error handler only covers the transform, so a failure while filling can't overwrite the cache.
    const placeholderReady = () => waitForElement(this.preview, placeholderId);
    promise.then(
      (result) => {
        this.cache.set(input, result);
        return placeholderReady().then(() => this.fillPlaceholder(placeholderId, result));
      },
      (err) => {
        console.error("Error in custom transform:", target, "Caused by input:", input, "Error:", err);
        this.cache.set(input, input);
        return placeholderReady().then(() => this.cancelTransform(placeholderId));
      },
    );

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
 * Unwraps any `<a>` tags a transform's output may contain, keeping their inner content.
 * Used to stop a transform (e.g. issue links) from nesting a link inside a `[]()` link's
 * label, while still letting transforms that just substitute plain text (e.g. `|date|`) work.
 *
 * Attributes are matched quote-aware rather than as `[^>]*`, so that a `>` inside an attribute
 * value does not cut the match short and leave the rest of the tag behind as text.
 *
 * @param {string} html
 */
const stripAnchors = (html) => html.replace(/<a(?:\s(?:[^>"']|"[^"]*"|'[^']*')*)?>([\s\S]*?)<\/a>/gi, "$1");

/**
 * @param {Transform[]} transforms
 * @returns {function(MarkdownIt): void}
 */
const markdownReplacer = (transforms, editorParent, cache) => (markdownIt) => {
  const preview = new PreviewWrapper(editorParent, cache);
  /**
   * Builds a regex that matches `target` only at the start of a string, or the whole string with `wholeMatch`.
   * Global/sticky flags are dropped so `exec`/`test` don't carry `lastIndex` between calls.
   *
   * @param {string | RegExp} target
   * @param {boolean} [wholeMatch]
   */
  const anchoredTarget = (target, wholeMatch = false) => {
    const source = target instanceof RegExp ? target.source : markdownIt.utils.escapeRE(target);
    const flags = target instanceof RegExp ? target.flags.replace(/[gy]/g, "") : "";
    return new RegExp(`^(?:${source})${wholeMatch ? "$" : ""}`, flags);
  };
  const mappedTransforms = transforms.map((t) => ({
    ...preview.overloadTransform(t),
    /** A regular expression for a transform that only matches at the beggining of a string, useful for parsing */
    beginTarget: anchoredTarget(t.target),
    wholeTarget: anchoredTarget(t.target, true),
  }));

  // Undo auto-linking of bare URLs that a transform fully matches: the transform's output
  // (e.g. issue and MR links) replaces the URL, and would otherwise be nested in a link.
  markdownIt.core.ruler.after("linkify", "unlink_transformed_urls", (state) => {
    for (const block of state.tokens) {
      const children = block.children ?? [];
      for (let idx = children.length - 3; idx >= 0; idx--) {
        const [open, text, close] = children.slice(idx, idx + 3);
        if (open.type !== "link_open" || open.markup !== "linkify" || text.type !== "text" || close.type !== "link_close") continue;
        // Match escaped text, like the `text` renderer rule below does.
        const escaped = markdownIt.utils.escapeHtml(text.content);
        if (!mappedTransforms.some(({ wholeTarget }) => wholeTarget.test(escaped))) continue;
        text.level = open.level;
        children.splice(idx, 3, text);
      }
    }
  });

  // `env` is per-render, so it can flag whether the token being rendered sits inside a `[]()`
  // link - Markdown links cannot nest, so a boolean is enough.
  const trackLink = (rule, insideLink) => {
    const defaultRule = markdownIt.renderer.rules[rule];
    markdownIt.renderer.rules[rule] = (tokens, idx, options, env, self) => {
      env.insideLink = insideLink;
      return (defaultRule ?? self.renderToken.bind(self))(tokens, idx, options, env, self);
    };
  };
  trackLink("link_open", true);
  trackLink("link_close", false);

  const defaultTextRule = markdownIt.renderer.rules.text;
  markdownIt.renderer.rules.text = (tokens, idx, options, env, ...rest) => {
    const transformed = mappedTransforms.reduce(applyTransform, defaultTextRule(tokens, idx, options, env, ...rest));
    // Transforms which produce a link would otherwise nest one inside the link's label.
    return env.insideLink ? stripAnchors(transformed) : transformed;
  };

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
