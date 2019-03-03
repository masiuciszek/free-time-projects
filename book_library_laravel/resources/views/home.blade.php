
@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Book Library</div>

                <div class="card-body mx-auto">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    <h2>Welcome</h2>
                    <a href="{{url('/books')}} " class="btn btn-info">To the books</a>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
