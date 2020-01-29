<?php
namespace TheTurk\MathRen\Listeners;

use TheTurk\MathRen\Helpers\Settings;
use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Formatter\Event\Configuring;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class ConfigureTextFormatter
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
        $events->listen(Configuring::class, [$this, 'textFormatterConfigurator']);
    }

    /**
     * Configure s9e/TextFormatter
     *
     * Find more info on:
     * https://s9etextformatter.readthedocs.io/Plugins/BBCodes/Add_custom_BBCodes/
     * https://s9etextformatter.readthedocs.io/Plugins/BBCodes/Use_template_parameters/
     * https://s9etextformatter.readthedocs.io/Rules/Tag_rules/
     *
     * @param Configuring $event
     */
    public function textFormatterConfigurator(Configuring $event)
    {
        $bbDelimiters = Arr::get($this->settings->getDelimitersWithOptions(), 'bbcodes');

        if (!empty($bbDelimiters)) {
            // to wrap expressions with class attributes
            $classes = $this->settings->getClasses();

            // to ignore expressions
            // ToDo: sanitize it or check it at the settings page
            $decisiveKeywords = implode(',', $this->settings->getDecisiveKeywords());

            foreach ($bbDelimiters as $d) {
                // we will use opening tags
                // [mathren] => mathren, for example
                // ToDo: check it at the settings page
                $newTag = Str::after(Str::before($d['left'], ']'), '[');

                $display = $d['display'] === true ? 'block' : 'inline';

                // add custom BBCode
                $event->configurator->BBCodes->addCustom(
                    '['.$newTag.'={CHOICE='.$decisiveKeywords.';optional}]{TEXT}'.$d['right'],
                    '<span>
                        <xsl:choose>
                         <xsl:when test="@'.$newTag.'">
                          <xsl:attribute name="class">'.$classes[$display].' '.$classes['ignore'].'</xsl:attribute>
                         </xsl:when>
                         <xsl:otherwise>
                          <xsl:attribute name="class">'.$classes[$display].'</xsl:attribute>
                         </xsl:otherwise>
                        </xsl:choose>
                        '.$d['left'].'<xsl:apply-templates/>'.$d['right'].'
                    </span>'
                );

                // this dark magic allowing us
                // to ignore Markdown and BBCode parsers
                $tag = $event->configurator->tags[$newTag];
                $tag->rules->ignoreTags();
                $tag->rules->disableAutoLineBreaks();
            }
        }
    }
}
