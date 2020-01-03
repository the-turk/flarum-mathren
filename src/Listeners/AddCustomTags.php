<?php
namespace TheTurk\MathRen\Listeners;

use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Formatter\Event\Configuring;

class AddCustomTags
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
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
		$events->listen(Configuring::class, [$this, 'bbCodeConfigurator']);
    }
	
	/**
	 * Custom BBCodes function
	 * More info on https://s9etextformatter.readthedocs.io/Plugins/BBCodes/Add_custom_BBCodes/
	 *
	 * @param Configuring $event
	 */
	public function bbCodeConfigurator(Configuring $event)
    {
		// Allow custom filters
		array_push(
			$event->configurator->BBCodes->bbcodeMonkey->allowedFilters, 
			'mathren', 
			'mathren-inline'
		);
		
		// Add custom BBCodes
		$event->configurator->BBCodes->addCustom(
			'[mathren={TEXT1?}]{TEXT2}[/mathren]', $this->wrapper('{TEXT1}', '{TEXT2}')
		);
		$event->configurator->BBCodes->addCustom(
			'[mathren-inline={TEXT1?}]{TEXT2}[/mathren-inline]', $this->wrapper('{TEXT1}', '{TEXT2}', true)
		);
    }
	
	/**
	 * Mathematical expression wrapper
	 * 
	 * @param  string $skipper
     * @param  string $formula
     * @param  bool   $isInline
	 * @return string
     */
	public function wrapper($skipper, $formula, bool $isInline = false)
	{
		$bbTag = 'mathren'.($isInline === true ? '-inline' : '');
		
		if($this->settings->get($this->settingsPrefix.'enableCode', true)) {
			$className = ($isInline === true) ? 'inlineCodeClass' : 'codeClass';
			$classDefaults = ($isInline === true) ? 'mathren-inline-code' : 'mathren-code';
			$classSetting = $this->settings->get($this->settingsPrefix.$className, $classDefaults);
			
			return 
				'<code class="'.$classSetting.$skipper.'">
					['.$bbTag.']'.$formula.'[/'.$bbTag.']
				</code>';
		} else {
			return '['.$bbTag.']'.$formula.'[/'.$bbTag.']';
		}
	}
}