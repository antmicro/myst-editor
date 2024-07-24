import markdownIt from "markdown-it";
import { escapeHtml } from "markdown-it/lib/common/utils";

/** @param {markdownIt} md  */
export default function markdownSourceMap(md) {
  md.use(overrideDefaultDirectives);
  md.use(wrapTextInSpan);
  md.use(wrapFencedLinesInSpan);

  const excludeRules = ["softbreak"];
  const overrideRules = [
    ...Object.keys(md.renderer.rules).filter((r) => !excludeRules.includes(r)),
    "paragraph_open",
    "heading_open",
    "list_item_open",
    "table_open",
    "admonition_open",
  ];
  console.log(overrideRules);

  for (const rule of overrideRules) {
    const temp = md.renderer.rules[rule];
    md.renderer.rules[rule] = addLineNumberToTokens(temp);
  }
}

function addLineNumberToTokens(defaultRule) {
  /**
   * @param {import("markdown-it/index.js").Token[]} tokens
   * @param {number} idx
   * @param {import("markdown-it/index.js").Renderer} self
   */
  return (tokens, idx, options, env, self) => {
    let line = 0;
    if (tokens[idx].map) {
      line = tokens[idx].map[0] + env.startLine - (env.chunkId === 0 ? 0 : 1);
      tokens[idx].attrSet("data-source-line", line.toString());
    }

    const inlineContainers = ["paragraph_open", "heading_open"];
    if (inlineContainers.includes(tokens[idx].type)) {
      const inlineToken = tokens[idx + 1];
      let lineInParagraph = 0;
      for (const childToken of inlineToken.children) {
        if (childToken.type === "softbreak") {
          lineInParagraph++;
          continue;
        }

        childToken.map = [tokens[idx].map[0] + lineInParagraph, tokens[idx].map[0] + lineInParagraph + 1];
      }
    }

    if (defaultRule) {
      // if a rule existed for this token, execute it
      return defaultRule(tokens, idx, options, env, self);
    } else {
      // pass tokens to the default renderer
      return self.renderToken(tokens, idx, options);
    }
  };
}

// the fallback renderer rule for unhandled and error directives does not output the token attributes into the html
function overrideDefaultDirectives(/** @type {markdownIt} */ md) {
  function newRule(defaultRule) {
    return (tokens, idx, options, env, self) => {
      const token = tokens[idx];
      let html = defaultRule(tokens, idx, options, env, self);
      const asideCloseIdx = html.indexOf(">");
      html = html.slice(0, asideCloseIdx) + self.renderAttrs(token) + html.slice(asideCloseIdx);
      return html;
    };
  }

  md.renderer.rules.directive = newRule(md.renderer.rules.directive);
  md.renderer.rules["directive_error"] = newRule(md.renderer.rules["directive_error"]);
}

// we need some way to add line info to html text, so the idea is to wrap every text token in a span
function wrapTextInSpan(/** @type {markdownIt} */ md) {
  const defaultTextRule = md.renderer.rules.text;
  md.renderer.rules.text = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const defaultOutput = defaultTextRule(tokens, idx, options, env, self);
    let html = `<span${self.renderAttrs(token)}>${defaultOutput}</span>`;
    return html;
  };
}

// currently the contents of a fenced code block are treated as a singular string so we need to wrap each line with a `span` to attach line metadata
// if we ever decide to add syntax highlighting in fenced code blocks, this will need to be changed
function wrapFencedLinesInSpan(/** @type {markdownIt} */ md) {
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const sanitizedContent = escapeHtml(token.content);
    const startLine = parseInt(token.attrGet("data-source-line"));
    let htmlContent = sanitizedContent
      .split("\n")
      .filter((_, i, lines) => i !== lines.length - 1)
      .map((l, i) => `<span data-source-line="${startLine + i + 1}">${l}</span>`)
      .join("\n");

    return `<pre><code${self.renderAttrs(token)}>${htmlContent}</code></pre>\n`;
  };
}
