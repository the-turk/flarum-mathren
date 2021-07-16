<?php

/*
 * This file is part of MathRen.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace TheTurk\MathRen;

use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->css(__DIR__.'/less/forum.less')
        ->js(__DIR__.'/js/dist/forum.js'),

    (new Extend\Frontend('admin'))
        ->css(__DIR__.'/less/admin.less')
        ->js(__DIR__.'/js/dist/admin.js'),

    (new Extend\Locales(__DIR__.'/locale')),

    (new Extend\ApiSerializer(ForumSerializer::class))
        ->attributes(LoadSettings::class),

    (new Extend\Formatter())
        ->configure(ConfigureTextFormatter::class),

    // Provides `@config-copy-tex` less variable
    (new Extend\ServiceProvider())
        ->register(Providers\AssetProvider::class),
];
