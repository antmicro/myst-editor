import markdownIt from "markdown-it";

const SRC_LINE_ID = "data-line-id";
const randomLineId = () => Math.random().toString().replace(".", "");
const inlineContainers = ["paragraph_open", "heading_open"];
const ignoreTypes = ["inline", "bullet_list_open", "ordered_list_open", "table_open", "td_open", "thead_open", "tbody_open"];

/** @param {markdownIt} md  */
export default function markdownSourceMap(md) {
  md.use(overrideDefaultDirectives);
  md.use(overrideDefaultRole);
  md.use(overrideHTML);
  md.use(wrapTextInSpan);
  md.use(wrapFencedLinesInSpan);

  md.core.ruler.after("linkify", "source_map", (state) => {
    if (state.env.lineMap == undefined || state.env.startLine == undefined || state.env.chunkId == undefined) return;

    function addLineAttr(token) {
      const line = token.map[0] + state.env.startLine - (state.env.chunkId !== 0);
      if (!state.env.lineMap.has(line)) {
        const id = randomLineId();
        state.env.lineMap.set(line, id);
        token.attrSet(SRC_LINE_ID, id);
      }
    }

    for (let idx = 0; idx < state.tokens.length; idx++) {
      // skip non empty list items
      if (state.tokens[idx].type === "list_item_open" && state.tokens[idx + 1].type !== "list_item_close") continue;

      if (inlineContainers.includes(state.tokens[idx].type)) {
        const inlineToken = state.tokens[idx + 1];
        let lineInParagraph = 0;
        for (const childToken of inlineToken.children) {
          if (childToken.type === "softbreak") {
            lineInParagraph++;
            continue;
          }

          if (!childToken.type.includes("_open")) {
            childToken.map = [state.tokens[idx].map[0] + lineInParagraph, state.tokens[idx].map[0] + lineInParagraph + 1];
          }
        }
      } else if (state.tokens[idx].map && !ignoreTypes.includes(state.tokens[idx].type)) {
        addLineAttr(state.tokens[idx]);
      }

      state.tokens[idx].children?.filter?.((c) => c.map && !ignoreTypes.includes(c))?.forEach?.((c) => addLineAttr(c));
    }
  });
}

/** The fallback renderer rule for unhandled and error directives does not output the token attributes into the html **/
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

/** Add token attributes to unhandled roles */
function overrideDefaultRole(/** @type {markdownIt} */ md) {
  const defaultRule = md.renderer.rules.role;
  md.renderer.rules.role = (tokens, idx, options, env, self) => {
    let html = defaultRule(tokens, idx, options, env, self);
    const spanCloseIdx = html.indexOf(">");
    html = html.slice(0, spanCloseIdx) + self.renderAttrs(tokens[idx]) + html.slice(spanCloseIdx);
    return html;
  };
}

function overrideHTML(/** @type {markdownIt} */ md) {
  const override = (defaultRule) => (tokens, idx, options, env, self) => {
    let html = defaultRule(tokens, idx, options, env, self);
    const tagCloseIdx = html.indexOf(">");
    html = html.slice(0, tagCloseIdx) + self.renderAttrs(tokens[idx]) + html.slice(tagCloseIdx);
    return html;
  };

  md.renderer.rules.html_block = override(md.renderer.rules.html_block);
  md.renderer.rules.html_inline = override(md.renderer.rules.html_inline);
}

/** We need some way to add line info to html text, so the idea is to wrap every text token in a span **/
function wrapTextInSpan(/** @type {markdownIt} */ md) {
  const defaultTextRule = md.renderer.rules.text;
  md.renderer.rules.text = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const defaultOutput = defaultTextRule(tokens, idx, options, env, self);
    let html = `<span${self.renderAttrs(token)}>${defaultOutput}</span>`;
    return html;
  };
}

/** Currently the contents of a fenced code block are treated as a singular string so we need to wrap each line with a `span` to attach line metadata.
    If we ever decide to add syntax highlighting in fenced code blocks, this will need to be changed. **/
function wrapFencedLinesInSpan(/** @type {markdownIt} */ md) {
  const defaultFenceRule = md.renderer.rules.fence;
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const defaultOutput = defaultFenceRule(tokens, idx, options, env, self);
    if (env.lineMap == undefined || env.startLine == undefined || env.chunkId == undefined) {
      return defaultOutput;
    }
    const token = tokens[idx];
    // Some markdown-it extensions use the `fence` rule for other things than code blocks (eg. mermaid graphs) so we don't want to modify those
    if (defaultOutput.includes("mermaid")) {
      return defaultOutput;
    }

    const parser = new DOMParser();
    const defaultHTML = parser.parseFromString(defaultOutput, "text/html");
    const codeElem = defaultHTML.querySelector("pre > code");
    const defaultContent = codeElem.innerHTML;
    const startLine = token.map[0] + env.startLine - (env.chunkId !== 0);
    codeElem.innerHTML = defaultContent
      .split("\n")
      .filter((_, i, lines) => i !== lines.length - 1)
      .map((l, i) => {
        const id = randomLineId();
        env.lineMap.set(startLine + i + 1, id);
        return `<span ${SRC_LINE_ID}="${id}">${l}</span>`;
      })
      .join("\n");

    return defaultHTML.body.innerHTML;
  };
}

export function findNearestElementForLine(lineNumber, lineMap, preview) {
  let id = null;
  let match = null;
  let num = lineNumber;
  for (; num >= 1; num--) {
    id = lineMap.get(num);
    if (id) {
      match = preview.querySelector(`[data-line-id="${id}"]`);
      if (match) break;
    }
  }

  return [match, num];
}

export function getLineById(lineMap, id) {
  for (const [line, value] of lineMap.entries()) {
    if (value === id) {
      return line;
    }
  }
}
