<?php
namespace TheTurk\MathRen\Listeners;

use Flarum\Frontend\Document;
use Flarum\Http\UrlGenerator;

class AddAssets
{
    /**
     * @param Document $document
     */
    public function __invoke(Document $document)
    {
        $this->assets($document);
    }

    private function assets(Document &$document)
    {
        // Include KaTeX Stylesheet
        // doing it this way because we also have the fonts
        // in the assets folder
        $urlGenerator = app()->make(UrlGenerator::class);
        $katexCSS = $urlGenerator->to('forum')->path('assets/extensions/the-turk-mathren/katex.min.css');
        $document->head[] = '<link rel="stylesheet" type="text/css" href="'.$katexCSS.'">';
    }
}
