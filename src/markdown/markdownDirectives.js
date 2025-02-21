// https://github.com/executablebooks/markdown-it-docutils/blob/main/src/directives/images.ts
// figure-md seems to be a myst-parser (MyST+Sphinx) thing but the MyST project seems to be
// evolving away from Sphinx towards mystmd, so slim chance of mainlining this
import { Directive, directiveOptions, directivesDefault } from "markdown-it-docutils";

const shared_option_spec = {
  alt: directiveOptions.unchanged,
  height: directiveOptions.length_or_unitless,
  width: directiveOptions.length_or_percentage_or_unitless,
  scale: directiveOptions.percentage,
  target: directiveOptions.unchanged_required,
  class: directiveOptions.class_option,
  name: directiveOptions.unchanged,
};

class FigureMd extends directivesDefault.image {
  option_spec = {
    ...shared_option_spec,
    align: directiveOptions.create_choice(["left", "center", "right"]),
    figwidth: directiveOptions.length_or_percentage_or_unitless_figure,
    figclass: directiveOptions.class_option,
  };
  has_content = true;
  required_arguments = 0;
  optional_arguments = 1;
  run(data) {
    const openToken = this.createToken("figure_open", "figure", 1, {
      map: data.map,
      block: true,
    });
    if (data.options.figclass) {
      openToken.attrJoin("class", data.options.figclass.join(" "));
    }
    if (data.options.align) {
      openToken.attrJoin("class", `align-${data.options.align}`);
    }
    if (data.options.figwidth && data.options.figwidth !== "image") {
      openToken.attrSet("width", data.options.figwidth);
    }
    let target;
    if (data.args.length > 0) {
      target = newTarget(this.state, openToken, "fig", data.args[0], data.body.trim());
      openToken.attrJoin("class", "numbered");
    }

    let captionTokens = [];
    let legendTokens = [];
    let imageToken = null;
    if (data.body) {
      imageToken = this.state.md.parseInline(data.body.split("\n")[0], this.state.env)[0].children[0];
      imageToken.map = data.map;
      if (data.options.height) {
        imageToken.attrSet("height", data.options.height);
      }
      if (data.options.width) {
        imageToken.attrSet("width", data.options.width);
      }
      if (data.options.align) {
        imageToken.attrJoin("class", `align-${data.options.align}`);
      }
      if (data.options.class) {
        imageToken.attrJoin("class", data.options.class.join(" "));
      }

      const captionSplit = data.body.split("\n\n");
      if (captionSplit.length > 1) {
        const [caption, ...legendParts] = captionSplit.slice(1);
        const legend = legendParts.join("\n\n");
        const captionMap = data.bodyMap[0] + 2;
        const openCaption = this.createToken("figure_caption_open", "figcaption", 1, {
          block: true,
        });
        if (target) {
          openCaption.attrSet("number", `${target.number}`);
        }
        const captionBody = this.nestedParse(caption, captionMap);
        const closeCaption = this.createToken("figure_caption_close", "figcaption", -1, {
          block: true,
        });
        captionTokens = [openCaption, ...captionBody, closeCaption];
        if (legend) {
          const legendMap = captionMap + caption.split("\n").length + 1;
          const openLegend = this.createToken("figure_legend_open", "", 1, {
            block: true,
          });
          const legendBody = this.nestedParse(legend, legendMap);
          const closeLegend = this.createToken("figure_legend_close", "", -1, {
            block: true,
          });
          legendTokens = [openLegend, ...legendBody, closeLegend];
        }
      }
    }
    const closeToken = this.createToken("figure_close", "figure", -1, { block: true });
    return [openToken, imageToken, ...captionTokens, ...legendTokens, closeToken];
  }
}

function newTarget(state, token, kind, label, title, silent = false) {
  const env = getDocState(state);
  const number = nextNumber(state, kind);
  const target = {
    label,
    kind,
    number,
    title,
  };
  if (!silent) {
    const meta = getNamespacedMeta(token);
    meta.target = target;
    token.attrSet("id", label);
    env.targets[label] = target;
  }
  return target;
}

function getDocState(state) {
  const env = state.env?.docutils ?? {};
  if (!env.targets) env.targets = {};
  if (!env.references) env.references = [];
  if (!env.numbering) env.numbering = {};
  if (!state.env.docutils) state.env.docutils = env;
  return env;
}

function nextNumber(state, kind) {
  const env = getDocState(state);
  if (env.numbering[kind] == null) {
    env.numbering[kind] = 1;
  } else {
    env.numbering[kind] += 1;
  }
  return env.numbering[kind];
}

function getNamespacedMeta(token) {
  const meta = token.meta?.docutils ?? {};
  if (!token.meta) token.meta = {};
  if (!token.meta.docutils) token.meta.docutils = meta;
  return meta;
}

class Table extends Directive {
  optional_arguments = 1;
  has_content = true;
  final_argument_whitespace = true;
  run(data) {
    const tableTokens = this.nestedParse(data.body, data.map);
    let prefixTokens = [];
    let suffixTokens = [];
    if (data.args.length > 0) {
      const openToken = this.createToken("figure_open", "figure", 1, {
        map: data.map,
        block: true,
      });
      const target = newTarget(this.state, openToken, "fig", data.args[0], data.body.trim());
      openToken.attrJoin("class", "numbered");
      const openCaption = this.createToken("figure_caption_open", "figcaption", 1, {
        block: true,
      });
      openCaption.attrSet("style", "text-align: left");
      if (target) {
        openCaption.attrSet("number", `${target.number}`);
      }
      const captionBody = this.nestedParse(data.args[0], data.map[0]);
      const closeCaption = this.createToken("figure_caption_close", "figcaption", -1, {
        block: true,
      });
      prefixTokens = [openToken, openCaption, ...captionBody, closeCaption];
      suffixTokens = [this.createToken("figure_close", "figure", -1, { block: true })];
    }

    return [...prefixTokens, ...tableTokens, ...suffixTokens];
  }
}

export default {
  "figure-md": FigureMd,
  table: Table,
};
