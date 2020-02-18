@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    こんにちは、{{ Auth::user()->name }}さん
                </div>
            </div>
        </div>
    </div>
</div>
<hr>
<div id="app">
    <example-component></example-component>
</div>
<hr>
@endsection
