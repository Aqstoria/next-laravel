@if (EcommerceHelper::isReviewEnabled())
    @php
        $version = EcommerceHelper::getAssetVersion();

        Theme::asset()->add('lightgallery-css', 'vendor/core/plugins/ecommerce/libraries/lightgallery/css/lightgallery.min.css', version: $version);
        Theme::asset()->add('front-ecommerce-css', 'vendor/core/plugins/ecommerce/css/front-ecommerce.css', version: $version);
        Theme::asset()->add('front-review-css', 'vendor/core/plugins/ecommerce/css/front-review.css', version: $version);
        Theme::asset()->container('footer')->add('lightgallery-js', 'vendor/core/plugins/ecommerce/libraries/lightgallery/js/lightgallery.min.js', ['jquery'], version: $version);
        Theme::asset()->container('footer')->add('lg-thumbnail-js', 'vendor/core/plugins/ecommerce/libraries/lightgallery/plugins/lg-thumbnail.min.js', ['lightgallery-js'], version: $version);
        Theme::asset()->container('footer')->add('review-js', 'vendor/core/plugins/ecommerce/js/front-review.js', ['lightgallery-js', 'lg-thumbnail-js'], version: $version);

        $showAvgRating ??= $product->reviews->isNotEmpty();
    @endphp

    <div class="d-flex flex-column gap-5 product-review-container">
        <div class="row g-3">
            @if ($showAvgRating)
                <div class="col-12 col-md-4">
                    <div class="product-review-number">
                        <h3 class="product-review-number-title">{{ __('Customer reviews') }}</h3>

                        <div class="product-review-summary">
                            <div class="product-review-summary-value">
                                <span>
                                    {{ number_format($product->reviews_avg ?: 0, 2) }}
                                </span>
                            </div>
                            <div class="product-review-summary-rating">
                                @include(EcommerceHelper::viewPath('includes.rating-star'), ['avg' => $product->reviews_avg, 'size' => 80])
                                <p>
                                    @if ($product->reviews_count === 1)
                                        ({{ __('1 Review') }})
                                    @else
                                        ({{ __(':count Reviews', ['count' => number_format($product->reviews_count)]) }})
                                    @endif
                                </p>
                            </div>
                        </div>

                        <div class="product-review-progress">
                            @foreach (EcommerceHelper::getReviewsGroupedByProductId($product->id, $product->reviews_count) as $item)
                                <div @class(['product-review-progress-bar', 'disabled' => ! $item['count'], 'clickable' => $item['count']])
                                     @if($item['count'])
                                        data-bb-toggle="review-star-filter-bar"
                                        data-star="{{ $item['star'] }}"
                                        role="button"
                                        tabindex="0"
                                        title="{{ __('Filter by :star star reviews', ['star' => $item['star']]) }}"
                                     @endif>
                                    <span class="product-review-progress-bar-title">
                                        @if($item['star'] == 1)
                                            {{ __(':number Star', ['number' => $item['star']]) }}
                                        @else
                                            {{ __(':number Stars', ['number' => $item['star']]) }}
                                        @endif
                                    </span>
                                    <div class="progress product-review-progress-bar-value">
                                        <div
                                            class="progress-bar"
                                            role="progressbar"
                                            aria-valuenow="{{ $item['percent'] }}"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                            style="width: {{ $item['percent'] }}%"
                                        ></div>
                                    </div>
                                    <span class="product-review-progress-bar-percent">
                                        {{ $item['percent'] }}%
                                    </span>
                                </div>
                            @endforeach
                        </div>
                    </div>
                </div>
            @endif

            @include($reviewFormView ?? EcommerceHelper::viewPath('includes.review-form'))
        </div>

        @if (($reviewImagesCount = count($product->review_images)) > 0)
            <div class="review-images-container">
                <h4 class="mb-3">{{ __('Images from customer (:count)', ['count' => number_format($reviewImagesCount)]) }}</h4>

                <div class="row g-1 review-images">
                    @foreach ($product->review_images as $image)
                        <a href="{{ RvMedia::getImageUrl($image) }}" class="col-3 col-md-2 col-xl-1 position-relative" @style(['display: none !important' => $loop->iteration > 12])>
                            <img src="{{ RvMedia::getImageUrl($image, 'thumb') }}" alt="{{ $product->name }}" class="img-thumbnail">
                            @if ($loop->iteration === 12)
                                <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75 rounded"></div>
                                <div class="position-absolute top-50 start-50 translate-middle text-white">
                                    <span class="badge bg-dark">+{{ __(':count more', ['count' => number_format($reviewImagesCount - 12)]) }}</span>
                                </div>
                            @endif
                        </a>
                    @endforeach
                </div>
            </div>
        @endif

        @if ($product->reviews->isNotEmpty())
            <div class="position-relative review-list-container" data-ajax-url="{{ route('public.ajax.reviews', $product->id) }}">
                <h4 class="mb-3">{{ __(':total review(s) for ":product"', ['total' => number_format($product->reviews_count), 'product' => $product->name]) }}</h4>

                <div class="d-flex align-items-center justify-content-between mb-4 product-review-controls">
                    <div class="d-flex gap-2 review-control-buttons">
                        <button type="button" class="btn review-control-btn" data-bb-toggle="review-search-toggle" title="{{ __('Search reviews') }}">
                            <x-core::icon name="ti ti-search" class="me-1" />
                            {{ __('Search') }}
                        </button>
                        <button type="button" class="btn review-control-btn" data-bb-toggle="review-filter-toggle" title="{{ __('Filter by stars') }}">
                            <x-core::icon name="ti ti-filter" class="me-1" />
                            {{ __('Filter') }}
                        </button>
                        <button type="button" class="btn review-control-btn" data-bb-toggle="review-sort-toggle" title="{{ __('Sort reviews') }}">
                            <x-core::icon name="ti ti-sort-ascending" class="me-1" />
                            {{ __('Sort') }}
                        </button>
                    </div>
                    <button type="button" class="btn review-clear-btn d-none" data-bb-toggle="review-clear-filters" title="{{ __('Clear all filters') }}">
                        <x-core::icon name="ti ti-x" class="me-1" />
                        {{ __('Clear') }}
                    </button>
                </div>

                <div class="review-search-container d-none mb-3">
                    <div class="position-relative">
                        <input
                            type="search"
                            class="form-control review-search-input"
                            placeholder="{{ __('Search reviews...') }}"
                            data-bb-toggle="review-search"
                        >
                        <div class="position-absolute top-50 end-0 translate-middle-y pe-3">
                            <x-core::icon name="ti ti-search" class="text-muted" />
                        </div>
                    </div>
                </div>

                <div class="review-filter-container d-none mb-3">
                    <select class="form-select review-star-filter" data-bb-toggle="review-star-filter">
                        <option value="">{{ __('All Stars') }}</option>
                        <option value="5">{{ __('5 Stars') }}</option>
                        <option value="4">{{ __('4 Stars') }}</option>
                        <option value="3">{{ __('3 Stars') }}</option>
                        <option value="2">{{ __('2 Stars') }}</option>
                        <option value="1">{{ __('1 Star') }}</option>
                    </select>
                </div>

                <div class="review-sort-container d-none mb-3">
                    <select class="form-select review-sort-select" data-bb-toggle="review-sort">
                        <option value="newest">{{ __('Newest') }}</option>
                        <option value="oldest">{{ __('Oldest') }}</option>
                        <option value="highest_rating">{{ __('Highest Rating') }}</option>
                        <option value="lowest_rating">{{ __('Lowest Rating') }}</option>
                    </select>
                </div>

                <div class="review-list"></div>
            </div>
        @else
            <p class="text-muted text-center">{{ __('Looks like there are no reviews yet.') }} </p>
        @endif
    </div>
@endif
