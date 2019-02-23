<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    // protected $fillable = [
    //     'title' , 'name', 'description'
    // ];

    // the oposite to fillable is guarded
    protected $guarded = [];

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }
}
