<?php

/*
 * This file is part of MathRen.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace TheTurk\MathRen\Providers;

use Flarum\Foundation\AbstractServiceProvider;
use Flarum\Frontend\Assets;
use Flarum\Frontend\Compiler\Source\SourceCollector;
use TheTurk\MathRen\Helpers\Util;

class AssetProvider extends AbstractServiceProvider
{
    public function boot()
    {
        $util = app(Util::class);

        $copyTeX = boolval($util->get('enable_copy_tex')) ? 'true' : 'false';

        $this->container->resolving(
            'flarum.assets.forum',
            function (Assets $assets) use ($copyTeX) {
                $assets->css(
                    function (SourceCollector $sources) use ($copyTeX) {
                        $sources->addString(
                            function () use ($copyTeX) {
                                return "@config-copy-tex: {$copyTeX};";
                            }
                        );
                    }
                );
            }
        );
    }
}
