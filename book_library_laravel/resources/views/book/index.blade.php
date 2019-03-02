@extends('layout.app')

@include('layout.nav')
@section('title')

@section('content')
    <div class="container">
        <h1 class="display-1">Books</h1>
        <div class="books row">
            @foreach ($books as $book)
                <div class="col-md-3">
                    <div class="card bg-info text-white my-2" style="width: 15rem;">
                        <img class="card-img-top" src="{{$book->image}} " alt="{{$book->title}}">
                        <div class="card-body">
                          <h5 class="card-title"> {{$book->title}} </h5>
                          <p class="card-text"> {{$book->authors}} </p>
                                @if ($book->genre != null)
                                <p class="card-text"> {{$book->genre->name}} </p>
                                @endif

                                @if ($book->$publisher)
                                    <p>$book->publisher->name</p>
                                @endif

                          <a href="{{action('BookController@edit',$book->id)}} " class="btn btn-primary">Edit</a>
                          <a href="{{action('BookController@show', $book->id)}} " class="btn btn-light">View</a>
                        </div>
                      </div>
                </div>
            @endforeach
        </div>

    </div>

@endsection