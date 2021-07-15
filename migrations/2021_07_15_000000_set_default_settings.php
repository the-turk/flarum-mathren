<?php

/*
 * This file is part of MathRen.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

use Flarum\Database\Migration;

return Migration::addSettings(
    [
        'the-turk-mathren.alias_block_delimiters' => '$$%e%$$,₺₺%e%₺₺',
        'the-turk-mathren.alias_inline_delimiters' => '\\(%e%\\)',
        'the-turk-mathren.block_delimiters' => '[math]%e%[/math]',
        'the-turk-mathren.color_is_text_color' => '0',
        'the-turk-mathren.enable_copy_tex' => '1',
        'the-turk-mathren.enable_fleqn' => '0',
        'the-turk-mathren.enable_leqno' => '0',
        'the-turk-mathren.enable_editor_buttons' => '1',
        'the-turk-mathren.throw_on_error' => '0',
        'the-turk-mathren.error_color' => '#cc0000',
        'the-turk-mathren.inline_delimiters' => '[imath]%e%[/imath]',
        'the-turk-mathren.max_expand' => '1000',
        'the-turk-mathren.max_size' => '10',
        'the-turk-mathren.min_rule_thickness' => '0.05',
        'the-turk-mathren.output_mode' => 'htmlAndMathml',
        'the-turk-mathren.aliases_as_primary' => '1',
    ]
);