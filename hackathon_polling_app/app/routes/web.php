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

// Route::get('/poll/create', 'PollController@create')->name('create');
// Route::post('/poll/store', 'PollController@store')->name('store');
// Route::get('/poll/index', 'PollController@index')->name('index');
// Route::get('/poll/delete/{id}', 'PollController@destroy')->name('delete')->where(['id' => '\d+']);

Route::get('/', function(){
    return view('welcome');
});

Route::resource('/resource', 'ResourceController')->except('create','store');
Route::resource('/poll', 'PollController');

Auth::routes();


Route::get('/home', 'HomeController@index')->name('home');



