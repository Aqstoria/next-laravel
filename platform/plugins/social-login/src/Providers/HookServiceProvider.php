<?php

namespace Botble\SocialLogin\Providers;

use Botble\Base\Supports\ServiceProvider;
use Botble\SocialLogin\Facades\SocialService;
use Botble\Theme\Facades\Theme;
use Illuminate\Routing\Events\RouteMatched;
use Illuminate\Support\Arr;

class HookServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        $this->app['events']->listen(RouteMatched::class, function (): void {
            add_filter(BASE_FILTER_AFTER_LOGIN_OR_REGISTER_FORM, [$this, 'addLoginOptions'], 25, 2);
        });
    }

    public function addLoginOptions(?string $html, string $module): ?string
    {
        if (
            ! SocialService::setting('enable')
            || ! SocialService::isSupportedModule($module)
            || ! SocialService::hasAnyProviderEnable()
        ) {
            return $html;
        }

        $supportedModules = SocialService::supportedModules();

        if ($total = count($supportedModules)) {
            $params = [];
            $data = collect($supportedModules)->firstWhere('model', $module);

            if ($total > 1) {
                $params = ['guard' => $data['guard']];
            }

            if (Arr::get($data, 'use_css', true) && defined('THEME_OPTIONS_MODULE_SCREEN_NAME')) {
                Theme::asset()
                    ->usePath(false)
                    ->add(
                        'social-login-css',
                        asset('vendor/core/plugins/social-login/css/social-login.css'),
                        [],
                        [],
                        '1.2.1'
                    );

                do_action('social_login_assets_register');
            }

            $view = Arr::get($data, 'view', 'plugins/social-login::login-options');

            $view = apply_filters('social_login_view_path', $view, $module);

            return $html . view($view, compact('params'))->render();
        }

        return $html;
    }
}
