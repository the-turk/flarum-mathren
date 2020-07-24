<?php
namespace TheTurk\MathRen\Helpers;

use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class Settings
{
    const EXPRESSION_PLACEHOLDER = '%e%';

    /**
    * All default setting options of this extension.
    *
    * @var array
    */
   protected $defaults = [
       'blockDelimiters' => '[math]'.self::EXPRESSION_PLACEHOLDER.'[/math]',
       'inlineDelimiters' => '[imath]'.self::EXPRESSION_PLACEHOLDER.'[/imath]',
       'decisiveKeywords' => 'ignore',
       'ignoredClasses' => 'mathren-ignore',
       'ignoredTags' => '',
       'outputMode' => 'htmlAndMathml',
       'enableFleqn' => false,
       'enableLeqno' => false,
       'enableColorIsTextColor' => false,
       'enableThrowOnError' => false,
       'errorColor' => '#cc0000',
       'minRuleThickness' => 0.05,
       'maxSize' => 10,
       'macros' => '',
       'maxExpand' => 1000,
       'enableTextEditorButtons' => true,
       'enableCopyTeX' => true
   ];

    protected $prefix = 'the-turk-mathren.';

    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function __get($name)
    {
        return $this->settings->get($this->prefix.$name);
    }

    public function __set($name, $value)
    {
        $this->settings->set($this->prefix.$name, $value);
    }

    public function __isset($name)
    {
        return $this->settings->get($this->prefix.$name) !== null;
    }

    /**
     * @param $name
     * @param null $default
     *
     * @return null
     */
    public function get($name, $default = null)
    {
        return isset($this->{$name}) ? $this->{$name} : $default;
    }

    /**
     * @return string
     */
    public function getPrefix()
    {
        return $this->prefix;
    }

    /**
     * @return string
     */
    public function getDefaults()
    {
        return $this->defaults;
    }

    /**
     * KaTeX options those
     * can be used through this extension.
     *
     * @see https://katex.org/docs/autorender.html
     * @return array
     */
    public function getKatexOptions() {
        return [
            'ignoredTags' => Arr::get($this->getIgnored(), 'tags'),
            'ignoredClasses' => Arr::get($this->getIgnored(), 'classes'),
            'fleqn' => (bool)
                $this->get(
                    'enableFleqn',
                    Arr::get($this->getDefaults(), 'enableFleqn')
                ),
            'leqno' => (bool)
                $this->get(
                    'enableLeqno',
                    Arr::get($this->getDefaults(), 'enableLeqno')
                ),
            'output' =>
                $this->get(
                    'outputMode',
                    Arr::get($this->getDefaults(), 'htmlAndMathml')
                ),
            'throwOnError' => (bool)
                $this->get(
                    'enableThrowOnError',
                    Arr::get($this->getDefaults(), 'enableThrowOnError')
                ),
            'errorColor' =>
                $this->get(
                    'errorColor',
                    Arr::get($this->getDefaults(), 'errorColor')
                ),
            'minRuleThickness' =>
                \floatval(
                    $this->get(
                        'minRuleThickness',
                        Arr::get($this->getDefaults(), 'minRuleThickness')
                    )
                ),
            'maxSize' =>
                \floatval(
                    $this->get(
                        'maxSize',
                        Arr::get($this->getDefaults(), 'maxSize')
                    )
                ),
            'maxExpand' => (int)
                $this->get(
                    'maxExpand',
                    Arr::get($this->getDefaults(), 'maxExpand')
                ),
            'macros' =>
                \json_decode(
                  '{' .
                  $this->get(
                      'macros',
                      Arr::get($this->getDefaults(), 'macros')
                  )
                  . '}'
                ),
            'colorIsTextColor' => (bool)
                $this->get(
                    'enableColorIsTextColor',
                    Arr::get($this->getDefaults(), 'enableColorIsTextColor')
                ),
            'delimiters' => $this->getDelimitersWithOptions(),
        ];
    }

    /**
     * @return array
     */
    public function getClasses()
    {
        return [
            // class for ignored expressions
            // is the first class in the ignored classes list
            'ignore' => Arr::first($this->commaToArray(
                $this->get(
                    // settings key
                    'ignoredClasses',
                    // default value
                    Arr::get($this->getDefaults(), 'ignoredClasses')
                )
            )),
            // class for block expressions
            'block' => 'mathren-block',
            // class for inline expressions
            'inline' => 'mathren-inline'
        ];
    }

    /**
     * @return array
     */
    private function getDelimitersByType()
    {
        // get all of the block delimiters
        $blockDelimiters = $this->commaToArray(
            $this->get(
                'blockDelimiters',
                Arr::get($this->getDefaults(), 'blockDelimiters')
            )
        );

        // get all of the inline delimiters
        $inlineDelimiters = $this->commaToArray(
            $this->get(
                'inlineDelimiters',
                Arr::get($this->getDefaults(), 'inlineDelimiters')
            )
        );

        return [
            'block' => $blockDelimiters,
            'inline' => $inlineDelimiters
        ];
    }

    /**
     * @return array
     */
    private function getIgnored()
    {
        return [
            'tags' => $this->commaToArray(
                $this->get(
                    'ignoredTags',
                    Arr::get($this->getDefaults(), 'ignoredTags')
                )
            ),
            'classes' => $this->commaToArray(
                $this->get(
                    'ignoredClasses',
                    Arr::get($this->getDefaults(), 'ignoredClasses')
                )
            )
        ];
    }

    /**
     * This function creates an array for KaTeX's options.
     * All of our delimiters will be in this array.
     * Its elements are also an array and looks like this:
     * [[left] => '[math]', [right] => '[/math]', [display] => true]
     * ^ they're created by `$this->setOptions()`
     *
     * @return array
     */
    private function getDelimitersWithOptions()
    {
        $delimiters = $this->getDelimitersByType();
        $delimitersWithOptions = [];

        foreach ($delimiters as $key => $delims_r) {
            $isBlock = ($key == 'block' ? true : false);
            foreach ($delims_r as $delim) {
                $delimitersWithOptions = array_merge(
                    $delimitersWithOptions,
                    $this->setOptions($delim, $isBlock)
                );
            }
        }

        return $delimitersWithOptions;
    }

    /**
     * Creates delimiter list with options.
     *
     * @param string $delimiter
     * @param bool $isBlock
     * @return array
     */
    private function setOptions(string $delimiter, bool $isBlock = false)
    {
        $r = [];

        // let d = [mathren]%e%[/mathren]
        // %e% stands for mathematical expressions
        // left delimiter
        $left = Str::before($delimiter, self::EXPRESSION_PLACEHOLDER);
        // right delimiter
        $right = Str::after($delimiter, self::EXPRESSION_PLACEHOLDER);

        array_push(
            $r,
            [
                'left' => $left,
                'right' => $right,
                'display' => $isBlock
            ]
        );

        return $r;
    }

    /**
     * Returns comma seperated list as an array.
     *
     * @param string $list
     * @return array
     */
    private function commaToArray(string $list)
    {
        $r = [];

        if (!empty($list)) {
            $r = array_filter(preg_split('/[\s,]+/', trim($list)));
        }

        // remove duplicated values
        return array_unique($r);
    }
}
