<?php

/**
 * MathRen Extension for Flarum.
 *
 * LICENSE: For the full copyright and license information,
 * please view the LICENSE.md file that was distributed
 * with this source code.
 *
 * @package    the-turk/flarum-mathren
 * @author     Hasan Özbey <hasanoozbey@gmail.com>
 * @copyright  2020
 * @license    The MIT License
 * @version    Release: 0.2.0
 * @link       https://github.com/the-turk/flarum-mathren
 */

namespace TheTurk\MathRen;

use Flarum\Extend;
use Illuminate\Contracts\Events\Dispatcher;
use TheTurk\MathRen;

return [
    (new Extend\Frontend('forum'))
        ->css(__DIR__ . '/resources/less/forum/textEditor.less')
        ->js(__DIR__.'/js/dist/forum.js')
        ->content(MathRen\Listeners\AddAssets::class),
    (new Extend\Frontend('admin'))
        ->css(__DIR__ . '/resources/less/admin/settingsPage.less')
        ->js(__DIR__ . '/js/dist/admin.js'),
    (new Extend\Locales(__DIR__ . '/locale')),
    function (Dispatcher $events) {
        $events->subscribe(MathRen\Listeners\LoadSettings::class);
        $events->subscribe(MathRen\Listeners\ConfigureTextFormatter::class);
        $events->subscribe(MathRen\Listeners\InterruptPostProcess::class);
    },
];
