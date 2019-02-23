@extends('layout.layout')
@section('title', 'create')

@section('content')

<h1 class="display-4">Create Project</h1>

<div class="container">
    <form method="post" action="/projects">
        @csrf
              <legend>Create</legend>
              </div>
              <div class="form-group">
               <input type="text" name="title" class="form-control" placeholder="title">
              </div>
              <div class="form-group">
                <input type="text" class="form-control" name="name" placeholder="name">
              </div>
              <div class="form-group">
                <textarea class="form-control" name="description" id="" rows="3"></textarea>
              </div>

              <button type="submit" name="submit" class="btn btn-primary">Submit</button>
          </form>
</div>

@endsection
