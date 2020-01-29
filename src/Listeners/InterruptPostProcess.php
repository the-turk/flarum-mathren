<?php
namespace TheTurk\MathRen\Listeners;

use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Post\Event\Saving as PostSaving;
use TheTurk\MathRen\Helpers\Settings;
use Illuminate\Support\Arr;

class InterruptPostProcess
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

        // get all delimiters with options
        $delimitersWithOptions = $this->settings->getDelimitersWithOptions();

        // get all special delimiters with seperated delimiters as an array
        $specialDelimiters = Arr::get($delimitersWithOptions, 'specials');

        if (!empty($specialDelimiters)) {
            // get all bbcode delimiters with seperated delimiters as an array
            $bbDelimiters = Arr::get($delimitersWithOptions, 'bbcodes');

            // get main delimiters with seperated delimiters as an array
            $mainDelimiters = Arr::get($delimitersWithOptions, 'main');

            // to ignore expressions
            $decisiveKeywords = $this->settings->getDecisiveKeywords();

            // we must include bbcodes with decisive keywords
            // to work with our expression finder function
            $bbDecisiveDelimiters = $bbDelimiters;
            foreach($decisiveKeywords as $d) {
                foreach($bbDecisiveDelimiters as $k => $b) {
                    $bbDecisiveDelimiters[$k]['left'] =
                        rtrim($b['left'], ']').'='.$d.']';
                }
            }

            // this is where the magic happens
            $event->post->content = $this->wrapMathInText(
                $text,
                array_merge(
                    // this arrangement is everything
                    $bbDecisiveDelimiters,
                    $bbDelimiters,
                    $specialDelimiters
                ),
                $mainDelimiters,
                $decisiveKeywords
            );
        } else {
            // do nothing if there are only BBCodes
            // in delimiters list because s9e\TextFormatter
            // will handle that expressions
            $event->post->content = $text;
        }
    }

    /*
     * Mathematical expression wrapper
     *
     * Adapted from
     * /KaTeX/KaTeX/blob/master/contrib/auto-render/auto-render.js
     *
     * @param string $text
     * @param array $delimiters
     * @param array $mainDelimiters
     * @param array $decisiveKeywords
     * @return string
     *
    */
    public function wrapMathInText(
        string $text,
        array $delimiters,
        array $mainDelimiters,
        array $decisiveKeywords = []
    ) {
        $data = $this->splitWithDelimiters($text, $delimiters, $decisiveKeywords);
        if (count($data) == 1 && $data[0]['type'] == 'text') {
            // There is no formula in the text.
            return $text;
        }

        $newPost = '';
        for ($i = 0; $i < count($data); $i++) {
            if ($data[$i]['type'] == 'text') {
                // is not a mathematical expression

                // if data's previous key was an ignored math expression
                // we need to remove decisive keyword because we already
                // told MathRen to ignore the expression with bbcode
                // $$%e%$${ignore} => $$%e%$$
                $justIgnored = $i != 0 && array_key_exists('ignore', $data[$i - 1]);
                if ($justIgnored === true && $data[$i - 1]['ignore'] === true) {
                    $newPost .= $this->decisiveTrimmer($data[$i]['data'], $decisiveKeywords);
                } else {
                    $newPost .= $data[$i]['data'];
                }
            } else {
                // is a mathematical expression
                $rawMath = $data[$i]['rawData'];

                if (!array_key_exists('data', $data[$i])) { // is a BBCode
                    // don't f* with BBCodes
                    // ToDo: This Regex expression needs to be improved.
                    $newPost .= $rawMath;
                } else {
                    $math = $data[$i]['data'];
                    // set delimiters for block and inline expressions
                    $mainDelimiter = $this->settings->getMainDelimiter(
                        array(),
                        $data[$i]['display']
                    );
                    // defaults: [math][/math] for block
                    // [imath][/imath] for inline expressions
                    $leftDelim = $mainDelimiter['left'];
                    $rightDelim = $mainDelimiter['right'];

                    // if it's an ignored expression
                    // set left delimiter to ignore it
                    // [math=ignore][/math]
                    $isIgnoring = $data[$i]['ignore'];
                    if ($isIgnoring === true) {
                        $leftDelim = rtrim($leftDelim, ']');
                        $leftDelim = $leftDelim.'='.$decisiveKeywords[0].']';
                    }

                    // wrap expression with main BBCode delimiters
                    $newPost .= $leftDelim.$math.$rightDelim;
                }
            }
        }

        return $newPost;
    }

    /*
     * Find end of a mathematical expression
     *
     * Adapted from
     * /Khan/perseus/blob/master/src/perseus-markdown.jsx
     * /KaTeX/KaTeX/blob/master/contrib/auto-render/splitAtDelimiters.js
     *
     * @param string $delimiter
     * @param string $text
     * @param int $startIndex
     * @param array $decisiveKeywords
     * @return array
     *
    */
    public function findEndOfMath(
        string $delimiter,
        string $text,
        int $startIndex,
        array $decisiveKeywords
    ) {
        $index = $startIndex;
        $braceLevel = 0;

        $delimLength = strlen($delimiter);

        while ($index < strlen($text)) {
            $character = $text{$index};
            if ($braceLevel <= 0 &&
                substr($text, $index, $delimLength) === $delimiter) {
                // we don't want to execute this function actually
                // because of the additional operations when saving a post.
                // so we're checking if there is a special delimiter exists
                // and only then we are executing this function.
                // if we consider [math][/math]{ignore} is a valid format then
                // we have to execute this very function everytime. But it's not certain
                // that we're coming here everytime because there might be no special
                // delimiters at all. So we will accept [math][/math]{ignore} as
                // an invalid format and don't touch to BBCode delimiters here.
                // $delimiter stands for right delimiter
                if (preg_match('/\[\/(.*?)\]/', $delimiter)) {
                    return ['index' => $index];
                }

                foreach ($decisiveKeywords as $d) {
                    $keyLength = strlen($d) + 2;
                    // we will add curly brackets manually
                    if (substr($text, $index + $delimLength, $keyLength) ==
                        Settings::DECISIVE_OPENING.$d.Settings::DECISIVE_CLOSING) {
                        // this expression needs to be ignored
                        return ['index' => $index, 'ignore' => true];
                    }
                }
                return ['index' => $index, 'ignore' => false];
            } elseif ($character === "\\") {
                $index++;
            } elseif ($character === "{") {
                $braceLevel++;
            } elseif ($character === "}") {
                $braceLevel--;
            }

            $index++;
        }

        return [];
    }

    /*
     * Split text at delimiters
     *
     * Adapted from
     * /KaTeX/KaTeX/blob/master/contrib/auto-render/splitAtDelimiters.js
     *
     * @param array $startData
     * @param string $leftDelim
     * @param string $rightDelim
     * @param bool $display
     * @param array $decisiveKeywords
     * @return array
     *
    */
    public function splitAtDelimiters(
        array $startData,
        string $leftDelim,
        string $rightDelim,
        bool $display,
        array $decisiveKeywords
    ) {
        $finalData = [];

        for ($i = 0; $i < count($startData); $i++) {
            if ($startData[$i]['type'] == 'text') {
                $text = $startData[$i]['data'];

                $lookingForLeft = true;
                $currIndex = 0;
                $nextIndex = strpos($text, $leftDelim);

                if ($nextIndex !== false) {
                    $currIndex = $nextIndex;
                    array_push(
                        $finalData,
                        [
                            'type' => 'text',
                            'data' => substr($text, 0, $currIndex)
                        ]
                    );
                    $lookingForLeft = false;
                }

                while (true) {
                    if ($lookingForLeft) {
                        $nextIndex = strpos($text, $leftDelim, $currIndex);
                        if ($nextIndex === false) {
                            break;
                        }

                        array_push(
                            $finalData,
                            [
                                'type' => 'text',
                                'data' => substr(
                                    $text,
                                    $currIndex,
                                    $nextIndex - $currIndex
                                ),
                            ]
                        );

                        $currIndex = $nextIndex;
                    } else {
                        $endOfMath = $this->findEndOfMath(
                            $rightDelim,
                            $text,
                            $currIndex + strlen($leftDelim),
                            $decisiveKeywords
                        );
                        if (empty($endOfMath)) {
                            break;
                        }

                        $nextIndex = $endOfMath['index'];

                        $finalDataBase = [
                            'type' => 'math',
                            'rawData' => substr(
                                $text,
                                $currIndex,
                                ($nextIndex + strlen($rightDelim)) - $currIndex
                            )
                        ];

                        // BBCodes will not need 'ignore', 'display' and 'data' keys
                        // all delimiters differ from BBCodes must have the 'ignore' key
                        if (!array_key_exists('ignore', $endOfMath)) {
                            array_push(
                                $finalData,
                                $finalDataBase
                            );
                        } else {
                            $finalDataExt = [
                                'data' => substr(
                                    $text,
                                    $currIndex + strlen($leftDelim),
                                    $nextIndex - ($currIndex + strlen($leftDelim))
                                ),
                                'display' => $display,
                                'ignore' => $endOfMath['ignore']
                            ];

                            array_push(
                                $finalData,
                                array_merge($finalDataBase, $finalDataExt)
                            );
                        }

                        $currIndex = $nextIndex + strlen($rightDelim);
                    }

                    $lookingForLeft = !$lookingForLeft;
                }

                array_push(
                    $finalData,
                    [
                        'type' => 'text',
                        'data' => substr($text, $currIndex)
                    ]
                );
            } else {
                array_push(
                    $finalData,
                    $startData[$i]
                );
            }
        }

        return $finalData;
    }

    /*
     * Split text with delimiters
     *
     * Adapted from
     * /KaTeX/KaTeX/blob/master/contrib/auto-render/auto-render.js
     *
     * @param string $text
     * @param array $delimiters
     * @param array $decisiveKeywords
     * @return array
     *
    */
    public function splitWithDelimiters(
        string $text,
        array $delimiters,
        array $decisiveKeywords
    ) {
        $data = [['type' => 'text', 'data' => $text]];

        for ($i = 0; $i < count($delimiters); $i++) {
            $delimiter = $delimiters[$i];
            $data = $this->splitAtDelimiters(
                $data,
                $delimiter['left'],
                $delimiter['right'],
                // true for block expressions
                $delimiter['display'] || false,
                $decisiveKeywords
            );
        }

        return $data;
    }

    /*
     * Decisive keyword trimmer.
     *
     * @param string $data
     * @param array $decisiveKeywords
     * @return string
     *
    */
    public function decisiveTrimmer(string $data, array $decisiveKeywords)
    {
        foreach ($decisiveKeywords as $d) {
            $data = ltrim($data,
                Settings::DECISIVE_OPENING.$d.Settings::DECISIVE_CLOSING
            );
        }

        return $data;
    }
}
