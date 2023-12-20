import MarkdownIt from "markdown-it";
/**
 * @typedef {{ 
 *  target: RegExp,
 *  transform: function(string): string 
 * }} Transform 
 * 
 * A transformation which will be applied to the output of `markdown-it`. 
 * `transform` will be applied to all matches of `target`.
 */

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
        return transforms.reduce(applyTransform, defaultOutput)
      };
    }

export {
  markdownReplacer
}