/*
 * This file is part of MathRen.
 *
 * Original Copyright Stichting Flarum (Flarum Foundation), Toby Zerner (toby.zerner@gmail.com).
 * Licensed under the MIT License. See license text at https://github.com/flarum/mentions/blob/master/LICENSE.
 */

export default function cleanDisplayName(user) {
  return user.displayName().replace(/"#[a-z]{0,3}[0-9]+/, '_');
}
