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
     * @param Document $document
     */
    public function __invoke(Document $document)
    {
        $this->assets($document);
    }
	
    private function assets(Document &$document)
    {
		// Include KaTeX stylesheet
		$extensionFolder = '/'.substr($this->settingsPrefix, 0, -1).'/katex.min.css';
		$urlGenerator = app()->make(UrlGenerator::class);
		$katexCSS = $urlGenerator->to('forum')->path('assets/extensions'.$extensionFolder);
		$document->head[] = '<link rel="stylesheet" type="text/css" href="'.$katexCSS.'">';
		
		// Style options for the <code /> tag.
		$codeStyle = $this->settings->get($this->settingsPrefix.'codeStyle', '');
		// convert new lines into a space
		$codeStyle = trim(preg_replace('/\s+/', ' ', $codeStyle));
		if(!empty($codeStyle)) {
			$document->head[] = '<style type="text/css">'.$codeStyle.'</style>';
		}
    }
}