@extends(BaseHelper::getAdminMasterLayoutTemplate())

@section('content')
<div class="row">
    <div class="col-12">
        <div class="widget meta-boxes">
            <div class="widget-title">
                <h4>
                    <span>{{ trans('core/setting::setting.cache') }}</span>
                </h4>
            </div>
            <div class="widget-body">
                <p>Clear all caches to improve performance.</p>
                <form action="{{ route('settings.cache.clear') }}" method="POST">
                    @csrf
                    <button type="submit" class="btn btn-warning">Clear All Caches</button>
                </form>
            </div>
        </div>
    </div>
</div>
@stop 