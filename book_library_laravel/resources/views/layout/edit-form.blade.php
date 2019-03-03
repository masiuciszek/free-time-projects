<div class="container">
    <form method="post" action="{{url('/books', $book->id)}}">
        @csrf
        @method('PATCH')
        <div class="form-group">
          <label>Title</label>
            <input type="text" name="title" class="form-control" value="{{$book->title }}">
        </div>

        <div class="form-group">
          <label>Authors</label>
          <input type="text" name="authors" class="form-control" value="{{$book->authors }}">
        </div>
        <div class="form-group">
          <label>Genres</label>
            <select name="genre_id" id="genre" class="form-control">
                @foreach ($genres as $genre)
                      <option value="{{$genre->id}}">{{$genre->name}}</option>
                @endforeach
            </select>
        </div>

            {{-- <div class="form-group">
              <label>Publisher</label>
              <select name="publisher_id" class="form-control">
                    @foreach ($publishers as $publisher)
                      <option value="{{$publisher->id}}">{{$publisher->name}}</option>
                    @endforeach
              </select>
            </div> --}}
        {{-- </div> --}}

        <button type="submit" class="btn btn-primary">Submit</button>
        <a href="/" class="btn btn-warning">Home</a>
      </form>


      @if ($auth->admin)
      <form action="/books/{{$book->id}} " method="post">
        @csrf
        @method('DELETE')
        <button type="submit" class="btn btn-danger">Delete</button>
      </form>
      @endif
  </div>