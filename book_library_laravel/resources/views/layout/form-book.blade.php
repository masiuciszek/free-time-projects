<div class="container">
  <form method="post" action="{{url('/books')}}">
      @csrf
      <div class="form-group">
        <label>Title</label>
        <input type="text" name="title" class="form-control {{$errors->any('title') ? 'alert-danger' : null }}" value=" {{old('title')}} ">
      </div>
      <div class="form-group">
        <label>Authors</label>
        <input type="text" name="authors" class="form-control {{$errors->any('authors') ? 'alert-danger' : null}} " value="{{old('authors')}} ">
      </div>

      <div class="form-group">
        <label>Genres</label>
          <select name="genre_id" id="">
              @foreach ($genres as $genre)
                  <option value="{{$genre->id}}"> {{$genre->name}}</option>
              @endforeach
          </select>
      </div>

      <div class="form-group">
        <label>Publishers</label>
          <select name="publishers_id" id="">
                @foreach ($publishers as $publisher)
                      <option value="{{$publisher->id}}">{{$publisher->name}}</option>
                @endforeach
          </select>
      </div>

      <div class="form-group">
        <label>Image</label>
        <input type="text" name="image" class="form-control {{$errors->any('image') ? 'alert-danger' : null}}" value="{{old('image') }}">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <a href="/" class="btn btn-warning">Home</a>
      @include('layouts.errors')
    </form>
</div>