<?php
namespace TheTurk\MathRen\Listeners;

use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;
use TheTurk\MathRen\Helpers\ArrayHelpers;

class LoadSettings
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
            // main delimiters
            $mainBlockDelimiter = $this->settings->get(
                // settings key
                $this->settingsPrefix.'mainBlockDelimiter',
                 // default value
                 '[math]%e%[/math]'
            );
            $mainInlineDelimiter = $this->settings->get(
                // settings key
                $this->settingsPrefix.'mainInlineDelimiter',
                 // default value
                 '[imath]%e%[/imath]'
            );

            // get all of the block delimiters
            $blockDelimiters = ArrayHelpers::commaToArray(
                $mainBlockDelimiter.','.
                 $this->settings->get(
                     // settings key
                     $this->settingsPrefix.'aliasBlockDelimiters'
                 ),
            );

            // get all of the inline delimiters
            $inlineDelimiters = ArrayHelpers::commaToArray(
                $mainInlineDelimiter.','.
                 $this->settings->get(
                     // settings key
                     $this->settingsPrefix.'aliasInlineDelimiters'
                 ),
            );

            // BBCode delimiters for block expressions
            $bbBlockDelimiters = ArrayHelpers::bbCodeMatcher($blockDelimiters);

            // BBCode delimiters for inline expressions
            $bbInlineDelimiters = ArrayHelpers::bbCodeMatcher($inlineDelimiters);

            // get all of the BBCode delimiters
            $bbDelimiters = ArrayHelpers::delimiterList(
                $bbBlockDelimiters,
                $bbInlineDelimiters
            );

            // this is the default decisive keyword
            // which is the first keyword in the decisive keywords list
            $decisiveKeyword = ArrayHelpers::commaToArray(
                $this->settings->get(
                    // settings key
                    $this->settingsPrefix.'decisiveKeywords',
                    // default value
                    'ignore'
                )
            )[0];

            // get ignored tags as an array
            $ignoredTags = ArrayHelpers::commaToArray(
                $this->settings->get(
                    // settings key
                    $this->settingsPrefix.'ignoredTags',
                    // default value
                    ''
                )
            );

            // get ignored classes as an array
            $ignoredClasses = ArrayHelpers::commaToArray(
                $this->settings->get(
                    // settings key
                    $this->settingsPrefix.'ignoredClasses',
                    // default value
                    'mathren-ignore'
                )
            );

            // Set macro list as an array
            $macros = $this->settings->get(
                $this->settingsPrefix.'macros',
                []
            );

            $macroList = [];
            if (!empty($macros)) {
                if (is_array($macros)) {
                    $macroList = $macros;
                } else {
                    $macroList = ArrayHelpers::macroListAsAnArray($macros);
                }
            }

            $event->attributes += [
                'mathRenMainBlockDelimiter' => (string)$mainBlockDelimiter,
                'mathRenMainInlineDelimiter' => (string)$mainInlineDelimiter,
                'mathRenDelimiters' => (array)$bbDelimiters,
                'mathRenDecisiveKeyword' => (string)$decisiveKeyword,
                'mathRenIgnoredTags' => (array)$ignoredTags,
                'mathRenIgnoredClasses' => (array)$ignoredClasses,
                'mathRenOutputMode' => (string)$this->settings->get($this->settingsPrefix.'outputMode', 'htmlAndMathml'),
                'mathRenEnableFleqn' => (bool)$this->settings->get($this->settingsPrefix.'enableFleqn', false),
                'mathRenEnableLeqno' => (bool)$this->settings->get($this->settingsPrefix.'enableLeqno', false),
                'mathRenEnableColorIsTextColor' => (bool)$this->settings->get($this->settingsPrefix.'enableColorIsTextColor', false),
                'mathRenEnableThrowOnError' => (bool)$this->settings->get($this->settingsPrefix.'enableThrowOnError', false),
                'mathRenErrorColor' => (string)$this->settings->get($this->settingsPrefix.'errorColor', '#cc0000'),
                'mathRenMinRuleThickness' => floatval(preg_replace('/[^-0-9\.]/', '', $this->settings->get($this->settingsPrefix.'minRuleThickness', 0.05))),
                'mathRenMaxSize' => floatval(preg_replace('/[^-0-9\.]/', '', $this->settings->get($this->settingsPrefix.'maxSize', 10))),
                'mathRenMaxExpand' => (int)$this->settings->get($this->settingsPrefix.'maxExpand', 1000),
                'mathRenMacros' => json_encode((array)$macroList),
                'mathRenEnableTextEditorButtons' => (bool)$this->settings->get($this->settingsPrefix.'enableTextEditorButtons', false),
            ];
        }
    }
}
