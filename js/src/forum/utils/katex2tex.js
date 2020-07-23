/**
 * Copied & modified from:
 * https://github.com/KaTeX/KaTeX/blob/master/contrib/copy-tex/katex2tex.js
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2013-2019 Khan Academy and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

// Replace .katex elements with their TeX source (<annotation> element).
// Modifies fragment in-place.  Useful for writing your own 'copy' handler,
// as in copy-tex.js.
export const katexReplaceWithTex = function (fragment, copyDelimiters) {
  // Remove .katex-html blocks that are preceded by .katex-mathml blocks
  // (which will get replaced below).
  const katexHtml = fragment.querySelectorAll('.katex-mathml + .katex-html');
  for (let i = 0; i < katexHtml.length; i++) {
    const element = katexHtml[i];
    if (element.remove) {
      element.remove(null);
    } else {
      element.parentNode.removeChild(element);
    }
  }
  // Replace .katex-mathml elements with their annotation (TeX source)
  // descendant, with inline delimiters.
  const katexMathml = fragment.querySelectorAll('.katex-mathml');
  for (let i = 0; i < katexMathml.length; i++) {
    const element = katexMathml[i];
    const texSource = element.querySelector('annotation');
    if (texSource) {
      if (element.replaceWith) {
        element.replaceWith(texSource);
      } else {
        element.parentNode.replaceChild(texSource, element);
      }
      texSource.innerHTML = copyDelimiters.inline[0] + texSource.innerHTML + copyDelimiters.inline[1];
    }
  }
  // Switch display math to display delimiters.
  const displays = fragment.querySelectorAll('.katex-display annotation');
  for (let i = 0; i < displays.length; i++) {
    const element = displays[i];
    element.innerHTML =
      copyDelimiters.display[0] +
      element.innerHTML.substr(
        copyDelimiters.inline[0].length,
        element.innerHTML.length - copyDelimiters.inline[0].length - copyDelimiters.inline[1].length
      ) +
      copyDelimiters.display[1];
  }
  return fragment;
};

export default katexReplaceWithTex;
