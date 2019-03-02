<div class="container">
  <form method="post" action="{{url('/books')}}">
      @csrf
      <div class="form-group">
        <label>Title</label>
        <input type="text" name="title" class="form-control">
      </div>
      <div class="form-group">
        <label>Authors</label>
        <input type="text" name="authors" class="form-control">
      </div>
      <div class="form-group">
        <label>Image</label>
        <input type="text" name="image" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <a href="/" class="btn btn-warning">Home</a>
    </form>
</div>