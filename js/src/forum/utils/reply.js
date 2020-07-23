/**
 * Copied from:
 * https://github.com/flarum/mentions/blob/master/js/src/forum/utils/reply.js
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2019 Stichting Flarum (Flarum Foundation)
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

function insertMention(post, component, quote) {
  const user = post.user();
  const mention = '@' + (user ? user.username() : post.number()) + '#' + post.id() + ' ';

  // If the composer is empty, then assume we're starting a new reply.
  // In which case we don't want the user to have to confirm if they
  // close the composer straight away.
  if (!component.content()) {
    component.props.originalContent = mention;
  }

  const cursorPosition = component.editor.getSelectionRange()[0];
  const preceding = component.editor.value().slice(0, cursorPosition);
  const precedingNewlines = preceding.length == 0 ? 0 : 3 - preceding.match(/(\n{0,2})$/)[0].length;

  component.editor.insertAtCursor(
    Array(precedingNewlines).join('\n') + (quote ? '> ' + mention + quote.trim().replace(/\n/g, '\n> ') + '\n\n' : mention) // Insert up to two newlines, depending on preceding whitespace
  );
}

export default function reply(post, quote) {
  const component = app.composer.component;
  if (component && component.props.post && component.props.post.discussion() === post.discussion()) {
    insertMention(post, component, quote);
  } else {
    DiscussionControls.replyAction.call(post.discussion()).then((newComponent) => insertMention(post, newComponent, quote));
  }
}
