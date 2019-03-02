<div class="jumbotron bg-warning text-white">
    <h1 class="display-3"> {{$book->title}} </h1>
    <p class="lead"> {{$book->authors}} </p>
    <hr class="my-4">
    <img class="my-3" src="{{$book->image}} " alt="{{$book->title}}" style="width:12rem">
    <p class="lead">
    <a class="btn btn-light btn-lg" href="{{action('BookController@edit', $book->id)}} " role="button">edit</a>
    </p>
  </div>