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

    public function addTask($task)
    {
        // beacause we have already a relationship to the
        $this->tasks()->create($task);
        // return Task::create([
        //     'project_id' => $this->id,
        //     'description' =>  $description
        // ]);
    }
}
