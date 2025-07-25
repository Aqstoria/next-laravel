<?php

namespace Botble\CookieConsent\Providers;

use Botble\Base\Supports\ServiceProvider;
use Botble\Base\Traits\LoadAndPublishDataTrait;
use Botble\Theme\Events\RenderingThemeOptionSettings;
use Illuminate\Contracts\View\View;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Routing\Events\RouteMatched;
use Illuminate\Support\Facades\Cookie;

class CookieConsentServiceProvider extends ServiceProvider
{
    use LoadAndPublishDataTrait;

    public function boot(): void
    {
        $this
            ->setNamespace('plugins/cookie-consent')
            ->loadAndPublishConfigurations(['general'])
            ->loadAndPublishTranslations()
            ->loadAndPublishViews();

        $this->app['events']->listen(RouteMatched::class, function (): void {
            if (defined('THEME_FRONT_FOOTER') && theme_option('cookie_consent_enable', 'yes') == 'yes') {
                $this->app->resolving(EncryptCookies::class, function (EncryptCookies $encryptCookies): void {
                    $encryptCookies->disableFor(config('plugins.cookie-consent.general.cookie_name'));
                });

                $this->app['view']->composer('plugins/cookie-consent::index', function (View $view): void {
                    $cookieConsentConfig = config('plugins.cookie-consent.general', []);

                    $view->with(compact('cookieConsentConfig'));
                });

                add_filter(THEME_FRONT_FOOTER, [$this, 'registerCookieConsent'], 1346);
            }
        });

        $this->app['events']->listen(RenderingThemeOptionSettings::class, function (): void {
            theme_option()
                ->setSection([
                    'title' => trans('plugins/cookie-consent::cookie-consent.theme_options.name'),
                    'id' => 'opt-text-subsection-cookie-consent',
                    'subsection' => true,
                    'icon' => 'ti ti-cookie',
                    'priority' => 9999,
                    'fields' => [
                        [
                            'id' => 'cookie_consent_enable',
                            'type' => 'customSelect',
                            'label' => trans('plugins/cookie-consent::cookie-consent.theme_options.enable'),
                            'attributes' => [
                                'name' => 'cookie_consent_enable',
                                'list' => [
                                    'yes' => trans('core/base::base.yes'),
                                    'no' => trans('core/base::base.no'),
                                ],
                                'value' => 'yes',
                                'options' => [
                                    'class' => 'form-control',
                                ],
                            ],
                        ],
                        [
                            'id' => 'cookie_consent_style',
                            'type' => 'customSelect',
                            'label' => trans('plugins/cookie-consent::cookie-consent.theme_options.style'),
                            'attributes' => [
                                'name' => 'cookie_consent_style',
                                'list' => [
                                    'full-width' => trans('plugins/cookie-consent::cookie-consent.theme_options.full_width'),
                                    'minimal' => trans('plugins/cookie-consent::cookie-consent.theme_options.minimal'),
                                ],
                                'value' => 'yes',
                                'options' => [
                                    'class' => 'form-control',
                                ],
                            ],
                        ],
                        [
                            'id' => 'cookie_consent_message',
                            'type' => 'text',
                            'label' => trans('plugins/cookie-consent::cookie-consent.theme_options.message'),
                            'attributes' => [
                                'name' => 'cookie_consent_message',
                                'value' => trans('plugins/cookie-consent::cookie-consent.message'),
                                'options' => [
                                    'class' => 'form-control',
                                    'placeholder' => trans('plugins/cookie-consent::cookie-consent.theme_options.message'),
                                    'data-counter' => 400,
                                ],
                            ],
                        ],

                        [
                            'id' => 'cookie_consent_button_text',
                            'type' => 'text',
                            'label' => trans('plugins/cookie-consent::cookie-consent.theme_options.button_text'),
                            'attributes' => [
                                'name' => 'cookie_consent_button_text',
                                'value' => trans('plugins/cookie-consent::cookie-consent.button_text'),
                                'options' => [
                                    'class' => 'form-control',
                                    'placeholder' => trans('plugins/cookie-consent::cookie-consent.theme_options.button_text'),
                                    'data-counter' => 120,
                                ],
                            ],
                        ],

                        [
                            'id' => 'cookie_consent_learn_more_url',
                            'type' => 'text',
                            'label' => trans('plugins/cookie-consent::cookie-consent.theme_options.learn_more_url'),
                            'attributes' => [
                                'name' => 'cookie_consent_learn_more_url',
                                'value' => null,
                                'options' => [
                                    'class' => 'form-control',
                                    'placeholder' => trans('plugins/cookie-consent::cookie-consent.theme_options.learn_more_url'),
                                    'data-counter' => 120,
                                ],
                            ],
                        ],

                        [
                            'id' => 'cookie_consent_learn_more_text',
                            'type' => 'text',
                            'label' => trans('plugins/cookie-consent::cookie-consent.theme_options.learn_more_text'),
                            'attributes' => [
                                'name' => 'cookie_consent_learn_more_text',
                                'value' => null,
                                'options' => [
                                    'class' => 'form-control',
                                    'placeholder' => trans('plugins/cookie-consent::cookie-consent.theme_options.learn_more_text'),
                                    'data-counter' => 120,
                                ],
                            ],
                        ],

                        [
                            'id' => 'cookie_consent_background_color',
                            'type' => 'customColor',
                            'label' => trans('plugins/cookie-consent::cookie-consent.theme_options.background_color'),
                            'attributes' => [
                                'name' => 'cookie_consent_background_color',
                                'value' => '#000',
                                'options' => [
                                    'class' => 'form-control',
                                    'placeholder' => trans('plugins/cookie-consent::cookie-consent.theme_options.background_color'),
                                ],
                            ],
                        ],

                        [
                            'id' => 'cookie_consent_text_color',
                            'type' => 'customColor',
                            'label' => trans('plugins/cookie-consent::cookie-consent.theme_options.text_color'),
                            'attributes' => [
                                'name' => 'cookie_consent_text_color',
                                'value' => '#fff',
                                'options' => [
                                    'class' => 'form-control',
                                    'placeholder' => trans('plugins/cookie-consent::cookie-consent.theme_options.text_color'),
                                ],
                            ],
                        ],

                        [
                            'id' => 'cookie_consent_max_width',
                            'type' => 'number',
                            'label' => trans('plugins/cookie-consent::cookie-consent.theme_options.max_width'),
                            'attributes' => [
                                'name' => 'cookie_consent_max_width',
                                'value' => 1170,
                                'options' => [
                                    'class' => 'form-control',
                                    'placeholder' => trans('plugins/cookie-consent::cookie-consent.theme_options.max_width'),
                                ],
                            ],
                        ],
                        [
                            'id' => 'cookie_consent_show_reject_button',
                            'type' => 'customSelect',
                            'label' => trans('plugins/cookie-consent::cookie-consent.theme_options.show_reject_button'),
                            'helper' => trans('plugins/cookie-consent::cookie-consent.theme_options.show_reject_button_helper'),
                            'attributes' => [
                                'name' => 'cookie_consent_show_reject_button',
                                'list' => [
                                    'no' => trans('core/base::base.no'),
                                    'yes' => trans('core/base::base.yes'),
                                ],
                                'value' => 'no',
                                'options' => [
                                    'class' => 'form-control',
                                ],
                            ],
                        ],
                        [
                            'id' => 'cookie_consent_show_customize_button',
                            'type' => 'customSelect',
                            'label' => trans('plugins/cookie-consent::cookie-consent.theme_options.show_customize_button'),
                            'helper' => trans('plugins/cookie-consent::cookie-consent.theme_options.show_customize_button_helper'),
                            'attributes' => [
                                'name' => 'cookie_consent_show_customize_button',
                                'list' => [
                                    'no' => trans('core/base::base.no'),
                                    'yes' => trans('core/base::base.yes'),
                                ],
                                'value' => 'no',
                                'options' => [
                                    'class' => 'form-control',
                                ],
                            ],
                        ],
                    ],
                ]);
        });
    }

    public function registerCookieConsent(?string $html): string
    {
        $cookieConsentConfig = config('plugins.cookie-consent.general', []);

        $alreadyConsentedWithCookies = Cookie::has($cookieConsentConfig['cookie_name'] ?? 'cookie_for_consent');

        if (is_in_admin() || $alreadyConsentedWithCookies) {
            return $html;
        }

        return $html . view('plugins/cookie-consent::index')->render();
    }
}
