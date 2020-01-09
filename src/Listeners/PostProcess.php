<?php


namespace TheTurk\MathRen\Listeners;

use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Post\Event\Saving;


class PostProcess
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @var string $settingsPrefix
     */
    public $settingsPrefix = 'the-turk-mathren.';

    /**
     * LoadSettingsFromDatabase constructor
     *
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    /**
     * Subscribes to the Flarum events.
     *
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Saving::class, [$this, 'findExpressions']);
    }

    /**
     * This function searches for LaTeX expressions, delimited by $ and $$.
     * It then adds backticks (``) around the expression, so that is does not
     * get modifed by Markdown or BBcode.
     *
     * @param Saving $event
     */
    public function findExpressions(Saving $event)
    {
        if ($this->settings->get($this->settingsPrefix . 'enableCode', true)) {
            // get the text from the post, comment or answer
            $text = $event->post->content;
            // this is the regular expresssion used. To check what it does use regex101.com
            $regex = '/(?<!\\\\)(?: ((?<!\\$)(?<!\\`)(?<!\\`\\n)\\${1,2}(?!\\n\\`)(?!\\`)(?!\\$)))\\n?(.*(?R)?.*)(?<!\\\\)(?: ((?<!\\$)(?<!\\`)(?<!\\`\\n)\\1(?!\\n\\`)(?!\\`)(?!\\$)))/mxU';
            // run the replace and edit the post content
            $event->post->content = preg_replace($regex, '`\\1\\2\\3`', $text);
        }
    }
}