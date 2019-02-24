@extends('layout.layout')

@section('title', 'edit')
<style>
    ul{
        list-style: none;
    }
    .is-complete{
        text-decoration: line-through;
    }
</style>

@section('content')

    <h2 class="display-2 text-white"> {{$project->title}} </h2>
    <h3 class="display-3 text-white"> {{$project->name}} </h3>
    <h3 class="display-3 text-white"> {{$project->description}} </h3>

    <a href="/projects/{{$project->id}}/edit" class="btn btn-lg btn-light my-5" >Edit</a>

    {{-- @if ($project->task->count()) --}}
        <div class="description-output">
            <ul class="project-list">
            @foreach ($project->tasks as $task)
            <li class="lead">
                <form method="POST" action="/tasks/{{$task->id}}">
                    @csrf
                    @method('PATCH')
                        <label for="completed" class="checkbox {{$task->completed ? 'is-complete' : ''}} ">
                            <input type="checkbox" name="completed" onchange="this.form.submit()" {{$task->completed ? 'checked' : ''}}>
                                {{$task->description}}
                            </label>
                </form>
            </li>
            @endforeach
            </ul>
        </div>
    {{-- @endif --}}

    {{-- add a new task --}}
    <form action="/projects/{{ $project->id }}/tasks" method="POST">
        @csrf
        <div class="form-group my-5">
            <input type="text" name="description" class="form-control" placeholder="new task" required>
        </div>

        @include('projects.error')
        <div class="form-group mt-1">
            <button type="submit" name="submit" class="btn btn-info">Add Task</button>
        </div>
    </form>

@endsection