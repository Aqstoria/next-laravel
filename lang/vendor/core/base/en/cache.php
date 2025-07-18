<?php

return [
    'cache_management' => 'Cache Management',
    'cache_management_description' => 'Clear cache to make your site up to date.',
    'cache_commands' => 'Clear cache commands',
    'current_size' => 'Current Size',
    'clear_button' => 'Clear',
    'refresh_button' => 'Refresh',
    'cache_size_warning' => 'Your CMS cache size is quite large (>50MB). Clearing it may improve system performance.',
    'footer_note' => 'Clear cache after making changes to your site to ensure they appear correctly.',
    'commands' => [
        'clear_cms_cache' => [
            'title' => 'Clear all CMS cache',
            'description' => 'Clear CMS caching: database caching, static blocks... Run this command when you don\'t see the changes after updating data.',
            'success_msg' => 'Cache cleaned',
        ],
        'refresh_compiled_views' => [
            'title' => 'Refresh compiled views',
            'description' => 'Clear compiled views to make views up to date.',
            'success_msg' => 'Cache view refreshed',
        ],
        'clear_config_cache' => [
            'title' => 'Clear config cache',
            'description' => 'You might need to refresh the config caching when you change something on production environment.',
            'success_msg' => 'Config cache cleaned',
        ],
        'clear_route_cache' => [
            'title' => 'Clear route cache',
            'description' => 'Clear cache routing.',
            'success_msg' => 'The route cache has been cleaned',
        ],
        'clear_log' => [
            'title' => 'Clear log',
            'description' => 'Clear system log files',
            'success_msg' => 'The system log has been cleaned',
        ],
    ],
];
