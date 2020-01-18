<?php
namespace TheTurk\MathRen\Listeners;

use Flarum\Frontend\Document;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\Http\UrlGenerator;

class AddAssets
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @var Application
    */
    protected $app;

    /**
     * @var string $settingsPrefix
     */
    public $settingsPrefix = 'the-turk-mathren';

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
     * @param Document $document
     */
    public function __invoke(Document $document)
    {
        $this->assets($document);
    }

    private function assets(Document &$document)
    {
        // include KaTeX stylesheet
        $extensionFolder = '/'.$this->settingsPrefix.'/katex.min.css';
        $urlGenerator = app()->make(UrlGenerator::class);
        $katexCSS = $urlGenerator->to('forum')->path('assets/extensions'.$extensionFolder);
        $document->head[] = '<link rel="stylesheet" type="text/css" href="'.$katexCSS.'">';

        // stylize <span /> wrapper
        $spanStyle = $this->settings->get($this->settingsPrefix.'.wrapperStyle', '');
        // remove new lines to minify it
        $spanStyle = trim(preg_replace('/\s+/', '', $spanStyle));
        if (!empty($spanStyle)) {
            $document->head[] = '<style type="text/css">'.$spanStyle.'</style>';
        }
    }
}
