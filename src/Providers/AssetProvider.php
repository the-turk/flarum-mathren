<?php

namespace TheTurk\MathRen\Providers;

use Flarum\Foundation\AbstractServiceProvider;
use Flarum\Frontend\Assets;
use Flarum\Frontend\Compiler\Source\SourceCollector;
use Illuminate\Support\Arr;
use TheTurk\MathRen\Helpers\Settings;

class AssetProvider extends AbstractServiceProvider
{
    public function boot()
    {
        $settings = app(Settings::class);
        $copyTeX = (bool) $settings->get(
            'enableCopyTeX',
            Arr::get($settings->getDefaults(), 'enableCopyTeX')
        ) ? 'true' : 'false';

        $this->container->resolving('flarum.assets.forum', function (Assets $assets) use ($copyTeX) {
            $assets->css(function (SourceCollector $sources) use ($copyTeX) {
                $sources->addString(function () use ($copyTeX) {
                    return "@config-copy-tex: {$copyTeX};";
                });
            });
        });
    }
}