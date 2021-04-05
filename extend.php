<?php

/**
 * MathRen Extension for Flarum.
 *
 * LICENSE: For the full copyright and license information,
 * please view the LICENSE.md file that was distributed
 * with this source code.
 *
 * @package    the-turk/flarum-mathren
 * @author     weizixuan110@foxmail.com
 * @copyright  2021
 * @license    The MIT License
 * @version    Release: 0.4.0
 * @link       https://github.com/StarsRivers/flarum-mathren
 */

namespace TheTurk\MathRen;

use Flarum\Extend;
use Flarum\Foundation\Application;
use Flarum\Frontend\Assets;
use Flarum\Frontend\Compiler\Source\SourceCollector;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Support\Arr;
use TheTurk\MathRen\Helpers\Settings;

return [
    (new Extend\Frontend('forum'))
        ->css(__DIR__ . '/less/forum.less')
        ->js(__DIR__.'/js/dist/forum.js'),
    (new Extend\Frontend('admin'))
        ->css(__DIR__ . '/less/admin.less')
        ->js(__DIR__ . '/js/dist/admin.js'),
    (new Extend\Locales(__DIR__ . '/locale')),
    function (Dispatcher $events) {
        $events->subscribe(Listeners\LoadSettings::class);
        $events->subscribe(Listeners\ConfigureTextFormatter::class);
    },
    // Have a custom less variable
    function (Application $app) {
        $settings = app(Settings::class);
        $copyTeX = (bool) $settings->get(
            'enableCopyTeX',
            Arr::get($settings->getDefaults(), 'enableCopyTeX')
        ) ? 'true' : 'false';

        $app->resolving('flarum.assets.forum', function (Assets $assets) use ($copyTeX) {
            $assets->css(function (SourceCollector $sources) use ($copyTeX) {
                $sources->addString(function () use ($copyTeX) {
                    return "@config-copy-tex: {$copyTeX};";
                });
            });
        });
    }
];
