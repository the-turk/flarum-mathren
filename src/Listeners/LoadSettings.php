<?php
namespace TheTurk\MathRen\Listeners;

use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Extension\ExtensionManager;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Support\Arr;
use TheTurk\MathRen\Helpers\Settings;

class LoadSettings
{
    /**
     * @var Settings
     */
    protected $settings;

    /**
     * @var ExtensionManager
     */
    protected $extensions;

    /**
     * Gets the settings variable. Called on Object creation.
     *
     * @param ExtensionManager $extensions
     * @param Settings         $settings
     */
    public function __construct(ExtensionManager $extensions, Settings $settings)
    {
        $this->extensions = $extensions;
        $this->settings = $settings;
    }

    /**
     * Subscribes to the Flarum events
     *
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Serializing::class, [$this, 'prepareApiAttributes']);
    }

    /**
     * Get the setting values from the database
     * and make them available in the forum
     *
     * @param Serializing $event
     */
    public function prepareApiAttributes(Serializing $event)
    {
        if ($event->isSerializer(ForumSerializer::class)) {
            $katexOptions = $this->settings->getKatexOptions();

            // all of our delimiters
            $delimiters = Arr::get($katexOptions, 'delimiters');

            $event->attributes += [
                'mathRenKatexOptions' => $katexOptions,
                'mathRenMainBlockDelimiter' =>
                    Arr::first(
                        $delimiters,
                        function ($val) {
                            return $val['display'] === true;
                        }
                    ),
                'mathRenMainInlineDelimiter' =>
                    Arr::first(
                        $delimiters,
                        function ($val) {
                            return $val['display'] === false;
                        }
                    ),
                'mathRenEnableTextEditorButtons' => (bool)
                    $this->settings->get(
                        'enableTextEditorButtons',
                        Arr::get($this->settings->getDefaults(), 'enableTextEditorButtons')
                    ),
                'mathRenEnableCopyTeX' => (bool)
                    $this->settings->get(
                        'enableCopyTeX',
                        Arr::get($this->settings->getDefaults(), 'enableCopyTeX')
                    ),
                'mathRenAddQuoteButton' => $this->extensions->isEnabled('flarum-mentions'),
            ];
        }
    }
}
