<?php
namespace TheTurk\MathRen\Listeners;

use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Formatter\Event\Configuring;
use TheTurk\MathRen\Helpers\ArrayHelpers;

class ConfigureTextFormatter
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
        $events->listen(Configuring::class, [$this, 'textFormatterConfigurator']);
    }

    /**
     * Configure s9e/TextFormatter
     *
     * Find more info on:
     * https://s9etextformatter.readthedocs.io/Plugins/BBCodes/Add_custom_BBCodes/
     * https://s9etextformatter.readthedocs.io/Plugins/BBCodes/Use_template_parameters/
     * https://s9etextformatter.readthedocs.io/Rules/Tag_rules/
     * https://s9etextformatter.readthedocs.io/Plugins/Preg/Synopsis/
     *
     * @param Configuring $event
     */
    public function textFormatterConfigurator(Configuring $event)
    {
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

        // get all of the BBCode delimiters
        $bbDelimiters = array_merge(
            $bbBlockDelimiters,
            $bbInlineDelimiters
        );

        if (!empty($bbDelimiters)) {
            // to wrap expressions with class attributes
            $classes = [
                // class for ignored expressions
                // is the first class in the ignored classes list
                'ignore' => ArrayHelpers::commaToArray(
                    $this->settings->get(
                        // settings key
                        $this->settingsPrefix.'ignoredClasses',
                        // default value
                        'mathren-ignore'
                    )
                )[0],
                // class for block expressions
                'block' => $this->settings->get(
                                // settings key
                                $this->settingsPrefix.'blockMathClass',
                                // default value
                                'mathren-block'
                ),
                // class for inline expressions
                'inline' => $this->settings->get(
                                // settings key
                                $this->settingsPrefix.'inlineMathClass',
                                // default value
                                'mathren-inline'
                )
            ];

            // to ignore expressions
            // ToDo: sanitize it or check it at the settings page
            $decisiveKeywordsList = $this->settings->get(
                // settings key
                $this->settingsPrefix.'decisiveKeywords',
                // default value
                'ignore'
            );

            $i = 1;
            foreach ($bbDelimiters as $d) {
                // let d = [mathren]%e%[/mathren]
                // %e% stands for mathematical expressions
                $s = explode('%e%', $d);

                // match everything between brackets
                // on opening tag for BBCode
                preg_match('/\[(.*?)\]/', $s[0], $m);

                // Allow new BBCode
                array_push(
                    $event->configurator->BBCodes->bbcodeMonkey->allowedFilters,
                    // we will use opening tag for both sides
                    // of delimiters just to be sure they're equal
                    // ToDo: check it at the settings page
                    $m[1] // mathren, for example
                );

                // if the loop count is bigger than the block delimiters count,
                // this means we're in inline delimiters
                // because we've merged it first before
                $isBlock = (($i > count($bbBlockDelimiters)) ? false : true);

                $className = $isBlock ? $classes['block'] : $classes['inline'];

                // add custom BBCode
                $event->configurator->BBCodes->addCustom(
                    '['.$m[1].'={CHOICE='.$decisiveKeywordsList.';optional}]{TEXT}[/'.$m[1].']',
                    '<span>
    					<xsl:choose>
    					 <xsl:when test="@'.$m[1].'">
    					  <xsl:attribute name="class">'.$className.' '.$classes['ignore'].'</xsl:attribute>
    					 </xsl:when>
    					 <xsl:otherwise>
    					  <xsl:attribute name="class">'.$className.'</xsl:attribute>
    					 </xsl:otherwise>
	                    </xsl:choose>
        				['.$m[1].']<xsl:apply-templates/>[/'.$m[1].']
    				</span>'
                );

                // this dark magic allowing us
                // to ignore Markdown and BBCode parsers
                $tag = $event->configurator->tags[$m[1]];
                $tag->rules->ignoreTags();

                $i++;
            }
        }
    }
}
