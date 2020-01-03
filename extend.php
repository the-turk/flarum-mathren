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
 * @version    Release: 0.1.0
 * @link       https://github.com/the-turk/flarum-mathren
 */
 
namespace TheTurk\MathRen;

use Flarum\Extend;
use Flarum\Frontend\Document;
use Illuminate\Contracts\Events\Dispatcher;
use TheTurk\MathRen;
use Flarum\Http\UrlGenerator;

return [
    (new Extend\Frontend('forum'))
		->js(__DIR__.'/js/dist/forum.js')
		//->css(realpath(public_path('assets/extensions')).DIRECTORY_SEPARATOR.'the-turk-mathren'.DIRECTORY_SEPARATOR.'katex.min.css')
		->content(MathRen\Listeners\AddAssets::class),
	(new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js'),
    (new Extend\Locales(__DIR__ . '/locale')),
    function (Dispatcher $events) {
		$events->subscribe(MathRen\Listeners\LoadSettings::class);
		$events->subscribe(MathRen\Listeners\AddCustomTags::class);
    },
];