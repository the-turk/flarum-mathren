<?php
namespace TheTurk\MathRen\Helpers;

class ArrayHelpers
{
    /**
     * Returns all delimiters as an array.
     *
     * @param array $blockDelimiters
     * @param array $inlineDelimiters
     * @return array
     */
    public function delimiterList(array $blockDelims, array $inlineDelims): array
    {
        return array_merge(
            self::setOptions($inlineDelims),
            self::setOptions($blockDelims, true)
        );
    }

    /**
     * Creates delimiter list with options.
     *
     * @param array $delimiters
     * @param bool $isBlock
     * @return array
     */
    private function setOptions(array $delimiters, bool $isBlock = false): array
    {
        $r = [];

        if (!empty($delimiters)) {
            foreach ($delimiters as $d) {
                // let d = [mathren]%e%[/mathren]
                // %e% stands for mathematical expressions
                $s = explode('%e%', $d);
                // left delimiter
                $left = $s[0];
                // right delimiter
                $right = $s[1];
                if (!empty($left) && !empty($right)) {
                    array_push(
                        $r,
                        [
                        'left' => $left,
                        'right' => $right,
                        // false for inline expressions
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
     * @param bool $bbOnly
     * @return array
     */
    public function commaToArray(string $list, bool $bbOnly = false): array
    {
        $r = [];

        if (!empty($list)) {
            $r = array_filter(preg_split('/[\s,]+/', trim($list)));
            if ($bbOnly === true) {
                $r = self::bbCodeMatcher($r);
            }
        }

        return array_unique($r);
    }

    /**
     * Returns macro inputs as an array.
     * ToDo: This function needs to be improved.
     *
     * @param string $list
     * @return array
     */
    public function macroListAsAnArray(string $list): array
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

    /**
     * Match only BBCodes in array.
     * ToDo: Regex expression needs to be improved.
     *
     * @param array $r
     * @return array
     */
    public function bbCodeMatcher(array $r): array
    {
        return preg_grep('/\[(.*?)\]%e%\[(\/)?\1\]/', $r);
    }
}
