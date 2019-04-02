<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/student' , 'StudentController@index');
Route::get('/student/{slug}' , 'StudentController@show');
Route::post('/student/{slug}' , 'StudentController@store');

Route::resource('student', 'StudentController');



Auth::routes();
