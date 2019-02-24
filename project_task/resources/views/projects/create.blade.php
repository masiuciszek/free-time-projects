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
                  <input type="text" class="form-control {{$errors->has('title') ? 'alert-danger' : ''}} " name="title" id="title" placeholder="title" value="{{old('title')}}">
              </div>
              <div class="form-group">
              <input type="text" class="form-control {{$errors->has('name') ? 'alert-danger' : ''}}" name="name" placeholder="name" value="{{old('name')}}" >
              </div>
              <div class="form-group">
                <textarea class="form-control" name="description" id="" rows="3"> {{$errors->has('description') ? 'alert-danger' : ''}} {{old('description')}} </textarea>
              </div>

              <button type="submit" name="submit" class="btn btn-primary">Submit</button>

              @include('projects.error')
          </form>
</div>

@endsection
