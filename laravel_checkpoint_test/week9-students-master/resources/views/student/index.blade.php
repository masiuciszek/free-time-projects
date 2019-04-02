@extends('layouts.main')

@section('content')
<h1>The students list</h1>
@foreach ($students as $student)
<p>{{$student->name}} </p>
@endforeach

    {{-- @include('index') --}}


@endsection

