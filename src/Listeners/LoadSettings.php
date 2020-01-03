<?php
namespace TheTurk\MathRen\Listeners;

use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;

class LoadSettings
{
	/**
     * @var SettingsRepositoryInterface
     */
    protected $settings;
	
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
     * Subscribes to the Flarum events.
     *
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Serializing::class, [$this, 'prepareApiAttributes']);
    }
	
	/**
     * Get the setting values from the database and make them available
     * in the forum.
     *
     * @param Serializing $event
     */
    public function prepareApiAttributes(Serializing $event)
    {
        if ($event->isSerializer(ForumSerializer::class)) {
			// Set ignored tag list as an array
			$ignoredTags = $this->settings->get(
				$this->settingsPrefix.'ignoredTags', array()
			);
			$ignoredTagsList = [];
			if(!empty($ignoredTags)) {
				$ignoredTagsList = array_filter(preg_split('/[\s,]+/', trim($ignoredTags)));
			}
			
			// Set ignored classes list as an array
			$ignoredClasses = $this->settings->get(
				$this->settingsPrefix.'ignoredClasses', 
				array('mathren-code-ignore','mathren-inline-code-ignore')
			);
			$ignoredClassesList = [];
			if(!empty($ignoredClasses)) {
				$ignoredClassesList = array_filter(preg_split('/[\s,]+/', trim($ignoredClasses)));
			}
			
			// Set macro list as an array
			$macros = $this->settings->get(
				$this->settingsPrefix.'macros', array()
			);
			$macroList = [];
			if(!empty($macros)) {
				// convert new lines into a space
				$macros = trim(preg_replace('/\s+/', ' ', $macros));
				// remove quotation marks
				$macros = preg_replace('/[\'"]+/', '', $macros);
				// convert \\ to \
				$macros = str_replace('\\\\', '\\', $macros);
				
				$macro = array_filter(explode(',', trim($macros)));
				foreach($macro as $m) {
					$s = explode(':', $m);
					$macroList[trim($s[0])] = trim($s[1]);
				}
			}
			
            $event->attributes += [
                'mathRenIgnoredTags' => $ignoredTagsList,
                'mathRenIgnoredClasses' => $ignoredClassesList,
                'mathRenOutputMode' => (string)$this->settings->get($this->settingsPrefix.'outputMode', 'htmlAndMathml'),
                'mathRenEnableFleqn' => (bool)$this->settings->get($this->settingsPrefix.'enableFleqn', false),
                'mathRenEnableLeqno' => (bool)$this->settings->get($this->settingsPrefix.'enableLeqno', false),
                'mathRenEnableThrowOnError' => (bool)$this->settings->get($this->settingsPrefix.'enableThrowOnError', false),
                'mathRenErrorColor' => (string)$this->settings->get($this->settingsPrefix.'errorColor', '#cc0000'),
                'mathRenMinRuleThickness' => floatval(preg_replace('/[^-0-9\.]/','',$this->settings->get($this->settingsPrefix.'minRuleThickness', 0.05))),
                'mathRenMaxSize' => floatval(preg_replace('/[^-0-9\.]/','',$this->settings->get($this->settingsPrefix.'maxSize', 10))),
                'mathRenMaxExpand' => (int)$this->settings->get($this->settingsPrefix.'maxExpand', 1000),
                'mathRenMacros' => json_encode($macroList),
            ];
        }
    }
}