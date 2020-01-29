<?php
namespace TheTurk\MathRen\Listeners;

use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\ForumSerializer;
use Illuminate\Contracts\Events\Dispatcher;
use TheTurk\MathRen\Helpers\Settings;
use Illuminate\Support\Arr;

class LoadSettings
{
    /**
     * @var Settings
     */
    protected $settings;

    /**
     * Gets the settings variable. Called on Object creation.
     *
     * @param Settings $settings
     */
    public function __construct(Settings $settings)
    {
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
            // get all delimiters with options
            $delimitersWithOptions = $this->settings->getDelimitersWithOptions();

            // get ignored tags as an array
            $ignored = $this->settings->getIgnored();

            // Set macro list as an array
            $macros = $this->settings->get(
                'macros',
                []
            );

            $macroList = [];
            if (!empty($macros)) {
                if (is_array($macros)) {
                    $macroList = $macros;
                } else {
                    $macroList = $this->settings->macroListAsAnArray($macros);
                }
            }

            $event->attributes += [
                'mathRenMainBlockDelimiter' => (array)
                    $this->settings->getMainDelimiter($delimitersWithOptions, true),
                'mathRenMainInlineDelimiter' => (array)
                    $this->settings->getMainDelimiter($delimitersWithOptions),
                'mathRenDelimiters' => (array)
                    Arr::get($delimitersWithOptions, 'bbcodes'),
                'mathRenIgnoredTags' => (array)
                    $ignored['tags'],
                'mathRenIgnoredClasses' => (array)
                    $ignored['classes'],
                'mathRenOutputMode' => (string)
                    $this->settings->get(
                        'outputMode',
                        Arr::get($this->settings->getDefaults(), 'htmlAndMathml')
                    ),
                'mathRenEnableFleqn' => (bool)
                    $this->settings->get(
                        'enableFleqn',
                        Arr::get($this->settings->getDefaults(), 'enableFleqn')
                    ),
                'mathRenEnableLeqno' => (bool)
                    $this->settings->get(
                        'enableLeqno',
                        Arr::get($this->settings->getDefaults(), 'enableLeqno')
                    ),
                'mathRenEnableColorIsTextColor' => (bool)
                    $this->settings->get(
                        'enableColorIsTextColor',
                        Arr::get($this->settings->getDefaults(), 'enableColorIsTextColor')
                    ),
                'mathRenEnableThrowOnError' => (bool)
                    $this->settings->get(
                        'enableThrowOnError',
                        Arr::get($this->settings->getDefaults(), 'enableThrowOnError')
                    ),
                'mathRenErrorColor' => (string)
                    $this->settings->get(
                        'errorColor',
                        Arr::get($this->settings->getDefaults(), 'errorColor')
                    ),
                'mathRenMinRuleThickness' => (float)
                    $this->sanitizeFloat(
                        $this->settings->get(
                            'minRuleThickness',
                            Arr::get($this->settings->getDefaults(), 'minRuleThickness')
                        )
                    ),
                'mathRenMaxSize' => (float)
                    $this->sanitizeFloat(
                        $this->settings->get(
                            'maxSize',
                            Arr::get($this->settings->getDefaults(), 'maxSize')
                        )
                    ),
                'mathRenMaxExpand' => (int)
                    $this->settings->get(
                        'maxExpand',
                        Arr::get($this->settings->getDefaults(), 'maxExpand')
                    ),
                'mathRenMacros' => (string)
                    json_encode((array)$macroList),
                'mathRenEnableTextEditorButtons' => (bool)
                    $this->settings->get(
                        'enableTextEditorButtons',
                        Arr::get($this->settings->getDefaults(), 'enableTextEditorButtons')
                    ),
            ];
        }
    }

    /**
     * @param float $number
     * @return float
     */
    public function sanitizeFloat(float $number) {
        return floatval(preg_replace('/[^-0-9\.]/', '', $number));
    }
}
