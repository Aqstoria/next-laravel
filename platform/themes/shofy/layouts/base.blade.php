<!doctype html>
<html {!! Theme::htmlAttributes() !!}>
    <head>
        <meta charset="UTF-8">
        <meta content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5, user-scalable=1" name="viewport" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        {!! Theme::partial('header-meta') !!}

        {!! Theme::header() !!}
    </head>
    <body {!! Theme::bodyAttributes() !!}>
        {!! apply_filters(THEME_FRONT_BODY, null) !!}

        @yield('content')

        <script>
            window.themeOptions = window.themeOptions || {};
            window.themeOptions.ecommerce_auto_open_mini_cart = '{{ theme_option('ecommerce_auto_open_mini_cart', 'yes') }}';
        </script>

        {!! Theme::footer() !!}
    </body>
</html>
