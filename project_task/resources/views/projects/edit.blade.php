@extends('layout.layout')

@section('title', 'edit')


@section('content')

    <h1 class="display-3">Edit Project</h1>

    <div class="container">
        <form method="post" action="/projects/{{$project->id}}">
            @csrf
            @method('PATCH')

                  <legend>Edit</legend>
                  </div>
                  <div class="form-group">
                   <input type="text" name="title" class="form-control" placeholder="title" value=" {{$project->title}} ">
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" name="name" placeholder="name" value=" {{$project->name}} ">
                  </div>
                  <div class="form-group">
                    <textarea class="form-control" name="description" id="" rows="3"> {{$project->description }} </textarea>
                  </div>

                  <button type="submit" name="update" class="btn btn-primary">Update Project</button>
              </form>
    </div>
@endsection
