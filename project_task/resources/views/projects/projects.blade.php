@extends('layout.layout')



@section('content')
<h1 class="display-3">Projects</h1>

    <div class="row">
    @foreach ($projects as $project)
    <div class="col-md-4">
            <div class="card text-white bg-info mb-3" style="max-width: 20rem;">
                <div class="card-header"> {{ $project->title }} </div>
                <div class="card-body">
                  <h4 class="card-title"> {{$project->name}} </h4>
                  <p class="card-text"> {{$project->description}} </p>
                  <a href="/projects" class="btn btn-success">
                    check
                  </a>
                  <a href="/projects/{{$project->id}}/edit" class="btn btn-light">
                    edit
                  </a>
                </div>
              </div>
            </div>
    @endforeach
</div>

<ul class="projects-list">
  @foreach ($projects as $project)
          <li>
          <a href="/projects/{{$project->id}}"> {{$project->title}} </a>
          </li>
  @endforeach

</ul>



<a href="/projects/create" class="btn btn-light btn-lg">Create a new Project</a>

@endsection