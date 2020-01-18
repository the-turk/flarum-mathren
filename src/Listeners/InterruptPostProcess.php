<?php
namespace TheTurk\MathRen\Listeners;

use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Post\Event\Saving as PostSaving;
use TheTurk\MathRen\Helpers\ArrayHelpers;
use TheTurk\MathRen\Helpers\ExpressionWrapper;

class InterruptPostProcess
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
        $events->listen(PostSaving::class, [$this, 'findExpressions']);
    }

    /**
     * Find mathematical expressions
     *
     * @param PostSaving $event
     */
    public function findExpressions(PostSaving $event)
    {
        // get the text from the post, comment or answer
        $text = $event->post->content;

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
             )
        );

        // get all of the inline delimiters
        $inlineDelimiters = ArrayHelpers::commaToArray(
            $mainInlineDelimiter.','.
             $this->settings->get(
                 // settings key
                 $this->settingsPrefix.'aliasInlineDelimiters'
             )
        );

        // BBCode delimiters for block expressions
        $bbBlockDelimiters = ArrayHelpers::bbCodeMatcher($blockDelimiters);

        // BBCode delimiters for inline expressions
        $bbInlineDelimiters = ArrayHelpers::bbCodeMatcher($inlineDelimiters);

        // get all bbcode delimiters with seperated delimiters as an array
        $bbDelimiters = ArrayHelpers::delimiterList(
            $bbBlockDelimiters,
            $bbInlineDelimiters
        );

        // these are additional delimiters which are not BBCodes
        $specialBlockDelimiters = array_diff($blockDelimiters, $bbBlockDelimiters);
        $specialInlineDelimiters = array_diff($inlineDelimiters, $bbInlineDelimiters);

        // get all special delimiters with seperated delimiters as an array
        $specialDelimiters = ArrayHelpers::delimiterList(
            // \[…\] must come last in these arrays. Otherwise, wrapMathInText
            // function will search for \[ before it searches for $$ or \(
            // That makes it susceptible to finding a \\[0.3em] row delimiter and
            // treating it as if it were the start of a KaTeX math zone.
            $specialBlockDelimiters,
            $specialInlineDelimiters
        );

        if (!empty($specialDelimiters)) {
            // get main delimiters with seperated delimiters as an array
            $mainDelimiterList = ArrayHelpers::delimiterList(
                [$mainBlockDelimiter],
                [$mainInlineDelimiter]
            );

            // to ignore expressions
            $decisiveKeywords = ArrayHelpers::commaToArray($this->settings->get(
                // settings key
                $this->settingsPrefix.'decisiveKeywords',
                // default value
                'ignore'
            ));

            // we must include bbcodes with decisive keywords
            // to work with our expression finder function
            $bbDecisiveDelimiters = $bbDelimiters;
            foreach($decisiveKeywords as $d) {
                foreach($bbDecisiveDelimiters as $k => $b) {
                    $bbDecisiveDelimiters[$k]['left'] = rtrim($b['left'], ']').'='.$d.']';
                }
            }

            $event->post->content = ExpressionWrapper::wrapMathInText(
                $text,
                array_merge(
                    // this arrangement is everything
                    $bbDecisiveDelimiters,
                    $bbDelimiters,
                    $specialDelimiters
                ),
                $mainDelimiterList,
                $decisiveKeywords
            );
        } else {
            // do nothing if there are only BBCodes
            // in delimiters list because s9e\TextFormatter
            // will handle that expressions
            $event->post->content = $text;
        }
    }
}
