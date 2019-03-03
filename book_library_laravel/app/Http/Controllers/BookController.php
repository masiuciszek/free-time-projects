<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Book;
use App\Genre;
use App\Publisher;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $genre = Genre::all();
        $publisher = Publisher::all();
        $books = Book::orderBy('id', 'desc')->take(100)->get();
        return view('book.index', compact('books','genre','publisher'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $genres = Genre::all();
        $publishers = Publisher::all();
        return view('book.create', compact(['genres', 'publishers']));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $attr = $request->validate([
            'title' => ['required', 'min:2', 'max:20'],
            'authors' => ['required', 'min:2', 'max:40'],
            'image' => ['required', 'min:2', 'max:175'],
            'genre_id' => ['required', 'integer'],
            'publisher_id' => ['required', 'integer'],
        ]);

        // $books = Book::create($request->all());
        $books = Book::create($attr);
        return redirect('/books');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $book = Book::findOrFail($id);
        return view('book.show', compact('book'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $publishers = Publisher::all();
        $genres = Genre::all();
        $book = Book::findOrFail($id);
        return view('book.edit', compact(['book', 'genres', 'publishers']));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $book = Book::findOrFail($id);
        $book = $book->update($request->all());
        // $book = $book->update($request(['title','authors','image','genres', 'publisher_id']));

        return redirect('/books');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $book = Book::findOrfail($id);
        $book->delete();

        return redirect('/books');
    }
}
