<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    public function Students()
    {
        return $this->belongsToMany(Students::class);
    }
}
