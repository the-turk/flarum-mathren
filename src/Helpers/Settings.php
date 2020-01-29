<?php
namespace TheTurk\MathRen\Helpers;

use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class Settings
{
    const EXPRESSION_PLACEHOLDER = '%e%';

    // opening and closing symbols for
    // decisive keywords
    // it's easier to control them from here
    const DECISIVE_OPENING = '{';
    const DECISIVE_CLOSING = '}';

    /**
    * All default setting options of this extension.
    *
    * @var array
    */
   protected $defaults = [
       'mainBlockDelimiter' => '[math]'.self::EXPRESSION_PLACEHOLDER.'[/math]',
       'mainInlineDelimiter' => '[imath]'.self::EXPRESSION_PLACEHOLDER.'[/imath]',
       'decisiveKeywords' => 'ignore',
       'ignoredClasses' => 'mathren-ignore',
       'blockMathClass' => 'mathren-block',
       'inlineMathClass' => 'mathren-inline',
       'outputMode' => 'htmlAndMathml',
       'enableFleqn' => false,
       'enableLeqno' => false,
       'enableColorIsTextColor' => false,
       'enableThrowOnError' => false,
       'errorColor' => '#cc0000',
       'minRuleThickness' => 0.05,
       'maxSize' => 10,
       'maxExpand' => 1000,
       'enableTextEditorButtons' => false
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
        return $this->{$name} ? $this->{$name} : $default;
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
     * @return array
     */
    public function getDelimitersByType()
    {
        // main delimiters for block expressions
        $mainBlockDelimiter = $this->get(
            // settings key
            'mainBlockDelimiter',
            // default value
            Arr::get($this->getDefaults(), 'mainBlockDelimiter')
        );

        // main delimiters for inline expressions
        $mainInlineDelimiter = $this->get(
            // settings key
            'mainInlineDelimiter',
            // default value
            Arr::get($this->getDefaults(), 'mainInlineDelimiter')
        );

        // get all of the block delimiters
        $blockDelimiters = $this->commaToArray(
            $mainBlockDelimiter.','.
             $this->get(
                 // settings key
                 'aliasBlockDelimiters'
             )
        );

        // get all of the inline delimiters
        $inlineDelimiters = $this->commaToArray(
            $mainInlineDelimiter.','.
             $this->get(
                 // settings key
                 'aliasInlineDelimiters'
             )
        );

        // BBCode delimiters for block expressions
        $bbBlockDelimiters = $this->bbCodeMatcher($blockDelimiters);

        // BBCode delimiters for inline expressions
        $bbInlineDelimiters = $this->bbCodeMatcher($inlineDelimiters);

        // Special delimiters for block expressions
        $specialBlockDelimiters = array_diff(
            $blockDelimiters,
            $bbBlockDelimiters
        );

        // Special delimiters for inline expressions
        $specialInlineDelimiters = array_diff(
            $inlineDelimiters,
            $bbInlineDelimiters
        );

        return [
            'all' => [
                'block' => $blockDelimiters,
                'inline' => $inlineDelimiters
            ],
            'main' => [
                'block' => Arr::wrap($mainBlockDelimiter),
                'inline' => Arr::wrap($mainInlineDelimiter)
            ],
            'specials' => [
                'block' => $specialBlockDelimiters,
                'inline' => $specialInlineDelimiters
            ],
            'bbcodes' => [
                'block' => $bbBlockDelimiters,
                'inline' => $bbInlineDelimiters
            ],
        ];
    }

    /**
     * @return array
     */
    public function getDecisiveKeywords()
    {
        return $this->commaToArray($this->get(
            // settings key
            'decisiveKeywords',
            // default value
            Arr::get($this->getDefaults(), 'decisiveKeywords')
        ));
    }

    /**
     * @return array
     */
    public function getIgnored()
    {
        return [
            'tags' => $this->commaToArray($this->get(
                // settings key
                'ignoredTags',
                // dafault value
                ''
            )),
            'classes' => $this->commaToArray($this->get(
                // settings key
                'ignoredClasses',
                // default value
                Arr::get($this->getDefaults(), 'ignoredClasses')
            ))
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
            'block' => $this->get(
                // settings key
                'blockMathClass',
                // default value
                Arr::get($this->getDefaults(), 'blockMathClass')
            ),
            // class for inline expressions
            'inline' => $this->get(
                // settings key
                'inlineMathClass',
                // default value
                Arr::get($this->getDefaults(), 'inlineMathClass')
            )
        ];
    }

    /**
     * @return array
     */
    public function getDelimitersWithOptions()
    {
        $delimiters = $this->getDelimitersByType();
        $delimitersWithOptions = [];
        $hasSpecial = false;

        foreach ($delimiters as $a => $b) {
            $delimitersWithOptions[$a] = [];
            foreach ($delimiters[$a] as $c => $d) {
                $isBlock = ($c == 'block' ? true : false);
                if (is_array($d)) {
                    // \[…\] must come last in the special delimiters array. Otherwise, wrapMathInText
                    // function will search for \[ before it searches for $$ or \(
                    // That makes it susceptible to finding a \\[0.3em] row delimiter and
                    // treating it as if it were the start of a KaTeX math zone.
                    if($a === 'specials' && $hasSpecial === false) {
                        $specialDelimiter = Arr::where($d, function ($val, $key) {
                            return $val === '\['.self::EXPRESSION_PLACEHOLDER.'\]';
                        });
                        if(!empty($specialDelimiter)) {
                            $d = Arr::except($d, key($specialDelimiter));
                            $specialDelimiter = Arr::first(
                                $this->setOptions($specialDelimiter, $isBlock)
                            );
                            $hasSpecial = true;
                        }
                    }

                    if($hasSpecial === true && $a !== 'specials') {
                        array_push(
                            $delimitersWithOptions['specials'],
                            [
                                'left' => '\[',
                                'right' => '\]',
                                'display' => $specialDelimiter['display']
                            ]
                        );

                        $hasSpecial = false;
                    }

                    if(empty($delimitersWithOptions[$a])) {
                        $delimitersWithOptions[$a] = $this->setOptions($d, $isBlock);
                    } else {
                        $delimitersWithOptions[$a] = array_merge(
                            $delimitersWithOptions[$a],
                            $this->setOptions($d, $isBlock)
                        );
                    }
                }
            }
        }

        return $delimitersWithOptions;
    }

    /**
     * @param array $delimitersWithOptions
     * @param bool $isBlock
     * @return array
     */
    public function getMainDelimiter(array $delimitersWithOptions, bool $isBlock = false) {
        // we don't want to execute this function again
        // if it is already executed
        if (empty($delimitersWithOptions)) {
            $delimitersWithOptions = $this->getDelimitersWithOptions();
        }

        return Arr::except(
            Arr::first(
                Arr::where(
                    Arr::get($delimitersWithOptions, 'main'),
                    function ($v, $k) use ($isBlock) {
                        return $v['display'] === $isBlock;
                    }
                )
            )
        , ['display']);
    }

    /**
     * Creates delimiter list with options.
     *
     * @param array $delimiters
     * @param bool $isBlock
     * @return array
     */
    public function setOptions(array $delimiters, bool $isBlock = false)
    {
        $r = [];

        if (!empty($delimiters)) {
            foreach ($delimiters as $d) {
                // let d = [mathren]%e%[/mathren]
                // %e% stands for mathematical expressions
                // left delimiter
                $left = Str::before($d, self::EXPRESSION_PLACEHOLDER);
                // right delimiter
                $right = Str::after($d, self::EXPRESSION_PLACEHOLDER);
                if (!empty($left) && !empty($right)) {
                    array_push(
                        $r,
                        [
                            'left' => $left,
                            'right' => $right,
                            'display' => $isBlock
                        ]
                    );
                }
            }
        }

        return $r;
    }

    /**
     * Returns comma seperated list as an array.
     *
     * @param string $list
     * @return array
     */
    public function commaToArray(string $list)
    {
        $r = [];

        if (!empty($list)) {
            $r = array_filter(preg_split('/[\s,]+/', trim($list)));
        }

        // remove duplicated values
        return array_unique($r);
    }

    /**
     * Match only BBCodes in array.
     * ToDo: Regex expression needs to be improved.
     *
     * @param array $r
     * @return array
     */
    public function bbCodeMatcher(array $r)
    {
        return Arr::where($r, function ($value, $key) {
            return preg_match('/\[(.*?)\]'.self::EXPRESSION_PLACEHOLDER.'\[(\/)?\1\]/', $value);
        });
    }

    /**
     * Returns macro inputs as an array.
     * ToDo: This function needs to be improved.
     *
     * @param string $list
     * @return array
     */
    public function macroListAsAnArray(string $list)
    {
        $r = [];

        if (!empty($list)) {
            // convert new lines into a space
            $list = trim(preg_replace('/\s+/', ' ', $list));
            // remove quotation marks
            $list = preg_replace('/[\'"]+/', '', $list);
            // convert \\ to \
            $list = str_replace('\\\\', '\\', $list);

            $item = array_filter(explode(',', trim($list)));

            foreach ($item as $m) {
                $s = explode(':', $m);
                $r[trim($s[0])] = trim($s[1]);
            }
        }

        return $r;
    }
}
