<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Project;

class ProjectsController extends Controller
{
    public function index()
    {
        $projects = Project::all();

        return view('projects/projects', ['projects' => $projects]);
    }

    public function create()
    {
        return view('projects.create');
    }

    public function show()
    {

    }

    public function edit($id) //exemple.com/projects/1/edit
    {
        $project = Project::findOrFail($id);
        return view('projects.edit', compact('project'));
    }

    public function update()
    {

    }

    public function destroy()
    {

    }

    public function store()
    {
        $project = new Project;
        $project->title = request('title');
        $project->name = request('name');
        $project->description = request('description');

        $project->save();
        // Project::create(request(['title','name','description']));
        return redirect('/projects');
    }
}
