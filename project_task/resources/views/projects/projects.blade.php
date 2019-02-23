@extends('layout.layout')



@section('content')
<h1 class="display-3">Projects</h1>

{{-- <ul> --}}
    <div class="row">
    @foreach ($projects as $project)
    {{-- <li> {{$project->title}} </li>
    <li> {{$project->name}} </li>
    <li> {{$project->description}} </li> --}}
    <div class="col-md-4">
            <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
                <div class="card-header"> {{ $project->title }} </div>
                <div class="card-body">
                  <h4 class="card-title"> {{$project->name}} </h4>
                  <p class="card-text"> {{$project->description}} </p>
                  <a href="/projects" class="btn btn-warning">
                    check
                  </a>
                </div>
              </div>
            </div>
    @endforeach
</div>

{{-- </ul> --}}

@endsection