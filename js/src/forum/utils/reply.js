/**
 * Copied from:
 * https://github.com/flarum/mentions/blob/master/js/src/forum/utils/reply.js
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2019-2021 Stichting Flarum (Flarum Foundation)
 * Copyright (c) 2014-2019 Toby Zerner (toby.zerner@gmail.com)
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

import DiscussionControls from 'flarum/utils/DiscussionControls';
import EditPostComposer from 'flarum/components/EditPostComposer';
import cleanDisplayName from './cleanDisplayName';

function insertMention(post, composer, quote) {
  const user = post.user();
  const mention = `@"${(user && cleanDisplayName(user)) || app.translator.trans('core.lib.username.deleted_text')}"#p${post.id()} `;

  // If the composer is empty, then assume we're starting a new reply.
  // In which case we don't want the user to have to confirm if they
  // close the composer straight away.
  if (!composer.fields.content()) {
    composer.body.attrs.originalContent = mention;
  }

  const cursorPosition = composer.editor.getSelectionRange()[0];
  const preceding = composer.fields.content().slice(0, cursorPosition);
  const precedingNewlines = preceding.length == 0 ? 0 : 3 - preceding.match(/(\n{0,2})$/)[0].length;

  composer.editor.insertAtCursor(
    Array(precedingNewlines).join('\n') + // Insert up to two newlines, depending on preceding whitespace
      (quote ? '> ' + mention + quote.trim().replace(/\n/g, '\n> ') + '\n\n' : mention),
    false
  );
}

export default function reply(post, quote) {
  if (app.composer.bodyMatches(EditPostComposer) && app.composer.body.attrs.post.discussion() === post.discussion()) {
    // If we're already editing a post in the discussion of post we're quoting,
    // insert the mention directly.
    insertMention(post, app.composer, quote);
  } else {
    // The default "Reply" action behavior will only open a new composer if
    // necessary, but it will always be a ReplyComposer, hence the exceptional
    // case above.
    DiscussionControls.replyAction.call(post.discussion()).then((composer) => insertMention(post, composer, quote));
  }
}
