<?php
namespace TheTurk\MathRen;

use TheTurk\MathRen\Helpers\Settings;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use s9e\TextFormatter\Configurator;

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
     * Configure s9e/TextFormatter
     *
     * Find more info in:
     * https://s9etextformatter.readthedocs.io/Plugins/BBCodes/Add_custom_BBCodes/
     * https://s9etextformatter.readthedocs.io/Plugins/BBCodes/Use_template_parameters/
     * https://s9etextformatter.readthedocs.io/Rules/Tag_rules/
     *
     * @param Configurator $config
     */
    public function __invoke(Configurator $config)
    {
        $katexOptions = $this->settings->getKatexOptions();

        // all of our delimiters
        $delimiters = Arr::get($katexOptions, 'delimiters');

        // to wrap expressions with class attributes
        $classes = $this->settings->getClasses();

        // to ignore expressions
        $decisiveKeywords = $this->settings->get(
            'decisiveKeywords',
            Arr::get($this->settings->getDefaults(), 'decisiveKeywords')
        );

        foreach ($delimiters as $delim) {
            // we will use opening tags
            // [mathren] => mathren, for example
            $newTag = Str::after(Str::before($delim['left'], ']'), '[');

            // is this a block or an inline expression?
            $display = $delim['display'] === true ? 'block' : 'inline';

            /**
             * Add custom BBCode
             *
             * I use some kind of workaround here, so let me clear it for you.
             *
             * First of all we need to integrate this extension with Markdown
             * and it's not an easy task when it comes to mathematical equations.
             * So I've found this TextFormatter's `ignoreTags` method and its
             * allows us to ignore Markdown and BBCode parsing between some
             * special BBCode tags ([math][/math] for example). But the problem is,
             * when we write [math][/math] into the text editor, it'll be automatically
             * removed from the post by the TextFormatter.
             * (still available in its XML form though, but it is useless for our case)
             * We need this exact string `[math]x^2[/math]` in the post so
             * the KaTeX's auto-render plugin can render them.
             *
             * What I'm doing here is to tell TextFormatter to replace `[math][/math]`
             * with `[math][/math]` and do not parse any Markdown or BBCode inside it.
             * So our tags will be reserved and auto-render plugin can easily find and
             * render them while searching through the post.
             *
             * Another solution might be replacing our BBCodes with some
             * HTML (i.e. `<script type="math/tex"></script>`) and using
             * the KaTeX's Custom Script Type Extension but it is not well-written
             * and doesn't allows us to use any option that the KaTeX provides.
             * Also, it's pretty much the same thing - the same find and render operation.
             */
            $config->BBCodes->addCustom(
                '['.$newTag.'={CHOICE='.$decisiveKeywords.';optional}]{TEXT}'.$delim['right'],
                '<span>
                    <xsl:choose>
                       <xsl:when test="@'.$newTag.'">
                          <xsl:attribute name="class">
                              '.$classes[$display].' '.$classes['ignore'].'
                          </xsl:attribute>
                       </xsl:when>
                       <xsl:otherwise>
                          <xsl:attribute name="class">
                              '.$classes[$display].'
                          </xsl:attribute>
                       </xsl:otherwise>
                    </xsl:choose>
                    '.$delim['left'].'<xsl:apply-templates/>'.$delim['right'].'
                </span>'
            );

            $tag = $config->tags[$newTag];
            $tag->rules->ignoreTags(); // ignores Markdown and BBCode parsers
            $tag->rules->disableAutoLineBreaks(); // ignores line breaks
        }
    }
}
