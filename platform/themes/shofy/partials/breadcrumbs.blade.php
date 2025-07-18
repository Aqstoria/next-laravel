@php
    $breadcrumbStyle = Theme::get('breadcrumbStyle', theme_option('breadcrumb_style', 'align-start'));
    $breadcrumbBackground = RvMedia::getImageUrl(Theme::get('breadcrumbBackground', theme_option('breadcrumb_background_image')));
    $breadcrumbBackgroundColor = theme_option('breadcrumb_background_color');
    $breadcrumbHeight = Theme::get('breadcrumbHeight') ?: theme_option('breadcrumb_height');
    $breadcrumbHeight = is_numeric($breadcrumbHeight) ? "{$breadcrumbHeight}px" : $breadcrumbHeight;
    $breadcrumbClasses = Theme::get('breadcrumbClasses');
@endphp

@if (theme_option('theme_breadcrumb_enabled', true) && $breadcrumbStyle !== 'none')
    <section
        @class([
            'breadcrumb__area include-bg',
            'pt-60 pb-60 mb-50' => $breadcrumbStyle !== 'without-title' && empty($breadcrumbHeight),
            'pt-30 pb-30 mb-50' => $breadcrumbStyle === 'without-title' && empty($breadcrumbHeight),
            'breadcrumb__style-2 include-bg' => $breadcrumbStyle === 'without-title',
            'pt-30 pb-30' => $breadcrumbStyle === 'without-title' && empty($breadcrumbHeight),
            'mb-30 text-center' => $breadcrumbStyle === 'align-center',
            'mb-30 text-start' => $breadcrumbStyle === 'align-start',
            'breadcrumb__padding' => $breadcrumbStyle === 'full-width',
            'pt-30' => empty($breadcrumbHeight) || $breadcrumbHeight < 90,
            $breadcrumbClasses ?? null,
        ])
        @style(["background-image: url($breadcrumbBackground)" => $breadcrumbBackground, "background-color: $breadcrumbBackgroundColor" => $breadcrumbBackgroundColor, "display: flex; align-items: center; height: $breadcrumbHeight" => $breadcrumbHeight])
    >
        <div @class(['container' => $breadcrumbStyle !== 'full-width', 'container-fluid' => $breadcrumbStyle === 'full-width'])>
            <div class="breadcrumb__content p-relative z-index-1">
                @if (theme_option('breadcrumb_hide_title', 'no') == 'no' && $breadcrumbStyle !== 'without-title')
                    <h3 class="breadcrumb__title">{!! BaseHelper::clean(Theme::get('pageTitle') ? Theme::get('pageTitle') : SeoHelper::getTitleOnly()) !!}</h3>
                @endif
                <div @class(['breadcrumb__list', 'js_breadcrumb_reduce_length_on_mobile' => theme_option('breadcrumb_reduce_length_on_mobile', 'yes') == 'yes',])>
                    @foreach(Theme::breadcrumb()->getCrumbs() as $crumb)
                        <span>
                            @if($loop->last)
                                {!! BaseHelper::clean($crumb['label']) !!}
                            @else
                                <a href="{{ $crumb['url'] }}">{!! BaseHelper::clean($crumb['label']) !!}</a>
                            @endif
                        </span>
                    @endforeach
                </div>
            </div>
        </div>
    </section>
@endif
