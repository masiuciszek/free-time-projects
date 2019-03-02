<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $table = 'books';

    protected $fillable = ['title', 'authors', 'image',  'genre_id','publisher_id'];


    public function genre()
    {
        return $this->belongsTo(Genre::class);
    }

    public function publisher()
    {
        return $this->belongsTo(Publisher::class, 'publisher_id');
    }
}
