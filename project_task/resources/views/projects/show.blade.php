@extends('layout.layout')

@section('title', 'edit')


@section('content')

    <h2 class="display-2 text-white"> {{$project->title}} </h2>
    <h3 class="display-3 text-white"> {{$project->name}} </h3>
    <p class="lead text-white"> {{$project->description}} </p>

<a href="/projects/{{$project->id}}/edit" class="btn btn-lg btn-light" >Edit</a>
@endsection