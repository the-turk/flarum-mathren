/*
 * This file is part of MathRen.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * Get the primary delimiters that'll be used by text editor buttons,
 * copy-tex plugin, `EditPostComposer` etc.
 *
 * @param forum   Must be equal to `app.forum`. Used for retrieving settings.
 * @param reverse To return the primary BBCode delimiters no matter what.
 *
 * @return { Object }
 */
export default function getPrimaryDelimiters(forum, reverse = false) {
  if (forum.attribute('mathren.aliases_as_primary') && reverse === false) {
    return {
      inline: forum.attribute('mathren.primary_inline_delimiter_alias'),
      block: forum.attribute('mathren.primary_block_delimiter_alias'),
    };
  }

  return {
    inline: forum.attribute('mathren.primary_inline_delimiter'),
    block: forum.attribute('mathren.primary_block_delimiter'),
  };
}
