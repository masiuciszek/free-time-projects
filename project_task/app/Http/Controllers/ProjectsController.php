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

    public function show(Project $project)
    {

        return view('projects.show', ['project' => $project]);
    }

    public function edit(Project $project) //exemple.com/projects/1/edit
    {
        // $project = Project::findOrFail($id);
        return view('projects.edit', compact('project'));
    }

    public function update(Project $project)
    {
        $project->update(request(['title', 'name', 'description']));
        // same as code below

        // $project->title = request('title');
        // $project->name = request('name');
        // $project->description = request('description');
        // $project->save();

        return redirect('/projects');
    }

    public function destroy(Project $project)
    {
        // $project = Project::findOrFail($id);
        $project->delete();

        return redirect('/projects');
    }

    public function store()
    {
        Project::create(request(['title','name','description']));
             // same as the code down

        // $project = new Project;
        // $project->title = request('title');
        // $project->name = request('name');
        // $project->description = request('description');

        // $project->save();
        // Project::create(request(['title','name','description']));
        return redirect('/projects');
    }
}
