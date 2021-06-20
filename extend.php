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
 * @version    Release: 0.3.2
 * @link       https://github.com/the-turk/flarum-mathren
 */

namespace TheTurk\MathRen;

use Flarum\Extend;
use Flarum\Api\Serializer\ForumSerializer;

return [
    (new Extend\Frontend('forum'))
        ->css(__DIR__ . '/less/forum.less')
        ->js(__DIR__.'/js/dist/forum.js'),
    (new Extend\Frontend('admin'))
        ->css(__DIR__ . '/less/admin.less')
        ->js(__DIR__ . '/js/dist/admin.js'),
    (new Extend\Locales(__DIR__ . '/locale')),
    (new Extend\ApiSerializer(ForumSerializer::class))
		->attributes(LoadSettings::class),
    (new Extend\Formatter)
		->configure(ConfigureTextFormatter::class),
    // Have a custom less variable
    (new Extend\ServiceProvider())
        ->register(Providers\AssetProvider::class),
];
