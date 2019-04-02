<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Student;
use App\Detention;

class StudentController extends Controller
{

    public function index()
    {

        $students = Student::orderBy('name', 'ASC')->get();
        return view('student.index', compact('students'));
    }

    public function create()
    {
        $detentions = Detention::all();

        return view('student.show', compact(['detentions']));
    }


    public function store(Request $request)
    {

        $detentions = Detention::create($request->all());
        return redirect(action('StudentController@index'));
    }

    public function show($student_slug)
    {
        $detentions = Detention::all();
        $student = \App\Student::where('slug', $student_slug)->first();

        if (!$student) {
            abort(404, 'Student not found');
        }

        $view = view('student/show', compact('detentions'));
        $view->student = $student;
        return $view;
    }




}
