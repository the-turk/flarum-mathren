/**
 * Define delimiters those will be used in Copy-tex plugin
 *
 * @see https://github.com/KaTeX/KaTeX/blob/master/contrib/copy-tex/katex2tex.js#L1-L5
 * @returns {object}
 */

export default function copyDelimiters(delimiters) {
  return {
    inline: [delimiters.inline.left, delimiters.inline.right],
    display: [delimiters.block.left, delimiters.block.right],
  };
}
