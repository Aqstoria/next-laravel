@php
    Theme::set('breadcrumbHeight', 120);
    Theme::set('breadcrumbClasses', 'pb-30');
    Theme::set('pageTitle', __('Reset Password'));
@endphp

{!! $form->renderForm() !!}
