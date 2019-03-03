<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="/">Book App</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item ">
          <a class="nav-link" href="{{action('BookController@create')}}">create</a>
        </li>

        @if (!Auth::id())
        <li class="nav-item register-link">
          <a class="nav-link" href="{{ route('register') }}">Register</a>
        </li>
        <li class="nav-item login-link">
          <a class="nav-link" href="{{ route('login') }}">Login</a>
        </li>
        @endif

      </ul>
  </nav>


