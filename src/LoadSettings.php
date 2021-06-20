<?php
namespace TheTurk\MathRen;

use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Extension\ExtensionManager;
use Illuminate\Support\Arr;
use TheTurk\MathRen\Helpers\Settings;

class LoadSettings
{
    /**
     * @var Settings
     */
    protected $settings;

    /**
     * @var ExtensionManager
     */
    protected $extensions;

    /**
     * Gets the settings variable. Called on Object creation.
     *
     * @param ExtensionManager $extensions
     * @param Settings         $settings
     */
    public function __construct(ExtensionManager $extensions, Settings $settings)
    {
        $this->extensions = $extensions;
        $this->settings = $settings;
    }

    /**
     * Get the setting values from the database
     * and make them available in the forum
     *
     * @param Serializing $event
     */
    public function __invoke(ForumSerializer $serializer): array
    {
        $katexOptions = $this->settings->getKatexOptions();

        // all of our delimiters
        $delimiters = Arr::get($katexOptions, 'delimiters');

        return [
            'mathRenKatexOptions' => $katexOptions,
            'mathRenMainBlockDelimiter' =>
                Arr::first(
                    $delimiters,
                    function ($val) {
                        return $val['display'] === true;
                    }
                ),
            'mathRenMainInlineDelimiter' =>
                Arr::first(
                    $delimiters,
                    function ($val) {
                        return $val['display'] === false;
                    }
                ),
            'mathRenEnableTextEditorButtons' => (bool)
                $this->settings->get(
                    'enableTextEditorButtons',
                    Arr::get($this->settings->getDefaults(), 'enableTextEditorButtons')
                ),
            'mathRenEnableCopyTeX' => (bool)
                $this->settings->get(
                    'enableCopyTeX',
                    Arr::get($this->settings->getDefaults(), 'enableCopyTeX')
                ),
            'mathRenAddQuoteButton' => $this->extensions->isEnabled('flarum-mentions'),
        ];
    }
}
